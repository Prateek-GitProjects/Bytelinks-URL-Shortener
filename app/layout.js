import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bytelinks - Your trusted URL shortener",
  description: "Bytelinks helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/unlink.png" sizes="any" />
      </head>
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
