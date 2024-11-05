import React, { useEffect, useState } from "react";
import { useProduct } from "../components/Context/CartContext";
import CartProduct from "./CartProduct";
import WishListCard from "./WishListCard";
import { TbSortDescending2 } from "react-icons/tb";
import Purchase from "../components/Purchase/Purchase";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { state, dispatch } = useProduct();
  const [isActive, setIsActive] = useState("cart");
  const [sortedProduct, setSortedProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseTotalPrice, setPurchaseTotalPrice] = useState(0);
  const [isPurchase, setIsPurchase] = useState(false)

  // total price calculate
  const totalPrice = state.cartItems.reduce(
    (sum, product) => sum + product.price,
    0
  );


  // sort desending order
  const handleSortByPrice = () => {
    const sortedByPrice = [...state.cartItems].sort(
      (a, b) => b.price - a.price
    );
    setSortedProduct(sortedByPrice);
  };

  useEffect(() => {
    setSortedProduct(state.cartItems);
  }, [state.cartItems]);

  // purchase functionality

  const handlePurchase = () => {
    setPurchaseTotalPrice(totalPrice);
    setIsModalOpen(true);
    setIsPurchase(true)
    dispatch({ type: "EMPTY_CART" });
  };

  return (
    <div>
      <Helmet>
        <title>Gadget Haven - dasboard</title>
      </Helmet>
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
              <>
                <div>
                  <h1 className="text-[24px] font-bold">Cart</h1>
                </div>
                <div className="flex items-center gap-6">
                  <h2 className="text[24px] font-bold">
                    Total Pric: ${totalPrice.toFixed(2)}
                  </h2>
                  <button
                    onClick={handleSortByPrice}
                    className="flex items-center  gap-2 py-3 px-5 border border-[#9538E2] rounded-[32px] text-[#9538E2] text-[18px] font-semibold"
                  >
                    Sort By Price <TbSortDescending2 />
                  </button>
                  <button
                    disabled={isPurchase}
                    onClick={handlePurchase}
                    className={`py-3 px-5  rounded-[32px] text-[18px] font-semibold text-white ${isPurchase? "bg-[#9538E2] bg-opacity-50 cursor-not-allowed":"bg-[#9538E2]"}`}
                  >
                    Purchase
                  </button>
                </div>
              </>
            </div>
            <div>
              {sortedProduct.length > 0 ? (
                sortedProduct.map((product) => (
                  <CartProduct key={product.product_id} product={product} />
                ))
              ) : (
                <div className="w-[200px] mx-auto">
                  <h2 className="text-[32px] font-bold text-red-600 mt-20">
                    Empty Cart!
                  </h2>
                </div>
              )}
            </div>
          </>
        )}

        {isActive === "wish" && (
          <>
            <div>
              {state.wishListItems.length > 0 ? (
                <>
                  <div>
                    <h1 className="text-[24px] font-bold pt-12 pb-8">
                      WishList
                    </h1>
                  </div>
                </>
              ) : (
                <div className="w-[400px] mx-auto">
                  <h2 className="text-[32px] font-bold text-red-600 mt-32 ml-20">
                    Empty WishList!
                  </h2>
                </div>
              )}
            </div>
            <div>
              {state.wishListItems.length > 0 &&
                state.wishListItems.map((product) => (
                  <WishListCard key={product.product_id} product={product} />
                ))}
            </div>
          </>
        )}
      </div>

      {/* modal open */}
      {isModalOpen && (
        <Purchase
          purchaseTotalPrice={purchaseTotalPrice}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
