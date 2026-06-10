import { useEffect } from 'react'
import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/skills'
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import ScrollProgress from './components/ScrollProgress/scrollProgress'


function App() {
  // Révèle les sections en fondu/glissement quand elles entrent dans l'écran
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
