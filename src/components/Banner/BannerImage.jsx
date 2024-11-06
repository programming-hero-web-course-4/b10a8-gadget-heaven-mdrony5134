import React from "react";

const BannerImage = () => {
  return (
    <div className="w-[1140px] mx-auto rounded-[32px] p-6 border-[3px] border-[#FFFFFF4D] shadow-md absolute top-[450px] left-[200px]">
      <div>
        <img
          className="w-full h-[611px] rounded-[32px]"
          src="./images/banner.jpg"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default BannerImage;
