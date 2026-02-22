import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from    "./components/sections/Projects/Projects";
import Certification from "./components/sections/Certifications/Certifications";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import Skills from "./components/sections/Skills/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}

export default App;