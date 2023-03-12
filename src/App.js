import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Local from "./routes/Local"
import Cherry from "./routes/Cherry"
import Caddie from "./routes/Caddie"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/local" element={<Local />} />
        <Route path="/cherry" element={<Cherry />} />
        <Route path="/caddie" element={<Caddie />} />
      </Routes>
    </>
  );
}

export default App;
