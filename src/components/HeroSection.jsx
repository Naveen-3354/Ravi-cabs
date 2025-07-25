import { useState } from 'react';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('oneWay');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    return (
        <>
            <div className="px-0 pb-0 pt-0 lg:px-24 lg:pb-24 lg:pt-12 ">
                <div
                    className="w-full bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Section */}
                        <div className="w-full lg:w-1/2 text-white">
                            <p className="text-sm tracking-widest text-orange-500 uppercase mb-2">- Premium -</p>
                            <h1 className="text-4xl md:text-5xl font-light leading-tight">
                                The Best Rent <br />
                                <span className="font-bold text-orange-500">Cars & Bikes</span>
                            </h1>

                            {/* Booking Form */}
                            <div className="mt-8 bg-black/80 rounded-xl text-white p-4 md:p-6 w-full max-w-xl relative z-20">
                                <p className="font-medium mb-4">Available For Rent</p>

                                {/* Main Tabs */}
                                <div className="flex gap-2 mb-6">
                                    <button
                                        onClick={() => setActiveTab('oneWay')}
                                        className={`flex-shrink-0 px-4 py-2 rounded-md font-semibold ${activeTab === 'oneWay' ? 'bg-orange-500' : 'bg-gray-700'
                                            }`}
                                    >
                                        One Way
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('roundTrip')}
                                        className={`flex-shrink-0 px-4 py-2 rounded-md font-semibold ${activeTab === 'roundTrip' ? 'bg-orange-500' : 'bg-gray-700'
                                            }`}
                                    >
                                        Round Trip
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('airportTaxi')}
                                        className={`flex-shrink-0 px-4 py-2 rounded-md font-semibold ${activeTab === 'airportTaxi' ? 'bg-orange-500' : 'bg-gray-700'
                                            }`}
                                    >
                                        Airport Taxi
                                    </button>
                                </div>
                                {/* Tab Content */}
                                <div className="tab-content">
                                    {/* One Way Tab */}
                                    {activeTab === 'oneWay' && (
                                        <div className="grid grid-cols-1 gap-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <select className="bg-white text-black px-3 py-2 rounded-md">
                                                    <option>Select vehicle type</option>
                                                    <option>Sedan</option>
                                                    <option>SUV</option>
                                                    <option>Luxury</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Mobile No"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Pickup Location"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Drop Location"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                                <div className="flex gap-2">
                                                    <input
                                                        type="date"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                    <input
                                                        type="time"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Round Trip Tab */}
                                    {activeTab === 'roundTrip' && (
                                        <div className="grid grid-cols-1 gap-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <select className="bg-white text-black px-3 py-2 rounded-md">
                                                    <option>Select vehicle type</option>
                                                    <option>Sedan</option>
                                                    <option>SUV</option>
                                                    <option>Luxury</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Mobile No"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Pickup Location"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Drop Location"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                                <div className="flex gap-2">
                                                    <input
                                                        type="date"
                                                        placeholder="Pick-Up Date"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                    <input
                                                        type="time"
                                                        placeholder="Pick-Up Time"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex gap-2">
                                                    <input
                                                        type="date"
                                                        placeholder="Return Date"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                    <input
                                                        type="time"
                                                        placeholder="Return Time"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Airport Taxi Tab */}
                                    {activeTab === 'airportTaxi' && (
                                        <div className="grid grid-cols-1 gap-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <select className="bg-white text-black px-3 py-2 rounded-md">
                                                    <option>Select vehicle type</option>
                                                    <option>Sedan</option>
                                                    <option>SUV</option>
                                                    <option>Luxury</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Mobile No"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Flight Number"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <select className="bg-white text-black px-3 py-2 rounded-md">
                                                    <option>Select Airport</option>
                                                    <option>International Airport</option>
                                                    <option>Domestic Airport</option>
                                                </select>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="date"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                    <input
                                                        type="time"
                                                        className="bg-white text-black px-3 py-2 rounded-md w-1/2"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Hotel/Destination Address"
                                                    className="bg-white text-black px-3 py-2 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Button */}
                                <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition w-full">
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
