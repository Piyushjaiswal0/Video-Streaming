import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  // Handle scroll to change background color of header
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        show ? "bg-black" : "bg-gradient-to-br from-black via-black to-transparent"
      }`}
      style={{ height: "10vh", lineHeight: "10vh" }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="logo">
          <img
            className="w-36"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" // Netflix logo URL
            alt="Netflix Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 justify-center space-x-6 text-white">
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#home" className="hover:text-[#e50813]">Home</a>
            <a href="#series" className="hover:text-[#e50813]">TV Shows</a>
            <a href="#movies" className="hover:text-[#e50813]">Movies</a>
            <a href="#new" className="hover:text-[#e50813]">Popular</a>
            <a href="#mylist" className="hover:text-[#e50813]">My List</a>
          </div>
        </nav>

        {/* Account Menu (Dropdown) */}
        <div className="relative">
          <button
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            className="text-white flex items-center space-x-2 cursor-pointer"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="src/assets/react.svg"
              alt="User Avatar"
            />
            <span className="text-white">Account</span>
          </button>

          {/* Dropdown Menu */}
          {accountMenuOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <a
                href="#profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e50813] hover:text-white"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e50813] hover:text-white"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
              >
                Settings
              </a>
              <a
                href="#signout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e50813] hover:text-white"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
              >
                Sign out
              </a>
            </div>
          )}
        </div>

        {/* Mobile Toggle (hamburger menu) */}
        <div className="toggle md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-white rounded-md"
          >
            <span className="text-white text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Hidden by default) */}
      {menuOpen && (
        <div className="navMenu-list md:hidden flex-col absolute top-0 left-0 bg-[#e50813] w-1/2 h-full z-50 p-6">
          <ul>
            <li className="text-white text-lg py-4 hover:bg-white hover:text-black cursor-pointer">Home</li>
            <li className="text-white text-lg py-4 hover:bg-white hover:text-black cursor-pointer">TV Shows</li>
            <li className="text-white text-lg py-4 hover:bg-white hover:text-black cursor-pointer">Movies</li>
            <li className="text-white text-lg py-4 hover:bg-white hover:text-black cursor-pointer">New & Popular</li>
            <li className="text-white text-lg py-4 hover:bg-white hover:text-black cursor-pointer">My List</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
