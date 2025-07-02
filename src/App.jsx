// src/App.js
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import HireMe from './Components/HireMe';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  },[location]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <HireMe />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;