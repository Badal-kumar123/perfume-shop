import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="text-center mb-10 text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have a question or feedback? We’d love to hear from you!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full pl-10 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full pl-10 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="relative">
          <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (Optional)"
            className="w-full pl-10 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="relative col-span-1 md:col-span-2">
          <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full pl-10 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded text-lg transition"
        >
          Send Message
        </button>
      </motion.form>

      {submitted && (
        <motion.div
          className="mt-6 text-green-600 font-medium text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Your message has been sent successfully!
        </motion.div>
      )}

      {/* Google Map */}
      <motion.div
        className="mt-12 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.820399391068!2d90.36393501445713!3d23.830332684553105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16836d3c46a8dc1e!2sGoogle!5e0!3m2!1sen!2sin!4v1618307086815!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}
