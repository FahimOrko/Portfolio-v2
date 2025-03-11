import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Expirence from "./Components/Expirence/Expirence";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="w-full h-fit bg-black/80 font-sans scroll-smooth">
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
