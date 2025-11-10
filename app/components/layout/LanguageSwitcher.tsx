"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

type LanguageSwitcherProps = {
  locale: string;
};

const languages = {
  en: { name: "English", flag: "🇺🇸", code: "en" },
  tr: { name: "Türkçe", flag: "🇹🇷", code: "tr" },
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Remove current locale from pathname
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages[locale as keyof typeof languages];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center gap-2 px-4 py-1 text-sm font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 focus:ring-orange-500"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
        <Icon
          icon="lucide:chevron-down"
          width="16"
          height="16"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
          {Object.entries(languages).map(([code, lang]) => (
            <Link
              key={code}
              href={`/${code}${pathWithoutLocale}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                locale === code
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
