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

  // List elements with proper key handling
  ul: (props: any) => {
    const { children, ...restProps } = props;
    const childrenWithKeys = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && !child.key) {
        return React.cloneElement(child, { key: `ul-item-${index}` });
      }
      return child;
    });

    return (
      <ul
        className="list-disc list-inside mb-4 space-y-2 text-gray-600"
        {...restProps}
      >
        {childrenWithKeys}
      </ul>
    );
  },

  ol: (props: any) => {
    const { children, ...restProps } = props;
    const childrenWithKeys = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && !child.key) {
        return React.cloneElement(child, { key: `ol-item-${index}` });
      }
      return child;
    });

    return (
      <ol
        className="list-decimal list-inside mb-4 space-y-2 text-gray-600"
        {...restProps}
      >
        {childrenWithKeys}
      </ol>
    );
  },

  li: (props: any) => <li className="text-gray-600" {...props} />,

  // Table elements with key handling
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="min-w-full border-collapse border border-gray-300"
        {...props}
      />
    </div>
  ),

  thead: (props: any) => <thead className="bg-gray-50" {...props} />,

  tbody: (props: any) => {
    const { children, ...restProps } = props;
    const childrenWithKeys = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && !child.key) {
        return React.cloneElement(child, { key: `tbody-row-${index}` });
      }
      return child;
    });

    return <tbody {...restProps}>{childrenWithKeys}</tbody>;
  },

  tr: (props: any) => {
    const { children, ...restProps } = props;
    const childrenWithKeys = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && !child.key) {
        return React.cloneElement(child, { key: `tr-cell-${index}` });
      }
      return child;
    });

    return (
      <tr className="border-b border-gray-200" {...restProps}>
        {childrenWithKeys}
      </tr>
    );
  },

  th: (props: any) => (
    <th
      className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700"
      {...props}
    />
  ),

  td: (props: any) => (
    <td className="border border-gray-300 px-4 py-2 text-gray-600" {...props} />
  ),

  // Block elements
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-700 bg-blue-50"
      {...props}
    />
  ),

  // Inline elements
  a: (props: any) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),

  strong: (props: any) => (
    <strong className="font-bold text-gray-900" {...props} />
  ),

  em: (props: any) => <em className="italic text-gray-700" {...props} />,
};
