import React from "react";
import { useNavigate, Link } from "react-router-dom";  // ✅ added Link
import productImg from "./assets/image1.jpg";
import logo from "./assets/logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-orange-100 text-gray-800 overflow-x-hidden">

     {/* 🔥 NAVBAR FIXED */}
<div className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <img src={logo} alt="AvanTech Logo" className="h-12 w-auto object-contain" />
    {/* MENU */}
    <div className="flex gap-6 items-center text-white">

      <Link to="/" className="hover:text-pink-400">Home</Link>
      <Link to="/products" className="hover:text-pink-400">Products</Link>
      <Link to="/contact" className="hover:text-pink-400">Contact</Link>

      {/* LOGIN */}
      <Link to="/login">
        <button className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition">
          Login
        </button>
      </Link>

      {/* SIGNUP */}
      <Link to="/signup">
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
          Signup
        </button>
      </Link>

    </div>
  </div>
</div>

{/* SPACE FIX (IMPORTANT) */}
<div className="pt-24"></div>

      {/* 🔥 HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 
        rounded-2xl shadow-2xl p-10 max-w-6xl w-full flex gap-10">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-red-500">
              Biggest Water Wastage Problem?
            </h1>

            <p className="text-gray-300 mt-3">
              Water tank overflow wastes thousands of liters daily.
            </p>

            <h2 className="text-green-400 mt-3 font-semibold">
              ✔ Smart Solution: Jal Raksha
            </h2>

            <button
              onClick={() => navigate("/products")}
              className="bg-pink-500 px-6 py-3 rounded-lg mt-4 hover:bg-pink-600">
              Explore Product
            </button>
          </div>

          {/* RIGHT */}
          <img src={productImg} alt="product" className="rounded-xl shadow-lg w-80" />

        </div>
      </section>

      {/* 💡 ABOUT */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold text-purple-600 mb-6">
          Welcome To AvanTech
        </h2>

        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
          Avan Tech Innovation is a modern technology company focused on smart
          water management solutions. Our mission is to prevent water wastage
          using automation and intelligent systems.
        </p>
      </section>

      {/* 📊 STATS */}
      <section className="grid grid-cols-3 text-center py-10 bg-gray-100">
        <div>
          <h1 className="text-3xl font-bold text-purple-600">50+</h1>
          <p>Projects Completed</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-purple-600">30+</h1>
          <p>Happy Clients</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-purple-600">5+</h1>
          <p>Years Experience</p>
        </div>
      </section>

      {/* ⚙️ ADVANTAGES */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl text-center font-bold mb-10">
          Advantages
        </h2>

        <div className="grid md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">

          <div className="space-y-4">
            <div className="p-4 border rounded-lg hover:shadow-lg">Electro-mechanical</div>
            <div className="p-4 border rounded-lg hover:shadow-lg">Suitable for Sump tanks</div>
            <div className="p-4 border rounded-lg hover:shadow-lg">Domestic & Industrial use</div>
          </div>

          <img
            src={productImg}
            alt="device"
            className="mx-auto rounded-xl shadow-lg hover:scale-105 transition"
          />

          <div className="space-y-4">
            <div className="p-4 border rounded-lg hover:shadow-lg">Multiple tank support</div>
            <div className="p-4 border rounded-lg hover:shadow-lg">Maintenance free</div>
            <div className="p-4 border rounded-lg hover:shadow-lg">Eco-friendly</div>
          </div>

        </div>
      </section>

      {/* 🛠 SERVICES */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {["Web Development", "Automation", "IoT Solutions", "UI/UX"].map((item) => (
            <div
              key={item}
              className="p-6 bg-white rounded-xl shadow hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 💬 CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to grow your business?
        </h2>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/919121365604?text=Hello%20I%20am%20interested%20in%20your%20product",
              "_blank"
            )
          }
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200"
        >
          Get Started
        </button>
      </section>

      {/* 📞 FOOTER */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div>
            <h2 className="text-xl font-bold mb-3">AvanTech</h2>
            <p>Smart water solutions & automation systems.</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <p>About</p>
            <p>Products</p>
            <p>Contact</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email: info@avantech.com</p>
            <p>Phone: 9888933347</p>
          </div>

        </div>

        <p className="text-center mt-6 text-gray-400">
          © 2026 AvanTech Innovation
        </p>
      </footer>

    </div>
  );
}