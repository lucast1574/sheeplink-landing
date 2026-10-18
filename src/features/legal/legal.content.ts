import { PRICING } from "../landing/landing.content";
export const LEGAL_VERSION = "2026-10-16";
export const LEGAL_CONTACT = "krecarfaz@gmail.com";

export interface LegalDocument {
  title: string;
  summary: string;
  sections: { title: string; paragraphs: string[] }[];
}

export const LEGAL_DOCUMENTS = {
  terms: {
    title: "Términos y condiciones",
    summary:
      "Reglas claras para usar SHEEPLINK y cuidar la información de tu comunidad.",
    sections: [
      {
        title: "1. El servicio y el contacto",
        paragraphs: [
          "SHEEPLINK es una plataforma de gestión para iglesias: organiza usuarios, zonas, células, integrantes, asistencias, ministerios, cursos y mensajes. Las consultas sobre el servicio, estos términos y la atención de solicitudes se reciben en krecarfaz@gmail.com.",
          "Estos términos regulan el uso de la plataforma junto con la Política de privacidad. La persona que registra una iglesia debe tener capacidad para contratar y autorización para actuar en su nombre. Cada usuario invitado debe usar su propia cuenta.",
        ],
      },
      {
        title: "2. Cuentas, permisos y seguridad",
        paragraphs: [
          "Debes proporcionar información correcta, mantener tus credenciales privadas y avisar si detectas un acceso no autorizado. No compartas cuentas ni utilices la de otra persona. El responsable de cada iglesia debe asignar los permisos necesarios y retirar oportunamente los accesos de quienes dejen sus funciones.",
          "El acceso depende del rol, de la iglesia y de la zona, célula, ministerio o curso asignado. Está prohibido intentar eludir estas restricciones, extraer información sin autorización, introducir código dañino o afectar la disponibilidad del servicio.",
        ],
      },
      {
        title: "3. Datos de integrantes y menores de edad",
        paragraphs: [
          "La iglesia decide qué información incorpora y para qué la utiliza. Debe contar con una base válida para tratarla, informar a las personas y obtener las autorizaciones que correspondan. El registro en SHEEPLINK no sustituye esas obligaciones ni representa el consentimiento de sus integrantes.",
          "La pertenencia o participación en una iglesia puede revelar convicciones religiosas. Trata esa información con especial cuidado y limita el acceso. No cargues información médica, documentos de identidad u otros datos que no sean necesarios para las funciones de la plataforma.",
          "Cuando se registren datos de menores, la iglesia debe comprobar los requisitos aplicables, incluidas las autorizaciones de sus representantes cuando sean necesarias, y limitar su uso a finalidades legítimas de cuidado y organización.",
        ],
      },
      {
        title: "4. Prueba, planes y pagos",
        paragraphs: [
          PRICING.legal,
          "Al vencer un plan, la aplicación puede limitar la cuenta a consulta; una suspensión puede impedir el acceso. Los planes de pago se contratan mediante Stripe y se renuevan mensualmente hasta su cancelación. Antes de confirmar, Stripe muestra el importe y la periodicidad. El responsable de la iglesia puede consultar facturas, actualizar el método de pago y cancelar la renovación desde Facturación. Para aclaraciones o solicitudes de devolución, escribe al contacto del servicio. Se respetarán los derechos y devoluciones exigibles por la normativa aplicable y las condiciones expresamente acordadas.",
        ],
      },
      {
        title: "5. Contenido y uso permitido",
        paragraphs: [
          "La iglesia y sus usuarios conservan los derechos que tengan sobre sus datos y contenidos. Su carga permite procesarlos para prestar, proteger y dar soporte al servicio; no autoriza su venta ni su publicación como material promocional.",
          "No utilices la plataforma para acoso, discriminación, contenido ilícito, comunicaciones sin autorización o actividades que vulneren derechos de terceros. La marca y el software de SHEEPLINK no se transfieren por el uso de una cuenta.",
        ],
      },
      {
        title: "6. Disponibilidad, soporte y cierre",
        paragraphs: [
          "El servicio puede requerir mantenimiento y depender de proveedores de infraestructura. No se promete disponibilidad ininterrumpida ni un plazo de respuesta específico salvo acuerdo expreso. Comunica las incidencias por el canal de contacto.",
          "Puedes solicitar el cierre de tu cuenta o coordinar la recuperación de la información que corresponda. El cierre y la eliminación de datos de una iglesia deben solicitarlos personas autorizadas, considerando los derechos de sus integrantes y las obligaciones de conservación aplicables.",
          "Podremos restringir accesos ante un riesgo de seguridad, uso ilícito o incumplimiento de estas reglas. Las medidas deberán ser proporcionales y se informarán cuando sea posible sin comprometer la seguridad o una obligación legal. Nada en estos términos excluye derechos irrenunciables ni responsabilidades que la ley no permita limitar.",
        ],
      },
      {
        title: "7. Cambios y consultas",
        paragraphs: [
          "La fecha y versión de este documento aparecen al inicio. Los cambios relevantes se comunicarán por canales disponibles y, cuando corresponda, requerirán una nueva aceptación. No se aplicarán retroactivamente para reducir derechos ya adquiridos.",
          "Ante una discrepancia, contacta primero al servicio para intentar resolverla. Se mantienen las normas obligatorias y las vías de reclamación que correspondan a cada usuario; estos términos no imponen una renuncia a ellas.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    summary:
      "Qué información se utiliza, para qué se necesita y cómo puedes ejercer tus derechos.",
    sections: [
      {
        title: "1. Servicio y responsabilidades",
        paragraphs: [
          "SHEEPLINK recibe consultas de privacidad en krecarfaz@gmail.com. Para los datos de cuenta, seguridad y soporte, el servicio determina su uso operativo. Cada iglesia decide los fines de los datos de sus integrantes y las personas a quienes concede acceso; SHEEPLINK los procesa para proporcionar las funciones contratadas.",
          "Si tu solicitud se refiere a registros de una iglesia, puedes dirigirte a su responsable. También puedes escribir al servicio para que evalúe la solicitud y coordine su atención con quien corresponda, previa comprobación de identidad y autorización.",
        ],
      },
      {
        title: "2. Información utilizada",
        paragraphs: [
          "El registro utiliza el nombre y correo del responsable, la contraseña protegida mediante hash, el nombre de la iglesia y los datos de ubicación o contacto que se proporcionen. Las invitaciones usan el correo, nombre, rol y asignaciones del usuario.",
          "Según el uso de cada iglesia, se almacenan nombres de integrantes, edad o cumpleaños, pertenencia a células y zonas, estado de participación, asistencias, ministerios y turnos, cursos, notas, historial y mensajes internos. También pueden guardarse fotografías, estado de bautismo, lecturas y reflexiones devocionales, disponibilidad de servicio y períodos de disciplina con sus motivos. El acceso depende de los permisos y el ámbito asignado. No todos estos campos son obligatorios.",
          "También se procesan datos técnicos necesarios para seguridad y funcionamiento, como la dirección IP utilizada para limitar intentos, registros de errores y solicitudes y marcas de actividad de la sesión. No incluyas en mensajes libres información sensible que no sea necesaria.",
        ],
      },
      {
        title: "3. Finalidades y bases del tratamiento",
        paragraphs: [
          "La información permite crear cuentas, verificar correos, autenticar usuarios, aplicar permisos, administrar la iglesia, enviar invitaciones y mensajes operativos, prestar soporte y prevenir abusos. No se utiliza para publicidad personalizada dentro de la aplicación.",
          "El tratamiento se sustenta, según corresponda, en la prestación del servicio solicitado, las obligaciones legales, la seguridad y las autorizaciones válidas que deban obtenerse. La aceptación de términos o la lectura de esta política no constituye un permiso general para cualquier uso de datos.",
          "Las convicciones religiosas y la información que permita inferirlas pueden ser datos sensibles. Cada iglesia debe verificar la base y los requisitos aplicables antes de cargarlos, incluidas las reglas especiales para menores y sus representantes.",
        ],
      },
      {
        title: "4. Acceso y proveedores",
        paragraphs: [
          "Los usuarios acceden según su rol y ámbito asignado. El administrador de la plataforma gestiona iglesias y suscripciones y puede seleccionar una iglesia para prestar soporte autorizado. Toda intervención técnica debe limitarse a lo necesario para gestionar el servicio, resolver incidencias o cumplir obligaciones.",
          "El funcionamiento utiliza Nexode para alojamiento, base de datos y almacenamiento S3 de fotografías, portadas y materiales de cursos, y Brevo para los correos transaccionales. El acceso opcional con Google utiliza Firebase Authentication: se verifica el identificador de Google, el correo y el nombre disponibles; SHEEPLINK no recibe la contraseña de Google y conserva sus propios roles y permisos. Para la contratación de planes, Stripe procesará los pagos y la facturación. SHEEPLINK conservará identificadores de cliente y suscripción y su estado; no recibirá el número completo de la tarjeta ni su código de seguridad. La entrega y protección del tráfico puede involucrar servicios de red como Cloudflare. Solo se comunica a los proveedores la información necesaria para su función; por ejemplo, el correo de destino y el contenido de una invitación.",
          "Estos proveedores pueden procesar información en otros países. La ubicación efectiva depende de la infraestructura y de sus condiciones. Para detalles sobre una operación o las garantías aplicables a tu caso, contacta al servicio. No se vende la información de los integrantes.",
          "La tipografía se carga actualmente desde Google Fonts. Al solicitarla, el navegador se comunica con Google y le transmite datos técnicos de la conexión, como la dirección IP. Los enlaces externos a WhatsApp y otros sitios solo se abren cuando decides visitarlos y tienen sus propias políticas.",
        ],
      },
      {
        title: "5. Conservación y seguridad",
        paragraphs: [
          "Se conserva la información mientras sea necesaria para prestar el servicio, atender solicitudes, resolver incidencias o cumplir obligaciones aplicables. La eliminación y el cierre de una iglesia se coordinan con una persona autorizada; no hay un plazo único aplicable a todos los registros.",
          "Los registros pendientes de verificación tienen caducidad y se eliminan mediante un mecanismo automático de la base de datos. La eliminación técnica puede no coincidir exactamente con el momento de caducidad. Las copias de seguridad y registros técnicos, si existen, pueden tener ciclos de conservación distintos.",
          "Se utilizan HTTPS en producción, contraseñas con hash, cookies de sesión httpOnly y restricciones por iglesia y rol. Ningún sistema elimina todos los riesgos; avisa de inmediato si sospechas un incidente o acceso indebido.",
        ],
      },
      {
        title: "6. Tus derechos y solicitudes",
        paragraphs: [
          "Puedes solicitar información sobre el tratamiento y, conforme a la normativa aplicable, acceso, rectificación, cancelación o eliminación, oposición y las demás facultades que te correspondan. Cuando el tratamiento se base en consentimiento, puedes solicitar su retirada sin afectar el tratamiento lícito previo.",
          "Escribe a krecarfaz@gmail.com indicando tu relación con la cuenta o iglesia y qué necesitas. No envíes contraseñas ni documentos sensibles de entrada; se solicitará únicamente la información necesaria para verificar tu identidad. Algunas solicitudes deben coordinarse con la iglesia o pueden estar sujetas a obligaciones de conservación.",
          "Si no estás conforme con la atención, puedes recurrir a la autoridad de protección de datos competente. Cuando resulte aplicable la normativa peruana, la referencia es la Ley N.º 29733 y su reglamento vigente, y la Autoridad Nacional de Protección de Datos Personales.",
        ],
      },
      {
        title: "7. Cambios y tecnologías del navegador",
        paragraphs: [
          "Consulta la Política de cookies para conocer las cookies y marcas de sesión utilizadas. Los cambios relevantes en el tratamiento se informarán por los canales disponibles; cuando se requiera un nuevo consentimiento, deberá solicitarse por separado.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    summary:
      "Las tecnologías del navegador que permiten iniciar sesión y mantener tu cuenta protegida.",
    sections: [
      {
        title: "1. Qué utiliza la aplicación",
        paragraphs: [
          "SHEEPLINK utiliza una cookie de sesión y almacenamiento local del navegador para autenticación, control de inactividad y sincronización del cierre de sesión entre pestañas. La landing pública no consulta la sesión de la app. El acceso opcional con Google utiliza Firebase para completar la autenticación; la sesión de Firebase se mantiene en memoria y después se cierra, mientras SHEEPLINK conserva su propia cookie de sesión. La aplicación no incorpora actualmente herramientas de publicidad ni cookies analíticas opcionales.",
          "Estos mecanismos son operativos y de seguridad. No se muestra una elección ficticia para rechazar una sesión que es necesaria para entrar. Si se incorporan tecnologías opcionales, se informarán sus finalidades y se ofrecerán las opciones que correspondan antes de utilizarlas.",
        ],
      },
      {
        title: "2. Cookie session",
        paragraphs: [
          "La cookie session identifica la sesión autenticada. Se entrega con httpOnly y SameSite=Lax y, en producción, Secure. El JavaScript de la página no puede leerla. Se elimina al cerrar la sesión y su vigencia se renueva con las peticiones autenticadas; el tiempo depende de la configuración del servicio.",
          "El control de inactividad del frontend cierra la sesión tras aproximadamente 15 minutos sin actividad. Esto es distinto de la renovación técnica del token y puede depender de que el navegador ejecute sus temporizadores.",
        ],
      },
      {
        title: "3. Almacenamiento local y de pestaña",
        paragraphs: [
          "localStorage guarda lastActivity, con la marca de actividad, y logoutAt, para avisar del cierre de sesión a otras pestañas. Estas marcas pueden permanecer hasta que se sobrescriban o se borren los datos del sitio; no contienen el token, la contraseña ni el nombre de la persona.",
          "sessionStorage guarda hadSession y sessionExpired para gestionar los avisos de acceso y caducidad. Es información de la pestaña que se elimina al cerrarla o cuando la aplicación la actualiza.",
        ],
      },
      {
        title: "4. Infraestructura y sitios externos",
        paragraphs: [
          "Los proveedores de red y protección del sitio pueden utilizar mecanismos técnicos propios para gestionar tráfico o prevenir abuso. Su presencia depende de la configuración efectiva de la infraestructura. Si sigues enlaces a WhatsApp u otros sitios, se aplican también sus políticas.",
        ],
      },
      {
        title: "5. Cómo gestionar estas tecnologías",
        paragraphs: [
          "Puedes cerrar sesión y borrar las cookies y los datos de este sitio desde tu navegador. Bloquear las cookies necesarias puede impedir el acceso. Borrar el almacenamiento local puede interrumpir los avisos y la sincronización entre pestañas; no elimina por sí solo los registros que tu iglesia conserva en el servidor.",
          "Para consultas sobre cookies o datos personales, escribe a krecarfaz@gmail.com o revisa la Política de privacidad.",
        ],
      },
    ],
  },
} satisfies Record<string, LegalDocument>;

export type LegalDocumentKey = keyof typeof LEGAL_DOCUMENTS;
