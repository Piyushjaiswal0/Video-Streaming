import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="flex flex-1 justify-center space-x-6 text-white">
    <div className="hidden md:flex space-x-6 text-white">
      <Link to="/" className="hover:text-[#e50813]">Home</Link>
      <Link to="#series" className="hover:text-[#e50813]">TV Shows</Link>
      <Link to="#movies" className="hover:text-[#e50813]">Movies</Link>
      <Link to="#new" className="hover:text-[#e50813]">Popular</Link>
      <Link to="#mylist" className="hover:text-[#e50813]">My List</Link>
    </div>
  </nav>
);

export default Navigation;
