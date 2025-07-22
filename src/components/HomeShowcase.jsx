import { useEffect, useState } from 'react';

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
  const [brandIndex, setBrandIndex] = useState(0);
  const [perfumeIndex, setPerfumeIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const brandTimer = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % brandImages.length);
    }, 5000);

    const perfumeTimer = setInterval(() => {
      setPerfumeIndex((prev) => (prev + 1) % upcomingPerfumes.length);
    }, 5000);

    return () => {
      clearInterval(brandTimer);
      clearInterval(perfumeTimer);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Brand Collaboration */}
      <div className="rounded-lg overflow-hidden shadow-lg relative h-64 md:h-96">
        <img
          src={brandImages[brandIndex]}
          alt="Brand Collaboration"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 text-lg">
          🤝 Brand Collaboration
        </div>
      </div>

      {/* Right: Upcoming Perfumes */}
      <div className="rounded-lg overflow-hidden shadow-lg relative h-64 md:h-96">
        <img
          src={upcomingPerfumes[perfumeIndex]}
          alt="Upcoming Perfume"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 text-lg">
          🚀 Upcoming Perfume
        </div>
      </div>
    </section>
  );
}
