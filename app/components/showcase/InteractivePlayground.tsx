"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";

type InteractivePlaygroundProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

const sampleImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&crop=center",
];

export function InteractivePlayground({
  locale,
  dict,
}: InteractivePlaygroundProps) {
  const [selectedVariant, setSelectedVariant] = useState("zoom-on-hover");
  const [selectedImage, setSelectedImage] = useState(0);
  const [settings, setSettings] = useState({
    zoomScale: 1.25,
    tiltMax: 15,
    duration: 400,
    glareEnabled: true,
    scaleEnabled: true,
  });

  const renderComponent = () => {
    const baseProps = {
      src: sampleImages[selectedImage],
      alt: "Interactive playground demo",
    };

    switch (selectedVariant) {
      case "zoom-on-hover":
        return (
          <ZoomOnHover
            {...baseProps}
            className="w-full h-80 object-cover rounded-xl"
            zoomScale={settings.zoomScale}
            timing={{ duration: settings.duration, easing: "ease-in-out" }}
          />
        );
      case "tilt-on-hover":
        return (
          <div className="p-8">
            <TiltOnHover
              {...baseProps}
              className="w-full h-64 object-cover rounded-xl"
              tiltMax={settings.tiltMax}
              glare={{
                enabled: settings.glareEnabled,
                maxOpacity: 0.3,
                color: "#ffffff",
              }}
              scale={settings.scaleEnabled ? 1.05 : 1}
              timing={{ duration: settings.duration, easing: "ease-out" }}
            />
          </div>
        );
      case "hover-switch":
        return (
          <HoverSwitch
            {...baseProps}
            className="w-full h-80 object-cover rounded-xl"
            hoverSrc={sampleImages[(selectedImage + 1) % sampleImages.length]}
            timing={{ duration: settings.duration, easing: "ease-in-out" }}
            preloadHover={true}
          />
        );
      case "click-expand":
        return (
          <div className="relative">
            <ClickExpand
              {...baseProps}
              className="w-full h-80 object-cover rounded-xl cursor-pointer"
              modalAnimation="scaleFade"
              backdrop="blur"
              caption="Interactive playground demo image"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const generateCode = () => {
    const componentName = selectedVariant
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    let props = `
  src="${sampleImages[selectedImage]}"
  alt="Description"`;

    switch (selectedVariant) {
      case "zoom-on-hover":
        props += `
  zoomScale={${settings.zoomScale}}
  timing={{ duration: ${settings.duration}, easing: "ease-in-out" }}`;
        break;
      case "tilt-on-hover":
        props += `
  tiltMax={${settings.tiltMax}}
  glare={{ enabled: ${settings.glareEnabled}, maxOpacity: 0.3 }}
  scale={${settings.scaleEnabled ? 1.05 : 1}}
  timing={{ duration: ${settings.duration}, easing: "ease-out" }}`;
        break;
      case "hover-switch":
        props += `
  hoverSrc="${sampleImages[(selectedImage + 1) % sampleImages.length]}"
  timing={{ duration: ${settings.duration}, easing: "ease-in-out" }}
  preloadHover={true}`;
        break;
      case "click-expand":
        props += `
  modalAnimation="scaleFade"
  backdrop="blur"
  caption="Your image caption"`;
        break;
    }

    return `<${componentName}${props}
/>`;
  };

  return (
    <section id="playground" className="py-20 px-6 sm:px-0 bg-white">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Interactive Playground
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experiment with different components, settings, and images in
            real-time to see how they work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Component Selector */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon icon="lucide:settings" className="w-5 h-5" />
                Component Type
              </h3>
              <div className="space-y-2">
                {[
                  { id: "zoom-on-hover", name: "Zoom on Hover" },
                  { id: "tilt-on-hover", name: "3D Tilt" },
                  { id: "hover-switch", name: "Hover Switch" },
                  { id: "click-expand", name: "Click Expand" },
                ].map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedVariant === variant.id
                        ? "bg-orange-500 text-white"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Selector */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon icon="lucide:image" className="w-5 h-5" />
                Sample Image
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sampleImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-orange-500 ring-2 ring-orange-200"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Sample ${index + 1}`}
                      className="w-full h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Settings Controls */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon icon="lucide:sliders" className="w-5 h-5" />
                Settings
              </h3>
              <div className="space-y-4">
                {selectedVariant === "zoom-on-hover" && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Zoom Scale: {settings.zoomScale}
                    </label>
                    <input
                      type="range"
                      min="1.1"
                      max="2"
                      step="0.05"
                      value={settings.zoomScale}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          zoomScale: parseFloat(e.target.value),
                        }))
                      }
                      className="w-full"
                    />
                  </div>
                )}

                {selectedVariant === "tilt-on-hover" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Tilt Max: {settings.tiltMax}°
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={settings.tiltMax}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            tiltMax: parseInt(e.target.value),
                          }))
                        }
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="glare"
                        checked={settings.glareEnabled}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            glareEnabled: e.target.checked,
                          }))
                        }
                        className="w-4 h-4"
                      />
                      <label
                        htmlFor="glare"
                        className="text-sm text-neutral-700"
                      >
                        Enable Glare
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="scale"
                        checked={settings.scaleEnabled}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            scaleEnabled: e.target.checked,
                          }))
                        }
                        className="w-4 h-4"
                      />
                      <label
                        htmlFor="scale"
                        className="text-sm text-neutral-700"
                      >
                        Enable Scale
                      </label>
                    </div>
                  </>
                )}

                {selectedVariant !== "click-expand" && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Duration: {settings.duration}ms
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="50"
                      value={settings.duration}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          duration: parseInt(e.target.value),
                        }))
                      }
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Demo and Code */}
          <div className="lg:col-span-2 space-y-8">
            {/* Component Demo */}
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                <Icon
                  icon="lucide:play-circle"
                  className="w-5 h-5 text-orange-500"
                />
                Live Demo
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden">
                <div className="relative">{renderComponent()}</div>
              </div>
            </div>

            {/* Generated Code */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-neutral-700">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="lucide:code"
                    className="w-5 h-5 text-neutral-400"
                  />
                  <span className="text-neutral-300">Generated Code</span>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-white overflow-x-auto">
                  <code>{generateCode()}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
