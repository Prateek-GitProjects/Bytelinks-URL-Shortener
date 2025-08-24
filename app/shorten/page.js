"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState();

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="relative min-h-[80.6vh] flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 overflow-hidden">
      {/* 🔹 Animated floating background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-purple-400 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-56 h-56 bg-pink-400 opacity-30 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 opacity-40 rounded-full blur-2xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* 🔹 Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-lg bg-white/70 backdrop-blur-xl shadow-2xl p-10 rounded-2xl flex flex-col gap-6 border border-purple-200"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-3xl text-center text-purple-700"
        >
           Generate your short URLs
        </motion.h1>

        <div className="flex flex-col gap-4">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            value={url}
            className="px-4 py-3 rounded-lg border-2 border-purple-300 focus:outline-purple-600 shadow-md"
            placeholder="🔗 Enter your URL"
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            value={shorturl}
            className="px-4 py-3 rounded-lg border-2 border-pink-300 focus:outline-pink-500 shadow-md"
            placeholder="✍️ Enter your preferred short URL text"
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={generate}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg py-3 font-bold text-white mt-3"
          >
             Generate
          </motion.button>
        </div>

        {generated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-center"
          >
            <span className="font-bold text-lg text-purple-700">
              🎉 Your Link:
            </span>
            <br />
            <code className="text-indigo-600 font-semibold">
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
};

export default shorten;
