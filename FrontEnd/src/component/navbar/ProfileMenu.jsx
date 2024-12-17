import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = ({ menuOpen, setMenuOpen, userAvatar, userName, menuRef }) => (
  <div className="relative hidden md:block">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
      aria-haspopup="true"
      className="text-white flex items-center space-x-2 cursor-pointer"
    >
      <img
        className="w-8 h-8 rounded-full"
        src={userAvatar || "src/assets/avatar.svg"}
        alt="User Avatar"
      />
      <span className="text-white">Account</span>
    </button>

    {menuOpen && (
      <div
        ref={menuRef}
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex="-1"
      >
        <Link to="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e50813] hover:text-white">
          Your Profile
        </Link>
        <Link to="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e50813] hover:text-white">
          Settings
        </Link>
        <Link to="#signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e50813] hover:text-white">
          Sign out
        </Link>
      </div>
    )}
  </div>
);

export default ProfileMenu;
