import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div className="bg-[#9538E2]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-7 text-[#FFFFFF]">
        <div>
          <h1 className="text-[20px] font-bold">Gadget Haven</h1>
        </div>
        <div className="flex items-center gap-12 font-medium">
          <NavLink>Home</NavLink>
          <NavLink>Statics</NavLink>
          <NavLink>Dashboard</NavLink>
        </div>
        <div className="flex items-center gap-4 text-black">
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <IoCartOutline />
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <FaRegHeart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
