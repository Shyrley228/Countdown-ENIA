# Contador de plazos oficiales ENIA Perú

Aplicación web estática para visualizar los plazos expresos relacionados con la Estrategia Nacional de Inteligencia Artificial del Perú 2026-2030. Calcula días hábiles restantes, porcentaje consumido y estado semaforizado.

## Funcionalidades

- Fecha límite calculada por plazo.
- Días hábiles restantes o días de atraso.
- Barra de progreso.
- Semáforo: verde (>30), amarillo (10 a 30) y rojo (<10 o vencido).
- Selector de fecha para simulación.
- Exportación de resultados a CSV.
- Diseño adaptable a celular y escritorio.
- Sin backend, base de datos ni claves de entorno.

## Estructura

```text
enia-plazos-vercel/
├── index.html
├── vercel.json
├── README.md
├── LICENSE
├── .gitignore
├── assets/
│   ├── app.js
│   ├── config.js
│   ├── favicon.svg
│   └── styles.css
└── docs/
    └── FUENTES_Y_CRITERIOS.md
```

## Ejecutar localmente

Puede abrir `index.html` directamente. Para probarlo como sitio web local, desde la carpeta del proyecto ejecute:

```bash
python -m http.server 8000
```

Luego visite `http://localhost:8000`.

## Publicar en GitHub

Cree un repositorio vacío y ejecute desde esta carpeta:

```bash
git init
git add .
git commit -m "Publicar contador de plazos ENIA"
git branch -M main
git remote add origin https://github.com/USUARIO/NOMBRE-DEL-REPOSITORIO.git
git push -u origin main
```

También puede crear el repositorio en GitHub y cargar manualmente todos los archivos y carpetas. No cargue únicamente el ZIP.

## Desplegar en Vercel

1. Ingrese a Vercel y seleccione **Add New > Project**.
2. Conecte su cuenta de GitHub.
3. Importe el repositorio.
4. Use **Framework Preset: Other**.
5. Mantenga la carpeta raíz en `./` y deje vacíos Build Command y Output Directory.
6. Seleccione **Deploy**.

Cada `push` posterior a la rama de producción generará un nuevo despliegue. Las ramas y pull requests pueden generar vistas previas.

## Actualizar fechas, plazos o feriados

Edite únicamente `assets/config.js`:

- `publicationDate`: fecha base del cómputo.
- `officialNonBusinessDays`: feriados y días no laborables excluidos.
- `deadlines`: nombre, fundamento, descripción y cantidad de días hábiles.

Después confirme y envíe el cambio a GitHub:

```bash
git add assets/config.js
git commit -m "Actualizar calendario de días no laborables"
git push
```

Vercel publicará la actualización automáticamente.

## Alcance

La aplicación es informativa. Debe actualizarse cuando se publiquen nuevos feriados, días no laborables o modificaciones normativas que alteren el cómputo.
