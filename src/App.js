import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import StyleSwitcher from "./Components/Switcher/StyleSwitcher";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ScrollTop from "./Components/ScrollTop";
import Preloader from "./Components/Preloader/Preloader";
import Particle from "./Components/Particle";
import Footer from "./Components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <main className="main__app">
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <ScrollTop smooth />
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Portfolio />} />
          </Routes>
          <Particle darkMode={darkMode} />
          <Footer />
          <StyleSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;
