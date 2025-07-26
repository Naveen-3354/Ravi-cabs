import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  const steps = [
    {
      number: "01",
      title: "Choose A Car",
      description: "Check out our range of cars and choose the car of your choice",
    },
    {
      number: "02",
      title: "Pick Up Date",
      description: "Check out our range of cars and choose the car of your choice",
    },
    {
      number: "03",
      title: "Confirm Your Booking",
      description: "Confirm booking information related to your car",
    },
    {
      number: "04",
      title: "Enjoy Driving",
      description: "After confirmation, get the car keys and enjoy your car",
    },
  ];

  return (
    <div className="font-sans mt-20 ">
      {/* Hero Section */}
  <section className="relative h-[75vh] md:h-[90vh] flex items-center text-white overflow-hidden rounded-xl">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/Innova_Right.png"
      alt="NK Drop Taxi"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/60 "></div>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full px-6 text-left max-w-7xl mx-auto">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
      NK <span className="text-cyan-400">DROP TAXI</span>
    </h2>
    <div className="mt-2 w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
  </div>
</section>
      {/* Who We Are Section */}
      <section className="py-18 md:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300">
                <img 
                  src="/images/etios_right3.png"
                  alt="NK Drop Taxi Vehicle" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-blue-600">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative">
                  <span className="relative z-10">Who We Are</span>
                  <span className="absolute bottom-1 left-0 w-16 h-2 bg-blue-200 z-0 opacity-70"></span>
                </h2>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  <span className="font-semibold text-blue-800">NK Drop Taxi</span> is a premier taxi service revolutionizing urban mobility since 2015. What began as a modest fleet has blossomed into one of the most trusted transportation networks in the region.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">200+ professional drivers serving 24/7</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">5,000+ satisfied customers monthly</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">99.7% on-time arrival guarantee</p>
                  </div>
                </div>
                
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-gray-50 mt-2 rounded-lg py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="w-full h-full">
            <img
             src="/images/night1.jpg"
              alt="Luxury Car"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="space-y-6">
            <div className="text-sm text-orange-600 font-semibold tracking-widest uppercase">
              How it work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Following Working Steps
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 bg-white rounded-xl shadow hover:shadow-md transition duration-300"
                >
                  <div className="text-orange-600 text-xl font-bold mb-2">
                    {step.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    {step.title}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
       {/* fourth  Section */}
         <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* LEFT Content */}
        <div className="lg:w-1/2 w-full">
          <p className="text-sm uppercase tracking-wide text-orange-600 mb-2">- About Us -</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            We Have Many Provided Assistance <br /> To People And Companies In This Field
          </h2>
          <p className="text-gray-600 mb-6">
            I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-6">
            {[
              "All Type Vehicle Available",
              "You Get 24/7 Roadside Assistance",
              "We Are The UK’s Largest Provider",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT Image with overlays */}
        <div className="relative lg:w-1/2 w-full rounded-lg overflow-hidden">
          <img
            src="/images/Innova_Right.png"
            alt="About Car"
            className="w-full h-auto object-cover"
          />
          {/* Bottom Text Badge */}
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow-lg flex items-center gap-2">
            <div className="text-sm text-gray-500 uppercase tracking-wide">Since</div>
            <div className="text-2xl font-extrabold text-orange-600">2022</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;