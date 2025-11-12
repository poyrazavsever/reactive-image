"use client";
import React from "react";
// Import components directly from the package source
import { ClickExpand } from "../../../packages/reactive-image/src/variants/ClickExpand";
import { HoverSwitch } from "../../../packages/reactive-image/src/variants/HoverSwitch";
import { TiltOnHover } from "../../../packages/reactive-image/src/variants/TiltOnHover";
import { ZoomOnHover } from "../../../packages/reactive-image/src/variants/ZoomOnHover";
import { CodeBlock } from "./CodeBlock";

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

  // HTML elements with custom styling - using customMd classes
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  h3: (props: any) => <h3 {...props} />,
  h4: (props: any) => <h4 {...props} />,
  p: (props: any) => <p {...props} />,

  // Code elements with syntax highlighting
  code: (props: any) => {
    const { children, className, ...restProps } = props;

    // If it's a code block (has language), use CodeBlock component
    if (className && className.includes("language-")) {
      const language = className.replace("language-", "");
      return <CodeBlock language={language}>{children}</CodeBlock>;
    }

    // Otherwise, it's inline code
    return <code {...restProps}>{children}</code>;
  },

  pre: (props: any) => {
    const { children, ...restProps } = props;

    // If the child is a code element with language, extract it
    if (React.isValidElement(children) && children.props) {
      const childProps = children.props as any;
      if (childProps.className?.includes("language-")) {
        const language = childProps.className.replace("language-", "");
        const code = childProps.children;
        return <CodeBlock language={language}>{code}</CodeBlock>;
      }
    }

    // Otherwise use default pre styling
    return <pre {...restProps}>{children}</pre>;
  },

  // List elements with proper key handling - using customMd classes
  ul: (props: any) => {
    const { children, ...restProps } = props;
    const childrenWithKeys = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && !child.key) {
        return React.cloneElement(child, { key: `ul-item-${index}` });
      }
      return child;
    });

    return <ul {...restProps}>{childrenWithKeys}</ul>;
  },

  ol: (props: any) => {
    const { children, ...restProps } = props;
    const childrenWithKeys = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && !child.key) {
        return React.cloneElement(child, { key: `ol-item-${index}` });
      }
      return child;
    });

    return <ol {...restProps}>{childrenWithKeys}</ol>;
  },

  li: (props: any) => <li {...props} />,

  // Table elements with key handling - using customMd classes
  table: (props: any) => <table {...props} />,

  thead: (props: any) => <thead {...props} />,

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

    return <tr {...restProps}>{childrenWithKeys}</tr>;
  },

  th: (props: any) => <th {...props} />,

  td: (props: any) => <td {...props} />,

  // Block elements - using customMd classes
  blockquote: (props: any) => <blockquote {...props} />,

  // Inline elements - using customMd classes
  a: (props: any) => <a {...props} />,

  strong: (props: any) => <strong {...props} />,

  em: (props: any) => <em {...props} />,

  // Horizontal rule
  hr: (props: any) => <hr {...props} />,

  // Images
  img: (props: any) => <img {...props} />,
};
