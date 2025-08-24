"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="relative max-h-[80.6vh] bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 overflow-hidden">
      
      {/* Floating background shapes */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-purple-400 opacity-30 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.4, 1], rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-pink-400 opacity-30 blur-3xl"
      />

      <section className="grid md:grid-cols-2 gap-6 items-center h-[90vh] px-8 md:px-20 relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 items-start justify-center text-center md:text-left"
        >
          <p
            className={`text-4xl md:text-6xl font-bold leading-snug ${poppins.className}`}
          >
            The Best <span className="text-purple-600">URL Shortener</span>
            <br /> in the Market 🚀
          </p>
          <p className="md:px-0 text-gray-700 max-w-lg">
            We are the most straightforward URL Shortener in the world.
            Unlike others, we <span className="font-semibold">don’t track you</span> or
            ask unnecessary logins. Just shorten and share instantly.
          </p>

          <div className="flex gap-4 mt-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/shorten">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl px-6 py-3 font-bold text-white hover:shadow-2xl transition">
                  Try Now
                </button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/github" target="_blank">
                <button className="border-2 border-purple-500 text-purple-600 rounded-xl shadow-md px-6 py-3 font-bold hover:bg-purple-500 hover:text-white transition">
                  GitHub
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image (using <img> to avoid config error) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src="/image-1.png"
              alt="Vector illustration"
              className="rounded-2xl shadow-2xl w-[500px] "
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
