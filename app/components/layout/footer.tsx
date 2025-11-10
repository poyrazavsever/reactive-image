"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="border-t border-neutral-200 bg-white/80 backdrop-blur-lg mt-20">
      <div className="container max-w-6xl mx-auto px-6 sm:px-0">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo/logo.png"
                  alt="Reactive Image Logo"
                  className="w-8 h-8"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-xl font-bold text-neutral-900">
                  Reactive Image
                </span>
              </div>
              <p className="text-neutral-600 mb-6 max-w-md leading-relaxed">
                Beautiful, interactive React image components with smooth
                animations. Built for modern web applications with TypeScript
                support.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/poyrazavsever/reactive-image"
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="akar-icons:github-fill" className="w-6 h-6" />
                </Link>
                <Link
                  href="https://buymeacoffee.com/poyrazavsever"
                  className="text-neutral-500 hover:text-orange-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="cib:buy-me-a-coffee" className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="font-semibold text-neutral-900 mb-4">
                Documentation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/en/docs/getting-started"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/docs/installation"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/showcase"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>

            {/* Components */}
            <div>
              <h3 className="font-semibold text-neutral-900 mb-4">
                Components
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/en/docs/click-expand"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    Click Expand
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/docs/hover-switch"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    Hover Switch
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/docs/tilt-on-hover"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    3D Tilt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/docs/zoom-on-hover"
                    className="text-neutral-600 hover:text-orange-500 transition-colors"
                  >
                    Zoom on Hover
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-600">
              © 2025 Reactive Image. All rights reserved.
            </div>

            {/* Created with Love */}
            <div className="text-sm text-neutral-600 flex items-center gap-1">
              <span>Created with</span>
              <div
                className="relative inline-flex items-center"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <Icon
                  icon="lucide:heart"
                  className="w-4 h-4 text-orange-500 cursor-pointer hover:scale-110 transition-transform"
                />
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 text-white text-xs rounded whitespace-nowrap z-10">
                    Aslı Sena
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-neutral-900"></div>
                  </div>
                )}
              </div>
              <span>by</span>
              <Link
                href="https://www.poyrazavsever.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Poyraz Avsever
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
