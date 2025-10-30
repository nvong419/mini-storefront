// src/app/components/Catalog.jsx
'use client';

//Fetch API data and display products
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/api/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data);
        }
        
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ProductList products={products} />
            <h3>Filter</h3>
            <h3>Cart:</h3>
            {/* <CartSummary /> */}
        </div>
        
    )
}
