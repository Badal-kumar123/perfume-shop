// AboutTestimonials.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Neha Verma",
    location: "Delhi, India",
    review:
      "Discovering this perfume shop was a game-changer. As someone who’s very particular about scents, I was impressed by how carefully each product is curated. It feels like shopping in a boutique in Paris — only online!",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
  },
  {
    name: "Anil Kapoor",
    location: "Mumbai, India",
    review:
      "I’ve been a repeat customer for over a year. The quality, packaging, and scent profiles make every purchase feel special. I even got personalized recommendations once — amazing experience!",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4.5,
  },
];

export default function AboutTestimonials() {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (halfStar) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />);
    return <div className="flex gap-1 mt-1">{stars}</div>;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-8 py-16 px-4 sm:px-8 lg:px-24 bg-[#fcfcfb] dark:bg-[#625e5e] rounded-xl"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Customers Say
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="max-w-2xl mx-auto bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.location}</p>
                  {renderStars(t.rating)}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">“{t.review}”</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
