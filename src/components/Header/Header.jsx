import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useProduct } from "../Context/CartContext";

const Header = () => {
  const { state } = useProduct();
  const location = useLocation();
  const loacationPath = ["/product-details", "/dashboard", "/statics"]
  const isProductDetailsPage = loacationPath.some((path)=>location.pathname.includes(path));
  return (
    <div
      className={`${
        isProductDetailsPage ? "bg-white text-black" : "bg-[#9538E2] text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-7">
        <div>
          <Link to="/" className="text-[20px] font-bold">
            Gadget Haven
          </Link>
        </div>
        <div className="flex items-center gap-12 font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statics">Statics</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
        <div className="flex items-center gap-8 text-black">
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <IoCartOutline className="font-bold relative" />
            <span
              className={`absolute top-5 right-[178px] text-[#9538E2]  w-7 h-7 flex items-center justify-center rounded-full ${
                state.cartItems.length > 0 ? "bg-gray-200" : ""
              }`}
            >
              {state.cartItems.length > 0 ? state.cartItems.length : ""}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <FaRegHeart className="font-bold relative" />
            <span
              className={`absolute top-5 right-[105px] text-[#9538E2] w-7 h-7 flex items-center justify-center rounded-full ${
                state.wishListItems.length > 0 ? "bg-gray-200" : ""
              }`}
            >
              {state.wishListItems.length > 0 ? state.wishListItems.length : ""}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
