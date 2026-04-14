import React from 'react';
import { Link } from 'react-router-dom';

const Fotter = () => {
  return (
    <footer className="mt-16 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top section: Subscribe */}
        <div className="text-center w-full max-w-2xl mb-24">
          <h2 className="text-[26px] font-semibold text-gray-800 mb-4 tracking-wide">Subscribe now & get 10% off</h2>
          <p className="text-gray-400 mb-8 text-[15px]">Stay ahead of the trend. Subscribe now to get the latest arrivals and exclusive offers delivered to your inbox.</p>
          <div className="flex w-full h-[52px] border border-gray-300">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-grow px-5 focus:outline-none focus:bg-white bg-[#f0f4fa] text-gray-700"
            />
            <button className="bg-black text-white px-10 font-semibold text-[13px] tracking-widest hover:bg-gray-800 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="flex flex-col md:flex-row justify-between w-full mb-12 gap-12 md:gap-8">
          
          {/* Left Column - Logo and Text */}
          <div className="w-full md:w-2/5 pr-4">
            <img src="/logo.png" alt="CARTify" className="h-10 object-contain mb-8" />
            <p className="text-gray-500 text-sm leading-[1.8]">
              Cartify - Exclusive college merch and premium men's wear. Crafted for comfort, styled for campus life. Join the Cartify tribe and wear your identity.
            </p>
          </div>

          {/* Middle Column - Company Links */}
          <div className="w-full md:w-1/5 md:pl-8">
            <h3 className="font-bold text-black mb-6 tracking-wide">COMPANY</h3>
            <ul className="space-y-4 text-gray-500 text-[14px]">
              <li><Link to="/" className="hover:text-gray-900 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-900 transition">About us</Link></li>
              <li><Link to="/delivery" className="hover:text-gray-900 transition">Delivery</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Right Column - Get in Touch */}
          <div className="w-full md:w-1/5">
            <h3 className="font-bold text-black mb-6 tracking-wide">GET IN TOUCH</h3>
            <ul className="space-y-4 text-gray-500 text-[14px]">
              <li>+91 7355117197</li>
              <li>shreytiwari790@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full border-t border-gray-200 pt-6 mt-4 text-center">
          <p className="text-gray-800 text-[14px]">
            Copyright 2024@cartify.com -All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
