import React from "react";
import Navbar from "./components/nav/Navbar";
import Prodects from "./components/pages/Prodects";
import Slide from "./components/slider/Slide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Slide />
        <Prodects />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
