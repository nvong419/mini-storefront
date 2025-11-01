// src/app/components/PriceFilter.jsx
'use client';

// Controlled inputs that update parent state
export default function PriceFilter({ value, onChange }) {
  return (
    <div className="filter-section">
      <label htmlFor="maxPrice">Max Price</label>
      <input
        id="maxPrice"
        type="number"
        min="0"
        max="2000"
        placeholder="Enter max price"
        value={value === 0 ? '' : value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}