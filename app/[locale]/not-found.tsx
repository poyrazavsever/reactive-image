"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/tr") ? "tr" : "en";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">
        {locale === "tr"
          ? "Aradığınız sayfa bulunamadı."
          : "The page you are looking for does not exist."}
      </p>
      <Link href={`/${locale}`} className="mt-4 text-blue-600 hover:underline">
        {locale === "tr" ? "Ana sayfaya dön" : "Go back home"}
      </Link>
    </div>
  );
}
