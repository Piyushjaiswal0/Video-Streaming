import React, { useState, useEffect, useRef, useCallback } from "react";
import Navigation from "./Navigation";
import ProfileMenu from "./ProfileMenu";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userAvatar = "src/assets/avatar.svg";
  const userName = "John Doe";

  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768 && !isDesktop) {
      setIsDesktop(true);
    } else if (window.innerWidth < 768 && isDesktop) {
      setIsDesktop(false);
    }
  }, [isDesktop]);

  const handleClickOutside = useCallback((e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }

    if (isDesktop && menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const debounceResize = () => setTimeout(handleResize, 100);
    window.addEventListener("resize", debounceResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", debounceResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll, handleResize, handleClickOutside]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${show ? "bg-black" : "bg-gradient-to-br from-black via-black to-transparent"}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="logo">
          <img
            className="w-36"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </div>
        {/* Navigation Links */}
        <Navigation />
        {/* Profile Menu */}
        <ProfileMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          userAvatar={userAvatar} 
          userName={userName} 
          menuRef={menuRef} 
        />
        
        {/* Mobile Sidebar Toggle Button */}
        {!isDesktop && (
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
              className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-white rounded-md text-white"
            >
              <span className="text-white text-xl">☰</span>
            </button>
          </div>
        )}

        {/* Sidebar for Mobile */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} sidebarRef={sidebarRef} userAvatar={userAvatar} userName={userName} />
      </div>
    </header>
  );
};

export default Navbar;
