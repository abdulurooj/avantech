import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-900 p-4 mb-3 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p>{item.name}</p>
                  <p className="text-purple-400">₹{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl mt-4">Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}