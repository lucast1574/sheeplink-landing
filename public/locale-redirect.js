/* Run before hydration. Explicit language URLs keep their language. */
(() => {
  if (/^\/(es|en|pt)(?:\/|$)/.test(location.pathname)) return;
  const pages = ['/', '/software-para-iglesias', '/terminos', '/privacidad', '/cookies', '/soporte'];
  const pathname = location.pathname.replace(/\/$/, '') || '/';
  if (!pages.includes(pathname)) return;
  let language = 'es';
  for (const preference of navigator.languages?.length ? navigator.languages : [navigator.language]) {
    const base = preference.toLowerCase().replace(/_/g, '-').split('-')[0];
    if (['es', 'en', 'pt'].includes(base)) { language = base; break; }
  }
  location.replace('/' + language + (pathname === '/' ? '' : pathname) + location.search + location.hash);
})();
