import React from "react";

const blogPosts = [
  {
    title: "The Story Behind Our Bruschetta",
    image: "https://images.unsplash.com/photo-1604909053039-f7b75bb5e6d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    description:
      "Bruschetta has been a classic Italian starter for centuries. Our version is made with hand-picked ripe tomatoes, fresh basil, and extra virgin olive oil on artisanal bread toasted to perfection. It’s light, refreshing, and the perfect start to your dining experience.",
    date: "August 20, 2025",
    author: "Chef Marco Rossi",
  },
  {
    title: "Secrets of Our Grilled Salmon",
    image: "https://images.unsplash.com/photo-1589308078055-918f90b8b26e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    description:
      "Our salmon is sourced fresh from sustainable fisheries. Grilled over an open flame, then finished with a lemon butter sauce, this dish captures a balance of smoky flavor and delicate freshness. A guest favorite for both health and taste.",
    date: "August 22, 2025",
    author: "Chef Emily Johnson",
  },
  {
    title: "Why Our Tiramisu is Special",
    image: "https://images.unsplash.com/photo-1606756796627-b2a4ff05b4ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    description:
      "Our tiramisu follows a traditional family recipe passed down for generations. Made with layers of espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa, it’s the perfect indulgence to end your meal with elegance.",
    date: "August 25, 2025",
    author: "Chef Isabella Conti",
  },
  {
    title: "Crafting the Perfect Cappuccino",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    description:
      "A great cappuccino is an art. We use freshly roasted coffee beans, expertly pulled espresso, and velvety steamed milk to achieve that perfect balance of bold flavor and creamy texture. Every cup is made with passion and precision.",
    date: "August 28, 2025",
    author: "Barista Luca Moretti",
  },
];

export default function BlogOnItems() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Food Stories
        </h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  By {post.author} • {post.date}
                </p>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
