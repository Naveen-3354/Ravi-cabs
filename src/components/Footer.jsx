import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 px-4 md:px-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold text-orange-500 mr-1">C</span>
            <span className="text-3xl font-semibold text-white tracking-widest">ARNTEL</span>
          </div>
          <p className="text-gray-300 mb-4 text-sm">We offer a range of the finest and most premium cars and bikes on rent.</p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-orange-500"><span>[☎]</span><span className="text-white">123 654 0214</span></div>
            <div className="flex items-center space-x-2 text-orange-500"><span>[✉]</span><span className="text-white">carntelinfo@gmail.com</span></div>
            <div className="flex items-center space-x-2 text-orange-500"><span>[🏠]</span><span className="text-white">55/11 ronin tower New York</span></div>
          </div>
          <div className="flex space-x-2">
            <span className="bg-orange-500 rounded-lg px-3 py-2">X</span>
            <span className="bg-orange-500 rounded-lg px-3 py-2">f</span>
            <span className="bg-orange-500 rounded-lg px-3 py-2">ig</span>
            <span className="bg-orange-500 rounded-lg px-3 py-2">p</span>
          </div>
        </div>
        {/* Quick Links 1 */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <div className="text-gray-300 text-sm space-y-1">
            <div>Monday - Friday: <span className="ml-2">09:00 AM - 09:00 PM</span></div>
            <div>Saturday: <span className="ml-2">09:00 AM - 07:00PM</span></div>
            <div>Sunday: <span className="ml-2">Closed</span></div>
          </div>
        </div>
        {/* Quick Links 2 */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <div className="text-gray-300 text-sm space-y-1">
            <div>About us</div>
            <div>FAQ’s</div>
            <div>Services</div>
            <div>Team</div>
            <div>Contact</div>
          </div>
        </div>
        {/* Vehicles Type */}
        <div>
          <h3 className="font-semibold mb-2">Vehicles Type</h3>
          <div className="text-gray-300 text-sm space-y-1 grid grid-cols-2 gap-x-4">
            <div>SUVs</div>
            <div>Sport Coupe</div>
            <div>Convertible</div>
            <div>Wagon</div>
            <div>Sedan</div>
            <div>Yamaha R15</div>
            <div>BMW S 1000 RR</div>
            <div>Kawasaki</div>
            <div>Hayabusa</div>
            <div>Harley Davidson</div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-lg font-semibold mb-4 md:mb-0">Subscribe To Our Newsletter Today!</div>
        <form className="flex w-full md:w-auto">
          <input type="email" placeholder="Email address..." className="px-4 py-2 rounded-l bg-black text-white border border-gray-700 focus:outline-none w-full md:w-64" />
          <button type="submit" className="bg-black border border-l-0 border-gray-700 px-4 py-2 rounded-r text-orange-500 text-xl">→</button>
        </form>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex items-center justify-between text-gray-400 text-sm">
        <span>© 2024 <span className="text-orange-500">CARNTEL</span> All rights reserved.</span>
        <span className="bg-gray-800 p-2 rounded"><span className="text-white">▲</span></span>
      </div>
    </footer>
  );
};

export default Footer;