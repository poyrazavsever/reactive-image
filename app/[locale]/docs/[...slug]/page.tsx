import { docs } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx/MdxProvider";
import { SimpleMDXContent } from "@/app/components/mdx/SimpleMdxContent";

type Props = { params: Promise<{ locale: string; slug: string[] }> };

export function generateStaticParams() {
  return docs.map((d: any) => {
    const slugArray = typeof d.slug === "string" ? d.slug.split("/") : [];

    return {
      locale: d.locale,
      slug: slugArray,
    };
  });
}

export default async function DocPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!slug || !Array.isArray(slug)) {
    return notFound();
  }

  const slugPath = slug.join("/");
  const doc = docs.find((d: any) => d.locale === locale && d.slug === slugPath);

  if (!doc) return notFound();

  return (
    <article className="w-full min-w-0 py-6 sm:py-8 max-w-none overflow-hidden">
      {/* Article Header */}
      <header className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-neutral-200">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 text-wrap">
          {doc.title}
        </h1>
        {doc.description && (
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl text-wrap">
            {doc.description}
          </p>
        )}
      </header>

      {/* Article Content */}
      <div className="customMd">
        {/* Try MDX rendering first, fallback to simple content */}
        <MDXContent code={doc.body} />
      </div>
    </article>
  );
}
