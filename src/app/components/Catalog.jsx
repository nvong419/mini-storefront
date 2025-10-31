// src/app/components/Catalog.jsx
'use client';

//Fetch API data and display products
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/api/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data);
        }
        
        fetchProducts();
    }, []);

    // Function that adds a product to the cart (ProductCard.jsx)
    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                // Product already in cart, update quantity
                return prevCart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                // Product not in cart, add to cart
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const handleResetCart = () => setCart([]);

    return (
        <div>
            <h2>Products</h2>
            <ProductList products={products} onAddToCart={handleAddToCart}/>
            <h3>Filter</h3>
            <h3>Cart:</h3>
            {/* <CartSummary cart = {cart} onReset = {handleResetCart}/> */}
        </div>
        
    )
}
