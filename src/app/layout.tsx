import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

import "./globals.css";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Next JS Practice Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
