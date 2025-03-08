import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Expirence from "./Components/Expirence";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="w-full h-fit bg-black/80 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expirence />
      <Projects />
      <Contact />
    </div>
  );
}
