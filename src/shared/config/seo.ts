export const SITE_URL = "https://sheeplink.app";
export const APP_URL = "https://app.sheeplink.app";
export const SOCIAL_IMAGE = "/og-sheeplink-20261016.png";
export const PUBLIC_PAGES = [
  {
    path: "/",
    title: "SheepLink | Software de gestión para iglesias",
    description:
      "SheepLink: software de gestión para iglesias. Organiza células, asistencia, ministerios, turnos y escuela bíblica. Conoce los planes y la app para iPhone.",
  },
  {
    path: "/software-para-iglesias",
    title: "Qué es SheepLink: funciones y app para iglesias",
    description:
      "Conoce qué ofrece SheepLink a pastores y líderes: gestión de células, asistencia, ministerios, escuela bíblica, devocionales y app móvil para tu iglesia.",
  },
  {
    path: "/terminos",
    title: "Términos y condiciones | SHEEPLINK",
    description:
      "Condiciones de uso de SHEEPLINK, gestión de cuentas, responsabilidades de las iglesias, planes y contacto del servicio.",
  },
  {
    path: "/privacidad",
    title: "Política de privacidad | SHEEPLINK",
    description:
      "Conoce qué datos utiliza SHEEPLINK, cómo protege la información de tu iglesia, sus proveedores y cómo solicitar atención de privacidad.",
  },
  {
    path: "/cookies",
    title: "Política de cookies | SHEEPLINK",
    description:
      "Información sobre las cookies de sesión, autenticación y tecnologías del navegador que utiliza SHEEPLINK.",
  },
  {
    path: "/soporte",
    title: "Soporte de la app | SHEEPLINK",
    description:
      "Ayuda con el acceso, las notificaciones, las fotografías y las solicitudes de privacidad de la aplicación SheepLink.",
  },
] as const;
export const pageMetadata = (path: string) =>
  PUBLIC_PAGES.find((page) => page.path === (path.replace(/\/$/, "") || "/"));
