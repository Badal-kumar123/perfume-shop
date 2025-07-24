import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import AboutTestimonials from "../components/AboutTestimonials";


export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 min-h-screen px-4 py-16">
      {/* Section: About Me */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <img
  src="/images/badal.jpg"
  alt="Badal Kumar"
  className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg object-cover transition duration-300 hover:scale-105 hover:shadow-2xl"
/>

        <h1 className="text-4xl font-bold mb-2">Hi, I'm Badal Kumar 👋</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A passionate indie developer and the mind behind this perfume experience. 
          This project isn’t just code — it’s a dream built through late nights, 
          self-doubt, courage, and endless cups of chai.
        </p>
      </motion.div>

      {/* Section: Story */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-16 max-w-4xl mx-auto text-left space-y-6"
      >
        <h2 className="text-3xl font-semibold">My Journey 🚀</h2>
        <p>
          I come from a place where dreams feel too expensive, and building a full-stack perfume marketplace
          seemed impossible. But I chose to believe — in hard work, in myself, and in the power of fragrance
          to trigger emotion and memory.
        </p>
        <p>
          I taught myself code, piece by piece. Faced bugs that made me cry, deadlines that felt endless,
          and resources I couldn’t afford. But with each error, I got better. I pushed through. I built this.
        </p>
        <p>
          Today, what you see is more than a store. It’s proof that passion, consistency, and grit can turn
          an idea into a living experience. One click, one scent, one dream at a time.
        </p>
      </motion.div>

      {/* Section: Why Perfume */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mt-16 max-w-4xl mx-auto text-left space-y-6"
      >
        <h2 className="text-3xl font-semibold">Why Perfume? 🌸</h2>
        <p>
          Perfume is not just fragrance — it’s identity. It’s confidence in a bottle. 
          It’s nostalgia. That one scent that reminds you of someone special, a festival, a rainy day.
        </p>
        <p>
          I wanted to create a place where people could discover that — not just products, 
          but their *signature*. A reflection of who they are.
        </p>
      </motion.div>

      {/* Section: Vision */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 max-w-4xl mx-auto text-left space-y-6"
      >
        <h2 className="text-3xl font-semibold">What’s Next? 🌱</h2>
        <p>
          I’m constantly learning, improving, and dreaming bigger. This is just the beginning. 
          Expect more features, better experiences, and maybe — your own custom fragrance finder. 😉
        </p>
        <p>
          Thanks for believing in creators like me. You make this real. 💙
        </p>
      </motion.div>

      {/* Social Links */}
      
      <AboutTestimonials />
      <div className="mt-12 flex justify-center space-x-6 text-2xl text-blue-600">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

    </div>
  );
}
