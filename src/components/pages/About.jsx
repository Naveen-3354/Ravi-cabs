import React from 'react';

const AboutUs = () => {
  return (
    <>
    <div className="font-sans mt-20">
<section className="relative mt-2 rounded-2xl overflow-hidden min-h-[90vh] flex items-center justify-center">
  <div className="absolute inset-0">
    <div 
      className="absolute inset-0 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Innova_Right.png')" }}
    ></div>
    <div className="absolute inset-0 bg-black/50 "></div>
  </div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <div className="max-w-4xl mx-auto">
      {/* Animated logo/badge - replaced with your taxi icon */}
      <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M8 17a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10v3m0 4H7m4-9V6a1 1 0 011-1h2a1 1 0 011 1v3m0 0h1a2 2 0 012 2v3a2 2 0 01-2 2h-1" />
        </svg>
      </div>
      
      {/* Main heading with gradient and text shadow */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200 drop-shadow-lg">
          NK DROP TAXI
        </span>
      </h1>
      
      {/* Description with better readability */}
      <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
        Premium taxi services with <span className="font-semibold text-white">24/7 availability</span>, <span className="font-semibold text-white">competitive rates</span>, and <span className="font-semibold text-white">professional drivers</span>. Your comfort and safety is our priority.
      </p>
      
      {/* Buttons with improved hover effects */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
        <button className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
          Book Now
        </button>
        <button className="px-8 py-3.5 border-2 border-white/80 text-white font-bold rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-2">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>
      {/* Who We Are Section */}
 <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Image Section with Shadow */}
      <div className="md:w-1/2 w-full">
        <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300">
          <img 
            src="/images/etios_right3.png"
            alt="NK Drop Taxi Vehicle" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* Content Section with Card Effect */}
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
    </div>
    </>
  );
};

export default AboutUs;