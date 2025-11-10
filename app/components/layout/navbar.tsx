"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { getDictionary } from "@/app/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Button from "@/app/components/shared/Button";

type NavbarProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

const Navbar = ({ locale, dict }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50">
      <nav className="container max-w-6xl mx-auto px-6 sm:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo/logo.png"
            alt="Logo for navigation bar"
            className="w-8 h-8"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-lg font-semibold">Reactive Image</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href={`/${locale}/docs/getting-started`}
            className="text-neutral-700 hover:text-orange-500 transition-colors"
          >
            {dict.navbar.docs}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-neutral-700 hover:text-orange-500 transition-colors"
          >
            {dict.navbar.blog}
          </Link>
          <Link
            href={`/${locale}/showcase`}
            className="text-neutral-700 hover:text-orange-500 transition-colors"
          >
            {dict.navbar.showcase}
          </Link>

          <div className="flex items-center gap-2">
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
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Icon
            icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"}
            className="w-6 h-6 text-neutral-700"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="border-t border-neutral-200/50 bg-white/95 backdrop-blur-lg">
          <div className="container max-w-6xl mx-auto px-6 py-6 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <Link
                href={`/${locale}/docs/getting-started`}
                className="block text-neutral-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.navbar.docs}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="block text-neutral-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.navbar.blog}
              </Link>
              <Link
                href={`/${locale}/showcase`}
                className="block text-neutral-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.navbar.showcase}
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              <Button
                href="https://buymeacoffee.com/poyrazavsever"
                external
                variant="outline"
                size="md"
                icon="cib:buy-me-a-coffee"
                className="w-full justify-center"
              >
                {dict.navbar.buyMeCoffee}
              </Button>
              <Button
                href="https://github.com/poyrazavsever/reactive-image"
                external
                variant="primary"
                size="md"
                icon="akar-icons:github-fill"
                className="w-full justify-center"
              >
                {dict.navbar.starGithub}
              </Button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-neutral-200">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
