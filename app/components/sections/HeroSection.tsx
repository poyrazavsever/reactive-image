import Link from "next/link";
import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";
import Button from "@/app/components/shared/Button";

type HeroSectionProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

export function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section className="py-48 px-6 text-center min-h-[85vh] relative overflow-hidden">
      {/* Floating Images Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-20 left-10 opacity-20 animate-float-slow">
          <Icon icon="lucide:image" className="text-orange-300 w-12 h-12" />
        </div>
        <div className="absolute top-32 left-32 opacity-15 animate-float-delayed">
          <Icon icon="lucide:camera" className="text-orange-500 w-8 h-8" />
        </div>

        {/* Top Right */}
        <div className="absolute top-16 right-16 opacity-25 animate-float-reverse">
          <Icon icon="lucide:images" className="text-orange-400 w-10 h-10" />
        </div>
        <div className="absolute top-40 right-32 opacity-20 animate-float-slow">
          <Icon
            icon="lucide:gallery-horizontal"
            className="text-orange-800 w-14 h-14"
          />
        </div>

        {/* Middle Left */}
        <div className="absolute top-1/2 left-8 opacity-15 animate-float-delayed">
          <Icon
            icon="lucide:picture-in-picture-2"
            className="text-orange-300 w-6 h-6"
          />
        </div>
        <div className="absolute top-1/3 left-20 opacity-20 animate-float-reverse">
          <Icon icon="lucide:panorama" className="text-orange-500 w-16 h-16" />
        </div>

        {/* Middle Right */}
        <div className="absolute top-1/2 right-12 opacity-25 animate-float-slow">
          <Icon icon="lucide:scan" className="text-orange-300 w-8 h-8" />
        </div>
        <div className="absolute top-2/3 right-24 opacity-15 animate-float-delayed">
          <Icon icon="lucide:focus" className="text-orange-300 w-12 h-12" />
        </div>

        {/* Bottom */}
        <div className="absolute bottom-32 left-1/4 opacity-20 animate-float-reverse">
          <Icon icon="lucide:frame" className="text-orange-500 w-10 h-10" />
        </div>
        <div className="absolute bottom-24 right-1/3 opacity-15 animate-float-slow">
          <Icon icon="lucide:crop" className="text-orange-200 w-14 h-14" />
        </div>

        {/* Additional scattered icons */}
        <div className="absolute top-1/4 left-1/3 opacity-10 animate-float-delayed">
          <Icon icon="lucide:aperture" className="text-orange-800 w-6 h-6" />
        </div>
        <div className="absolute top-3/4 right-1/4 opacity-20 animate-float-reverse">
          <Icon icon="lucide:zoom-in" className="text-orange-500 w-8 h-8" />
        </div>
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm mb-8">
          <Icon icon="lucide:sparkles" width="16" height="16" />
          <span>{dict.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
          <span className="block">{dict.hero.title.line1}</span>
          <span className="text-orange-500">{dict.hero.title.line2}</span>
        </h1>

        {/* Description */}
        <p className="text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {dict.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            href={`/${locale}/docs/getting-started`}
            variant="primary"
            size="lg"
            icon="lucide:book-open"
          >
            {dict.hero.buttons.getStarted}
          </Button>

          <Button
            href={`/${locale}/showcase`}
            variant="outline"
            size="lg"
            icon="lucide:eye"
          >
            {dict.hero.buttons.viewExamples}
          </Button>
        </div>
      </div>
    </section>
  );
}
