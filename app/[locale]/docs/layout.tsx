import { DocsLayout } from "./DocsLayout";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <DocsLayout params={{ locale }}>{children}</DocsLayout>;
}
