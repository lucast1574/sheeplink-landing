import { translate } from "../i18n/index.ts";
export const SITE_URL = "https://sheeplink.app";
export const APP_URL = "https://app.sheeplink.app";
export const SOCIAL_IMAGE = "/og-sheeplink-20261016.png";
export const PUBLIC_PAGES = [
  {
    path: "/",
    title: translate("SheepLink | Software de gestión para iglesias"),
    description: translate(
      "SheepLink: software de gestión para iglesias. Organiza células, asistencia, ministerios, turnos y escuela bíblica. Conoce los planes y la app para iPhone.",
    ),
  },
  {
    path: "/software-para-iglesias",
    title: translate("Qué es SheepLink: funciones y app para iglesias"),
    description: translate(
      "Conoce qué ofrece SheepLink a pastores y líderes: gestión de células, asistencia, ministerios, escuela bíblica, devocionales y app móvil para tu iglesia.",
    ),
  },
  {
    path: "/terminos",
    title: translate("Términos y condiciones | SHEEPLINK"),
    description: translate(
      "Condiciones de uso de SHEEPLINK, gestión de cuentas, responsabilidades de las iglesias, planes y contacto del servicio.",
    ),
  },
  {
    path: "/privacidad",
    title: translate("Política de privacidad | SHEEPLINK"),
    description: translate(
      "Conoce qué datos utiliza SHEEPLINK, cómo protege la información de tu iglesia, sus proveedores y cómo solicitar atención de privacidad.",
    ),
  },
  {
    path: "/cookies",
    title: translate("Política de cookies | SHEEPLINK"),
    description: translate(
      "Información sobre las cookies de sesión, autenticación y tecnologías del navegador que utiliza SHEEPLINK.",
    ),
  },
  {
    path: "/soporte",
    title: translate("Soporte de la app | SHEEPLINK"),
    description: translate(
      "Ayuda con el acceso, las notificaciones, las fotografías y las solicitudes de privacidad de la aplicación SheepLink.",
    ),
  },
] as const;
export const pageMetadata = (path: string) =>
  PUBLIC_PAGES.find((page) => page.path === (path.replace(/\/$/, "") || "/"));
