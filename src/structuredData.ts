import { translate, language, localizedPath } from "./shared/i18n/index.ts";
import { SITE_URL, SOCIAL_IMAGE, pageMetadata } from "./shared/config/seo";
import {
  PLANS,
  CONTACT_EMAIL,
  APP_STORE_URL,
} from "./features/landing/landing.content";
export function structuredData(path: string, localized = false) {
  const page = pageMetadata(path);
  if (!page) return null;
  const pageUrl = SITE_URL + (localized ? localizedPath(page.path) : page.path);
  const graph: object[] = [
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "SheepLink",
      alternateName: "SHEEPLINK",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_URL + "/brand/sheeplink-mark-green.png",
        width: 512,
        height: 512,
      },
      email: CONTACT_EMAIL,
      description: translate(
        "Software de gestión para iglesias en español, inglés y portugués: células, asistencia, ministerios, escuela bíblica, tesorería e inventario.",
      ),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        availableLanguage: "es",
        url: SITE_URL + localizedPath("/soporte"),
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: "SheepLink",
      alternateName: "SHEEPLINK",
      inLanguage: ["es", "en", "pt"],
      publisher: { "@id": SITE_URL + "/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": pageUrl + "#webpage",
      url: pageUrl,
      name: page.title,
      description: page.description,
      inLanguage: language,
      isPartOf: { "@id": SITE_URL + "/#website" },
      ...(path === "/" || path === "/software-para-iglesias"
        ? { about: { "@id": SITE_URL + "/#application" } }
        : {}),
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SITE_URL + SOCIAL_IMAGE,
        width: 1200,
        height: 630,
      },
    },
  ];
  if (path === "/")
    graph.push({
      "@type": "WebApplication",
      "@id": SITE_URL + "/#application",
      name: "SheepLink",
      alternateName: "SHEEPLINK",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: ["es", "en", "pt"],
      description: page.description,
      image: SITE_URL + SOCIAL_IMAGE,
      mainEntityOfPage: { "@id": pageUrl + "#webpage" },
      audience: {
        "@type": "Audience",
        audienceType: translate("Pastores y líderes de iglesias"),
      },
      isAccessibleForFree: false,
      featureList: [
        translate("Gestión de células e integrantes"),
        translate("Registro de asistencia"),
        translate("Organización de ministerios y turnos"),
        translate("Escuela bíblica y materiales de cursos"),
        translate("Actividades, inscripciones y presupuesto"),
        translate("Devocionales de iglesia y célula"),
        translate("Tesorería e inventario"),
        translate("Programación y seguimiento pastoral"),
        translate("Tres idiomas automáticos"),
      ],
      publisher: { "@id": SITE_URL + "/#organization" },
      offers: PLANS.map((p) => ({
        "@type": "Offer",
        name: `${p.name} ${p.interval === "year" ? translate("anual") : translate("mensual")}`,
        price: p.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        url: SITE_URL + "/#precios",
        description:
          p.trialDays > 0
            ? translate(
                "{{p0}} días gratis con tarjeta, después US${{p1}}/mes. Renovación automática; cancela antes para evitar el cobro.",
                { p0: p.trialDays, p1: p.amount / 100 },
              )
            : p.interval === "year"
              ? translate(
                  "{{p0}} Pago anual al contratar, sin prueba gratuita.",
                  { p0: p.description },
                )
              : p.description,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.amount / 100,
          priceCurrency: p.currency.toUpperCase(),
          billingDuration: p.interval === "year" ? "P1Y" : "P1M",
        },
      })),
    });
  if (path === "/")
    graph.push({
      "@type": "MobileApplication",
      "@id": SITE_URL + "/#mobile-application",
      name: "SheepLink",
      url: SITE_URL + "/#app-movil",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS",
      installUrl: APP_STORE_URL,
      inLanguage: ["es", "en", "pt"],
      description: translate(
        "App para integrantes y líderes de iglesias: cumpleaños, turnos de servicio, célula, asistencia y perfil. Requiere una cuenta activa de tu iglesia. Disponible para iPhone; Android en pruebas cerradas.",
      ),
      screenshot: ["hoy", "celula", "perfil"].map(
        (name) => SITE_URL + "/app/" + name + ".webp",
      ),
      publisher: { "@id": SITE_URL + "/#organization" },
      isPartOf: { "@id": SITE_URL + "/#application" },
    });
  if (path !== "/")
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "SHEEPLINK",
          item: SITE_URL + (localized ? localizedPath("/") : "/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title.split(" | ")[0],
          item: pageUrl,
        },
      ],
    });
  return { "@context": "https://schema.org", "@graph": graph };
}
