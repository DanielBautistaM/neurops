import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import YouTubeSection from './components/YouTubeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundLights from './components/BackgroundLights';

function App() {
  return (
    <div className="App font-serif relative">
      <BackgroundLights />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <YouTubeSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
