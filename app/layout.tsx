import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--nf-display" });
const body = Figtree({ subsets: ["latin"], variable: "--nf-body" });

export const metadata: Metadata = {
  title: "MD Rafi Al Islam | Junior Full Stack Developer",
  description: "Portfolio of MD Rafi Al Islam, a Junior Full Stack Developer building with Next.js, TypeScript, Node.js and MongoDB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
