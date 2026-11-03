# Mi contabilidad · landing

Página estática que explica **Mi contabilidad**, la app Android que convierte las notificaciones
de bancos y billeteras en movimientos claros. Sin build step, sin analítica y sin dependencias
externas: HTML, CSS y JavaScript servidos por nginx.

## Arrancar con Docker

```bash
cp .env.example .env
docker compose up --build -d
```

Abre `http://localhost:8081` (o el puerto que hayas puesto en `LANDING_PORT`).

Para detenerla:

```bash
docker compose down
```

## Verla sin Docker

```bash
python3 -m http.server 8081 -d site
```

También puedes abrir `site/index.html` directamente en el navegador, aunque las fuentes locales y
las rutas relativas se comportan mejor con un servidor.

## Estructura

```
site/
  index.html          Contenido y secciones
  estilos.css         Sistema visual, layout y movimiento
  app.js              Interruptor notificación / movimiento y año del pie
  assets/
    logo.png          Logo real de la app
    fonts/            Bricolage Grotesque, Public Sans y JetBrains Mono (self-hosted)
Dockerfile            nginx:alpine + sitio
docker-compose.yml    Un servicio, un puerto
nginx.conf            gzip, caché y cabeceras de seguridad
PRODUCT.md            Contexto de producto y límites de lo que se puede afirmar
DESIGN.md             Sistema visual implementado
```

## Contenido

- Los datos de la demostración son ficticios y están marcados como tales.
- No hay testimonios, métricas, precios ni enlaces de descarga inventados.
- Las afirmaciones de privacidad corresponden al comportamiento por defecto de la app: tu hoja de
  Google Sheets es opcional.
- Enlaces: el proyecto vive en [GitHub](https://github.com/Sebastian-Buitrag0).

## Accesibilidad

La página se puede leer sin JavaScript, navegar con teclado y respeta
`prefers-reduced-motion`. El contraste de texto cumple WCAG AA.
