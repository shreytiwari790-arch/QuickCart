import React from 'react';
import bgImage from '../assets/background.png';

const BeforeSection1 = () => {
  return (
    <div className="mt-6 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Banner Area */}
      <div 
        className="w-full h-[400px] md:h-[450px] rounded-sm bg-cover bg-center overflow-hidden flex items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="px-8 md:px-20 z-10 w-full max-w-2xl">
          {/* <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.2] mb-8">
            Show Up In Style,<br />
            Stand Out With<br />
            Pride!
          </h1> */}
          
          <div className="flex items-center space-x-6 mt-50">
            <button className="bg-[#0b8dd8] hover:bg-[#0a7abf] text-white px-7 py-2.5 rounded hover:shadow-lg transition-all font-medium text-[15px]">
              Shop now
            </button>
            <button className="flex items-center text-gray-800 font-medium hover:text-black transition-colors group text-[15px]">
              Explore deals 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Latest Arrivals Heading */}
      <div className="mt-16 mb-4 flex items-center justify-center">
        <div className="h-[1px] bg-gray-200 w-16 md:w-24"></div>
        <h2 className="mx-6 text-xl md:text-2xl font-light text-gray-500 tracking-wide">
          LATEST <span className="font-bold text-[#0f172a]">ARRIVALS</span>
        </h2>
        <div className="h-[1px] bg-gray-200 w-16 md:w-24"></div>
      </div>
    </div>
  );
};

export default BeforeSection1;
