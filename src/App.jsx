import './App.css';
import Navbar from './pages/Navbar';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <h1>React App</h1>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
