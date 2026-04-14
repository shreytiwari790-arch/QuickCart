import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/Api';

const Section2 = () => {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const getBestSellers = async () => {
            try {
                const data = await fetchProducts();
                // Utilizing the 10th-15th items from fake store API to act as distinct bestsellers
                setBestSellers(data.slice(10, 15));
            } catch (err) {
                console.error(err);
            }
        };

        getBestSellers();
    }, []);

    return (
        <div className="px-4 md:px-8 max-w-7xl mx-auto mb-6 mt-10">
            {/* BEST SELLERS Heading */}
            <div className="mb-12 flex items-center justify-center">
                <div className="h-[1px] bg-gray-200 w-16 md:w-24"></div>
                <h2 className="mx-6 text-xl md:text-2xl font-light text-gray-500 tracking-wide">
                    BEST <span className="font-bold text-[#0f172a]">SELLERS</span>
                </h2>
                <div className="h-[1px] bg-gray-200 w-16 md:w-24"></div>
            </div>

            {/* Grid for Best Sellers */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-24">
                {bestSellers.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>

            {/* Features & Policies Section */}
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-12 mt-16 pb-4">

                {/* Feature 1 */}
                <div className="flex flex-col items-center">
                    <div className="mb-5 text-gray-800">
                        {/* Exchnage Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m16 3-4 4 4 4" />
                            <path d="M12 7h5a2 2 0 0 1 2 2v2" />
                            <path d="m8 21 4-4-4-4" />
                            <path d="M12 17H7a2 2 0 0 1-2-2v-2" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 text-[16px] mb-1.5">Easy Exchange Policy</h3>
                    <p className="text-gray-400 text-[14px]">We offer hassle free exchange policy</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center">
                    <div className="mb-5 text-gray-800">
                        {/* Quality/Return Badge Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 text-[16px] mb-1.5">7 Days Return Policy</h3>
                    <p className="text-gray-400 text-[14px]">We provide 7 days free return policy</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center">
                    <div className=" text-gray-800">
                        {/* Support Headset Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 text-[16px] mb-1.5">Best Customer Support</h3>
                    <p className="text-gray-400 text-[14px]">We provide 24/7 customer support</p>
                </div>

            </div>
        </div>
    );
};

export default Section2;
