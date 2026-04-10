import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { footerLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Samek",
  description: "A straightforward, human entry point into working with Samek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer links={footerLinks} />
        </div>
      </body>
    </html>
  );
}
