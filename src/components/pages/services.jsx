import { useState } from "react";
import VehicleCard from "../VehicleCard";
import WhatsAppButton from "../WhatsappButton";

// Car data structured for VehicleCard component with service information
const carList = [
  {
    name: "Innova",
    type: "SUV.INNOVA",
    rate: 19,
    image: "/images/Ertiga_left.png",
  },
  {
    name: "Etios",
    type: "Xylo",
    rate: 19,
    image: "/images/etios_right2.png",
  },
  {
    name: "Suv. Innova",
    type: "Innova",
    rate: 20,
    image: "/images/Innova_Right.png",
  },
  {
    name: "Suv.creta",
    type: "Marazzo, Ertiga, Lodgy and Similar",
    rate: 20,
    image: "/images/Creta_right.png",
  },
  {
    name: "Swift",
    type: "swift dizer + cng",
    rate: 19,
    image: "/images/swift.png",
  },
];

// Tabs and labels
const TABS = [
  { key: "oneWay", label: "ONE WAY TARIFF", driverBetta: 300 },
  { key: "roundTrip", label: "ROUND TRIP TARIFF", driverBetta: 400 },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("oneWay");

  const currentTab = TABS.find((tab) => tab.key === activeTab);
  const driverBetta = currentTab?.driverBetta || 300;

  return (
    <section className="mt-24 md:mt-12 bg-gradient-to-br from-primary-50 via-white to-primary-50 py-14 md:py-18 lg:py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
            Our Tariff
          </h2>
          <p className="mt-2 text-lg text-primary-600">Transparent pricing for your journeys</p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary-400 to-primary-200 mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-50 rounded-full shadow-md p-1 border border-primary-100">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-yellow-600 text-white shadow'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 border border-primary-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {carList.map((car, index) => (
              <VehicleCard
                key={index}
                {...car}
                isService={true}
                driverBetta={driverBetta}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10">
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-primary-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose Our Service?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <div className="text-primary-600 text-xl font-bold mb-2">24/7</div>
                <p className="text-gray-600">Available Service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="text-primary-600 text-xl font-bold mb-2">100%</div>
                <p className="text-gray-600">Safe & Secure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div className="text-primary-600 text-xl font-bold mb-2">Free</div>
                <p className="text-gray-600">Cancellation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
}
