// app/layout.tsx
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DeshBazaar - Badhao Apana  Vyapaar",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="./faviconLogo.ico"></link>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
