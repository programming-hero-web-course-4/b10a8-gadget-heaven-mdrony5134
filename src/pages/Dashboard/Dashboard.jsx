import React, { useState } from "react";
import { useProduct } from "../../components/Context/CartContext";
import CartProduct from "./CartProduct";

const Dashboard = () => {
  const { state } = useProduct();
  const [isActive, setIsActive] = useState("cart");
  return (
    <div>
      <div className="bg-[#9538E2] pt-8 pb-8">
        <h1 className="text-[32px] font-bold text-white text-center">
          Dashboard
        </h1>
        <p className="w-[790px] mx-auto text-center text-white pt-4 pb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center gap-6 justify-center">
          <button
            onClick={() => setIsActive("cart")}
            className={`py-3 px-16 border  rounded-[32px]  text-[18px] font-bold ${
              isActive === "cart"
                ? "text-[#9538E2] bg-[#FFFFFF]"
                : "border-[#FFFFFF] text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setIsActive("wish")}
            className={`py-3 px-16 rounded-[32px]  text-[18px] font-bold ${
              isActive === "wish"
                ? "text-[#9538E2] bg-[#FFFFFF]"
                : "border border-[#FFFFFF] text-white"
            }`}
          >
            WishList
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-[250px]">
        {isActive === "cart" && (
          <>
            <div className="flex items-center justify-between pt-12 pb-8">
              {state.cartItems.length > 0 ? (
                <>
                  <div>
                    <h1 className="text-[24px] font-bold">Cart</h1>
                  </div>
                  <div className="flex items-center gap-6">
                    <h2 className="text[24px] font-bold">Total Pric: 999.99</h2>
                    <button className="py-3 px-5 border border-[#9538E2] rounded-[32px] text-[#9538E2] text-[18px] font-semibold">
                      Shot By Price
                    </button>
                    <button className="py-3 px-5 bg-[#9538E2] rounded-[32px] text-[18px] font-semibold text-white">
                      Purchase
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-[200px] mx-auto">
                  <h2 className="text-[32px] font-bold text-red-600 mt-20">
                    Empty Cart!
                  </h2>
                </div>
              )}
            </div>
            <div>
              {state.cartItems.length > 0 &&
                state.cartItems.map((product) => (
                  <CartProduct product={product} />
                ))}
            </div>
          </>
        )}
      </div>

      {isActive === "wish" && <p></p>}
    </div>
  );
};

export default Dashboard;
