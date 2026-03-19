import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   useEffect(() => {           
    AOS.init({
      duration: 800,              //Animation
      once: true,  
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Smita Maharjan — Frontend Developer | Lalitpur, Nepal</title>
        <meta name="description" content="Smita Maharjan is a Computer Engineering student and aspiring Frontend Developer from Lalitpur, Nepal, crafting clean, modern web experiences with React, JavaScript, and CSS." />
        <meta name="keywords" content="Smita Maharjan, Frontend Developer, React Developer, Nepal, Portfolio, Web Developer Lalitpur, JavaScript, Computer Engineering" />
        <meta name="author" content="Smita Maharjan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://smitamaharjan.com.np" />

        {/* Open Graph */}
        <meta property="og:title" content="Smita Maharjan — Frontend Developer" />
        <meta property="og:description" content="Portfolio of Smita Maharjan, aspiring Frontend Developer based in Lalitpur, Nepal. Building clean, modern web experiences with React and JavaScript." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smitamaharjan.com.np" />
        <meta property="og:image" content="https://smitamaharjan.com.np/og-image.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Smita Maharjan Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smita Maharjan — Frontend Developer" />
        <meta name="twitter:description" content="Portfolio of Smita Maharjan, Frontend Developer based in Lalitpur, Nepal." />
        <meta name="twitter:image" content="https://smitamaharjan.com.np/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Smita Maharjan",
            "url": "https://smitamaharjan.com.np",
            "jobTitle": "Frontend Developer",
            "description": "Computer Engineering student and aspiring Frontend Developer from Lalitpur, Nepal.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lalitpur",
              "addressCountry": "NP"
            },
            "sameAs": [
              "https://github.com/Smita0519",
              "https://www.linkedin.com/in/smita-maharjan-9963b8317/",
              "https://www.instagram.com/maharjan.smita/"
            ],
            "knowsAbout": ["React", "JavaScript", "HTML", "CSS", "Django", "Python"]
          }
        `}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;