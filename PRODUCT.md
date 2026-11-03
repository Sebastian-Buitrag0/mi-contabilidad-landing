# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

<!-- Este repositorio es la landing page. El producto que explica es una app Android. -->

## Stack

delegated: HTML, CSS y JavaScript estáticos, servidos con nginx y Docker Compose. Es la opción
más simple para una página de una sola superficie, sin build step ni dependencias de runtime.

## Users

Personas en Colombia que usan banca móvil y billeteras (Nequi, BBVA, Google Wallet, Pibank,
RappiCard) y reciben notificaciones de cada compra. Quieren saber en qué se les va la plata sin
digitar cada movimiento, sin entregar sus datos a otro servicio y sin pelearse con el 4x1000.

## Product Purpose

Mi contabilidad lee las notificaciones de las apps bancarias en el teléfono, las convierte en
movimientos con monto, comercio, cuenta y categoría, y mantiene el mes, los saldos y los
presupuestos al día. El éxito es que la persona confíe en el registro sin tener que alimentarlo a
mano y pueda revisar cualquier movimiento en segundos.

## Positioning

Un asistente local, no un banco ni una app de finanzas genérica: captura las notificaciones que ya
llegan al teléfono, aplica reglas propias y resuelve el 4x1000 y el mes de presupuesto como los
maneja una persona en Colombia. Los datos viven en el teléfono; la nube es opcional.

## Operating Context

- Android, en español, montos en pesos colombianos (COP) guardados en centavos, hora de Bogotá.
- El mes de presupuesto puede empezar el día de pago (28 por defecto).
- El 4x1000 se estima al 0,4 % y se corrige cuando llega el cargo real.
- Google Sheets es opcional y solo recibe filas confirmadas; la nube es opcional.
- La app procesa en primer plano; si está cerrada, las notificaciones esperan en el teléfono hasta que la abras.

## Capabilities and Constraints

- Parsers propios para Nequi, BBVA y Google Wallet; parser genérico para Pibank, RappiCard y las demás.
- Bandeja de pendientes con tres categorías sugeridas, notificación local y creación de reglas.
- Dedupe por monto, cuenta y comercio dentro de dos minutos.
- Cuentas, saldos, traslados, 4x1000, presupuestos, metas, préstamos y pagos fijos.
- Exportación CSV; bloqueo con huella o PIN.
- Google Sheets: solo agrega filas en las columnas A–D; nunca edita ni borra.
- No lee SMS. No hay app publicada en tiendas. No hay datos reales en los repositorios.

## Brand Commitments

- Nombre: **Mi contabilidad**.
- Logo existente: cuadrado verde bosque, letra C crema y barra vertical dorada.
- Paleta de la app: verde bosque (#0B6E4F), crema y dorado; interfaz Material 3.
- Voz: español de Colombia, clara, tranquila y concreta. Sin promesas de rendimientos, sin urgencia
  artificial y sin tecnicismos innecesarios.
- La privacidad es un compromiso, no un adorno: por defecto nada sale del teléfono.

## Evidence on Hand

- `site/assets/logo.png` (logo real).
- README del producto con funciones, reglas y limitaciones.
- Capturas de la app en `../mi-contabilidad-frontend` y `test_visual/`.
- No hay testimonios, prensa, métricas de usuarios, precios ni enlaces de descarga. No inventarlos.

## Product Principles

1. **Privado por defecto.** Lo que llega al teléfono se queda en el teléfono.
2. **Automático, pero revisable.** La app propone; la persona confirma o crea una regla.
3. **La plata es exacta.** Centavos, 4x1000 y saldos se explican solos; nunca se duplican.
4. **Funciona sin conexión.** Tu hoja es un extra, no un requisito.
5. **Menos ruido, más claridad.** Cada notificación se convierte en una entrada legible.

## Accessibility & Inclusion

La landing debe cumplir WCAG AA en contraste, navegarse con teclado, respetar
`prefers-reduced-motion` y funcionar sin JavaScript para leer todo el contenido.
