import { docs } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx/MdxProvider";
import { SimpleMDXContent } from "@/app/components/mdx/SimpleMdxContent";

type Props = { params: Promise<{ locale: string; slug: string[] }> };

export function generateStaticParams() {
  console.log(
    "Docs data:",
    docs.map((d) => ({ locale: d.locale, slug: d.slug }))
  );

  return docs.map((d: any) => {
    const slugArray = typeof d.slug === "string" ? d.slug.split("/") : [];
    console.log(`Mapping doc: ${d.locale}/${d.slug} -> slug array:`, slugArray);

    return {
      locale: d.locale,
      slug: slugArray,
    };
  });
}

export default async function DocPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!slug || !Array.isArray(slug)) {
    console.log("Invalid slug:", slug);
    return notFound();
  }

  const slugPath = slug.join("/");
  console.log(`Looking for doc: locale=${locale}, slugPath=${slugPath}`);
  console.log(
    "Available docs:",
    docs.map((d) => ({ locale: d.locale, slug: d.slug }))
  );

  const doc = docs.find((d: any) => d.locale === locale && d.slug === slugPath);
  if (!doc) return notFound();

  return (
    <main className="mx-auto px-6 py-10 max-w-4xl">
      {/* Try MDX rendering first, fallback to simple content */}
      <div className="mb-4 text-sm text-gray-500">
        Rendering: {doc.title} ({locale})
      </div>

      {/* For now, use simple content while MDX is being fixed */}
      <SimpleMDXContent title={doc.title} description={doc.description} />

      {/* Debug: Show raw MDX code in development */}
      {process.env.NODE_ENV === "development" && (
        <details className="mt-8">
          <summary className="cursor-pointer text-blue-600">
            Debug: Show MDX Code
          </summary>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto mt-2 max-h-40">
            {doc.body.substring(0, 500)}...
          </pre>
        </details>
      )}
    </main>
  );
}
