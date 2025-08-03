import React from 'react';
import { FaCheckCircle, FaCar, FaCalendarAlt, FaCheck, FaRoad } from "react-icons/fa";
import WhatsAppButton from '../WhatsappButton';

const AboutUs = () => {
  const steps = [
    {
      number: "01",
      title: "Choose A Car",
      description: "Select from our premium fleet of well-maintained vehicles",
      icon: <FaCar className="text-orange-500 text-2xl" />
    },
    {
      number: "02",
      title: "Pick Up Date",
      description: "Schedule your pickup at your preferred date and time",
      icon: <FaCalendarAlt className="text-orange-500 text-2xl" />
    },
    {
      number: "03",
      title: "Confirm Booking",
      description: "Verify your trip details and payment information",
      icon: <FaCheck className="text-orange-500 text-2xl" />
    },
    {
      number: "04",
      title: "Enjoy Driving",
      description: "Experience a comfortable and safe journey with us",
      icon: <FaRoad className="text-orange-500 text-2xl" />
    },
  ];

  return (
    <div className="font-sans mt-8">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center overflow-hidden rounded-lg">
        {/* Background Image */}
        <img
          src="/images/toyota.jpg"
          alt="About NK Drop Taxi"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-left max-w-6xl w-full px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            About <span className="text-orange-500">NK Drop Taxi</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
            Your trusted partner for safe, reliable, and comfortable transportation
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">NK Drop Taxi</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              NK Drop Taxi is your trusted partner for safe, reliable, and affordable intercity travel. We ensure your ride is smooth, comfortable, and on time — every time. Our professional drivers and well-maintained vehicles are available 24/7 to serve you across Tamil Nadu and beyond.
            </p>
            <p className="text-gray-600 text-lg">
              Choose NK Drop Taxi for a stress-free travel experience, whether it's a business trip or family outing.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-800">24/7 Service</h3>
                <p className="text-gray-600 text-sm">Always available when you need us</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-800">500+ Trips</h3>
                <p className="text-gray-600 text-sm">Completed successfully every month</p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition duration-300">
              <img
                src="/images/pickup2.png"
                alt="NK Drop Taxi Car"
                className="w-full max-w-md object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Our Premium Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-300">
                <img
                  src="/images/etios_right3.png"
                  alt="NK Drop Taxi Vehicle"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative">
                  <span className="relative z-10">Who We Are</span>
                  <span className="absolute bottom-1 left-0 w-16 h-2 bg-orange-200 z-0 opacity-70"></span>
                </h2>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  <span className="font-semibold text-orange-600">NK Drop Taxi</span> is a premier taxi service revolutionizing urban mobility since 2015. What began as a modest fleet has blossomed into one of the most trusted transportation networks in the region.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "200+ professional drivers serving 24/7",
                    "5,000+ satisfied customers monthly",
                    "99.7% on-time arrival guarantee",
                    "Coverage across Tamil Nadu and neighboring states"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="h-5 w-5 text-orange-500" />
                      </div>
                      <p className="ml-3 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                  Learn More About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-600 uppercase mb-2">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Easy Steps to Book Your Ride
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/night1.jpg"
                alt="Luxury Car"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-orange-200"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600">
                      {step.icon}
                    </div>
                    <span className="text-orange-600 text-xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT Content */}
          <div className="lg:w-1/2 w-full">
            <span className="text-sm uppercase tracking-wide text-orange-600 font-semibold mb-2 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
              We Provide Exceptional Service With Our Experience
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our commitment to excellence has made us a preferred choice for thousands of customers who value reliability, comfort, and professional service.
            </p>

            {/* Features */}
            <ul className="space-y-5 mb-8">
              {[
                "All Type Vehicles Available",
                "24/7 Roadside Assistance",
                "Experienced and Verified Drivers",
                "Competitive Pricing",
                "Real-time Trip Tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition duration-300 shadow-md">
              Contact Us Today
            </button>
          </div>

          {/* RIGHT Image with overlays */}
          <div className="relative lg:w-1/2 w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/Innova_Right.png"
              alt="About Car"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
              <div className="text-4xl font-bold text-orange-600">8+</div>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Years of</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;