# ORINCOL S.A.S.

Sitio web corporativo de ORINCOL S.A.S., empresa colombiana de ingeniería civil e infraestructura. El proyecto está construido con Astro y TypeScript, con componentes reutilizables, rutas estáticas y estilos separados por responsabilidad.

## Requisitos

- Node.js `>=22.12.0`
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`.

## Build y preview

```bash
npm run build
npm run preview
```

`npm run build` genera las rutas estáticas en `dist/`, además de `sitemap-index.xml` mediante `@astrojs/sitemap`. El archivo `public/robots.txt` referencia el sitemap de producción.

## Estructura principal

- `src/components/`: componentes Astro reutilizables, incluyendo `ContactForm.astro` y `SEO.astro`.
- `src/data/`: navegación, servicios y proyectos tipados.
- `src/pages/`: homepage, servicios, proyectos, nosotros, clientes y contacto.
- `src/assets/projects/<slug>/`: portadas de cada proyecto procesadas con `astro:assets`.
- `src/styles/`: tokens y estilos por componente.

## Sustituir placeholders

Reemplaza los datos marcados como `[DATOS PENDIENTES]` en:

- `src/data/projects.ts`: clientes, detalles técnicos, categorías, ubicaciones y contenido validado.
- `src/data/services.ts`: descripciones y áreas de especialización definitivas.
- `src/data/navigation.ts`: enlaces corporativos y redes oficiales.
- `src/pages/nosotros.astro`: historia, hitos y metodología aprobada.
- `src/pages/clientes.astro`: nombres y logotipos autorizados.
- `src/pages/contacto.astro`: teléfono y ubicación corporativa definitivos.

Los proyectos de `src/data/projects.ts` están marcados explícitamente como `[PROYECTO DE EJEMPLO]` y deben reemplazarse o validarse antes de publicar.

## Formulario y Resend

`src/components/ContactForm.astro` incluye validación frontend y estados `idle`, `loading`, `success` y `error`. Actualmente el envío usa un estado simulado para dejar la UX lista sin inventar un endpoint.

Cuando se integre Resend:

1. Crear un endpoint seguro en `src/pages/api/contact.ts`.
2. Guardar `RESEND_API_KEY` únicamente como variable de entorno.
3. Enviar desde el endpoint, nunca desde el navegador.
4. Sustituir el `setTimeout` de `ContactForm.astro` por un `fetch` al endpoint.
5. Mantener la validación del servidor y protección contra abuso.

## SEO y sitemap

`src/components/SEO.astro` centraliza title, description, canonical, Open Graph, Twitter Cards y robots meta. La integración `@astrojs/sitemap` está configurada en `astro.config.mjs` con el dominio `https://orincol.com`; actualiza ese dominio si cambia el dominio oficial.
