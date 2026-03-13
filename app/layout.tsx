import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "./components/ui/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Siko Mining Services | Supporting the Junior Mining Sector",
  description: "We Support The Junior Mining Sector with accessible & sustainable mining services that guarantee success. Level 2 BBBEE compliant with 60+ years combined experience.",
  keywords: ["mining services", "South Africa", "BBBEE", "coal mining", "rehabilitation", "transportation"],
  authors: [{ name: "Siko Mining Services" }],
  openGraph: {
    title: "Siko Mining Services",
    description: "We Support The Junior Mining Sector with accessible & sustainable mining services that guarantee success.",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D4A84B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
