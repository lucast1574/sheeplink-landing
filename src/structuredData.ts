import {
  SITE_URL,
  APP_URL,
  SOCIAL_IMAGE,
  pageMetadata,
} from "./shared/config/seo";
import { PLANS, CONTACT_EMAIL } from "./features/landing/landing.content";
export function structuredData(path: string) {
  const page = pageMetadata(path);
  if (!page) return null;
  const graph: object[] = [
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "SHEEPLINK",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_URL + "/brand/sheeplink-mark-green.png",
        width: 512,
        height: 512,
      },
      email: CONTACT_EMAIL,
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: "SHEEPLINK",
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
      name: "SHEEPLINK",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "es",
      description: page.description,
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
        description: p.per,
        ...(p.id === "trial"
          ? {
              eligibleDuration: {
                "@type": "QuantitativeValue",
                value: 7,
                unitCode: "DAY",
              },
            }
          : {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: p.price.replace(/[^0-9.]/g, ""),
                priceCurrency: "USD",
                billingDuration: "P1M",
              },
            }),
      })),
    });
  else
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
