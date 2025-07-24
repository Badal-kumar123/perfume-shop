import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const brandImages = [
  '/images/brand1.jpg',
  '/images/brand2.jpg',
  '/images/brand3.jpg',
];

const upcomingPerfumes = [
  '/images/upcoming1.jpg',
  '/images/upcoming2.jpg',
  '/images/upcoming3.jpg',
];

export default function HomeShowcase() {
  return (
    <section className="max-w-7xl mx-auto my-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Brand Collaboration Swiper */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative rounded-lg overflow-hidden shadow-xl"
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{ delay: 4000 }}
          effect="fade"
          loop={true}
          pagination={{ clickable: true }}
          className="h-72 md:h-96"
        >
          {brandImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Brand ${idx}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
       <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur text-white px-4 py-2 rounded-md shadow-md text-base md:text-lg">
  🤝 Brand Collaboration
</div>


      </motion.div>

      {/* Upcoming Perfume Swiper */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative rounded-lg overflow-hidden shadow-xl"
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{ delay: 4000 }}
          effect="fade"
          loop={true}
          pagination={{ clickable: true }}
          className="h-72 md:h-96"
        >
          {upcomingPerfumes.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Upcoming ${idx}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur text-white px-4 py-2 rounded-md shadow-md text-base md:text-lg">
  🚀 Upcoming Perfume
</div>

      </motion.div>
    </section>
  );
}
