import { getDictionary } from "@/app/lib/i18n";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { FeaturesSection } from "@/app/components/sections/FeaturesSection";
import { ShowcaseSection } from "@/app/components/sections/ShowcaseSection";
import { CTASection } from "@/app/components/sections/CTASection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as any);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection locale={locale} dict={dict} />

      {/* Features Section */}
      <FeaturesSection locale={locale} dict={dict} />

      {/* Showcase Section */}
      <ShowcaseSection locale={locale} dict={dict} />

      {/* CTA Section */}
      <CTASection locale={locale} dict={dict} />
    </main>
  );
}
