# SHEEPLINK landing

Sitio público independiente de la aplicación. Las rutas de registro e inicio de sesión apuntan al frontend; los documentos legales se publican aquí.

`src/shared/config/seo.ts` centraliza las URL públicas y los metadatos de cada ruta. La compilación genera HTML para las cuatro páginas con React y el mismo árbol de rutas del navegador, además de sitemap, robots y datos estructurados. Nginx entrega esos archivos y devuelve 404 para rutas inexistentes. El navegador hidrata el contenido para conservar la navegación.

`PUBLIC_APP_URL` configura el destino de la aplicación al iniciar el contenedor. Si cambia el dominio del sitio, se actualiza `seo.ts` y se recompila para regenerar canonical y sitemap. Los enlaces de acceso no consultan la sesión ni reciben credenciales.

`npm run generate:og` reproduce la imagen social PNG de 1200 × 630 desde el logo vectorial oficial. `npm run build` debe ejecutarse antes de `npm test`, cuyas comprobaciones leen el HTML y los archivos publicados. CI también valida el contenedor real.

Los pushes a main despliegan la landing mediante el webhook de Dokploy guardado en la configuración privada de GitHub. El servicio permanece registrado y agrupado dentro de SHEEPLINK en Nexode. Las claves de administración no se guardan en este repositorio.


La portada usa `MarketingButton` e `Icon` para sus acciones compartidas, `CommunityScene` para la escena SVG y `ProductTour` para explorar los módulos sin llamadas al backend. `PricingSection`, las llamadas al registro, los avisos, las preguntas frecuentes, los términos y los datos estructurados derivan del catálogo público de BillingPlan. La demo responde a teclado y conserva el contenido de entrada en el HTML prerenderizado.

El movimiento usa CSS y un IntersectionObserver que se desconecta tras entrar en pantalla. No hay bucles JavaScript por cuadro ni librerías de vídeo en el navegador. La pausa manual detiene las animaciones; `prefers-reduced-motion` ofrece una presentación estática. Los estados de teclado cambian color y subrayado, sin outlines ni anillos de foco.


Los datos estructurados se generan desde `structuredData.ts` tanto al prerenderizar como al navegar entre páginas. Las ofertas describen los precios visibles sin añadir valoraciones de clientes. Todas las pestañas de la demostración conservan su contenido en el HTML; las inactivas usan hidden y quedan fuera de la interacción. La tipografía variable se sirve como WOFF2 local, con precarga de su subconjunto latino y licencia OFL incluida, sin peticiones a Google Fonts. El pie enlaza al catálogo público de lecturas en la aplicación.

## Catálogo comercial

`npm run build` consulta `/api/billing/plans`, valida su contenido y genera `billing-catalog.generated.json` antes de compilar. Una respuesta inválida o no disponible detiene la compilación para no publicar datos obsoletos. No se exige una cantidad fija de planes. `pricing.ts` genera los textos, precios, condiciones y enlace inicial desde ese catálogo; no mantiene nombres, precios o días de prueba duplicados. `npm run build:offline` sirve únicamente para trabajo local deliberadamente desconectado usando el último catálogo guardado.
