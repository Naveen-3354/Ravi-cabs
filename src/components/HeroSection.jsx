const HeroSection = () => {
    return (
        <>
            <div className="lg:h-[100vh] px-0 pb-0 pt-0 lg:px-24 lg:pb-24 lg:pt-12 ">
                <div
                    className=" w-full bg-cover bg-center bg-no-repeat rounded-xl"
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
                            <div className="mt-8 bg-black/80 rounded-xl text-white p-4 md:p-6 w-full max-w-xl">
                                <p className="font-medium mb-4">Available For Rent</p>

                                {/* Vehicle Type Tabs */}
                                <div className="flex gap-2 overflow-x-auto">
                                    {["Car", "Van", "Minibus", "Coupe", "Bike"].map((type) => (
                                        <button
                                            key={type}
                                            className="flex-shrink-0 px-4 py-2 bg-orange-500 text-white rounded-md font-semibold"
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                {/* Inputs */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <select className="bg-white text-black px-3 py-2 rounded-md">
                                        <option>Model</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Pick up Location"
                                        className="bg-white text-black px-3 py-2 rounded-md"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Drop off Location"
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

                                {/* Button */}
                                <button className="mt-6 bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition">
                                    FIND A VEHICLE
                                </button>
                            </div>
                        </div>

                        {/* Right Section (Car Image) */}
                        <div className="relative w-full lg:w-1/2">
                            <div className="absolute bottom-0 right-0 md:botttom-0 bg-gradient-to-b from-black to-orange-600 text-white text-sm font-bold p-4 rounded-bl-xl shadow-lg z-10">
                                <p className="uppercase text-xs tracking-wide">Mercedes</p>
                                <p className="text-orange-400 text-2xl">$800<span className="text-base">/Day</span></p>
                            </div>

                            <img
                                src="/images/etios_right3.png"
                                // src="/images/Innova_Right.png"
                                alt="Mercedes"
                                className="w-full lg:w-[700px] lg:max-w-[800px] max-w-[600px] mx-auto lg:absolute lg:bottom-[-450px] lg:right-[-120px] object-contain transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
