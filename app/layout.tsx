import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AATrades",
  description: "Learning and Understanding the Market",
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
