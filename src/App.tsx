import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import AIAssistant from "./components/AIAssistent";

import CRMClinica from "./crm-clinica/page";

function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-[#f5e6c8]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <AIAssistant />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crm-clinica" element={<CRMClinica />} />
      </Routes>
    </BrowserRouter>
  );
}