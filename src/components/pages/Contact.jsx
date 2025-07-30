import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import WhatsAppButton from "../WhatsappButton";
const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
<section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] flex items-center overflow-hidden rounded-lg mt-2 sm:mt-6 md:mt-10 px-4 sm:px-6 md:px-6">
  {/* Background Image */}
  <img
    src="/images/toyota.jpg"
    alt="About NK Drop Taxi"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 z-10"></div>

  {/* Content */}
  <div className="relative z-20 text-left max-w-6xl w-full px-4 sm:px-6 lg:px-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
      <span className="italic">Contact us</span>{" "}
      <span className="inline-block w-1.5 h-6 sm:h-8 ml-2 bg-orange-500 align-middle rounded-sm"></span>
    </h1>
  </div>
</section>
        <section className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
      {/* Left Side - Brand & Contact Info */}
      <div className="lg:w-1/2 w-full p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center bg-white">
        {/* Background Text with Car Image Clipping */}
        <div className="relative w-full max-w-md mx-auto">
          <h1 
            aria-label="NK Drop Taxi"
            className="text-6xl sm:text-7xl md:text-8xl leading-[1.1] font-extrabold text-center bg-clip-text text-transparent bg-[url('/images/toyota.jpg')] bg-cover bg-center select-none"
          >
            <span className="block">NK Drop</span>
            <span className="block">Taxi</span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-12 w-full max-w-md space-y-4 sm:space-y-5 text-left">
          <div className="flex items-start sm:items-center space-x-3">
            <FaPhone className="text-orange-500 text-lg sm:text-xl mt-1 sm:mt-0 flex-shrink-0" />
            <a 
              href="tel:8778243755" 
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors text-sm sm:text-base"
              aria-label="Call us at 8778243755"
            >
              8778243755
            </a>
          </div>
          
          <div className="flex items-start sm:items-center space-x-3">
            <FaEnvelope className="text-orange-500 text-lg sm:text-xl mt-1 sm:mt-0 flex-shrink-0" />
            <a 
              href="mailto:ekumarnkr@gmail.com" 
              className="text-gray-800 font-medium hover:text-orange-600 transition-colors text-sm sm:text-base break-all"
              aria-label="Email us at ekumarnkr@gmail.com"
            >
              ekumarnkr@gmail.com
            </a>
          </div>
          
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-orange-500 text-lg sm:text-xl mt-1 flex-shrink-0" />
            <address className="text-gray-800 font-medium not-italic text-sm sm:text-base">
              Mariamman kovil street, veeranam (village), santhanur (post), Thandrampet (tk), tiruvannamalai (dis), 606 706
            </address>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 md:mt-12">
          <p className="text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Follow Us</p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="bg-orange-500 p-2 sm:p-2.5 rounded-full text-white hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <FaFacebookF className="text-sm sm:text-base" />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="bg-orange-500 p-2 sm:p-2.5 rounded-full text-white hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <FaInstagram className="text-sm sm:text-base" />
            </a>
            <a 
              href="#" 
              aria-label="Pinterest"
              className="bg-orange-500 p-2 sm:p-2.5 rounded-full text-white hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <FaPinterest className="text-sm sm:text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2 w-full bg-gray-50 p-6 sm:p-8 md:p-10 flex items-center justify-center">
        <form 
          className="w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-6 sm:p-8 space-y-5 sm:space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center">Send a Message</h2>
            <p className="text-gray-500 text-xs sm:text-sm text-center">
              We're here to help! Fill out the form and we'll get back to you soon.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                aria-required="true"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold text-sm sm:text-base px-6 py-2.5 sm:py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <section className="w-full px-4 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Location
        </h2>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.75033876636!2d78.90633761787652!3d12.203678934856677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac9348595ffc0f%3A0xee889866cc472618!2sSri%20Maha%20Sakthi%20Marriyamman%20Temple%2C%20Naickanoor!5e0!3m2!1sen!2sin!4v1753857163000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
<WhatsAppButton />
    </>
  );
};

export default ContactPage;