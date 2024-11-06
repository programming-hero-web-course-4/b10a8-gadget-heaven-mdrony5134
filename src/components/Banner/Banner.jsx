import React from "react";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <>
      <div className="bg-[#9538E2] pb-[268px]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[56px] font-bold text-[#FFFFFF] leading-[72px] pt-5">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-[#FFFFFF] mt-4 mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <button className="px-8 py-4 bg-[#FFFFFF] shadow-md text[20px] text-[#9538E2] font-bold rounded-[32px]">
            Shop Now
          </button>
        </div>
      </div>
      <BannerImage />
    </>
  );
};

export default Banner;
