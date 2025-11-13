import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section
      className="about-section"
      style={{
        background: '#F5F0E6',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: 'clamp(100px, 8vw, 128px)',
        paddingRight: 'clamp(100px, 8vw, 128px)',
        boxSizing: 'border-box',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      {/* Chip */}
      <div
        className="about-chip"
        style={{
          border: '1px solid rgba(107, 14, 199, 0.2)',
          color: '#6B0EC7',
          borderRadius: '999px',
          padding: '10px 20px',
          fontFamily: 'Merriweather',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          marginBottom: '32px',
          display: 'inline-block',
        }}
      >
        ABOUT US
      </div>
      {/* Main Text */}
      <div
        className="about-main"
        style={{
          textAlign: 'center',
          color: '#313131',
          fontFamily: 'Lora, Georgia, serif',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '46px',
          lineHeight: '140%',
          letterSpacing: '0%',
          width: '100%',
          margin: 0,
        }}
      >
        Therapy that understands motherhood and your budget.
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-section {
            padding-top: 40px !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
            padding-bottom: 40px !important;
          }
          .about-chip {
            font-size: 14px !important;
            width: 130px !important;
            height: 38px !important;
            padding: 10px 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin-bottom: 16px !important;
          }
          .about-main {
            font-size: 32px !important;
            line-height: 140% !important;
            font-family: 'Lora, Georgia, serif' !important;
            font-weight: 500 !important; /* Semi-bold */
            font-style: medium !important;
            color: #313131 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs; 