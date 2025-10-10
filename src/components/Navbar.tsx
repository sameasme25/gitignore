import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="w-full flex justify-between items-center navbar-root"
      style={{ height: '100px', background: '#fff', position: 'relative', paddingLeft: 'clamp(100px, 8vw, 128px)', paddingRight: 'clamp(100px, 8vw, 128px)' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Logo/Logo.svg"
          alt="Ditto Health"
          className="h-10 w-auto"
        />
      </div>
      {/* Desktop/Tablet Navigation Items */}
      <div className="navbar-desktop flex items-center space-x-8">
        <a
          href="#features"
          className="nav-link transition-colors"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('features');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            color: '#313131',
            fontFamily: 'Merriweather',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Features
        </a>
        <a
          href="#community"
          className="nav-link transition-colors"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('community');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            color: '#313131',
            fontFamily: 'Merriweather',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Community
        </a>
        <a
          href="https://form.typeform.com/to/CX0TVylI"
          target="_blank"
          rel="noopener noreferrer"
          className="waitlist-animated-btn-black"
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#6B0EC7',
            color: '#fff',
            fontFamily: 'Merriweather',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            width: '165px',
            height: '44px',
            borderRadius: '8px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            zIndex: 1,
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>Join the Beta</span>
        </a>
      </div>
      {/* Mobile Right: Join button and Hamburger */}
      <div className="navbar-mobile" style={{ display: 'none', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://form.typeform.com/to/CX0TVylI"
              target="_blank"
              rel="noopener noreferrer"
              className="waitlist-animated-btn-black"
              style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#6B0EC7',
                color: '#fff',
                fontFamily: 'Merriweather',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                width: '165px',
                height: '44px',
                borderRadius: '8px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                zIndex: 1,
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>Join the Beta</span>
            </a>
            {/* Hamburger Icon */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer', zIndex: 10, }}
            >
              <img src="/images/hamburger.svg" alt="Open menu" style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(255,255,255,0.98)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', position: 'absolute', top: 32, right: 32, cursor: 'pointer' }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="15" width="18" height="2" rx="1" fill="#8B2DD4" transform="rotate(45 16 16)" />
              <rect x="7" y="15" width="18" height="2" rx="1" fill="#8B2DD4" transform="rotate(-45 16 16)" />
            </svg>
          </button>
          <a
            href="#features"
            onClick={e => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.getElementById('features');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: '#313131',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              fontSize: '20px',
              margin: '24px 0',
              textDecoration: 'none',
            }}
          >
            Features
          </a>
          <a
            href="#community"
            onClick={e => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.getElementById('community');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: '#313131',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              fontSize: '20px',
              margin: '24px 0',
              textDecoration: 'none',
            }}
          >
            Community
          </a>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .navbar-root {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
          .navbar-desktop { display: none !important; }
          .navbar-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .navbar-desktop { display: flex !important; }
          .navbar-mobile { display: none !important; }
        }
        .waitlist-animated-btn-black {
          transition: color 0.2s;
        }
        .waitlist-animated-btn-black::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0%;
          background: #000;
          z-index: 1;
          transition: width 0.3s cubic-bezier(.4,0,.2,1);
        }
        .waitlist-animated-btn-black:hover::before {
          width: 100%;
        }
        .waitlist-animated-btn-black:hover {
          color: #fff !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 