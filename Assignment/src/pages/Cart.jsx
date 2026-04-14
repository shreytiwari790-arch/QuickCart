import React, { useContext } from 'react';
import Layout from '../layout/Layout';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 min-h-[60vh] mt-4">
        <h1 className="text-[28px] font-bold text-gray-900 mb-8 tracking-wide">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <svg className="w-20 h-20 text-gray-300 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-[22px] font-semibold text-gray-800 mb-2">Your cart is completely empty</h2>
            <p className="text-gray-500 mb-8 font-light text-[15px]">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/categories" className="bg-[#4bc2e8] hover:bg-[#3ab2d8] text-white font-medium py-3 px-10 rounded-full transition-colors shadow-sm tracking-wide">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Cart Items List */}
            <div className="w-full lg:w-[65%] flex flex-col gap-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border border-gray-200 p-5 rounded-md shadow-sm bg-white hover:border-gray-300 transition-colors">
                  
                  {/* Product Info */}
                  <div className="flex items-center gap-6 w-full sm:w-auto">
                    <div className="h-24 w-24 flex-shrink-0 bg-white border border-gray-100 rounded flex items-center justify-center p-2">
                      <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[15px] font-bold text-gray-900 line-clamp-2 md:max-w-[250px]">{item.title}</h3>
                      <p className="text-gray-500 mt-1.5 text-[14px]">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between w-full sm:w-auto mt-6 sm:mt-0 gap-6 sm:gap-10">
                    
                    {/* Size Selector Mockup */}
                    {/* In a real app we'd map size arrays. Here we just maintain a clean UI for it. */}

                    {/* Quantity Controller */}
                    <div className="flex items-center border border-gray-300 rounded bg-gray-50 shadow-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, 'decrement')}
                        className="px-3.5 py-1.5 text-gray-600 hover:bg-gray-200 transition"
                      >-</button>
                      <span className="px-4 py-1.5 text-[14px] font-semibold border-x border-gray-300 min-w-[2.5rem] text-center bg-white">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, 'increment')}
                        className="px-3.5 py-1.5 text-gray-600 hover:bg-gray-200 transition"
                      >+</button>
                    </div>

                    {/* Total Price & Remove Button */}
                    <div className="flex items-center gap-6 min-w-[6rem] justify-end">
                      <p className="font-bold text-gray-900 text-[16px]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors p-2 rounded-full"
                        title="Remove item"
                      >
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Order Summary Right Panel */}
            <div className="w-full lg:w-[35%]">
              <div className="border border-gray-200 rounded-lg p-7 bg-white shadow-sm sticky top-10">
                <h2 className="text-[20px] font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Summary</h2>
                
                <div className="flex flex-col gap-4 text-[15px]">
                  <div className="flex justify-between text-[#4b5563]">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-[#4b5563]">
                    <span>Shipping estimate</span>
                    <span className="font-medium text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  {shipping > 0 && (
                    <p className="text-[13px] text-gray-400 -mt-2">Free shipping applies on orders over $100</p>
                  )}

                  <hr className="border-gray-200 my-3" />

                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-900 text-[18px]">Order Total</span>
                    <span className="font-bold text-[#4bc2e8] text-[24px]">${total.toFixed(2)}</span>
                  </div>

                  <Link to="/login" className="w-full block text-center bg-black hover:bg-gray-800 text-white font-semibold py-3.5 rounded-full transition shadow-sm tracking-wide">
                    Proceed to Checkout
                  </Link>

                  <div className="mt-5 flex items-center justify-center gap-2 text-green-600 text-[13px] font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Secure Encrypted Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
