import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Abundantly Gathered",
  description: "Handcrafted in Highland. Baked fresh for your family.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <CartDrawer />
        {/* INJECTED GLOBAL WHITESPACE: pt-8 lg:pt-12 creates a permanent protective cushion below the Navbar */}
        <main className="flex-grow pt-8 lg:pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
