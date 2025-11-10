"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { getDictionary } from "@/app/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Button from "@/app/components/shared/Button";

type NavbarProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

const Navbar = ({ locale, dict }: NavbarProps) => {
  return (
    <nav className="container max-w-6xl mx-auto px-6 py-6 sm:px-0 flex items-center justify-between">
      {/* Left Side */}
      <Link
        href={`/${locale}`}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <img
          src="/logo/logo.png"
          alt="Logo for navigation bar"
          className="w-8 h-8"
          onError={(e) => {
            // Fallback if logo doesn't load
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="text-lg font-semibold">Reactive Image</span>
      </Link>

      {/* Right Side */}
      <div className="flex items-center justify-center gap-4">
        <Link
          href={`/${locale}/docs/getting-started`}
          className="hover:text-orange-500 hover:underline"
        >
          {dict.navbar.docs}
        </Link>
        <Link
          href={`/${locale}/blog`}
          className="hover:text-orange-500 hover:underline"
        >
          {dict.navbar.blog}
        </Link>
        <Link
          href={`/${locale}/showcase`}
          className="hover:text-orange-500 hover:underline"
        >
          {dict.navbar.showcase}
        </Link>
        <Button
          href="https://buymeacoffee.com/poyrazavsever"
          external
          variant="outline"
          size="sm"
          icon="cib:buy-me-a-coffee"
        >
          {dict.navbar.buyMeCoffee}
        </Button>
        <Button
          href="https://github.com/poyrazavsever/reactive-image"
          external
          variant="primary"
          size="sm"
          icon="akar-icons:github-fill"
        >
          {dict.navbar.starGithub}
        </Button>

        {/* Language Switcher */}
        <LanguageSwitcher locale={locale} />
      </div>
    </nav>
  );
};

export default Navbar;
