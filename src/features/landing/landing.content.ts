import { translate } from "../../shared/i18n/index.ts";
import { pricingCopy, priceLabel, capacityCopy } from "./pricing";
import BILLING_CATALOG from "./billing-catalog.generated.json";
export const CONTACT_EMAIL = "krecarfaz@gmail.com";
export const WHATSAPP_URL =
  "https://wa.me/51981427532?text=Hola%2C%20quiero%20conocer%20SHEEPLINK";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=app.sheeplink.sheeplink";
export const APP_STORE_URL =
  "https://apps.apple.com/pe/app/sheeplink/id6829374579";
export const STEPS = [
  {
    n: "1",
    title: translate("Crea tu iglesia"),
    text: translate(
      "Registra tu iglesia, tus zonas y tus células. Avanza a tu ritmo, con la estructura de tu comunidad.",
    ),
  },
  {
    n: "2",
    title: translate("Invita a tus líderes"),
    text: translate(
      "Cada líder entra con su propio usuario y ve únicamente lo que le corresponde.",
    ),
  },
  {
    n: "3",
    title: translate("Registra y cuida"),
    text: translate(
      "Marca asistencia, programa turnos de servicio y da seguimiento a cada persona.",
    ),
  },
];
export const ROLES = [
  {
    title: translate("Pastor principal"),
    text: translate(
      "Ve toda la iglesia: zonas, células, ministerios y mensajes.",
    ),
  },
  {
    title: translate("Líder de zona"),
    text: translate(
      "Acompaña a sus líderes de célula y revisa la asistencia de su zona.",
    ),
  },
  {
    title: translate("Líder de célula"),
    text: translate(
      "Registra a sus integrantes y marca la asistencia cada semana.",
    ),
  },
  {
    title: translate("Líder de ministerio"),
    text: translate("Programa turnos y sabe quién sirve en cada actividad."),
  },
];
export const PLANS = BILLING_CATALOG.map((p) => ({
  ...p,
  description: translate(p.description),
  price: priceLabel(p),
  per: p.interval === "year" ? translate("al año") : translate("al mes"),
  highlight: p.id.startsWith("vina-"),
  cta:
    p.trialDays > 0
      ? translate("Probar {{p0}} días gratis", { p0: p.trialDays })
      : translate("Elegir {{p0}}", { p0: p.name }),
  items: [
    p.maxMembers === null
      ? translate("Integrantes ilimitados")
      : translate("Hasta {{p0}} integrantes", { p0: p.maxMembers }),
    p.maxCells === null
      ? translate("Células ilimitadas")
      : translate("Hasta {{p0}} células", { p0: p.maxCells }),
    p.maxMinistries === null
      ? translate("Ministerios ilimitados")
      : translate("Hasta {{p0}} ministerios", { p0: p.maxMinistries }),
    p.maxUsers === null
      ? translate("Cuentas ilimitadas")
      : translate("Hasta {{p0}} cuentas de usuario", { p0: p.maxUsers }),
    translate("Asistencia, servicio y devocionales"),
    translate("Cursos, actividades y comunidad"),
  ],
}));
export const PRICING = pricingCopy(BILLING_CATALOG);
export const CAPACITY_COPY = capacityCopy(BILLING_CATALOG);
export const MIGRATION_COPY = translate(
  "Importa integrantes desde Excel (.xlsx) o CSV. Descarga una plantilla o usa tu propio archivo, asocia las columnas y revisa los posibles duplicados antes de confirmar. Puedes asignar una célula al archivo completo o por fila. La administración puede dejar integrantes sin célula y asignarlos más adelante.",
);
export const EXPORTS_COPY = translate(
  "Descarga movimientos de Tesorería e inscritos a actividades en CSV, el informe mensual de diezmos en Excel y reportes de Academia Bíblica en Excel o PDF, según tus permisos. Si decides dejar SheepLink, guarda los archivos que necesites antes de finalizar tu acceso. Las descargas cubren los reportes indicados.",
);
export const FAQ = [
  {
    q: translate("¿En qué idiomas está disponible SheepLink?"),
    a: translate(
      "La plataforma, la app y esta web detectan automáticamente el idioma del navegador o dispositivo: español, inglés o portugués. Si el idioma no es compatible, se muestra español. No necesitas elegirlo en un selector.",
    ),
  },
  {
    q: translate("¿Qué es SheepLink y para quién es?"),
    a: translate(
      "SheepLink es un software de gestión para iglesias en español, inglés y portugués. Reúne integrantes, células, asistencia, ministerios, escuela bíblica, actividades, devocionales, tesorería e inventario en una plataforma web.",
    ),
  },
  {
    q: translate("¿Qué puedo hacer con las células y la asistencia?"),
    a: translate(
      "Puedes organizar las células de tu iglesia por zonas, registrar a sus integrantes y marcar la asistencia de cada encuentro. Los líderes de célula acompañan a su grupo y los líderes de zona revisan la información de las células a su cargo.",
    ),
  },
  {
    q: translate(
      "¿SheepLink permite organizar ministerios, cultos y fechas de la iglesia?",
    ),
    a: translate(
      "Sí. Programa cultos y reuniones en el calendario. En cada culto puedes ordenar los momentos con su hora y responsable, además de coordinar los turnos de los ministerios.",
    ),
  },
  {
    q: translate("¿Puedo crear formularios para mi congregación?"),
    a: translate(
      "Sí. El pastor o responsable puede crear preguntas para visitas, peticiones de oración, inscripciones y actualización de datos, compartir el enlace y consultar las respuestas de su iglesia.",
    ),
  },
  {
    q: translate("¿Puedo gestionar tesorería, finanzas e inventario?"),
    a: translate(
      "Sí. Registra aportes, diezmos, gastos y recaudaciones, consulta movimientos y reportes, y lleva el control de los bienes, préstamos e inventario de la iglesia.",
    ),
  },
  {
    q: translate("¿Puedo importar miembros desde Excel o CSV?"),
    a: MIGRATION_COPY,
  },
  {
    q: translate("¿SheepLink sirve para una iglesia de 1.500 integrantes?"),
    a: CAPACITY_COPY,
  },
  {
    q: translate("¿Puedo exportar información de mi iglesia?"),
    a: EXPORTS_COPY,
  },
  {
    q: translate("¿Cómo se protegen los datos y permisos?"),
    a: translate(
      "Cada persona usa una cuenta propia. El líder de célula accede a las células que tiene asignadas; los líderes de zona y sector trabajan dentro de su ámbito. Tesorería tiene permisos específicos de lectura, gestión y acceso. Los datos se separan por iglesia y las acciones se validan en el servidor.",
    ),
  },
  {
    q: translate("¿Qué soporte técnico ofrecen?"),
    a: translate(
      "El soporte técnico está disponible las 24 horas. Atendemos las solicitudes y buscamos darles solución en menos de 4 horas.",
    ),
  },
  {
    q: translate(
      "¿Puedo registrar la llegada de participantes a una actividad?",
    ),
    a: translate(
      "Sí. Las actividades y retiros permiten gestionar inscripciones y marcar la llegada de sus participantes. Este check-in corresponde al evento; no es un sistema de entrega y recogida infantil con impresión de etiquetas o códigos.",
    ),
  },
  {
    q: translate("¿Cómo organizo varios cultos o sedes?"),
    a: translate(
      "Puedes programar distintos cultos y fechas en el calendario, y coordinar ministerios y turnos de servicio. La estructura de una iglesia se organiza en sectores, zonas y células. Si necesitas campus con administración y contabilidad independientes, confirma ese alcance con soporte antes de contratar.",
    ),
  },
  {
    q: translate("¿Necesito instalar algo?"),
    a: translate(
      "La plataforma web funciona desde el navegador en computadora o celular. También puedes descargar la app en App Store y Google Play. Para entrar necesitas una cuenta activa de tu iglesia.",
    ),
  },
  {
    q: translate("¿Mis datos están seguros?"),
    a: translate(
      "Cada usuario accede según sus roles y responsabilidades dentro de su iglesia. Puedes cerrar tu sesión desde tu perfil.",
    ),
  },
  {
    q: translate("¿Puedo probarlo antes de pagar?"),
    a: PRICING.faq,
  },
  {
    q: translate("¿Funciona bien en el celular?"),
    a: translate(
      "Sí. Puedes usar la plataforma web desde el teléfono. La app móvil de SheepLink reúne cumpleaños próximos, turnos de servicio, tu célula, registro de asistencia y tu perfil, según los permisos de tu cuenta.",
    ),
  },
];
export const NAV = [
  { href: "#funciones", label: translate("Funciones") },
  { href: "#app-movil", label: translate("App móvil") },
  { href: "#como-funciona", label: translate("Cómo funciona") },
  { href: "#precios", label: translate("Precios") },
  { href: "#contacto", label: translate("Contacto") },
];
