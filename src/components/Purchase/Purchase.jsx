import React, { useEffect, useRef } from "react";

const Purchase = ({ onClose, priceBeforeEmpty }) => {
  const dialogeRef = useRef(null);
  useEffect(() => {
    if (dialogeRef.current) {
      dialogeRef.current.showModal();
    }

    return () => {
      if (dialogeRef.current) {
        dialogeRef.current.close();
      }
    };
  }, []);
  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={dialogeRef}>
        <div className="modal-box">
          <div>
            <img
              className="w-[70px] mx-auto"
              src="/images/success.png"
              alt="success image"
            />
          </div>
          <p className="py-4 text-[24px] font-bold text-center border-b border-[#09080F1A]">
            Payment Successfully
          </p>
          <p className="text-[#09080F99] font-semibold text-center mt-4">
            Thanks For Purchasing
            <span className="text-orange-500 text-2xl">🤗</span>
          </p>
          <p className="text-[#09080F99] font-semibold text-center mt-4">
            Total Price: ${priceBeforeEmpty.toFixed(2)}
          </p>
          <div className="modal-action">
            <button
              onClick={() => onClose()}
              className="btn w-[430px] mx-auto rounded-[32px]"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Purchase;
