# SHEEPLINK landing

Sitio público independiente de la aplicación. Las rutas de registro e inicio de sesión apuntan al frontend; los documentos legales se publican aquí.

`src/shared/config/seo.ts` centraliza las URL públicas y los metadatos de cada ruta. La compilación genera HTML para las cuatro páginas con React y el mismo árbol de rutas del navegador, además de sitemap, robots y datos estructurados. Nginx entrega esos archivos y devuelve 404 para rutas inexistentes. El navegador hidrata el contenido para conservar la navegación.

`PUBLIC_APP_URL` configura el destino de la aplicación al iniciar el contenedor. Si cambia el dominio del sitio, se actualiza `seo.ts` y se recompila para regenerar canonical y sitemap. Los enlaces de acceso no consultan la sesión ni reciben credenciales.

`npm run generate:og` reproduce la imagen social PNG de 1200 × 630 desde el logo vectorial oficial. `npm run build` debe ejecutarse antes de `npm test`, cuyas comprobaciones leen el HTML y los archivos publicados. CI también valida el contenedor real.

Los pushes a main despliegan la landing mediante el webhook de Dokploy guardado en la configuración privada de GitHub. El servicio permanece registrado y agrupado dentro de SHEEPLINK en Nexode. Las claves de administración no se guardan en este repositorio.
