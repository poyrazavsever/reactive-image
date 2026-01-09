"use client";

import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";

type FeaturesSectionProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

export function FeaturesSection({ locale, dict }: FeaturesSectionProps) {
  const features = [
    {
      icon: "lucide:mouse-pointer-click",
      title: dict.features.clickExpand.title,
      description: dict.features.clickExpand.description,
    },
    {
      icon: "lucide:move",
      title: dict.features.hoverSwitch.title,
      description: dict.features.hoverSwitch.description,
    },
    {
      icon: "lucide:rotate-3d",
      title: dict.features.tiltOnHover.title,
      description: dict.features.tiltOnHover.description,
    },
    {
      icon: "lucide:zoom-in",
      title: dict.features.zoomOnHover.title,
      description: dict.features.zoomOnHover.description,
    },
    {
      icon: "lucide:focus",
      title: dict.features.depthFocus.title,
      description: dict.features.depthFocus.description,
    },
    {
      icon: "lucide:layers",
      title: dict.features.splitLayers.title,
      description: dict.features.splitLayers.description,
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6 sm:px-0 bg-neutral-50">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {dict.features.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {dict.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-orange-300 transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                <Icon icon={feature.icon} width="32" height="32" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
