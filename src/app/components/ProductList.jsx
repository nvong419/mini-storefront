// src/app/components/ProductList.jsx
'use client';
// Map products to cards (key = {id})
import ProductCard from "./ProductCard";
export default function ProductList({ products, onAddToCart }) {
    return (
        <div className="product-grid">
            {products.map((p) => (
                // <li key={p.id}>{p.name} - ${p.price} - {p.stock > 0 ? 'In stock' : 'Out of stock'}</li>
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}     
        </div>
    );
}