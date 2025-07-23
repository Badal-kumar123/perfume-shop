// components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import modelImage from "../assets/model-with-perfume.png";
import logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#fbeee0] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 overflow-hidden">
      {/* Logo */}
      

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Discover Your Signature Scent
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Luxury fragrances crafted to perfection. Feel elegant, smell divine.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-rose-500 transition">
          Shop Now
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={modelImage}
        alt="Model with Perfume"
         className="rounded-xl w-[85%]  max-w-md md:max-w-lg mt-10 md:mt-0 md:w-auto md:h-[85vh] object-cover md:absolute right-0 top-0 opacity-90"
      />
    </section>
  );
}
