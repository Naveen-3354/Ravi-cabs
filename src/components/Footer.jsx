import React from 'react';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleFooterNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="w-full text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/footer_bg.jpg')" }}>
      <div className=" w-full pt-10 pb-4 px-6 md:px-16">
        <Reveal>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <div>
              <a href="/">
                <div className="flex items-center">
                  <img
                    src="/images/NK_TAXI.png"
                    alt="CARNTEL Logo"
                    className="h-14 mb-4 w-auto object-contain"
                  />
                </div>
              </a>
              {/* <p className="text-gray-300 mb-4 text-sm">
                We offer a range of the finest and most premium cars and bikes on rent.
              </p> */}
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <FiPhone className="text-primary-500 mr-2" />
                  <span>+ 91 8489751086</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiMail className="text-primary-500 mr-2" />
                  <span>enquiry@nkdroptaxi.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  {/* <FiMapPin className="text-primary-500 mr-2" /> */}
                  <span>391 Mariyamman kovil street, Naykkanur, Veeranam, Sathanur, Tiruvannamalai, Thandarampattu, Tamil Nadu, 606706</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <div className="bg-primary-500 p-2 rounded-md">
                  <FiTwitter className="text-white" />
                </div>
                <div className="bg-primary-500 p-2 rounded-md">
                  <FiFacebook className="text-white" />
                </div>
                <div className="bg-primary-500 p-2 rounded-md">
                  <FiInstagram className="text-white" />
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="font-semibold mb-3 text-white text-lg">About Us</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>
                  NKDropTaxi offers reliable, affordable one-way and outstation drop taxi services with well-maintained vehicles and experienced drivers. Whether it's airport transfers, city rides, or long-distance travel, we ensure safe, punctual, and hassle-free journeys tailored to your needs.
                </p>
              </div>
            </div>

            {/* Site Links */}
            <div>
              <h3 className="font-semibold mb-3 text-white text-lg">Quick Links</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <div>
                  <Link to="/" onClick={handleFooterNavClick} className="hover:underline hover:text-white">Home</Link>
                </div>
                <div>
                  <Link to="/about" onClick={handleFooterNavClick} className="hover:underline hover:text-white">About</Link>
                </div>
                <div>
                  <Link to="/services" onClick={handleFooterNavClick} className="hover:underline hover:text-white">Our Services</Link>
                </div>
                <div>
                  <Link to="/terms" onClick={handleFooterNavClick} className="hover:underline hover:text-white">Terms & Conditions</Link>
                </div>
                <div>
                  <Link to="/contact" onClick={handleFooterNavClick} className="hover:underline hover:text-white">Contact</Link>
                </div>
              </div>
            </div>

            {/* Vehicle Types */}
            <div>
              <h3 className="font-semibold mb-3 text-white text-lg">Vehicles Available</h3>
              <div className="text-gray-300 text-sm grid grid-cols-2 gap-y-2 gap-x-6">
                <div>SUVs</div>
                <div>sedan</div>
                <div>innova</div>
                <div>etios</div>
                <div>creta</div>
                <div>ertiga</div>
                <div>xylo</div>
                <div>Marazzo</div>
                <div>shift dzire</div>
                <div>XUV</div>
              </div>
            </div>
          </div>
        </Reveal>


      </div>

      {/* Bottom Bar */}
      {/* <div className="bg-black justify center text-gray-400 text-sm py-4 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © 2024 <span className="text-primary-500">NKdroptaxi</span> All rights reserved.
          </span>
        </div>
      </div> */}
      <div className="bg-black text-gray-400 text-sm py-4 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
          <span>
            © 2024 <span className="text-primary-500">NKdroptaxi</span> All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
