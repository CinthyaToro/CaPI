# CeSoTe — AMFE de proceso y plan de control de la ruta base (DP-02)

| Código | Versión | Fecha | Estado | Semáforo |
|---|---|---|---|---|
| CeSoTe-AMFE-01 | 0.1 | 05/10/2026 | Ejercicio · borrador | 🟢 verde (público) |

| Elaboró | Revisó | Aprobó |
|---|---|---|
| J (jefa del grupo, perfil ficticio) con E, R, F y Q · redactado por Claude (IA) a pedido de Cinthya Toro | — | — |

> **Fuentes:**
> - ruta DP-02 de `CeSoTe_FlujoProyecto_v0.html`: los pasos y sus controles;
> - Ishikawa `CeSoTe_Ishikawa_v0.html` (CeSoTe-ISH-01): las 19 causas, citadas como c01…c19;
> - el esqueleto exportado por la herramienta ("AMFE de proceso, esqueleto .csv").
>
> **Paso DiDe:** Ishikawa → **AMFE de proceso y plan de control** → WBS (decisión de la autora del 05/10/2026).
>
> **Aviso:** ejercicio con perfiles ficticios. Las puntuaciones son las de J y el equipo; hay que revisarlas con datos
> de los primeros lotes.

## Cómo se lee

El AMFE (análisis de modos de falla y efectos) toma **cada paso de la ruta** y pregunta tres cosas:
1. ¿qué puede salir mal (**modo de falla**)?
2. ¿qué le pasa a la celda o al dato si sale mal (**efecto**)?
3. ¿por qué saldría mal (**causa**)?

Las causas vienen del Ishikawa: el Ishikawa encuentra las causas y el AMFE las ubica en un paso y las prioriza.

Cada fila tiene tres puntajes de 1 a 10:

| Puntaje | 9–10 | 7–8 | 4–6 | 1–3 |
|---|---|---|---|---|
| **S** (severidad del efecto) | Invalida los datos de calificación o hay riesgo para las personas | Pérdida grande de eficiencia, o un dato erróneo | Pérdida moderada | Menor |
| **O** (ocurrencia de la causa) | Casi siempre | Frecuente: hoy no hay control | Ocasional | Rara |
| **D** (detección) | No se detecta | Se detecta tarde, al medir la celda terminada | Se detecta en el paso, con un método no validado | Se detecta en el paso, con un método validado |

**NPR** = S × O × D (número de prioridad de riesgo). **Regla de J:** se actúa siempre que S ≥ 9 o NPR ≥ 150.

> **Nota de J:** el manual AIAG-VDA (2019) reemplaza el NPR por una "prioridad de acción" que pesa más la
> severidad. Para un grupo que empieza alcanza con el NPR más la regla S ≥ 9. La prioridad de acción conviene
> adoptarla cuando el equipo tenga práctica.

## AMFE de proceso

Ordenado por paso. Las filas en **negrita** superan el umbral.

| Paso | Modo de falla | Efecto | S | Causa (Ishikawa) | O | Control actual | D | NPR |
|---|---|---|---|---|---|---|---|---|
| **Todos** | **Un paso se ejecuta sin especificación escrita** | **La corrida no se puede repetir ni comparar** | 7 | **Recetas no escritas (c02)** | 8 | Ninguno | 5 | **280** |
| **Todos** | **Cada operador hace el paso distinto** | **Dispersión entre lotes que no se puede explicar** | 6 | **Operador (c16)** | 6 | Ninguno | 6 | **216** |
| **1 Identificación** | **Wafer sin código o con la hoja de ruta incompleta** | **Sus datos no sirven para calificar** | 8 | **Sin hoja de ruta (c01)** | 7 | Ninguno | 4 | **224** |
| 2 Recepción | Entra un wafer fuera de especificación | Baja eficiencia atribuida al proceso | 6 | Lotes distintos del proveedor (c09) | 5 | Certificado del proveedor | 3 | 90 |
| **3 Limpieza y texturizado** | **Contaminación metálica residual** | **Baja el tiempo de vida y la Voc** | 7 | **Agua y químicos (c10); bancos compartidos (c19)** | 5 | Ninguno | 6 | **210** |
| 3 Limpieza y texturizado | Textura no uniforme | Reflectancia alta, baja Isc | 5 | Ventana no fijada | 6 | Reflectancia | 3 | 90 |
| **3 → 4** | **Espera larga entre la limpieza y la difusión** | **Superficie contaminada u oxidada antes de difundir** | 6 | **Tiempo de espera no registrado (c17)** | 5 | Ninguno | 7 | **210** |
| 4 Difusión | Resistencia de lámina fuera de ventana | Baja FF o Voc | 7 | Ventana no determinada (c03); perfil del horno (c06); dopante (c11) | 7 | 4 puntas en cada wafer | 3 | 147 |
| 5 Bordes | Aislamiento incompleto | Resistencia en paralelo baja, baja FF | 6 | Criterio no objetivo | 4 | Hidrofobicidad | 5 | 120 |
| 6 Antirreflejo | Espesor o índice fuera de ventana | Reflectancia alta | 5 | Ventana no fijada | 5 | Elipsometría | 2 | 50 |
| 7 Contacto trasero | Aleado no uniforme | Resistencia serie alta | 6 | Ventana no fijada | 4 | Visual | 5 | 120 |
| 8 Contacto frontal | Espesor de dedos distinto según la posición | Resistencia serie, baja FF | 6 | Posición en el portamuestras (c07) | 6 | Perfilómetro sobre testigos | 4 | 144 |
| 8 Contacto frontal | *Lift-off* incompleto | Cortocircuito: celda inservible | 8 | Proceso de *lift-off* | 3 | Microscopio | 3 | 72 |
| **9 Recocido** | **Perfil térmico distinto del programado** | **Contacto pobre o perforación del emisor** | 7 | **Perfil sin fijar (c04); horno sin calibrar** | 6 | Termocupla (sin calibrar) | 4 | **168** |
| 10 Área | Área medida con distinto criterio | Eficiencia informada errónea | 8 | Criterio de área (c14) | 4 | Patrón de medida | 3 | 96 |
| **11 Medición I-V** | **Incertidumbre de medición no declarada** | **No se puede decidir R2: no se sabe si varía el proceso o la medición** | 8 | **Incertidumbre no declarada (c13)** | 8 | Ninguno | 8 | **512** |
| **11 Medición I-V** | **Referencia sin calibración trazable vigente** | **Toda la eficiencia informada queda sin respaldo** | **9** | **Calibración vencida o ausente (c12)** | 5 | Certificado | 4 | **180** |
| 11 Medición I-V | Deriva de la lámpara o temperatura no controlada | Variación de medición confundida con variación de proceso | 8 | Lámpara (c08); temperatura (c15) | 6 | Celda testigo en cada sesión | 3 | 144 |
| Sala | Partículas o humedad fuera de clase | Defectos y dispersión | 5 | Sin monitoreo (c18) | 4 | Ninguno | 7 | 140 |

**Causa del Ishikawa que no entra en ningún paso:** c05, "no está acordado qué es una celda buena". No es una falla
de un paso sino un requisito que falta. Va a la especificación de la celda (`drq.spc`) y es **requisito previo de
todo el AMFE**: sin criterio de aceptación no se puede puntuar ninguna severidad.

## Acciones (las que superan el umbral)

| # | Acción | Fila (NPR) | Responsable | Cómo se verifica |
|---|---|---|---|---|
| A1 | Estudio de repetibilidad y reproducibilidad de la medición I-V **antes del lote 1**; declarar la incertidumbre | 11 · c13 (512) | F | Informe con la incertidumbre; D baja a 3 |
| A2 | Especificación provisoria de cada paso (SOP v0), aunque la ventana todavía no esté fijada | Todos · c02 (280) | Q | Un SOP por paso de la ruta |
| A3 | Hoja de ruta obligatoria desde el lote 1 (exportada de la herramienta); ningún wafer avanza sin el registro del paso anterior | 1 · c01 (224) | J | 100 % de wafers con hoja completa |
| A4 | Registrar quién operó cada paso; formación por paso para doctorandos | Todos · c16 (216) | J | Columna operador en la hoja de ruta |
| A5 | Registrar la resistividad del agua en cada corrida; uso exclusivo de los bancos o registro de uso | 3 · c10, c19 (210) | E | Registro por corrida |
| A6 | Registrar la hora de salida y de entrada entre pasos; fijar una espera máxima | 3→4 · c17 (210) | Q | Campo en la hoja de ruta |
| A7 | Certificado vigente de la celda de referencia; celda testigo en cada sesión | 11 · c12 (180, S = 9) | F | Certificado y registro de la testigo |
| A8 | Calibrar la termocupla de perfil; lote dividido de recocido con wafer testigo | 9 · c04 (168) | Q | Perfil medido; ventana documentada |

**Lectura de J:** los tres riesgos más altos no son del horno ni de la química. Son **no saber cuánto varía la
medición, no escribir las recetas y no registrar cada wafer**. Es el mismo resultado del Ishikawa, ahora con
números. Primero se ordena la casa (A1 a A4) y recién después tiene sentido buscar ventanas con lotes divididos.

## Plan de control (de prototipo)

**Por qué "de prototipo", según J:** el manual de AIAG distingue tres planes de control (prototipo, prelanzamiento y
producción). En la Fase 1 corresponde el de prototipo: se mide **todo** en **cada** wafer, porque todavía no se
conoce la variación. Cuando la ruta se congele, la frecuencia se baja con datos.

| Paso | Característica | Tipo | Método y referencia | Criterio | Frecuencia | Registro | Plan de reacción |
|---|---|---|---|---|---|---|---|
| 1 | Código y hoja de ruta | Verificación | Registro de la línea | 100 % | Cada wafer | Hoja de ruta | No entra a la ruta |
| 2 | Resistividad y espesor | Verificación | Certificado + muestra propia | Especificación de insumos | Cada lote de compra | Hoja de ruta | Rechazar el lote |
| 3 | Resistividad del agua (A5) | Verificación | Resistivímetro calibrado | A fijar | Cada corrida | Hoja de ruta | Detener la limpieza |
| 3 | Reflectancia | Verificación | Patrón de reflectancia calibrado | Pendiente (lote dividido) | Cada wafer | Hoja de ruta | Retexturizar o descartar |
| 3→4 | Tiempo de espera (A6) | Verificación | Reloj de la hoja de ruta | Máximo a fijar | Cada wafer | Hoja de ruta | Repetir la limpieza |
| 4 | Resistencia de lámina | Verificación | 4 puntas; oblea patrón | Pendiente (lote dividido) | Cada wafer | Hoja de ruta | Wafer en espera; análisis de causa |
| 5 | Remoción y aislamiento | Verificación | Hidrofobicidad; fotos patrón | Criterio escrito | Cada wafer | Hoja de ruta | Repetir el paso |
| 6 | Espesor e índice | Verificación | Elipsometría; muestra conocida | Pendiente | Cada wafer | Hoja de ruta | Reprocesar |
| 7 | Uniformidad del aleado | Verificación | Criterio escrito; estructura de prueba | Pendiente | Cada wafer | Hoja de ruta | Descartar |
| 8 | Ancho y espesor de dedos | Verificación | Microscopio y perfilómetro calibrados | Pendiente | Cada wafer y posición | Hoja de ruta | Reprocesar |
| 9 | Perfil térmico | Calibración | Termocupla de perfil calibrada (A8) | Pendiente | Cada corrida | Hoja de ruta | Ajustar el perfil |
| 10 | Área | Verificación | Patrón de medida | ± tolerancia | Cada celda | Hoja de ruta | Recalcular la eficiencia |
| 11 | I-V y eficiencia | Validación | Simulador clasificado; referencia trazable; testigo (A1, A7) | Testigo dentro de la incertidumbre | Cada celda; testigo en cada sesión | Hoja de ruta | Detener y recalibrar |

## Hallazgos para las herramientas

1. **Usé la exportación de la herramienta.** El esqueleto de AMFE que exporta la herramienta de flujo trajo los
   pasos y los controles actuales; faltaron los modos de falla, los efectos y las causas, que salieron del Ishikawa.
2. **Falta unir el Ishikawa con la ruta.** Si cada causa del Ishikawa tuviera un campo "paso de la ruta", el AMFE
   podría prellenar la columna Causa. Es la mejora 3 del Ishikawa, ya anotada.
3. **El plan de control salió casi entero de la ruta.** Los únicos agregados fueron las acciones nuevas (A5, A6) y
   las frecuencias. La herramienta podría proponer la frecuencia "cada wafer" por defecto cuando la escala es
   laboratorio.
4. **Una herramienta AMFE interactiva** (con puntajes, NPR, filtros y acciones con responsable) sería la siguiente en
   construir, con el mismo formato que el Ishikawa y el flujo.
