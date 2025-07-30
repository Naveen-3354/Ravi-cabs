import React from 'react';
import { FaUserTie, FaGasPump, FaSuitcase, FaCar, FaUsers } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';

export default function VehicleCard({ image, name, seat, bags, type, fuel, price, isService, rate, driverBetta }) {
  if (isService) {
    return (
      <div className="group bg-white flex flex-col overflow-hidden h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          <div className="absolute right-4 bottom-0 translate-y-1/2 bg-white rounded-xl shadow-lg px-5 py-3 flex flex-col items-center border-b-4 border-orange-500 min-w-[110px]">
            <span className="text-xl font-bold text-orange-600">₹{rate}</span>
            <span className="text-xs text-gray-500 font-medium">per km</span>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
              <FaUserTie className="text-orange-500" />
              <span>₹{driverBetta}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-between p-5 bg-gray-50">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-700 bg-orange-50 px-3 py-2 rounded-lg">
              <FaUserTie className="text-orange-600" />
              <span>Driver Betta: ₹{driverBetta}/day</span>
            </div>
          </div>
          
          <button className="mt-4 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white flex flex-col overflow-hidden h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="absolute bg-gray-500/50 right-4 bottom-6 translate-y-1/2 bg-white rounded-xl shadow-lg px-5 py-3 flex flex-col items-center border-b-4 border-orange-500 min-w-[110px]">
          <span className="text-xl font-bold text-black">₹{price}</span>
          <span className="text-xs text-black font-medium">per km</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-5 bg-gray-50">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          
          <div className="grid grid-cols-2 gap-3 text-sm text-black mb-4">
            <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg">
              <FaUsers className="text-orange-500" />
              <span>{seat} Seats</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg">
              <FaSuitcase className="text-orange-500" />
              <span>{bags} Bags</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 py-2 bg-gray-800 hover:bg-black text-white font-medium rounded-lg transition-colors duration-300">
            Details
          </button>
          <button className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}