import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propertunity - Dashboard",
  description: "Propertunity Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark font-display text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
