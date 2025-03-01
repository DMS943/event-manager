import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const popins = Poppins({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "PADMJ",
  description: "Evently is a platform for event management.",
  icons:{
    icon:'/assets/image/logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body  className={`${popins.variable}  antialiased`}>{children}
        </body>
    </html>
    </ClerkProvider>
  );
}
