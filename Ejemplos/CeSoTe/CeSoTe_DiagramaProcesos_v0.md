# CeSoTe — Diagrama de procesos (DiDe, paso 3)

| Código | Versión | Fecha | Estado | Semáforo |
|---|---|---|---|---|
| CeSoTe-DP-01 (proyecto) · CeSoTe-DP-02 (línea de celda) | 0.1 | 05/10/2026 | Ejercicio · borrador | 🟢 verde (público) |

| Elaboró | Revisó | Aprobó |
|---|---|---|
| Claude (asistente IA), a pedido de Cinthya Toro | — | — |

> **Fuentes:** `CeSoTe_A3_v0.md` (las 9 cajas), `CaPI_Ejercicio-CST_Encuestas-Concepto_v0.md` (pregunta 16 de E, R,
> F y Q) y `CaPI_Ejercicio-CST_Normas-Fabricacion_v0.md`. Perfiles ficticios: E = ecología, R = renovables, F =
> física, Q = química.
>
> **Decisiones de la autora (05/10/2026):** un solo diagrama para todo el equipo; la línea de celda va en un diagrama
> aparte (DP-02), unido con el símbolo de enlace; la certificación va en Validación.
>
> **Este documento es también el caso de prueba de la herramienta "Diagrama de procesos DiDe"** (todavía no
> construida). Cuando exista, estos datos pasan a su JSON.

## Símbolos (ISO 5807)

| Símbolo | Uso | En el texto |
|---|---|---|
| Terminal (óvalo) | Inicio y fin | `( )` |
| Proceso (rectángulo) | Un paso | `[ ]` |
| Datos (paralelogramo) | Entrada, salida o requisito | `/ /` |
| Documento | Un documento que se produce | `[≈]` |
| Decisión (rombo) | Pregunta SÍ/NO | `◇` |
| Enlace a otro diagrama | Sigue en otra hoja | `⇒ DP-02` |
| **Validación** (agregado DiDe) | Punto de medición que hay que validar | `✔` |

Las **etapas** (Planificación, Requisitos, etc.) son encabezados de columna, no símbolos. En el Excel de SincLE
llevaban el símbolo de inicio/fin, y eso es un uso incorrecto de la norma.

## Lectura del A3 → diagrama

| Caja del A3 | Dónde va en el diagrama |
|---|---|
| 1 Beneficiarios | Planificación: el estudio de mercado empieza por los armadores de módulos |
| 2 Problemas | Requisitos: cada problema se convierte en un requisito (trazabilidad, especificación de insumos, fin de vida) |
| 3 Propuesta de valor | Decisión en Planificación: ¿los armadores la valoran? |
| 4 Soluciones | Implementación: una rama por componente |
| 5 Canales | PMV: lo que se entrega y a quién (acuerdo con el armador, formación) |
| 6 Valor capturado | PMV: salidas (servicios, saber documentado); la PI queda como pregunta en el Ishikawa y el WBS |
| 7 Costes | Planificación: presupuesto y financiamiento |
| 8 Métricas | **Validación**: cada métrica es un punto ✔ |
| 9 Ventaja diferencial | Requisitos: transferible, certificable, modular y extensible; formación de doctorandos |

---

## DP-01 — Proyecto CeSoTe

Las etiquetas entre corchetes indican de dónde sale cada elemento: [E], [R], [F] o [Q] = perfil que lo propuso;
[CT] = lo agregó la autora, Cinthya Toro; [A3 n] = sale de la caja n del A3; [Propuesta] = lo agrego yo y hay que revisarlo.

```
( Inicio: idea CeSoTe — Concepto y A3 hechos )
        │
        ▼
1 PLANIFICACIÓN ─────► 2 REQUISITOS ─────► 3 IMPLEMENTACIÓN ─────► 4 VALIDACIÓN ─────► 5 PMV CeSoTe ─────► ( Fin )
```

### 1 · Planificación — `pln`

| # | Símbolo | Elemento | Origen | Acrónimo propuesto |
|---|---|---|---|---|
| 1.1 | `/ /` | DiDe: Concepto ✓ · A3 ✓ · Diagrama de procesos (este) · Ishikawa · WBS · Diccionario · BIM | Método | `pln.dde` |
| 1.2 | `[ ]` | Estudio de mercado (armadores, cooperativas, instaladores) | [R], [A3 1] | `pln.mrc` |
| 1.3 | `◇` | ¿Los armadores valoran la trazabilidad y la cercanía? **SÍ** → 1.4 · **NO** → revisar la caja 3 del A3 | [A3 3], [A3 9] | — (decisión: no va al WBS) |
| 1.4 | `[ ]` | Definir el producto (formato de celda, bifacial o no) | [R] | `pln.prd` |
| 1.5 | `[ ]` | Elegir la arquitectura de celda (PERC propuesta; a confirmar) | [F] | `pln.rqt` |
| 1.6 | `[ ]` | Línea base ambiental del sitio | [E] | `pln.lnb` |
| 1.7 | `[ ]` | Presupuesto y financiamiento | [A3 7] | `pln.prs` |

### 2 · Determinación de requisitos — `drq`

Como en SincLE, los requisitos van con el símbolo de datos.

| # | Símbolo | Elemento | Origen | Acrónimo propuesto |
|---|---|---|---|---|
| 2.1 | `/ /` | Especificación de celda: eficiencia y dispersión entre lotes (valores a fijar) | [F], [A3 8] | `drq.spc` |
| 2.2 | `/ /` | Trazabilidad lote a lote | [A3 3], [A3 9] | `drq.trz` |
| 2.3 | `/ /` | Huella declarada (ISO 14040/44) y plan de fin de vida | [E], [A3 2] | `drq.hll` |
| 2.4 | `/ /` | Transferible, certificable, modular y extensible | [CT], [A3 9] | `drq.prp` |
| 2.5 | `/ /` | Normas: IEC 61215/61730, 60904, 62941, 63202; ISO 14644 | [R], [F] | `drq.nrm` |
| 2.6 | `/ /` | Especificación propia de insumos (wafers, pastas, gases) | [Q], [A3 2] | `drq.nsm` |
| 2.7 | `/ /` | Inventario de químicos y gases, y seguridad química (HF, silano) | [E], [Propuesta] | `drq.qmc` |
| 2.8 | `◇` | ¿Permiso ambiental aprobado? **SÍ** → Implementación · **NO** → rediseñar efluentes y volver a presentar | [E] | — |

### 3 · Implementación — `mpl`

| # | Símbolo | Elemento | Origen | Acrónimo propuesto |
|---|---|---|---|---|
| 3.1 | `[ ] ⇒ DP-02` | **Línea de celda** (de wafer a celda clasificada) | [Q], [A3 4] | `mpl.lnc` |
| 3.2 | `[ ]` | Medición trazable: simulador clase AAA y celda de referencia calibrada | [F], [A3 4] | `mpl.mdc` |
| 3.3 | `[ ]` | Tratamiento de efluentes y lavado de gases | [E] | `mpl.flt` |
| 3.4 | `[ ]` | Mini módulo con celdas propias | [R] | `mpl.mdl` |
| 3.5 | `[ ]` | Calificación de proveedores de insumos | [Propuesta], [A3 2] | `mpl.prv` |
| 3.6 | `[ ]` | Formación de técnicos y doctorandos en sala limpia y en procesos micro y nanotecnológicos | [CT], [A3 5], [A3 9] | `mpl.frm` |

### 4 · Validación — `vld`

**La primera validación es la del método de medición (4.1).** Todo lo que viene después se mide con ese método:
si no está validado, ninguno de los resultados siguientes tiene respaldo.

| # | Símbolo | Elemento | Origen | Acrónimo propuesto |
|---|---|---|---|---|
| 4.1 | `✔` | **Validar el método de medición I-V** contra una referencia trazable (IEC 60904-2 y -4; ISO/IEC 17025) | [F], [A3 8] | `vld.mtd` |
| 4.2 | `✔` | Eficiencia y dispersión entre lotes frente a la especificación 2.1 | [F], [A3 8] | `vld.fcn` |
| 4.3 | `✔` | Degradación inducida por luz, LID y LETID (IEC 63202) | [F] | `vld.dgr` |
| 4.4 | `✔` | Calificación por subgrupos (inspirada en la ECSS-E-ST-20-08) | [F] | `vld.clf` |
| 4.5 | `✔` | Rendimiento en campo, NOA y Patagonia, durante un año | [R], [A3 8] | `vld.cmp` |
| 4.6 | `✔` | Ciclo de vida (ISO 14040/44) verificado por un tercero | [E], [A3 8] | `vld.cvd` |
| 4.7 | `✔` | Certificación del mini módulo (IEC 61215/61730), hecha por un tercero | [R] | `vld.crt` |
| 4.8 | `◇` | ¿El lote cumple la especificación? **SÍ** → PMV · **NO** → Ishikawa del lote y ajuste de la ventana de proceso en DP-02 | [Propuesta] | — |

### 5 · PMV CeSoTe — `pmv`

| # | Símbolo | Elemento | Origen | Acrónimo propuesto |
|---|---|---|---|---|
| 5.1 | `/ /` | Lote de celdas clasificadas y mini módulo | [Q], [R] | `pmv.lts` |
| 5.2 | `[≈]` | PID: manual de proceso con el diagrama DP-02 | [F], [A3 5] | `pmv.pdc` |
| 5.3 | `[≈]` | Informe de medición y calificación | [F] | `pmv.nfr` |
| 5.4 | `[≈]` | Declaración de ciclo de vida y plan de reciclado | [E] | `pmv.dcl` |
| 5.5 | `[≈]` | Acuerdo con un armador de módulos | [R], [A3 5] | `pmv.crd` |
| 5.6 | `/ /` | Técnicos y doctorandos formados | [CT], [A3 9] | `pmv.frm` |

---

## DP-02 — Línea de celda (flujo de producción)

Es lo que la ECSS llama **diagrama de flujo de producción** (PID). Cada paso tiene su **control en proceso**, y
cada control necesita una **referencia** para que la medición sea válida.

```
( Wafers recibidos )
   ▼
[1 Recepción] ✔ ─► [2 Texturizado] ✔ ─► [3 Difusión] ✔ ─► [4 Aislamiento de bordes] ✔ ─► [5 Pasivado y antirreflejo] ✔
   ─► [6 Apertura láser] ✔ ─► [7 Serigrafía] ✔ ─► [8 Cocción] ✔ ─► [9 Medición I-V y clasificación] ✔
   ▼
   ◇ ¿Lote dentro de especificación?  SÍ ─► ( Celdas clasificadas → DP-01, 3.1 )
                                      NO ─► [Ishikawa del lote] ─► ajustar la ventana del paso que corresponda
```

| # | Paso | Control en proceso ✔ | Referencia para validar la medición | Acrónimo propuesto |
|---|---|---|---|---|
| 1 | Recepción e inspección de wafers | Resistividad, espesor, tiempo de vida, visual | Certificado del proveedor contrastado con una muestra propia | `mpl.lnc.rcp` |
| 2 | Remoción de daño y texturizado alcalino | Reflectancia ponderada; pérdida de masa | Patrón de reflectancia calibrado; balanza calibrada | `mpl.lnc.txt` |
| 3 | Difusión del emisor (POCl₃) | Resistencia de lámina (cuatro puntas) | Oblea patrón de resistencia de lámina | `mpl.lnc.dfs` |
| 4 | Aislamiento de bordes y remoción del vidrio de fósforo | Remoción verificada (prueba de hidrofobicidad); aislamiento de borde | Criterio visual escrito con fotos patrón | `mpl.lnc.slm` |
| 5 | Pasivado trasero (AlOx) y antirreflejo (SiNx, PECVD) | Espesor e índice (elipsometría); tiempo de vida | Muestra patrón de espesor conocido; referencia del equipo de tiempo de vida | `mpl.lnc.psv` |
| 6 | Apertura láser trasera (propia de PERC) | Inspección óptica de la apertura | Retícula o patrón de medida calibrado | `mpl.lnc.lsr` |
| 7 | Serigrafía (Ag frontal, Al trasero) | Peso de pasta depositada; ancho de dedos | Balanza calibrada; microscopio con escala calibrada | `mpl.lnc.srg` |
| 8 | Cocción | Perfil térmico del horno; resistencia de contacto | Termocupla de perfil calibrada | `mpl.lnc.ccn` |
| 9 | Medición I-V y clasificación | Isc, Voc, FF, eficiencia; clase de potencia | **Método validado en DP-01, 4.1** | `mpl.lnc.clf` |

Profundidad: CeSoTe → `mpl` → `mpl.lnc` → `mpl.lnc.dfs` son 3 niveles debajo de la raíz; los controles ✔ serían el
4.º nivel. Entra en el límite de 4 niveles que pediste.

---

## Lo que deja ver este paso

1. **La validación no es lo mismo que medir.** Los ✔ de DP-02 son mediciones. Validar es demostrar que cada
   medición da el valor correcto contra una referencia. En el diagrama eso se ve como la columna "Referencia",
   y es lo que la herramienta debería pedir cada vez que aparece un ✔.
2. **Las decisiones no van al WBS** (lo dice la guía WBS Constructible). Por eso no tienen acrónimo.
3. **El diagrama apunta a los pasos siguientes:**
   - La decisión 4.8 lleva al **Ishikawa**, y su efecto natural es "el lote no cumple la especificación".
   - Los acrónimos de las columnas son el borrador del **WBS** y del **Diccionario**.
4. **Qué podría ser protegible:** está en las ventanas de proceso de los pasos 3, 5 y 8 (difusión, pasivado,
   cocción). En el PID se referencian sin revelarlas, como permite la ECSS (Anexo F.2.2).

## Para revisar

- Los acrónimos siguen la convención α (3 consonantes en minúscula). Algunos quedaron forzados (`pmv.lts`,
  `pmv.pdc`): se ajustan en el paso de WBS.
- La arquitectura PERC sigue sin confirmar. Si es TOPCon, cambian los pasos 3 a 6 de DP-02.
- Los ítems marcados [Propuesta] (2.7, 3.5 y 4.8) son agregados míos: el equipo los acepta o los descarta.
