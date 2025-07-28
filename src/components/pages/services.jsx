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

  // Find driver betta based on active tab
  const currentTab = TABS.find((tab) => tab.key === activeTab);
  const driverBetta = currentTab?.driverBetta || 300;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-600">Tariff</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our wide range of vehicles with competitive pricing and professional drivers
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-12 md:mb-16">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 flex-1 sm:flex-none border-2
                ${
                  activeTab === tab.key
                    ? "bg-orange-600 text-white border-orange-600 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-orange-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* One Way Tab */}
          {activeTab === "oneWay" && (
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
          )}

          {/* Round Trip Tab */}
          {activeTab === "roundTrip" && (
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
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gray-50 rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Why Choose Our Service?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <div className="text-orange-600 text-xl font-bold mb-2">24/7</div>
                <p className="text-gray-600">Available Service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="text-orange-600 text-xl font-bold mb-2">100%</div>
                <p className="text-gray-600">Safe & Secure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div className="text-orange-600 text-xl font-bold mb-2">Free</div>
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
