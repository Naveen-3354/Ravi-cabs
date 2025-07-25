import React from 'react';

const AboutUs = () => {
  return (
    <>
    <div className="font-sans">
      {/* Enhanced Hero Section */}
      <section className="relative mt-2 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated logo/badge */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">NK DROP TAXI</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
              <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="NK Drop Taxi Vehicle" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                NK Drop Taxi is a premier taxi service provider committed to delivering exceptional transportation solutions. Founded in 2015, we've grown from a small fleet to one of the most trusted names in urban mobility.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to provide safe, reliable, and affordable transportation services while maintaining the highest standards of customer satisfaction.
              </p>
              <p className="text-gray-700">
                With a team of professional drivers and a modern fleet, we ensure every ride with us is comfortable and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-900 text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">City Rides</h3>
              <p className="text-gray-700">
                Quick and efficient transportation within the city with professional drivers who know the best routes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-900 text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Airport Transfers</h3>
              <p className="text-gray-700">
                Reliable airport pickups and drop-offs with flight tracking to ensure you never miss your flight.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-900 text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-3">Hotel Transfers</h3>
              <p className="text-gray-700">
                Seamless transportation to and from hotels with assistance for luggage and special requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose NK Drop Taxi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p>We're always available whenever you need a ride, day or night.</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Professional Drivers</h3>
              <p>Our drivers are licensed, experienced, and committed to your safety.</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p>Transparent pricing with no hidden charges or surge pricing.</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Modern Fleet</h3>
              <p>Well-maintained, clean, and comfortable vehicles for every need.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;