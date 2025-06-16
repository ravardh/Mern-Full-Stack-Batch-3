import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main className="d-flex" id="main">
          <Sidebar />
          <section className="w-100 h-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
