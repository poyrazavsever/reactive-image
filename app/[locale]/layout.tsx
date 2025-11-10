// Layout for locale-specific pages

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { getDictionary } from "../lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as any);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar locale={locale} dict={dict} />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
