import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gili's Website",
  description: "Personal website of Gili Giammona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
