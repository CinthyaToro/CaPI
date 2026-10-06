# A3 — CeSoTe · Celdas Solares Terrestres

| Código | Versión | Emisión | Estado | Elaboró | Revisó | Aprobó |
|---|---|---|---|---|---|---|
| CeSoTe-A3 | 0.1 | 2026-10-05 | Ejercicio · borrador | Equipo CeSoTe (perfiles ficticios E·R·F·Q) | — | — |

**Proyecto:** CeSoTe (ejercicio CaPI) · **Institución:** [ficticio] · **Carácter:** Público — ejercicio CaPI con perfiles ficticios

> Hoja 2: lienzo A3 de nueve cajas destilado de las cuatro encuestas de Concepto del equipo CeSoTe. Borrador armado por Claude (IA) a pedido de Cinthya Toro. Las respuestas son simuladas: E = ing. en ecología, R = ing. en energías renovables, F = doctor en física (celdas espaciales), Q = ing. químico.
>
> Origen: CaPI_Ejercicio-CST_Encuestas-Concepto_v0.md (05/10/2026) y CaPI_Ejercicio-CST_Normas-Fabricacion_v0.md. Las cifras son estimaciones de los perfiles, a verificar.

## 1 · Beneficiarios
*Se alimenta de: P5 · P15 · P21 (E, R, F, Q)*

**Principal:** armadores locales de módulos que hoy importan todas las celdas.

**Secundarios:** instaladores y cooperativas eléctricas; empresas que deben informar su huella; laboratorios y sector espacial que necesitan celdas caracterizadas; técnicos y proveedores locales de insumos.

## 2 · Problemas
*Se alimenta de: P7 · P11 · P14 (E, R, F, Q)*

**Principal:** el país importa todas sus celdas. Precio y plazos dependen de la aduana y del tipo de cambio, y no hay datos de rendimiento local ni de huella.

**Secundarios:**

- Lotes que varían sin poder encontrar la causa: insumos sin especificación propia [Q, F].
- Nadie se hace cargo del panel al final de su vida [E].
- No hay una línea donde ensayar cambios de proceso en volumen [F].

**Cómo se resuelve hoy:** importando módulos, o armándolos en el país con celdas importadas.

## 3 · Propuesta de valor
*Se alimenta de: P3 · P12 (los cuatro perfiles)*

Celdas solares hechas en el país, con cada lote medido con trazabilidad y su huella declarada, entregadas cerca de quien las instala.

## 4 · Soluciones
*Se alimenta de: P13 · P16 (E, R, F, Q)*

- **Línea piloto** de celdas de silicio cristalino, de wafer a celda clasificada [Q]. `[arquitectura propuesta: PERC; a confirmar]`
- **Especificación de celda y diagrama de flujo de producción** con puntos de inspección (PID, como pide la ECSS) [F].
- **Medición trazable:** simulador calibrado con celda de referencia [F].
- **Gestión ambiental:** efluentes, lavado de gases, ciclo de vida y plan de reciclado [E].
- **Mini módulo en campo** (NOA y Patagonia) y certificación IEC 61215/61730 [R].

## 5 · Canales
*Se alimenta de: P21 · P23 · P28 (E, R, F, Q)*

- **Industrial:** alianza con un armador local de módulos.
- **Directo:** cooperativas eléctricas e instaladores.
- **Servicio:** medición y calificación de celdas para laboratorios.
- **Formación:** técnicos de sala limpia, con universidades.
- **Réplica:** el PID permite copiar la línea en una planta mayor.

## 6 · Valor capturado
*Se alimenta de: P6 · P10 · P23 (E, R, F, Q)*

- **Monetario:** venta de celdas; servicios de medición, de proceso a terceros, de ciclo de vida y de reciclado.
- **Estratégico:** proceso propio documentado y saber de sala limpia que no se va con las personas.
- **Institucional:** banco de pruebas para TOPCon, heterojuntura y tándem.
- **PI:** `[a definir: qué parte del proceso es protegible]`

## 7 · Estructura de costes
*Se alimenta de: P18 · P19 (E, F, Q, R)*

- **PMV:** USD 0,6–1,2 M con equipos usados (bancos húmedos, difusión, PECVD, serigrafía, cocción, I-V), más unos USD 150 mil para efluentes y gases. `[a verificar; las estimaciones de E, F y Q se solapan]`
- **Línea piloto (~10 MW/año):** USD 10–20 M, más 10–15 % para gestión ambiental y reciclado. `[a verificar]`
- **Costos ocultos:** permiso ambiental (lo que más demora), calibración trazable, ensayos de calificación y certificación.

## 8 · Métricas clave
*Se alimenta de: P8 · P17 (E, R, F, Q)*

- **Técnico:** eficiencia de celda y dispersión entre lotes, en simulador clase AAA. `[valores a fijar en la especificación]`
- **Proceso:** rendimiento de línea (celdas buenas / celdas que entran), lote a lote.
- **Validación:** cada método de medición validado contra una referencia trazable.
- **Campo:** rendimiento real frente a la hoja de datos, durante un año.
- **Ambiente:** huella por kWh frente al módulo importado promedio (ISO 14040/44, verificada por un tercero).
- **Plazos:** primera celda medida en 6–9 meses; mini módulo en campo en 12; permiso ambiental en 18.

## 9 · Ventaja diferencial
*Se alimenta de: P12 (E, R, F, Q)*

- **Trazabilidad lote a lote** con medición calibrada.
- **Rigor de calificación espacial** aplicado a celdas terrestres.
- **Proceso propio documentado** (PID) y control de insumos con especificación propia.
- **Ciclo de vida declarado** y plan de recupero.
- **Cercanía:** entrega, garantía y soporte en el país.
- **Por cómo se documenta, la línea es transferible, certificable, modular y extensible.**
- **Forma doctorandos** en fabricación en sala limpia y en procesos micro y nanotecnológicos.

> *Para pensar:* Ninguno de los cuatro compite en costo: las fábricas de escala de gigawatts producen mucho más barato. ¿Alcanzan la trazabilidad y la cercanía para que un armador pague más? Lo tiene que confirmar el estudio de mercado [R].

> *Para pensar:* ¿Qué es protegible? Las recetas de proceso (ventanas de difusión, perfil de cocción) parecen candidatas a secreto industrial más que a patente.

---
*CeSoTe-A3 v0.1 · DiDe — Paso 2 (A3)*
