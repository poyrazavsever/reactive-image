"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { getDocs } from "./sidebar";

type DocsLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function DocsLayout({ children, params }: DocsLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const docs = getDocs(params.locale);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container max-w-7xl mx-auto px-6 sm:px-0">
        <div className="flex">
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
            fixed top-0 left-0 bottom-0 w-72 sm:w-80 bg-white border-r border-neutral-200 overflow-y-auto z-40 shadow-lg pt-20
            transform transition-transform duration-300 ease-in-out
            lg:relative lg:top-0 lg:pt-0 lg:translate-x-0 lg:z-0 lg:shadow-none
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
          >
            <div className="p-6">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between mb-6 lg:justify-start">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Documentation
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden p-1 rounded hover:bg-neutral-100 transition-colors"
                >
                  <Icon icon="lucide:x" className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {docs.map((doc: any) => (
                  <a
                    key={`${doc.locale}-${doc.slug}`}
                    href={`/${doc.locale}/docs/${doc.slug}`}
                    className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {doc.title}
                  </a>
                ))}

                {/* Fallback links if no docs */}
                {docs.length === 0 && (
                  <>
                    <a
                      href={`/${params.locale}/docs/${
                        params.locale === "tr" ? "baslangic" : "getting-started"
                      }`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                      {params.locale === "tr" ? "Başlangıç" : "Getting Started"}
                    </a>
                    <a
                      href={`/${params.locale}/docs/${
                        params.locale === "tr" ? "kurulum" : "installation"
                      }`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                      {params.locale === "tr" ? "Kurulum" : "Installation"}
                    </a>
                    <a
                      href={`/${params.locale}/docs/${
                        params.locale === "tr"
                          ? "click-genisleme"
                          : "click-expand"
                      }`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                      {params.locale === "tr"
                        ? "Tıkla Genişlet"
                        : "Click Expand"}
                    </a>
                    <a
                      href={`/${params.locale}/docs/${
                        params.locale === "tr"
                          ? "hover-degistir"
                          : "hover-switch"
                      }`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                      {params.locale === "tr"
                        ? "Hover Değiştir"
                        : "Hover Switch"}
                    </a>
                    <a
                      href={`/${params.locale}/docs/${
                        params.locale === "tr" ? "3d-egim" : "tilt-on-hover"
                      }`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                      {params.locale === "tr" ? "3D Eğim" : "3D Tilt"}
                    </a>
                    <a
                      href={`/${params.locale}/docs/${
                        params.locale === "tr" ? "zoom-hover" : "zoom-on-hover"
                      }`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                    >
                      {params.locale === "tr" ? "Zoom Hover" : "Zoom on Hover"}
                    </a>
                  </>
                )}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-0">
            {/* Mobile Header */}
            <div className="lg:hidden sticky top-0 bg-white border-b border-neutral-200 p-4 z-20">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                <Icon icon="lucide:menu" className="w-5 h-5" />
                <span className="text-sm font-medium">Menu</span>
              </button>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
