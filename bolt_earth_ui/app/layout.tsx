import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charger",
  description: "Manage and monitor EV chargers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className}`}>
        <main className="flex-1 p-4 bg-black-100">
          {children}
        </main>
      </body>
    </html>
  );
}
