// src/app/components/ProductCard.jsx
'use client';

// Display product as a card with buttons
export default function ProductCard({ product, onAddToCart }) {
    const { name, price, stock } = product;
    return (
        <div className = "card">
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock > 0 ? 'In stock' : 'Out of stock'}</p>
            <button onClick = {() => {onAddToCart(product); alert(`${name} added to cart`)}} disabled={stock <= 0}>Add to cart</button>
        </div>
    );
}