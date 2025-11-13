import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 9999,
        }}
        onFocus={(e) => {
          e.target.style.left = '16px';
          e.target.style.top = '16px';
        }}
        onBlur={(e) => {
          e.target.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>
      
      <header role="banner" aria-label="Site header">
        <Navbar />
      </header>
      
      <main role="main" id="main-content" aria-label="Main content">
        <Hero />
        <AboutUs />
        <Features />
        <Pricing />
        <CallToAction />
      </main>
      
      <footer role="contentinfo" aria-label="Site footer">
        <Footer />
      </footer>
      
      <Analytics />
    </div>
  );
}

export default App;
