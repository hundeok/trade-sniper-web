import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trade-sniper.vercel.app"),
  title: "TRADE SNIPER | Binance & Bybit Ultra-Fast Futures Scalping Terminal",
  description: "The zero-latency 425x550 golden-ratio desktop scalping terminal for Binance & Bybit Futures. 100% Client-side AES-256 vault, one-click snipe execution.",
  keywords: [
    "TRADE SNIPER", "Binance Futures scalping", "Bybit scalping tool", "crypto trading terminal",
    "zero latency trading", "crypto snipe limit orders", "desktop trading app", "mac trading software"
  ],
  openGraph: {
    title: "TRADE SNIPER | Futures Scalping Terminal",
    description: "Zero-latency 425x550 golden-ratio scalping terminal for Binance & Bybit Futures.",
    url: "https://trade-sniper.vercel.app",
    siteName: "TRADE SNIPER",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
