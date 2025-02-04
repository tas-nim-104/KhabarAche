import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img2 from "../assets/foodimg/img_2.jpg";
import MenuCard from "../components2/menucard";

const Menu = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollTo({
        left: current.scrollLeft + (direction === "left" ? -300 : 300),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center lg:px-0 ">
      <h1 className="font-semibold text-center  text-4xl mt-24 mb-8">
        Today's available foods
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
          <MenuCard img={img2} title="Espresso" />
          <MenuCard img={img2} title="Cappuccino" />
          <MenuCard img={img2} title="Latte" />
          <MenuCard img={img2} title="Americano" />
          <MenuCard img={img2} title="Macchiato" />
          <MenuCard img={img2} title="Doppio" />
          <MenuCard img={img2} title="Macchiato" />
          <MenuCard img={img2} title="Doppio" />
        </motion.div>
        <button
          onClick={() => scroll("right")}
          className="hover:bg-gray-500 absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Menu;
