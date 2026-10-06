/**
 * Crea en tu cuenta de Google los dos formularios de la Encuesta de Concepto de CaPI (Paso 1 de DiDe).
 * Cinthya Toro · CaPI / DiDe · v1.0 (06/10/2026)
 *
 * CADA PREGUNTA LLEVA UN EJEMPLO RESUELTO DE SincLE (sistema de sincronización láser/espectrómetro).
 * Los ejemplos son a propósito de OTRO proyecto: muestran el nivel de detalle esperado sin que nadie
 * pueda copiar el contenido.
 *
 * La encuesta va en DOS ETAPAS, para no cansar a quien responde:
 *   - Etapa I  "La Idea"      → preguntas 1 a 21  (datos, inicio, filtros, posicionamiento, descripción, frase)
 *   - Etapa II "El Proyecto"  → preguntas 22 a 32 (recursos, escalabilidad, financiamiento)
 *
 * Cada función crea UN SOLO formulario que responde TODO el equipo: cada respuesta entra como una fila.
 * Las respuestas quedan en TU cuenta de Google, no en la de CaPI.
 *
 * CÓMO USARLO (no hace falta saber programar):
 * 1. Andá a https://script.google.com → "Nuevo proyecto".
 * 2. Borrá el código de ejemplo que aparece y pegá TODO este archivo.
 * 3. Arriba, en el menú de funciones, elegí "crearEtapa1_LaIdea" y tocá "Ejecutar" (▶).
 * 4. La primera vez te va a pedir autorización (es tu propia cuenta de Google): aceptá.
 * 5. Abrí "Registro de ejecución": ahí quedan el link para responder y el link para editar.
 * 6. Cuando cierres la Etapa I, repetí el paso 3 con "crearEtapa2_ElProyecto".
 *
 * Para exportar las respuestas: en el formulario, "Respuestas" → "Vincular con Hojas de cálculo" → Archivo →
 * Descargar → CSV. Ese CSV es el que lee la herramienta "Flujo del proyecto" (botón "Esqueleto desde Concepto y A3").
 *
 * COLORES Y TIPOGRAFÍA: Apps Script no puede cambiarlos por código. Se cambian a mano en el link para editar
 * (ícono de la paleta 🎨). Si volvés a ejecutar una función, se crea un formulario NUEVO y vacío.
 *
 * Preguntas tomadas literalmente del formulario de Concepto de DiDe. Versión en texto:
 * Plantillas/CaPI-Universal_01-Encuesta-Concepto.md
 */

/** Configuración común a los dos formularios. */
function configurarForm_(form) {
  form.setCollectEmail(true);
  form.setProgressBar(true);
  form.setAllowResponseEdits(true); // pueden volver y terminar o corregir después de enviar
  form.setShowLinkToRespondAgain(false);
}

/** Texto de encabezado común a los dos formularios. */
function introComun_() {
  return 'Esta encuesta es el primer paso de DiDe. No es un trámite: es la forma de poner tu idea por escrito ' +
    'para poder defenderla, protegerla y construirla. Si el proyecto ya está en marcha, no es para "inventarlo" ' +
    'de nuevo: es para documentarlo desde cero, con honestidad. Muchas veces lo que parece "obvio porque ya lo ' +
    'hacemos así" es exactamente la parte protegible que nadie escribió todavía.\n\n' +
    'Si trabajás en equipo, cada integrante responde desde su parte y después se consolida. Vas a ver ' +
    'preguntas que exceden tu parte: contestalas igual, desde tu mirada.\n\n' +
    'Algo que me pasó a mí: completando este mismo formulario para SincLE, me di cuenta de que el sistema no ' +
    'servía sólo para sincronizar dos equipos, sino que podía ser la base de algo bastante más grande. No lo ' +
    'sabía antes de escribirlo: lo vi al escribirlo.\n\n' +
    'DiDe se presentó como metodología de documentación en SAMECO 2024. CaPI es una capacitación en ' +
    'protección de Propiedad Intelectual (PI) y Transferencia de Tecnología.\n\n' +
    'SOBRE LOS EJEMPLOS: cada pregunta viene con un ejemplo resuelto de SincLE, un sistema de sincronización ' +
    'entre un láser y un espectrómetro. Es otro proyecto a propósito: el ejemplo te muestra CUÁNTO detalle se ' +
    'espera, no QUÉ contestar. Mirá la profundidad de la respuesta y escribí la tuya.\n\n' +
    'UNA PALABRA QUE VAS A VER EN LOS EJEMPLOS — "Master": en un sistema donde varios equipos tienen que actuar ' +
    'en secuencia, uno da la orden de arranque y los demás esperan esa señal; al que manda se le dice Master, ' +
    'como el director de orquesta que marca la entrada de cada instrumento. El problema que resuelve SincLE es ' +
    'que el láser y el espectrómetro fueron fabricados para ser Master los dos —ninguno sabe esperar la señal ' +
    'del otro—, así que hace falta un tercero que les dé el pie.\n\n' +
    'Podés enviar y después volver a editar tu respuesta: no hace falta terminarla de una sentada.\n' +
    'Si una pregunta no aplica o no sabés, escribilo ("no sé", "no aplica"). Eso también es dato útil.';
}

/* ==========================================================================
 *  ETAPA I — LA IDEA  (preguntas 1 a 21)
 * ========================================================================== */
function crearEtapa1_LaIdea() {
  const form = FormApp.create('Encuesta de Concepto — Etapa I: La Idea (CaPI · DiDe)');
  configurarForm_(form);

  form.setDescription(
    'Paso 1 de DiDe — CaPI. ETAPA 1 de 2.\n\n' +
    introComun_() + '\n\n' +
    'Esta Etapa I es sobre LA IDEA: qué es, para qué sirve y en qué se diferencia. ' +
    'La Etapa II (recursos y financiamiento) llega más adelante, por separado.'
  );

  form.setConfirmationMessage(
    '¡Gracias! Podés volver a este mismo link para corregir o completar lo que te haya quedado.\n\n' +
    'Más adelante te va a llegar la Etapa II (El Proyecto), que es más corta.'
  );

  // ---------- Bloque 1 — Datos del encuestado ----------
  form.addPageBreakItem()
    .setTitle('Bloque 1 — Datos del encuestado')
    .setHelpText('Quién sos y qué parte del proyecto hacés. Son los datos que permiten después armar ' +
      'el proyecto completo juntando las respuestas de todos.');

  form.addTextItem()
    .setTitle('1. Nombre')
    .setHelpText('Tu nombre y apellido.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('2. Tu parte o rol dentro del proyecto')
    .setHelpText(
      'Qué parte específica hacés vos. Si estás solo/a en el proyecto, escribí "todo".\n\n' +
      'Ejemplo de formato (SincLE): "Electrónica — armo el acople de señales y programo el Arduino."'
    )
    .setRequired(true);

  form.addTextItem()
    .setTitle('3. Dirección de correo electrónico')
    .setHelpText('Ejemplo: nombre@institucion.org')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('4. Dirección')
    .setHelpText(
      'Es la dirección del instituto o lugar de trabajo.\n\n' +
      'Ejemplo (SincLE): La Salle 4397, CP1603 (Villa Martelli, Pcia. Bs. As.) — CITEDEF.'
    )
    .setRequired(false);

  form.addTextItem()
    .setTitle('5. Ciudad')
    .setHelpText('Ejemplo (SincLE): Villa Martelli, Pcia. Bs. As.')
    .setRequired(false);

  form.addTextItem()
    .setTitle('6. País')
    .setHelpText('Ejemplo (SincLE): Argentina')
    .setRequired(false);

  // ---------- Bloque 2 — Inicio de la Idea ----------
  form.addPageBreakItem()
    .setTitle('Bloque 2 — Inicio de la Idea')
    .setHelpText('Todo inicia cuando se lo nombra.');

  form.addParagraphTextItem()
    .setTitle('7. Concepto de la idea: Define un nombre para la idea/proyecto/sistema y luego un acrónimo')
    .setHelpText(
      'Ejemplo (SincLE): para un sistema que sincroniza un láser con un espectrómetro, el nombre ' +
      'podría ser "Sistema de Sincronización Láser-Espectrómetro" y el acrónimo, SincLE.\n\n' +
      'El nombre no es un detalle decorativo: ponerle nombre propio a la idea es el primer paso ' +
      'para poder hablar de ella como una cosa que existe y se puede proteger.'
    )
    .setRequired(true);

  // ---------- Bloque 3 — Filtros posibilitantes ----------
  form.addPageBreakItem()
    .setTitle('Bloque 3 — Filtros posibilitantes')
    .setHelpText(
      'Importante: para responder estas 6 preguntas, imaginá que tenés recursos y capacidades ' +
      'infinitas. No es momento de filtrar por "no tenemos equipo o tiempo". Es momento de ver la ' +
      'idea en su mejor versión posible. La realidad la aterrizamos en los bloques siguientes.'
    );

  form.addParagraphTextItem()
    .setTitle('8. Alcance')
    .setHelpText(
      '¿A cuántas personas afectaría este proyecto?\n\n' +
      'Ejemplo (SincLE): SincLE afecta a CITEDEF, CNEA, al sistema microLIBS y a otros ' +
      'laboratorios e institutos que pudieran utilizar/necesitar un sistema de sincronización de ' +
      'alta resolución temporal.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('9. Impacto')
    .setHelpText(
      '¿Qué impacto tendrá en las personas/sociedad? ¿Es urgente cubrir esta necesidad? Explícalo.\n\n' +
      'Ejemplo (SincLE): el impacto de SincLE es directo en la sincronización del láser EKSPLA y ' +
      'del espectrómetro LIBS2500+, ya que ambos equipos necesitan un sistema que los sincronice ' +
      'con pocos microsegundos de retardo.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('10. Dolores')
    .setHelpText(
      '¿Cubre algún dolor de las personas/sociedad?\n\n' +
      'Ejemplo (SincLE): sí, el económico, porque hacer SincLE costaría menos de 50 mil y comprar ' +
      'un generador de pulsos sale por lo menos 500 mil.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('11. Posibilidad de realización')
    .setHelpText(
      '¿Se puede implementar esta idea-proyecto dentro de un año o dos?\n\n' +
      'Ejemplo (SincLE): sí, una versión de sincronización con otro láser se demoró 6 meses en ' +
      'implementar.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('12. Eficacia')
    .setHelpText(
      '¿Es simple y rentable la idea? Explícalo.\n\n' +
      'Ejemplo (SincLE): sí, es simple porque se utilizaría la plataforma Arduino. Es económico ' +
      'porque se tendrían que comprar componentes como resistencias, optoacopladores, etc., que ' +
      'son económicos.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('13. Efecto')
    .setHelpText(
      '¿Cuánto durarán los resultados de esta idea?\n\n' +
      'Ejemplo (SincLE): durará mucho tiempo y se podrían pasar a doctorandos para que implementen ' +
      'ajustes y generen nuevos experimentos.'
    )
    .setRequired(true);

  // ---------- Bloque 4 — Posicionamiento ----------
  form.addPageBreakItem().setTitle('Bloque 4 — Posicionamiento');

  form.addParagraphTextItem()
    .setTitle('14. Competencia')
    .setHelpText(
      '¿Contra qué otros sistemas o productos compite esta idea-proyecto?\n\n' +
      'Ejemplo (SincLE): compite con fabricantes de sistemas electrónicos de sincronización, como ' +
      'generadores de pulsos y generadores de señales de sincronización.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('15. Diferencial')
    .setHelpText(
      'Y respecto de la competencia, éste, ¿en qué se diferencia? ¿Cuál es su diferencial?\n\n' +
      'Ejemplo (SincLE): se diferencia en que los sistemas comerciales no son open source y no se ' +
      'pueden especificar para una tesis doctoral. Pero el diferencial es más interesante: genera ' +
      'conocimiento y podría llegar a necesitar protección de PI.'
    )
    .setRequired(true);

  // ---------- Bloque 5 — Descripción técnica ----------
  form.addPageBreakItem().setTitle('Bloque 5 — Descripción técnica');

  form.addParagraphTextItem()
    .setTitle('16. Descripción de la Idea en detalle')
    .setHelpText(
      'Si el proyecto ya existe, describí lo que ya se hace: no hace falta que propongas nada nuevo.\n\n' +
      'Ejemplo (SincLE): la idea es que este sistema, en principio, sincronice con una resolución ' +
      'de 10 us a 1 us un láser EKSPLA y un espectrómetro LIBS2500+. Se puede programar un Arduino ' +
      'para que saque pulsos TTL por dos de sus pines con diferencia de microsegundos, de tal forma ' +
      'que se pueda modificar ese valor para cada experimento.\n\n' +
      'Fijate qué hace el ejemplo: no dice sólo QUÉ se quiere lograr, dice CÓMO. Nombra el equipo ' +
      '(Arduino), la señal (pulsos TTL), por dónde sale (dos pines) y qué se puede ajustar (la ' +
      'diferencia de microsegundos, distinta para cada experimento). Escribí tu idea así: no ' +
      '"hacemos X", sino con qué equipo se hace, en qué orden, y qué parámetro se puede cambiar.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('17. ¿Sobre qué problemas trata tu idea?')
    .setHelpText(
      'Ejemplo (SincLE): los instrumentos que sincronizará son del 2000 y ambos sólo funcionan como ' +
      'Master cuando se los requiere sincronizar. Como solución se quiere implementar un sistema ' +
      'que los sincronice con hardware, porque con el control por software no se alcanza la ' +
      'resolución de microsegundos que se requiere para hacer LIBS. Otras técnicas podrían ' +
      'necesitar menos o más tiempo, pero esto se podría agregar sin problemas si ya está ' +
      'determinado desde el inicio en el software del sistema microLIBS.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('18. Si tu idea se hiciese realidad ¿quién se beneficiaría más y cómo?')
    .setHelpText(
      'Ejemplo (SincLE): CITEDEF, CNEA y el sistema científico argentino (doctores, doctorandos, ' +
      'ingenieros, técnicos, biólogos, etc.).'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('19. ¿Cuáles son los primeros pasos para poner en marcha la idea?')
    .setHelpText(
      'Ejemplo (SincLE):\n' +
      'Paso 1. Diseñar el sistema con DiDe.\n' +
      'Paso 2. Implementar la primera versión: SincLEv1.\n' +
      'Paso 3. Validar SincLEv1.\n' +
      'Paso 4. Agregar SincLEv1 al sistema microLIBS.\n' +
      'Paso 5. Mejorarlo para que sea un sistema de sincronización general.\n\n' +
      'Estos pasos son el primer borrador del flujo del proyecto (paso 3 de DiDe): escribí uno por línea.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('20. Si tu idea fuese seleccionada y se llevara a la práctica, ¿cuál sería el resultado óptimo y cómo se mediría?')
    .setHelpText(
      'Ejemplo (SincLE): se buscarían resultados SMART, sobre todo medibles, para optimizar y ' +
      'mejorar. El resultado óptimo para microLIBS sería que el láser EKSPLA dispare, que se pueda ' +
      'hacer un barrido de tiempos en microsegundos, y que el espectrómetro LIBS2500+ lea a esas ' +
      'diferencias temporales en forma real. Se mediría comparando espectros medidos a diferentes ' +
      'tiempos con literatura científica del NIST o de otra base de espectros elementales y de ' +
      'sustancias, o también comparando con modelos espectrales de las diferentes sustancias ' +
      'analizadas.\n\n' +
      'Ojo con esta: pide DOS cosas, el resultado y cómo se mide. No dejes la segunda afuera.'
    )
    .setRequired(true);

  // ---------- Bloque 6 — La frase ----------
  form.addPageBreakItem()
    .setTitle('Bloque 6 — La frase')
    .setHelpText('Última pregunta, y va al final a propósito: recién ahora, después de haber ' +
      'descrito todo, estás en condiciones de resumirlo en una línea.');

  form.addParagraphTextItem()
    .setTitle('21. Frase que describe la idea')
    .setHelpText(
      'Una sola línea, la que dirías si alguien te pregunta en el pasillo de qué se trata. Tiene ' +
      'que ser corta: es la frase marketinera del proyecto.\n\n' +
      'Ejemplo (SincLE): "SincLE, Sincroniza la Luz para ver más allá de lo Evidente."\n\n' +
      'Fijate que el acrónimo y la frase se sostienen entre sí: la frase explica de dónde sale el ' +
      'nombre, y el nombre hace que la frase se recuerde.'
    )
    .setRequired(true);

  Logger.log('=== ETAPA I — LA IDEA ===');
  Logger.log('Link para responder: ' + form.getPublishedUrl());
  Logger.log('Link para editar (colores, tipografía, correcciones): ' + form.getEditUrl());
}

/* ==========================================================================
 *  ETAPA II — EL PROYECTO  (preguntas 22 a 32)
 * ========================================================================== */
function crearEtapa2_ElProyecto() {
  const form = FormApp.create('Encuesta de Concepto — Etapa II: El Proyecto (CaPI · DiDe)');
  configurarForm_(form);

  form.setDescription(
    'Paso 1 de DiDe — CaPI. ETAPA 2 de 2.\n\n' +
    'Segunda y última parte, más corta que la primera. Acá se trata de LO QUE EL PROYECTO NECESITA ' +
    'para existir de verdad: recursos, escala y financiamiento.\n\n' +
    'Igual que en la Etapa I, cada pregunta trae un ejemplo resuelto de SincLE (un sistema de ' +
    'sincronización láser/espectrómetro). Es otro proyecto a propósito: mirá el nivel de detalle, ' +
    'no el contenido.\n\n' +
    'Varias de estas preguntas son del proyecto entero. Si trabajás en equipo, respondé desde tu ' +
    'mirada aunque no sea tu área, y si no sabés, escribí "no sé". Que no sepamos también es un ' +
    'resultado.\n\n' +
    'Podés enviar y después volver a editar tu respuesta.'
  );

  form.setConfirmationMessage(
    '¡Gracias! Con esto cerramos el Paso 1. Podés volver a este link para corregir.\n\n' +
    'El próximo paso es el documento Concepto consolidado y el A3.'
  );

  // ---------- Identificación (para cruzar con la Etapa I) ----------
  form.addPageBreakItem()
    .setTitle('Identificación')
    .setHelpText('Sólo para poder cruzar esta respuesta con la que diste en la Etapa I.');

  form.addTextItem()
    .setTitle('Nombre')
    .setHelpText('Escribilo igual que en la Etapa I.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Tu parte o rol dentro del proyecto')
    .setRequired(true);

  // ---------- Bloque 7 — Recursos y escalabilidad ----------
  form.addPageBreakItem().setTitle('Bloque 7 — Recursos y escalabilidad');

  form.addParagraphTextItem()
    .setTitle('22. ¿Qué presupuesto necesita para llevarse a cabo el primer prototipo funcional?')
    .setHelpText(
      'Ejemplo (SincLE): en principio tenemos un Arduino Mega, los instrumentos y el programa. Se ' +
      'requiere personal con conocimientos en programación e instrumentación, y los componentes ' +
      'electrónicos para acoplar el sistema Arduino al láser y al espectrómetro. Con $50.000 ' +
      'alcanzaría.\n\n' +
      'Fijate que el ejemplo separa lo que YA se tiene de lo que hay que comprar. Hacé lo mismo.'
    )
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('23. ¿Qué presupuesto se necesita para llevar a cabo un prototipo "de vuelo"?')
    .setHelpText(
      '"De vuelo" = la versión robusta, la que ya no es de laboratorio.\n\n' +
      'Ejemplo (SincLE): se podría pasar a un ESPCAM para agregar visión a la sincronización. Para ' +
      'este prototipo se requieren $100.000, pero se podría controlar y ver imagen de la muestra, ' +
      'por ejemplo, mientras se hace LIBS en el punto de enfoque.'
    )
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('24. ¿Es replicable? ¿Puede producirse en más cantidad?')
    .setHelpText(
      'Ejemplo (SincLE): sí.\n\n' +
      'Este ejemplo quedó corto a propósito, para que veas la diferencia: un "sí" solo no sirve ' +
      'para documentar nada. Contá con qué se replica y qué haría falta para hacer varios.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('25. ¿Existe demanda local de este producto o servicio?')
    .setHelpText(
      'Ejemplo (SincLE): sí, laboratorios que utilizan instrumentación para armar sistemas ' +
      'complejos, de Argentina y de la región.'
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('26. ¿Existe demanda internacional de este producto o servicio?')
    .setHelpText(
      'Ejemplo (SincLE): sí, a nivel Latinoamérica, porque los investigadores no cuentan con ' +
      'presupuestos para adquirir sistemas comerciales que salen desde US$600 hasta US$5000.'
    )
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('27. ¿Crees que se puede montar una empresa para fabricarlo en serie/proveer el servicio?')
    .setHelpText('Ejemplo (SincLE): sí. (Si tu respuesta es sí, decí para quién vendería y qué vendería.)')
    .setRequired(false);

  // ---------- Bloque 8 — Financiamiento ----------
  form.addPageBreakItem()
    .setTitle('Bloque 8 — Financiamiento')
    .setHelpText(
      'Nadie tiene por qué saber de fondos. Si no sabés, escribí "no sé": el hueco marcado sirve ' +
      'más que un dato inventado.'
    );

  form.addParagraphTextItem()
    .setTitle('28. ¿De dónde se pueden obtener fondos para el desarrollo del conceptual?')
    .setHelpText('Ejemplo (SincLE): subsidios de institutos de investigación, concursos de innovación.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('29. ¿De dónde se pueden obtener fondos para el desarrollo del prototipo funcional?')
    .setHelpText('Ejemplo (SincLE): de concursos y/o del Estado.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('30. ¿De dónde se pueden obtener fondos para el prototipo "de vuelo"?')
    .setHelpText('Ejemplo (SincLE): de concursos y/o del Estado.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('31. ¿De dónde se pueden obtener fondos para la producción en serie?')
    .setHelpText('Ejemplo (SincLE): de concursos y/o del Estado, de empresas privadas.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('32. Recomendar entidad/entidades para llevarlo a cabo')
    .setHelpText(
      'Ejemplo (SincLE): Ministerio de Defensa, CONICET, universidades, escuelas técnicas, ' +
      'laboratorios biológicos.'
    )
    .setRequired(false);

  Logger.log('=== ETAPA II — EL PROYECTO ===');
  Logger.log('Link para responder: ' + form.getPublishedUrl());
  Logger.log('Link para editar (colores, tipografía, correcciones): ' + form.getEditUrl());
}
