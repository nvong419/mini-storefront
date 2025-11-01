// src/app/components/CategoryFilter.jsx
'use client';

// Controlled inputs that update parent state
export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="filter-section">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
        <option value="Produce">Produce</option>
      </select>
    </div>
  );
}