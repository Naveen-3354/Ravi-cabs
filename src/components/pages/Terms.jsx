import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '../WhatsappButton';


const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState('oneWay');
  const isOneWay = activeTab === 'oneWay';
  const imageSrc = isOneWay ? '/images/etios_right3.png' : '/images/Ertiga_left.png';

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-10 mt-2 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-lg text-blue-600">Transparent pricing for your journeys</p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-50 rounded-full shadow-md p-1 border border-blue-100">
            <button
              onClick={() => setActiveTab('oneWay')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isOneWay ? 'bg-yellow-600 text-white shadow' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              One Way Trips
            </button>
            <button
              onClick={() => setActiveTab('round')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isOneWay ? 'bg-yellow-600 text-white shadow' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Round Trips
            </button>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 border border-blue-100"
        >
          <div className={`flex flex-col md:flex-row items-center gap-6 ${isOneWay ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={imageSrc}
                alt={isOneWay ? "One Way Trip Car" : "Round Trip Car"}
                className="w-full h-auto max-h-64 object-contain rounded-xl "
              />
            </div>

            {/* Terms */}
            <div className="w-full md:w-1/2 space-y-5">
              <h2 className="text-2xl font-bold text-blue-700">
                {isOneWay ? 'One Way Trips Tariff' : 'Round Trips Terms'}
              </h2>

              {isOneWay ? (
                <>
                  <TermItem title="Driver Betta" value="Rs. 300" icon="💰" />
                  <TermItem title="Driver Betta above 400 km" value="Rs. 500" icon="🛣️" />
                  <TermItem title="One Way Drop Trips" value="Minimum 130 kms" icon="📍" />
                  <TermItem title="Hills Station Charges" value="Rs. 300" icon="⛰️" />
                  <TermItem title="Additional charges" value="Toll, Permit, Airport & Parking extra" icon="➕" />
                  <TermItem title="Waiting Charges" value="Rs. 150 per hours (First 30 min for food free)" icon="⏱️" />
                  <TermItem title="Luggage Capacity" value="Sedan: 3 bags, SUV: 4 bags" icon="🧳" />
                </>
              ) : (
                <>
                  <TermItem title="Driver Betta" value="Rs. 400" icon="💰" />
                  <TermItem title="Driver Betta above 400 km" value="Rs. 600" icon="🛣️" />
                  <TermItem title="Round Trips" value="Min 250 kms/day. Bengaluru: 300 kms/day" icon="🔁" />
                  <TermItem title="Hills Station Charges" value="Rs. 300" icon="⛰️" />
                  <TermItem title="Additional charges" value="Toll, Permit, Airport & Parking extra" icon="➕" />
                </>
              )}
            </div>
          </div>
        </motion.div>
        {/* General Terms Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-10 bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-blue-100"
>
  <div className="flex flex-col md:flex-row items-center gap-6">
    
    {/* Left Side - Terms List */}
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">General Terms of Service</h2>

      <ul className="space-y-4 text-gray-700 text-sm list-disc pl-6">
        <li><strong>Booking Confirmation:</strong> Bookings must be confirmed via phone, website, or app.</li>
        <li><strong>Vehicle Substitution:</strong> In case of unavailability, we may provide a similar or upgraded vehicle.</li>
        <li><strong>Driver Conduct:</strong> All drivers are instructed to maintain polite and safe driving practices.</li>
        <li><strong>Customer Responsibility:</strong> Any damage to the vehicle due to negligence is the customer's responsibility.</li>
        <li><strong>No Smoking Policy:</strong> Smoking and consumption of alcohol is strictly prohibited inside the vehicle.</li>
        <li><strong>Emergency Support:</strong> 24/7 customer support is available in case of emergencies.</li>
      </ul>
    </div>

    {/* Right Side - Car Image */}
    <div className="w-full md:w-1/3">
      <img
        src="/images/etios_right3.png" // Change to your preferred image path
        alt="Car Image"
        className="w-full h-auto object-contain rounded-xl"
      />
    </div>
  </div>
</motion.div>

      </div>
    </div>
  );
};

// Term Item component
const TermItem = ({ title, value, icon }) => (
  <motion.div whileHover={{ x: 5 }} className="flex items-start">
    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{value}</p>
    </div>
<WhatsAppButton />
  </motion.div>
);

export default TermsAndConditions;
