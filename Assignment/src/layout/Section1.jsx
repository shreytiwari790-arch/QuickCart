import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../services/Api'
import Loader from '../components/Loader'
import Error from '../components/Error'
import ProductCard from '../components/ProductCard'

const Section1 = ({ search }) => {


    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setFiltered(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    // 🔍 Search logic
    useEffect(() => {
        const result = products.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(result);
    }, [search, products]);

    if (loading) return <Loader />;
    if (error) return <Error message={error} />;

    return (
        <div className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filtered.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}

export default Section1
