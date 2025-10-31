// src/App.jsx
import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ButtonAppBar from './componant/navbar';
import Footer from './componant/footer';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Carts from './pages/CartPage';
import Product from './pages/ProductsPage';

// Shop / cart pages (from the cart context solution)
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function AppRoutes() {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/product" element={<Product />} />

        {/* Shop / cart routes */}
        <Route path="/shop" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* إذا بدك: مسار افتراضي إلى Home عند أي مسار غير معروف */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
