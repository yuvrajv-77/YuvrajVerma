import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Outfit({ weight: ['400','500','600','700','800','900'] ,subsets: ['latin'],});

export const metadata: Metadata = {
  title: "Yuvraj Verma",
  description: "Hello, I am Yuvraj Verma A Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
