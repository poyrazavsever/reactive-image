"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { getDictionary } from "@/app/lib/i18n";

type CodeExamplesProps = {
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

const codeExamples = [
  {
    title: "Basic Usage",
    description: "Simple implementation with default settings",
    code: `import { ZoomOnHover } from 'reactive-image';

function MyComponent() {
  return (
    <ZoomOnHover
      src="your-image.jpg"
      alt="Description"
      zoomScale={1.2}
    />
  );
}`,
  },
  {
    title: "Advanced Configuration",
    description: "Customized with animations and timing",
    code: `import { TiltOnHover } from 'reactive-image';

function MyComponent() {
  return (
    <TiltOnHover
      src="your-image.jpg"
      alt="Description"
      tiltMax={20}
      glare={{
        enabled: true,
        maxOpacity: 0.4,
        color: "#ffffff"
      }}
      timing={{
        duration: 400,
        easing: "ease-out"
      }}
      scale={1.1}
    />
  );
}`,
  },
  {
    title: "Modal with Custom Backdrop",
    description: "Click expand with blur backdrop and caption",
    code: `import { ClickExpand } from 'reactive-image';

function MyComponent() {
  return (
    <ClickExpand
      src="your-image.jpg"
      alt="Description"
      modalAnimation="scaleFade"
      backdrop="blur"
      caption="Your image caption here"
      showCloseButton={true}
    />
  );
}`,
  },
  {
    title: "Image Switching",
    description: "Hover to switch between two images",
    code: `import { HoverSwitch } from 'reactive-image';

function MyComponent() {
  return (
    <HoverSwitch
      src="image-default.jpg"
      hoverSrc="image-hover.jpg"
      alt="Description"
      animation="crossfade"
      timing={{
        duration: 300,
        easing: "ease-in-out"
      }}
      preloadHover={true}
    />
  );
}`,
  },
  {
    title: "Pan Reveal Spotlight",
    description: "Reveal a secondary crop with a cursor-following spotlight",
    code: `import { PanReveal } from 'reactive-image';

function MyComponent() {
  return (
    <PanReveal
      src="editorial-wide.jpg"
      secondarySrc="editorial-detail.jpg"
      alt="Editorial reveal"
      animation="spotlight"
      maskSize={40}
      followCursor={true}
      timing={{
        duration: 500,
        easing: "cubic-bezier(0.22, 0.61, 0.36, 1)"
      }}
    />
  );
}`,
  },
];

export function CodeExamples({ locale, dict }: CodeExamplesProps) {
  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0 bg-neutral-50">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Code Examples
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready-to-use code snippets for quick implementation in your React
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Example Selection */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Mobile/Tablet Horizontal Scroll */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {codeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExample(index)}
                    className={`flex-shrink-0 text-left p-3 rounded-xl transition-all min-w-[200px] ${
                      activeExample === index
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    <h4 className="font-semibold mb-1 text-sm">
                      {example.title}
                    </h4>
                    <p
                      className={`text-xs ${
                        activeExample === index
                          ? "text-orange-100"
                          : "text-neutral-500"
                      }`}
                    >
                      {example.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Vertical List */}
            <div className="hidden lg:block">
              <div className="space-y-3 sticky top-24">
                {codeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExample(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeExample === index
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    <h4 className="font-semibold mb-1">{example.title}</h4>
                    <p
                      className={`text-sm ${
                        activeExample === index
                          ? "text-orange-100"
                          : "text-neutral-500"
                      }`}
                    >
                      {example.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white border border-neutral-200 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
              {/* Code Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-200 bg-neutral-50">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="hidden sm:flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-neutral-600 truncate">
                    {codeExamples[activeExample].title}
                  </span>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(codeExamples[activeExample].code)
                  }
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 rounded transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Icon
                        icon="lucide:check"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icon
                        icon="lucide:copy"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-3 sm:p-4 lg:p-6 bg-neutral-900">
                <pre className="text-xs sm:text-sm text-white overflow-x-auto">
                  <code>{codeExamples[activeExample].code}</code>
                </pre>
              </div>
            </div>

            {/* Installation Instructions */}
            <div className="mt-6 lg:mt-8 bg-white border border-neutral-200 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon
                  icon="lucide:download"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                />
                <span className="text-sm sm:text-base">Installation</span>
              </h4>
              <div className="space-y-4">
                <div className="bg-neutral-900 rounded-lg p-3 sm:p-4">
                  <code className="text-green-400 text-xs sm:text-sm">
                    npm install reactive-image
                  </code>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  <p>Or using yarn:</p>
                  <div className="bg-neutral-900 rounded-lg p-3 sm:p-4 mt-2">
                    <code className="text-green-400 text-xs sm:text-sm">
                      yarn add reactive-image
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
