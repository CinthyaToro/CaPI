# A3 — SincLE · Sincroniza la Luz para ver más allá de lo Evidente

| Código | Versión | Emisión | Estado | Elaboró | Revisó | Aprobó |
|---|---|---|---|---|---|---|
| SincLE-A3 | 0.1 | 2026-10-02 | Ejemplo resuelto | Cinthya Toro | — | — |

**Proyecto:** SincLE (sistema microLIBS) · **Institución:** LFFL — CITEDEF · **Carácter:** Público — ejemplo de capacitación CaPI

> Hoja 2: lienzo A3 de nueve cajas, destilado del Concepto de SincLE. Es un ejemplo resuelto: muestra cómo un Concepto se destila en una sola hoja.
>
> Origen: Concepto de SincLE (0_Concepto-SincLE) y diagrama de flujo de SincLE (31/08/2024).

## 1 · Beneficiarios
*Se alimenta de: Concepto: Alcance · ¿Quién se beneficiaría?*

**Principal:** el sistema microLIBS de CITEDEF, que necesita sincronizar su láser y su espectrómetro.

**Secundarios:** CNEA y laboratorios de Argentina y de la región que arman sistemas complejos con instrumentos; doctores, doctorandos, ingenieros y técnicos.

## 2 · Problemas
*Se alimenta de: Concepto: ¿Sobre qué problemas trata? · Impacto · Dolores*

**Principal:** el láser EKSPLA y el espectrómetro LIBS2500+ son del 2000 y los dos sólo funcionan como Master. Por software no se alcanza la resolución de microsegundos que requiere LIBS.

**Secundario:** los sincronizadores comerciales son cerrados y caros (US$600 a US$5000).

**Cómo se resuelve hoy:** con generadores de pulsos y de señales de sincronización comerciales.

## 3 · Propuesta de valor
*Se alimenta de: Concepto: Frase · Descripción*

Sincroniza la Luz para ver más allá de lo Evidente: sincronización por hardware, de 10 µs a 1 µs, ajustable en cada experimento.

## 4 · Soluciones
*Se alimenta de: Concepto: Descripción en detalle · Diagrama de flujo*

- Arduino Mega que emite pulsos TTL por dos pines con una diferencia de microsegundos ajustable.
- Acople al láser y al espectrómetro: adaptación de impedancia, optoacopladores, resistencias de acople y cables coaxiles.
- Componentes de protección y fuente (USB o transformador).
- Software: programa del Arduino (.ino) y control desde Python (.py).

## 5 · Canales
*Se alimenta de: Concepto: Demanda local e internacional · Primeros pasos*

- **Integración:** primero al sistema microLIBS; a futuro, otros instrumentos del laboratorio.
- **Formación:** doctorandos que lo ajustan y generan nuevos experimentos.
- **Réplica:** laboratorios de Argentina y Latinoamérica sin presupuesto para sistemas comerciales.

## 6 · Valor capturado
*Se alimenta de: Concepto: Efecto · Diferencial · Empresa*

- **Académico:** tesis doctorales y nuevos experimentos con resolución temporal controlada.
- **Institucional:** capacidad instalada propia en CITEDEF.
- **Económico:** sincronización por menos de $50.000 frente a US$600–5000 de un equipo comercial.
- **A futuro:** posible fabricación en serie.

## 7 · Estructura de costes
*Se alimenta de: Concepto: Presupuesto del prototipo funcional y de vuelo*

- **Ya disponible:** Arduino Mega, los instrumentos y el programa.
- **A comprar:** componentes electrónicos de acople y protección.
- **Personal:** conocimientos de programación e instrumentación.
- **Prototipo funcional:** $50.000.
- **Prototipo de vuelo** (ESPCAM, suma visión de la muestra): $100.000.

## 8 · Métricas clave
*Se alimenta de: Concepto: Resultado óptimo · Posibilidad de realización*

- **Técnico:** resolución de sincronización entre 10 µs y 1 µs.
- **Funcional:** el láser dispara, se hace un barrido de tiempos y el espectrómetro lee a esas diferencias en forma real.
- **Validación:** espectros a distintos tiempos comparados con la base del NIST o con modelos espectrales.
- **Plazo:** una versión con otro láser llevó 6 meses.

## 9 · Ventaja diferencial
*Se alimenta de: Concepto: Diferencial · Competencia*

- **Abierto y especificable:** se adapta a lo que pide una tesis doctoral; los comerciales no.
- **Costo:** un orden de magnitud menor que un equipo comercial.

**Pregunta para trabajar:** ¿SincLE tiene partes protegibles? Arduino y pulsos TTL son técnicas conocidas, pero el Concepto original decía que "podría llegar a necesitar protección de PI". ¿Qué habría que documentar para decidirlo?

---
*SincLE-A3 v0.1 · DiDe — Paso 2 (A3)*
