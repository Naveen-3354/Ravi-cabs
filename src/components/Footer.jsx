const Footer = () => {
  return (
    <footer className="w-full border-t-4 border-blue-600">
      {/* Top Section - Gray Background */}
      <div className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h1 className="text-2xl font-bold mb-4">CARNTEL</h1>
            <p className="mb-4">
              We offer a range of the finest and most premium cars and bikes on rent.
            </p>
            <ul className="space-y-2">
              <li>102 854 02764</li>
              <li>carntelink@gmail.com</li>
              <li>SK/11 route Lower New York</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-1">Quantity - Friday</td>
                  <td className="py-1">08:00 AM - 09:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1">Saturday</td>
                  <td className="py-1">09:00 AM - 07:00PM</td>
                </tr>
                <tr>
                  <td className="py-1">Sunday</td>
                  <td className="py-1">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-2">
                <div>About us</div>
                <div>PACPs</div>
                <div>Services</div>
                <div>Team</div>
                <div>Contact</div>
              </div>
              <div className="space-y-2">
                <div>BMWs</div>
                <div>Conventible</div>
                <div>Sedan</div>
                <div>BMW $ 1000 RR</div>
                <div>Hogahara</div>
              </div>
              <div className="space-y-2">
                <div>Sport Couple</div>
                <div>Wagen</div>
                <div>Yamaha R15</div>
                <div>Kawasaki</div>
                <div>Harley Davidson</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-7xl mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Subscribe To Our Newsletter Today!
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address..."
              className="px-4 py-2 flex-grow rounded-l focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Black Background */}
      <div className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          © 2024 CARNTEL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;