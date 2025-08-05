// HeroSection.js
import { useState } from 'react';
import Form from './Form';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('oneWay');
    const [isRoundTrip, setIsRoundTrip] = useState(false);



    // const handlePlaceChanged1 = () => {
    //     if (autocomplete1 !== null) {
    //         const place = autocomplete1.getPlace();
    //         const lat = place.geometry?.location?.lat();
    //         const lng = place.geometry?.location?.lng();
    //         if (lat && lng) {
    //             setLocation1({ lat, lng });
    //         }
    //     }
    // };

    // const handlePlaceChanged2 = () => {
    //     if (autocomplete2 !== null) {
    //         const place = autocomplete2.getPlace();
    //         const lat = place.geometry?.location?.lat();
    //         const lng = place.geometry?.location?.lng();
    //         if (lat && lng) {
    //             setLocation2({ lat, lng });
    //         }
    //     }
    // };

    // const calculateRouteDistance = async (origin, destination) => {
    //     const directionsService = new window.google.maps.DirectionsService();
    //     const results = await directionsService.route({
    //         origin: new window.google.maps.LatLng(origin.lat, origin.lng),
    //         destination: new window.google.maps.LatLng(destination.lat, destination.lng),
    //         travelMode: window.google.maps.TravelMode.DRIVING,
    //     });

    //     console.log(results);

    //     return {
    //         "distance": results.routes[0].legs[0].distance.text,
    //         "time": results.routes[0].legs[0].duration.text
    //     }
    // };

    // const handleSubmit = async () => {
    //     if (location1 && location2) {
    //         const result = await calculateRouteDistance(location1, location2);
    //         setDistance(result.distance);
    //         setTime(result.time);
    //         console.log("Distance:", result.distance);
    //         console.log("Time: ", result.time);
    //     }
    // };

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
                            <h1 className="text-4xl md:text-5xl font-light leading-tight">
                                <span className="font-bold text-primary-500 me-4">Cars</span>
                                For Rent
                            </h1>

                            {/* Booking Form */}
                            <Form activeTab={activeTab} setActiveTab={setActiveTab} />
                        </div>

                        {/* Right Section (Car Image) */}
                        <div className="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end min-h-[300px]">
                            <div className="absolute bottom-[200px] right-0 bg-gradient-to-b from-black to-primary-600 text-white text-sm font-bold p-4 rounded-bl-xl shadow-lg z-10">
                                <p className="uppercase text-xs tracking-wide">Mercedes</p>
                                <p className="text-primary-400 text-2xl">$800<span className="text-base">/Day</span></p>
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