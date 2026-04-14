import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = ({ search = "", setSearch = () => {} }) => {
  const { totalItems } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="block overflow-visible">
          <img src="/logo2.png" alt="CARTify" className="h-16 md:h-[72px] -my-4 md:-my-6 object-contain mix-blend-multiply" />
        </Link>
      </div>

      {/* Classic Search Bar */}
      <div className="flex-grow max-w-lg mx-8 relative hidden md:block">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#4bc2e8] focus:ring-1 focus:ring-[#4bc2e8] text-sm text-gray-700"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Navigation Links and Buttons */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-800 hover:text-black font-[500] text-[15px] transition-colors">
          Home
        </Link>
        <Link to="/categories" className="text-gray-800 hover:text-black font-[500] text-[15px] transition-colors">
          Categories
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-black font-[500] text-[15px] transition-colors">
          About
        </Link>
        <Link to="/contact" className="text-gray-800 hover:text-black font-[500] text-[15px] transition-colors">
          Contact
        </Link>

        <div className="flex items-center space-x-6 ml-2">
          {/* Cart Icon */}
          <Link to="/cart" className="relative text-gray-800 hover:text-black transition-colors flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#e63946] text-white text-[10px] font-bold h-4.5 w-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Login Button */}
          <Link 
            to="/login" 
            className="bg-[#4bc2e8] hover:bg-[#3ab2d8] text-white px-7 py-2 rounded-full font-medium transition-colors shadow-sm"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
