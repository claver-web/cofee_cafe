import React from "react";

export default function AboutUsCompo() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          About Us
        </h1>

        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold text-red-600">La Bella Dine</span>, 
            where passion meets flavor. Since 2010, we’ve been serving authentic 
            Italian-inspired dishes crafted with love, tradition, and the freshest 
            locally sourced ingredients.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To bring people together through food. Every dish we serve is 
              designed to create memories, spark joy, and celebrate the simple 
              pleasures of dining. We believe food is not just nourishment, but 
              an experience to be shared.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the most loved neighborhood restaurant, known for our 
              hospitality, authenticity, and commitment to quality. We strive to 
              create a warm space where guests feel like family.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Chef 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Chef Marco Rossi"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Chef Marco Rossi</h3>
            <p className="text-sm text-gray-500">Head Chef</p>
            <p className="mt-3 text-gray-600">
              Marco brings 20+ years of experience in Italian cuisine, crafting 
              flavors that honor tradition with a modern twist.
            </p>
          </div>

          {/* Chef 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Chef Isabella Conti"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Chef Isabella Conti</h3>
            <p className="text-sm text-gray-500">Pastry Chef</p>
            <p className="mt-3 text-gray-600">
              Isabella is a master of Italian desserts, creating heavenly tiramisu 
              and pastries that leave guests in awe.
            </p>
          </div>

          {/* Manager */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Luca Moretti"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Luca Moretti</h3>
            <p className="text-sm text-gray-500">Restaurant Manager</p>
            <p className="mt-3 text-gray-600">
              Luca ensures every guest feels welcome, delivering exceptional 
              service and maintaining the cozy family atmosphere we are known for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
