import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./WishlistContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <App />
        <Toaster position="top-right" />
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);