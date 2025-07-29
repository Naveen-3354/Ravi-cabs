import React from 'react';
import Banner from './Banner';

const OurServices = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-2">
            Our Service
          </h2>
        </div>

        {/* Drop Taxi Service */}
        <Banner
          title="DROP TAXI"
          description="Drop taxi is a convenient and hassle-free way to travel from one point to another, without having to worry about driving or parking. With Super Cabs' drop taxi services, you can enjoy a comfortable and safe ride to your destination, with no hidden charges and flexible payment options."
          imageSrc="/images/pickup1.png"
          isStyled={true}
          isInvert={false}
          color="white"
        />

        {/* Local Rentals Service */}
        <Banner
          title="LOCAL RENTALS"
          description="Super Cabs' local rental services provide a convenient and flexible way to explore your city at your own pace. With a range of well-maintained vehicles and experienced drivers, you can enjoy a comfortable and hassle-free ride for all your local travel needs."
          imageSrc="/images/pickup2.png"
          isStyled={true}
          isInvert={true}
          color="white"
        />

        {/* Airport Transfers Service */}
        <Banner
          title="AIRPORT TRANSFERS"
          description="Super Cabs offers hassle-free and comfortable airport transfers with experienced drivers and well-maintained vehicles. We prioritize safety and punctuality to ensure that you reach your destination on time, every time."
          imageSrc="/images/pickup3.png"
          isStyled={true}
          isInvert={false}
          color="white"
        />
      </div>
    </section>
  );
};

export default OurServices; 