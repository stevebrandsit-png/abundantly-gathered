import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. The Component Imports (Notice there are no curly braces around Navbar or Footer)
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

// 2. The Font Configurations
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// 3. The SEO Metadata
export const metadata: Metadata = {
  title: "Abundantly Gathered",
  description: "Handcrafted in Highland. Baked fresh for your family.",
};

// 4. The Master Layout Wrapper
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-background text-text-main antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <CartDrawer />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
