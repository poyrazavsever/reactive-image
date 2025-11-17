"use client";

import { getDictionary } from "@/app/lib/i18n";
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";
import { PanReveal } from "../../../packages/reactive-image/src/variants/PanReveal";

type ShowcaseHeroProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

// Kategorize edilmiş görsel koleksiyonu
const showcaseImages = {
  nature: {
    primary:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop&crop=center",
    secondary:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&crop=center",
    tertiary:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=400&fit=crop&crop=center",
  },
  urban: {
    primary:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop&crop=center",
    secondary:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=400&fit=crop&crop=center",
    tertiary:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=400&fit=crop&crop=center",
  },
  architecture: {
    primary:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&h=400&fit=crop&crop=center",
    secondary:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop&crop=center",
    tertiary:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop&crop=center",
  },
  abstract: {
    primary:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500&h=400&fit=crop&crop=center",
    secondary:
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=500&h=400&fit=crop&crop=center",
    tertiary:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=400&fit=crop&crop=center",
  },
};

export function ShowcaseHero({ locale, dict }: ShowcaseHeroProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6 sm:px-0">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            {locale === "tr"
              ? "Tüm Animasyon Varyantları"
              : "All Animation Variants"}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            {locale === "tr"
              ? "Reactive Image kütüphanesinin sunduğu tüm etkileşimli animasyon türlerini keşfedin. Her varyant farklı kullanım senaryoları için optimize edilmiştir."
              : "Explore all interactive animation types offered by the Reactive Image library. Each variant is optimized for different use cases."}
          </p>
        </div>

        {/* ClickExpand Section */}
        <div className="mb-20">
          <h3 className="text-xl text-neutral-400 mb-8 flex items-center gap-3">
            {locale === "tr"
              ? "Tıklayarak Genişlet - Modal Animasyonları"
              : "Click to Expand - Modal Animations"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Scale Fade */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Fade</h4>
              </div>
              <ClickExpand
                src={showcaseImages.nature.primary}
                alt="Scale fade modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="scaleFade"
                backdrop="dim"
              />
            </div>

            {/* Slide Up */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Up</h4>
              </div>
              <ClickExpand
                src={showcaseImages.urban.primary}
                alt="Slide up modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="slideUp"
                backdrop="blur"
              />
            </div>

            {/* Slide Down */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Down</h4>
              </div>
              <ClickExpand
                src={showcaseImages.architecture.primary}
                alt="Slide down modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="slideDown"
                backdrop="glass"
              />
            </div>

            {/* Slide Left */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Left</h4>
              </div>
              <ClickExpand
                src={showcaseImages.abstract.primary}
                alt="Slide left modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="slideLeft"
                backdrop="dark"
              />
            </div>

            {/* Slide Right */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Right</h4>
              </div>
              <ClickExpand
                src={showcaseImages.nature.secondary}
                alt="Slide right modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="slideRight"
                backdrop="blur"
              />
            </div>

            {/* Spring Pop */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Spring Pop</h4>
              </div>
              <ClickExpand
                src={showcaseImages.urban.secondary}
                alt="Spring pop modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="springPop"
                backdrop="dim"
              />
            </div>

            {/* Zoom Bounce */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Zoom Bounce</h4>
              </div>
              <ClickExpand
                src={showcaseImages.architecture.secondary}
                alt="Zoom bounce modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="zoomBounce"
                backdrop="glass"
              />
            </div>

            {/* Rotate In */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Rotate In</h4>
              </div>
              <ClickExpand
                src={showcaseImages.abstract.secondary}
                alt="Rotate in modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="rotateIn"
                backdrop="dark"
              />
            </div>

            {/* Flip In */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Flip In</h4>
              </div>
              <ClickExpand
                src={showcaseImages.nature.tertiary}
                alt="Flip in modal"
                className="w-full aspect-4/3 object-cover"
                modalAnimation="flipIn"
                backdrop="blur"
              />
            </div>
          </div>
        </div>

        {/* HoverSwitch Section */}
        <div className="mb-20">
          <h3 className="text-xl text-neutral-400 mb-8 flex items-center gap-3">
            {locale === "tr"
              ? "Hover Geçiş Animasyonları"
              : "Hover Transition Animations"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Crossfade */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Crossfade</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.nature.primary}
                hoverSrc={showcaseImages.nature.secondary}
                alt="Crossfade hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="crossfade"
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>

            {/* Slide Right */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Right</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.urban.primary}
                hoverSrc={showcaseImages.urban.secondary}
                alt="Slide right hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="slide"
                slideDirection="right"
                timing={{ duration: 350, easing: "ease-out" }}
              />
            </div>

            {/* Slide Left */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Left</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.architecture.primary}
                hoverSrc={showcaseImages.architecture.secondary}
                alt="Slide left hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="slide"
                slideDirection="left"
                timing={{ duration: 350, easing: "ease-out" }}
              />
            </div>

            {/* Slide Up */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Up</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.abstract.primary}
                hoverSrc={showcaseImages.abstract.secondary}
                alt="Slide up hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="slideUp"
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>

            {/* Slide Down */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Down</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.nature.tertiary}
                hoverSrc={showcaseImages.urban.tertiary}
                alt="Slide down hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="slideDown"
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>

            {/* Zoom */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Zoom</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.architecture.tertiary}
                hoverSrc={showcaseImages.nature.primary}
                alt="Zoom hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="zoom"
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>

            {/* Blur */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Blur</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.abstract.tertiary}
                hoverSrc={showcaseImages.urban.primary}
                alt="Blur hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="blur"
                timing={{ duration: 250, easing: "ease-out" }}
              />
            </div>

            {/* Rotate Y */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Rotate Y</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.urban.secondary}
                hoverSrc={showcaseImages.architecture.primary}
                alt="Rotate Y hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="rotateY"
                timing={{ duration: 500, easing: "ease-out" }}
              />
            </div>

            {/* Scale Rotate */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Rotate</h4>
              </div>
              <HoverSwitch
                src={showcaseImages.nature.secondary}
                hoverSrc={showcaseImages.abstract.primary}
                alt="Scale rotate hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="scaleRotate"
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>
          </div>
        </div>

        {/* PanReveal Section */}
        <div className="mb-20">
          <h3 className="text-xl text-neutral-400 mb-8 flex items-center gap-3">
            {locale === "tr"
              ? "Pan & Reveal Animasyonları"
              : "Pan & Reveal Animations"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Slide Right */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Right</h4>
              </div>
              <div className="aspect-4/3">
                <PanReveal
                  src={showcaseImages.nature.primary}
                  secondarySrc={showcaseImages.nature.secondary}
                  alt="Pan reveal slide right"
                  animation="slide"
                  direction="right"
                  panAmount={35}
                  timing={{ duration: 600, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
                  className="block w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {/* Slide Up */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Slide Up</h4>
              </div>
              <div className="aspect-4/3">
                <PanReveal
                  src={showcaseImages.urban.primary}
                  secondarySrc={showcaseImages.urban.secondary}
                  alt="Pan reveal slide up"
                  animation="slide"
                  direction="up"
                  panAmount={30}
                  timing={{ duration: 550, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
                  className="block w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {/* Diagonal Reveal */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Diagonal</h4>
              </div>
              <div className="aspect-4/3">
                <PanReveal
                  src={showcaseImages.architecture.primary}
                  secondarySrc={showcaseImages.abstract.primary}
                  alt="Pan reveal diagonal"
                  animation="slide"
                  direction="diagonal"
                  panAmount={40}
                  timing={{ duration: 600, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
                  className="block w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {/* Mask Circle */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Mask Circle</h4>
              </div>
              <div className="aspect-4/3">
                <PanReveal
                  src={showcaseImages.nature.tertiary}
                  secondarySrc={showcaseImages.architecture.secondary}
                  alt="Pan reveal mask"
                  animation="mask"
                  maskShape="circle"
                  maskSize={60}
                  timing={{ duration: 450, easing: "ease-out" }}
                  className="block w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {/* Mask Rectangle */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Mask Rectangle</h4>
              </div>
              <div className="aspect-4/3">
                <PanReveal
                  src={showcaseImages.abstract.secondary}
                  secondarySrc={showcaseImages.urban.tertiary}
                  alt="Pan reveal mask rectangle"
                  animation="mask"
                  maskShape="rectangle"
                  maskSize={70}
                  timing={{ duration: 450, easing: "ease-out" }}
                  className="block w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {/* Spotlight */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Spotlight</h4>
              </div>
              <div className="aspect-4/3">
                <PanReveal
                  src={showcaseImages.architecture.tertiary}
                  secondarySrc={showcaseImages.nature.primary}
                  alt="Pan reveal spotlight"
                  animation="spotlight"
                  maskSize={45}
                  followCursor={true}
                  gradientColor="rgba(255, 255, 255, 0.35)"
                  timing={{ duration: 380, easing: "ease-out" }}
                  className="block w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* TiltOnHover Section */}
        <div className="mb-20">
          <h3 className="text-xl text-neutral-400 mb-8 flex items-center gap-3">
            {locale === "tr"
              ? "3D Eğim ve Perspektif Efektleri"
              : "3D Tilt and Perspective Effects"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Basic Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Basic Tilt</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.nature.primary}
                alt="Basic 3D tilt"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="basic"
                tiltMax={15}
                timing={{ duration: 200, easing: "ease-out" }}
              />
            </div>

            {/* Glare Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Glare Effect</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.urban.primary}
                alt="Glare tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="glare"
                tiltMax={18}
                glare={{ enabled: true, maxOpacity: 0.4, color: "#ffffff" }}
                timing={{ duration: 250, easing: "ease-out" }}
              />
            </div>

            {/* Scale Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Tilt</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.architecture.primary}
                alt="Scale tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="scale"
                tiltMax={16}
                scale={1.08}
                timing={{ duration: 200, easing: "ease-out" }}
              />
            </div>

            {/* Perspective Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Perspective</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.abstract.primary}
                alt="Perspective tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="perspective"
                tiltMax={20}
                perspective={800}
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>

            {/* Bounce Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Bounce</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.nature.secondary}
                alt="Bounce tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="bounce"
                tiltMax={14}
                timing={{
                  duration: 600,
                  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              />
            </div>

            {/* Elastic Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Elastic</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.urban.secondary}
                alt="Elastic tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="elastic"
                tiltMax={12}
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>

            {/* Magnetic Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Magnetic</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.architecture.secondary}
                alt="Magnetic tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="magnetic"
                tiltMax={10}
                timing={{ duration: 150, easing: "ease-out" }}
              />
            </div>

            {/* Float Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Float</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.abstract.secondary}
                alt="Float tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="float"
                tiltMax={8}
                shadow={true}
                timing={{ duration: 250, easing: "ease-out" }}
              />
            </div>

            {/* Parallax Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100 p-3">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Parallax</h4>
              </div>
              <TiltOnHover
                src={showcaseImages.nature.tertiary}
                alt="Parallax tilt effect"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="parallax"
                tiltMax={15}
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>
          </div>
        </div>

        {/* ZoomOnHover Section */}
        <div className="mb-20">
          <h3 className="text-xl text-neutral-400 mb-8 flex items-center gap-3">
            {locale === "tr"
              ? "Yakınlaştırma ve Transform Efektleri"
              : "Zoom and Transform Effects"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Scale */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.nature.primary}
                alt="Basic scale zoom"
                className="w-full aspect-4/3 object-cover"
                animation="scale"
                zoomScale={1.25}
                timing={{ duration: 250, easing: "ease-out" }}
              />
            </div>

            {/* Scale Rotate */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Rotate</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.urban.primary}
                alt="Scale rotate zoom"
                className="w-full aspect-4/3 object-cover"
                animation="scaleRotate"
                zoomScale={1.3}
                rotation={10}
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>

            {/* Scale Blur */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Blur</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.architecture.primary}
                alt="Scale blur zoom"
                className="w-full aspect-4/3 object-cover"
                animation="scaleBlur"
                zoomScale={1.2}
                blurAmount={2}
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>

            {/* Scale Fade */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Fade</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.abstract.primary}
                alt="Scale fade zoom"
                className="w-full aspect-4/3 object-cover"
                animation="scaleFade"
                zoomScale={1.4}
                opacityChange={0.8}
                timing={{ duration: 350, easing: "ease-out" }}
              />
            </div>

            {/* Scale Slide */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Scale Slide</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.nature.secondary}
                alt="Scale slide zoom"
                className="w-full aspect-4/3 object-cover"
                animation="scaleSlide"
                zoomScale={1.3}
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>

            {/* Perspective */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Perspective</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.urban.secondary}
                alt="Perspective zoom"
                className="w-full aspect-4/3 object-cover"
                animation="perspective"
                zoomScale={1.2}
                rotation={8}
                timing={{ duration: 500, easing: "ease-out" }}
              />
            </div>

            {/* Pulse */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Pulse</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.architecture.secondary}
                alt="Pulse zoom"
                className="w-full aspect-4/3 object-cover"
                animation="pulse"
                zoomScale={1.15}
                timing={{ duration: 600, easing: "ease-in-out" }}
              />
            </div>

            {/* Bounce */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Bounce</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.abstract.secondary}
                alt="Bounce zoom"
                className="w-full aspect-4/3 object-cover"
                animation="bounce"
                zoomScale={1.25}
                timing={{
                  duration: 800,
                  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              />
            </div>

            {/* Elastic */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">Elastic</h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.architecture.tertiary}
                alt="Elastic zoom"
                className="w-full aspect-4/3 object-cover"
                animation="elastic"
                zoomScale={1.3}
                timing={{ duration: 600, easing: "ease-out" }}
              />
            </div>

            {/* Cursor Origin */}
            <div className="relative group overflow-hidden rounded-xl bg-neutral-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-3 z-10">
                <h4 className="text-white font-medium text-xs">
                  Cursor Origin
                </h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.architecture.tertiary}
                alt="Cursor origin zoom"
                className="w-full aspect-4/3 object-cover"
                animation="scale"
                zoomScale={1.4}
                origin="cursor"
                followCursor={true}
                timing={{ duration: 200, easing: "ease-out" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
