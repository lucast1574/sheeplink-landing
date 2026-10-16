export const CONTACT_EMAIL = "krecarfaz@gmail.com";

export const WHATSAPP_URL =
  "https://wa.me/51981427532?text=Hola%2C%20quiero%20conocer%20SHEEPLINK";

export const DEMO_HOST = "app.sheeplink.com";

export const FEATURES = [
  {
    icon: "layers",
    title: "Zonas y células",
    text: "Organiza a tu gente por zona, célula e integrante. Cada líder ve solo lo suyo.",
  },
  {
    icon: "check",
    title: "Asistencia semanal",
    text: "Marca quién asistió en segundos desde el celular y mira cómo avanza cada célula.",
  },
  {
    icon: "star",
    title: "Ministerios y turnos",
    text: "Programa quién sirve cada semana, con fechas exactas y una vista mensual clara.",
  },
  {
    icon: "user",
    title: "Integrantes y visitas",
    text: "Un registro ordenado de cada persona: contacto, célula, ministerio y seguimiento.",
  },
  {
    icon: "mail",
    title: "Mensajes a tu equipo",
    text: "Envía avisos a pastores, líderes de zona, de célula o de ministerio en un solo lugar.",
  },
  {
    icon: "chart",
    title: "Consultas y reportes",
    text: "Encuentra rápido quién falta, quién creció y en qué zona hay que reforzar.",
  },
];

export const STEPS = [
  {
    n: "1",
    title: "Crea tu iglesia",
    text: "Registra tu iglesia, tus zonas y tus células. Toma menos de una tarde.",
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

export const EXAMPLE_STORIES = [
  {
    text: "Un pastor organiza sus células y consulta la asistencia que registran sus líderes desde el celular.",
    name: "Pastor Elian Valnera",
    role: "Pastor principal",
  },
  {
    text: "Una líder de ministerio prepara los turnos del domingo y comparte con su equipo quién sirve en cada actividad.",
    name: "Nerea Solvén",
    role: "Líder de ministerio",
  },
  {
    text: "Un líder de zona revisa las ausencias y organiza el seguimiento de las personas que necesitan acompañamiento.",
    name: "Darío Luriel",
    role: "Líder de zona",
  },
];

export const FAQ = [
  {
    q: "¿Necesito instalar algo?",
    a: "No. SHEEPLINK funciona desde el navegador, en computadora o celular, sin instalar nada.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Cada líder solo accede a la información que le corresponde y la sesión se cierra sola tras unos minutos de inactividad.",
  },
  {
    q: "¿Cómo empiezo con mi iglesia?",
    a: "Crea la cuenta de tu iglesia, invita a tu equipo y elige el plan que necesitas. La suscripción mensual y los pagos se gestionan a través de Stripe.",
  },
  {
    q: "¿Funciona bien en el celular?",
    a: "Sí. Los líderes de célula suelen marcar asistencia desde el teléfono, por eso la versión móvil está pensada para eso.",
  },
];

export const MOCK_STATS = [
  {
    label: "Integrantes",
    value: "128",
    sub: "9 altas este mes",
    tone: "#2c5a4d",
  },
  { label: "Células activas", value: "14", sub: "en 4 zonas", tone: "#3f7a68" },
  {
    label: "Asistencia semanal",
    value: "86%",
    sub: "+4% vs. semana anterior",
    tone: "#b9771f",
  },
  {
    label: "Servidores esta semana",
    value: "23",
    sub: "en 6 ministerios",
    tone: "#2c5a4d",
  },
  { label: "Seguimientos", value: "5", sub: "3 sin contacto", tone: "#a43a2c" },
  {
    label: "Visitas nuevas",
    value: "7",
    sub: "último domingo",
    tone: "#3f7a68",
  },
];

export const MOCK_CELLS = [
  {
    initial: "E",
    name: "Célula Esperanza",
    sub: "Zona Norte · Líder Alina V.",
    pct: "92%",
    ok: true,
  },
  {
    initial: "V",
    name: "Célula Vida Nueva",
    sub: "Zona Centro · Líder Elio N.",
    pct: "88%",
    ok: true,
  },
  {
    initial: "R",
    name: "Célula Roca Firme",
    sub: "Zona Sur · Líder Nerea S.",
    pct: "81%",
    ok: true,
  },
  {
    initial: "F",
    name: "Célula Fuente de Vida",
    sub: "Zona Este · Líder Darío L.",
    pct: "64%",
    ok: false,
  },
  {
    initial: "L",
    name: "Célula Luz del Mundo",
    sub: "Zona Norte · Líder Iria T.",
    pct: "79%",
    ok: true,
  },
];

export const MOCK_SERVERS = [
  { group: "Alabanza", people: "Sira M. · Ivo R.", day: "Dom 11" },
  { group: "Niños", people: "Liora D. · Teo B. · Iria T.", day: "Dom 11" },
  { group: "Recepción", people: "Alina V. · Elio N.", day: "Dom 11" },
  { group: "Sonido", people: "Gael O.", day: "Dom 11" },
];

export const MOCK_FOLLOW = [
  { initial: "E", name: "Elio Naviel", task: "Llamar para seguimiento" },
  { initial: "A", name: "Alina Velmar", task: "Visitar en casa" },
  { initial: "I", name: "Iria Terván", task: "Invitar a la célula" },
  { initial: "G", name: "Gael Orvén", task: "Llamar para seguimiento" },
];

export const NAV = [
  { href: "#funciones", label: "Funciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];
