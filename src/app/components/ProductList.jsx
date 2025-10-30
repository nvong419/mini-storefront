// src/app/components/ProductList.jsx
'use client';
// Map products to cards (key = {id})
import ProductCard from "./ProductCard";
export default function ProductList({ products }) {
    return (
        <div className="product-grid">
            <ul>
                {products.map((p) => (
                    // <li key={p.id}>{p.name} - ${p.price} - {p.stock > 0 ? 'In stock' : 'Out of stock'}</li>
                    <ProductCard key={p.id} name={p.name} price={p.price} stock={p.stock} />
                ))}
            </ul>
        </div>
    );
}