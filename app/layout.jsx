"use client"; // Mark this component as a Client Component

import { usePathname } from "next/navigation";
import { HomeSideBar } from "./components/common/SideBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDetailsPage = pathname.includes("/read-full-artical");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!isDetailsPage ? (
          <main className="grid grid-cols-12 h-screen overflow-hidden">
            <div className="col-span-2">
              <HomeSideBar />
            </div>
            <div className="col-span-10 ">{children}</div>
          </main>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
