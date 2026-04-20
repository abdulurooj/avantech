import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";  
import logo from "./assets/logo.png";
import WhatsAppButton from "./WhatsAppButton.jsx";    
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Contacts from "./Contacts.jsx";
import Cart from "./Cart.jsx";
import { useCart } from "./CartContext.jsx";
import ChatBot from "./ChatBot.jsx";
// IMPORT ALL IMAGES
import img1 from "./assets/image1.jpg"
import img2 from "./assets/image2.jpg"
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

import hero from "./assets/hero.png";

function App() {
  const { cart } = useCart();
  const [dark, setDark] = React.useState(true);

  return (
  <div className="bg-gradient-to-b from-black to-gray-900 text-gray-300 min-h-screen">

    {/* NAVBAR */}
    <div className="flex gap-6 items-center text-white">

  <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/products">Products</Link>
  <Link to="/contact">Contact</Link>

  {/* LOGIN BUTTON */}
  <Link to="/login">
    <button className="bg-pink-600 px-4 py-1 rounded hover:bg-pink-700">
      Login
    </button>
  </Link>

  {/* SIGNUP BUTTON */}
  <Link to="/signup">
    <button className="border border-pink-500 px-4 py-1 rounded hover:bg-pink-600">
      Signup
    </button>
  </Link>

</div>
    <div className="fixed top-0 w-full bg-black/70 backdrop-blur-lg shadow-lg z-50">
      <div className="flex justify-between items-center px-10 py-4">

    {/* LOGO */}
    <h1 className="text-pink-500 font-bold text-xl cursor-pointer">
      AvanTech
    </h1>

    {/* MENU */}
    <div className="flex gap-6 text-white">
      <a href="#home" className="hover:text-pink-400">Home</a>
      <a href="#about" className="hover:text-pink-400">About Us</a>
      <a href="#products" className="hover:text-pink-400">Products</a>
      <a href="#contact" className="hover:text-pink-400">Contact</a>
    </div>

    {/* BUTTON */}
    <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600">
      Login / Signup
    </button>
  </div>
</div>

      {/* 🔥 MAIN CONTENT */}
      <div className="pt-20 px-4">

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* 🔥 FLOATING WHATSAPP */}
        <WhatsAppButton />

        {/* 🔥 BACK TO TOP BUTTON */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 bg-pink-600 px-4 py-10 rounded-full shadow-lg hover:scale-110 transition"
        >
          ↑
        </button>

      </div>

      {/* 🔥 FOOTER */}
      <footer className="bg-black border-t border-white/10 mt-10 p-6 text-center text-gray-400">
        <h2 className="text-xl text-pink-500 font-bold mb-2">AvanTech Innovation</h2>
        <p>Providing smart water solutions & automation systems.</p>
        <p className="text-sm mt-10">© 2026 All rights reserved</p>
      </footer>

    </div>
  );
}          

export default App;