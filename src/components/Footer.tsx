import React, { useState } from 'react';

const socialIcons = [
  { name: 'instagram', src: '/socialIcons/instagram.svg', alt: 'Instagram' },
  { name: 'x', src: '/socialIcons/x.svg', alt: 'X' },
  { name: 'youtube', src: '/socialIcons/youtube.svg', alt: 'YouTube' },
  { name: 'tiktok', src: '/socialIcons/tiktok.svg', alt: 'TikTok' },
  { name: 'facebook', src: '/socialIcons/facebook.svg', alt: 'Facebook' },
];

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      {/* Main Footer */}
      <footer
        className="footer-container"
        style={{
          width: '100%',
          background: '#6B0EC7',
          padding: '40px clamp(100px, 8vw, 128px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div
          className="footer-copyright"
          style={{
            color: '#fff',
            fontFamily: 'Merriweather',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '100%',
            justifySelf: 'start',
          }}
        >
          © 2025 Ditto Health, Inc. All Rights Reserved.
        </div>
        {/* Center */}
        <div
          className="footer-logo"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center' }}>
          <img
            src="/Logo/whiteLogo.png"
            alt="Ditto Health Logo"
            style={{ height: '48px', width: 'auto', marginBottom: 0 }}
          />
        </div>
        {/* Right: Social Icons */}
        <div
          className="footer-social"
          style={{ display: 'flex', gap: '24px', justifySelf: 'end' }}>
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-animated-btn"
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
                />
              </span>
            </a>
          ))}
        </div>
      </footer>
      
      {/* Copyright Strip */}
      <div
        className="footer-copyright-strip"
        style={{
          width: '100%',
          background: '#fff',
          padding: '16px clamp(100px, 8vw, 128px)',
          textAlign: 'center',
        }}
      >
        <div
          className="footer-copyright-strip-text"
          style={{
            color: '#313131',
            fontFamily: 'Merriweather',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
          }}
        >
          © 2025 Ditto Health, Inc. All Rights Reserved.
        </div>
      </div>

      {/* Terms of Use Section */}
      <div
        className="footer-terms-section"
        style={{
          width: '100%',
          background: '#F5F0E6',
          padding: '20px clamp(100px, 8vw, 128px)',
          textAlign: 'center',
          borderTop: '1px solid rgba(107, 14, 199, 0.1)',
        }}
      >
        <button
          onClick={() => setShowTerms(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#6B0EC7',
            fontFamily: 'Merriweather',
            fontWeight: 400,
            fontSize: '16px',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(107, 14, 199, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Terms of Use
        </button>
      </div>

      {/* Terms of Use Modal */}
      {showTerms && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowTerms(false)}
        >
          <div
            style={{
              background: '#fff',
              padding: '40px',
              borderRadius: '12px',
              maxWidth: '800px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTerms(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ×
            </button>

            {/* Terms Content */}
            <div style={{ marginBottom: '30px' }}>
              <h2
                style={{
                  color: '#6B0EC7',
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: '32px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                Ditto Health Site Terms of Use
              </h2>
              
              <div
                style={{
                  color: '#313131',
                  fontFamily: 'Merriweather',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {/* Placeholder content - replace with your Word document content */}
                <p style={{ marginBottom: '16px' }}>
                  <strong>Last Updated: January 2025</strong>
                </p>
                
                <p style={{ marginBottom: '16px' }}>
                  Welcome to Ditto Health. These Terms of Use govern your use of our website and services.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  1. Acceptance of Terms
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  2. Use License
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Permission is granted to temporarily download one copy of the materials on Ditto Health's website for personal, non-commercial transitory viewing only.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  3. Disclaimer
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  The materials on Ditto Health's website are provided on an 'as is' basis. Ditto Health makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <p style={{ marginBottom: '16px', fontStyle: 'italic', color: '#666' }}>
                  <strong>Note:</strong> This is placeholder content. Please replace with the actual terms from your "Ditto Health Site Terms of Use" Word document.
                </p>
              </div>
            </div>

            {/* Close Button at Bottom */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setShowTerms(false)}
                style={{
                  background: '#6B0EC7',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontFamily: 'Merriweather',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5A0DB8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6B0EC7';
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .footer-social-animated-btn {
          transition: color 0.2s;
        }
        .footer-social-animated-btn::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0%;
          background: #000;
          z-index: 1;
          transition: width 0.3s cubic-bezier(.4,0,.2,1);
        }
        .footer-social-animated-btn:hover::before {
          width: 100%;
        }
        .footer-social-animated-btn:hover {
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
            gap: 24px !important;
            padding: 40px 30px 40px 30px !important;
            text-align: center !important;
          }
          .footer-logo {
            order: 1 !important;
            justify-self: center !important;
            margin-bottom: 0 !important;
          }
          .footer-social {
            order: 2 !important;
            justify-self: center !important;
            display: flex !important;
            gap: 24px !important;
          }
          .footer-copyright {
            display: none !important;
          }
          .footer-copyright-strip {
            padding: 16px 30px 16px 30px !important;
            display: block !important;
          }
          .footer-copyright-strip-text {
            font-size: 14px !important;
            color: #6B0EC7 !important;
          }
          .footer-terms-section {
            padding: 20px 30px 20px 30px !important;
          }
        }
        @media (min-width: 769px) {
          .footer-copyright-strip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer; 