import React, { useState, useRef ,useEffect} from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import img2 from "../assets/foodimg/img_2.jpg";
import MenuCard from "../components2/menucard";

const Menu = () => {
  const scrollRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollTo({
        left: current.scrollLeft + (direction === "left" ? -300 : 300),
        behavior: "smooth",
      });
    }
  };

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="flex flex-col justify-center lg:px-0">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Today's Available Foods
      </h1>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="hover:black-500 transition absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronLeft size={24} />
        </button>

        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto flex-nowrap scrollbar-hide px-5 py-2 rounded-lg bg-white/20 backdrop-blur-xl shadow-lg"
          whileTap={{ cursor: "grabbing" }}
        >
          {[
            { img: img2, title: "Rice&Currry", value: "Free" },
            { img: img2, title: "Rice&Currry", value: "Free" },
            { img: img2, title: "Rice&Currry", value: "$4.49" },
            { img: img2, title: "Rice&Currry", value: "Free" },
            { img: img2, title: "Rice&Currry", value: "$3.99" },
            { img: img2, title: "Rice&Currry", value: "$3.99" },
            { img: img2, title: "Rice&Currry", value: "Free" },
            { img: img2, title: "Rice&Currry", value: "Free" },
          ].map((item, index) => (
            <MenuCard key={index} {...item} onClick={() => openModal(item)} />
          ))}
        </motion.div>

        <button
          onClick={() => scroll("right")}
          className="hover:bg-gray-500 absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg lg:w-3/5 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-900 flex flex-col lg:flex-row items-center lg:items-start relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl hover:text-red-500 transition"
            >
              ✖
            </button>
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="sm:w-2/5 md:w-2/3 lg:w-1/3 rounded-md"
            />
            <div className="lg:ml-6 mt-4 lg:mt-0 flex flex-col">
              <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
              <p className="text-gray-700 mt-2">
              This is a delicious meal available for order. Enjoy the best taste with fresh ingredients!
              </p>
              <div className="flex justify-between items-center gap-4 mt-4">
                <div className="flex gap-2">
                  <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
                    Like
                  </button>
                  <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
                    Comment
                  </button>
                </div>
                <span className="bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
                  <FaShoppingCart size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
