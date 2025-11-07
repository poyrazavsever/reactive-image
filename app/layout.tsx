import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reactive Image Docs & Demo",
  description: "Documentation and demo for the Reactive Image component library. Created by Poyraz Avsever. This project is open-source and available on GitHub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
