import { divisions } from '@/data/services';
import { cities } from '@/data/cities';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://www.emeaglobalsolutions.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/careers',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic division routes
  const divisionRoutes = divisions.map((div) => ({
    url: `${baseUrl}/services/${div.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Dynamic service routes and City routes
  const serviceRoutes = [];
  const cityRoutes = [];

  divisions.forEach((div) => {
    div.services.forEach((svc) => {
      serviceRoutes.push({
        url: `${baseUrl}/services/${div.id}/${svc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      cities.forEach((city) => {
        cityRoutes.push({
          url: `${baseUrl}/services/${div.id}/${svc.slug}/${city.id}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    });
  });

  return [...staticRoutes, ...divisionRoutes, ...serviceRoutes, ...cityRoutes];
}
