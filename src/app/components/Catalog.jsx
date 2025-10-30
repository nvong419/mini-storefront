// src/app/components/Catalog.jsx
'use client';

//Fetch API data and display products
import { useState, useEffect } from 'react';

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
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name} - ${p.price} - {p.stock > 0 ? 'In stock' : 'Out of stock'}</li>
                ))}
            </ul>
        </div>
    )
}
