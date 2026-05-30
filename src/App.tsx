import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import AIAssistant from "./components/AIAssistent";


export default function App() {
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