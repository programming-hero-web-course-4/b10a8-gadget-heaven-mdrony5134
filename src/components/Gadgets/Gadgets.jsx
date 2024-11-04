import React, { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";

const Gadgets = () => {
  const [allProduct, setAllProduct] = useState([]);
  const loadProductData = async () => {
    const fetchProductData = await fetch("/Data/productData.json");
    const productData = await fetchProductData.json();
    setAllProduct(productData);
  };
  useEffect(() => {
    loadProductData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-[#0B0B0B] font-bold text-[42px] text-center mb-12">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex gap-6">
        <div className="w-[240px] h-[400px] bg-[#FFFFFF] border border-[#09080F1A] rounded-2xl shadow-md">
          <div className="text-center my-6">
            <button className="bg-[#9538E2] text-white px-5 py-3 rounded-[32px] w-[192px] text-[18px] font-medium">
              All Products
            </button>
          </div>
          <div className="text-center my-6">
            <button className="bg-[#09080F0D] px-5 py-3 rounded-[32px] w-[192px] text-[#09080F99] text-[18px] font-medium">
              Laptop
            </button>
          </div>
          <div className="text-center my-6">
            <button className="bg-[#09080F0D] px-5 py-3 rounded-[32px] w-[192px] text-[#09080F99] text-[18px] font-medium">
              Phone
            </button>
          </div>
          <div className="text-center my-6">
            <button className="bg-[#09080F0D] px-5 py-3 rounded-[32px] w-[192px] text-[#09080F99] text-[18px] font-medium">
              Accessories
            </button>
          </div>
          <div className="text-center my-6">
            <button className="bg-[#09080F0D] px-5 py-3 rounded-[32px] w-[192px] text-[#09080F99] text-[18px] font-medium">
              Smart Watch
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-[100px]">
          {allProduct.map((product)=> <GadgetCard key={product.product_id} product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
