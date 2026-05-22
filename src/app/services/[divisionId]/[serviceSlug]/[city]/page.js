import { notFound } from 'next/navigation';
import { divisions, getServiceBySlug, getDivisionById } from '@/data/services';
import { cities, getCityById } from '@/data/cities';
import ServiceDetailClient from '../ServiceDetailClient';

export async function generateStaticParams() {
  const params = [];
  divisions.forEach(div => {
    div.services.forEach(svc => {
      cities.forEach(city => {
        params.push({ divisionId: div.id, serviceSlug: svc.slug, city: city.id });
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { divisionId, serviceSlug, city } = await params;
  const result = getServiceBySlug(divisionId, serviceSlug);
  const cityData = getCityById(city);

  if (!result || !cityData) return {};
  
  return {
    title: `${result.title} in ${cityData.name} | EMEA Global Services`,
    description: `Leading ${result.title} provider in ${cityData.name}. ${result.intro}`,
    keywords: `${result.seoKeywords}, ${result.title.toLowerCase()} ${cityData.name}, engineering in ${cityData.name}`,
    alternates: {
      canonical: `/services/${divisionId}/${serviceSlug}/${city}`,
    },
  };
}

export default async function ServiceCityPage({ params }) {
  const { divisionId, serviceSlug, city } = await params;
  const result = getServiceBySlug(divisionId, serviceSlug);
  const cityData = getCityById(city);

  if (!result || !cityData) notFound();
  
  const division = getDivisionById(divisionId);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: result.title,
    provider: {
      '@type': 'Organization',
      name: 'EMEA Global Services',
      '@id': 'https://emeaglobalsolutions.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: cityData.name,
    },
    description: result.intro,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailClient service={result} division={division} cityName={cityData.name} />
    </>
  );
}
