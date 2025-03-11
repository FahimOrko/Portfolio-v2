import "./index.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Expirence from "./Components/Expirence/Expirence";
import Projects from "./Components/Projects/Projects";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";

export default function App() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-fit bg-black/80 font-sans scroll-smooth">
      <Welcome />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expirence />
      <Projects />
      <Footer />
    </div>
  );
}
