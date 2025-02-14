import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleBlur = () => {
    setIsBlurred((prevState) => !prevState);
  };

  const menuItems = [
    { id: 1, name: "Rice&Curry", price: "Free" },
    { id: 2, name: "Rice&Curry", price: "$5" },
    { id: 3, name: "Rice&Curry", price: "Free" },
    { id: 4, name: "Rice&Curry", price: "Free" },
    { id: 5, name: "Rice&Curry", price: "$12" },
    { id: 5, name: "Rice&Curry", price: "$12" },
  ];

  return (
    <div>
      <div
        className={`hero ${isBlurred ? "blur-active" : ""}`}
        onClick={toggleBlur}
      >
        <div className="hero-contents">
          <h2>Grab the opportunities to donate</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the best ingredients.
          </p>
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? "Hide Menu" : "View Menu"}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="menu-list">
          <h2 className="text-xl font-semibold mt-5">Available Foods</h2>
          <ul className="mt-2 bg-black p-4 shadow-md rounded-lg border-2 border-orange-500 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500">
  {menuItems.map((item) => (
    <li key={item.id} className="border-b border-gray-600 py-2 flex justify-between">
      <span className="text-white">{item.name}</span>
      <span className="text-white">{item.price}</span>
    </li>
  ))}
</ul>

        </div>
      )}
    </div>
  );
};

export default Hero;
