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
      title: "Recibir laptop, iniciar su configuración y explorar el sistema",
      description:
        "Verificar inicio de sesión en Windows, acceso a correo Outlook y Microsoft Teams junto con tu jefe directo (<strong>Local Operations Specialist</strong>) o el <strong>OSS Engineer</strong>.",
      tag: "Accesos"
    },
    {
      id: "chk-2",
      phase: "Día 1",
      title: "Validar conexión / Zscaler y herramientas base",
      description:
        "Confirmar acceso a la red interna, algunos sitios dentro de la intranet corporativa y otras herramientas del sistema.",
      tag: "Red & Seguridad"
    },
    {
      id: "chk-3",
      phase: "Día 1",
      title: "Instalación de aplicación para la impresión de documentos",
      description:
        "Entrar a la tienda de aplicaciones corporativas e instalar <strong>Equitrac Client</strong> para habilitar el envío e impresión de documentos.",
      tag: "Impresión"
    },
    {
      id: "chk-4",
      phase: "Día 1",
      title: "Conocer al equipo de IS&T",
      description:
        "Presentarte con el <strong>Local Operations Specialist</strong>, el <strong>OSS Engineer</strong>, el <strong>Ricoh Printer Specialist</strong> y los <strong>IS&amp;T Project Managers</strong> para ubicarte en la dinámica del área.",
      tag: "Equipo"
    },
    {
      id: "chk-5",
      phase: "Semana 1",
      title: "Recorrido físico por áreas clave de IS&T y racks de red",
      description:
        "Ubicar el cuarto de servidores (Site), la bodega de resguardo de equipos y —dependiendo de las circunstancias de la semana o el día— conocer algunos de los equipos de red y los diferentes racks junto con el <strong>Local Operations Specialist</strong> o, en su caso, con el <strong>OSS Engineer</strong>.",
      tag: "Sitio & Red"
    },
    {
      id: "chk-10",
      phase: "Semana 1",
      title: "Solicitar la llave del área de IS&T",
      description:
        "Gestionar con el <strong>Local Operations Specialist</strong> la entrega de la llave del área para contar con acceso autónomo a la oficina y zonas de resguardo.",
      tag: "Accesos"
    },
    {
      id: "chk-11",
      phase: "Semana 1",
      title: "Ubicar stock de periféricos, etiquetas (Asset Tags) y llaves",
      description:
        "Identificar dónde se almacenan teclados, mouse, diademas, cables de red, cargadores, dockings, maletines, consumibles y etiquetas de activo (Asset Tags).",
      tag: "Inventario"
    },
    {
      id: "chk-12",
      phase: "Semana 1",
      title: "Aprender el proceso de entrega y devolución de equipos (Altas y Bajas)",
      description:
        "Dominar el checklist al entregar equipo a un usuario nuevo o al recibir equipo por baja: revisión física completa, cargador, docking, maletín y llenado/firma de responsiva.",
      tag: "Operación"
    },
    {
      id: "chk-6",
      phase: "Semana 1",
      title: "Probar impresión en Ricoh (Equitrac) e impresora de etiquetas",
      description:
        "Realizar una prueba real de impresión usando <strong>Equitrac Client</strong> en equipos Ricoh (coordinando cualquier detalle físico con el <strong>Ricoh Printer Specialist</strong>) y una calibración en la impresora térmica de etiquetas.",
      tag: "Hardware"
    },
    {
      id: "chk-7",
      phase: "Semana 1",
      title: "Realizar práctica de booteo por USB (F9) y restablecimiento local (F11)",
      description:
        "Acompañado por el <strong>OSS Engineer</strong>, identificar las memorias USB de soporte vigentes para practicar el booteo con <strong>F9</strong>, y probar el restablecimiento sin memoria mediante <strong>F11</strong> (el cual restaura con los datos locales y en ocasiones solicita un código que debes pedir al <strong>OSS Engineer</strong> proporcionando los datos del equipo).",
      tag: "Sistemas"
    },
    {
      id: "chk-8",
      phase: "Mes 1",
      title: "Gestionar envíos de equipos (cómputo, teléfonos) y reporte de recepciones",
      description:
        "Acompañar o ejecutar el proceso completo de empaque y solicitud de guía para envíos de equipos de cómputo, teléfonos celulares o periféricos, así como verificar activos que llegan por paquetería y reportarlos a los <strong>IS&amp;T Project Managers</strong>.",
      tag: "Logística"
    },
    {
      id: "chk-9",
      phase: "Mes 1",
      title: "Documentar nuevos hallazgos o mejoras",
      description:
        "Si cambia alguna ruta de servidor, procedimiento interno o tip útil, actualizar este portal o el repositorio de respaldo.",
      tag: "Mejora Continua"
    }
  ],

  /**
   * Información sobre el repositorio de GitHub y copia local de respaldo.
   */
  backupRepo: {
    repoSlug:
      '<a href="https://github.com/Tesla9750/Repositorio-Respaldo-Junio-Noviembre-2026" target="_blank" rel="noopener noreferrer" class="text-alstom-blue dark:text-sky-400 hover:underline">Tesla9750/Repositorio-Respaldo-Junio-Noviembre-2026</a>',
    githubUrl:
      'Repositorio privado &bull; Solicitar acceso por correo a: <a href="mailto:jdd_ben@hotmail.com" class="font-semibold text-alstom-blue dark:text-sky-400 hover:underline">jdd_ben@hotmail.com</a>',
    localPath:
      "No se cuenta con un servidor local dedicado, pero el área de IS&amp;T conserva una copia local de este mismo respaldo de GitHub.",
    summary:
      "Durante mi periodo busco consolidar un repositorio y carpeta estructurada con respaldos de actividades diarias, scripts de automatización, formatos administrativos, controladores verificados y guías internas para evitar retrabajos.",
    folders: [
      {
        name: "01-Codigos-y-Scripts/",
        icon: "terminal",
        description:
          "Códigos fuente y scripts de automatización desarrollados durante el periodo para agilizar tareas operativas."
      },
      {
        name: "02-Configuracion-Raspberry-Pi5/",
        icon: "cpu",
        description:
          "Documentación, comandos, archivos de configuración y respaldo de puesta en marcha para equipos Raspberry Pi 5."
      },
      {
        name: "03-My-Voice-Kiosk-2026/",
        icon: "monitor",
        description:
          "Archivos de seguimiento, respaldo de documentación del proyecto Kiosk My Voice 2026."
      },
      {
        name: "04-Refresh-Telefonos-2026/",
        icon: "smartphone",
        description:
          "Control y seguimiento del proceso de renovación/refresh de teléfonos corporativos 2026."
      },
      {
        name: "05-Plantillas-Formatos/",
        icon: "file-spreadsheet",
        description:
          "Formatos que apoyan en el proceso de envio-recepción, checklists y plantillas de apoyo."
      },
      {
        name: "06-Proyecto-Power-Automate/",
        icon: "workflow",
        description:
          "Flujos, documentación técnica y respaldos del proyecto de automatización en Microsoft Power Automate."
      },
      {
        name: "07-Respaldo-Actividades/",
        icon: "archive",
        description:
          "Reportes de actividades realizadas durante la estancia y otros documentos de utilidad."
      },
      {
        name: "08-Gestion-Desechos-Electronicos-2026/",
        icon: "trash-2",
        description:
          "Registros, listas de activos obsoletos/dañados y documentación de gestión de desechos electrónicos 2026."
      }
    ],
    keyDocuments: [
      {
        title: "Bitácora de Actividades y Tickets Frecuentes",
        folder: "07-Respaldo-Actividades",
        format: "XLSX / MD",
        description:
          "Registro histórico de incidencias comunes en el sitio y cómo se resolvieron paso a paso.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Inventario de Equipos y Stock de Periféricos",
        folder: "05-Plantillas-Formatos",
        format: "XLSX",
        description:
          "Control de laptops disponibles en bodega, cargadores, maletines, dockings, teléfonos y equipos en resguardo.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Scripts y Códigos de Soporte Operativo",
        folder: "01-Codigos-y-Scripts",
        format: "PS1 / PY / MD",
        description:
          "Herramientas y scripts listos para automatizar consultas rápidas o tareas recurrentes de soporte.",
        updated: '<span class="editable-placeholder">[EDITAR: Mes/Año]</span>'
      },
      {
        title: "Directorio Privado de Roles y Contactos",
        folder: "07-Respaldo-Actividades",
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
    status: "Repositorio Privado (Acceso Opcional)",
    repoSlug: '<span class="editable-placeholder">[EDITAR: usuario-o-org/ist-network-monitor]</span>',
    ownerRole:
      'Juan de Dios Benitez Nava (<span class="editable-placeholder">[EDITAR: tu.correo.contacto@ejemplo.com]</span>) &bull; Respaldo original',
    overview:
      "Proyecto desarrollado durante mi periodo en IS&T para supervisar la disponibilidad, latencia y estado de equipos críticos de la red local (switches, access points, impresoras y enlaces principales). Nota importante: solicitar permiso al código fuente es completamente opcional; está pensado para practicantes que deseen realizar mejoras o actualizaciones a nivel código. La copia original permanece bajo mi resguardo para gestionar accesos y futuras actualizaciones.",
    monitoredAssets: [
      "Switches de acceso y distribución (Site / Racks)",
      "Access Points Wi-Fi (ej. Catalyst 9100 Series)",
      "Impresoras de red y estaciones críticas",
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
        title: "Evalúa si necesitas acceso a nivel código (Opcional)",
        detail:
          "Si únicamente utilizarás la herramienta en operación diaria no necesitas tocar el repositorio. Si deseas estudiar el código, adaptarlo o proponer mejoras, sigue los pasos siguientes."
      },
      {
        step: 2,
        title: "Solicita el acceso al practicante saliente",
        detail:
          'Envía un correo a <strong>Juan de Dios Benitez Nava</strong> (<span class="editable-placeholder">[EDITAR: tu.correo.contacto@ejemplo.com]</span>) con tu usuario de GitHub (ej. <code>@tu-usuario</code>) usando la plantilla inferior, e informa también a tu <strong>Local Operations Specialist</strong> si realizarás actualizaciones para el área.'
      },
      {
        step: 3,
        title: "Acepta la invitación en GitHub",
        detail:
          'Una vez revisada tu solicitud, recibirás una invitación al repositorio privado (también visible en <code>github.com/notifications</code>) para consultar o colaborar mediante ramas/Pull Requests sobre la copia original.'
      },
      {
        step: 4,
        title: "Clona y configura el entorno local",
        detail:
          'Configura tu clave SSH o Personal Access Token (PAT) en Git para clonar el repositorio privado, lee el <code>README.md</code> interno y crea tu archivo <code>.env</code> desde <code>.env.example</code> (nunca subas credenciales al repo).'
      }
    ],
    requestTemplate: `Asunto: Solicitud opcional de acceso a repositorio - Proyecto Monitoreo de Red IS&T

Hola Juan de Dios,

Espero que estés muy bien.

Actualmente soy el nuevo practicante de IS&T en Alstom (SHGB) y me gustaría revisar/actualizar el código del Proyecto de Monitoreo de Red.

Mis datos para la invitación en GitHub son:
- Nombre completo: [EDITAR: Tu Nombre Completo]
- Correo Alstom: [EDITAR: tu.nombre@alstomgroup.com]
- Usuario de GitHub: @[EDITAR: tu-usuario-github]
- Repositorio solicitado: [EDITAR: usuario-o-org/ist-network-monitor]
- Motivo / Mejora planeada: [EDITAR: Ej. Mantenimiento / Agregar nuevos equipos]

Quedo atento a tu respuesta. ¡Muchas gracias!

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
          title: "3. Verifica el flujo de entregas, bajas y envíos (Responsivas)",
          description:
            'Nunca entregues o envíes una laptop, teléfono corporativo, docking, maletín, monitor o cargador sin validar sus accesorios físicos, registrarlo en el control de inventario y generar su responsiva en <span class="editable-placeholder">[EDITAR: Carpeta 05-Plantillas-Formatos / Portal de Activos]</span>.'
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
        "Procedimiento estándar para habilitar la impresión corporativa con Equitrac Client y conectar impresoras multifuncionales Ricoh en Windows, sabiendo cuándo escalar al Ricoh Printer Specialist.",
      prerequisites: [
        "Aplicación <strong>Equitrac Client</strong> instalada desde la tienda de aplicaciones corporativas.",
        "Dirección IP de la impresora Ricoh o ruta del servidor de impresión (<span class=\"editable-placeholder\">[EDITAR: \\\\servidor-impresion\\nombre-cola]</span>).",
        "Equipo del usuario conectado a la red corporativa (LAN o Wi-Fi interno, no red de invitados).",
        "Driver Ricoh PCL6 / Universal Print Driver disponible en la carpeta de respaldo (si se instala por IP directa)."
      ],
      steps: [
        {
          title: "1. Instalar Equitrac Client desde la tienda corporativa",
          description:
            "Antes de configurar impresoras en el equipo, entra a la tienda de aplicaciones corporativas (<strong>Company Portal / Software Center</strong>) en Windows e instala <strong>Equitrac Client</strong> para que el usuario pueda liberar sus impresiones en las multifuncionales Ricoh.",
          tip: "Es recomendable instalar Equitrac Client desde el Día 1 en cualquier equipo recién configurado o entregado."
        },
        {
          title: "2. Verificar conectividad hacia la impresora Ricoh",
          description:
            "Si requieres configurar una cola directa o validar conexión en sitio, confirma desde la computadora del usuario que existe comunicación de red hacia la IP de la impresora y valida que esté encendida.",
          command: `ping [EDITAR-IP-IMPRESORA-RICOH]`
        },
        {
          title: "3. Método A (Recomendado): Instalar desde Servidor de Impresión",
          description:
            'Presiona <code>Win + R</code>, escribe la ruta del servidor de impresión corporativo y presiona Enter. Haz doble clic sobre la impresora o cola Ricoh deseada para que Windows descargue el controlador automáticamente.',
          command: `\\\\[EDITAR-SERVIDOR-IMPRESION]`,
          tip: "Si aparece un mensaje de '¿Confía en esta impresora?' o solicitud de elevación, apóyate con el OSS Engineer si el usuario no tiene permisos."
        },
        {
          title: "4. Método B: Instalación manual por puerto TCP/IP",
          description:
            "Si el equipo requiere conexión directa por IP: ve a <strong>Configuración &gt; Bluetooth y dispositivos &gt; Impresoras y escáneres &gt; Agregar dispositivo &gt; Agregar manualmente</strong>. Elige <em>Agregar una impresora por dirección IP o nombre de host</em>, selecciona <strong>Dispositivo TCP/IP</strong>, ingresa la IP de la Ricoh y selecciona el driver Ricoh correspondiente."
        },
        {
          title: "5. Configurar preferencias y saber cuándo escalar al Ricoh Printer Specialist",
          description:
            "Envía una <strong>Página de prueba</strong> y valida el funcionamiento con el gafete del usuario en la Ricoh. Si la computadora envía los trabajos pero la impresora Ricoh presenta atascos físicos, falta de tóner, códigos de error SC en pantalla o fallas de bandejas/escáner, repórtalo al <strong>Ricoh Printer Specialist</strong> en sitio.",
          warning: "Recuerda al usuario que para liberar impresiones en Follow-Me Printing debe usar su gafete corporativo o PIN asignado junto con Equitrac Client activo."
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
        "Driver oficial disponible en el respaldo local del área o en el paquete de controladores."
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
      title: "Cómo Bootear una PC: Con Memoria USB (F9) y Sin Memoria con Restablecimiento Local (F11)",
      category: "Sistemas & Booteo",
      icon: "cpu",
      difficulty: "Intermedio",
      estimatedTime: "20-45 min",
      summary:
        "Procedimiento para restaurar o reinstalar equipos corporativos utilizando la memoria USB booteable mediante F9 o el restablecimiento local del sistema mediante F11 (sin USB).",
      prerequisites: [
        "Respaldo previo de la información del usuario (OneDrive / carpeta de respaldo) — ¡Restablecer o formatear borra archivos locales!",
        "Cargador conectado a la corriente eléctrica (obligatorio durante el proceso).",
        "Para restablecimiento con F11: contacto directo con el <strong>OSS Engineer</strong> por si el equipo solicita código de validación.",
        "Para booteo con F9: memoria USB booteable de soporte vigente."
      ],
      steps: [
        {
          title: "1. Preparación previa y respaldo de BitLocker / Datos",
          description:
            "Antes de reiniciar para restablecer o formatear, verifica que el usuario tenga respaldados sus archivos locales y ten presente si el disco está cifrado con BitLocker.",
          warning: "Nunca inicies una reinstalación sin confirmar que el usuario respaldó sus documentos locales (Descargas, Documentos, Escritorio, PST locales)."
        },
        {
          title: "2. Opción A — Restablecimiento SIN memoria USB utilizando F11 (Datos Locales)",
          description:
            'A diferencia de un arranque por red, la tecla <strong>F11</strong> inicia el entorno de recuperación/restablecimiento con los datos locales del equipo:<br>1. Enciende o reinicia el equipo y presiona repetidamente la tecla <strong>F11</strong> hasta entrar a las opciones de recuperación/restablecimiento.<br>2. Selecciona el restablecimiento con la imagen/datos locales del equipo siguiendo las indicaciones en pantalla.<br>3. <strong>Código de autorización:</strong> En algunas ocasiones el sistema solicitará un código de seguridad para continuar. Cuando esto ocurra, solicítalo al <strong>OSS Engineer</strong> enviándole los datos del equipo (número de serie, hostname y/o el código o desafío que muestra en pantalla).',
          tip: "Ten a la mano una foto clara de la pantalla y la etiqueta del número de serie del equipo antes de escribirle al OSS Engineer para agilizar la obtención del código."
        },
        {
          title: "3. Opción B — Bootear CON memoria USB utilizando F9",
          description:
            'Utiliza este método cuando necesites arrancar directamente desde una memoria USB de imagen o utilidades:<br>1. Inserta la memoria USB booteable de soporte en un puerto USB directo del equipo.<br>2. Enciende la PC y presiona repetidamente la tecla <strong>F9</strong> para abrir el <strong>Boot Menu</strong>.<br>3. Selecciona la opción UEFI correspondiente al nombre de tu memoria USB (ej. <em>UEFI: Kingston DataTraveler</em>) y presiona Enter.',
          command: `# Referencia rápida de teclas en sitio:
# - F9  -> Boot Menu para arrancar con Memoria USB
# - F11 -> Restablecimiento con datos locales (sin USB; puede requerir código del OSS Engineer)
# - F10 -> Acceso a BIOS/UEFI (en equipos HP)`
        },
        {
          title: "4. Validación post-restablecimiento",
          description:
            "Al finalizar la carga del sistema operativo, valida el inicio de sesión corporativo, la conexión a red/Zscaler, la instalación de <strong>Equitrac Client</strong> desde la tienda de aplicaciones corporativas y el cifrado BitLocker."
        }
      ],
      troubleshooting: [
        "El restablecimiento con F11 pide un código y no avanza: envía de inmediato el número de serie y foto de pantalla al <strong>OSS Engineer</strong> para recibir el código correspondiente.",
        "La memoria USB no aparece al presionar F9: prueba otro puerto USB, asegúrate de que la USB esté preparada en formato UEFI/GPT y revisa en BIOS si el arranque por USB está habilitado.",
        "No detecta el disco duro NVMe durante instalación desde USB: valida si la imagen USB incluye el controlador de almacenamiento (Intel RST / VMD) del modelo."
      ]
    },
    {
      id: "aps-catalyst-led",
      title: "Estados del LED en Access Points (Cisco Catalyst 9100 Series)",
      category: "Redes & Infraestructura",
      icon: "wifi",
      difficulty: "Básico",
      estimatedTime: "5 min consulta",
      summary:
        "Guía visual de referencia rápida para diagnosticar el estado operativo, arranque o fallas PoE de los Access Points Cisco Catalyst 9100 instalados en el sitio a partir del color y patrón de su LED.",
      prerequisites: [
        "Identificar físicamente el Access Point (AP) en techo o área operativa y observar el patrón del LED durante al menos 10 segundos.",
        "Confirmar el puerto de switch o patch panel asociado si el AP muestra falta de energía PoE o error de descubrimiento."
      ],
      steps: [
        {
          title: "1. Tabla de Estados del LED (Catalyst 9100 Series)",
          description:
            `<div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mt-1">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    <th class="py-2.5 px-3 font-semibold">Estado / Patrón del LED</th>
                    <th class="py-2.5 px-3 font-semibold">Categoría</th>
                    <th class="py-2.5 px-3 font-semibold">Significado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap"><span class="inline-block w-2.5 h-2.5 rounded-full bg-slate-400 mr-1.5 align-middle"></span>Apagado</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Energía / Config.</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">El AP no recibe energía PoE o el LED fue deshabilitado desde el WLC.</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap"><span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 mr-1.5 align-middle"></span>Verde fijo</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Operación normal</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Conectado al controlador (WLC) y operando con normalidad, pero sin clientes inalámbricos asociados. (También aparece brevemente al ejecutar el bootloader).</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-1.5 align-middle"></span>Azul fijo</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Operación normal</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Conectado al controlador (WLC) y operando con normalidad con al menos un cliente inalámbrico asociado.</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse mr-1.5 align-middle"></span>Azul parpadeante</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Operación</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Descarga o actualización de imagen de firmware/software en curso desde el controlador.</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Alternando Verde y Rojo</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Descubrimiento</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Proceso de descubrimiento y unión (CAPWAP Join) al WLC en progreso.</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Ciclo secuencial: Verde - Rojo - Apagado</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Descubrimiento</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Buscando el controlador WLC. Si dura más de 5 minutos, no logra encontrar ni alcanzar el WLC primario, secundario o terciario.</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Ciclo: Rojo - Apagado - Verde - Apagado - Azul - Apagado</td>
                    <td class="py-2.5 px-3 text-amber-700 dark:text-amber-400 font-medium">Advertencia / Energía</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Advertencia general o energía PoE insuficiente (ej. conectado a 802.3af cuando requiere 802.3at/PoE+ para operar a plena capacidad).</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse mr-1.5 align-middle"></span>Parpadeo Rojo</td>
                    <td class="py-2.5 px-3 text-rose-700 dark:text-rose-400 font-medium">Acción / Error</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Se está presionando el botón Mode para restablecer de fábrica, o indica un fallo crítico/energía insuficiente para levantar los radios.</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap"><span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mr-1.5 align-middle"></span>Parpadeo Verde</td>
                    <td class="py-2.5 px-3 text-rose-700 dark:text-rose-400 font-medium">Error de arranque</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Fallo en la verificación de firma del boot loader (Boot loader signing verification failure).</td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Ciclo: Azul - Rojo - Verde - Apagado</td>
                    <td class="py-2.5 px-3 text-rose-700 dark:text-rose-400 font-medium">Error de sistema</td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">Error en el sistema operativo del punto de acceso.</td>
                  </tr>
                </tbody>
              </table>
            </div>`,
          tip: "Cuando un área reporta lentitud o caída de Wi-Fi, revisar si el LED está en Verde/Azul fijo o en ciclo Verde-Rojo-Apagado te permite descartar en segundos si es falla de WLC, energía PoE o un reinicio."
        },
        {
          title: "2. Qué reportar si detectas un patrón de falla",
          description:
            "Toma nota del nombre/etiqueta del AP, ubicación física, puerto/switch en el rack (si lo conoces) y el patrón exacto del LED. Comparte esta información con el <strong>OSS Engineer</strong> o el equipo de Redes para revisión de puerto PoE, VLAN o WLC.",
          warning: "Nunca desconectes cables del switch sin autorización previa ni sin confirmar el puerto exacto, y evita presionar el botón físico Mode (un reset de fábrica borra la configuración del AP)."
        }
      ],
      troubleshooting: [
        "Reiniciar el Access Point desconectando y volviendo a conectar su cable de red directamente en el switch, siempre y cuando se notifique previamente, se cuente con autorización y se conozca el puerto exacto donde está conectado."
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
      a: "Súbelos tanto a la copia local del área como al repositorio de respaldo en GitHub (siguiendo la estructura de carpetas 01 a 08) para mantener centralizada la documentación."
    },
    {
      q: "¿Cómo actualizo la información de esta página web?",
      a: "Toda la información textual de este portal vive en el archivo <code>assets/js/guides-data.js</code>. Solo edita el texto, haz commit y push a la rama <code>main</code>, y GitHub Actions actualizará automáticamente la página en GitHub Pages."
    }
  ]
};
