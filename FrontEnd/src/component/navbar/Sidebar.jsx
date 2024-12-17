import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen, sidebarRef, userAvatar, userName }) => (
  sidebarOpen && (
    <aside
      ref={sidebarRef}
      className="fixed top-0 right-0 z-40 w-64 h-screen bg-black text-white transition-transform transform translate-x-0 sm:translate-x-0 font-sans"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-black-50">
        {/* Profile Section at the Top */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            className="w-12 h-12 rounded-full"
            src={userAvatar || "src/assets/avatar.svg"}
            alt="User Avatar"
          />
          <div>
            <p className="text-white text-lg">{userName}</p>
            <p className="text-gray-400 text-sm">Profile</p>
          </div>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-2 font-medium">
          <li>
            <Link to="/" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              Home
            </Link>
          </li>
          <li>
            <Link to="#series" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              TV Shows
            </Link>
          </li>
          <li>
            <Link to="#movies" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              Movies
            </Link>
          </li>
          <li>
            <Link to="#new" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              Popular
            </Link>
          </li>
          <li>
            <Link to="#mylist" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              My List
            </Link>
          </li>
          <hr />
          <li>
            <Link to="#profile" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              Your Profile
            </Link>
          </li>
          <li>
            <Link to="#Settings" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              Settings
            </Link>
          </li>
          <li>
            <Link to="#signout" className="text-white block p-2 rounded-md hover:bg-[#e50813]">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
);

export default Sidebar;
