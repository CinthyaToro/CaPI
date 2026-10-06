# CeSoTe — Recorrido DiDe de la experta (Concepto, A3, diagrama de procesos con la herramienta)

| Código | Versión | Fecha | Estado | Semáforo |
|---|---|---|---|---|
| CeSoTe-EXP-01 | 0.1 | 05/10/2026 | Ejercicio · borrador | 🟢 verde (público) |

| Elaboró | Revisó | Aprobó |
|---|---|---|
| Claude (asistente IA), a pedido de Cinthya Toro | — | — |

> **Aviso.** La experta **J** es un perfil **ficticio**, igual que E, R, F y Q. Ninguna cifra ni dato viene de una
> cohorte real. Las normas citadas se nombran por número y alcance; antes de usarlas en un documento hay que
> verificar la edición vigente.
>
> **Para qué sirve:** ver qué aporta una persona experta cuando usa las herramientas DiDe.

## La experta

**J**, doctora especializada en fabricación de celdas solares para satélites, con magíster en patentes y 20 años de
experiencia en fabricación y calificación de celdas espaciales. Conoce y usa a diario estas herramientas de calidad:
- diagrama de flujo de proceso, AMFE de proceso (PFMEA) y plan de control;
- control estadístico de procesos;
- documento de identificación de proceso (PID) con control de configuración;
- hoja de ruta por lote (*traveler*) e inspección del primer artículo;
- revisiones de proyecto según ECSS.

Entra como **jefa del grupo CeSoTe**. Le cuentan que el equipo está planificando la documentación con DiDe y que ya
tiene hechos el Concepto (E, R, F, Q), el A3 v0.1 y el diagrama de procesos v0.1.

**Lo primero que dice:**

> "Antes de completar nada: ¿qué estamos haciendo, fabricando celdas o desarrollando un proceso? No es lo mismo.
> Con lo que tenemos (lotes de pocos wafers chicos, cada paso lleva días), no somos una fábrica. Somos un grupo que
> desarrolla un proceso de fabricación. **Nuestro producto, por ahora, es el proceso, no las celdas.** Las celdas
> son la evidencia de que el proceso funciona."

### Vocabulario que fija J

| Término | Qué es | Ejemplo en CeSoTe |
|---|---|---|
| **Proceso unitario** | Un paso que transforma el material | Difusión del emisor |
| **Ruta de fabricación** (*process flow*, *traveler*) | La secuencia ordenada de procesos unitarios que convierte un wafer en una celda | DP-02 |
| **Fabricación** | Hacer el dispositivo siguiendo la ruta, **a cualquier escala**: una celda o un millón | Un lote de laboratorio |
| **Producción** | Fabricar **en serie** con la ruta **congelada** (PID aprobado), con aceptación lote a lote | La línea piloto de la Fase 2 |
| **Desarrollo de proceso** | Encontrar y fijar la ventana de cada proceso unitario hasta poder congelar la ruta | Lo que hace CeSoTe hoy |
| **Proceso** (en sentido ISO 9001 y en el diagrama DiDe) | Cualquier actividad que transforma entradas en salidas, incluso de gestión | "Estudio de mercado" en DP-01 |

| Término de medición | Pregunta que responde | Ejemplo |
|---|---|---|
| **Calibración** | ¿El instrumento da el valor del patrón? | Celda de referencia calibrada por un laboratorio acreditado |
| **Verificación** | ¿El resultado cumple lo especificado? | Resistencia de lámina dentro de la ventana |
| **Validación** | ¿Sirve para el uso previsto? | El método I-V reproduce el valor de una celda testigo conocida |
| **Calificación** | ¿El diseño o el proceso aguanta el ambiente real, con margen? | Ciclado térmico, calor húmedo, irradiación |

---

## Paso 1 — Concepto (encuesta CaPI-Universal, respuestas de J)

Fuente de las preguntas: `Plantillas/CaPI-Universal_01-Encuesta-Concepto.md` (enunciados literales, resumidos
acá por el título).

**Bloque 1 — Identificación**

1. **Nombre del proyecto:** CeSoTe — Fase 1: desarrollo de la ruta de fabricación de celdas solares terrestres a
   escala de laboratorio.
2. **Acrónimo:** CeSoTe (se mantiene).
3. **Frase:** "CeSoTe: cada celda con su historia escrita, del primer wafer a la línea."
4. **Autora y contacto:** [ficticio]. Jefa del grupo CeSoTe.

**Bloque 2 — Filtros posibilitantes**

5. **Alcance:** en la Fase 1, el equipo y sus doctorandos. En la Fase 2, un socio industrial que escale el proceso
   (armador o fabricante de módulos). Después, los mismos beneficiarios que listaron E y R. A futuro, celdas de
   silicio de bajo costo para nanosatélites, como experimento en órbita.
6. **Impacto:** que un laboratorio deje de hacer celdas "artesanales" irrepetibles y pase a tener una ruta escrita
   que otro puede repetir. Eso es lo que convierte un saber en capacidad industrial.
7. **Dolores:** los laboratorios fabrican celdas, pero cada corrida es única. No queda escrito qué pasó con cada
   wafer, no se puede reproducir el mejor resultado ni demostrarle a un tercero que se puede.
8. **Posibilidad de realización:** primera celda medida en unos 3 meses, si los equipos andan. Ruta congelada en
   18–24 meses: cada corrida completa lleva semanas, y hacen falta varios lotes divididos por cada paso crítico.
9. **Eficacia:** lo elegante es empezar con una **ruta base** conocida y medir todo contra ella. Cada mejora se
   prueba en un lote dividido, con un wafer testigo. Pocos pasos, cada uno con su ventana medida.
10. **Efecto:** la ruta congelada y su PID duran más que cualquier equipo de trabajo; son lo que se transfiere y
    lo que se licencia.

**Bloque 3 — Posicionamiento**

11. **Competencia:** los fabricantes de gran escala (no se compite con ellos en precio); otros laboratorios de I+D
    con procesos propios. Además hay **patentes de terceros** sobre las arquitecturas actuales: hubo litigios
    internacionales por patentes de pasivado (PERC) y de TOPCon. Hay que hacer una búsqueda de libertad de
    operación antes de elegir la arquitectura.
12. **Diferencial:**
    - Trazabilidad por wafer desde el primer lote.
    - Ruta documentada como PID, lista para transferir.
    - Datos de lotes divididos que muestran por qué cada ventana es la que es.
    - Decisión de propiedad intelectual tomada paso por paso.

**Bloque 4 — Descripción técnica**

13. **Descripción:** una ruta de fabricación de celdas de silicio a escala de laboratorio, con hoja de ruta por
    wafer, métodos de medición calibrados y validados, y control de cambios. Primero se arma la ruta base y después
    la versión innovadora.
14. **Problema concreto:** sin hoja de ruta, cuando una celda sale muy bien nadie puede decir con certeza qué
    parámetros tuvo. Con lotes de pocos wafers, perder ese dato es perder semanas.
15. **Quién se beneficia más:** el socio que escale el proceso (recibe una ruta probada, no una promesa) y los
    doctorandos (aprenden a fabricar con método).
16. **Primeros pasos:**
    1. Fijar el TRL de partida y el de llegada de cada fase (ISO 16290).
    2. Hacer la búsqueda de libertad de operación (patentes) antes de elegir la arquitectura.
    3. Escribir la especificación de la celda y el árbol de documentos: PID, especificación de cada proceso, hoja
       de ruta por lote.
    4. Calibrar y validar los métodos de medición **antes** del primer lote.
    5. Identificar cada wafer y abrir su hoja de ruta.
    6. Fabricar la ruta base con un wafer testigo en cada lote.
    7. Hacer lotes divididos para encontrar la ventana de cada paso crítico.
    8. Armar el AMFE de proceso (PFMEA) de la ruta y el plan de control.
    9. Congelar la ruta (línea base) y abrir el control de cambios.
    10. Fabricar el lote de calificación de proceso y decidir paso por paso qué se patenta, qué queda como secreto y
        qué se publica.
17. **Resultado óptimo:** ruta congelada, con dispersión entre lotes conocida y dentro de la especificación. Se
    mide con los datos de las hojas de ruta y con el lote de calificación. Con lotes chicos, se informa la
    dispersión con su incertidumbre; los índices de capacidad (Cpk) recién cuando haya datos suficientes.

**Bloque 5 — Recursos y escalabilidad**

18. **Presupuesto del PMV:** si los equipos ya están en el laboratorio, USD 50–150 mil (a verificar):
    - calibración trazable de la celda de referencia;
    - insumos y wafers para unos 10 lotes;
    - metrología;
    - búsqueda de libertad de operación (USD 5–15 mil).
19. **Prototipo "de vuelo":** es la línea piloto que propusieron E, R, F y Q. Corresponde a la Fase 2 y se encara
    recién con la ruta congelada.
20. **¿Replicable / escalable?** Sí, porque está documentada. El PID es el vehículo de la réplica.
21. **Demanda local:** la de los socios industriales que quieran fabricar celdas sin desarrollar el proceso desde
    cero.
22. **Demanda internacional:** desarrollo de proceso a medida y celdas para experimentos en órbita.
23. **¿Empresa o servicio?** Sí: desarrollo de proceso y licencia de saber hacer.

**Bloque 6 — Financiamiento**

24. **Desarrollo conceptual:** fondos propios del grupo.
25. **PMV:** proyectos de I+D con contrapartida de un socio industrial.
26. **Prototipo de vuelo:** consorcio público-privado.
27. **Producción en serie:** el socio industrial, con licencia del proceso.
28. **Entidades:**
    - INTI (metrología y trazabilidad);
    - oficina de patentes y área de vinculación tecnológica de la institución;
    - laboratorios acreditados para calibrar celdas de referencia.

---

## Paso 2 — A3 revisado por J (v0.2)

J no hace un A3 nuevo: **revisa el del equipo**. El A3 v0.2 está en `CeSoTe_A3_v02.html` y `.md`.

| Caja | v0.1 (equipo) | v0.2 (revisión de J) | Por qué |
|---|---|---|---|
| 1 | Principal: armadores de módulos | Principal: **el socio industrial que escalará el proceso**; los armadores pasan a la Fase 2 | El producto de la Fase 1 es el proceso |
| 2 | Importación; lotes que varían | Se agrega: **cada corrida de laboratorio es única y no queda escrita** | Es el problema real de la escala de laboratorio |
| 3 | "Celdas solares hechas en el país…" | "**Una ruta de fabricación de celdas probada a escala de laboratorio, trazable wafer por wafer y lista para transferir a una línea.**" | De vender celdas a transferir un proceso |
| 4 | Línea piloto, medición, ambiente, mini módulo | Ruta base y ruta innovadora; hoja de ruta por wafer; lotes divididos con testigo; métodos calibrados y validados; PFMEA y plan de control; PID con control de cambios; búsqueda de libertad de operación. El mini módulo pasa a la Fase 2 | Herramientas de calidad de fabricación |
| 5 | Alianza con armador, servicios | **Transferencia por licencia** de la ruta al socio; formación | Coherente con la caja 3 |
| 6 | Venta de celdas y servicios | Licencia de saber hacer; patentes candidatas; secreto industrial; publicaciones (sólo lo no secreto) | Magíster en patentes |
| 7 | PMV de USD 0,6–1,2 M; línea de USD 10–20 M | **Fase 1: USD 50–150 mil** con los equipos existentes; la línea queda como Fase 2 | Escala real |
| 8 | Eficiencia, rendimiento, campo, huella | TRL alcanzado (4 → 5); dispersión entre lotes; **100 % de los wafers con hoja de ruta completa**; 100 % de los métodos calibrados antes de usarse; decisión de PI tomada en cada paso | Métricas que se pueden medir en la Fase 1 |
| 9 | (incluye lo que agregó la autora) | Se mantiene todo; se agrega: **datos de calidad desde el primer lote** y **decisión de PI paso por paso** | — |

---

## Paso 3 — Diagrama de procesos con la herramienta

### La herramienta v0.2 (opción 3, mejorada con las corridas de los cuatro perfiles)

Tomo como "corridas" el armado del diagrama v0.1 con las respuestas de E, R, F y Q. Las mejoras que salieron de ahí
están en las notas de diseño de la herramienta (internas). Con ellas, la herramienta v0.2:

- Tiene dos modos, **proyecto** (árbol por etapas) y **ruta de fabricación** (cadena de pasos), unidos con el
  símbolo de enlace.
- Importa el Concepto (CSV de Google Forms) y el A3, y ubica cada caja en su etapa.
- Ubica los pasos de la pregunta 16 según palabras clave.
- Pone ✔ en cada medición, con cuatro campos: qué, referencia, criterio y resultado.
- Convierte las preguntas abiertas del A3 en rombos SÍ/NO.
- Señala pasos parecidos y pregunta si son el mismo.
- Marca el origen de cada elemento y propone acrónimos α.
- Ofrece una biblioteca de líneas típicas: PERC, TOPCon, heterojuntura y armado de módulo.

### La sesión de J (simulada)

**1. Importación.** J carga su Concepto y el diagrama v0.1 del equipo. La herramienta ubica sus 10 pasos:

| Paso de J | Dónde lo puso la herramienta | Qué hizo J | Hallazgo para la herramienta |
|---|---|---|---|
| 1 Fijar TRL | Planificación ("fijar") | Lo acepta | — |
| 2 Libertad de operación | **Sin etapa** (ninguna palabra clave) → preguntó | Planificación, **antes** de elegir la arquitectura (1.5), con una flecha que obliga ese orden | Faltan palabras clave de PI: patente, libertad de operación, búsqueda |
| 3 Especificación y árbol de documentos | Requisitos | Lo acepta y lo divide en dos | — |
| 4 Calibrar y validar métodos | **Validación** ("validar") | **Lo mueve a Implementación, como paso previo a la ruta.** Calibrar los instrumentos no es validar el producto; si se hace al final, todas las mediciones anteriores quedan sin respaldo | Un ✔ puede ir en cualquier etapa. La etapa Validación es para el producto, no para la metrología |
| 5 Identificar wafers y hoja de ruta | Implementación | Lo pasa a DP-02 como paso 0 de la ruta | — |
| 6 Ruta base con testigo | Implementación | Lo acepta | La biblioteca no tiene "ruta base" ni "wafer testigo" |
| 7 Lotes divididos | Sin etapa → preguntó | Implementación, como **experimento** dentro de DP-02 | Falta un elemento "experimento" (qué parámetro varía y en qué wafers) |
| 8 PFMEA y plan de control | Sin etapa → preguntó | Lo marca como **documento** que se arma desde DP-02 | La ruta debería poder exportarse como esqueleto de PFMEA y de plan de control |
| 9 Congelar la ruta | Sin etapa → preguntó | Lo marca como **revisión (hito)**; la herramienta no tiene ese símbolo | Falta el elemento "revisión" (hito con criterio de paso) |
| 10 Lote de calificación y decisión de PI | Validación | Separa: el lote de calificación va a Validación; la decisión de PI **va en cada paso**, no en uno solo | Falta un campo PI por paso |

**2. Pasos parecidos.** La herramienta señaló tres elementos parecidos:
- "Calibrar y validar métodos" (J);
- "Medición trazable" (F, 3.2);
- "Validar el método I-V" (F, 4.1).

J los **une** en un solo paso de Implementación: "Calibrar y validar los métodos de medición" (`mpl.mtr`), marcado
como prerrequisito de la ruta.

**3. Biblioteca.** La herramienta ofreció la plantilla **PERC** de producción. J la rechaza por dos motivos:
1. **Escala:** a escala de laboratorio la metalización frontal suele hacerse por fotolitografía y evaporación, no
   por serigrafía; los pasos cambian.
2. **Ruta base primero:** antes de la innovación hay que validar la línea con una estructura conocida y simple
   (celda con campo trasero de aluminio, Al-BSF). PERC o TOPCon se deciden después de la búsqueda de libertad de
   operación.

**Esto resuelve la duda pendiente sobre PERC:** no se confirma todavía.

**4. Preguntas socráticas en cada ✔.** Para cada medición, la herramienta preguntó "¿contra qué referencia?". J
respondió todas y además agregó cuatro campos que la herramienta no tenía: **tipo de ✔**, **plan de reacción**,
**marca de PI** y **estado** (en desarrollo o congelado).

### Resultado: DP-01 v0.2 (cambios sobre la v0.1)

- **Planificación:**
  - agrega `pln.trl` (TRL de partida y de llegada por fase);
  - agrega `pln.lbr` (búsqueda de libertad de operación), con una flecha obligatoria hacia "elegir la
    arquitectura".
- **Requisitos:** agrega `drq.dcm` (árbol de documentos: PID, especificaciones de proceso, hoja de ruta).
- **Implementación:**
  - `mpl.mtr` (calibrar y validar métodos) pasa a ser el **primer** paso;
  - la línea de celda pasa a llamarse **ruta de fabricación** (`mpl.rta`, enlace a DP-02);
  - el mini módulo (`mpl.mdl`) pasa a la Fase 2.
- **Revisiones (nuevo elemento), siguiendo la lógica de revisiones de la ECSS:**
  - **R1, fin de Requisitos:** ¿la especificación y el árbol de documentos están aprobados?
  - **R2, congelamiento de la ruta:** ¿la dispersión de los lotes divididos está dentro de la especificación?
  - **R3, fin de Validación (calificación):** ¿el lote de calificación pasó los ensayos?
- **Validación:** el lote de calificación de proceso (`vld.clf`) queda como paso central. Campo, ciclo de vida y
  certificación pasan a la Fase 2.
- **PMV de la Fase 1:** ruta congelada + PID + informe del lote de calificación + matriz de PI por paso
  (`pmv.mpi`).

### Resultado: DP-02 v0.2 — Ruta de fabricación base (Al-BSF, escala de laboratorio)

Abreviaturas de la columna "Tipo ✔": Cal = calibración, Ver = verificación, Val = validación.
"Pendiente" = el valor lo fijan los lotes divididos.

| # | Proceso unitario | Tipo ✔ | Control y referencia | Criterio | Plan de reacción | PI | Estado |
|---|---|---|---|---|---|---|---|
| 0 | Identificación de wafers y apertura de la hoja de ruta | Ver | Cada wafer con su ID y su hoja | 100 % | No entra a la ruta | Público | Congelado |
| 1 | Recepción e inspección | Ver | Resistividad y espesor contra el certificado del proveedor, con una muestra propia | Según especificación de insumos | Rechazar el lote; reclamo al proveedor | Público | Congelado |
| 2 | Limpieza y texturizado | Ver | Reflectancia; referencia: patrón calibrado | Pendiente | Retexturizar o descartar; registrar | Secreto (receta) | En desarrollo |
| 3 | Difusión del emisor | Cal + Ver | Resistencia de lámina en 4 puntas; referencia: oblea patrón | Pendiente | Wafer en espera; análisis de causa | **Secreto** (ventana) | En desarrollo · **experimento** |
| 4 | Remoción del vidrio de fósforo y aislamiento de bordes | Ver | Prueba de hidrofobicidad; fotos patrón | Criterio escrito | Repetir el paso | Público | En desarrollo |
| 5 | Antirreflejo (SiNx) | Cal + Ver | Espesor e índice por elipsometría; referencia: muestra de espesor conocido | Pendiente | Reprocesar | Secreto | En desarrollo |
| 6 | Contacto trasero de aluminio y aleado | Ver | Uniformidad visual; resistencia de contacto | Pendiente | Descartar | Público (Al-BSF es conocido) | En desarrollo |
| 7 | Contacto frontal: fotolitografía, evaporación y *lift-off* | Ver | Ancho de dedos; espesor; referencia: microscopio y perfilómetro calibrados | Pendiente | Reprocesar | **Candidato a patente** si la grilla es nueva | En desarrollo |
| 8 | Recocido de contactos | Cal | Perfil térmico; referencia: termocupla calibrada | Pendiente | Ajustar el perfil | Secreto | En desarrollo · experimento |
| 9 | Definición del área de la celda | Ver | Área medida; referencia: patrón de medida | ± tolerancia | Recalcular la eficiencia con el área real | Público | Congelado |
| 10 | Medición I-V y eficiencia cuántica externa | **Cal + Val** | Simulador clasificado (IEC 60904-9); celda de referencia calibrada por un laboratorio acreditado; **celda testigo** medida en cada sesión | La testigo da su valor dentro de la incertidumbre declarada | Detener las mediciones y recalibrar | Público | Congelado (método) |

**Regla de J para la columna PI:** si el resultado se puede leer en la celda terminada (por ejemplo, con
microscopio o análisis de capas), conviene **patentar**, porque se puede copiar mirando el producto. Si sólo vive en
los parámetros del proceso, conviene **secreto industrial**: se nombra en el PID sin revelarlo, como permite la ECSS.

---

## Qué aportó la experta

1. **Cambió la pregunta.** De "fabricar celdas" a "desarrollar la ruta de fabricación". El producto de la Fase 1 es
   el proceso. Esto cambió las cajas 1, 3, 7 y 8 del A3.
2. **Precisó el vocabulario.** Distinguió proceso unitario, ruta de fabricación, fabricación y producción, y
   separó calibración, verificación, validación y calificación. Con eso, el ✔ de la herramienta pasó a tener un tipo.
3. **Mostró que lo certificable no depende de la escala, sino de la trazabilidad.** Un lote de pocos wafers con hoja
   de ruta completa da datos válidos para una calificación; cien celdas sin registro no.
4. **Aportó la estrategia experimental del laboratorio:** ruta base conocida, wafer testigo y lotes divididos.
5. **Puso la propiedad intelectual en cada paso:** búsqueda de libertad de operación antes de elegir la arquitectura
   y una regla simple para decidir entre patente y secreto.
6. **Trajo la cadena de herramientas de la industria:**
   - diagrama de flujo de proceso → AMFE de proceso (PFMEA) → plan de control;
   - revisiones con criterio de paso.
7. **Corrigió la herramienta en dos lugares que yo había hecho mal:**
   - **Metrología:** yo ubiqué la validación del método de medición en la etapa Validación; tiene que ir antes de
     fabricar.
   - **Biblioteca:** yo ofrecí una plantilla de producción para un grupo que trabaja a escala de laboratorio.

**Lo que la herramienta no reemplaza:** las referencias de cada medición, los criterios de aceptación y la
decisión de PI. Las tres las completó J con su experiencia. La herramienta sólo puede **preguntarlas**.

## Mejoras de la herramienta → v0.3

| # | Mejora | La pidió |
|---|---|---|
| 1 | Tipo de ✔: calibración, verificación, validación o calificación; la pregunta cambia según el tipo | J (vocabulario) |
| 2 | Un ✔ puede ir en cualquier etapa; la metrología va antes de fabricar | J (paso 4) |
| 3 | Campo **plan de reacción** en cada ✔ | J |
| 4 | Campo **PI** por paso (público, secreto o candidato a patente); exportar el PID en dos versiones, completa y para el cliente (sin lo secreto) | J |
| 5 | Campo **estado** (en desarrollo o congelado); un cambio en un paso congelado pide un registro de cambio | J |
| 6 | Elemento **revisión** (hito con criterio de paso) | J (congelar la ruta) |
| 7 | Elemento **experimento** (lote dividido: qué parámetro varía y en qué wafers) y **wafer testigo** | J |
| 8 | Biblioteca con etiqueta de **escala** (laboratorio o producción) y una **ruta base** por tecnología | J |
| 9 | Exportar desde la ruta la **hoja de ruta por lote** (un formulario para registrar cada corrida) | J |
| 10 | Exportar los esqueletos de **PFMEA** y **plan de control** | J |
| 11 | Palabras clave de PI y de metrología en el clasificador | Sesión de J |
| 12 | Etiqueta de **TRL** por etapa o por fase | J |

## Decisiones de la autora (05/10/2026)

Las tres, **sí**:
1. Se suman el **AMFE de proceso (PFMEA)** y el **plan de control** a la ruta DiDe, después del Ishikawa, a nivel de
   la ruta de fabricación.
2. El diagrama tipo DP-02 se llama **ruta de fabricación**.
3. CeSoTe queda como **"Fase 1: desarrollo de la ruta de fabricación"**.

La distinción entre fabricación y producción quedó escrita como recomendación general de CaPI (sin atribuirla a J)
en `Guias/CaPI_Recomendacion_Fabricar-Producir-Documentar_v0.md`.

---

## Paso 4 — Ishikawa 6M, conducido por J

Herramienta: `Herramientas/DiDe_Ishikawa.html` con los datos de CeSoTe →
`CeSoTe_Ishikawa_v0.html` (código CeSoTe-ISH-01). Generador: `CeSoTe_GenerarIshikawa.py`.

**Dónde nace el efecto.** Sale del diagrama: es la rama NO de la revisión R2 ("¿la dispersión entre lotes está
dentro de la especificación?"). J lo escribe de modo que se pueda medir:

> **Efecto:** la eficiencia de las celdas de la ruta base varía entre lotes **más que la incertidumbre de
> medición**.
>
> **Pregunta:** ¿qué determina que la eficiencia se repita entre lotes de la ruta base?

**Lo primero que hace J: ordenar.** Antes de buscar causas en el proceso hay que descartar la medición. Si no se
sabe cuánto varía la medición sola, no se puede afirmar que el proceso varía. Por eso el orden de trabajo es:
1. **Medición:** celda de referencia con calibración trazable; incertidumbre I-V declarada (estudio de
   repetibilidad y reproducibilidad).
2. **Método:** hoja de ruta por wafer y recetas escritas. Sin ellas, ninguna otra causa se puede investigar.
3. **Proceso:** recién entonces, lotes divididos para encontrar las ventanas de difusión y de recocido.

**Resultado:** 19 causas.

| Estado | Cantidad | Causas | Lectura |
|---|---|---|---|
| No dominada | 5 | Sin hoja de ruta; recetas no escritas; sin criterio de celda buena; referencia sin calibración trazable; incertidumbre no declarada | Son de **método y medición**: se resuelven escribiendo y calibrando, no comprando equipos |
| Variable | 8 | Ventanas de difusión y recocido; espesor según la posición; deriva de la lámpara; lotes de wafers; área; temperatura de medición; operador | Se estudian con lotes divididos y testigos |
| Sin evaluar | 6 | Perfil del horno; agua y químicos; dopante; tiempo de espera; partículas; bancos compartidos | Preguntas abiertas para el grupo |

**Aporte por perfil:**
- **J:** las causas de método y la incertidumbre de medición.
- **F:** la medición (referencia, área, temperatura, lámpara, evaporación).
- **Q:** el proceso y los insumos.
- **E:** el ambiente de la sala y la pureza de los químicos.
- **R:** una sola causa, pero clave: nadie acordó qué es una "celda buena".

**Qué aportó J en este paso:**
1. **Un efecto medible:** lo comparó con la incertidumbre de medición.
2. **Un orden:** primero medición, después método, al final proceso.
3. **Cada causa unida a un paso de la ruta:** por ejemplo, "DP-02 paso 3". Esa unión es la que después alimenta el
   AMFE de proceso.

### Hallazgos sobre la herramienta Ishikawa

| # | Hallazgo | Tipo |
|---|---|---|
| 1 | Las causas "sin evaluar" no muestran su círculo: una regla de CSS (`.node circle{stroke:#fff}`) pisa el borde gris. Pasa también en el ejemplo de SincLE | **Falla** |
| 2 | La primera etiqueta de la espina superior izquierda se corta si es larga | **Falla** |
| 3 | Falta un campo **paso de la ruta** por causa (hoy va escrito dentro del texto) | Mejora (J) |
| 4 | Falta poder marcar el **orden de ataque** (medición → método → proceso) | Mejora (J) |
| 5 | Exportar las causas como filas de un **AMFE de proceso**: modo de falla, causa, control actual | Mejora (J) |

## Nombre del diagrama (autora, 05/10/2026)

El diagrama del proyecto se llama **flujo del proyecto** (antes "diagrama de procesos"); la palabra "proceso" queda
para la ruta de fabricación. Herramienta: `Herramientas/DiDe_FlujoProyecto.html`. CeSoTe cargado en
`CeSoTe_FlujoProyecto_v0.html` (generado con `CeSoTe_GenerarFlujo.py`).

## Paso 5 — AMFE de proceso y plan de control

En `CeSoTe_AMFE-Proceso_v0.md` (CeSoTe-AMFE-01). Los tres riesgos más altos son la incertidumbre de medición no
declarada (NPR 512), las recetas no escritas (280) y la falta de hoja de ruta por wafer (224). Cargado en la
herramienta `DiDe_AMFE.html` → `CeSoTe_AMFE_v0.html` (generador `CeSoTe_GenerarAMFE.py`); la herramienta confirma que
la causa c05 (qué es una celda buena) no entra en ningún paso.

## Paso 6 — WBS y Diccionario

`CeSoTe_WBS_v0.html` (CeSoTe-WBS-01, generador `CeSoTe_GenerarWBS.py`): 53 globitos armados desde el flujo, sin las
decisiones ni las revisiones. J escribió el QUÉ y el CÓMO de cada uno; todos los padres cumplen la regla del 100 %.
En los pasos secretos (texturizado, difusión, antirreflejo, recocido) el CÓMO nombra la especificación de proceso
(EP-02, EP-03, EP-05, EP-08, confidenciales) sin revelar la receta: la WBS se puede mostrar sin entregar el saber.

**Nota sobre acrónimos:** la WBS es la fuente de verdad. La ruta quedó `mpl.fbr` en la WBS y `mpl.rrt` en el flujo,
porque las herramientas proponen distinto; hay que unificar a mano (o al importar la WBS en el flujo, a futuro).
