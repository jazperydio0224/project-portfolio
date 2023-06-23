import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import About from "./components/about me/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </main>
  );
};

export default App;
