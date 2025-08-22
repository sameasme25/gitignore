import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section
      className="cta-section"
      style={{
        width: '100%',
        background: '#fff',
        padding: 'clamp(80px, 10vw, 120px) clamp(100px, 8vw, 128px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2
        className="cta-title"
        style={{
          color: '#313131',
          fontFamily: 'Lora, Georgia, serif',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '46px',
          lineHeight: '140%',
          letterSpacing: '0%',
          margin: 0,
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        We're <span style={{ color: '#6B0EC7' }}>launching in October 2025,</span> and we'd love to have you with us from the start.
      </h2>
      <div
        className="cta-subtitle"
        style={{
          color: '#313131',
          fontFamily: 'Merriweather',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '18px',
          lineHeight: '160%',
          letterSpacing: '0%',
          marginBottom: '32px',
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        Are you ready to feel like the best version of you and receive everything you need to succeed?
      </div>
      <a
        href="https://form.typeform.com/to/CX0TVylI"
        target="_blank"
        rel="noopener noreferrer"
        className="waitlist-animated-btn-black cta-button"
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
        <span style={{ position: 'relative', zIndex: 2 }}>Join the waitlist</span>
      </a>
      <style>{`
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
        @media (max-width: 768px) {
          .cta-section {
            padding: 40px 30px 40px 30px !important;
            overflow: hidden !important;
          }
          .cta-title {
            font-size: 24px !important;
            font-weight: 500 !important;
            text-align: center !important;
            margin-bottom: 18px !important;
            font-family: 'Lora, Georgia, serif' !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            max-width: 100% !important;
          }
          .cta-subtitle {
            font-size: 14px !important;
            line-height: 160% !important;
            text-align: center !important;
            margin-bottom: 24px !important;
            font-family: 'Merriweather' !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            max-width: 100% !important;
          }
          .cta-button {
            width: calc(100% - 110px) !important;
            max-width: 100% !important;
            font-size: 18px !important;
            padding: 14px 0 !important;
            margin-top: 0 !important;
            overflow: hidden !important;
          }
        }
        @media (max-width: 480px) {
          .cta-section {
            padding: 30px 20px 30px 20px !important;
          }
          .cta-title {
            font-size: 22px !important;
          }
          .cta-subtitle {
            font-size: 13px !important;
          }
          .cta-button {
            width: calc(100% - 80px) !important;
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction; 