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
export const PLANS = [
  {
    id: "trial",
    name: "Prueba",
    price: "US$ 0",
    per: "7 días gratis",
    highlight: false,
    cta: "Empezar gratis",
    signup: true,
    items: [
      "Hasta 50 integrantes",
      "3 células",
      "1 ministerio",
      "Asistencia semanal",
    ],
  },
  {
    id: "growth",
    name: "Crecimiento",
    price: "US$ 25",
    per: "al mes",
    highlight: true,
    cta: "Elegir Crecimiento",
    badge: "Más elegido",
    items: [
      "Hasta 300 integrantes",
      "Células y zonas ilimitadas",
      "Ministerios y turnos",
      "Mensajes y consultas",
    ],
  },
  {
    id: "congregation",
    name: "Congregación",
    price: "US$ 50",
    per: "al mes",
    highlight: false,
    cta: "Elegir Congregación",
    items: [
      "Integrantes ilimitados",
      "Varios líderes por zona",
      "Reportes avanzados",
      "Acompañamiento personalizado",
    ],
  },
];
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
    a: "Claro. Tienes 7 días de prueba gratis, con hasta 50 integrantes, 3 células y 1 ministerio. Después puedes contratar tu suscripción desde Facturación y pagar a través de Stripe.",
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
