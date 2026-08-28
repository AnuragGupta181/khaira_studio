export default function sitemap() {
  const baseUrl = 'https://khairadigitalsolutions.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/advertise',
    '/marketing',
    '/consultancy',
    '/business/pricing',
    '/help',
    '/report-abuse',
    '/accessibility',
    '/legal/privacy-policy',
    '/legal/terms-of-service',
    '/legal/data-sharing',
    '/legal/pii-spi-policy',
    '/legal/cookie-policy',
    '/legal/refund-policy',
    '/legal/grievance',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
