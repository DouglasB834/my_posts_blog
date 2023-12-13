import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header.tsx/Header";
import { ButtonBackUp } from "@/components/button/ButtonBackUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mypost of Medium",
  description: "Post I created on Medium about opinions and thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ButtonBackUp />
        <div className="flex-1 max-w-[1200px] m-auto mb-4">{children}</div>
      </body>
    </html>
  );
}
