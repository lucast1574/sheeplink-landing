import { SITE_URL, SOCIAL_IMAGE, pageMetadata } from "./shared/config/seo";
import {
  PLANS,
  CONTACT_EMAIL,
  APP_STORE_URL,
} from "./features/landing/landing.content";
export function structuredData(path: string) {
  const page = pageMetadata(path);
  if (!page) return null;
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
      description:
        "Software de gestión para iglesias de habla hispana: células, asistencia, ministerios, escuela bíblica y comunidad.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        availableLanguage: "es",
        url: SITE_URL + "/soporte",
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: "SheepLink",
      alternateName: "SHEEPLINK",
      inLanguage: "es",
      publisher: { "@id": SITE_URL + "/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": SITE_URL + page.path + "#webpage",
      url: SITE_URL + page.path,
      name: page.title,
      description: page.description,
      inLanguage: "es",
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
      inLanguage: "es",
      description: page.description,
      image: SITE_URL + SOCIAL_IMAGE,
      mainEntityOfPage: { "@id": SITE_URL + "/#webpage" },
      audience: {
        "@type": "Audience",
        audienceType: "Pastores y líderes de iglesias de habla hispana",
      },
      isAccessibleForFree: false,
      featureList: [
        "Gestión de células e integrantes",
        "Registro de asistencia",
        "Organización de ministerios y turnos",
        "Escuela bíblica y materiales de cursos",
        "Actividades, inscripciones y presupuesto",
        "Devocionales de iglesia y célula",
      ],
      publisher: { "@id": SITE_URL + "/#organization" },
      offers: PLANS.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        url: SITE_URL + "/#precios",
        description:
          p.trialDays > 0
            ? `${p.trialDays} días gratis con tarjeta, después US$${p.amount / 100}/mes. Renovación automática; cancela antes para evitar el cobro.`
            : p.description,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.amount / 100,
          priceCurrency: p.currency.toUpperCase(),
          billingDuration: "P1M",
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
      inLanguage: "es",
      description:
        "App para integrantes y líderes de iglesias: cumpleaños, turnos de servicio, célula, asistencia y perfil. Requiere una cuenta activa de tu iglesia. Android en preparación.",
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
          item: SITE_URL + "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title.split(" | ")[0],
          item: SITE_URL + page.path,
        },
      ],
    });
  return { "@context": "https://schema.org", "@graph": graph };
}
