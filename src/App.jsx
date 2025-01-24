import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import Navbar from "./sections/Navbar.jsx";
import Alt_Hero from "./sections/Alt_Hero.jsx";
import Alt_Projects from "./sections/Alt_Projects.tsx";
import Alt_About from "./sections/Alt_About.tsx";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Alt_Hero />
      {/* <Hero /> */}
      <Alt_About />
      {/* <About /> */}
      <Experience />
      {/* <Alt_Projects /> */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
