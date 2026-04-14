import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white border border-gray-100 p-6 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md hover:border-gray-200 transition-all h-full relative">
      <div className="w-full h-32 mb-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out mix-blend-multiply"
        />
      </div>

      <div className="text-center w-full">
        <h2 className="font-bold text-[#1a1a1a] text-[14px] truncate w-full">
          {product.title}
        </h2>
        <p className="text-gray-500 mt-1 text-[13px]">
          ${product.price}
        </p>
      </div>

      {/* Add to Cart Floating Button */}
      <button 
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 bg-[#f1f5f9] hover:bg-black text-black hover:text-white border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm"
        title="Add to Cart"
      >
        <span className="text-xl leading-none -mt-0.5">+</span>
      </button>
    </div>
  );
};

export default ProductCard;