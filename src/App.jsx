import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
