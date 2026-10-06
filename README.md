# CaPI — Capacitación en Protección de Propiedad Intelectual y Transferencia de Tecnología

CaPI es una capacitación para grupos de investigación. Cada grupo documenta **su propio proyecto** con **DiDe**,
un método de documentación con herramientas de calidad aplicadas a innovación.

Documentar con DiDe sirve para dos cosas:

1. **Ver qué partes del trabajo son protegibles y cuáles no.** Con eso el grupo puede decidir qué patentar, qué
   guardar y qué divulgar, y no gasta energía buscando patentes donde no hay nada que proteger.
2. **Dejar el sistema modular, extensible, transferible, certificable, escalable y eficiente**, por la forma misma
   en que se documenta.

**Antes de empezar:** en el laboratorio fabricamos, aunque no produzcamos en serie. La recomendación es documentar
desde el primer lote como si fuéramos a calificar. Ver
[Fabricar no es producir](Guias/CaPI_Recomendacion_Fabricar-Producir-Documentar_v0.md).

## La ruta DiDe

| # | Paso | Pregunta que responde | Material |
|---|---|---|---|
| 1 | Concepto | ¿Qué es la idea y por qué importa? | [Herramienta](Herramientas/DiDe_Concepto.html) · [Formularios de Google para copiar](https://docs.google.com/forms/d/1Fn6Q0X5z7JyiRmCyTmeUxRRRBxj4Ah_qyYfrHikaQcc/copy) ([Etapa II](https://docs.google.com/forms/d/1jU1HKuLQxEX4mqn0QVHSK8A4689wIT1Tcd2OJ13-NGg/copy)) · [Script](Herramientas/CaPI_CrearGoogleForm_Concepto.gs) · [Plantilla](Plantillas/CaPI-Universal_01-Encuesta-Concepto.md) |
| 2 | A3 | ¿Se entiende el proyecto entero en una sola hoja? | [Herramienta](Herramientas/DiDe_A3.html) · [Guía](Plantillas/CaPI-Universal_02-Plantilla-A3.md) |
| 3 | Flujo del proyecto | ¿En qué orden se hace cada parte? Si el proyecto fabrica algo, ¿cuál es su ruta de fabricación? | [Herramienta](Herramientas/DiDe_FlujoProyecto.html) |
| 4 | Ishikawa 6M | ¿Qué hay que controlar para que el resultado se repita? | [Herramienta](Herramientas/DiDe_Ishikawa.html) |
| 5 | AMFE de proceso y plan de control | ¿Qué puede fallar en cada paso, qué tan grave es y cómo se controla? | [Herramienta](Herramientas/DiDe_AMFE.html) |
| 6 | WBS constructible | ¿Qué hay que hacer en cada parte, y cómo se hace? | [Herramienta](Herramientas/DiDe_WBS.html) · [Guía](Plantillas/CaPI-Universal_03-Guia-WBS-Constructible.md) |
| 7 | Diccionario de WBS | ¿Cómo se llama cada parte, y qué significa? | [Herramienta](Herramientas/DiDe_WBS.html) · [Plantilla](Plantillas/CaPI-Universal_04-WBS-Dictionary.md) |
| 8 | BIM tecnológico | ¿Qué documentación necesita cada tipo de usuario? | Próximamente |

## Qué hay en este repositorio

| Carpeta | Contenido |
|---|---|
| `Plantillas/` | Modelos en blanco: encuesta de Concepto, A3, guía de WBS constructible y Diccionario de WBS. |
| `Herramientas/` | Herramientas DiDe: cada una es un solo archivo HTML que se abre en el navegador, sin instalar nada. Se editan, se guardan solas en tu computadora, importan y exportan JSON y CSV, y se imprimen en A4 con márgenes ISO 5457 y "Página n de N". Cada una trae un ejemplo resuelto y una lista de preguntas para el equipo. |
| `Ejemplos/SincLE/` | El A3 de **SincLE**, un sistema que sincroniza un láser y un espectrómetro LIBS (HTML editable, Markdown y PDF). |
| `Ejemplos/CeSoTe/` | La ruta DiDe completa aplicada a **CeSoTe**, un ejercicio con perfiles ficticios sobre fabricación de celdas solares terrestres. |
| `Guias/` | Recomendaciones de método. |

Las plantillas usan ejemplos de **otro** proyecto a propósito: muestran el nivel de detalle esperado sin que se
pueda copiar la respuesta.

## Cómo usar las plantillas y las herramientas

1. Empezá por la encuesta de Concepto, de una de tres formas: en la herramienta Concepto (en el navegador; descarga
   CSV y Word), con tu copia de los formularios de Google (para que respondan tus clientes o tu equipo), o generándolos
   con el script. Las tres terminan en el mismo CSV. Respondé cada pregunta mirando el ejemplo.
2. En la herramienta A3, «Importar Concepto» prellena las nueve cajas con ese CSV; después se destila en reunión.
3. Abrí la herramienta de flujo del proyecto. Con "Esqueleto desde Concepto y A3" arma un primer borrador por reglas,
   sin IA y sin enviar datos afuera; después pregunta lo que no puede decidir.
4. Seguí con el Ishikawa, el AMFE, la WBS y el Diccionario. Cada herramienta importa lo que exportó la anterior.

Lo que produce cada grupo es **suyo y confidencial**: no lo subas a un repositorio público hasta saber qué partes
conviene proteger. Las herramientas guardan los datos sólo en tu navegador.

## Autoría

CaPI y DiDe, con sus plantillas y herramientas, son desarrollos de **Cinthya Toro**, Laboratorio de FotoFísica Láser
(LFFL), CITEDEF, Argentina. Las herramientas se desarrollaron con asistencia de IA (Claude); la autora definió el
método, revisó y aprobó cada versión.

Perfil: [github.com/CinthyaToro](https://github.com/CinthyaToro)

**Licencia:** en definición. Todos los derechos reservados: para reutilizar o adaptar este material, consultar a la
autora.
