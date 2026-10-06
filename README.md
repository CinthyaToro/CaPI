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
| 1 | Concepto | ¿Qué es la idea y por qué importa? | [Herramienta](Herramientas/DiDe_Concepto.html) · [Formularios de Google (script)](Herramientas/CaPI_CrearGoogleForm_Concepto.gs) · [Plantilla](Plantillas/CaPI-Universal_01-Encuesta-Concepto.md) |
| 2 | A3 | ¿Se entiende el proyecto entero en una sola hoja? | [Herramienta](Herramientas/DiDe_A3.html) · [Guía](Plantillas/CaPI-Universal_02-Plantilla-A3.md) |
| 3 | Flujo del proyecto | ¿En qué orden se hace cada parte? Si el proyecto fabrica algo, ¿cuál es su ruta de fabricación? | [Herramienta](Herramientas/DiDe_FlujoProyecto.html) |
| 4 | Ishikawa 6M | ¿Qué hay que controlar para que el resultado se repita? | [Herramienta](Herramientas/DiDe_Ishikawa.html) |
| 5 | AMFE de proceso y plan de control | ¿Qué puede fallar en cada paso, qué tan grave es y cómo se controla? (Con la WBS, también el AMFE de diseño: una fila por función.) | [Herramienta](Herramientas/DiDe_AMFE.html) |
| 6 | WBS constructible | ¿Qué hay que hacer en cada parte, y cómo se hace? | [Herramienta](Herramientas/DiDe_WBS.html) · [Guía](Plantillas/CaPI-Universal_03-Guia-WBS-Constructible.md) |
| 7 | Diccionario de WBS | ¿Cómo se llama cada parte, y qué significa? | [Herramienta](Herramientas/DiDe_WBS.html) · [Plantilla](Plantillas/CaPI-Universal_04-WBS-Dictionary.md) |
| 8 | BIMi (BIM de investigación) | ¿Qué necesita saber cada persona que lee, y con qué documento se respalda? | [Herramienta](Herramientas/DiDe_BIMi.html) |

## Qué hay en este repositorio

| Carpeta | Contenido |
|---|---|
| `Plantillas/` | Modelos en blanco: encuesta de Concepto, A3, guía de WBS constructible y Diccionario de WBS. |
| `Herramientas/` | Herramientas DiDe: cada una es un solo archivo HTML que se abre en el navegador, sin instalar nada. Se editan, se guardan solas en tu computadora, importan y exportan JSON y CSV, y se imprimen en A4 con márgenes ISO 5457 y "Página n de N". Cada una trae un ejemplo resuelto y una lista de preguntas para el equipo. |
| `Ejemplos/SincLE/` | **SincLE**, un sistema que sincroniza un láser y un espectrómetro LIBS: el A3 (HTML editable, Markdown y PDF) y la WBS con su Diccionario. Su BIMi es el ejemplo que trae la herramienta BIMi; los demás pasos, los ejemplos de cada herramienta. |
| `Ejemplos/CeSoTe/` | La ruta DiDe completa, hasta el BIMi, aplicada a **CeSoTe**, un ejercicio con perfiles ficticios sobre fabricación de celdas solares terrestres. |
| `Guias/` | Recomendaciones de método. |

Las plantillas usan ejemplos de **otro** proyecto a propósito: muestran el nivel de detalle esperado sin que se
pueda copiar la respuesta.

## Cómo usar las plantillas y las herramientas

1. Empezá por la encuesta de Concepto: en la herramienta Concepto (en el navegador; descarga CSV y Word) o con
   formularios de Google en tu cuenta, que crea el script (para que respondan tus clientes o tu equipo). Las dos
   terminan en el mismo CSV. Respondé cada pregunta mirando el ejemplo. En papel: la plantilla.
2. En la herramienta A3, «Importar» prellena las nueve cajas con ese CSV; después se destila en reunión. Al terminar,
   «Exportar .md» lo deja listo para el paso siguiente («Exportar .json» sirve para volver a abrirlo).
3. Abrí la herramienta de flujo del proyecto. Con "Esqueleto desde Concepto y A3" arma un primer borrador por reglas,
   sin IA y sin enviar datos afuera; después pregunta lo que no puede decidir.
4. Seguí con el Ishikawa, el AMFE, la WBS, el Diccionario y el BIMi. Cada herramienta importa lo que exportó la anterior; si lo abierto es el ejemplo, arma una carátula nueva y no lo mezcla con tu proyecto.

Lo que produce cada grupo es **suyo y confidencial**: no lo subas a un repositorio público hasta saber qué partes
conviene proteger. Las herramientas guardan los datos sólo en tu navegador.

## Autoría

CaPI y DiDe, con sus plantillas y herramientas, son desarrollos de **Cinthya Toro**, Laboratorio de FotoFísica Láser
(LFFL), CITEDEF, Argentina. Las herramientas se desarrollaron con asistencia de IA (Claude); la autora definió el
método, revisó y aprobó cada versión.

Perfil: [github.com/CinthyaToro](https://github.com/CinthyaToro)

**Licencia:** en definición. Todos los derechos reservados: para reutilizar o adaptar este material, consultar a la
autora.
