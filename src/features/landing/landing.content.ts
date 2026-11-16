import { translate } from "../../shared/i18n/index.ts";
import { pricingCopy, priceLabel } from "./pricing";
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
      "SheepLink es un software de gestión para iglesias en español, inglés y portugués. Reúne integrantes, células, asistencia, ministerios, escuela bíblica, actividades y devocionales en una plataforma web.",
    ),
  },
  {
    q: translate("¿Qué puedo hacer con las células y la asistencia?"),
    a: translate(
      "Puedes organizar las células de tu iglesia por zonas, registrar a sus integrantes y marcar la asistencia de cada encuentro. Los líderes de célula acompañan a su grupo y los líderes de zona revisan la información de las células a su cargo.",
    ),
  },
  {
    q: translate("¿SheepLink permite organizar ministerios y escuela bíblica?"),
    a: translate(
      "Sí. La plataforma web permite organizar ministerios y turnos de servicio, gestionar cursos y materiales de escuela bíblica, y preparar actividades con inscripciones y presupuesto. También reúne devocionales para la iglesia y sus células.",
    ),
  },
  {
    q: translate("¿Necesito instalar algo?"),
    a: translate(
      "La plataforma web funciona desde el navegador en computadora o celular, sin instalar nada. La app para iPhone está disponible en App Store y Android está en pruebas cerradas. Para entrar a la app necesitas una cuenta activa de tu iglesia.",
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
