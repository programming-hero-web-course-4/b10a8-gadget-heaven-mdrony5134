import React from "react";

const GadgetCard = ({ product }) => {
  const { product_image, product_title, price } = product;
  return (
    <div className="bg-[#FFFFFF] w-[322px] rounded-2xl p-6">
      <div className="w-[280px] rounded-xl">
        <img
          className="w-fulll h-[200px] mx-auto overflow-hidden"
          src={product_image}
          alt="product image"
        />
      </div>
      <h2 className="text-[24px] text-[#09080F] font-semibold">
        {product_title}
      </h2>
      <p className="text-[#09080F99] font-medium text-[20px]">
        Price: ${price}
      </p>
      <button className="border border-[#9538E2] px-5 py-2 text-[#9538E2] text[18px] font-semibold rounded-[32px] mt-2 hover:bg-[#9538E2] hover:text-white">
        View all
      </button>
    </div>
  );
};

export default GadgetCard;
