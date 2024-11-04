import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isProductDetailsPage = location.pathname.includes("/product-details")
  return (
    <div className={`${isProductDetailsPage ? "bg-white text-black" : "bg-[#9538E2] text-white"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-7">
        <div>
          <Link to="/" className="text-[20px] font-bold">Gadget Haven</Link>
        </div>
        <div className="flex items-center gap-12 font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statics">Statics</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
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
