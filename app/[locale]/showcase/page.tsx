import { getDictionary } from "../../lib/i18n";
import { ShowcaseHero } from "../../components/showcase/ShowcaseHero";


type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ShowcasePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as any);

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <ShowcaseHero locale={locale} dict={dict} />
    </main>
  );
}
