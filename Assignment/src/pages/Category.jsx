import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/Api';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Category = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      setSelectedCategories(prev => prev.filter(c => c !== value));
    } else {
      setSelectedCategories(prev => [...prev, value]);
    }
  };

  const toggleType = (e) => {
    const value = e.target.value;
    if (selectedTypes.includes(value)) {
      setSelectedTypes(prev => prev.filter(t => t !== value));
    } else {
      setSelectedTypes(prev => [...prev, value]);
    }
  };

  // Filter logic incorporating Search, Categories, and Types
  const filteredProducts = products.filter(p => {
    // Search match
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    
    // Category match logic (mapped roughly to fakestore API)
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => {
      if (cat === 'Men') return p.category === "men's clothing";
      if (cat === 'Merchandise') return p.category === "electronics" || p.category === "jewelery";
      return p.title.toLowerCase().includes(cat.toLowerCase()) || p.category.toLowerCase().includes(cat.toLowerCase());
    });

    // Type match logic
    const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => {
      return p.title.toLowerCase().includes(type.toLowerCase()) || p.category.toLowerCase().includes(type.toLowerCase());
    });

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <Layout search={search} setSearch={setSearch}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row gap-10 mt-6">
        
        {/* Left Sidebar Filter Section */}
        <div className="w-full md:w-1/4 flex flex-col space-y-6 shrink-0 mt-2">
          {/* CATEGORIES Filter */}
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-[15px]">CATEGORIES</h3>
            <ul className="space-y-3 text-[#4b5563] text-[14px]">
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Men" onChange={toggleCategory} checked={selectedCategories.includes('Men')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Men</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Merchandise" onChange={toggleCategory} checked={selectedCategories.includes('Merchandise')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Merchandise</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Shoes" onChange={toggleCategory} checked={selectedCategories.includes('Shoes')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Shoes</label>
              </li>
            </ul>
          </div>

          {/* TYPE Filter */}
          <div className="border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-[15px]">TYPE</h3>
            <ul className="space-y-3 text-[#4b5563] text-[14px]">
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Topwear" onChange={toggleType} checked={selectedTypes.includes('Topwear')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Topwear</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Bottomwear" onChange={toggleType} checked={selectedTypes.includes('Bottomwear')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Bottomwear</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Sneakers" onChange={toggleType} checked={selectedTypes.includes('Sneakers')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Sneakers</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" value="Full Outfit" onChange={toggleType} checked={selectedTypes.includes('Full Outfit')} className="w-4 h-4 cursor-pointer accent-black" />
                <label className="cursor-pointer font-light">Full Outfit</label>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="w-full md:w-3/4 flex flex-col mb-16">
          {/* Header & Sort Selector */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center">
              <h2 className="text-xl md:text-[22px] font-light text-gray-500 tracking-wide whitespace-nowrap">
                ALL <span className="font-bold text-[#0f172a]">PRODUCTS</span>
              </h2>
              <div className="h-[1px] bg-gray-300 w-16 md:w-20 ml-6 hidden sm:block"></div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto">
              <select className="border border-gray-300 rounded px-3 py-2 text-[14px] outline-none cursor-pointer text-gray-700 bg-white w-full sm:w-auto">
                <option value="relevant">Sort by: Relevant</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className="mt-20"><Loader /></div>
          ) : error ? (
            <Error message={error} />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div key={item.id} className="w-full">
                    <ProductCard product={item} />
                  </div>
                ))
              ) : (
                <div className="col-span-full py-10 text-center text-gray-500">
                  No products match your selected filters.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
