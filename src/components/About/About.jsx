import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import FAQ from "./FAQ";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Haven - about-us</title>
      </Helmet>
      <div className="bg-[#9538E2] pt-8 pb-8">
        <h1 className="text-[32px] font-bold text-white text-center">
          About Us
        </h1>
        <p className="w-[790px] mx-auto text-center text-white pt-4 pb-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
          It takes two flints to make a fire.
        </p>
      </div>
      <div className="max-w-7xl mx-auto pt-24">
        <div className="relative">
          <img
            className="w-[614px] rounded-2xl"
            src="/images/about.jpg"
            alt="about imag"
          />
        </div>
        <div className="w-[850px] bg-white shadow-xl rounded-2xl px-8 py-10 absolute left-[580px] top-[480px]">
          <div>
            <p className="text-red-600 text-[18px] font-semibold">
              Who are you
            </p>
            <h2 className="text-[40px] font-bold leading-[50px] mt-4">
              Gives you quality services at the best prices.
            </h2>
            <p className="text-gray-400 my-4">
              Aenean finibus justo vivamus mattis accumsan urna hac eros maximus
              potenti vitae. Potenti dapibus nisl congue platea felis ultrices
              eros placerat curabitur diam. Consectetuer sociosqu fusce
              pellentesque mi ridiculus lacus mauris proin viverra ligula
              maecenas. Venenatis augue praesent tristique class id pretium.
            </p>
          </div>

          <div className="flex gap-28 items-center">
            <ul className="flex flex-col">
              <li className="flex items-center  text-[18px] font-semibold text-gray-400 mb-1 gap-2">
                <FaRegCircleCheck className="text-red-600 font-semibold" />{" "}
                Support 24/7
              </li>
              <li className="flex items-center  text-[18px] font-semibold text-gray-400 mb-1 gap-2">
                <FaRegCircleCheck className="text-red-600 font-semibold" /> Best
                Quality
              </li>
              <li className="flex items-center  text-[18px] font-semibold text-gray-400 mb-1 gap-2">
                <FaRegCircleCheck className="text-red-600 font-semibold" />{" "}
                Fastest Delivery
              </li>
              <li className="flex items-center  text-[18px] font-semibold text-gray-400 mb-1 gap-2">
                <FaRegCircleCheck className="text-red-600 font-semibold" />{" "}
                Warranty 30 Days Product
              </li>
            </ul>
            <div className="flex items-center bg-white shadow-2xl rounded-xl py-3 px-7 gap-5">
              <div className="border-r-2 border-teal-200">
                <h2 className="text-[50px] text-teal-500 font-bold mr-3">
                  4.7
                </h2>
              </div>
              <div>
                <p className="flex items-center gap-2 text-[14px]">
                  (871 reviews)
                  <span className="flex">
                    <IoIosStar className="text-orange-500 text-[14px]" />
                    <IoIosStar className="text-orange-500 text-[14px]" />
                    <IoIosStar className="text-orange-500 text-[14px]" />
                    <IoIosStar className="text-orange-500 text-[14px]" />
                    <IoIosStar className="text-orange-500 text-[14px]" />
                  </span>
                </p>
                <p className="text-[18px] font-semibold leading-normal">
                  From Google <br /> Bussiness
                </p>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default About;
