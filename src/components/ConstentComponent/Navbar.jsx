import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-amber-900 to-gray-900 text-white shadow-md sticky w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-10">
            <img src="/logo/logo2.webp" className='w-16 rounded-full' alt="logo" />
            <div className="hidden md:flex space-x-18">
              <NavLink to='/' className="hover:text-blue-500">Home</NavLink>

              <NavLink to='Menu' className="hover:text-blue-500">Menu</NavLink>
              
              <NavLink to='Blog' className="hover:text-blue-500">Blogs</NavLink>
                
              <NavLink to='AboutUs'  className="hover:text-blue-500">About Us</NavLink>
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
          <NavLink to="/" className="block hover:text-blue-500">Restaurant</NavLink>
          <NavLink to="Menu" className="block hover:text-blue-500">Menu</NavLink>
          <NavLink to="Blog" className="block hover:text-blue-500">Blog</NavLink>
          <NavLink to="AboutUs" className="block hover:text-blue-500">About</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
