# Normas ISO, IEC y ECSS sobre fabricación de celdas solares: qué procesos dejan ver

| Código | Versión | Fecha | Estado | Semáforo |
|---|---|---|---|---|
| CaPI-EJ-CST-NOR-01 | 0.1 | 05/10/2026 | Borrador para revisión | 🟢 verde (público) |

| Elaboró | Revisó | Aprobó |
|---|---|---|
| Claude (asistente IA), a pedido de Cinthya Toro | — | — |

## Respuesta corta

**Ninguna norma da la receta de fabricación.** La receta es el saber de cada fabricante. Lo que sí piden las
normas es esto:

1. **Que el flujo de fabricación esté escrito.** La ECSS lo pide de forma explícita.
2. **Qué ensayos tiene que pasar lo que sale de ese flujo.** Lo piden IEC 61215 y 61730 para módulos
   terrestres y ECSS-E-ST-20-08 para celdas espaciales.
3. **Cómo medir con trazabilidad.** Lo piden la serie IEC 60904 y la ISO 15387.

Los pasos de proceso concretos (texturizado, difusión, etc.) salen de la bibliografía y de la industria,
no de las normas.

## Hallazgo principal: ECSS-E-ST-20-08C pide un diagrama de flujo de producción

Leí la Rev.1 (18/07/2012), que está disponible en ecss.nl. La vigente es la Rev.2 (20/04/2023), y **no
verifiqué si cambió estas cláusulas**.

- **Cláusula 7.2:** el proveedor de celdas prepara un **documento de identificación de proceso (PID)**. Lo
  mantiene bajo control de configuración y cualquier cambio con impacto en calidad o confiabilidad lo tiene
  que aprobar el cliente.
- **Anexo F (contenido del PID):** lista de partes, lista de materiales, planos, **el diagrama de flujo de
  producción**, las especificaciones de cada proceso, los procedimientos de inspección, el programa de ensayos
  (con los **ensayos en proceso** y los de aceptación), la matriz de ensayos con criterios de rechazo y la
  trazabilidad.
- **F.2.2:** si un documento es confidencial o propietario, no hace falta incluirlo completo; alcanza con
  referenciarlo. **Es la misma distinción de DiDe: el flujo se muestra y la receta protegible se nombra sin
  revelarla.**
- **7.4.2.1:** antes del lote de calificación se entregan el diagrama de flujo de producción, los
  cronogramas de proceso y los procedimientos de inspección.
- **Anexo G:** los resultados de inspección en proceso se entregan **ubicados dentro del diagrama de flujo**.
- **Tabla 7-1 (aceptación de celdas):** inspección visual (100 %), dimensiones y peso, planitud, terminación
  superficial, espesor de contactos, polarización inversa (100 %), desempeño eléctrico (100 %), humedad y
  temperatura, adherencia de recubrimientos y ensayo de tracción (*pull*).
- **Tabla 7-2 (calificación):** ensayos por subgrupos: adherencia de contactos, desempeño al comienzo de la
  vida, irradiación con electrones, protones y fotones, ciclado térmico y otros.
- **7.3.2.2:** el desempeño eléctrico se mide con una fuente de luz **calibrada según la cláusula 10**, y el
  fabricante tiene que informar la exactitud de la medición. **Eso es validación.**

**Para DiDe:** el diagrama de procesos es lo que la ECSS llama diagrama de flujo de producción. Los puntos de
inspección y validación que propusimos en la decisión D3 son sus "ensayos en proceso". Es un argumento
fuerte para los clientes del curso.

## Mapa de normas

| Norma | Qué cubre | Sirve para |
|---|---|---|
| **ISO 9001** | Sistema de gestión de calidad | Base de todo lo demás |
| **IEC 62941** | Sistema de calidad para fabricar módulos FV certificados | Buenas prácticas de diseño, **procesos de fabricación** y control de materiales; supone que ya se cumple ISO 9001 |
| **IEC 61215** (series -1, -1-1, -2) | Calificación de diseño de módulos terrestres | Ensayos que tiene que pasar el módulo: ciclado térmico, calor húmedo, humedad-congelamiento, UV, punto caliente, carga mecánica, granizo |
| **IEC 61730** | Seguridad de módulos | Aislación y riesgo eléctrico |
| **IEC 60904** (-1, -2, -4, -8, -9) | Medición de dispositivos FV | Curva I-V, celdas de referencia, **trazabilidad de la calibración**, respuesta espectral, clase del simulador |
| **IEC 60891** | Correcciones de la curva I-V | Llevar las mediciones a condiciones estándar |
| **IEC 63202-1** / **IEC TS 63202-4** | Degradación inducida por luz (LID) y por luz y temperatura (LETID) en celdas de silicio | Control de producción de celdas |
| **ISO 14644-1** | Clases de limpieza de sala limpia | Clasificar las áreas de la línea |
| **ISO/IEC 17025** | Competencia de laboratorios de ensayo | Validar métodos y acreditar el laboratorio de medición |
| **ISO 14001**, **ISO 14040/14044** | Gestión ambiental y análisis de ciclo de vida | Perfil E (ecología) |
| **ECSS-E-ST-20-08C** | Celdas, ensambles y paneles FV espaciales | PID, diagrama de flujo, aceptación y calificación (ver arriba) |
| **ECSS-Q-ST-70C** | Materiales, partes mecánicas y procesos espaciales | Listas declaradas de materiales (DML), de partes mecánicas (DMPL) y de **procesos (DPL)**, que aprueba el cliente |
| **ISO 15387** / **ISO 23038** | Medición y calibración de celdas espaciales / ensayo de irradiación | Las cita la ECSS |

## Pasos típicos de una celda de silicio cristalino (tipo PERC)

Salen de la bibliografía, no de una norma. Sirven como esqueleto del diagrama de procesos:

1. Recepción e inspección de wafers.
2. Remoción de daño y texturizado.
3. Difusión del emisor.
4. Aislamiento de bordes y remoción del vidrio de fósforo o boro.
5. Pasivado y antirreflejo.
6. Apertura láser (sólo en PERC).
7. Serigrafía de contactos.
8. Cocción.
9. Medición I-V y clasificación.

Puntos de medición donde hace falta validar:
- Resistencia de lámina (después de la difusión).
- Reflectancia (después del texturizado y del antirreflejo).
- Tiempo de vida de portadores (después del pasivado).
- Curva I-V (al final).

TOPCon y heterojuntura cambian los pasos 3 a 6.

## Fuentes

- ECSS-E-ST-20-08C Rev.1 (texto leído): https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-20-08C_Rev118July2012.pdf
- ECSS-E-ST-20-08C Rev.2 (vigente): https://ecss.nl/standard/ecss-e-st-20-08c-rev-2-photovoltaic-assemblies-and-components-20-april-2023/
- ECSS-Q-ST-70C Rev.2: https://ecss.nl/wp-content/uploads/2019/10/ECSS-Q-ST-70C-Rev.2(15October2019).pdf
- IEC 62941:2019: https://scc-ccn.ca/standardsdb/standards/2045465 · https://www.vde-verlag.de/iec-normen/preview-pdf/info_iec62941{ed1.0}b.pdf
- IEC 63202-1:2019: https://webstore.iec.ch/publication/34038 · IEC TS 63202-4:2022: https://webstore.iec.ch/publication/67612
- Las demás normas IEC/ISO del mapa las cito de memoria por número y alcance general; hay que verificar la
  edición vigente antes de citarlas en un documento.
