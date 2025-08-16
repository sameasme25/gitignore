
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Community from './components/Community';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Community />
      <CallToAction />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App; 