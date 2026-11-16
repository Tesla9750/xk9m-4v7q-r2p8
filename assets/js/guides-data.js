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
        "Identificar dónde se almacenan teclados, mouse, diademas, cables de red, cargadores, dockings, maletines y consumibles.",
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
      id: "chk-13",
      phase: "Mes 1",
      title: "Aplicar el uso obligatorio de EPP y reglas de seguridad en naves de producción",
      description:
        "Contar con tu equipo completo (botas de protección, chaleco reflectante naranja, <em>bump cap</em>, tapones auditivos y lentes o cubrelentes) y aplicar las normas de tránsito seguro al cruzar las líneas amarillas hacia las naves.",
      tag: "Seguridad & EPP"
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
          "Archivos de seguimiento, respaldo de documentación del proyecto Kiosk y My Voice 2026."
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
        title: "Scripts y Códigos de Soporte Operativo",
        folder: "01-Codigos-y-Scripts",
        format: "PS1 / PY / MD",
        description:
          "Herramientas y scripts listos para automatizar la creación de etiquetas y generación de QRs.",
        updated: "Noviembre 2026"
      },
      {
        title: "Plantilla de Registro de Equipos Recibidos por Paquetería",
        folder: "05-Plantillas-Formatos",
        format: "XLSX",
        description:
          "Plantilla de ejemplo para el registro de equipos que llegan por paquetería.",
        updated: "Noviembre 2026"
      },
      {
        title: "Plantilla para Solicitud de Guías de Envío",
        folder: "05-Plantillas-Formatos",
        format: "XLSX",
        description:
          "Plantilla para la recopilación de información necesaria en la solicitud de guías de envío.",
        updated: "Noviembre 2026"
      },
      {
        title: "SHGB Layout y Layout NOV 2026",
        folder: "07-Respaldo-Actividades",
        format: "PDF",
        description:
          "Mapa de los equipos de red y comunicación con la ubicación de los diferentes dispositivos distribuidos en la planta.",
        updated: "Noviembre 2026"
      },
      {
        title: "Alstom_configuration_RPI5",
        folder: "02-Configuracion-Raspberry-Pi5",
        format: "PDF",
        description:
          "Manual para la configuración de Raspberry Pi 5 utilizado en los despliegues del sitio.",
        updated: "Noviembre 2026"
      },
      {
        title: "Directorio Privado de Roles y Contactos",
        folder: "07-Respaldo-Actividades",
        format: "MD / XLSX",
        description:
          "Listado interno dentro del repositorio privado con los nombres, correos y extensiones asignados a cada rol de soporte y escalación.",
        updated: "Noviembre 2026"
      }
    ]
  },

  /**
   * Información del Proyecto de Monitoreo de Red y acceso al repositorio privado.
   */
  networkProject: {
    title: "Proyecto MonitoreoRed (Alstom)",
    status: "Operativo • .NET 8 / SQL Server",
    repoSlug:
      '<a href="https://github.com/Tesla9750/MonitoreoRed_Alstom" target="_blank" rel="noopener noreferrer" class="underline decoration-alstom-blue/50 hover:text-alstom-blue dark:hover:text-sky-400">Tesla9750/MonitoreoRed_Alstom</a>',
    ownerRole:
      "Juan de Dios Benitez Nava (jdd_ben@hotmail.com) &bull; Respaldo original",
    overview:
      "Sistema de monitoreo de red que supervisa los enlaces de red de cada uno de los sitios del país y equipos de comunicación, con capacidad para monitorear también Access Points (APs), impresoras o cualquier dispositivo conectado a la red Alstom que cuente con una dirección IP. Permite detectar caídas oportunamente, registrar historial en SQL Server y enviar alertas automáticas. Nota: solicitar acceso al código fuente es opcional y está pensado para quien desee revisar o extender el proyecto.",
    monitoredAssets: [
      "Enlaces de red de cada uno de los sitios del país y equipos de comunicación",
      "Access Points (APs), impresoras y cualquier dispositivo con IP en la red Alstom",
      "Estado actual de disponibilidad (EstadoActualEquipo) e historial de eventos",
      "Políticas de monitoreo y ventanas de mantenimiento",
      "Catálogos de áreas, categorías, grupos y tipos de destino",
      "Envío de alertas automáticas por correo electrónico mediante Make"
    ],
    techStack: [
      "C# / .NET 8.0",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server (MonitoreoRedDB)",
      "Swagger / OpenAPI",
      "Visual Studio 2022",
      "Make (Alertas por correo)",
      "Git & GitHub"
    ],
    architectureLayers: [
      { name: "MonitoreoRed.Api", role: "Endpoints HTTP, controllers, configuración web y Swagger" },
      { name: "MonitoreoRed.Application", role: "DTOs, interfaces, contratos y lógica de aplicación" },
      { name: "MonitoreoRed.Domain", role: "Entidades y conceptos centrales del dominio" },
      { name: "MonitoreoRed.Infrastructure", role: "DbContext, EF Core, SQL Server y servicios técnicos" },
      { name: "MonitoreoRed.Worker", role: "Procesamiento en segundo plano para monitoreo automático" },
      { name: "MonitoreoRed.UnitTests / IntegrationTests", role: "Pruebas unitarias y de integración" }
    ],
    implementedSummary: [
      "El sistema funciona de manera operativa en todos los puntos contemplados.",
      "Solución .sln por capas conectada a la base de datos MonitoreoRedDB en SQL Server.",
      "API y Swagger operativos para consultar y gestionar equipos, políticas, estados actuales y ventanas de mantenimiento.",
      "Notificaciones automáticas por correo integradas y funcionando a través de la plataforma Make."
    ],
    accessSteps: [
      {
        step: 1,
        title: "Evalúa si necesitas acceso al código (Opcional)",
        detail:
          "Si solo consultarás la operación diaria no necesitas modificar el repositorio. Si deseas continuar el desarrollo, revisar la arquitectura o agregar módulos, sigue estos pasos."
      },
      {
        step: 2,
        title: "Solicita acceso al repositorio privado",
        detail:
          'Envía un correo a <strong>Juan de Dios Benitez Nava</strong> (<code>jdd_ben@hotmail.com</code>) con tu usuario de GitHub usando la plantilla inferior, e informa a tu <strong>Local Operations Specialist</strong> si realizarás cambios para el sitio.'
      },
      {
        step: 3,
        title: "Acepta la invitación en GitHub",
        detail:
          'Recibirás una invitación al repositorio privado <code>Tesla9750/MonitoreoRed_Alstom</code> (visible en <code>github.com/notifications</code>) para trabajar mediante ramas o Pull Requests.'
      },
      {
        step: 4,
        title: "Configura SQL Server y user-secrets en local",
        detail:
          'Clona el proyecto, asegúrate de tener creada la BD <code>MonitoreoRedDB</code> con sus tablas/datos iniciales y configura tu cadena de conexión mediante <code>dotnet user-secrets</code> (sin exponer credenciales en código).'
      }
    ],
    requestTemplate: `Asunto: Solicitud opcional de acceso a repositorio - MonitoreoRed_Alstom

Hola Juan de Dios,

Espero que estés muy bien.

Actualmente soy el nuevo practicante de IS&T en Alstom (SHGB) y me gustaría revisar y continuar el desarrollo del proyecto MonitoreoRed_Alstom.

Mis datos para la invitación en GitHub son:
- Nombre completo: [EDITAR: Tu Nombre Completo]
- Correo Alstom: [EDITAR: tu.nombre@alstomgroup.com]
- Usuario de GitHub: @[EDITAR: tu-usuario-github]
- Repositorio solicitado: Tesla9750/MonitoreoRed_Alstom
- Motivo / Mejora planeada: [EDITAR: Ej. Implementar Worker / VerificacionesMonitoreo]

Quedo atento a tu respuesta. ¡Muchas gracias!

Saludos,
[EDITAR: Tu Nombre]
Practicante IS&T - Alstom`,
    setupCommands: `# 1. Clonar el repositorio privado
git clone https://github.com/Tesla9750/MonitoreoRed_Alstom.git
cd MonitoreoRed_Alstom

# 2. Configurar cadena de conexión en desarrollo (user-secrets)
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Server=.\\MONITOREO;Database=MonitoreoRedDB;User Id=sa;Password=TU_PASSWORD;TrustServerCertificate=True;"

# 3. Abrir la solución en Visual Studio 2022 y ejecutar MonitoreoRed.Api (Swagger)`
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
        "Resumen operativo de cómo arrancar tu jornada, el flujo correcto para atender a usuarios que acuden al área por soporte, herramientas indispensables y buenas prácticas en sitio.",
      prerequisites: [
        "Cuenta de red corporativa activa y acceso a Microsoft Teams / Outlook.",
        "Conocer la ubicación de la bodega de TI, llaves/accesos físicos y el número de soporte publicado en el área."
      ],
      steps: [
        {
          title: "1. Inicia el día revisando Outlook (antes de las 9:00 a.m.)",
          description:
            "Por lo general, si llegas antes que el resto del equipo (que suele integrarse alrededor de las <strong>9:00 a.m.</strong>), comienza revisando <strong>Outlook</strong> para confirmar si existen correos solicitando atención o revisión de equipos en las <strong>naves de producción</strong>. En caso afirmativo, <strong>equípate con tu EPP completo</strong>, acude al punto indicado, realiza las verificaciones necesarias, <strong>toma fotos de evidencia</strong> y reporta el resultado con el <strong>OSS Engineer</strong>."
        },
        {
          title: "2. Cómo atender a un usuario que acude al área por soporte",
          description:
            "Cuando un usuario llegue directamente al área buscando ayuda, escúchalo con atención para entender su problema y explícale que <strong>siempre debe levantar un ticket</strong> llamando al <strong>número de soporte publicado en el área</strong>. El equipo de soporte telefónico intentará resolverlo de forma remota y, si no es posible, escalará el ticket al <strong>OSS Engineer</strong>, quien se comunicará con el usuario para atenderlo en sitio. <strong>Nunca se debe contactar directamente al OSS Engineer ni a otros miembros del área por soporte sin un ticket previo.</strong>",
          tip: "Si un usuario te intercepta en el pasillo o llega directo al área pidiendo soporte rápido, escúchalo con amabilidad pero indícale que debe llamar al número de soporte para levantar su propio ticket y canalizar la atención por el flujo oficial."
        },
        {
          title: "3. Ubica y utiliza las herramientas disponibles en el área",
          description:
            "El área cuenta con herramientas y consumibles de soporte (memorias USB booteables de imagen y utilidades, desarmadores de precisión, etiquetas adhesivas para activos y cables de red probados). Ubica dónde se resguardan, úsalos cuando los necesites y <strong>regrésalos siempre a su sitio</strong> al terminar."
        },
        {
          title: "4. Verifica el flujo de entregas, bajas y envíos (Responsivas)",
          description:
            'Nunca entregues o envíes una laptop, teléfono corporativo, docking, maletín, monitor o cargador sin validar sus accesorios físicos y registrarlo en el control de inventario.'
        },
        {
          title: "5. Canaliza y escala correctamente los casos complejos",
          description:
            "Si durante una revisión apoyada con el equipo detectas una falla que requiere permisos administrativos avanzados, cambios en red/firewall o infraestructura, documenta las pruebas realizadas (capturas, IP, hostname, número de serie) y apóyate en el <strong>Local Operations Specialist</strong> o el <strong>OSS Engineer</strong> según corresponda."
        }
      ],
      troubleshooting: [
        "Reiniciar el equipo: muchas fallas temporales de red, sesión o aplicaciones se resuelven con un reinicio completo.",
        "Verificar actualizaciones pendientes: confirma que el equipo no tenga actualizaciones de Windows o aplicaciones corporativas pendientes de instalar o aplicar.",
        "Validar que se use la aplicación correcta: asegúrate de que el usuario esté utilizando la herramienta o cliente oficial correspondiente al proceso.",
        "Equipos nuevos en configuración inicial: el aprovisionamiento puede tardar de 4 a 6 horas; indícale al usuario que debe reiniciar el equipo constantemente durante ese tiempo para completar políticas y descargas."
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
        "Guía dividida en dos métodos: el procedimiento general mediante Equitrac Client (Kofax) y FollowYou Print (estándar en toda la planta), y la conexión directa por IP reservada únicamente para casos especiales.",
      prerequisites: [
        "Aplicación <strong>Equitrac Client (Kofax)</strong> instalada desde la tienda de aplicaciones corporativas (para el procedimiento general).",
        "Equipo conectado a la red corporativa (LAN o Wi-Fi interno, no red de invitados).",
        "Credencial de acceso temporal o credenciales corporativas (correo y contraseña) para liberar impresiones en la Ricoh.",
        "<em>Solo casos especiales (IP directa):</em> Dirección IP de la impresora Ricoh (el driver ya viene instalado en el equipo)."
      ],
      steps: [
        {
          title: "Sección A (Procedimiento General) — 1. Instalar Equitrac Client (Kofax)",
          description:
            "Entra a la tienda de aplicaciones corporativas (<strong>Company Portal / Software Center</strong>) en Windows e instala <strong>Equitrac Client (Kofax)</strong>. Esta aplicación habilita automáticamente la impresora corporativa llamada <strong>FollowYou Print</strong>.",
          tip: "Puedes recomendar a los usuarios instalarla desde la tienda corporativa, ya que normalmente no configuramos sus equipos directamente sino que ellos mismos realizan la instalación."
        },
        {
          title: "Sección A (Procedimiento General) — 2. Enviar a imprimir con FollowYou Print",
          description:
            "Cada vez que desees imprimir un documento, selecciona la impresora <strong>FollowYou Print</strong> en tu computadora y envía el trabajo. No necesitas elegir una impresora física específica desde Windows."
        },
        {
          title: "Sección A (Procedimiento General) — 3. Liberar en cualquier Ricoh de la planta",
          description:
            "Acude a cualquier impresora multifuncional Ricoh disponible en la planta y autentícate pasando tu <strong>credencial de acceso temporal</strong> o ingresando tus <strong>credenciales corporativas (correo corporativo y contraseña)</strong> en la pantalla del equipo para liberar e imprimir tus documentos.",
          warning: "Los trabajos quedan en espera bajo tu usuario hasta que te autenticas en la multifuncional, evitando que tus documentos se mezclen o queden expuestos."
        },
        {
          title: "Sección B (Casos Especiales) — 4. Agregar impresora de manera directa por IP",
          description:
            "Únicamente en <strong>casos especiales</strong> que requieran conexión directa sin usar FollowYou Print: confirma conectividad con <code>ping</code> a la IP de la Ricoh, ve a <strong>Configuración &gt; Bluetooth y dispositivos &gt; Impresoras y escáneres &gt; Agregar dispositivo &gt; Agregar manualmente</strong>, elige <em>Agregar una impresora por dirección IP o nombre de host</em>, selecciona <strong>Dispositivo TCP/IP</strong>, ingresa la IP y elige el driver Ricoh ya instalado en el sistema.",
          command: `ping <IP-IMPRESORA-RICOH>`,
          tip: "Si el sistema solicita elevación o permisos administrativos, apóyate con el OSS Engineer."
        },
        {
          title: "5. Cuándo escalar al Ricoh Printer Specialist",
          description:
            "Si la computadora envía correctamente los trabajos pero la multifuncional Ricoh presenta atascos físicos, falta de tóner, códigos de error SC en pantalla o fallas de bandejas/escáner, repórtalo al <strong>Ricoh Printer Specialist</strong> en sitio."
        }
      ],
      troubleshooting: []
    },
    {
      id: "impresora-etiquetas",
      title: "Cómo Configurar e Instalar la Impresora de Etiquetas (Zebra ZT411)",
      category: "Hardware & Impresoras",
      icon: "tag",
      difficulty: "Básico",
      estimatedTime: "10-15 min",
      summary:
        "Instalación por USB y configuración exacta de página y opciones de impresión para la impresora de etiquetas Zebra ZDesigner ZT411-203dpi ZPL.",
      prerequisites: [
        "Impresora de etiquetas <strong>Zebra ZDesigner ZT411-203dpi ZPL</strong> conectada directamente por <strong>cable USB</strong> (no se utiliza por Wi-Fi).",
        "Rollo de etiquetas y <strong>Ribbon</strong> correctamente colocados (para transferencia térmica).",
        "Controlador <strong>ZDesigner</strong> disponible en el equipo o en el respaldo del área si Windows no lo detecta automáticamente."
      ],
      steps: [
        {
          title: "1. Conectar por USB y verificar rollo y ribbon",
          description:
            "Conecta la impresora <strong>Zebra ZT411</strong> a la computadora mediante el <strong>cable USB</strong> (no por Wi-Fi) y enciéndela. Asegúrate de que el rollo de etiquetas y el ribbon estén bien colocados y alineados."
        },
        {
          title: "2. Agregar la impresora en Windows (ZDesigner ZT411-203dpi ZPL)",
          description:
            "Abre <strong>Configuración &gt; Bluetooth y dispositivos &gt; Impresoras y escáneres</strong>. Si Windows no la agrega automáticamente al conectar el USB, haz clic en <strong>Agregar dispositivo</strong> (o instala el driver ZDesigner seleccionando el puerto <code>USB00x</code> correspondiente) hasta que aparezca como <strong>ZDesigner ZT411-203dpi ZPL</strong>."
        },
        {
          title: "3. Abrir Valores de impresión desde Propiedades de la impresora",
          description:
            "Dentro de <strong>Impresoras y escáneres</strong>, selecciona la impresora <strong>ZDesigner ZT411-203dpi ZPL</strong> y entra a:<br><strong>Propiedades de la impresora &gt; Opciones avanzadas &gt; Valores de impresión...</strong>",
          tip: "Configurar estos parámetros desde 'Opciones avanzadas > Valores de impresión' asegura que queden como valores predeterminados para todos los programas."
        },
        {
          title: "4. Configurar tamaño en Configuración de página",
          description:
            "Dentro de la pestaña <strong>Configuración de página</strong>, ingresa exactamente las siguientes medidas:<br>&bull; <strong>Ancho:</strong> <code>104 mm</code><br>&bull; <strong>Alto:</strong> <code>50.8 mm</code>"
        },
        {
          title: "5. Configurar velocidad, oscuridad y modo en Imprimir opciones",
          description:
            "Cambia a la pestaña <strong>Imprimir opciones</strong> y ajusta los valores de la siguiente manera:<br>&bull; <strong>Velocidad:</strong> <code>152 mm/s</code><br>&bull; <strong>Oscuridad:</strong> <code>15</code><br>&bull; <strong>Modo de impresión:</strong> <code>Transferencia térmica</code><br><br>Haz clic en <strong>Aplicar</strong> y <strong>Aceptar</strong> para guardar la configuración, y realiza una impresión de prueba.",
          warning: "Si el modo de impresión no está en 'Transferencia térmica' o falta el ribbon, las etiquetas saldrán en blanco o la impresora marcará error."
        }
      ],
      troubleshooting: [
        "Si las etiquetas salen con manchas o con una imagen incompleta, modifica la velocidad de impresión desde la ruta mencionada arriba (<strong>Propiedades de la impresora &gt; Opciones avanzadas &gt; Valores de impresión &gt; Imprimir opciones</strong>)."
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
            "Al finalizar la carga del sistema operativo, verifica únicamente que el equipo inicie correctamente con la <strong>imagen corporativa</strong>; el resto de la configuración inicial y aplicaciones lo completan los usuarios directamente."
        }
      ],
      troubleshooting: [
        "El restablecimiento con F11 pide un código y no avanza: envía de inmediato el número de serie y foto de pantalla al <strong>OSS Engineer</strong> para recibir el código correspondiente.",
        "La memoria USB no aparece al presionar F9: prueba otro puerto USB, asegúrate de que la USB esté preparada en formato UEFI/GPT y revisa en BIOS si el arranque por USB está habilitado."
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
        "Para envíos salientes: datos completos del destinatario (nombre, teléfono, correo y dirección completa) y consultar la <strong>plantilla para solicitud de guías de envío</strong> (<code>05-Plantillas-Formatos/</code>) para reunir el resto de la información necesaria.",
        "Para recepción de equipos: no se requiere información previa; únicamente recibir, verificar y reportar lo que llegue por paquetería.",
        "Material de embalaje disponible y compromiso de registrar todos los equipos enviados para mantener control y evitar problemas."
      ],
      steps: [
        {
          title: "1. Envío saliente — Empacar el equipo de forma segura y tomar evidencias",
          description:
            "Realiza un correcto embalaje para proteger el equipo durante el traslado e incluye su <strong>cargador</strong>. <strong>Toma foto</strong> del número de serie / asset tag antes de cerrar la caja."
        },
        {
          title: "2. Envío saliente — Medir, pesar y solicitar la guía por correo",
          description:
            "Anota el peso (kg) y las dimensiones de la caja (L x A x H cm). Envía todos los datos del envío por correo a la persona encargada actualmente de gestionar las guías (si no sabes quién es, pregúntale al <strong>OSS Engineer</strong>)."
        },
        {
          title: "3. Envío saliente — Pegar guía, entregar y registrar rastreo",
          description:
            "Imprime la guía y pégala en una cara plana y visible de la caja sin cubrir códigos de barras con cinta opaca. Registra el <strong>Número de Rastreo (Tracking Number)</strong> en el ticket del usuario y en el control de equipos enviados."
        },
        {
          title: "4. Recepción de paquetería — Verificar activos y reportar a IS&T Project Managers",
          description:
            'Cuando lleguen cajas de hardware o infraestructura para proyectos del área:<br>1. Inspecciona el estado físico externo antes de firmar o recibir (si llega golpeada o abierta, toma fotos al instante).<br>2. Abre y verifica cantidad, modelo, <strong>número de serie (S/N)</strong>, <strong>Asset Tag</strong> y accesorios completos.<br>3. Resguarda los equipos en bodega/zona asignada y envía el reporte de confirmación (listado de series + fotos/evidencia si aplica) a los <strong>IS&amp;T Project Managers</strong> responsables.',
          warning: "Nunca mezcles equipos recién llegados de un proyecto de infraestructura con el stock de soporte diario del OSS Engineer sin antes confirmar su recepción y asignación con los IS&T Project Managers."
        }
      ],
      troubleshooting: [
        "La paquetería no recolectó un envío saliente en el día esperado: ten en cuenta que las recolecciones se realizan únicamente los <strong>lunes, miércoles y viernes</strong>; si no se recolecta a la hora indicada en alguno de esos días, espera al próximo día de recolección.",
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
