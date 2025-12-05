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
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Navigation />

      {/* ROTAS */}
      <Routes>
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

        <Route path="/store" element={<Store />} />

        <Route path="/cart" element={<div>Carrinho vazio por enquanto!</div>} />
      </Routes>
    </div>
  );
}

export default App;