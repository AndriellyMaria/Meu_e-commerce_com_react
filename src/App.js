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

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Contact />
      <Footer />

      <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/store" element={<Store />} />
</Routes>
    </div>
  );
}

export default App;