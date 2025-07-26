import { useState } from 'react';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('oneWay');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    
    return (
        <>
            <div className="px-0 pb-0 pt-0 lg:px-24 lg:pb-24 lg:pt-12">
                <div
                    className="w-full bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 mt-20 lg:mt-0 flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Section */}
                        <div className="w-full lg:w-1/2 text-white">
                            {/* <p className="text-sm tracking-widest text-orange-500 uppercase mb-2">- Premium -</p> */}
                            <h1 className="text-4xl md:text-5xl font-light leading-tight">
                                The Best Rent 
                                <span className="font-bold text-orange-500 ms-4">Cars & Bikes</span>
                            </h1>

                            {/* Booking Form */}
                            <div className="mt-8 bg-black/80 backdrop-blur-sm rounded-xl text-white p-4 md:p-6 w-full max-w-xl relative z-20 border border-gray-700/50">
                                {/* <p className="font-medium mb-6 text-lg">Available For Rent</p> */}

                                {/* Material UI Style Tabs */}
                                <div className="relative mb-8">
                                    {/* Tab Indicator */}
                                    <div className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-in-out"
                                         style={{
                                             width: activeTab === 'oneWay' ? '33.33%' : activeTab === 'roundTrip' ? '33.33%' : '33.33%',
                                             transform: `translateX(${activeTab === 'oneWay' ? '0%' : activeTab === 'roundTrip' ? '100%' : '200%'})`
                                         }}>
                                    </div>
                                    
                                    {/* Tab Buttons */}
                                    <div className="flex border-b border-gray-600">
                                        <button
                                            onClick={() => setActiveTab('oneWay')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
                                                activeTab === 'oneWay' 
                                                    ? 'text-orange-500' 
                                                    : 'text-gray-400 hover:text-gray-300'
                                            }`}
                                        >
                                            One Way
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('roundTrip')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
                                                activeTab === 'roundTrip' 
                                                    ? 'text-orange-500' 
                                                    : 'text-gray-400 hover:text-gray-300'
                                            }`}
                                        >
                                            Round Trip
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('airportTaxi')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
                                                activeTab === 'airportTaxi' 
                                                    ? 'text-orange-500' 
                                                    : 'text-gray-400 hover:text-gray-300'
                                            }`}
                                        >
                                            Airport Taxi
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    {/* One Way Tab */}
                                    {activeTab === 'oneWay' && (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Vehicle Type</label>
                                                    <select className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400">
                                                        <option className="text-gray-800">Select vehicle type</option>
                                                        <option className="text-gray-800">Sedan</option>
                                                        <option className="text-gray-800">SUV</option>
                                                        <option className="text-gray-800">Innova</option>
                                                          <option className="text-gray-800">Etios</option>
                                                    </select>
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your full name"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Mobile Number</label>
                                                    <input
                                                        type="tel"
                                                        placeholder="Enter mobile number"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Pickup Location</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter pickup location"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Drop Location</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter drop location"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="relative">
                                                        <label className="block text-xs font-medium text-gray-300 mb-1">Date</label>
                                                        <input
                                                            type="date"
                                                            className="w-full bg-white/10 border border-gray-600 text-white px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block text-xs font-medium text-gray-300 mb-1">Time</label>
                                                        <input
                                                            type="time"
                                                            className="w-full bg-white/10 border border-gray-600 text-white px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Round Trip Tab */}
                                    {activeTab === 'roundTrip' && (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Vehicle Type</label>
                                                    <select className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400">
                                                        <option className="text-gray-800">Select vehicle type</option>
                                                        <option className="text-gray-800">Sedan</option>
                                                        <option className="text-gray-800">SUV</option>
                                                        <option className="text-gray-800">Etios</option>
                                                          <option className="text-gray-800">Innova</option>
                                                    </select>
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your full name"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Mobile Number</label>
                                                    <input
                                                        type="tel"
                                                        placeholder="Enter mobile number"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Pickup Location</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter pickup location"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Drop Location</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter drop location"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Pickup Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Pickup Time</label>
                                                    <input
                                                        type="time"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Return Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Airport Taxi Tab */}
                                    {activeTab === 'airportTaxi' && (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Vehicle Type</label>
                                                    <select className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400">
                                                        <option className="text-gray-800">Select vehicle type</option>
                                                        <option className="text-gray-800">Sedan</option>
                                                        <option className="text-gray-800">SUV</option>
                                                        <option className="text-gray-800">Etios</option>
                                                        <option className="text-gray-800">Innova</option>
                                                    </select>
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your full name"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Mobile Number</label>
                                                    <input
                                                        type="tel"
                                                        placeholder="Enter mobile number"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Airport</label>
                                                    <select className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400">
                                                        <option className="text-gray-800">Select Airport</option>
                                                        <option className="text-gray-800">Chennai</option>
                                                        <option className="text-gray-800">Coimbatore</option>
                                                           <option className="text-gray-800">Madurai</option>
                                                              <option className="text-gray-800">Trichy</option>
                                                                 <option className="text-gray-800">Salam</option>
                                                                    <option className="text-gray-800">Pondicherry</option>
                                                                       <option className="text-gray-800">Bangolore</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Pickup Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-xs font-medium text-gray-300 mb-1">Pickup Time</label>
                                                    <input
                                                        type="time"
                                                        className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <label className="block text-xs font-medium text-gray-300 mb-1">Hotel/Destination Address</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter hotel or destination address"
                                                    className="w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Button */}
                                <button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    {activeTab === 'oneWay' && 'BOOK ONE WAY'}
                                    {activeTab === 'roundTrip' && 'BOOK ROUND TRIP'}
                                    {activeTab === 'airportTaxi' && 'BOOK AIRPORT TAXI'}
                                </button>
                            </div>
                        </div>

                        {/* Right Section (Car Image) */}
                        <div className="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end min-h-[300px]">
                            <div className="absolute bottom-[200px] right-0 bg-gradient-to-b from-black to-orange-600 text-white text-sm font-bold p-4 rounded-bl-xl shadow-lg z-10">
                                <p className="uppercase text-xs tracking-wide">Mercedes</p>
                                <p className="text-orange-400 text-2xl">$800<span className="text-base">/Day</span></p>
                            </div>

                            <img
                                src="/images/etios_right3.png"
                                alt="Mercedes"
                                className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:w-[750px] xl:max-w-[800px] mx-auto object-contain transition-all duration-300 relative z-0 xl:absolute xl:bottom-[-320px] xl:right-[-90px] xl:mx-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
