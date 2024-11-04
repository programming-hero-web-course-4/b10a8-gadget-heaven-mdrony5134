import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
       <div className="max-w-7xl mx-auto pt-[100px] pb-10">
      <div className="text-center border-b border-[#09080F1A] pb-2">
        <h2 className="text-[32px] font-bold">Gadget Heaven</h2>
        <p className="text-[#09080F99]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="grid grid-cols-3 px-[282px] text-center pt-8">
        <div>
          <h2 className="text-[18px] text-[#09080F] font-bold mb-4">Service</h2>
          <p className="text-[#09080F99] mb-1">Product Support</p>
          <p className="text-[#09080F99] mb-1">Order Tracking</p>
          <p className="text-[#09080F99] mb-1">Shipping & Delivery</p>
          <p className="text-[#09080F99] mb-1">Returns</p>
        </div>
        <div>
          <h2 className="text-[18px] text-[#09080F] font-bold mb-4">Company</h2>
          <p className="text-[#09080F99] mb-1">About Us</p>
          <p className="text-[#09080F99] mb-1">Careers</p>
          <p className="text-[#09080F99] mb-1">Contact</p>
        </div>
        <div>
          <h2 className="text-[18px] text-[#09080F] font-bold mb-4">Legal</h2>
          <p className="text-[#09080F99] mb-1">Terms of Service</p>
          <p className="text-[#09080F99] mb-1">Privacy Policy</p>
          <p className="text-[#09080F99] mb-1">Cookie Policy</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
