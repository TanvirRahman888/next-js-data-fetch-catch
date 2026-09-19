import React from 'react';
import ProductCard from '../components/products/ProductCard';
const getProducts= async()=>{
    const res = await fetch('http://localhost:3001/products', {cache:"force-cache"});
    return res.json();
}
const ProductsPage = async() => {
    const products =await getProducts()

    return (
        <div>
            <h2>Products Page: {products.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product=><ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;