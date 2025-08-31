import React, { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r/hsl from-amber-800 to-black-100 text-white shadow-md sticky w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-10">
            <img src="/logo/logo2.jpeg" className='w-16 rounded-full' alt="logo" />
            <div className="hidden md:flex space-x-18">
              <a className="hover:text-blue-500">Menu</a>
              
              <a href="#" className="hover:text-blue-500">Blogs</a>
                
              <a href="#" className="hover:text-blue-500">About Us</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-linear-to-r/hsl from-amber-800 to-black-100 text-white px-4 py-2 space-y-2">
          <a href="#" className="block hover:text-blue-500">Restaurant</a>
          <a href="#" className="block hover:text-blue-500">Menu</a>
          <a href="#" className="block hover:text-blue-500">Blog</a>
          <a href="#" className="block hover:text-blue-500">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
