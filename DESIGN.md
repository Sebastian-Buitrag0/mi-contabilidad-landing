# Design system · Mi contabilidad landing

## Direction

**Un recibo que se ordena solo.** La notificación cruda entra por una ranura y sale convertida en
asientos legibles. El campo es verde bosque; el recibo es crema; el dorado marca la regla del
4x1000 y el lima confirma. La página se lee como un libro mayor contemporáneo, no como una pila de
tarjetas.

## Color

| Token | Hex | Uso |
|---|---|---|
| `--verde` | `#062b21` | Fondo principal, navegación, campo. |
| `--verde-2` | `#041e17` | Secciones de descanso, pie, ranura. |
| `--verde-3` | `#0b3b2e` | Acentos oscuros y bordes internos. |
| `--crema` | `#f4eedf` | Papel, texto sobre verde, banda de privacidad. |
| `--crema-2` | `#e9e0cc` | Riel del interruptor, papel secundario. |
| `--crema-3` | `#fbf7ec` | Paneles de demostración. |
| `--tinta` | `#14231c` | Texto sobre crema, líneas fuertes. |
| `--tinta-suave` | `#4f6157` | Texto secundario sobre crema. |
| `--lima` | `#d9f27a` | Confirmación, foco, cierre, palabras de acento. |
| `--oro` | `#e4be5a` | Reglas, 4x1000, etiquetas de sección. |
| `--oro-oscuro` | `#7a5a12` | Cifras doradas sobre crema. |
| `--verde-suave` | `#8fae9d` | Texto terciario sobre verde. |

El contraste mínimo es 4.5:1 para texto normal y 3:1 para texto grande. Las etiquetas pequeñas
sobre crema usan `--tinta-suave` o más oscuro, nunca grises claros.

## Tipografía

- **Display:** Bricolage Grotesque, 700. Titulares de `clamp(2.3rem, 5.2vw, 4.9rem)`, hero de
  `clamp(4.1rem, 9.2vw, 8.4rem)`. Tracking entre `-0.02em` y `-0.04em`. Interlineado 0.86–0.98.
- **Texto:** Public Sans, 400/500/600. Cuerpo 15.5–18 px, medida 46–70 ch, interlineado 1.55–1.6.
- **Datos:** JetBrains Mono, 400–700, con `font-variant-numeric: tabular-nums` para montos,
  etiquetas de recibo y metadatos. Nunca se usa como disfraz: aquí las cifras son el contenido.

## Layout

- Ancho máximo 1240 px; márgenes laterales de 24 px (20 px en móvil).
- Rejilla editorial: hero a dos columnas (texto / recibo) hasta 920 px; después una columna.
- Secciones con aire generoso: `clamp(80px, 11vw, 132px)` arriba y abajo.
- Filas de libro mayor con reglas de 1 px en lugar de tarjetas. Las tarjetas solo aparecen en la
  comparación antes/después, donde la metáfora lo pide.
- El recibo rota 1.3° en escritorio y 0.7° en móvil; la sombra tiene desplazamiento y desenfoque,
  nunca un halo.

## Componentes

- **Botón principal:** lima sobre tinta, radio 10 px, 14 px/600, icono de flecha dibujado.
- **Botón secundario:** borde crema translúcido; hover con fondo tenue.
- **Interruptor de demostración:** dos pestañas con `role="tab"`, fondo verde para la activa.
- **Recibo:** papel crema con cabecera mono, filas tabulares, sello `AL DÍA` lima y pie de datos
  de ejemplo.
- **Comparación:** notificación cruda a la izquierda, movimiento interpretado a la derecha, flecha
  dorada en el medio.
- **Asientos de funciones:** etiqueta mono dorada a la izquierda, título y texto a la derecha,
  reglas horizontales.
- **Pasos:** tres columnas con número, título y texto; en móvil se apilan con línea superior.
- **Privacidad:** banda crema con diagrama teléfono / hoja opcional y lista de garantías.
- **FAQ:** `details` nativos con signo más dibujado en CSS; la primera respuesta abre por defecto.
- **Cierre:** banda lima a sangre con titular grande, botón verde y enlace de vuelta.

## Movimiento

- Una sola entrada orquestada: el titular aparece, el recibo se imprime desde la ranura y el sello
  cae. Después, el interruptor notificación/movimiento cambia con una entrada de 280 ms.
- Easing exponencial `cubic-bezier(0.16, 1, 0.3, 1)`.
- `prefers-reduced-motion: reduce` desactiva animaciones y transiciones.
- El contenido es visible sin JavaScript; el interruptor se oculta y se muestran ambas caras.

## Accesibilidad

- HTML semántico, un `h1`, jerarquía de `h2`/`h3`, `main`, `nav`, `footer`.
- Skip link, foco visible lima (verde en superficies claras).
- Pestañas con `aria-selected`, `aria-controls`, `tabindex` y navegación con flechas/Home/End.
- `details` nativos para las preguntas.
- Contraste AA verificado con axe en escritorio y móvil; sin violaciones WCAG 2.1 A/AA.
- Sin dependencias externas, sin analítica, sin cookies.

## Contenido

Los datos del recibo y de la comparación son ejemplos ficticios y están rotulados. No se inventan
testimonios, métricas, precios ni descargas. La privacidad se describe como comportamiento por
defecto: tu hoja de Google Sheets es opcional.
