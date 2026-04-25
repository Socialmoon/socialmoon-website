import { redirect } from 'next/navigation';

export default async function ServiceSlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/solutions/${slug}`);
}
