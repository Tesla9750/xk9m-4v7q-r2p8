# Portal de Handover & Onboarding — IS&T Alstom

Sitio web estático diseñado para alojarse en **GitHub Pages** con el objetivo de facilitar la transferencia de conocimientos (*handover*) al nuevo practicante del área de **IS&T (Information Systems & Technology)** en **Alstom**.

## Características incluidas
- **Dashboard de Bienvenida** con resumen del sitio y métricas rápidas.
- **Checklist Interactivo de Onboarding** (Día 1, Semana 1, Mes 1) con progreso guardado en `localStorage`.
- **Respaldo de Actividades y Documentos**: mapa visual de carpetas y documentos de apoyo.
- **Proyecto de Monitoreo de Red**: descripción técnica, flujo paso a paso para solicitar permiso al repositorio privado en GitHub y plantilla copiable.
- **Guías Técnicas Paso a Paso**:
  1. Cómo iniciar en el área de IS&T (día a día).
  2. Cómo configurar una impresora general / de red.
  3. Cómo configurar y calibrar la impresora de etiquetas.
  4. Cómo bootear una PC con memoria USB y sin ella utilizando **F11** (PXE / Network Boot).
  5. Cómo solicitar una guía de envío (paquetería).
- **Buscador en tiempo real** (`Ctrl+K` o `/`), **Modo Oscuro/Claro** y botón **"Resaltar editables"** para identificar rápidamente los textos genéricos `[EDITAR: ...]`.

---

## Estructura del Proyecto

```text
ist-handover-alstom/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Despliegue automático a GitHub Pages
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos personalizados, modo impresión y placeholders
│   └── js/
│       ├── app.js            # Lógica de búsqueda, checklist, filtros y UI
│       └── guides-data.js    # Contenido editable (textos, guías, enlaces, contactos)
├── index.html                # Página principal del portal
└── README.md
```

---

## Cómo personalizar la información por partes

Todo el contenido del portal está centralizado en [`assets/js/guides-data.js`](assets/js/guides-data.js).
Los datos genéricos están marcados con `[EDITAR: ...]` para ubicarlos fácilmente (también puedes activar el botón **"Resaltar editables"** directamente en la web).

1. Abre `assets/js/guides-data.js`.
2. Modifica la sección que desees actualizar (`meta`, `checklist`, `backupRepo`, `networkProject`, `guides`, `contacts` o `faqs`).
3. Guarda el archivo y prueba en tu navegador.

---

## Cómo probar en local

Como es un sitio 100% estático, puedes abrir `index.html` directamente o levantar un servidor local sencillo:

```powershell
# Opción 1: Con Python
python -m http.server 8080

# Opción 2: Con Node.js
npx serve .
```

Luego abre `http://localhost:8080` en tu navegador.

---

## Cómo publicar en GitHub Pages

1. Sube este proyecto a un repositorio en GitHub (rama `main`).
2. Ve a **Settings &gt; Pages** dentro de tu repositorio en GitHub.
3. En **Build and deployment &gt; Source**, selecciona **GitHub Actions**.
4. Cada `git push` a la rama `main` ejecutará automáticamente `.github/workflows/deploy.yml` y publicará la versión más reciente.
