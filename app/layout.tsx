import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siko Mining Services",
  description: "We Support The Junior Mining Sector with accessible & sustainable mining services that guarantee success.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
