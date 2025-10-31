// src/app/components/CartSummary.jsx
'use client';

// Show item count + total price; decrement and reset actions
export default function CartSummary({ cart, onReset }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Items: {totalItems}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={onReset}>Reset Cart</button>
    </div>
  );
}
