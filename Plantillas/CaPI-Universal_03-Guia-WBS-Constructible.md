# Paso 3 — WBS Constructible CaPI-Universal
> **Para la IA que facilita este paso:**
> Este paso requiere el A3 (Paso 2) ya completado.
> Tu rol es ayudar al participante a descomponer su proyecto en globitos QUÉ-CÓMO,
> verificar la regla 100% en cada nivel, y generar el código Mermaid del Nivel 1.
> El entregable es: diagrama Mermaid renderizable + tabla de 2 niveles.
> Los IFs NO van en la WBS. Si el participante los incluye, redirigilo.

---

## ¿Por qué un WBS Constructible y no uno normal?

Un WBS clásico responde una sola pregunta por globito: *¿qué hay que hacer?*
Un **WBS Constructible** responde dos:

| Pregunta | Qué obtenés |
|---|---|
| **QUÉ** | Función abstracta: qué se logra. **Invariante** — no cambia aunque cambie el equipo o el laboratorio. |
| **CÓMO** | Mecanismo concreto: cómo se logra. **Contingente** — evoluciona a SOP en la implementación. |

El truco: **el CÓMO de un nivel se convierte en el QUÉ del siguiente nivel.**
Eso hace que la estructura sea **fractal**: la misma forma QUÉ-CÓMO se repite en cada nivel de zoom.

---

## El principio fractal

```
Nivel 0 — QUÉ: [función del proyecto completo]
Nivel 0 — CÓMO: [componente A] + [componente B] + [componente C]
                        ↓ el CÓMO se vuelve el QUÉ del siguiente nivel
Nivel 1 — QUÉ de [componente A]: [su función específica]
Nivel 1 — CÓMO de [componente A]: [sub-componente A1] + [sub-componente A2]
                        ↓ y así sucesivamente
```

**Punto de parada natural:**
> El zoom se detiene cuando el CÓMO se puede escribir en ≤ 3 líneas y un técnico salido del secundario técnico puede ejecutarlo con un SOP sin preguntar nada más. Ese globito es un **work package terminal**.

---

## Regla del 100%

> La suma de los QUÉ de los hijos = el CÓMO del padre. Ni más, ni menos.

**Autochequeo:** mirá el CÓMO del padre. Contá los verbos/acciones independientes. Ese número es la cantidad de hijos que debe tener. Si no coincide, algo falta o sobra.

---

## Los IFs no van en la WBS

Los IFs (decisiones, reintentos, bifurcaciones) van:
- **Dentro del CÓMO** del globito, si el reintento es parte normal de esa tarea.
- **En un diagrama BPMN separado** si el flujo de control es complejo y crítico.

La WBS responde *"qué hay en el proyecto"* (estructura).
El BPMN responde *"en qué orden y bajo qué condición"* (flujo de ejecución).
Son complementarios, no intercambiables.

---

## Convención de acrónimos

**Convención α (obligatoria en CaPI):**
- 3 letras minúsculas, consonantes priorizadas, pronunciables.
- Jerarquía con punto: `drs.cal` = Nivel 2, hijo de `drs`.
- Proyecto raíz: longitud libre (`SincLE`, `ReDi`, `CaPI`).

**Reglas adicionales:**
1. El acrónimo debe poder pronunciarse (no `PMVDV`).
2. Todos los sub-componentes llevan el prefijo del padre: `drs.prp`, `drs.cal`, `drs.dep`, `drs.med`.
3. Cada acrónimo es único dentro del proyecto.

**Ejemplos:**
- `FaBriCación` → `fbc` (primeras consonantes)
- `DiSeño` → `dsñ`
- `Depósito de ReSina` → `drs`
- `drs` → Nivel 2: `drs.prp`, `drs.cal`, `drs.dep`, `drs.med`

---

## La ficha WBS de cada globito

### Vista mínima (siempre visible)

```
Acrónimo:  xyz
Nombre:    Nombre completo del globito
Padre:     acrónimo del padre (vacío si Nivel 0)
Nivel:     N

QUÉ:   Función abstracta (1-2 líneas)
CÓMO:  Mecanismo concreto (1-3 líneas)

¿Se puede descomponer más?   [ ] Sí   [ ] No
```

### Vista expandida (solo para globitos complejos o críticos)

```
IDEF0:
  📥 Entradas:    insumos que el globito recibe
  📤 Salidas:     entregables que el globito produce
  🎯 Controles:   normas, restricciones, criterios
  🛠️ Mecanismos:  recursos: equipos, personas, software

VALIDACIÓN V-Model:
  ✅ Criterio de aceptación:
  📊 KPI:
  🧪 Test asociado:
```

| Tipo de globito | Qué completar |
|---|---|
| Simple | Solo vista mínima |
| Complejo | Vista mínima + IDEF0 |
| Crítico (patentable, regulatorio) | Vista mínima + IDEF0 + V-Model |

---

## Construyendo el WBS paso a paso

### Paso 3.1 — Definir el Nivel 0 (proyecto raíz)

Completá la ficha mínima del proyecto completo:
- **Acrónimo:** `[PRY]`
- **QUÉ:** ¿Qué logra el proyecto en una oración?
- **CÓMO:** ¿Cómo lo logra? (listá los grandes bloques separados por →)

### Paso 3.2 — Listar los hijos del Nivel 1

Cada verbo/bloque del CÓMO del Nivel 0 = 1 hijo del Nivel 1.
Asignales acrónimos con la Convención α.
Verificá la Regla del 100%.

### Paso 3.3 — Ficha de cada hijo del Nivel 1

Para cada hijo: QUÉ + CÓMO + ¿Se puede descomponer?

### Paso 3.4 — Descomponer los hijos que lo necesiten (Nivel 2)

Aplicar los mismos pasos 3.1-3.3 para cada hijo que tenga "Sí" en "¿Se puede descomponer?".

### Paso 3.5 — Generar el diagrama Mermaid

```
flowchart TD
    PRY[/PRY: nombre del proyecto/]:::titulo

    aaa[aaa: nombre globito 1]:::proceso
    bbb[bbb: nombre globito 2]:::proceso
    ccc{{ccc: nombre globito validación}}:::medicion

    PRY --> aaa
    aaa --> bbb
    bbb --> ccc

    click aaa "./pry_aaa_nivel2.html" "Ver Nivel 2 de aaa"
    click bbb "./pry_bbb_nivel2.html" "Ver Nivel 2 de bbb"

    classDef titulo  fill:#EEEDFE,stroke:#534AB7,color:#26215C
    classDef proceso fill:#FAECE7,stroke:#993C1D,color:#4A1B0C
    classDef medicion fill:#FAEEDA,stroke:#854F0B,color:#412402
```

**Formas Mermaid disponibles:**
- `[texto]` = rectángulo (proceso normal)
- `[/texto/]` = paralelogramo (entrada/insumo)
- `{{texto}}` = hexágono (validación/inspección)
- `([texto])` = cápsula (título de sección)
- `[(texto)]` = cilindro (base de datos/documento)

**Dónde renderizar:** https://mermaid.live (gratis, sin instalación)

---

## Nota sobre planificación vs. implementación

En el Paso 3 escribimos los CÓMO al nivel de abstracción que conocemos hoy.
Cuando lleguemos al equipo real, los CÓMO se aterrizan en SOPs específicos por equipo.

**Los QUÉ permanecen idénticos.** Esa estabilidad es lo que permite cambiar de laboratorio sin reescribir el proyecto entero.

El mismo globito tiene versiones más abstractas o más concretas según la etapa del proyecto.
**Fractal en abstracción**, no solo en jerarquía.

---

## Ejemplo: ReDi (Red de Difracción) — Nivel 1

> **Nota:** los valores numéricos de este ejemplo (concentraciones, rpm, espesores) son inventados. Sólo muestran el nivel de detalle esperado.

| Acrónimo | Nivel | Padre | Nombre | QUÉ | CÓMO | Descomp. |
|---|---|---|---|---|---|---|
| ReDi | 0 | — | Red de Difracción | Producir dispositivo óptico que difracta luz en patrones controlados | Diseñar patrón → seleccionar sustrato → preparar resina → depositar → transferir → inspeccionar | Sí |
| dsñ | 1 | ReDi | Diseño del patrón | Definir el patrón de líneas a transferir | Diseño digital → iteración versión n → exportar negativo | Sí |
| str | 1 | ReDi | Elección de sustrato | Elegir el material base | Comparar Si rígido vs mylar flexible según criterios de aplicación | No |
| ers | 1 | ReDi | Elección de resina | Elegir y preparar resina fotosensible | Resina + solvente + dilución según espesor objetivo | No |
| drs | 1 | ReDi | Depósito de resina | Aplicar capa uniforme sobre sustrato | Spin coating + control rpm/tiempo + medición espesor | Sí |
| tpl | 1 | ReDi | Transferencia del patrón | Trasladar patrón al sustrato con resina | Exposición + revelado + lavado | Sí |
| isp | 1 | ReDi | Inspección | Validar resultado de cada etapa crítica | Inspección óptica y medición de cada etapa crítica + registro en planilla | Sí |

---

## Checklist de autocontrol Paso 3

- [ ] Cada globito tiene Acrónimo, QUÉ y CÓMO definidos.
- [ ] Los acrónimos siguen la Convención α.
- [ ] Cada acrónimo es único dentro del proyecto.
- [ ] Regla 100%: suma de QUÉ hijos = CÓMO padre (en cada nivel).
- [ ] No hay globitos vacíos o decorativos.
- [ ] Los globitos terminales tienen un CÓMO ejecutable por técnico secundario.
- [ ] No hay IFs en los globitos (van dentro del CÓMO o en BPMN separado).
- [ ] El proyecto está renderizado en Mermaid con linkeo entre niveles.

---

*Paso 3 de DiDe — CaPI-Universal*
