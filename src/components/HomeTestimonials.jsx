import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    review: "Absolutely loved the fragrance and the packaging! It felt like a luxury experience.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Ramesh Tiwari",
    review: "Fast delivery and the scent lasted all day. Highly recommended!",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aisha Khan",
    review: "Beautifully curated perfumes. I gifted one and they were so impressed!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }
  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }
  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />);
  }
  return stars;
};

export default function HomeTestimonials() {
  return (
    <section className=" mt-4 rounded-xl bg-gradient-to-br from-[#957f7f] via-[#5f5252] to-[#0d0d0d] dark:bg-[#1a1a1a] py-16 px-4 sm:px-8 lg:px-20">

      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12">
          Real stories from real buyers. Here’s what they’re saying about our fragrances.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-[#262626] p-6 rounded-2xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t.name}</h4>
                  <div className="flex text-sm">{getStars(t.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                “{t.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
