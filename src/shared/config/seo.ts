import {
  translate,
  language,
  localizedPath,
  SUPPORTED_LANGUAGES,
} from "../i18n/index.ts";
export const SITE_URL = "https://sheeplink.app";
export const APP_URL = "https://app.sheeplink.app";
export const SOCIAL_IMAGE = "/og-sheeplink-20261016.png";
export const SOCIAL_IMAGE_ALT = translate(
  "SheepLink: tecnología al servicio de tu iglesia.",
);
export const OG_LOCALE = { es: "es_PE", en: "en_US", pt: "pt_BR" }[language];
export const pageAlternates = (path: string) => [
  ...SUPPORTED_LANGUAGES.map((code) => ({
    language: code,
    href: SITE_URL + localizedPath(path, code),
  })),
  { language: "x-default", href: SITE_URL + path },
];
export const PUBLIC_PAGES = [
  {
    path: "/",
    title: translate("SheepLink | Software de gestión para iglesias"),
    description: translate(
      "SheepLink es un software para iglesias en español, inglés y portugués. Importa integrantes desde Excel o CSV y exporta reportes.",
    ),
  },
  {
    path: "/software-para-iglesias",
    title: translate("Software para iglesias: funciones y app | SheepLink"),
    description: translate(
      "Conoce las funciones de SheepLink: importación de integrantes por Excel o CSV, exportación de reportes, formularios, inventario y app para Android e iOS.",
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
