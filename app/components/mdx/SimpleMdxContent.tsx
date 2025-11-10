import { MDXContent } from "./MdxProvider";

// Temporary simple fallback for MDX content
export function SimpleMDXContent({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {description && (
        <p className="text-lg text-gray-600 mb-8">{description}</p>
      )}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-blue-800">
          <strong>Getting Started with Reactive Image</strong>
        </p>
        <p className="text-blue-700 mt-2">
          Install the package and start using interactive image components in
          your React applications.
        </p>
      </div>

      <h2>Installation</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
        <code>{`npm install reactive-image`}</code>
      </pre>

      <h2>Basic Usage</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
        <code>{`import { ReactiveImage } from "reactive-image";

function App() {
  return (
    <ReactiveImage
      variant="zoomOnHover"
      src="/image.jpg"
      alt="Demo image"
      zoomScale={1.15}
    />
  );
}`}</code>
      </pre>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">
          <strong>Note:</strong> MDX rendering is being improved. This is a
          temporary content display.
        </p>
      </div>
    </div>
  );
}
