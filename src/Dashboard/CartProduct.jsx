import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useProduct } from "../components/Context/CartContext";

const CartProduct = ({ product }) => {
  const { dispatch } = useProduct();
  const { product_image, product_title, description, price, product_id } = product;
  const handleRemoveProduct = (product_id) => {
    dispatch({ type: "REMOVE_PRODUCET", payload: product_id });
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 mb-5">
      <div className="flex gap-8">
        <img
          className="w-[200px] overflow-hidden object-cover"
          src={product_image}
          alt="product image"
        />
        <div className="w-[660px]">
          <h2 className="text-[24px] font-semibold">{product_title}</h2>
          <p className="py-4 text-[18px] text-[#09080F99]">{description}</p>
          <p className="text-[20px] font-medium text-[#09080FCC]">
            Price: ${price}
          </p>
        </div>
        <button
          onClick={() => handleRemoveProduct(product_id)}
          className="flex items-center justify-center ml-40"
        >
          <IoIosCloseCircleOutline className="text-[40px] text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
