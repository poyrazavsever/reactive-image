import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
