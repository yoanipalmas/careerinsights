## Automatizar publicaciones de LinkedIn en el Blog

El sitio puede consumir automáticamente URLs de publicaciones de LinkedIn para mostrarlas en la sección "Desde LinkedIn" del Blog mediante embeds oficiales.

### Cómo funciona
- El cliente intenta cargar un JSON de publicaciones desde `import.meta.env.VITE_LINKEDIN_POSTS_URL`.
- Si no está configurado o falla, usa el fallback local `public/data/linkedin-posts.json`.
- Cada entrada debe tener la forma `{ url: string, title?: string }`.
 - Cuando edites el Sheet, el sitio puede forzar actualización agregando un parámetro de cache-busting (`?ts=<timestamp>`). En modo admin, hay botón "Actualizar feed" y auto-refresh cada 60s.

### Opciones de fuente de datos (sin backend propio)
- JSON estático en GitHub/Gist: publica un archivo JSON y configura `VITE_LINKEDIN_POSTS_URL` apuntando al `raw` (ej: `https://raw.githubusercontent.com/<user>/<repo>/main/linkedin-posts.json`).
- JSONBin/MockAPI: crea una colección y usa la URL de lectura como `VITE_LINKEDIN_POSTS_URL`.
- Google Sheets → JSON (opensheet):
	1. Crea una hoja con columnas `url`, `title`.
	2. Hazla accesible (Compartir → Cualquiera con el enlace puede ver).
	3. Obtén el `sheetId` desde la URL del documento: `https://docs.google.com/spreadsheets/d/<sheetId>/edit`.
	4. Usa el nombre de la pestaña (por defecto `Sheet1`) como `<sheetName>`.
	  5. Configura `VITE_LINKEDIN_POSTS_URL=https://opensheet.elk.sh/<sheetId>/<sheetName>`.
		  - Si el nombre de la pestaña es "Hoja 1", usa `Hoja%201`.

### Configuración del entorno
En desarrollo, crea `.env` y añade:

```
VITE_LINKEDIN_POSTS_URL=https://opensheet.elk.sh/<sheetId>/<sheetName>
```

En producción (Vite), configura la variable de entorno `VITE_LINKEDIN_POSTS_URL` en tu plataforma de despliegue.

### Formato del JSON
```json
[
	{ "url": "https://www.linkedin.com/posts/yoanipalmas_lo-que-sea-activity-1234567890123456789-ABCDEF", "title": "Título opcional" }
]
```

Para Google Sheets vía opensheet, cada fila debe tener las columnas `url` y `title` y se transformará automáticamente a ese formato.

### Notas
- LinkedIn no ofrece un RSS oficial de perfiles; usar embeds evita scraping y respeta Términos.
- Solo publicaciones públicas pueden embeberse.
- Si el embed no funciona para una URL, copia el vínculo directo desde el botón "..." → "Copiar enlace a la publicación" en LinkedIn.

### Modo administrador (gestor local)
- Para pruebas rápidas, abre `/blog?admin=1` o en entorno de desarrollo.
- Usa el gestor para agregar/eliminar publicaciones locales que se guardan en `localStorage`.
- Se combinan automáticamente con el feed remoto configurado.
# Career Insights

**Decide tu futuro profesional con datos y propósito.**  
Career Insights es una plataforma diseñada para apoyar a los orientadores escolares, ofreciendo a estudiantes y familias una guía moderna, ágil y basada en datos reales del mercado laboral.

## 🌟 Características principales

- Pruebas de intereses y aptitudes basadas en CHASIDE.
- Itinerarios profesionales personalizados y adaptados a cada estudiante.
- Panel de control para orientadores con herramientas de seguimiento.
- Resultados inmediatos, informes descargables y soporte a orientadores.
- Cumplimiento total con el RGPD.

## 🧰 Tecnologías utilizadas

- ⚡ [Vite](https://vitejs.dev/) — Bundler rápido para desarrollo moderno.
- ⚛️ [React](https://react.dev/) — Librería para la construcción de interfaces.
- 🧠 [TypeScript](https://www.typescriptlang.org/) — Tipado estático para mayor seguridad.
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Framework de estilos utilitario.

## 🛠 Instalación local

```bash
git clone https://github.com/Luisgr10/Career-Insights.git
cd career-insights
npm install
npm run dev
