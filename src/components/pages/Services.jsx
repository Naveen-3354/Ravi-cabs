import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Car data with complete information
const carList = [
  {
    id: 1,
    name: "Ertiga",
    oneWay: "19 Rs/KM",
    roundTrip: "18 Rs/KM",
    seat: "7+1",
    ac: true,
    image: "/images/Ertiga_left.png",
  },
  {
    id: 2,
    name: "Etios",
    oneWay: "15 Rs/KM",
    roundTrip: "14 Rs/KM",
    seat: "4+1",
    ac: true,
    image: "/images/etios_right2.png",

  },
  {
    id: 3,
    name: "Suv. Innova",
    oneWay: "20 Rs/KM",
    roundTrip: "19 Rs/KM",
    seat: "7+1",
    ac: true,
    image: "/images/Innova_Right.png",
  },
  {
    id: 4,
    name: "Xylo",
    oneWay: "19 Rs/KM",
    roundTrip: "18 Rs/KM",
    seat: "7+1",
    ac: true,
    image: "/images/xylo.jpeg",
  },
  {
    id: 5,
    name: "Swift",
    oneWay: "14 Rs/KM",
    roundTrip: "13 Rs/KM",
    seat: "4+1",
    ac: true,
    image: "/images/swift.png",
  },
    {
    id: 6,
    name: "Innova Crysta",
    oneWay: "20 Rs/KM",
    roundTrip: "19 Rs/KM",
    seat: "7+1",
    ac: true,
    image: "/images/crysta.jpeg",
  },
];

// Tabs and labels
const TABS = [
  { key: "oneWay", label: "ONE WAY TARIFF", driverBetta: 400 },
  { key: "roundTrip", label: "ROUND TRIP TARIFF", driverBetta: 400 },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("oneWay");
  const [selectedCar, setSelectedCar] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const currentTab = TABS.find((tab) => tab.key === activeTab);
  const driverBetta = currentTab?.driverBetta || 400;

    const navigate = useNavigate();

  const handleBookNow = (car) => {
    // setSelectedCar(car);
    // setFormData(prev => ({
    //   ...prev,
    //   carType: car.name,
    //   tripType: activeTab
    // }));
    // setShowBookingForm(true);
      navigate('/#my-section');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Booking request submitted successfully! We will contact you shortly.');
    setShowBookingForm(false);
  };

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

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {carList.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100 transition-all duration-300 hover:shadow-2xl">
              {/* Vehicle Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Vehicle Details */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                  </div>
                  <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {car.seat} seats
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">
                      {activeTab === "oneWay" ? "One Way" : "Round Trip"}
                    </span>
                    <span className="text-xl font-bold text-primary-600">
                      {activeTab === "oneWay" ? car.oneWay : car.roundTrip}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Driver Beta: ₹{driverBetta} 
                  </div>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={() => handleBookNow(car)}
                  className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}