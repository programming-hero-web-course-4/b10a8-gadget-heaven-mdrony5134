import React, { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";

const Gadgets = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const loadProductData = async () => {
    const fetchProductData = await fetch("/Data/productData.json");
    const productData = await fetchProductData.json();
    setAllProduct(productData);
    setFilterProduct(productData);
  };
  useEffect(() => {
    loadProductData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilterProduct(allProduct);
    } else {
      const filterCategoryData = allProduct.filter(
        (produt) => produt.category === selectedCategory
      );
      setFilterProduct(filterCategoryData);
    }
  }, [selectedCategory, allProduct]);

  return (
    <div className="max-w-7xl mx-auto mt-[550px]">
      <div>
        <h1 className="text-[#0B0B0B] font-bold text-[42px] text-center mb-12">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex gap-6">
        <div className="w-[240px] h-[400px] bg-[#FFFFFF] border border-[#09080F1A] rounded-2xl shadow-md mb-16">
          <div className="text-center my-6">
            <button
              onClick={() => setSelectedCategory("all")}
              className={` px-5 py-3 rounded-[32px] w-[192px] text-[18px] font-medium ${
                selectedCategory === "all"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] text-[#09080F99]"
              }`}
            >
              All Products
            </button>
          </div>
          <div className="text-center my-6">
            <button
              onClick={() => setSelectedCategory("laptop")}
              className={` px-5 py-3 rounded-[32px] w-[192px] text-[18px] font-medium ${
                selectedCategory === "laptop"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] text-[#09080F99]"
              }`}
            >
              Laptop
            </button>
          </div>
          <div className="text-center my-6">
            <button
              onClick={() => setSelectedCategory("phone")}
              className={` px-5 py-3 rounded-[32px] w-[192px] text-[18px] font-medium ${
                selectedCategory === "phone"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] text-[#09080F99]"
              }`}
            >
              Phone
            </button>
          </div>
          <div className="text-center my-6">
            <button
              onClick={() => setSelectedCategory("accessory")}
              className={` px-5 py-3 rounded-[32px] w-[192px] text-[18px] font-medium ${
                selectedCategory === "accessory"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] text-[#09080F99]"
              }`}
            >
              Accessories
            </button>
          </div>
          <div className="text-center my-6">
            <button
              onClick={() => setSelectedCategory("watch")}
              className={` px-5 py-3 rounded-[32px] w-[192px] text-[18px] font-medium ${
                selectedCategory === "watch"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] text-[#09080F99]"
              }`}
            >
              Smart Watch
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-[100px]">
          {filterProduct.length > 0 ? (
            filterProduct.map((product) => (
              <GadgetCard key={product.product_id} product={product} />
            ))
          ) : (
            <div className="col-span-full">
              <h1 className="text-[40px] font-bold text-center ml-20 text-red-500">
                Product not available!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
