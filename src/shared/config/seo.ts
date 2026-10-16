export const SITE_URL = "https://sheeplink-landing-hzn112.nexode.app";
export const APP_URL = "https://iglesia-frontend-r3kyfl.nexode.app";
export const SOCIAL_IMAGE = "/og-sheeplink-20261016.png";
export const PUBLIC_PAGES = [
  {
    path: "/",
    title: "SHEEPLINK | Software de gestión para iglesias",
    description:
      "Organiza tu iglesia con SHEEPLINK: células, asistencia, ministerios, turnos y escuela bíblica. Más tiempo para servir y cuidar a tu comunidad.",
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
] as const;
export const pageMetadata = (path: string) =>
  PUBLIC_PAGES.find((page) => page.path === (path.replace(/\/$/, "") || "/"));
