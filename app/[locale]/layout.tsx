
// Layout for locale-specific pages

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
