"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-h-[80.6vh] bg-gradient-to-b from-white to-purple-50 flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-8"
      >
        About Us
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-12"
      >
        Welcome to our project! 🚀  
        We’re passionate about building tools that make your digital life easier.  
        This website was crafted with modern technologies like <span className="font-bold">Next.js, Tailwind, MongoDB, and Framer Motion </span> 
        to provide a smooth, clean, and enjoyable user experience.
      </motion.p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {[
          {
            title: "Our Mission",
            desc: "To simplify complex tasks with elegant solutions and empower users with intuitive tools."
          },
          {
            title: "Our Vision",
            desc: "To create a hub where technology meets creativity, innovation, and accessibility."
          },
          {
            title: "Our Values",
            desc: "User-first design, transparency, continuous learning, and a passion for coding ❤️."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border border-purple-200"
          >
            <h2 className="text-2xl font-bold text-purple-600 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mt-16"
      >
        <a
          href="/contact"
          className="px-8 py-3 bg-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-purple-700 transition"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}
