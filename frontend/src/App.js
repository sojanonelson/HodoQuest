import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ServiceDetails from "./Pages/ServiceDetails";
import Package1 from "./components/ServicePage/Package1";
import Package2 from "./components/ServicePage/Package2";
import Package3 from "./components/ServicePage/Package3";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<Products />} />
        <Route path="/service" element={<ServiceDetails/>}/>
        <Route path='/premium-economic' element={<Package1/>}/>
        <Route path='/premium' element={<Package2/>}/>
        <Route path='/project-development' element={<Package3/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
