# Mapa de obligaciones de la ENIA

Aplicación web lúdica para que una entidad pública peruana identifique sus obligaciones, roles, metas y oportunidades dentro de la **Estrategia Nacional de Inteligencia Artificial 2026–2030**.

## Tecnologías

- React 18
- Vite
- Tailwind CSS 4
- Vercel Functions
- Claude API mediante el SDK oficial de Anthropic
- Persistencia local del avance con `localStorage`

## Funcionalidades

- Selector por tipo de entidad pública.
- Selector opcional de entidad con responsabilidad expresa en la hoja de ruta.
- Obligaciones transversales y metas específicas separadas por tipo.
- Responsables, plazo o hito, metas acumuladas 2026–2030 y páginas fuente.
- Filtros, búsqueda y seguimiento lúdico de avance.
- Chat “NIA” con contexto limitado a las obligaciones del perfil seleccionado.
- Diseño responsive para escritorio y móvil.

## Fuente principal

Estrategia Nacional de Inteligencia Artificial 2026–2030, anexo de la Resolución Ministerial N.° 152-2026-PCM.

La ENIA establece mayormente roles, condiciones de implementación y metas anuales acumuladas. Por ello la app no inventa fechas calendario cuando la fuente no las contiene.

## Desarrollo local

```bash
npm install
npm run dev
```

El frontend funcionará con Vite, pero la ruta `/api/chat` requiere una función de Vercel. Para probar frontend y función juntos:

```bash
npm install -g vercel
cp .env.example .env.local
# completa ANTHROPIC_API_KEY
vercel dev
```

## Variables de entorno

En Vercel, abre **Project Settings → Environment Variables** y crea:

| Variable | Obligatoria | Descripción |
|---|---:|---|
| `ANTHROPIC_API_KEY` | Sí | Token privado de Anthropic. Nunca uses prefijo `VITE_`. |
| `CLAUDE_MODEL` | No | Por defecto se usa `claude-sonnet-4-6`. |

Después de crear o cambiar variables, realiza un nuevo deployment.

## Despliegue en GitHub y Vercel

1. Crea un repositorio vacío en GitHub.
2. Sube todos los archivos del proyecto.
3. En Vercel selecciona **Add New → Project**.
4. Importa el repositorio.
5. Vercel detectará Vite. Los valores ya están declarados en `vercel.json`:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Configura las variables de entorno.
7. Pulsa **Deploy**.

Cada `push` a la rama principal generará un nuevo despliegue de producción. Los pull requests pueden generar Preview Deployments.

## Seguridad de la integración con Claude

- La clave se utiliza únicamente dentro de `/api/chat.js`.
- El navegador nunca recibe `ANTHROPIC_API_KEY`.
- La función limita tamaño e historial de mensajes.
- Incluye rate limiting básico por instancia y validación de entrada.
- El prompt bloquea solicitudes de secretos y exige distinguir mandatos, metas y recomendaciones.

Para producción con tráfico alto, añade protección adicional con Vercel Firewall, autenticación y un rate limiter persistente como Upstash Redis.

## Estructura

```text
mapa-obligaciones-enia/
├── api/
│   └── chat.js
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ChatPanel.jsx
│   │   ├── ObligationCard.jsx
│   │   ├── Onboarding.jsx
│   │   └── TargetTimeline.jsx
│   ├── data/
│   │   └── enia.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Mantenimiento de datos

La matriz normativa está centralizada en `src/data/enia.js`. Cada registro contiene:

- tipo del elemento;
- ámbito de aplicación;
- responsable;
- plazo o hito;
- metas anuales;
- páginas fuente;
- pasos sugeridos.

Antes de incorporar una nueva obligación, verifica si es mandato general, función de un rol, meta nacional o recomendación.

## Aviso

Esta aplicación es informativa. No sustituye la interpretación oficial de la PCM, los lineamientos posteriores ni la asesoría jurídica de cada entidad.
