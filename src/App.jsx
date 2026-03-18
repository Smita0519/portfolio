import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>Smita Maharjan — Frontend Developer</title>
        <meta name="description" content="Computer Engineering student crafting clean, modern web experiences with React, JavaScript, and CSS." />
        <meta name="keywords" content="Smita Maharjan, Frontend Developer, React, Nepal, Portfolio" />
        <meta property="og:title" content="Smita Maharjan - Frontend Developer" />
        <meta property="og:description" content="Portfolio of Smita Maharjan, Frontend Developer based in Lalitpur, Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smitamaharjan.com.np" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;