import React, { useState } from "react";

const menuItems = [
  { title: "Espresso", image: "/menuPhotos/coffee/coffe1.jpeg" },
  { title: "Iced Coffee", image: "/menuPhotos/coffee/coffe2.jpeg" },
  { title: "Macchiato", image: "/menuPhotos/coffee/coffe3.jpeg" },
  { title: "Cream Coffee", image: "/menuPhotos/coffee/coffe4.jpeg" },
  { title: "Chocolate Coffee", image: "/menuPhotos/coffee/coffe5.jpeg" },
  { title: "Blend Coffee", image: "/menuPhotos/coffee/coffe6.jpeg" },
  { title: "Decaf Coffee", image: "/menuPhotos/coffee/coffe7.jpeg" },
  { title: "Latte", image: "/menuPhotos/coffee/coffe8.jpeg" },
];

export default function MenuCardCollection() {
  const [showAll, setShowAll] = useState(false);

  // On large screens, show only 4 items unless expanded
  const visibleItems = showAll ? menuItems : menuItems.slice(0, 4);

  return (
    <>
    <br />

    <div className="w-full px-4 py-10 bg-gradient-to-r from-amber-900 to-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Our Coffee Selection
      </h2>

      {/* Mobile: Horizontal Scroll | Laptop+: Grid */}
      <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-hidden">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[150px] sm:min-w-[200px] lg:min-w-0 bg-gradient-to-r from-amber-900 to-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button only on large screens */}
      <div className="hidden lg:flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
    <br />
    
    </>
    
  );
}
