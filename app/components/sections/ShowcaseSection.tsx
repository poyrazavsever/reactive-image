"use client";

import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";
import Button from "@/app/components/shared/Button";
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";
import { DepthFocus } from "../../../packages/reactive-image/src/variants/DepthFocus";
import { SplitLayers } from "../../../packages/reactive-image/src/variants/SplitLayers";

type ShowcaseSectionProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

export function ShowcaseSection({ locale, dict }: ShowcaseSectionProps) {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 sm:px-0 bg-white relative overflow-hidden">
      {/* Progressive blur gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/70 to-white pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white via-white/95 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {dict.showcase.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {dict.showcase.subtitle}
          </p>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {/* Click Expand Demo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <ClickExpand
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
                alt="Mountain landscape for Click Expand demo"
                className="w-full h-80 object-cover cursor-pointer"
                modalAnimation="scaleFade"
                backdrop="dim"
                caption="Beautiful mountain landscape - Click to expand"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Click Expand
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.showcase.clickExpand}
              </p>
            </div>
          </div>

          {/* Hover Switch Demo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <HoverSwitch
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center"
                hoverSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
                alt="Forest to Mountain transition"
                className="w-full h-80 object-cover"
                animation="crossfade"
                timing={{ duration: 300, easing: "ease-in-out" }}
                preloadHover={true}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Hover Switch
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.showcase.hoverSwitch}
              </p>
            </div>
          </div>

          {/* Tilt on Hover Demo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <TiltOnHover
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop&crop=center"
                alt="Ocean landscape for 3D Tilt demo"
                className="w-full h-80 object-cover"
                animation="glare"
                tiltMax={15}
                glare={{ enabled: true, maxOpacity: 0.3, color: "#ffffff" }}
                timing={{ duration: 300, easing: "ease-out" }}
                scale={1.05}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                3D Tilt
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.showcase.tiltOnHover}
              </p>
            </div>
          </div>

          {/* Zoom on Hover Demo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <ZoomOnHover
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
                alt="Mountain landscape for Zoom demo"
                className="w-full h-80 object-cover"
                animation="scale"
                zoomScale={1.25}
                origin="center"
                timing={{ duration: 400, easing: "ease-in-out" }}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Zoom on Hover
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.showcase.zoomOnHover}
              </p>
            </div>
          </div>

          {/* Depth Focus Demo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <DepthFocus
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=600&fit=crop&crop=center"
                alt="Portrait focus shift demo"
                className="w-full h-80 object-cover"
                animation="spotlight"
                focusMode="cursor"
                focusSize={260}
                tiltAmount={10}
                glowColor="rgba(255, 196, 143, 0.7)"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Depth Focus
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.showcase.depthFocus}
              </p>
            </div>
          </div>

          {/* Split Layers Demo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <SplitLayers
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&crop=center"
                alt="Layered parallax city"
                className="w-full h-80 object-cover"
                layers={[
                  {
                    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&crop=center&sat=-20",
                    depth: 2.1,
                    opacity: 0.85,
                    blendMode: "screen",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
                    depth: 3,
                    opacity: 0.5,
                    blendMode: "overlay",
                  },
                ]}
                animation="peel"
                peelDirection="right"
                parallaxIntensity={16}
                baseScale={1.03}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Split Layers
              </h3>
              <p className="text-sm text-neutral-600">
                {dict.showcase.splitLayers}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
