import { useState } from "react";
import { FaChevronDown, FaGem, FaCrown, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-red-600">
          ambitio.
        </a>

        {/* Desktop Navigation */}
        <nav className=" md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-black flex items-center space-x-1"
          >
            <span>Study-abroad</span> <FaChevronDown />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black flex items-center space-x-1"
          >
            <span>Bootcamps</span> <FaChevronDown />
          </a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-black">
              <span>Products</span> <FaChevronDown />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 p-4 space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-red-500"
              >
                <FaGem className="text-red-500" />
                <span>Ambitio Pro</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-red-500"
              >
                <FaCrown className="text-red-500" />
                <span>Ambitio Elite</span>
              </a>
            </div>
          </div>

          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <FaCrown className="text-red-500" />
            <span>Ambitio Elite</span>
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          <FaPhoneAlt />
          <span>Speak with our Experts</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white p-4 space-y-4 shadow-lg">
          <a href="#" className="block text-gray-700 hover:text-black">
            Study-abroad
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            Bootcamps
          </a>
          <div className="block">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-black">
              Products <FaChevronDown />
            </button>
            <div className="mt-2 space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-red-500"
              >
                <FaGem className="text-red-500" />
                <span>Ambitio Pro</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-red-500"
              >
                <FaCrown className="text-red-500" />
                <span>Ambitio Elite</span>
              </a>
            </div>
          </div>
          <a href="#" className="block text-gray-700 hover:text-black">
            Ambitio Elite
          </a>
          <a
            href="#"
            className="block border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            Speak with our Experts
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
