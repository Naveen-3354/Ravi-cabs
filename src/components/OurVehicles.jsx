import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import VehicleCard from './VehicleCard';

const cars = [
  {
    name: 'Innova',
    image: '/images/Innova_Right.png',
    seat: 7,
    bags: 4,
    type: 'SUV',
    fuel: 'Diesel',
    price: 17,
  },
  {
    name: 'Etios',
    image: '/images/etios_right2.png',
    seat: 5,
    bags: 3,
    type: 'Sedan',
    fuel: 'Petrol',
    price: 16,
  },
  {
    name: 'Creta',
    image: '/images/Creta_right.png',
    seat: 5,
    bags: 4,
    type: 'SUV',
    fuel: 'Diesel',
    price: 18,
  },
  {
    name: 'Ertiga',
    image: '/images/Ertiga_left.png',
    seat: 7,
    bags: 4,
    type: 'MPV',
    fuel: 'Petrol',
    price: 15,
  },
  {
    name: 'Swift',
    image: '/images/swift.png',
    seat: 5,
    bags: 2,
    type: 'Hatchback',
    fuel: 'Petrol',
    price: 14,
  },
  {
    name: 'Etios Front',
    image: '/images/etios_Front.png',
    seat: 5,
    bags: 3,
    type: 'Sedan',
    fuel: 'Electric',
    price: 19,
  },
];

const breakpoints = [
  { width: 1024, cards: 3 }, // lg+
  { width: 640, cards: 2 }, // md
  { width: 0, cards: 1 },   // sm
];

const gap = 32; // px (Tailwind gap-8)

const infiniteCars = [...cars, ...cars];

function getCardsPerView(width) {
  for (const bp of breakpoints) {
    if (width >= bp.width) return bp.cards;
  }
  return 1;
}

export default function OurVehicles() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const totalCards = infiniteCars.length;
  const maxIndex = cars.length;
  const autoScrollDelay = 2200; // ms

  // Responsive card width
  let cardsPerView = getCardsPerView(windowWidth);
  let cardWidth = 340;
  if (windowWidth < 1024 && windowWidth >= 640) cardWidth = 300;
  if (windowWidth < 640) cardWidth = 90 * windowWidth / 100; // 90vw for mobile
  const slideWidth = cardWidth + gap;

  // Only show N cards at a time, hide overflow
  const containerStyle = {
    width: `${cardsPerView * cardWidth + (cardsPerView - 1) * gap}px`,
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: '100vw',
  };

  // Responsive: update on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move carousel left
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
  };

  // Move carousel right
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % maxIndex);
  };

  // Animate carousel
  useEffect(() => {
    controls.start({
      x: -index * slideWidth,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    });
  }, [index, controls, slideWidth]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % maxIndex);
    }, autoScrollDelay);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="w-full py-12 px-2 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-700">
          Our <span className="text-orange-600 font-bold">Vehicles</span>
        </h2>
        <div className="relative flex flex-col items-center">
          <div style={containerStyle}>
            <motion.div
              className="flex gap-8"
              animate={controls}
              style={{ width: `${slideWidth * totalCards}px` }}
            >
              {infiniteCars.map((car, i) => (
                <div key={i} style={{ minWidth: cardWidth, maxWidth: cardWidth }}>
                  <VehicleCard {...car} />
                </div>
              ))}
            </motion.div>
          </div>
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="border-2 border-orange-500 text-orange-500 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-orange-50 transition"
              aria-label="Previous"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="border-2 border-orange-500 text-orange-500 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-orange-50 transition"
              aria-label="Next"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 