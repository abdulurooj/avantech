import React, { use, useEffect, useMemo, useState } from "react";
import { useCart } from "./CartContext";
import toast from "react-hot-toast";
import { useWishlist } from "./WishlistContext";

// ✅ IMPORT IMAGES (based on your renamed files)
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/extrasump1_eqh7vb28g.png";
import img6 from "./assets/image6.jpg";
import img7 from "./assets/image7.jpg";
import img8 from "./assets/image8.jpg";
import img9 from "./assets/image9.jpg";
import img10 from "./assets/image10.jpg";
import img11 from "./assets/image11.jpg";
import img12 from "./assets/image12.jpg";
import img13 from "./assets/image13.jpg";
import img14 from "./assets/image14.jpg";
import { propTypes } from "react-bootstrap/esm/Image";

// ✅ PRODUCTS DATA
const PRODUCTS = [
  { id: 1, name: "Submersible 2HP", price: 7828, image: img1 },
  { id: 2, name: "Submersible 1.5HP", price: 7996, image: img2 },
  { id: 3, name: "3 Phase Panel", price: 6639, image: img3 },
  { id: 4, name: "Submersible 1HP", price: 7436, image: img4 },
  { id: 5, name: "Float Switch", price: 1299, image: img5 },
  { id: 6, name: "Submersible 2HP S", price: 7828, image: img6 },
  { id: 7, name: "Submersible 1.5HP S", price: 7996, image: img7 },
  { id: 8, name: "Submersible 1HP S", price: 7436, image: img8 },
  { id: 9, name: "Submersible 2HP F", price: 8296, image: img9 },
  { id: 10, name: "Submersible 1.5HP F", price: 7904, image: img10 },
  { id: 11, name: "Submersible 1HP F", price: 7436, image: img11 },
  { id: 12, name: "3 Phase Advanced", price: 6639, image: img12 },
  { id: 13, name: "Monoblock S", price: 7438, image: img13 },
  { id: 14, name: "Monoblock F", price: 9015, image: img14 },
];

export default function Products() {
  const { cart, addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [msg, setMsg] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []); 

  const { addToWishlist } = useWishlist();
  // ✅ FILTER + SORT
  const filtered = useMemo(() => {
    let data = PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);

    return data;
  }, [search, sort]);

  // ✅ TOTAL PRICE
  const total = (cart || []).reduce((sum, p) => sum + p.price, 0);

  // ✅ ADD TO CART WITH MESSAGE
  const handleAdd = (p) => {
    addToCart(p);
    toast.success("Added to cart ✅");
    setTimeout(() => setMsg(""), 2000);
  };

  // ❤️ WISHLIST
  const toggleWishlist = (p) => {
    const exists = wishlist.find((w) => w.id === p.id);
    if (exists) {
      setWishlist(wishlist.filter((w) => w.id !== p.id));
    } else {
      setWishlist([...wishlist, p]);
    }
  };

  // 📲 WHATSAPP (FULL CART)
  const orderWhatsApp = () => {
    const phone = "919121365604";

    const items = cart
      .map((i) => `${i.name} - ₹${i.price}`)
      .join("%0A");

    const message = `Order Details:%0A${items}%0ATotal: ₹${total}`;

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // 🔗 SHARE
  const shareProduct = (p) => {
    if (navigator.share) {
      navigator.share({
        title: p.name,
        text: `Check this product: ${p.name}`,
      });
    } else {
      alert("Sharing not supported");
    }
  };

  return (
    <div className="relative bg-white/5 backdrop-blur-md 
border border-white/10 
rounded-xl p-5 
shadow-lg 
hover:shadow-pink-500/30 
hover:scale-105 
transition duration-300">
      <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">
        Our Products
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded text-black mb-4"
      />

      {/* 🔽 SORT */}
      <select
        onChange={(e) => setSort(e.target.value)}
        className="text-black p-2 mb-4"
      >
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      {/* 📊 INFO */}
      <div className="flex justify-between mb-4">
        <span>Items: {cart.length}</span>
        <span>Total: ₹{total}</span>
      </div>

      {/* ✅ MESSAGE */}
      {msg && <div className="text-green-400 mb-2">{msg}</div>}

      {/* 📲 WHATSAPP BUTTON */}
  

      {/* 🛍️ PRODUCTS GRID */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900 p-4 rounded-xl relative"
          >
            {/* ❤️ Wishlist */}
            <button
              onClick={() => addToWishlist(p)}
              className="absolute top-2 right-2 text-pink-500 text-xl"
            >
              {wishlist.find((w) => w.id === p.id) ? "❤️" : "🤍"}
            </button>

            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="mt-3 font-semibold">{p.name}</h2>
            <p className="text-purple-400 font-bold">₹{p.price}</p>

            <div className="flex flex-col gap-2 mt-3">
              <button
                onClick={() => handleAdd(p)}
                className="bg-purple-600 py-2 rounded"
              >
                Add to Cart
              </button>

              <button
                onClick={() => shareProduct(p)}
                className="border border-gray-600 py-2 rounded"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}