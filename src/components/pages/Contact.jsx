import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden rounded-lg mt-2 sm:mt-6 md:mt-10 px-4 sm:px-6 md:px-6">
        {/* Background Image */}
        <img
          src="/images/hero_bg.jpg"
          alt="Contact NK Drop Taxi"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Text Content */}
        <div className="relative z-20 max-w-3xl mx-auto text-white px-4">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 drop-shadow-lg">
            Contact <span className="text-yellow-400">NK Drop Taxi</span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl font-medium drop-shadow-md max-w-md mx-auto">
            We're available 24/7 to assist you. Call, email, or visit us — we're always ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-8 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl border border-blue-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 text-center">📞 Get in Touch</h3>

            <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-lg sm:text-xl">📱</span>
                <span><strong className="font-semibold">Phone:</strong> +91 87782 43755</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-lg sm:text-xl">✉️</span>
                <span><strong className="font-semibold">Email:</strong> ekumarnkr@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-lg sm:text-xl">📍</span>
                <span>
                  <strong className="font-semibold">Address:</strong> 391 Mariyamman Kovil Street,<br />
                  Naickanur, Veeranam (Village), Santhanur (Post),<br />
                  Thandrampet (Tk), Thiruvannamalai (Dist) - 606 706
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-lg sm:text-xl">🕒</span>
                <span><strong className="font-semibold">Service Hours:</strong> 24/7 Available</span>
              </li>
            </ul>

            <div className="mt-6 sm:mt-8 md:mt-10 text-center">
              <a href="tel:+918778243755">
                <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium sm:font-semibold shadow transition duration-300 text-sm sm:text-base">
                  📞 Call Now
                </button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Send a Message</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full mt-1 sm:mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition text-sm sm:text-base"
              >
                ✉️ Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Our Location</h2>
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg mt-4 sm:mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15596.947955316338!2d78.61946902731512!3d12.232226529005848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac5fa2b3248d33%3A0x8aded4974d4cf99!2sNaickanur%2C%20Tamil%20Nadu%20635307!5e0!3m2!1sen!2sin!4v1753471919226!5m2!1sen!2sin"
              width="100%"
              height="350"
              className="h-[250px] sm:h-[350px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NK Drop Taxi Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;