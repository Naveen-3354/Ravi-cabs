import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VehicleCard from "../VehicleCard";
import { FaClock, FaUserShield, FaMoneyBillWave } from 'react-icons/fa';
import WhatsAppButton from "../WhatsappButton";

// Enhanced car data with more details
const carList = [
  {
    id: 1,
    name: " Innova",
    type: "Premium SUV",
    oneWayRate: 20,
    roundTripRate: 19,
    image: "/images/Innova_Right.png",
    ac: true,
    seats: 7,
    bags: 4,
    icon: "/icons/suv-icon.svg",
    features: ["AC", "Spacious", "Comfort Seats"],
  },
  {
    id: 2,
    name: "Toyota Etios",
    type: "Sedan",
    oneWayRate: 14,
    roundTripRate: 13,
    image: "/images/etios_right2.png",
    ac: true,
    seats: 5,
    bags: 2,
    icon: "/icons/sedan-icon.svg",
    features: ["AC", "Fuel Efficient", "Smooth Ride"],
  },
  {
    id: 3,
    name: "Maruti Swift",
    type: "Hatchback",
    oneWayRate: 14,
    roundTripRate: 13,
    image: "/images/swift.png",
 
  },
  {
    id: 4,
    name: "Innova Crysta",
    type: "Luxury SUV",
    oneWayRate: 20,
    roundTripRate: 19,
    image: "/images/Innova_Rear.png",
  
  },
  {
    id: 5,
    name: "Swift Dzire",
    type: "Compact Sedan",
    oneWayRate: 14,
    roundTripRate: 13,
    image: "/images/swift.png",
 
  },
];

const TABS = [
  { 
    key: "oneWay", 
    label: "One Way Trip", 
    description: "Perfect for single journeys",
    driverBetta: 300 
  },
  { 
    key: "roundTrip", 
    label: "Round Trip", 
    description: "Best for return journeys",
    driverBetta: 400 
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("oneWay");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const currentTab = TABS.find((tab) => tab.key === activeTab);
  const driverBetta = currentTab?.driverBetta || 300;

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-orange-500 to-amber-500 opacity-5 -rotate-1 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-amber-100 opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-orange-600 uppercase rounded-full bg-orange-50 mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Perfect Ride</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Premium vehicles with professional drivers at competitive rates
          </p>
        </motion.div>

        {/* Tab Buttons with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-8 py-4 text-base font-medium rounded-xl transition-all duration-300 flex-1 sm:flex-none border-2 overflow-hidden group
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent shadow-lg shadow-orange-100"
                    : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:shadow-md"
                }`}
            >
              {activeTab === tab.key && (
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              )}
              <span className="relative z-10 flex flex-col items-center">
                <span className="block text-lg font-semibold">{tab.label}</span>
                <span className="block text-sm font-normal mt-1 opacity-80">{tab.description}</span>
              </span>
            </button>
          ))}
        </motion.div>
        

        {/* Tab Content with animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="wait">
            {carList.map((car) => (
              <motion.div
                key={`${car.id}-${activeTab}`}
                variants={fadeIn}
                layout
              >
                <VehicleCard 
                  {...car} 
                  rate={activeTab === 'oneWay' ? car.oneWayRate : car.roundTripRate}
                  isService={true}
                  driverBetta={driverBetta}
                  ac={car.ac}
                  seats={car.seats}
                  bags={car.bags}
                  icon={car.icon}
                  features={car.features}
                  rating={car.rating}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 md:mt-28"
        >
     <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-1 max-w-6xl mx-auto overflow-hidden border border-gray-100">
  <div className="bg-white rounded-xl p-8 md:p-12">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
      Why Travel With Us?
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: <FaClock className="h-8 w-8" />,
          title: "24/7 Availability",
          description: "Book anytime, anywhere with our round-the-clock service"
        },
        {
          icon: <FaUserShield className="h-8 w-8" />,
          title: "Verified Drivers",
          description: "Professional, trained and background-checked chauffeurs"
        },
        {
          icon: <FaMoneyBillWave className="h-8 w-8" />,
          title: "No Hidden Costs",
          description: "Transparent pricing with no surprises"
        }
      ].map((item, index) => (
        <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-5 text-orange-600">
            {item.icon}
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
        </motion.div>
      </div>

      <WhatsAppButton />
    </section>
  );
}