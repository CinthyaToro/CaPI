# Fabricar no es producir: documentar desde el primer lote como si fuéramos a calificar

| Código | Versión | Fecha | Estado | Semáforo |
|---|---|---|---|---|
| CaPI-REC-01 | 0.1 | 06/10/2026 | Publicado | 🟢 verde (público) |

| Elaboró | Revisó | Aprobó |
|---|---|---|
| Cinthya Toro, con asistencia de Claude (IA) | — | — |

> Recomendación de CaPI para grupos de investigación que ponen a punto procesos o sistemas. Es el punto de partida
> antes de usar las herramientas de calidad de DiDe.

## Quiénes somos y qué hacemos

Somos investigadores. En el laboratorio **ponemos a punto procesos y sistemas**: hacemos pocas unidades, muchas
veces una sola, y cada corrida lleva días o semanas. **No producimos en forma masiva.** Eso no quiere decir que no
fabriquemos.

## Cuatro palabras que conviene separar

| Palabra | Qué es | ¿Lo hacemos en el laboratorio? |
|---|---|---|
| **Proceso unitario** | Un paso que transforma el material o el sistema (por ejemplo, una difusión, un depósito, un ajuste) | Sí |
| **Ruta de fabricación** | La secuencia ordenada de pasos que lleva del material de partida al dispositivo terminado | Sí, aunque muchas veces no está escrita |
| **Fabricación** | Hacer el dispositivo siguiendo la ruta, **a cualquier escala**: una unidad o un millón | **Sí** |
| **Producción** | Fabricar **en serie**, con la ruta **congelada** y aprobada, y aceptación lote a lote | No, en general |

Lo que hacemos se llama **desarrollo de proceso**: encontrar y fijar la ventana de cada paso hasta que la ruta se
pueda congelar. Recién ahí alguien puede producir.

## La recomendación

**Documentemos desde el primer lote como si fuéramos a calificar.**

Lo certificable no depende de la escala, sino de la trazabilidad. Un lote de pocos wafers con su hoja de ruta
completa sirve como evidencia para una calificación. Cien unidades sin registro, no.

Si no queda escrito qué pasó con cada pieza, perdemos tres cosas:
- la posibilidad de **repetir** nuestro mejor resultado;
- la posibilidad de **demostrarle a un tercero** que el proceso funciona: un socio, un evaluador, una misión;
- la posibilidad de **decidir qué proteger**, porque no sabemos con precisión qué hicimos distinto.

## Lo mínimo para empezar

1. **Identificar cada pieza** (wafer, muestra, módulo) con un código único.
2. **Abrir una hoja de ruta por pieza o por lote:**
   - qué pasos tuvo, en qué fecha, con qué equipo, quién operó;
   - con qué parámetros;
   - qué se midió en cada paso;
   - qué salió distinto de lo previsto.
3. **Calibrar los instrumentos antes de medir, no después.** Si el método de medición no está validado, ninguna
   medición posterior tiene respaldo.
4. **Incluir una pieza testigo en cada lote,** hecha con la receta de base, para separar el efecto de lo que
   cambiamos del ruido del día.
5. **Cambiar un parámetro por vez y dejarlo escrito.** Si un lote tiene pocas piezas, se puede dividir: cada pieza
   con un valor distinto del parámetro que se estudia.
6. **Marcar cuándo un paso queda fijo.** A partir de ahí, cualquier cambio se registra con su motivo.

## Cuatro palabras de medición

| Palabra | Pregunta que responde |
|---|---|
| **Calibración** | ¿El instrumento da el valor del patrón? |
| **Verificación** | ¿El resultado cumple lo especificado? |
| **Validación** | ¿El método o el resultado sirven para el uso previsto? |
| **Calificación** | ¿El diseño o el proceso aguantan el ambiente real, con margen? |

## Un ejemplo: un detector infrarrojo hecho en el laboratorio que va al espacio

Un grupo fabrica en su laboratorio un chip detector de infrarrojo. Para que un satélite lo use como instrumento
(por ejemplo, para hacer mapas térmicos), el chip tendría que pasar una calificación completa, con muchas unidades
ensayadas y una ruta de fabricación congelada.

Hay un camino intermedio: **volar el chip como demostración tecnológica**. En ese vuelo no importan los datos
infrarrojos. Importa saber si el chip:
- **sobrevive** al lanzamiento;
- **recibe comandos** y **transmite** datos desde la órbita;
- **se calienta** con los ciclos de sol y sombra, y **sigue funcionando** igual.

Igual tiene que soportar el lanzamiento y no poner en riesgo la misión.

En los dos casos, lo que abre la puerta es lo mismo: **una ruta de fabricación escrita y trazable desde el primer
lote.** Si el chip anda bien en órbita, el grupo tiene que poder decir exactamente cómo lo hizo para fabricar el
siguiente igual.

---

*CaPI — Capacitación en Protección de Propiedad Intelectual y Transferencia de Tecnología · DiDe*
