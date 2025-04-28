import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

// BAGIAN KONTEN

import ItShop from "./pages/ItShop"
import ItService from "./pages/ItService"
import NetSec from "./pages/NetSec"
import DigitalMarketing from "./pages/DigitalMarketing"



function App() {
  const [activeCategory, setActiveCategory] = useState("Komputer");

  return (
    <BrowserRouter basename="/gdk_website">
      <Routes>
        <Route path="/" element={<Home onCategoryChange={setActiveCategory} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/itshop" element={<ItShop activeCategory={activeCategory} />} />
        <Route path="/itservice" element={<ItService />} />
        <Route path="/netservice" element={<NetSec />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
