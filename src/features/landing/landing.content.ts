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
    title: "Crea tu iglesia",
    text: "Registra tu iglesia, tus zonas y tus células. Avanza a tu ritmo, con la estructura de tu comunidad.",
  },
  {
    n: "2",
    title: "Invita a tus líderes",
    text: "Cada líder entra con su propio usuario y ve únicamente lo que le corresponde.",
  },
  {
    n: "3",
    title: "Registra y cuida",
    text: "Marca asistencia, programa turnos de servicio y da seguimiento a cada persona.",
  },
];
export const ROLES = [
  {
    title: "Pastor principal",
    text: "Ve toda la iglesia: zonas, células, ministerios y mensajes.",
  },
  {
    title: "Líder de zona",
    text: "Acompaña a sus líderes de célula y revisa la asistencia de su zona.",
  },
  {
    title: "Líder de célula",
    text: "Registra a sus integrantes y marca la asistencia cada semana.",
  },
  {
    title: "Líder de ministerio",
    text: "Programa turnos y sabe quién sirve en cada actividad.",
  },
];
export const PLANS = BILLING_CATALOG.map((p, index) => ({
  ...p,
  price: priceLabel(p),
  per: "al mes",
  highlight: index === 1,
  cta:
    p.trialDays > 0 ? `Probar ${p.trialDays} días gratis` : `Elegir ${p.name}`,
  items: [
    p.maxMembers === null
      ? "Integrantes ilimitados"
      : `Hasta ${p.maxMembers} integrantes`,
    p.maxCells === null ? "Células ilimitadas" : `Hasta ${p.maxCells} células`,
    p.maxMinistries === null
      ? "Ministerios ilimitados"
      : `Hasta ${p.maxMinistries} ministerios`,
    p.maxUsers === null
      ? "Cuentas ilimitadas"
      : `Hasta ${p.maxUsers} cuentas de usuario`,
    "Asistencia, servicio y devocionales",
    "Cursos, actividades y comunidad",
  ],
}));
export const PRICING = pricingCopy(BILLING_CATALOG);
export const FAQ = [
  {
    q: "¿Qué es SheepLink y para quién es?",
    a: "SheepLink es un software de gestión para iglesias de habla hispana. Ayuda a pastores y líderes a organizar integrantes, zonas, células, asistencia, ministerios, turnos de servicio, escuela bíblica, actividades y devocionales desde una plataforma web.",
  },
  {
    q: "¿Qué puedo hacer con las células y la asistencia?",
    a: "Puedes organizar las células de tu iglesia por zonas, registrar a sus integrantes y marcar la asistencia de cada encuentro. Los líderes de célula acompañan a su grupo y los líderes de zona revisan la información de las células a su cargo.",
  },
  {
    q: "¿SheepLink permite organizar ministerios y escuela bíblica?",
    a: "Sí. La plataforma web permite organizar ministerios y turnos de servicio, gestionar cursos y materiales de escuela bíblica, y preparar actividades con inscripciones y presupuesto. También reúne devocionales para la iglesia y sus células.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "La plataforma web funciona desde el navegador en computadora o celular, sin instalar nada. También existe una app para iPhone; la versión Android está en preparación. Para entrar a la app necesitas una cuenta activa de tu iglesia.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Cada usuario accede según sus roles y responsabilidades dentro de su iglesia. Puedes cerrar tu sesión desde tu perfil.",
  },
  {
    q: "¿Puedo probarlo antes de pagar?",
    a: PRICING.faq,
  },
  {
    q: "¿Funciona bien en el celular?",
    a: "Sí. Puedes usar la plataforma web desde el teléfono. La app móvil de SheepLink reúne cumpleaños próximos, turnos de servicio, tu célula, registro de asistencia y tu perfil, según los permisos de tu cuenta.",
  },
];
export const NAV = [
  { href: "#funciones", label: "Funciones" },
  { href: "#app-movil", label: "App móvil" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];
