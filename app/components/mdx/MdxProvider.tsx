"use client";
import React from "react";
import { mdxComponents } from "./components";

export function MDXContent({ code }: { code: string }) {
  const [content, setContent] = React.useState<React.ReactElement | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      // Create the function with proper context
      const AsyncFunction = Object.getPrototypeOf(
        async function () {}
      ).constructor;

      // Wrap the code to handle the Velite output format
      const wrappedCode = `
        const { Fragment, jsx, jsxs } = arguments[0];
        const baseUrl = arguments[0].baseUrl || window.location.origin;
        
        ${code}
        
        return { default: _createMdxContent };
      `;

      const func = new Function("arguments", wrappedCode);

      // Execute with React context
      const result = func([
        {
          Fragment: React.Fragment,
          jsx: React.createElement,
          jsxs: React.createElement,
          baseUrl: window.location.origin,
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
