// src/app/components/CartSummary.jsx
'use client';

// Show item count + total price; decrement and reset actions
export default function CartSummary({ cart, onReset }) {
  // Coerce to numbers and guard against undefined
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="cart-summary">
      
      <p>Items: {totalItems}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={onReset}>Reset Cart</button>
    </div>
  );
}