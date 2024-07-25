import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick And Morty Technical",
  description: "This is a technical test about Rick and Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-sky-800 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}
      >
        {children}
      </body>
    </html>
  );
}
