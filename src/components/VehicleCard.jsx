import React from 'react';
import { FaUserTie } from "react-icons/fa";

export default function VehicleCard({ image, name, seat, bags, type, fuel, price, isService, rate, driverBetta }) {
  if (isService) {
    // Service card layout with same theming as homepage vehicle cards
    return (
      <div className="bg-white flex flex-col overflow-hidden h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-56 object-contain rounded-t-3xl bg-white" 
          />
          {/* Price tab right-aligned */}
          <div className="absolute right-6 bottom-0 translate-y-1/2 bg-white rounded-t-2xl shadow px-7 py-4 flex flex-col items-center border-b-2 border-orange-500 min-w-[120px]" style={{right: 24}}>
            <span className="text-2xl font-bold text-orange-600">₹{rate}</span>
            <span className="text-xs text-gray-500 font-semibold">/ Km</span>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
              <FaUserTie className="text-xs" />
              <span>₹{driverBetta}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between p-6 pt-10 bg-gray-50">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-sm text-gray-600 mb-3">{type}</p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaUserTie className="text-orange-600" />
              <span>Driver Betta ₹{driverBetta}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original vehicle card layout
  return (
    <div className="bg-white flex flex-col overflow-hidden h-full">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-contain rounded-t-3xl bg-white" />
        {/* Price tab right-aligned */}
        <div className="absolute right-6 bottom-0 translate-y-1/2 bg-white rounded-t-2xl shadow px-7 py-4 flex flex-col items-center border-b-2 border-orange-500 min-w-[120px]" style={{right: 24}}>
          <span className="text-2xl font-bold text-orange-600">₹{price}</span>
          <span className="text-xs text-gray-500 font-semibold">/ L</span>
          <button className="mt-2 px-4 py-1 rounded bg-black text-white text-xs font-semibold hover:bg-gray-800 transition">DETAIL</button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between p-6 pt-10 bg-gray-50">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-2">
            <span className="flex items-center gap-1"><span role="img" aria-label="seat">🪑</span> {seat} Seat</span>
            <span className="flex items-center gap-1"><span role="img" aria-label="bags">🧳</span> {bags} Bags</span>
            <span className="flex items-center gap-1"><span role="img" aria-label="type">🚗</span> {type}</span>
          </div>
          <div className="flex gap-2 text-xs font-semibold mt-2">
            <span className={fuel === 'Petrol' ? 'text-orange-600' : 'text-gray-400 line-through'}>Petrol</span>
            <span className={fuel === 'Diesel' ? 'text-orange-600' : 'text-gray-400 line-through'}>Diesel</span>
            <span className={fuel === 'Electric' ? 'text-orange-600' : 'text-gray-400 line-through'}>Electric</span>
          </div>
        </div>
      </div>
    </div>
  );
} 