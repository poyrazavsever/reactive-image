import React from "react";
import { mdxComponents } from "./components";

export function MDXContentServer({ code }: { code: string }) {
  try {
    // Server-side rendering için daha basit approach
    // Velite'nin çıktısını direkt olarak evaluate etmeye çalışalım
    const func = new Function(
      "React",
      "components",
      `
      const { Fragment, jsx, jsxs } = React;
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      
      ${code}
      
      return { default: _createMdxContent || (() => React.createElement('div', {}, 'Content not found')) };
    `
    );

    const result = func(React, mdxComponents);
    const Component = result.default;

    return React.createElement(Component, { components: mdxComponents });
  } catch (error) {
    console.error("MDX Server rendering error:", error);
    return (
      <div className="prose">
        <div className="text-red-500 p-4 bg-red-50 rounded">
          <strong>Error:</strong> Failed to render content on server
        </div>
        <details className="mt-4">
          <summary>Debug Info</summary>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto mt-2">
            {code.substring(0, 500)}...
          </pre>
        </details>
      </div>
    );
  }
}
