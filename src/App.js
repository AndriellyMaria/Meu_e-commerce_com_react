import { Routes, Route } from "react-router-dom";
import React from 'react';
import './styles.css';

import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Stats from './Components/Stats';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Store from "./Components/Store";
import ProductPage from "./Components/ProductPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import OrderPending from "./Components/OrderPending";
import OrderTracking from "./Components/OrderTracking";

import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Navigation />

      <Routes>

        {/* HOME */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Stats />
              <Contact />
              <Footer />
            </>
          } 
        />

        {/* LOJA */}
        <Route path="/store" element={<Store />} />

        {/* NOVAS ROTAS */}
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-pending" element={<OrderPending />} />
        <Route path="/order-tracking" element={<OrderTracking />} />

      </Routes>
    </div>
  );
}

export default App;