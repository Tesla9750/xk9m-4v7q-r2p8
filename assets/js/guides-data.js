/**
 * ============================================================================
 * ALSTOM IS&T HANDOVER PORTAL - ARCHIVO DE DATOS Y CONTENIDO
 * ============================================================================
 * Guía de edición rápida:
 * - Todos los textos genéricos pendientes de personalizar están envueltos en:
 *   <span class="editable-placeholder">[EDITAR: ...]</span>
 * - Puedes modificar cualquier título, enlace, comando o paso directamente aquí
 *   sin necesidad de tocar la lógica en app.js ni la estructura en index.html.
 * ============================================================================
 */

window.HANDOVER_DATA = {
  meta: {
    siteTitle: "Portal de Handover IS&T",
    company: "Alstom",
    siteLocation: '<span class="editable-placeholder">SHGB - Ciudad Sahagún</span>',
    outgoingIntern: '<span class="editable-placeholder">Juan de Dios Benitez Nava</span>',
    outgoingContact: '<span class="editable-placeholder">jdd_ben@hotmail.com</span>',
    period: '<span class="editable-placeholder">Junio 2026 - Noviembre 2026</span>',
    lastUpdated: "Noviembre 2026",
    welcomeNote:
      "¡Bienvenido(a) al equipo de IS&T en Alstom! Este portal concentra parte del conocimiento operativo, respaldos, herramientas y procedimientos paso a paso que me hubiera gustado tener el primer día. Úsalo como guía base durante tu estancia y siéntete libre de actualizarlo para la siguiente generación."
  },

  /**
   * Checklist interactivo para los primeros días/semanas.
   * El avance se guarda automáticamente en el navegador (localStorage).
   */
  checklist: [
    {
      id: "chk-1",
      phase: "Día 1",
      title: "Recibir laptop corporativa, credenciales de red y gafete",
      description:
        'Verificar inicio de sesión en Windows, acceso a correo Outlook y Microsoft Teams junto con tu jefe directo (<strong>Local Operations Specialist</strong>: <span class="editable-placeholder">[EDITAR: Nombre]</span>) y el <strong>OSS Engineer</strong>.',
      tag: "Accesos"
    },
    {
      id: "chk-2",
      phase: "Día 1",
      title: "Validar conexión / Zscaler y herramientas base",
      description:
        "Confirmar acceso a la red interna, algunos sitios dentro de la intranet corporativa y Microsoft Teams.",
      tag: "Red & Seguridad"
    },
    {
      id: "chk-3",
      phase: "Día 1",
      title: "Recorrido físico por áreas clave de IS&T y presentación del equipo",
      description:
        'Ubicar el cuarto de servidores (Site), bodega de resguardo de equipos y zonas de impresión junto con el <strong>OSS Engineer</strong>; presentarte con el <strong>Ricoh Printer Specialist</strong> y conocer los canales con los <strong>IS&amp;T Project Managers</strong>.',
      tag: "Sitio"
    },
    {
      id: "chk-4",
      phase: "Semana 1",
      title: "Explorar el Repositorio / Carpeta de Respaldo IS&T",
      description:
        "Descargar o marcar en favoritos los manuales, scripts de soporte rápido, drivers y formatos de responsiva documentados en la sección de Respaldo.",
      tag: "Documentación"
    },
    {
      id: "chk-5",
      phase: "Semana 1",
      title: "Solicitar acceso al repositorio privado de Monitoreo de Red",
      description:
        "Crear o usar tu cuenta de GitHub autorizada y enviar la solicitud de acceso al <strong>Local Operations Specialist</strong> siguiendo la plantilla de la sección de Monitoreo.",
      tag: "GitHub"
    },
    {
      id: "chk-6",
      phase: "Semana 1",
      title: "Probar instalación de impresora Ricoh e impresora de etiquetas",
      description:
        "Realizar una prueba real de impresión en red en equipos Ricoh (coordinando cualquier detalle físico con el <strong>Ricoh Printer Specialist</strong>) y una calibración en la impresora térmica de etiquetas.",
      tag: "Hardware"
    },
    {
      id: "chk-7",
      phase: "Semana 1",
      title: "Realizar un booteo de práctica (F11 PXE y USB)",
      description:
        "Acompañado por el <strong>OSS Engineer</strong>, identificar las memorias USB de soporte vigentes y confirmar el arranque por red (F11) en un equipo de pruebas antes de atender un ticket real.",
      tag: "Sistemas"
    },
    {
      id: "chk-8",
      phase: "Mes 1",
      title: "Gestionar paquetería: envío con guía y reporte de equipos recibidos",
      description:
        "Acompañar o ejecutar el proceso completo de empaque y solicitud de guía, así como verificar activos que llegan por paquetería y reportarlos a los <strong>IS&amp;T Project Managers</strong>.",
      tag: "Logística"
    },
    {
      id: "chk-9",
      phase: "Mes 1",
      title: "Documentar nuevos hallazgos o mejoras",
      description:
        "Si cambia alguna ruta de servidor, contraseña genérica de driver o procedimiento interno, actualizar este portal o el repositorio de respaldo.",
      tag: "Mejora Continua"
    }
  ],

  /**
   * Información sobre el repositorio de GitHub y/o carpeta compartida de respaldo.
   */
  backupRepo: {
    repoSlug: '<span class="editable-placeholder">[EDITAR: usuario-o-org/alstom-ist-respaldo]</span>',
    githubUrl: '<span class="editable-placeholder">[EDITAR: https://github.com/usuario/repositorio-respaldo]</span>',
    cloudFolderUrl: '<span class="editable-placeholder">[EDITAR: Enlace a Carpeta SharePoint / OneDrive IS&T]</span>',
    localPath: '<span class="editable-placeholder">[EDITAR: \\\\servidor-local\\IST_Respaldo\\]</span>',
    summary:
      "Durante mi periodo se consolidó un repositorio y carpeta estructurada con respaldos de actividades diarias, scripts de automatización, formatos administrativos, controladores verificados y guías internas para evitar retrabajos.",
    folders: [
      {
        name: "01-Scripts-Soporte/",
        icon: "terminal",
        description:
          "Scripts en PowerShell y Batch para tareas repetitivas: reinicio de cola de impresión (spooler), diagnóstico rápido de red, limpieza de caché y extracción de número de serie/BIOS."
      },
      {
        name: "02-Documentacion-Procesos/",
        icon: "book-open",
        description:
          "Manuales internos en PDF/Word, mapas de switches y nodos de red del sitio, instructivos internos y directorio privado de nombres y contactos asignados a cada rol."
      },
      {
        name: "03-Plantillas-Formatos/",
        icon: "file-spreadsheet",
        description:
          "Formatos oficiales de entrega-recepción (responsivas de laptop, celular, monitores), checklist de bajas de personal y plantillas de correos."
      },
      {
        name: "04-Drivers-Utilidades/",
        icon: "hard-drive",
        description:
          "Controladores probados de impresoras de oficina y de etiquetas, herramientas portables de diagnóstico y utilidades de imagen USB."
      },
      {
        name: "05-Respaldo-Actividades/",
        icon: "archive",
        description:
          "Evidencias, reportes mensuales de actividades realizadas durante la estancia, resúmenes de proyectos menores y notas de lecciones aprendidas."
      }
    ],
    keyDocuments: [
      {
        title: "Bitácora de Actividades y Tickets Frecuentes",
        folder: "05-Respaldo-Actividades",
        format: "XLSX / MD",
        description:
          "Registro histórico de incidencias comunes en el sitio y cómo se resolvieron paso a paso.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Inventario de Equipos y Stock de Periféricos",
        folder: "03-Plantillas-Formatos",
        format: "XLSX",
        description:
          "Control de laptops disponibles en bodega, cargadores, mochilas, headsets y equipos en reparación.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Paquete de Drivers de Impresión y Etiquetas",
        folder: "04-Drivers-Utilidades",
        format: "ZIP / EXE",
        description:
          "Instaladores listos para usar sin perder tiempo buscando versiones compatibles en internet.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Mapa de Red y Direccionamiento IP Local",
        folder: "02-Documentacion-Procesos",
        format: "PDF / Draw.io",
        description:
          "Referencia rápida de VLANs, IPs de impresoras fijas, relojes checadores y puntos de acceso.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Directorio Privado de Roles y Contactos",
        folder: "02-Documentacion-Procesos",
        format: "MD / XLSX",
        description:
          "Listado interno dentro del repositorio privado con los nombres, correos y extensiones asignados a cada rol de soporte y escalación.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      }
    ]
  },

  /**
   * Información del Proyecto de Monitoreo de Red y acceso al repositorio privado.
   */
  networkProject: {
    title: "Proyecto de Monitoreo de Red Local",
    status: "Repositorio Privado en GitHub",
    repoSlug: '<span class="editable-placeholder">[EDITAR: usuario-o-org/ist-network-monitor]</span>',
    ownerRole: 'Local Operations Specialist (<span class="editable-placeholder">[EDITAR: Nombre]</span>) / Juan de Dios Benitez Nava',
    overview:
      "Proyecto desarrollado durante mi periodo en IS&T con el objetivo de supervisar en tiempo real la disponibilidad, latencia y estado de equipos críticos de la red local (switches, puntos de acceso, impresoras de planta/oficina y enlaces principales), permitiendo detectar caídas antes de que el usuario levante un ticket.",
    monitoredAssets: [
      "Switches de acceso y distribución (MDF / IDFs)",
      "Access Points Wi-Fi de áreas operativas y oficinas",
      "Impresoras de red y estaciones de etiquetado críticas",
      "Gateways, enlaces ISP y servidores locales"
    ],
    techStack: [
      '<span class="editable-placeholder">[EDITAR: Python / Node.js / PowerShell]</span>',
      '<span class="editable-placeholder">[EDITAR: ICMP Ping / SNMP / HTTP]</span>',
      '<span class="editable-placeholder">[EDITAR: Dashboard Web / Grafana / Flask]</span>',
      "Git & GitHub Private Repo"
    ],
    accessSteps: [
      {
        step: 1,
        title: "Prepara tu cuenta de GitHub",
        detail:
          'Asegúrate de tener una cuenta activa en GitHub (preferentemente vinculada o autorizada con tu correo corporativo de Alstom o autorizada por tu tutor). Ten a la mano tu nombre de usuario exacto (ej. <code>@tu-usuario</code>).'
      },
      {
        step: 2,
        title: "Envía la solicitud formal de acceso",
        detail:
          'Contacta por correo o Microsoft Teams a tu jefe directo — el <strong>Local Operations Specialist</strong> (<span class="editable-placeholder">[EDITAR: Nombre]</span>) — con copia al practicante saliente si aún está en transición, usando la plantilla de solicitud de abajo.'
      },
      {
        step: 3,
        title: "Acepta la invitación del repositorio",
        detail:
          'Una vez aprobado, GitHub enviará un correo de invitación. También puedes aceptarla directamente entrando a <code>github.com/notifications</code>. Se recomienda asignarte permisos de lectura/escritura (<strong>Write / Maintain</strong>) si continuarás manteniéndolo.'
      },
      {
        step: 4,
        title: "Clona y configura el entorno local",
        detail:
          'Configura tu clave SSH o Personal Access Token (PAT) en Git para clonar repositorios privados, revisa el archivo <code>README.md</code> interno y crea tu archivo <code>.env</code> a partir de <code>.env.example</code> (nunca subas credenciales al repo).'
      }
    ],
    requestTemplate: `Asunto: Solicitud de acceso a repositorio privado - Proyecto Monitoreo de Red IS&T

Hola [EDITAR: Nombre del Local Operations Specialist],

Espero que estés teniendo un excelente día.

Como parte de mi incorporación como practicante en el área de IS&T en Alstom (SHGB), estoy revisando la documentación de handover y requiero acceso al repositorio privado del Proyecto de Monitoreo de Red para poder darle seguimiento y mantenimiento.

Mis datos de GitHub son:
- Nombre completo: [EDITAR: Tu Nombre Completo]
- Correo Alstom: [EDITAR: tu.nombre@alstomgroup.com]
- Usuario de GitHub: @[EDITAR: tu-usuario-github]
- Repositorio solicitado: [EDITAR: usuario-o-org/ist-network-monitor]
- Nivel de permiso sugerido: [Write / Read]

Quedo atento a tu aprobación e invitación. ¡Muchas gracias!

Saludos,
[EDITAR: Tu Nombre]
Practicante IS&T - Alstom`,
    setupCommands: `# 1. Clonar el repositorio privado (vía HTTPS o SSH)
git clone https://github.com/[EDITAR-USUARIO]/[EDITAR-REPO-MONITOREO].git

# 2. Entrar a la carpeta del proyecto
cd [EDITAR-REPO-MONITOREO]

# 3. Revisar variables de entorno y dependencias
# (Consulta el README.md interno para detalles específicos del proyecto)
cp .env.example .env`
  },

  /**
   * Guías Prácticas Paso a Paso
   * Categorías válidas: "Onboarding", "Hardware & Impresoras", "Sistemas & Booteo", "Logística & Procesos"
   */
  guides: [
    {
      id: "como-iniciar",
      title: "Cómo Iniciar en el Área de IS&T (Guía del Día a Día)",
      category: "Onboarding",
      icon: "rocket",
      difficulty: "Básico",
      estimatedTime: "15 min lectura",
      summary:
        "Resumen operativo de cómo arrancar tu jornada, dónde gestionar los tickets de usuarios, herramientas indispensables en tu laptop y buenas prácticas de atención en sitio.",
      prerequisites: [
        "Cuenta de red corporativa activa y acceso a Microsoft Teams / Outlook.",
        "Acceso al portal de tickets (<span class=\"editable-placeholder\">[EDITAR: ServiceNow / Jira / Sistema Local]</span>).",
        "Conocer la ubicación de la bodega de TI y llaves/accesos físicos."
      ],
      steps: [
        {
          title: "1. Revisa la cola de tickets e incidentes al iniciar el turno",
          description:
            'Al llegar, abre tu correo, Microsoft Teams y la bandeja del portal de tickets (<span class="editable-placeholder">[EDITAR: URL o Nombre del Portal de Tickets]</span>). Prioriza incidentes que detengan producción o líneas operativas antes que solicitudes de periféricos.',
          tip: "Si un usuario te intercepta en el pasillo pidiendo soporte rápido, ayúdalo si es urgente, pero pídele amablemente crear el ticket (o créalo tú en su nombre) para dejar registro de tus métricas."
        },
        {
          title: "2. Ten a la mano tu kit básico de herramientas",
          description:
            'Prepara en tu escritorio o mochila técnica: 1 memoria USB booteable de imagen, 1 USB con utilidades/drivers, adaptador Ethernet USB-C a RJ45, desarmador de precisión, etiquetas adhesivas para activos y un cable de red probado.',
          command: `# Comando útil en PowerShell para consultar información rápida de un equipo
Get-CimInstance Win32_Bios | Select-Object SerialNumber, SMBIOSBIOSVersion`
        },
        {
          title: "3. Verifica el flujo de préstamos y entregas (Responsivas)",
          description:
            'Nunca entregues una laptop, monitor, diadema o cargador sin registrarlo en la hoja de inventario y generar su responsiva en <span class="editable-placeholder">[EDITAR: Carpeta 03-Plantillas-Formatos / Portal de Activos]</span>.'
        },
        {
          title: "4. Escala a tiempo cuando un problema salga de tu alcance",
          description:
            'Si una incidencia requiere permisos de Domain Admin, cambios en firewall corporativo o fallas de infraestructura global, documenta las pruebas que ya hiciste (capturas, IP, hostname, número de serie) y escala al equipo L2/L3 correspondiente.'
        }
      ],
      troubleshooting: [
        "No tengo acceso a alguna carpeta de red o herramienta: pide a tu tutor que verifique en qué grupos de Active Directory estás dado de alta.",
        "Zscaler / VPN bloquea una herramienta técnica local: valida si el sitio o IP local debe agregarse a excepciones o si requiere perfil administrativo."
      ]
    },
    {
      id: "impresora-general",
      title: "Cómo Configurar una Impresora Multifuncional Ricoh (Red / Oficina)",
      category: "Hardware & Impresoras",
      icon: "printer",
      difficulty: "Básico",
      estimatedTime: "10 min",
      summary:
        "Procedimiento estándar para conectar impresoras multifuncionales Ricoh en Windows mediante servidor de impresión o IP estática, y saber cuándo escalar al Ricoh Printer Specialist.",
      prerequisites: [
        "Dirección IP de la impresora Ricoh o ruta del servidor de impresión (<span class=\"editable-placeholder\">[EDITAR: \\\\servidor-impresion\\nombre-cola]</span>).",
        "Equipo del usuario conectado a la red corporativa (LAN o Wi-Fi interno, no red de invitados).",
        "Driver Ricoh PCL6 / Universal Print Driver disponible en la carpeta de respaldo (si se instala por IP directa)."
      ],
      steps: [
        {
          title: "1. Verificar conectividad hacia la impresora Ricoh",
          description:
            "Antes de instalar, confirma desde la computadora del usuario que existe comunicación de red hacia la IP de la impresora y valida en pantalla física que el equipo esté encendido y sin alertas críticas.",
          command: `ping [EDITAR-IP-IMPRESORA-RICOH]`
        },
        {
          title: "2. Método A (Recomendado): Instalar desde Servidor de Impresión",
          description:
            'Presiona <code>Win + R</code>, escribe la ruta del servidor de impresión corporativo y presiona Enter. Haz doble clic sobre la impresora Ricoh deseada para que Windows descargue el controlador automáticamente.',
          command: `\\\\[EDITAR-SERVIDOR-IMPRESION]`,
          tip: "Si aparece un mensaje de '¿Confía en esta impresora?' o solicitud de elevación, ingresa tus credenciales de soporte o apóyate con el OSS Engineer si el usuario no tiene permisos."
        },
        {
          title: "3. Método B: Instalación manual por puerto TCP/IP",
          description:
            "Si el sitio usa conexión directa por IP: ve a <strong>Configuración &gt; Bluetooth y dispositivos &gt; Impresoras y escáneres &gt; Agregar dispositivo &gt; Agregar manualmente</strong>. Elige <em>Agregar una impresora por dirección IP o nombre de host</em>, selecciona <strong>Dispositivo TCP/IP</strong>, ingresa la IP de la Ricoh y selecciona el driver Ricoh correspondiente de la carpeta de respaldo."
        },
        {
          title: "4. Configurar preferencias predeterminadas y página de prueba",
          description:
            "Abre las <strong>Propiedades de impresora &gt; Preferencias</strong> para validar tamaño de papel (Carta / A4 según corresponda), impresión a doble cara (Dúplex) o blanco y negro por defecto. Finaliza enviando una <strong>Página de prueba</strong>.",
          warning: "Si el usuario imprime con código PIN / Badge (Follow-Me Printing), recuérdale vincular su gafete en el lector o configurar su código de usuario en las preferencias del driver."
        },
        {
          title: "5. Cuándo escalar al Ricoh Printer Specialist",
          description:
            "Si la computadora ya envía trabajos correctamente pero la impresora Ricoh presenta atascos físicos frecuentes, falta de tóner/fusor, códigos de error SC en la pantalla o problemas de escáner/bandejas físicas, repórtalo directamente al <strong>Ricoh Printer Specialist</strong> en sitio."
        }
      ],
      troubleshooting: [
        "Error 'La cola de impresión se queda trabada' en Windows: ejecuta <code>net stop spooler</code>, limpia <code>C:\\Windows\\System32\\spool\\PRINTERS\\*</code> y ejecuta <code>net start spooler</code>.",
        "Error 0x0000011b o restricción de Point and Print en Windows 11: instala primero el driver Ricoh manualmente como administrador.",
        "Código de error SC / alerta física / tóner agotado en la multifuncional: acude con el <strong>Ricoh Printer Specialist</strong> para revisión y suministro en sitio."
      ]
    },
    {
      id: "impresora-etiquetas",
      title: "Cómo Configurar e Instalar la Impresora de Etiquetas",
      category: "Hardware & Impresoras",
      icon: "tag",
      difficulty: "Intermedio",
      estimatedTime: "15-20 min",
      summary:
        "Instalación de drivers térmicos, ajuste de medidas de etiqueta, calibración de sensores de brecha (gap) y pruebas para impresoras de etiquetas (ej. Zebra / Dymo / Honeywell).",
      prerequisites: [
        "Modelo exacto de impresora de etiquetas (<span class=\"editable-placeholder\">[EDITAR: Ej. Zebra ZD421 / ZT230 / GX420t]</span>).",
        "Rollo de etiquetas y Ribbon (si aplica impresión por transferencia térmica) correctamente colocados.",
        "Driver oficial disponible en la carpeta <code>04-Drivers-Utilidades/</code>."
      ],
      steps: [
        {
          title: "1. Verificar carga física del rollo, ribbon y conexión",
          description:
            "Abre la cubierta de la impresora y asegúrate de que el rollo de etiquetas esté centrado entre las guías amarillas/verdes y pase por debajo del sensor móvil. Conecta el cable USB o cable de red Ethernet según la estación.",
          warning: "Si usas etiquetas térmicas directas (sin ribbon), verifica que el modo de impresión en el driver esté configurado como 'Térmica Directa' y no 'Transferencia Térmica', de lo contrario marcará error de falta de ribbon."
        },
        {
          title: "2. Instalar el controlador oficial del fabricante",
          description:
            'Ejecuta el instalador del driver (<span class="editable-placeholder">[EDITAR: Ej. Zebra Setup Utilities / ZDesigner v5 o v8]</span>) con privilegios de administrador. Selecciona el puerto USB (ej. <code>USB001</code>) o puerto TCP/IP con la IP fija asignada.'
        },
        {
          title: "3. Configurar dimensiones exactas de la etiqueta",
          description:
            'Ingresa a <strong>Propiedades de la impresora &gt; Preferencias de impresión &gt; Configuración de página</strong>. Define exactamente el ancho y alto de la etiqueta física en milímetros o pulgadas (ej. <span class="editable-placeholder">[EDITAR: Ej. 100mm x 50mm / 4" x 2"]</span>) y ajusta la velocidad/oscuridad (<em>Darkness</em>) a un nivel intermedio (ej. 10-15) para evitar etiquetas borrosas o quemadas.'
        },
        {
          title: "4. Calibrar el sensor de etiquetas (Paso Crítico)",
          description:
            "Para que la impresora no salte etiquetas ni imprima desfasado entre una y otra, ejecuta la calibración de medios desde las herramientas del driver (<em>Tools &gt; Action &gt; Calibrate media</em>) o manteniendo presionado el botón de <strong>Feed / Pause</strong> según el modelo hasta que parpadee 2 veces y avance de 2 a 4 etiquetas automáticamente.",
          tip: "Guarda el perfil de configuración desde Zebra Setup Utilities para poder replicarlo en segundos si otra estación requiere la misma etiqueta."
        },
        {
          title: "5. Validar desde el software del usuario",
          description:
            'Envía una etiqueta real desde la aplicación utilizada en planta/almacén (<span class="editable-placeholder">[EDITAR: SAP / BarTender / Navegador / Excel]</span>) y comprueba que el código de barras sea legible con un escáner.'
        }
      ],
      troubleshooting: [
        "La impresora avanza 2 o 3 etiquetas en blanco y parpadea en rojo: falta calibrar el sensor o el tipo de sensor (Gap/Web vs Black Mark) no coincide con el rollo.",
        "El texto sale cortado o muy pequeño desde el navegador/PDF: asegúrate de desactivar 'Ajustar a la página' y seleccionar el tamaño personalizado de la etiqueta en la ventana de impresión."
      ]
    },
    {
      id: "bootear-pc-f11-usb",
      title: "Cómo Bootear una PC: Sin Memoria (F11 PXE) y Con Memoria USB",
      category: "Sistemas & Booteo",
      icon: "cpu",
      difficulty: "Intermedio",
      estimatedTime: "20-45 min",
      summary:
        "Procedimiento completo para arrancar equipos de cómputo e instalar o restaurar la imagen corporativa, tanto mediante arranque por red sin USB (F11 / PXE) como utilizando memoria USB booteable.",
      prerequisites: [
        "Respaldo previo de la información del usuario (OneDrive / carpeta de respaldo) — ¡Formatear borra todo!",
        "Cargador conectado a la corriente eléctrica (obligatorio durante reimagen/BIOS).",
        "Cable de red Ethernet conectado directamente al puerto RJ45 o adaptador Ethernet corporativo soportado (para arranque F11 sin USB).",
        "Clave de BIOS corporativa si la máquina está protegida (<span class=\"editable-placeholder\">[EDITAR: Solicitar a Supervisor / Ver bóveda interna]</span>)."
      ],
      steps: [
        {
          title: "1. Preparación previa y respaldo de BitLocker / Datos",
          description:
            "Antes de reiniciar para formatear o reparar, verifica si el disco está cifrado con BitLocker y asegúrate de tener respaldados los archivos del usuario. Si solo vas a reparar el arranque sin formatear, ten a la mano la clave de recuperación de BitLocker desde el portal de administración/Intune.",
          warning: "Nunca inicies una reinstalación sin confirmar por escrito o correo que el usuario respaldó sus archivos locales (Descargas, Documentos, Escritorio, PST locales)."
        },
        {
          title: "2. Opción A — Bootear SIN memoria USB utilizando F11 (Network / PXE Boot)",
          description:
            'Ideal para cargar la imagen corporativa de Alstom directamente desde el servidor de red (<span class="editable-placeholder">[EDITAR: SCCM / MECM / WDS]</span>):<br>1. Conecta el equipo por cable de red Ethernet (el Wi-Fi no funciona para PXE en la mayoría de equipos).<br>2. Enciende o reinicia el equipo y presiona repetidamente la tecla <strong>F11</strong> (en algunos modelos puede abrir el Boot Menu o Recovery/PXE; en ciertos equipos HP/Dell/Lenovo verifica si es <strong>F12 / F9 / F11</strong> según el modelo en sitio).<br>3. Selecciona la opción <strong>IPv4 Network / Onboard NIC (PXE)</strong> y presiona Enter.<br>4. Cuando aparezca el mensaje <em>"Press ENTER for network boot service"</em> o el prompt de PXE, presiona <strong>Enter</strong> (o <strong>F12</strong> si lo solicita en pantalla).<br>5. Selecciona la secuencia de tareas (<span class="editable-placeholder">[EDITAR: Nombre de la Task Sequence Corporativa]</span>) e ingresa la contraseña de despliegue si aplica.',
          tip: "Si al presionar F11 no aparece la tarjeta de red en el menú de arranque, entra a la BIOS (F2 / F10 / F1), habilita 'UEFI Network Stack' o 'PXE Boot on LAN', y desactiva temporalmente opciones que bloqueen PXE si las instrucciones locales lo indican."
        },
        {
          title: "3. Opción B — Bootear CON memoria USB",
          description:
            'Útil cuando no hay acceso al servidor PXE, estás instalando una imagen offline, o ejecutando herramientas de diagnóstico:<br>1. Inserta la memoria USB booteable (preparada previamente con <span class="editable-placeholder">[EDITAR: Rufus / Ventoy / Media Creation Tool / Imagen Oficial]</span> en formato <strong>GPT / UEFI</strong>).<br>2. Enciende la PC y presiona repetidamente la tecla de <strong>Boot Menu</strong> según la marca (<code>F12</code> en Dell/Lenovo, <code>F9</code> en HP, o <code>F11</code> en placas/equipos configurados con ese acceso directo).<br>3. En la lista UEFI, selecciona el nombre de tu memoria USB (ej. <em>UEFI: Kingston DataTraveler</em>) y presiona Enter.',
          command: `# Referencia rápida de teclas comunes de Boot Menu / BIOS:
# - Tecla principal en sitio (PXE / Recovery): F11
# - Dell: F12 (Boot Menu) | F2 (BIOS)
# - Lenovo: F12 (Boot Menu) | F1 o Fn+F1 (BIOS)
# - HP: F9 (Boot Menu) | F10 (BIOS)`
        },
        {
          title: "4. Validación post-instalación",
          description:
            "Al terminar la carga del sistema operativo, verifica que el equipo se una correctamente al dominio o Azure AD/Intune, que tenga sus drivers completos en el Administrador de Dispositivos, que BitLocker vuelva a cifrar la unidad y que las políticas de seguridad/Zscaler se apliquen."
        }
      ],
      troubleshooting: [
        "No detecta el disco duro NVMe durante la instalación desde USB: es probable que falte el driver de controlador de almacenamiento (Intel RST / VMD) en la memoria USB, o requiera cambiar el modo SATA en BIOS según la guía del modelo.",
        "Error 'PXE-E53: No boot filename received' o timeout en F11: revisa que el puerto de red en la pared tenga enlace (LEDs encendidos), que el cable funcione y que la VLAN del puerto tenga habilitado el DHCP Helper hacia el servidor de imágenes.",
        "Error de Secure Boot al arrancar una USB externa: confirma que la USB esté formateada en FAT32/UEFI con firma válida, o consulta si la herramienta de diagnóstico requiere desactivar Secure Boot temporalmente (volviendo a activarlo al finalizar)."
      ]
    },
    {
      id: "solicitar-guia",
      title: "Paquetería: Solicitar Guías de Envío y Reportar Equipos Recibidos",
      category: "Logística & Procesos",
      icon: "package",
      difficulty: "Básico",
      estimatedTime: "15-20 min",
      summary:
        "Proceso completo de logística en IS&T: cómo solicitar guías para enviar equipos de forma segura y cómo recibir, verificar activos y reportar llegadas a los IS&T Project Managers.",
      prerequisites: [
        "Para envíos salientes: datos completos del destinatario (nombre, teléfono, correo y dirección completa), centro de costos (<span class=\"editable-placeholder\">[EDITAR: Centro de Costos / Código de Proyecto]</span>) y visto bueno del <strong>Local Operations Specialist</strong> si es urgente.",
        "Para recepción de equipos: guía o referencia de compra/proyecto y lista esperada de activos proporcionada por los <strong>IS&amp;T Project Managers</strong>.",
        "Material de embalaje (caja, plástico burbuja/espuma) y acceso a la carpeta o hoja de control de inventario."
      ],
      steps: [
        {
          title: "1. Envío saliente — Empacar el equipo de forma segura y tomar evidencias",
          description:
            "Envuelve la laptop/equipo con suficiente hule burbuja o insertos de cartón protector para que no se mueva dentro de la caja. Incluye el cargador separado en una bolsa y agrega una hoja impresa dentro con el número de ticket y destinatario. <strong>Toma foto</strong> del número de serie/asset tag antes de cerrar la caja."
        },
        {
          title: "2. Envío saliente — Medir, pesar y solicitar la guía",
          description:
            'Anota peso (kg) y dimensiones (L x A x H cm). Ingresa a <span class="editable-placeholder">[EDITAR: Portal de Paquetería (DHL/FedEx) o contacto interno de Logística]</span> con remitente Alstom (<span class="editable-placeholder">[EDITAR: Dirección del Sitio]</span>), datos del destinatario, centro de costos y número de ticket. Si tienes dudas sobre el tipo de envío, valida con el <strong>Local Operations Specialist</strong> o el <strong>OSS Engineer</strong>.',
          tip: "Para envíos de equipos con batería de litio (laptops), recuerda declarar que contiene batería instalada en equipo (UN3481) si el formato de la paquetería lo solicita."
        },
        {
          title: "3. Envío saliente — Pegar guía, entregar y registrar rastreo",
          description:
            "Imprime la guía y pégala en una cara plana y visible de la caja sin cubrir códigos de barras con cinta opaca. Registra el <strong>Número de Rastreo (Tracking Number)</strong> en el ticket del usuario y en el control de inventario."
        },
        {
          title: "4. Recepción de paquetería — Verificar activos y reportar a IS&T Project Managers",
          description:
            'Cuando lleguen cajas de hardware o infraestructura para proyectos del área:<br>1. Inspecciona el estado físico externo antes de firmar o recibir (si llega golpeada o abierta, toma fotos al instante).<br>2. Abre y verifica cantidad, modelo, <strong>número de serie (S/N)</strong>, <strong>Asset Tag</strong> y accesorios completos contra la orden o lista del proyecto.<br>3. Resguarda los equipos en bodega/zona asignada y envía el reporte de confirmación (listado de series + fotos/evidencia si aplica) a los <strong>IS&amp;T Project Managers</strong> responsables.',
          warning: "Nunca mezcles equipos recién llegados de un proyecto de infraestructura con el stock de soporte diario del OSS Engineer sin antes confirmar su recepción y asignación con los IS&T Project Managers."
        }
      ],
      troubleshooting: [
        "La paquetería no recolectó un envío saliente a tiempo: verifica en recepción/vigilancia si el paquete quedó en zona de salida antes de la hora de corte (<span class=\"editable-placeholder\">[EDITAR: Ej. 2:00 PM]</span>).",
        "Llega un paquete incompleto, dañado o sin saber a qué proyecto pertenece: documenta con fotos la guía y la etiqueta de la caja y consulta inmediatamente con los <strong>IS&amp;T Project Managers</strong> y el <strong>Local Operations Specialist</strong>."
      ]
    }
  ],

  /**
   * Roles clave de escalación (los datos personales y correos se consultan en el repositorio privado)
   */
  contacts: [
    {
      role: "Local Operations Specialist",
      scope: "Encargado del área y jefe directo. Supervisa las actividades del practicante, prioridades del sitio, autorizaciones y aprobación de accesos (como el repositorio privado de GitHub)."
    },
    {
      role: "OSS Engineer",
      scope: "Ingeniero de soporte en sitio encargado de los tickets y la atención directa a usuarios. Es la persona con la que más se interactúa en el día a día para dudas operativas y soporte técnico."
    },
    {
      role: "Ricoh Printer Specialist",
      scope: "Soporte en sitio de Ricoh encargado de la gestión de impresoras multifuncionales, suministros y resolución de problemas físicos o de impresión."
    },
    {
      role: "IS&T Project Managers",
      scope: "Encargados de la gestión de proyectos de infraestructura del área. Se colabora recurrentemente con ellos en el reporte de equipos que llegan por paquetería, verificación física de activos y control de entregas."
    },
    {
      role: "Practicante Saliente (Handover)",
      scope: "Dudas puntuales sobre el proyecto de monitoreo de red, scripts y respaldos documentados durante la transición."
    }
  ],

  /**
   * Preguntas Frecuentes Rápidas
   */
  faqs: [
    {
      q: "¿A quién acudo primero según el tipo de duda o incidencia?",
      a: "Para tickets y soporte técnico diario acude primero con el <strong>OSS Engineer</strong>; para impresoras multifuncionales con el <strong>Ricoh Printer Specialist</strong>; para llegadas de equipos/proyectos con los <strong>IS&amp;T Project Managers</strong>; y para permisos, prioridades o aprobaciones con tu jefe directo (<strong>Local Operations Specialist</strong>)."
    },
    {
      q: "¿Qué hago si al reiniciar o bootear una PC me pide la clave de recuperación de BitLocker?",
      a: 'No formatees de inmediato a menos que sea una reimagen aprobada. Consulta la clave de recuperación de 48 dígitos en <span class="editable-placeholder">[EDITAR: Portal de Intune / Active Directory / Administrador L2]</span> buscando por el Hostname o los primeros 8 caracteres del ID de clave.'
    },
    {
      q: "¿Dónde guardo nuevos manuales o scripts que yo desarrolle?",
      a: "Súbelos tanto a la carpeta compartida del área como al repositorio de respaldo en GitHub (siguiendo la estructura de carpetas 01 a 05) para mantener centralizada la documentación."
    },
    {
      q: "¿Cómo actualizo la información de esta página web?",
      a: "Toda la información textual de este portal vive en el archivo <code>assets/js/guides-data.js</code>. Solo edita el texto, haz commit y push a la rama <code>main</code>, y GitHub Actions actualizará automáticamente la página en GitHub Pages."
    }
  ]
};
