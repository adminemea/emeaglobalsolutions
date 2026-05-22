import { notFound } from 'next/navigation';
import { divisions, getServiceBySlug, getDivisionById } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';

export async function generateStaticParams() {
  const params = [];
  divisions.forEach(div => {
    div.services.forEach(svc => {
      params.push({ divisionId: div.id, serviceSlug: svc.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { divisionId, serviceSlug } = await params;
  const result = getServiceBySlug(divisionId, serviceSlug);
  if (!result) return {};
  return {
    title: `${result.title} | EMEA Global Services`,
    description: result.intro,
    keywords: result.seoKeywords,
    alternates: {
      canonical: `/services/${divisionId}/${serviceSlug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { divisionId, serviceSlug } = await params;
  const result = getServiceBySlug(divisionId, serviceSlug);
  if (!result) notFound();
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
      '@type': 'Country',
      name: 'Worldwide',
    },
    description: result.intro,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailClient service={result} division={division} />
    </>
  );
}
