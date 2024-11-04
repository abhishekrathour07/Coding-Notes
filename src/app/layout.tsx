import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotesTherapy",
  description: "Detailed notes of coding language | JavaScript notes | tailwind Notes | React Notes |Next js notes | c language notes | notes for BCA | Java Notes | Python Notes ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center p-2">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
