"use client";
import React from "react";
import { mdxComponents } from "./components";

export function MDXContent({ code }: { code: string }) {
  // For now, let's create a simpler approach that just renders the title
  // TODO: Implement proper MDX rendering with velite
  return (
    <div className="prose">
      <div
        dangerouslySetInnerHTML={{ __html: "Content will be rendered here" }}
      />
      <p className="text-gray-500">
        MDX Content rendering is being implemented...
      </p>
      <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
        {code.substring(0, 200)}...
      </pre>
    </div>
  );
}
