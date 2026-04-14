import React from 'react';
import Layout from '../layout/Layout';
import AboutImg from '../assets/About.png';
import About2Img from '../assets/About2.png';

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          {/* Left Images */}
          <div className="w-full md:w-5/12 flex flex-col gap-6">
            <img src={AboutImg} alt="About Us" className="w-full rounded-2xl shadow-sm object-cover" />
            <img src={About2Img} alt="Why Choose Us" className="w-full rounded-2xl shadow-sm object-cover" />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-7/12 flex flex-col justify-start pt-2 px-2 md:px-6">
            <h1 className="text-[32px] md:text-[38px] font-bold text-indigo-600 leading-[1.2] mb-8">
              About Cartify – Where Campus Meets Style!
            </h1>
            
            <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8">
              Welcome to <span className="font-semibold text-gray-900">Cartify</span> – your one-stop destination for everything cool, casual, and campus-ready. Born out of a simple idea — to make student life more expressive and effortless — Cartify brings together fashion, functionality, and flair in one dynamic platform designed <span className="italic">by students, for students</span>.
            </p>

            <h2 className="text-[22px] font-semibold text-indigo-600 mb-4 flex items-center">
              <span className="mr-2">🎯</span> Our Mission
            </h2>
            
            <p className="text-[#4b5563] text-[15px] leading-relaxed">
              To empower students to express themselves through fashion, celebrate their campus identity, and access high-quality lifestyle products without breaking the bank. We bridge the gap between what students want and what they actually find — combining official college merchandise, streetwear-inspired men's fashion, stylish footwear, and quirky campus goodies into one seamless e-commerce experience.
            </p>
          </div>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 px-2 md:px-0">
          
          {/* Why Cartify */}
          <div>
            <h3 className="text-[20px] font-semibold text-indigo-600 mb-5 flex items-center">
              <span className="mr-2">💡</span> Why Cartify?
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 text-[#4b5563] text-[15px] mb-5 marker:text-gray-400">
              <li>Tailored for college students</li>
              <li>Affordable and high-quality</li>
              <li>Campus-exclusive drops</li>
              <li>Fast delivery & student-first service</li>
            </ul>
            <p className="text-[#4b5563] text-[15px]">
              We're more than a store — we're a movement. A community. A vibe.
            </p>
          </div>

          {/* What We Offer */}
          <div>
            <h3 className="text-[20px] font-semibold text-indigo-600 mb-5 flex items-center">
              <span className="mr-2">🛍️</span> What We Offer
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 text-[#4b5563] text-[15px] marker:text-gray-400">
              <li><span className="font-semibold text-gray-800">Campus Merchandise:</span> College-inspired merch for events or daily wear.</li>
              <li><span className="font-semibold text-gray-800">Men's Wear:</span> Tees, hoodies, smart casuals, and essentials.</li>
              <li><span className="font-semibold text-gray-800">Footwear:</span> Trendy and comfortable student shoes.</li>
              <li><span className="font-semibold text-gray-800">Goodies:</span> Gadgets, fun tools, and useful accessories.</li>
            </ul>
          </div>

          {/* Meet the Team */}
          <div>
            <h3 className="text-[20px] font-semibold text-indigo-600 mb-5 flex items-center">
              <span className="mr-2">👨‍💻</span> Meet the Team
            </h3>
            <p className="text-[#4b5563] text-[15px] leading-relaxed">
              We're a passionate group of students, designers, and tech lovers driven by a shared goal: to simplify student shopping. Cartify is built on real campus culture and powered by youth creativity.
            </p>
          </div>

          {/* Join the Community */}
          <div>
            <h3 className="text-[20px] font-semibold text-indigo-600 mb-5 flex items-center">
              <span className="mr-2">🚀</span> Join the Cartify Community
            </h3>
            <p className="text-[#4b5563] text-[15px] leading-relaxed mb-5">
              Thousands of students are already repping their campus in style — what about you? Follow us on Instagram and stay tuned for the latest drops, campus trends, and exclusive deals made just for you.
            </p>
            <p className="text-indigo-600 font-medium text-[15px] mb-1">
              Let's turn every day into a campus fashion statement.
            </p>
            <p className="text-indigo-600 font-bold text-[15px]">
              Let's Cartify.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default About;
