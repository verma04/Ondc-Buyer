// app/layout.tsx
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "ONDC Seller Onboarding Revolution | Launch Online Store",
  description:
    "Experience the future of commerce with our user-friendly platform. Launch an online store on ONDC, attracting & converting your customers worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5N5QV3HBDH"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5N5QV3HBDH');
        `}
      </Script>
      <link rel="icon" type="image/x-icon" href="./faviconlogo.ico"></link>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
