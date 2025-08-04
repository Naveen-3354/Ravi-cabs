import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/footer_bg.jpg')" }}>
      <div className=" w-full pt-10 pb-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <a href="/">
              <div className="flex items-center">
                <img
                  src="/images/NK_TAXI.png"
                  alt="CARNTEL Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-gray-300 mb-4 text-sm">
              We offer a range of the finest and most premium cars and bikes on rent.
            </p>
            <div className="space-y-3 mb-4 text-sm">
              <div className="flex items-center text-gray-300">
                <FiPhone className="text-primary-500 mr-2" />
                <span>123 654 0214</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMail className="text-primary-500 mr-2" />
                <span>carntelinfo@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="text-primary-500 mr-2" />
                <span>55/11 ronin tower New York</span>
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
            <h3 className="font-semibold mb-3 text-white text-lg">Quick Links</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>09:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>09:00 AM - 07:00PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-semibold mb-3 text-white text-lg">Quick Links</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <div>About us</div>
              <div>FAQ’s</div>
              <div>Services</div>
              <div>Team</div>
              <div>Contact</div>
            </div>
          </div>

          {/* Vehicle Types */}
          <div>
            <h3 className="font-semibold mb-3 text-white text-lg">Vehicles Type</h3>
            <div className="text-gray-300 text-sm grid grid-cols-2 gap-y-2 gap-x-6">
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
        <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-lg font-semibold text-white">Subscribe To Our Newsletter Today!</div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Email address..."
              className="px-4 py-2 rounded-l bg-black text-white border border-gray-700 focus:outline-none w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-black border border-l-0 border-gray-700 px-4 py-2 rounded-r text-primary-500 text-xl"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-400 text-sm py-4 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © 2024 <span className="text-primary-500">CARNTEL</span> All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
