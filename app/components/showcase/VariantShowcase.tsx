"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";

type VariantShowcaseProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

const variants = [
  {
    id: "click-expand",
    title: "Click Expand",
    description:
      "Click to expand images in a beautiful modal overlay with customizable animations and backdrops.",
    component: (
      <div className="relative">
        <ClickExpand
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
          alt="Mountain landscape for Click Expand demo"
          className="w-full h-64 object-cover cursor-pointer rounded-xl"
          modalAnimation="scaleFade"
          backdrop="blur"
          caption="Beautiful mountain landscape - Click to expand"
        />
      </div>
    ),
    features: [
      "Modal overlay with backdrop",
      "Multiple animation types",
      "Custom captions",
      "Keyboard navigation",
      "Mobile optimized",
    ],
    codeExample: `<ClickExpand
  src="image.jpg"
  alt="Description"
  modalAnimation="scaleFade"
  backdrop="blur"
  caption="Image caption"
/>`,
  },
  {
    id: "hover-switch",
    title: "Hover Switch",
    description:
      "Smoothly transition between two images on hover with customizable timing and easing functions.",
    component: (
      <HoverSwitch
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center"
        hoverSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
        alt="Forest to Mountain transition"
        className="w-full h-64 object-cover rounded-xl"
        animation="crossfade"
        timing={{ duration: 300, easing: "ease-in-out" }}
        preloadHover={true}
      />
    ),
    features: [
      "Smooth image transitions",
      "Preload hover images",
      "Custom timing controls",
      "Multiple animation types",
      "Lightweight implementation",
    ],
    codeExample: `<HoverSwitch
  src="image1.jpg"
  hoverSrc="image2.jpg"
  alt="Description"
  animation="crossfade"
  timing={{ duration: 300 }}
/>`,
  },
  {
    id: "tilt-on-hover",
    title: "3D Tilt",
    description:
      "Add realistic 3D tilt effects with mouse interaction, including optional glare and shadow effects.",
    component: (
      <div className="p-6">
        <TiltOnHover
          src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop&crop=center"
          alt="Ocean landscape for 3D Tilt demo"
          className="w-full h-52 object-cover rounded-xl"
          animation="glare"
          tiltMax={15}
          glare={{ enabled: true, maxOpacity: 0.3, color: "#ffffff" }}
          timing={{ duration: 300, easing: "ease-out" }}
          scale={1.05}
        />
      </div>
    ),
    features: [
      "3D perspective effects",
      "Mouse tracking",
      "Glare and shadow options",
      "Customizable tilt angles",
      "Smooth animations",
    ],
    codeExample: `<TiltOnHover
  src="image.jpg"
  alt="Description"
  tiltMax={15}
  glare={{ enabled: true }}
  scale={1.05}
/>`,
  },
  {
    id: "zoom-on-hover",
    title: "Zoom on Hover",
    description:
      "Zoom and scale images with smooth animations and customizable zoom levels and origin points.",
    component: (
      <ZoomOnHover
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&crop=center"
        alt="Landscape for Zoom demo"
        className="w-full h-64 object-cover rounded-xl"
        animation="scale"
        zoomScale={1.25}
        origin="center"
        timing={{ duration: 400, easing: "ease-in-out" }}
      />
    ),
    features: [
      "Smooth zoom animations",
      "Custom zoom levels",
      "Origin point control",
      "Multiple animation types",
      "Performance optimized",
    ],
    codeExample: `<ZoomOnHover
  src="image.jpg"
  alt="Description"
  zoomScale={1.25}
  origin="center"
  timing={{ duration: 400 }}
/>`,
  },
];

export function VariantShowcase({ locale, dict }: VariantShowcaseProps) {
  const [activeVariant, setActiveVariant] = useState(0);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Component Variants
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore all four reactive image components with live examples and
            detailed feature lists.
          </p>
        </div>

        {/* Variant Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {variants.map((variant, index) => (
            <button
              key={variant.id}
              onClick={() => setActiveVariant(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeVariant === index
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {variant.title}
            </button>
          ))}
        </div>

        {/* Active Variant Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Component Demo */}
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden">
                {variants[activeVariant].component}
              </div>
            </div>
          </div>

          {/* Description and Code */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                {variants[activeVariant].title}
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                {variants[activeVariant].description}
              </p>
            </div>

            {/* Code Example */}
            <div className="bg-neutral-900 rounded-xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-neutral-400">TypeScript</span>
              </div>
              <pre className="text-sm text-white overflow-x-auto">
                <code>{variants[activeVariant].codeExample}</code>
              </pre>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={`/${locale}/docs/${variants[activeVariant].id}`}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Icon icon="lucide:book-open" className="w-4 h-4" />
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
