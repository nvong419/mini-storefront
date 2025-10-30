// src/app/components/ProductCard.jsx
'use client';

// Display product as a card with buttons
export default function ProductCard({ key, name, price, stock }) {
    return (
        <div class = "card">
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock > 0 ? 'In stock' : 'Out of stock'}</p>
            <button onClick = {() => {alert('Added to cart!')}}>Add to cart</button>
        </div>
    );
}