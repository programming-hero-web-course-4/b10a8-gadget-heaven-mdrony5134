import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { useParams } from "react-router-dom";

const SingleProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState();
  const { product_id } = useParams();
  //   console.log(product_id);

  useEffect(() => {
    const loadProductData = async () => {
      const fetchProductData = await fetch("/Data/productData.json");
      const productData = await fetchProductData.json();
      const findProductData = productData.find(
        (product) => product.product_id === product_id
      );
      if (findProductData) {
        setSingleProduct(findProductData);
      }
    };
    loadProductData();
  }, [product_id]);
  return (
    <div>
      <div className="bg-[#9538E2] pt-8 pb-[230px]">
        <h1 className="text-[32px] font-bold text-white text-center">
          Product Details
        </h1>
        <p className="w-[790px] mx-auto text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-[#FFFFFF] rounded-3xl shadow-md relative bottom-[190px] p-[30px] overflow-hidden">
        <div className="flex gap-8">
          {singleProduct && (
            <>
              <div>
                <img
                  className="w-[425px]"
                  src={singleProduct.product_image}
                  alt="product image"
                />
              </div>
              <div>
                <h2 className="text-[#09080F] text-[28px] font-bold">
                  {singleProduct.product_title}
                </h2>
                <p className="text-[20px] font-semibold text-[#09080FCC] mt-3 mb-4">
                  Price: ${singleProduct.price}
                </p>
                <p className="border-[#309C08] text-[#309C08] border rounded-[32px] w-[87px] px-[7px] py-[7px] bg-[#309C081A] text-center font-medium">
                  {singleProduct.availability ? "In Stock" : "Out Of Stock"}
                </p>
                <p className="text-[18px] text-[#09080F99] my-4">
                  {singleProduct.description}
                </p>
                <h2 className="text-[#09080F] font-bold text-[18px] mb-3">
                  Specification:
                </h2>
                <ol className="list-decimal ml-5">
                  {singleProduct.specifications.map((product) => (
                    <li className="text-[18px] text-[#09080F99]">
                      {product.value} {product.key}
                    </li>
                  ))}
                </ol>
                <h2 className="text-[#09080F] font-bold text-[18px] mt-4">
                  Rating:
                </h2>
                <p className="flex items-center gap-2">
                  <TiStarFullOutline className="text-[#F9C004] text-[25px]" />
                  <TiStarFullOutline className="text-[#F9C004] text-[25px]" />
                  <TiStarFullOutline className="text-[#F9C004] text-[25px]" />
                  <TiStarFullOutline className="text-[#F9C004] text-[25px]" />
                  <FaRegStar className="text-[25px]" />
                  <span className="px-[14px] py-[7px] rounded-[32px] bg-[#09080F0D]">
                    {singleProduct.rating}
                  </span>
                </p>
                <button className="bg-[#9538E2] text-white px-[22px] py-[11px] text-[18px] font-bold shadow-md rounded-[32px] flex items-center gap-1 mt-7">
                  Add To Cart <IoCartOutline />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
