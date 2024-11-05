import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useProduct } from "../components/Context/CartContext";
import { toast } from "react-toastify";

const WishListCard = ({ product }) => {
  const { product_image, product_title, description, price, product_id } =
    product;

    // again add product funtionality
  const { dispatch } = useProduct();
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_PRODUCET", payload: product });
    toast.success("Product added to cart successfully", {
      position: "top-center",
    });
  };

  // remove wishlist funtionality
  const handleRemoveWishList = (product_id) => {
    dispatch({ type: "REMOVE_WISHLIST", payload: product_id });
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 mb-5">
      <div className="flex gap-8">
        <img
          className="w-[200px] overflow-hidden object-contain"
          src={product_image}
          alt="product image"
        />
        <div className="w-[660px]">
          <h2 className="text-[24px] font-semibold">{product_title}</h2>
          <p className="py-4 text-[18px] text-[#09080F99]">{description}</p>
          <p className="text-[20px] font-medium text-[#09080FCC]  mb-4">
            Price: ${price}
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="py-3 px-5 bg-[#9538E2] rounded-[32px] text-[18px] font-semibold text-white"
          >
            Add To Cart
          </button>
        </div>
        <button
          onClick={() => handleRemoveWishList(product_id)}
          className="flex items-center justify-center ml-40"
        >
          <IoIosCloseCircleOutline className="text-[40px] text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
