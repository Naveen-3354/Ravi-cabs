import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 py-4 px-6 flex items-center justify-between z-50">

      {/* Logo */}
      <a href="/">
        <div className="flex items-center">
          <img
            src="/images/NK_TAXI.png"
            alt="CARNTEL Logo"
            className="h-14 w-auto object-contain"
          />
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-medium text-gray-900">
        <a href="#" onClick={closeMenu} className="hover:text-orange-500">Home</a>
        <a href="#" onClick={closeMenu} className="hover:text-orange-500">About</a>
        <a href="#" onClick={closeMenu} className="hover:text-orange-500">Our Services</a>
        <a href="#" onClick={closeMenu} className="hover:text-orange-500">Terms & Conditions</a>
        <a href="#" onClick={closeMenu} className="hover:text-orange-500">Contact</a>
      </nav>

      {/* Contact Info - Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="bg-orange-500 p-2 rounded-md text-white">
            <FiMail />
          </span>
          <span className="text-base font-medium text-gray-900">+71 202 102 2525</span>
        </div>
        {/* <div className="flex items-center space-x-2">
          <span className="bg-orange-500 p-2 rounded-md text-white">
            <FiPhone />
          </span>
          <span className="text-base font-medium text-gray-900">carntelinfo@gmail.com</span>
        </div> */}
      </div>

      {/* Hamburger Button - Mobile */}
      <button className="lg:hidden text-3xl text-gray-800" onClick={toggleMenu}>
        <FiMenu />
      </button>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-bold text-orange-500">Menu</span>
          <button onClick={closeMenu} className="text-2xl text-gray-700">
            <FiX />
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-6 py-6 text-lg text-gray-800 font-medium">
          <a href="#" onClick={closeMenu} className="hover:text-orange-500">Home</a>
          <a href="#" onClick={closeMenu} className="hover:text-orange-500">About</a>
          <a href="#" onClick={closeMenu} className="hover:text-orange-500">Our Services</a>
          <a href="#" onClick={closeMenu} className="hover:text-orange-500">Terms & Conditions</a>
          <a href="#" onClick={closeMenu} className="hover:text-orange-500">Contact</a>
        </div>

        {/* Drawer Contact Info */}
        <div className="border-t mt-4 px-6 py-4 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="bg-orange-500 p-2 rounded-md text-white">
              <FiMail />
            </span>
            <span className="text-base font-medium text-gray-900">+71 202 102 2525</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-orange-500 p-2 rounded-md text-white">
              <FiPhone />
            </span>
            <span className="text-base font-medium text-gray-900">carntelinfo@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
