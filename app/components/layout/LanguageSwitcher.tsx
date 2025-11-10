"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

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
        className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white border border-gray-300 rounded-md shadow-lg py-1 min-w-[120px] z-50">
          {Object.entries(languages).map(([code, lang]) => (
            <Link
              key={code}
              href={`/${code}${pathWithoutLocale}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
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
