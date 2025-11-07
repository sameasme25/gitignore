import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="w-full flex hero-root"
      style={{
        height: 'clamp(600px, 100vh, 900px)',
        minHeight: '600px',
        maxHeight: '900px',
      }}
    >
      {/* Left Side - Purple Background with Content */}
      <div
        className="flex items-center hero-content"
        style={{
          backgroundColor: '#6B0EC7',
          flexBasis: '40%',
          height: '100%',
        }}
      >
        <div
          className="text-white hero-content-inner"
          style={{
            paddingLeft: 'clamp(100px, 8vw, 128px)',
            paddingRight: '80px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h1
            className="mb-6 leading-tight hero-title"
            style={{
              fontFamily: '"Lora", Georgia, serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '130%',
              letterSpacing: '0%',
            }}
          >
            Affordable care just for moms.
          </h1>
          <p
            className="mb-8 leading-relaxed hero-subtitle"
            style={{
              fontFamily: '"Merriweather", Georgia, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '160%',
              letterSpacing: '0%',
            }}
          >
            Mental Health Support for moms that can't afford the out-of-pocket expense and insurance premiums.
          </p>
          <a
            href="https://form.typeform.com/to/CX0TVylI"
            target="_blank"
            rel="noopener noreferrer"
            className="waitlist-animated-btn-black"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: '#fff',
              color: '#6B0EC7',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              width: '185px',
              height: '56px',
              borderRadius: '8px',
              padding: '20px 30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
              textDecoration: 'none',
              zIndex: 1,
              transition: 'color 0.2s',
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Join the Beta</span>
          </a>
        </div>
      </div>
      {/* Right Side - Hero Image */}
      <div
        className="relative hero-image"
        style={{
          flexBasis: '60%',
          height: '100%',
        }}
      >
        <img
          src="/images/hero-image.png"
          alt="Mother and daughter smiling"
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-root {
            flex-direction: column !important;
            height: auto !important;
            min-height: unset !important;
            max-height: unset !important;
            overflow: hidden !important;
          }
          .hero-image {
            width: 100% !important;
            height: auto !important;
            flex-basis: auto !important;
            order: 1;
            overflow: hidden !important;
          }
          .hero-image img {
            width: 100% !important;
            height: auto !important;
            max-height: 380px !important;
            object-fit: cover;
            display: block;
            overflow: hidden !important;
          }
          .hero-content {
            width: 100% !important;
            height: auto !important;
            background: #6B0EC7 !important;
            flex-basis: auto !important;
            order: 2;
            justify-content: flex-start !important;
            overflow: hidden !important;
          }
          .hero-content-inner {
            padding: 32px 30px 32px 30px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden !important;
          }
          .hero-title {
            font-size: 30px !important;
            text-align: center !important;
            font-weight: 500 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
            text-align: center !important;
            font-weight: 300 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
          .waitlist-animated-btn-black {
            font-size: 16px !important;
            padding: 14px 16px !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
        }
        @media (max-width: 480px) {
          .hero-content-inner {
            padding: 24px 20px 24px 20px !important;
          }
          .hero-title {
            font-size: 26px !important;
          }
          .hero-subtitle {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 