"use client";
import React from "react";
// Import components directly from the package source
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";

// Create a wrapper component for ReactiveImage
const ReactiveImage = ({ variant, ...props }: any) => {
  switch (variant) {
    case "clickExpand":
      return <ClickExpand {...props} />;
    case "hoverSwitch":
      return <HoverSwitch {...props} />;
    case "tiltOnHover":
      return <TiltOnHover {...props} />;
    case "zoomOnHover":
      return <ZoomOnHover {...props} />;
    default:
      return <ZoomOnHover {...props} />;
  }
};

export const mdxComponents = {
  // Custom components for MDX
  ReactiveImage,
  ClickExpand,
  HoverSwitch,
  TiltOnHover,
  ZoomOnHover,

  // HTML elements with custom styling
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mb-6 text-gray-900" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold mb-4 text-gray-800 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-medium mb-3 text-gray-700 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-600 mb-4 leading-relaxed" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4"
      {...props}
    />
  ),
};
