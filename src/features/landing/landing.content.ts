import { pricingCopy, priceLabel } from "./pricing";
import BILLING_CATALOG from "./billing-catalog.generated.json";
export const CONTACT_EMAIL = "krecarfaz@gmail.com";
export const WHATSAPP_URL =
  "https://wa.me/51981427532?text=Hola%2C%20quiero%20conocer%20SHEEPLINK";
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
    q: "¿Necesito instalar algo?",
    a: "No. SHEEPLINK funciona desde el navegador, en computadora o celular, sin instalar nada.",
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
    a: "Sí. Los líderes de célula suelen marcar asistencia desde el teléfono, por eso la versión móvil está pensada para eso.",
  },
];
export const NAV = [
  { href: "#funciones", label: "Funciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];
