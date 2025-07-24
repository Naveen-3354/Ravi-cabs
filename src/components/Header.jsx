import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 px-6 flex flex-col md:flex-row items-center justify-between w-full">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <span className="text-4xl font-bold text-orange-500 mr-1">C</span>
        <span className="text-3xl font-semibold text-gray-900 tracking-widest">ARNTEL</span>
      </div>
      {/* Navigation */}
      <nav className="flex-1 flex justify-center space-x-6 text-lg font-medium text-gray-900">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">About</a>
        <a href="#" className="hover:text-orange-500">Cars</a>
        <a href="#" className="hover:text-orange-500">Services</a>
        <a href="#" className="hover:text-orange-500">Pages</a>
        <a href="#" className="hover:text-orange-500">Blog</a>
        <a href="#" className="hover:text-orange-500">Contact</a>
      </nav>
      {/* Contact Info */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="flex items-center bg-orange-500 rounded-lg px-3 py-2 text-white">
          <span className="mr-2">[✉]</span>
          <span className="text-base font-medium text-gray-900 ml-2 text-black">+71 202 102 2525</span>
        </div>
        <div className="flex items-center bg-orange-500 rounded-lg px-3 py-2 text-white">
          <span className="mr-2">[☎]</span>
          <span className="text-base font-medium text-gray-900 ml-2 text-black">carntelinfo@gmail.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;