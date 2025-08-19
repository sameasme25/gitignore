import React from 'react';

const socialIcons = [
  { name: 'instagram', src: '/socialIcons/instagram.svg', alt: 'Instagram' },
  { name: 'x', src: '/socialIcons/x.svg', alt: 'X' },
  { name: 'youtube', src: '/socialIcons/youtube.svg', alt: 'YouTube' },
  { name: 'tiktok', src: '/socialIcons/tiktok.svg', alt: 'TikTok' },
  { name: 'facebook', src: '/socialIcons/facebook.svg', alt: 'Facebook' },
];

const Footer: React.FC = () => {
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