# Portal de Handover & Onboarding — IS&T Alstom (SHGB)

Sitio web estático diseñado para alojarse en **GitHub Pages** con el objetivo de facilitar la transferencia de conocimientos (*handover*) al nuevo practicante del área de **IS&T (Information Systems & Technology)** en **Alstom (SHGB - Ciudad Sahagún)**.

---

## Secciones y características incluidas

- **Inicio & Bienvenida:** Resumen operativo del sitio, periodo documentado (**Junio 2026 - Noviembre 2026**), contacto de transición y métricas rápidas.
- **Checklist Interactivo de Onboarding (`Día 1`, `Semana 1`, `Mes 1`):**
  - Cubre configuración inicial, Zscaler/red interna, instalación de **Equitrac Client**, presentación con el equipo, recorrido por áreas clave y racks, solicitud de llave del área, ubicación de stock/Asset Tags, proceso de Altas y Bajas, pruebas de impresión y booteo (F9/F11), envíos/recepciones por paquetería y uso obligatorio de **EPP** en planta.
  - Avance persistido automáticamente en `localStorage`.
- **Respaldo de Actividades y Documentación Clave:**
  - Enlace al repositorio privado [`Tesla9750/Repositorio-Respaldo-Junio-Noviembre-2026`](https://github.com/Tesla9750/Repositorio-Respaldo-Junio-Noviembre-2026) (acceso bajo solicitud a `jdd_ben@hotmail.com`) y referencia a la copia local resguardada en el área.
  - Estructura real de **8 carpetas** (`01-Codigos-y-Scripts/` a `08-Gestion-Desechos-Electronicos-2026/`).
  - Documentos clave destacados: scripts de etiquetas y QRs, plantillas para registro de equipos recibidos por paquetería y solicitud de guías de envío, planos `SHGB Layout` / `Layout NOV 2026`, manual `Alstom_configuration_RPI5.pdf` y directorio privado de contactos.
  - Nota de mantenimiento y mejora continua para agregar/modificar carpetas y actualizar este portal o crear nuevas guías.
- **Proyecto MonitoreoRed (Alstom):**
  - Documentación del repositorio privado [`Tesla9750/MonitoreoRed_Alstom`](https://github.com/Tesla9750/MonitoreoRed_Alstom), desarrollado en **.NET 8 / ASP.NET Core Web API / Entity Framework Core / SQL Server (`MonitoreoRedDB`) / Swagger**, con envío de alertas automáticas por correo mediante **Make**.
  - Monitorea enlaces de red de los sitios del país, equipos de comunicación y dispositivos con IP (APs, impresoras, etc.), funcionando de manera operativa en todos los puntos contemplados.
  - Incluye arquitectura por capas, estado actual implementado, flujo opcional para solicitar acceso al código fuente, plantilla de correo copiable y comandos iniciales con `dotnet user-secrets`.
- **Guías Técnicas Paso a Paso (6 guías):**
  1. **Cómo iniciar en el área de IS&T (Día a Día):** revisión matutina en Outlook antes de las 9:00 a.m. (EPP, fotos y reporte al OSS Engineer), protocolo de atención a usuarios en el área (levantar ticket al número de soporte sin contacto directo previo), herramientas disponibles en el área, entregas/bajas, escalamiento y solución de problemas comunes (reinicio, actualizaciones, aplicación correcta, 4–6 h de aprovisionamiento en equipos nuevos).
  2. **Cómo configurar una impresora multifuncional Ricoh:**
     - *Sección A (Procedimiento General):* instalación de **Equitrac Client (Kofax)**, impresión mediante **FollowYou Print** y liberación en cualquier Ricoh con **credencial de acceso temporal** o correo y contraseña corporativos.
     - *Sección B (Casos Especiales):* conexión directa por dirección IP (TCP/IP) y escalamiento físico al **Ricoh Printer Specialist**.
  3. **Cómo configurar e instalar la impresora de etiquetas (Zebra ZT411):** instalación por **cable USB** (sin Wi-Fi) para **ZDesigner ZT411-203dpi ZPL** y ajuste en `Propiedades de la impresora > Opciones avanzadas > Valores de impresión` (`104 mm x 50.8 mm`, velocidad `152 mm/s`, oscuridad `15`, modo `Transferencia térmica`).
  4. **Cómo bootear una PC (F9 USB y F11 Local):** restablecimiento local con **F11** (solicitando código al OSS Engineer cuando aplique), arranque por USB con **F9** y validación de imagen corporativa.
  5. **Estados del LED en Access Points (Cisco Catalyst 9100 Series):** tabla de referencia de colores/patrones LED, categorías, significados y procedimiento autorizado de reinicio en puerto del switch.
  6. **Paquetería (Guías de envío y recepción de equipos):** uso de plantilla para solicitud de guías, embalaje y cargador, envío de datos por correo al responsable (preguntar al OSS Engineer si se desconoce), recolecciones los **lunes, miércoles y viernes**, y reporte de recepciones a los **IS&T Project Managers**.
- **Seguridad en Planta & EPP:**
  - Detalle del **EPP obligatorio** al cruzar las líneas amarillas o ingresar a naves de producción (botas de protección, chaleco reflectante naranja, *bump cap*, tapones auditivos y lentes de protección / cubrelentes sobre lentes graduados).
  - Reglas de tránsito seguro: pasillos y accesos autorizados, vigilancia constante, prioridad absoluta a montacargas y Trackmobile, prohibición de pasar bajo o cerca de grúas en movimiento, prohibición de transitar usando el celular y reporte inmediato de actividades o condiciones inseguras.
- **Roles de Escalación y Preguntas Frecuentes (FAQ):**
  - Directorio por rol sin datos personales públicos (`Local Operations Specialist`, `OSS Engineer`, `Ricoh Printer Specialist`, `IS&T Project Managers`, `Practicante Saliente`).
  - FAQ rápido, incluyendo el flujo para solicitar la clave de recuperación de **BitLocker** al **OSS Engineer**.
- **Utilidades de interfaz:** Buscador en tiempo real (`Ctrl+K` o `/`), cambio de tema **Claro / Oscuro**, botón **"Resaltar editables"** y botones de copiado rápido.

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
│       ├── app.js            # Lógica de búsqueda, checklist, filtros, navegación y UI
│       └── guides-data.js    # Contenido centralizado (meta, checklist, repos, guías, contactos, FAQ)
├── index.html                # Página principal del portal (cache-busting en ?v=18)
└── README.md
```

---

## Cómo personalizar la información

Todo el contenido dinámico del portal vive en [`assets/js/guides-data.js`](assets/js/guides-data.js), mientras que las secciones estáticas (`Inicio`, `Respaldo`, `MonitoreoRed`, `Seguridad & EPP`, `Contactos`) se estructuran en [`index.html`](index.html).

1. Edita [`assets/js/guides-data.js`](assets/js/guides-data.js) (`meta`, `checklist`, `backupRepo`, `networkProject`, `guides`, `contacts`, `faqs`) o [`index.html`](index.html) según corresponda.
2. Si modificas CSS o JS, incrementa el parámetro de versión (`?v=18` → `?v=19`) en [`index.html`](index.html) para evitar caché en el navegador.
3. Guarda los cambios, verifica en local y realiza commit + push a `main`.

---

## Cómo probar en local

Como es un sitio 100% estático, puedes levantar un servidor local sencillo desde la raíz del proyecto:

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
2. Ve a **Settings > Pages** dentro de tu repositorio en GitHub.
3. En **Build and deployment > Source**, selecciona **GitHub Actions**.
4. Cada `git push` a la rama `main` ejecutará automáticamente `.github/workflows/deploy.yml` y publicará la versión más reciente.
