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
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=500&h=400&fit=crop&crop=center",
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
      <div className="container max-w-7xl mx-auto px-6 sm:px-0">
        {/* ClickExpand Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              CE
            </span>
            {locale === "tr" ? "Tıklayarak Genişlet" : "Click to Expand"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic ClickExpand */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Temel Genişletme" : "Basic Expand"}
                </h4>
              </div>
              <ClickExpand
                src={showcaseImages.nature.primary}
                alt="Basic click expand"
                className="w-full aspect-[4/3] object-cover"
                modalAnimation="scaleFade"
                backdrop="dim"
              />
            </div>

            {/* ClickExpand with Blur Backdrop */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Bulanık Arka Plan" : "Blur Backdrop"}
                </h4>
              </div>
              <ClickExpand
                src={showcaseImages.urban.primary}
                alt="Click expand with blur"
                className="w-full aspect-[4/3] object-cover"
                modalAnimation="scaleFade"
                backdrop="blur"
                caption={
                  locale === "tr" ? "Şehir manzarası" : "Urban landscape"
                }
              />
            </div>

            {/* ClickExpand with SlideUp */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Kayarak Açılma" : "Slide Animation"}
                </h4>
              </div>
              <ClickExpand
                src={showcaseImages.architecture.primary}
                alt="Click expand slide animation"
                className="w-full aspect-[4/3] object-cover"
                modalAnimation="slideUp"
                backdrop="dark"
              />
            </div>
          </div>
        </div>

        {/* HoverSwitch Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              HS
            </span>
            {locale === "tr" ? "Hover ile Değiştir" : "Hover to Switch"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Crossfade HoverSwitch */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Yumuşak Geçiş" : "Smooth Crossfade"}
                </h4>
              </div>
              <HoverSwitch
                src={showcaseImages.nature.secondary}
                hoverSrc={showcaseImages.nature.tertiary}
                alt="Crossfade hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="crossfade"
                timing={{ duration: 300, easing: "ease-in-out" }}
              />
            </div>

            {/* Slide HoverSwitch */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Kayarak Değişim" : "Slide Transition"}
                </h4>
              </div>
              <HoverSwitch
                src={showcaseImages.urban.secondary}
                hoverSrc={showcaseImages.urban.tertiary}
                alt="Slide hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="slide"
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>

            {/* Fast HoverSwitch */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Hızlı Değişim" : "Fast Switch"}
                </h4>
              </div>
              <HoverSwitch
                src={showcaseImages.abstract.primary}
                hoverSrc={showcaseImages.abstract.secondary}
                alt="Fast hover switch"
                className="w-full aspect-4/3 object-cover"
                animation="crossfade"
                timing={{ duration: 150, easing: "ease-in-out" }}
              />
            </div>
          </div>
        </div>

        {/* TiltOnHover Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              3D
            </span>
            {locale === "tr" ? "3D Eğim Efekti" : "3D Tilt Effect"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic 3D Tilt */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100 p-4">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Temel 3D Eğim" : "Basic 3D Tilt"}
                </h4>
              </div>
              <TiltOnHover
                src={showcaseImages.architecture.secondary}
                alt="Basic 3D tilt"
                className="w-full aspect-4/3 object-cover rounded-lg"
                tiltMax={15}
                timing={{ duration: 300, easing: "ease-out" }}
              />
            </div>

            {/* 3D Tilt with Glare */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100 p-4">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Parıltılı Eğim" : "Tilt with Glare"}
                </h4>
              </div>
              <TiltOnHover
                src={showcaseImages.nature.primary}
                alt="3D tilt with glare"
                className="w-full aspect-4/3 object-cover rounded-lg"
                animation="glare"
                tiltMax={20}
                glare={{ enabled: true, maxOpacity: 0.3, color: "#ffffff" }}
                timing={{ duration: 400, easing: "ease-out" }}
              />
            </div>

            {/* 3D Tilt with Scale */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100 p-4">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Ölçekli Eğim" : "Tilt with Scale"}
                </h4>
              </div>
              <TiltOnHover
                src={showcaseImages.abstract.tertiary}
                alt="3D tilt with scale"
                className="w-full aspect-4/3 object-cover rounded-lg"
                tiltMax={18}
                scale={1.1}
                timing={{ duration: 350, easing: "ease-out" }}
              />
            </div>
          </div>
        </div>

        {/* ZoomOnHover Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              ZM
            </span>
            {locale === "tr" ? "Yakınlaştırma Efekti" : "Zoom Effect"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Zoom */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Temel Yakınlaştırma" : "Basic Zoom"}
                </h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.urban.primary}
                alt="Basic zoom"
                className="w-full aspect-4/3 object-cover"
                zoomScale={1.2}
                timing={{ duration: 300, easing: "ease-in-out" }}
              />
            </div>

            {/* Strong Zoom */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Güçlü Yakınlaştırma" : "Strong Zoom"}
                </h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.nature.tertiary}
                alt="Strong zoom"
                className="w-full aspect-4/3 object-cover"
                zoomScale={1.5}
                timing={{ duration: 500, easing: "ease-out" }}
              />
            </div>

            {/* Fast Zoom */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Hızlı Yakınlaştırma" : "Fast Zoom"}
                </h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.architecture.tertiary}
                alt="Fast zoom"
                className="w-full aspect-4/3 object-cover"
                zoomScale={1.25}
                timing={{ duration: 200, easing: "ease-in-out" }}
              />
            </div>

            {/* Zoom with Different Origin */}
            <div className="relative group overflow-hidden rounded-xl bg-gray-100">
              <div className="absolute inset-x-0 top-0 bg-linear-to-b from-black/60 to-transparent p-4 z-10">
                <h4 className="text-white font-medium text-sm">
                  {locale === "tr" ? "Köşe Yakınlaştırması" : "Corner Zoom"}
                </h4>
              </div>
              <ZoomOnHover
                src={showcaseImages.abstract.secondary}
                alt="Zoom from corner"
                className="w-full aspect-4/3 object-cover"
                zoomScale={1.3}
                origin="top-left"
                timing={{ duration: 400, easing: "ease-in-out" }}
              />
            </div>
          </div>
        </div>

        {/* Performance Note */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            {locale === "tr"
              ? "Tüm animasyonlar performans için optimize edilmiştir ve modern tarayıcılarda 60fps ile çalışır. Her efekt CSS transforms ve GPU hızlandırması kullanır."
              : "All animations are optimized for performance and run at 60fps in modern browsers. Each effect uses CSS transforms and GPU acceleration."}
          </p>
        </div>
      </div>
    </section>
  );
}
