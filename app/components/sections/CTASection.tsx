"use client";

import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";
import Button from "@/app/components/shared/Button";

type CTASectionProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

export function CTASection({ locale, dict }: CTASectionProps) {
  return (
    <section className="py-20 px-6 sm:px-0 bg-orange-50">
      <div className="container max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            {dict.cta.title}
          </h2>
          <p className="text-xl text-neutral-600">{dict.cta.subtitle}</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Buy Me Coffee Card */}
          <div className="bg-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-colors">
            <div className="text-orange-500 mb-4">
              <Icon
                icon="cib:buy-me-a-coffee"
                width="48"
                height="48"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              {dict.cta.coffee.title}
            </h3>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
              {dict.cta.coffee.description}
            </p>
            <Button
              href="https://buymeacoffee.com/poyrazavsever"
              external
              variant="primary"
              size="md"
              icon="cib:buy-me-a-coffee"
              className="w-full justify-center"
            >
              {dict.cta.coffee.button}
            </Button>
          </div>

          {/* Star GitHub Card */}
          <div className="bg-white p-8 rounded-xl border-2 border-neutral-200 hover:border-neutral-300 transition-colors">
            <div className="text-neutral-700 mb-4">
              <Icon
                icon="akar-icons:github-fill"
                width="48"
                height="48"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              {dict.cta.github.title}
            </h3>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
              {dict.cta.github.description}
            </p>
            <Button
              href="https://github.com/poyrazavsever/reactive-image"
              external
              variant="secondary"
              size="md"
              icon="akar-icons:github-fill"
              className="w-full justify-center"
            >
              {dict.cta.github.button}
            </Button>
          </div>

          {/* Report Issue Card */}
          <div className="bg-white p-8 rounded-xl border-2 border-red-200 hover:border-red-300 transition-colors">
            <div className="text-red-500 mb-4">
              <Icon
                icon="lucide:bug"
                width="48"
                height="48"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              {dict.cta.reportIssue}
            </h3>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
              {dict.cta.reportIssueDescription}
            </p>
            <Button
              href="https://github.com/poyrazavsever/reactive-image/issues/new"
              external
              variant="primary"
              size="md"
              icon="lucide:bug"
              className="w-full justify-center bg-red-500! hover:bg-red-600!"
            >
              {dict.cta.reportIssue}
            </Button>
          </div>

          {/* Share Project Card */}
          <div className="bg-white p-8 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <div className="text-blue-500 mb-4">
              <Icon
                icon="lucide:share-2"
                width="48"
                height="48"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              {dict.cta.share}
            </h3>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
              {dict.cta.shareDescription}
            </p>
            <Button
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Check out Reactive Image - Beautiful React image components! 🎨✨ ${
                  locale === "tr"
                    ? "React için güzel görsel bileşenleri"
                    : "Beautiful image components for React"
                }`
              )}&url=${encodeURIComponent(
                "https://github.com/poyrazavsever/reactive-image"
              )}`}
              external
              variant="primary"
              size="md"
              icon="lucide:share-2"
              className="w-full justify-center border !border-blue-500  !bg-blue-500 hover:!bg-blue-600"
            >
              {dict.cta.share}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
