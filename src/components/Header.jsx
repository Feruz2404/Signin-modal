import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <div className="w-full sticky top-0 z-50 bg-gray-900 shadow-md opacity-95">
      <nav className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="bg-gray-100 p-2 rounded-full shadow-md">
            <img
              src="https://montikea.com/images/partials/cart.svg"
              className="h-8 w-8"
              alt="Logo"
            />
          </div>
          <span className="text-2xl font-bold text-white">ShopEase</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative text-lg font-medium ${
                active === item
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              } transition`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-white rounded-full transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18M3 12h18m-6 6h6"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-gray-800 text-white md:hidden shadow-lg z-50">
            <ul className="flex flex-col space-y-2 py-4 px-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setActive(item);
                      setMenuOpen(false);
                    }}
                    className={`block text-left w-full text-lg font-medium py-2 ${
                      active === item
                        ? "text-white bg-gray-700 rounded-md"
                        : "text-gray-300 hover:text-white hover:bg-gray-600 rounded-md"
                    } transition`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
