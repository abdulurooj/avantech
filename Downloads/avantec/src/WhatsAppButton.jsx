import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "./CartContext";

export default function WhatsAppButton() {
  const { cart } = useCart();

  const total = (cart || []).reduce((sum, p) => sum + p.price, 0);

  const handleWhatsApp = () => {
    const phone = "919121365604";

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const items = cart
      .map((i) => `${i.name} - ₹${i.price}`)
      .join("\n");

    const message = `🛒 Order Details:\n${items}\n\nTotal: ₹${total}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl z-50"
    >
      <FaWhatsapp />
    </button>
  );
}