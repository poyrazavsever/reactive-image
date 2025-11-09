import { docs } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx/MdxProvider";

type Props = { params: { locale: string; slug: string[] } };

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

export default function DocPage({ params }: Props) {
  const { locale, slug } = params;

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
    <main className="prose prose-neutral dark:prose-invert mx-auto px-6 py-10">
      <h1>{doc.title}</h1>
      {doc.description && <p className="lead">{doc.description}</p>}
      <MDXContent code={doc.body} />
    </main>
  );
}
