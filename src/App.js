import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import NavDropdown from "./components/NavDropdown";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Custom404 from "./pages/Custom404";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideDropdown = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideDropdown);
    return () => {
      window.removeEventListener("resize", hideDropdown);
    };
  });

  return (
    <Router>
      <Navbar toggle={toggle} />
      <NavDropdown isOpen={isOpen} toggle={toggle} />
      <SocialMediaLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </Router>
  );
}

export default App;
