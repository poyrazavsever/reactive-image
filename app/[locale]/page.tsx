import Link from "next/link";

type Props = {
  params: { locale: string };
};

export default function LocalePage({ params }: Props) {
  const { locale } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {locale === "tr" ? "Reactive Image" : "Reactive Image"}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {locale === "tr"
          ? "React uygulamalarınız için güçlü, interaktif ve özelleştirilebilir görsel bileşenleri koleksiyonu."
          : "A powerful, interactive, and customizable visual component collection for React applications."}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={`/${locale}/docs/getting-started`}
          className="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">
            {locale === "tr" ? "Dokümantasyon" : "Documentation"}
          </h2>
          <p className="text-gray-600">
            {locale === "tr"
              ? "Başlangıç kılavuzu ve API referansı"
              : "Getting started guide and API reference"}
          </p>
        </Link>

        <Link
          href={`/${locale}/examples`}
          className="block p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">
            {locale === "tr" ? "Örnekler" : "Examples"}
          </h2>
          <p className="text-gray-600">
            {locale === "tr"
              ? "Canlı örnekler ve demo uygulamalar"
              : "Live examples and demo applications"}
          </p>
        </Link>
      </div>
    </div>
  );
}
