import React from 'react';
import Layout from '../layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row gap-12 md:gap-24 items-start pb-24 mt-4">
        
        {/* Left Form Box */}
        <div className="w-full md:w-[45%] border border-gray-400 rounded-sm p-8 md:p-10 shadow-sm">
          <h2 className="text-[28px] font-bold text-[#1e293b] mb-8 tracking-wide">Get in Touch</h2>
          
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[15px] font-semibold text-[#374151]">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-gray-700"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[15px] font-semibold text-[#374151]">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-gray-700"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[15px] font-semibold text-[#374151]">Message</label>
              <textarea 
                rows="6"
                placeholder="Your message..." 
                className="border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-y text-sm text-gray-700"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="mt-3 bg-[#4bb1df] hover:bg-[#3ba1cf] text-white font-medium py-2.5 px-6 rounded-[4px] w-max transition-colors text-[15px]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Contact Info */}
        <div className="w-full md:w-[55%] pt-4 md:pt-14 md:pl-6">
          <h2 className="text-[24px] font-semibold text-[#1e293b] mb-10 tracking-wide">Contact Information</h2>
          
          <div className="flex flex-col gap-8">
            
            {/* Address */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d63384" stroke="#d63384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3" fill="white"></circle>
                </svg>
                <span className="font-bold text-[#1f2937] text-[15px]">Address:</span>
              </div>
              <p className="text-[#4b5563] text-[15px] ml-7 leading-relaxed">Noida,Delhi</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d63384" stroke="#d63384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="font-bold text-[#1f2937] text-[15px]">Phone:</span>
              </div>
              <p className="text-[#4b5563] text-[15px] ml-7 leading-relaxed">7355117197</p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d0bdf4" stroke="#d0bdf4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="white"></path>
                </svg>
                <span className="font-bold text-[#1f2937] text-[15px]">Email:</span>
              </div>
              <p className="text-[#4b5563] text-[15px] ml-7 leading-relaxed">shreytiwari790@gmail.com</p>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Contact;
