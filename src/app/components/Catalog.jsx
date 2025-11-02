// src/app/components/Catalog.jsx
'use client';

//Fetch API data and display products
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import StatusMessage from './StatusMessage';

export default function Catalog() {
    const [products, setProducts] = useState([]);   // State for products
    const [cart, setCart] = useState([]);           // State for cart
    const [filters, setFilters] = useState({category: 'All', maxPrice: Infinity});     // State for filters
    const [status, setStatus] = useState('loading');
    const [error, setError] = useState(null);

    // Fetch products from API
    useEffect(() => {
        async function fetchProducts() {
            try {
                setStatus('loading');
                const response = await fetch('/api/products');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data);
                setStatus(data.length === 0 ? 'empty' : 'success');
            } catch (err) {
                setError(err.message);
                setStatus('error');
            }
        }
        
        fetchProducts();
    }, []);

    // Function that adds a product to the cart (ProductCard.jsx)
    const handleAddToCart = (product) => {
        // Prevent adding if no stock
        if (product.stock <= 0) {
            alert(`${product.name} is out of stock!`);
            return;
        }

        // Update cart
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
            return prevCart.map((item) =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            } else {
            return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        // Update product stock (reduce by 1)
        setProducts((prevProducts) =>
            prevProducts.map((p) =>
            p.id === product.id ? { ...p, stock: p.stock - 1 } : p
            )
        );
    };

    // Function that resets the cart
    const handleResetCart = () => {
        // Restore stock based on what was in cart
        setProducts((prevProducts) =>
            prevProducts.map((p) => {
            const inCart = cart.find((item) => item.id === p.id);
            if (inCart) {
                return { ...p, stock: p.stock + inCart.quantity };
            }
            return p;
            })
        );
        
        // Clear the cart
        alert('Cart reset!');
        setCart([]);
        };

    // Functions that updates the filters
    const handleCategoryChange = (value) => {
        setFilters((prev) => ({ ...prev, category: value }));
    };

    const handlePriceChange = (value) => {
        setFilters((prev) => ({ ...prev, maxPrice: Number(value) }));
    };

    const handleResetFilters = () => {
        setFilters({ category: 'All', maxPrice: Infinity });
    };

    // Filter Products based on filter state
    const filteredProducts = products.filter((p) => {
        const categoryMatch = filters.category === 'All' || p.category === filters.category;
        const priceMatch = p.price <= filters.maxPrice;
        return categoryMatch && priceMatch;
    });

    // Main Page Content
    return (
    <div className="catalog-container">
        {/* LEFT COLUMN */}
        <aside className="sidebar">
        <h2>Filter</h2>
        <CategoryFilter value={filters.category} onChange={handleCategoryChange} />
        <PriceFilter value={filters.maxPrice} onChange={handlePriceChange} />
        <button className="reset-filter-btn" onClick={handleResetFilters}>Reset Filters</button>
        <br />
        <h2>Cart Summary</h2>
        <CartSummary cart={cart} onReset={handleResetCart} />
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">
        <h1>PRODUCTS</h1>
        <StatusMessage status={status} error={error} />
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        </main>
    </div>
    );
}
