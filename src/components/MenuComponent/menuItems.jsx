import React from "react";

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Bruschetta", description: "Grilled bread with tomatoes & basil", price: "$8" },
      { name: "Garlic Bread", description: "Toasted bread with garlic & herbs", price: "$6" },
      { name: "Soup of the Day", description: "Freshly prepared seasonal soup", price: "$7" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { name: "Grilled Salmon", description: "Served with lemon butter sauce", price: "$18" },
      { name: "Pasta Alfredo", description: "Creamy parmesan sauce with fettuccine", price: "$15" },
      { name: "Margherita Pizza", description: "Classic with mozzarella & basil", price: "$14" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: "$9" },
      { name: "Cheesecake", description: "Classic New York style", price: "$8" },
      { name: "Chocolate Lava Cake", description: "Served with vanilla ice cream", price: "$10" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Cappuccino", description: "Rich espresso with frothy milk", price: "$5" },
      { name: "Fresh Orange Juice", description: "100% squeezed oranges", price: "$6" },
      { name: "Red Wine (Glass)", description: "Premium selection of wines", price: "$9" },
    ],
  },
];

export default function MenuItems() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Menu
        </h1>

        {/* Menu Sections */}
        <div className="grid md:grid-cols-2 gap-10">
          {menuItems.map((section, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
