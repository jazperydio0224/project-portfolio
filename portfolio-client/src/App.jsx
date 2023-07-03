import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import About from "./components/about me/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <Hero />
      <section className="w-[100vw] h-auto relative">
        <div className="gradient-bg">
          <div className="gradient-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="g6"></div>
            <div className="g7"></div>
            <div className="interactive"></div>
            <Projects />
            <Technologies />
            <About />
            <Footer />
          </div>
        </div>
      </section>

      {/* <section className="w-[100vw] h-auto relative"> */}
      {/* <div className="gradient-bg">
        <div className="gradient-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
          <About />
          <Footer />
        </div>
      </div> */}

      {/* </section> */}
    </main>
  );
};

export default App;
