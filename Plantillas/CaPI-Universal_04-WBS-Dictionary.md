# Paso 4 — WBS Dictionary CaPI-Universal
> **Para la IA que facilita este paso:**
> Este paso requiere el WBS Constructible (Paso 3) ya completado.
> La WBS Dictionary es la **base de datos del proyecto**: convierte el árbol visual en una tabla estructurada.
> Tu rol es ayudar al participante a completar la tabla maestra y verificar su consistencia.
> Esta tabla es la fuente de verdad que alimenta los Pasos 5 (Ishikawa), 6 (BIM) y las patentes.

---

## ¿Qué es la WBS Dictionary?

Según PMBOK: *un documento que define cada elemento de la WBS de forma única e inequívoca, sirviendo como fuente de verdad para todo el proyecto.*

En DiDe: **la WBS Dictionary es la columna vertebral documental.** Si alguien dice `drs.cal`, va a la Dictionary y encuentra: qué es, qué hace, cómo se hace, quién es su padre, qué hijos tiene, qué normas aplican, qué KPIs lo validan.

### La Dictionary alimenta todo lo que sigue

| Paso siguiente | Cómo usa la Dictionary |
|---|---|
| **Paso 5 — Ishikawa** | Sobre cada globito crítico se hace un Ishikawa. El acrónimo es el "esqueleto del pez". |
| **Paso 6 — BIM** | La Dictionary es la tabla principal de la base de datos BIM. Cada fila = un registro con sus relaciones. |
| **SOPs** | Se nombran como `SOP-<acrónimo>-vN` (ej: `SOP-drs.cal-v1`). |
| **Patentes** | Las reivindicaciones referencian componentes por acrónimo. Trazabilidad legal completa. |
| **Auditorías ISO 9001** | La Dictionary es el documento maestro (cumple cláusula 7.5: información documentada). |

---

## Formato de la tabla maestra

### Columnas obligatorias (todos los globitos)

| Columna | Regla |
|---|---|
| **Acrónimo** | Convención α: 3 letras minúsculas, consonantes, punto entre niveles. Nivel 0 libre. |
| **Nivel** | Número entero. Empieza en 0 (raíz). |
| **Padre** | Acrónimo del padre. Vacío solo para Nivel 0. |
| **Nombre completo** | Sentence case, sin punto final. Verbo + objeto cuando sea acción. |
| **QUÉ** | 1-2 líneas. Función abstracta. Invariante. |
| **CÓMO** | 1-3 líneas. Mecanismo concreto. Puede evolucionar a SOP. |
| **Descomponible** | Sí / No. Si Sí, hay hijos en niveles inferiores. Si No, es work package terminal. |

### Columnas extendidas (solo globitos complejos o críticos)

| Columna | Cuándo se completa |
|---|---|
| **IDEF0_Entradas** | Globitos con múltiples insumos de entrada |
| **IDEF0_Salidas** | Globitos con entregables formales |
| **IDEF0_Controles** | Globitos regulados por normas (ISO, SOP) |
| **IDEF0_Mecanismos** | Globitos con equipos/personas/software específicos |
| **VModel_Criterio** | Globitos con validación obligatoria |
| **VModel_KPI** | Globitos con indicador medible |
| **VModel_Test** | Globitos con test asociado |
| **Doc_Asociado** | Path al SOP, plano, hoja de datos, paper, patente |

---

## Plantilla de tabla maestra (Markdown)

Copiá esta plantilla y completala para tu proyecto:

```markdown
# WBS Dictionary — Proyecto [NOMBRE]
*Versión: 1.0 | Fecha: [DD/MM/AAAA] | Autor: [nombre]*

## Tabla maestra

| Acrónimo | Nivel | Padre | Nombre completo | QUÉ | CÓMO | Descomponible |
|---|---|---|---|---|---|---|
| [PRY] | 0 | — | | | | Sí |
| [xyz] | 1 | [PRY] | | | | Sí/No |
| [xyz] | 1 | [PRY] | | | | Sí/No |
| [xyz.abc] | 2 | [xyz] | | | | Sí/No |
| [xyz.abc] | 2 | [xyz] | | | | Sí/No |
```

---

## Ejemplo: ReDi WBS Dictionary (completa hasta Nivel 2 de drs)

> **Nota:** los valores numéricos de este ejemplo (concentraciones, rpm, espesores) son inventados. Sólo muestran el nivel de detalle esperado.

| Acrónimo | Nivel | Padre | Nombre completo | QUÉ | CÓMO | Descomp. |
|---|---|---|---|---|---|---|
| **ReDi** | 0 | — | Red de Difracción | Producir dispositivo óptico que difracta luz en patrones controlados | Diseñar patrón → seleccionar sustrato → preparar resina → depositar → transferir → inspeccionar | Sí |
| **dsñ** | 1 | ReDi | Diseño del patrón | Definir el patrón de líneas a transferir al sustrato | Diseño digital → iteración versión n → exportar negativo final | Sí |
| **str** | 1 | ReDi | Elección de sustrato | Elegir el material base del dispositivo | Comparar Si rígido vs mylar flexible según criterios de aplicación | No |
| **ers** | 1 | ReDi | Elección de resina | Elegir y preparar la resina fotosensible | Resina + solvente + dilución según espesor objetivo | No |
| **drs** | 1 | ReDi | Depósito de resina | Aplicar capa uniforme de resina sobre sustrato | Spin coating + control rpm/tiempo + medición espesor | Sí |
| **tpl** | 1 | ReDi | Transferencia del patrón | Trasladar el patrón al sustrato con resina | Exposición + revelado + lavado | Sí |
| **isp** | 1 | ReDi | Inspección | Validar resultado de cada etapa crítica | Inspección óptica y medición de cada etapa crítica + registro en planilla | Sí |
| **drs.prp** | 2 | drs | Preparar solución de resina | Obtener resina lista para depositar | Diluir SU-8 2050 con ciclopentanona 1:1, agitar, dejar reposar | No |
| **drs.cal** | 2 | drs | Calibrar spin coater | Asegurar 3000 ± 30 rpm reproducible antes de cada serie | Medir con tacómetro óptico, ajustar potenciómetro, repetir hasta 3 mediciones en rango | No |
| **drs.dep** | 2 | drs | Ejecutar depósito | Aplicar capa uniforme con parámetros calibrados | Pipetear 200 μL, spin 3000 rpm × 30 s, soft bake 65°C × 5 min | No |
| **drs.med** | 2 | drs | Medir espesor | Verificar 2.0 ± 0.1 μm | Perfilómetro en 5 puntos, registro en planilla con firma | No |

---

## Convención de namespace

Todos los sub-componentes llevan el prefijo del padre:

```
ReDi                  ← Nivel 0 (libre)
├── drs               ← Nivel 1 (3 letras)
│   ├── drs.prp       ← Nivel 2 (padre.3letras)
│   ├── drs.cal       ← Nivel 2
│   ├── drs.dep       ← Nivel 2
│   └── drs.med       ← Nivel 2
└── tpl               ← Nivel 1
    ├── tpl.xxx       ← Nivel 2 (pendiente)
    └── tpl.yyy       ← Nivel 2 (pendiente)
```

**Ventaja para BIM:** filtrar `drs.*` en una base de datos devuelve todos los componentes del depósito de resina. Filtrar `*.cal` devuelve todas las calibraciones del proyecto. Trazabilidad inmediata.

---

## Autochequeo de consistencia (para la IA facilitadora)

Antes de declarar la Dictionary completa, verificar:

- [ ] Todos los globitos del diagrama Paso 3 están en la tabla.
- [ ] Cada fila tiene las 7 columnas obligatorias completas.
- [ ] La columna "Padre" es consistente con el árbol (no hay padres inexistentes).
- [ ] No hay acrónimos duplicados en todo el proyecto.
- [ ] Los globitos con `Descomponible = Sí` tienen filas de hijos en la tabla.
- [ ] Los globitos con `Descomponible = No` no tienen filas de hijos.
- [ ] Los globitos críticos tienen columnas extendidas completas.
- [ ] Hay un solo archivo "fuente de verdad" (no copias divergentes).

---

## Checklist de autocontrol Paso 4

- [ ] Todos los globitos del Paso 3 están en la Dictionary.
- [ ] Cada fila tiene Acrónimo, Nivel, Padre, Nombre, QUÉ, CÓMO, Descomponible.
- [ ] La columna "Padre" es consistente con el árbol jerárquico.
- [ ] No hay acrónimos duplicados.
- [ ] Los globitos críticos tienen IDEF0 + V-Model completos.
- [ ] La tabla está guardada en formato editable (Markdown, Excel o ambos).
- [ ] Está claro cuál es la "fuente de verdad".

---

*Paso 4 de DiDe — CaPI-Universal*
