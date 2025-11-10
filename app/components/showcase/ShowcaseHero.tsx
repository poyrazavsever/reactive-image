"use client";

import { getDictionary } from "@/app/lib/i18n";
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";

type ShowcaseHeroProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

export function ShowcaseHero({ locale, dict }: ShowcaseHeroProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6 sm:px-0">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* ClickExpand Variants */}
          {/* Basic ClickExpand */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">Click Expand</h3>
            </div>
            <ClickExpand
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
              alt="Basic click expand"
              className="w-full h-64 object-cover"
              modalAnimation="scaleFade"
              backdrop="dim"
            />
          </div>

          {/* ClickExpand with Blur Backdrop */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                Click Expand - Blur
              </h3>
            </div>
            <ClickExpand
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
              alt="Click expand with blur"
              className="w-full h-64 object-cover"
              modalAnimation="scaleFade"
              backdrop="blur"
              caption="Beautiful forest landscape"
            />
          </div>

          {/* ClickExpand with SlideUp */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                Click Expand - Slide
              </h3>
            </div>
            <ClickExpand
              src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop&crop=center"
              alt="Click expand slide animation"
              className="w-full h-64 object-cover"
              modalAnimation="slideUp"
              backdrop="dark"
            />
          </div>

          {/* HoverSwitch Variants */}
          {/* Crossfade HoverSwitch */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                Hover Switch - Crossfade
              </h3>
            </div>
            <HoverSwitch
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center"
              hoverSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
              alt="Crossfade hover switch"
              className="w-full h-64 object-cover"
              animation="crossfade"
              timing={{ duration: 300, easing: "ease-in-out" }}
            />
          </div>

          {/* Slide HoverSwitch */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                Hover Switch - Slide
              </h3>
            </div>
            <HoverSwitch
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
              hoverSrc="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop&crop=center"
              alt="Slide hover switch"
              className="w-full h-64 object-cover"
              animation="slide"
              timing={{ duration: 400, easing: "ease-out" }}
            />
          </div>

          {/* Fast HoverSwitch */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                Hover Switch - Fast
              </h3>
            </div>
            <HoverSwitch
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center"
              hoverSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
              alt="Fast hover switch"
              className="w-full h-64 object-cover"
              animation="crossfade"
              timing={{ duration: 150, easing: "ease-in-out" }}
            />
          </div>

          {/* TiltOnHover Variants */}
          {/* Basic 3D Tilt */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                3D Tilt - Basic
              </h3>
            </div>
            <div className="p-4">
              <TiltOnHover
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                alt="Basic 3D tilt"
                className="w-full h-56 object-cover"
                tiltMax={15}
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>
          </div>

          {/* 3D Tilt with Glare */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                3D Tilt - Glare
              </h3>
            </div>
            <div className="p-4">
              <TiltOnHover
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop&crop=center"
                alt="3D tilt with glare"
                className="w-full h-56 object-cover"
                animation="glare"
                tiltMax={20}
                glare={{ enabled: true, maxOpacity: 0.3, color: "#ffffff" }}
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>
          </div>

          {/* 3D Tilt with Scale */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                3D Tilt - Scale
              </h3>
            </div>
            <div className="p-4">
              <TiltOnHover
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
                alt="3D tilt with scale"
                className="w-full h-56 object-cover"
                tiltMax={18}
                scale={1.1}
                timing={{ duration: 350, easing: "ease-out" }}
              />
            </div>
          </div>

          {/* ZoomOnHover Variants */}
          {/* Basic Zoom */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">Zoom - Basic</h3>
            </div>
            <ZoomOnHover
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center"
              alt="Basic zoom"
              className="w-full h-64 object-cover"
              zoomScale={1.2}
              timing={{ duration: 300, easing: "ease-in-out" }}
            />
          </div>

          {/* Strong Zoom */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">Zoom - Strong</h3>
            </div>
            <ZoomOnHover
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
              alt="Strong zoom"
              className="w-full h-64 object-cover"
              zoomScale={1.5}
              timing={{ duration: 500, easing: "ease-out" }}
            />
          </div>

          {/* Fast Zoom */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">Zoom - Fast</h3>
            </div>
            <ZoomOnHover
              src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop&crop=center"
              alt="Fast zoom"
              className="w-full h-64 object-cover"
              zoomScale={1.25}
              timing={{ duration: 200, easing: "ease-in-out" }}
            />
          </div>

          {/* Zoom with Different Origin */}
          <div className="relative group">
            <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/50 to-transparent p-3 z-10">
              <h3 className="text-white font-medium text-sm">
                Zoom - Top Left
              </h3>
            </div>
            <ZoomOnHover
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
              alt="Zoom from top left"
              className="w-full h-64 object-cover"
              zoomScale={1.3}
              origin="top-left"
              timing={{ duration: 400, easing: "ease-in-out" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
