import { notFound } from 'next/navigation';
import { divisions } from '@/data/services';
import DivisionPageClient from './DivisionPageClient';

export async function generateStaticParams() {
  return divisions.map(d => ({ divisionId: d.id }));
}

export async function generateMetadata({ params }) {
  const { divisionId } = await params;
  const division = divisions.find(d => d.id === divisionId);
  if (!division) return {};
  return {
    title: `${division.title} Services`,
    description: division.intro,
    alternates: {
      canonical: `/services/${divisionId}`,
    },
  };
}

export default async function DivisionPage({ params }) {
  const { divisionId } = await params;
  const division = divisions.find(d => d.id === divisionId);
  if (!division) notFound();
  return <DivisionPageClient division={division} />;
}
