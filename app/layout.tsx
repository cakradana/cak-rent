import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "CakRent",
  description: "Rent a car at your fingertips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
