"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";
import Button from "@/app/components/shared/Button";

type ExamplesSectionProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

export function ExamplesSection({ locale, dict }: ExamplesSectionProps) {
  return (
    <section className="py-20 px-6 sm:px-0">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            {dict.examples.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {dict.examples.subtitle}
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Example placeholders - these would be actual interactive demos */}
          <div className="bg-linear-to-br from-purple-100 to-pink-100 p-8 rounded-xl">
            <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center">
              <Icon
                icon="lucide:mouse-pointer-click"
                width="48"
                height="48"
                className="text-purple-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Click Expand</h3>
            <p className="text-neutral-600 text-sm">
              Interactive expansion animation
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-100 to-cyan-100 p-8 rounded-xl">
            <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center">
              <Icon
                icon="lucide:move"
                width="48"
                height="48"
                className="text-blue-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Hover Switch</h3>
            <p className="text-neutral-600 text-sm">Dynamic image switching</p>
          </div>

          <div className="bg-linear-to-br from-green-100 to-emerald-100 p-8 rounded-xl">
            <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center">
              <Icon
                icon="lucide:rotate-3d"
                width="48"
                height="48"
                className="text-green-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">3D Tilt</h3>
            <p className="text-neutral-600 text-sm">Immersive tilt effects</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            href={`/${locale}/showcase`}
            variant="primary"
            size="lg"
            icon="lucide:arrow-right"
          >
            {dict.examples.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
