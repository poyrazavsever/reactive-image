"use client";
import React from "react";
import { mdxComponents } from "./components";

export function MDXContent({ code }: { code: string }) {
  const [content, setContent] = React.useState<React.ReactElement | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function renderMDX() {
      try {
        // Create async function with proper context
        const AsyncFunction = Object.getPrototypeOf(
          async function () {}
        ).constructor;

        // Wrap the code to handle the Velite output format with async support
        const wrappedCode = `
          const { Fragment, jsx, jsxs } = arguments[0];
          const baseUrl = arguments[0].baseUrl || window.location.origin;
          
          ${code}
          
          return { default: _createMdxContent };
        `;

        const func = new AsyncFunction("arguments", wrappedCode);

        // Execute with React context
        const result = await func([
          {
            Fragment: React.Fragment,
            jsx: (type: any, props: any, key?: any) => {
              // Handle key prop properly for lists and iterative elements
              const { children, ...restProps } = props || {};
              const elementProps =
                key !== undefined ? { ...restProps, key } : restProps;

              // For list items and similar elements, generate key if missing
              if (
                !key &&
                (type === "li" ||
                  type === "tr" ||
                  type === "td" ||
                  type === "th")
              ) {
                const childKey =
                  typeof children === "string"
                    ? children.slice(0, 20)
                    : Math.random().toString(36).substr(2, 9);
                elementProps.key = childKey;
              }

              return React.createElement(type, elementProps, children);
            },
            jsxs: (type: any, props: any, key?: any) => {
              // Handle key prop properly for JSX elements with children array
              const { children, ...restProps } = props || {};
              const elementProps =
                key !== undefined ? { ...restProps, key } : restProps;

              // Generate keys for array children if missing
              if (Array.isArray(children)) {
                const childrenWithKeys = children.map((child, index) => {
                  if (React.isValidElement(child) && !child.key) {
                    return React.cloneElement(child, { key: index });
                  }
                  return child;
                });
                return React.createElement(
                  type,
                  elementProps,
                  ...childrenWithKeys
                );
              }

              // For list items and similar elements, generate key if missing
              if (
                !key &&
                (type === "li" ||
                  type === "tr" ||
                  type === "td" ||
                  type === "th")
              ) {
                const childKey =
                  typeof children === "string"
                    ? children.slice(0, 20)
                    : Math.random().toString(36).substr(2, 9);
                elementProps.key = childKey;
              }

              return React.createElement(type, elementProps, children);
            },
            baseUrl: window.location.origin,
            // Provide components directly instead of dynamic imports
            ...mdxComponents,
          },
        ]);

        if (result && result.default) {
          const MDXComponent = result.default;
          const element = React.createElement(MDXComponent, {
            components: mdxComponents,
          });
          setContent(element);
        } else {
          setError("Could not find MDX component");
        }
      } catch (err) {
        console.error("MDX rendering error:", err);
        setError(`Rendering failed: ${err}`);
      }
    }

    renderMDX();
  }, [code]);

  if (error) {
    return (
      <div className="prose">
        <div className="text-red-500 p-4 bg-red-50 rounded">
          <strong>Error:</strong> {error}
        </div>
        <details className="mt-4">
          <summary className="cursor-pointer text-blue-600">
            Show Code Debug
          </summary>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto mt-2 max-h-40">
            {code}
          </pre>
        </details>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="prose">
        <div className="text-gray-500 animate-pulse">Loading content...</div>
      </div>
    );
  }

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {content}
    </div>
  );
}
