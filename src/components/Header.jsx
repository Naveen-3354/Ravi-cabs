import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className="flex items-center justify-between px-4 md:px-12 lg:px-20 py-3 bg-white shadow-md z-50 border-b-4 border-blue-600">
                <div className="flex items-center space-x-2">
                    <Link to="/">
                        <div className="h-16 w-32 relative flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">Ravi Cabs</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center text-black text-sm lg:text-base">
                    <Link to="/" className="hover:text-accent">Home</Link>
                    <Link to="/blog" className="hover:text-accent">Blog</Link>
                    
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <Link to='/services'>
                            <button className="hover:text-accent flex items-center space-x-1">
                                <span>Services</span>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </Link>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                                <Link to="/services/Custom-Software-Development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Custom Software Development
                                </Link>
                                <Link to="/services/Technology-Staffing-and-Recruitment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Technology Staffing & Recruitment
                                </Link>
                                <Link to="/services/MVP-Development-Consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    MVP Development Consultation
                                </Link>
                                <Link to="/services/Offshore-Team-Building" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Offshore Team Building
                                </Link>
                                <Link to="/services/Mobile-App-Development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Mobile App Development
                                </Link>
                                <Link to="/services/Digital-Marketing-Services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Digital Marketing Services
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className="hover:text-accent">About Us</Link>
                    <Link to="/contact" className="hover:text-accent">Contact</Link>
                </nav>

                {/* Right Section */}
                <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                    <button className="text-neutral hover:text-primary">
                        <svg className="h-5 w-5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-neutral focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 text-center text-sm">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <Link to="/blog" className="hover:text-primary">Blog</Link>
                        <div className="w-full">
                            <Link to='/services'>
                                <button onClick={toggleDropdown} className="flex justify-center w-full px-4 py-2 text-left text-gray-700 hover:text-primary items-center z-50">
                                    Services 
                                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </Link>
                            {isDropdownOpen && (
                                <div className="pl-4 mt-2 space-y-2" style={{ zIndex: 9999 }}>
                                    <Link to="/services/Custom-Software-Development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Custom Software Development
                                    </Link>
                                    <Link to="/services/Technology-Staffing-and-Recruitment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Technology Staffing & Recruitment
                                    </Link>
                                    <Link to="/services/MVP-Development-Consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        MVP Development Consultation
                                    </Link>
                                    <Link to="/services/Offshore-Team-Building" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Offshore Team Building
                                    </Link>
                                    <Link to="/services/Mobile-App-Development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Mobile App Development
                                    </Link>
                                    <Link to="/services/Digital-Marketing-Services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Digital Marketing Services
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/about" className="hover:text-accent">About Us</Link>
                        <Link to="/contact" className="hover:text-primary">Contact</Link>
                    </nav>
                )}
            </header>
            {showModal && <OnboardingModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default Header;