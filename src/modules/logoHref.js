function updateLogoHref(pathname) {
  const brand = document.querySelector('a.navbar__brand');
  if (!brand) return;
  brand.href = pathname.startsWith('/en') ? '/en/' : '/es/';
}

export function onRouteDidUpdate({ location }) {
  updateLogoHref(location.pathname);
}

export function onRouteUpdate({ location }) {
  updateLogoHref(location.pathname);
}
