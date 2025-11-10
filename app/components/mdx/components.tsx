"use client";
import React from "react";
import { ReactiveImage } from "reactive-image";

export const mdxComponents = {
  // Custom components for MDX
  ReactiveImage,

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
