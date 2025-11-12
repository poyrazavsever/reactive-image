"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({
  children,
  language = "typescript",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Simple syntax highlighting for common languages
  const highlightCode = (code: string) => {
    if (!language || language === "text") return code;

    let highlighted = code;

    // TypeScript/JavaScript keywords
    if (
      language.includes("typescript") ||
      language.includes("javascript") ||
      language.includes("tsx") ||
      language.includes("jsx")
    ) {
      highlighted = highlighted
        .replace(
          /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|interface|type|extends|implements)\b/g,
          '<span class="text-blue-400">$1</span>'
        )
        .replace(
          /\b(true|false|null|undefined)\b/g,
          '<span class="text-orange-400">$1</span>'
        )
        .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
        .replace(/'([^']*)'/g, "<span class=\"text-green-400\">'$1'</span>")
        .replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>')
        .replace(/\/\/.*$/gm, '<span class="text-gray-500">$&</span>')
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="text-gray-500">$&</span>');
    }

    // CSS
    if (language.includes("css")) {
      highlighted = highlighted
        .replace(
          /([.#]?[a-zA-Z-]+)\s*\{/g,
          '<span class="text-blue-400">$1</span> {'
        )
        .replace(/([a-zA-Z-]+):/g, '<span class="text-orange-400">$1</span>:')
        .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
        .replace(/'([^']*)'/g, "<span class=\"text-green-400\">'$1'</span>");
    }

    // HTML
    if (language.includes("html")) {
      highlighted = highlighted
        .replace(
          /&lt;(\/?[a-zA-Z][^&gt;]*)&gt;/g,
          '<span class="text-blue-400">&lt;$1&gt;</span>'
        )
        .replace(/([a-zA-Z-]+)=/g, '<span class="text-orange-400">$1</span>=')
        .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>');
    }

    // JSON
    if (language.includes("json")) {
      highlighted = highlighted
        .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1"</span>:')
        .replace(/:\s*"([^"]*)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(
          /:\s*(true|false|null)/g,
          ': <span class="text-orange-400">$1</span>'
        )
        .replace(/:\s*(\d+)/g, ': <span class="text-yellow-400">$1</span>');
    }

    // Bash/Shell
    if (language.includes("bash") || language.includes("shell")) {
      highlighted = highlighted
        .replace(
          /^(npm|yarn|pnpm|git)\b/gm,
          '<span class="text-blue-400">$1</span>'
        )
        .replace(/--?[a-zA-Z-]+/g, '<span class="text-orange-400">$&</span>')
        .replace(/#.*$/gm, '<span class="text-gray-500">$&</span>');
    }

    return highlighted;
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
          {filename && <span className="text-neutral-300">{filename}</span>}
          {language && !filename && (
            <span className="text-neutral-400 text-xs">{language}</span>
          )}
        </div>
        <button onClick={copyToClipboard} className="copy-button">
          {copied ? (
            <>
              <Icon icon="lucide:check" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Icon icon="lucide:copy" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre
        style={{ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <code
          dangerouslySetInnerHTML={{
            __html: highlightCode(children),
          }}
        />
      </pre>
    </div>
  );
}
