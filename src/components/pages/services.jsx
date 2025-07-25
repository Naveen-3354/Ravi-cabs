import { useState } from "react";
import { FaUserTie } from "react-icons/fa";

// Common car data used for both tabs
const carList = [
  {
    type: "Ertiga",
    description: "Swift Dzire, Etios and Similar",
    rate: 19,
    image: "/images/Ertiga_left.png",
  },
  {
    type: "Etios",
    description: "Xylo",
    rate: 19,
    image: "/images/etios_right2.png",
  },
  {
    type: "Suv. Innova",
    description: "Innova",
    rate: 20,
    image: "/images/Innova_Right.png",
  },
  {
    type: "Suv.creta",
    description: "Marazzo, Ertiga, Lodgy and Similar",
    rate: 20,
    image: "/images/Creta_right.png",
  },
    {
    type: "Swift",
    description: "swift dizer + cng",
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
    <section className="py-10 bg-[#fffbea] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          OUR TARIFF
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 text-sm font-semibold rounded-t-md border-b-2 transition-all duration-300
                ${
                  activeTab === tab.key
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carList.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.type}
                className="w-full h-48 object-contain p-4"
              />
              <div className="bg-red-600 text-white p-4 space-y-1">
                <h3 className="text-xl font-semibold">{car.type}</h3>
                <p className="text-sm">{car.description}</p>
                <p className="text-lg font-medium">₹ {car.rate} /Km</p>
                <div className="flex items-center gap-2 mt-2">
                  <FaUserTie />
                  <span>Driver Betta ₹{driverBetta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
