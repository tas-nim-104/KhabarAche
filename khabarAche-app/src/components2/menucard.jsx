import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const menuCard = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <div>
        <img className=" rounded-xl" src={props.img} alt="img1" />
      </div>
      <div className=" p-2 mt-5">
        <div className=" flex flex-row justify-between">
          <h3 className=" font-semibold text-xl">{props.title}</h3>
          <h3 className=" font-semibold text-xl">{props.value}</h3>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-sm text-gray-700 mb-2">
            This is a delicious meal available for order. Enjoy the best taste
            with fresh ingredients!
          </p>
          <div className="flex justify-between items-center gap-4">
    <div className="flex gap-2">
      <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
        Like
      </button>
      <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
        Comment
      </button>
    </div >
    <span className="bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
      <FaShoppingCart size={20} />
    </span>
  </div>

        </div>
      </div>
    </div>
  );
};

export default menuCard;
