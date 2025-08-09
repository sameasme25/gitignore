import React, { useState, useEffect } from 'react';

const features = [
  {
    chip: 'ACCESSIBLE AND RELATABLE',
    heading: 'Need affordable mental health support?',
    description: `Live, research-backed therapy group coaching sessions led by licensed experts. No insurance needed.\n\nTopics moms frequently face, such as:\n• Body changes\n• Relationship stress\n• Mom guilt\n• Postpartum depression & anxiety`,
    image: '/images/feature-1.png',
    imageMobile: '/images/feature-1-mobile.png',
    reverse: false,
  },
  {
    chip: 'NUTRITION MADE SIMPLE',
    heading: 'Overwhelmed with figuring out what to eat for your goals?',
    description: `Whether to lose weight, gain, or maintain, our HAES-aligned dietitians create flexible, easy-to-follow meal plans based on the foods you already love and are easy to make.\n\nGrocery lists & breastfeeding-friendly calorie adjustments for new moms.\n\nNo restrictive dieting. No shame.`,
    image: '/images/feature-2.png',
    imageMobile: '/images/feature-2-mobile.png',
    reverse: true,
  },
  { 
    chip: 'FLEXIBLE & LOW-BARRIER',
    heading: `Need to exercise but don't know where to start or fit it in with life?`,
    description: `On-demand, simple workouts for home or gym.\n\nAdjust to be flexible with your energy level, hormones, and busy schedule.`,
    image: '/images/feature-3.png',
    imageMobile: '/images/feature-3-mobile.png',
    reverse: false,
  },
];

const pxToVw = (px: number) => `clamp(${Math.round(px * 0.5)}px, ${(px / 1440 * 100).toFixed(2)}vw, ${px}px)`;

const getSectionPadding = (reverse: boolean) => {
  const normal = 'clamp(100px, 8vw, 128px)';
  const minus20 = 'clamp(80px, calc(8vw - 20px), 108px)';
  return reverse
    ? { paddingLeft: normal, paddingRight: minus20 }
    : { paddingLeft: minus20, paddingRight: normal };
};

const Features: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="features" style={{ width: '100%', background: '#fff' }}>
      {features.map((feature, idx) => (
        <div
          key={feature.chip}
          style={{
            display: 'flex',
            flexDirection: feature.reverse ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...getSectionPadding(feature.reverse),
            paddingTop: idx === 0 ? pxToVw(120) : pxToVw(160),
            paddingBottom: idx === features.length - 1 ? pxToVw(120) : 0,
            gap: pxToVw(137),
          }}
        >
          {/* Mobile order: Chip, Image, Text. Desktop: Image/Text as before, but chip is above text. */}
          {isMobile ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Chip */}
              <div
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
                  marginBottom: '16px',
                  display: 'inline-block',
                  marginTop: 0,
                  alignSelf: 'center',
                }}
              >
                {feature.chip}
              </div>
              {/* Title */}
              <h2
                style={{
                  color: '#313131',
                  fontFamily: 'Lora, Georgia, serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '28px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  margin: 0,
                  marginBottom: '18px',
                  textAlign: 'center',
                }}
              >
                {feature.heading}
              </h2>
              {/* Image */}
                             <img
                 src={feature.imageMobile}
                 alt={feature.heading}
                                   style={{
                    width: '80vw',
                    maxWidth: '320px',
                    height: 'auto',
                    margin: '24px 0',
                    borderRadius: '24px',
                    display: 'block',
                    alignSelf: 'center',
                    imageRendering: 'crisp-edges',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                  }}
               />
              {/* Text */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    color: '#313131',
                    fontFamily: 'Merriweather',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    marginBottom: '18px',
                    whiteSpace: 'pre-line',
                    textAlign: 'center',
                  }}
                >
                  {idx === 0 ? (
                    <>
                      Live, research-backed therapy group coaching sessions led by licensed experts. No insurance needed.
                      <br />
                      <br />
                      <span style={{ fontWeight: 700, display: 'block', marginBottom: '18px' }}>
                        Topics moms frequently face, such as:
                      </span>
                      <span style={{ display: 'block', marginLeft: 0, textAlign: 'center' }}>
                        • Body changes
                        <br />• Relationship stress
                        <br />• Mom guilt
                        <br />• Postpartum depression & anxiety
                      </span>
                    </>
                  ) : (
                    feature.description
                  )}
                </div>
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
                    width: 'calc(100% - 110px)',
                    maxWidth: '100%',
                    borderRadius: '8px',
                    padding: '14px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: '24px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    zIndex: 1,
                    transition: 'color 0.2s',
                    alignSelf: 'center',
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>Join the waitlist</span>
                </a>
              </div>
            </div>
          ) : (
            // Desktop/tablet view as before
            <>
              {/* Image */}
              <div style={{
                flex: '0 0 495px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <img
                  src={feature.image}
                  alt={feature.heading}
                  style={{
                    width: 'clamp(300px, 34.4vw, 495px)',
                    height: 'clamp(360px, 42.1vw, 606px)',
                    borderRadius: '32px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              {/* Text */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                {/* Chip */}
                <div
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
                    marginBottom: pxToVw(18),
                    display: 'inline-block',
                    marginTop: 0,
                  }}
                >
                  {feature.chip}
                </div>
                <h2
                  style={{
                    color: '#313131',
                    fontFamily: 'Lora, Georgia, serif',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontSize: '46px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    margin: 0,
                    marginBottom: pxToVw(18),
                    textAlign: 'left',
                  }}
                >
                  {feature.heading}
                </h2>
                <div
                  style={{
                    color: '#313131',
                    fontFamily: 'Merriweather',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    marginBottom: pxToVw(18),
                    whiteSpace: 'pre-line',
                    textAlign: 'left',
                  }}
                >
                  {idx === 0 ? (
                    <>
                      Live, research-backed therapy group coaching sessions led by licensed experts. No insurance needed.
                      <br />
                      <br />
                      <span style={{ fontWeight: 700, display: 'block', marginBottom: pxToVw(18) }}>
                        Topics moms frequently face, such as:
                      </span>
                      <span style={{ display: 'block', marginLeft: '24px' }}>
                        • Body changes
                        <br />• Relationship stress
                        <br />• Mom guilt
                        <br />• Postpartum depression & anxiety
                      </span>
                    </>
                  ) : (
                    feature.description
                  )}
                </div>
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
                    width: '185px',
                    height: '56px',
                    borderRadius: '8px',
                    padding: '20px 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: pxToVw(18),
                    cursor: 'pointer',
                    textDecoration: 'none',
                    zIndex: 1,
                    transition: 'color 0.2s',
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>Join the waitlist</span>
                </a>
              </div>
            </>
          )}
        </div>
      ))}
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
          #features > div {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            gap: 0 !important;
            overflow: hidden !important;
          }
          #features img {
            width: 80vw !important;
            max-width: 320px !important;
            height: auto !important;
            margin: 24px 0 !important;
            border-radius: 24px !important;
            display: block !important;
            align-self: center !important;
            image-rendering: -webkit-optimize-contrast !important;
            image-rendering: crisp-edges !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
          }
          #features h2 {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            max-width: 100% !important;
          }
          #features div[style*='font-family: Merriweather'] {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          #features > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          #features h2 {
            font-size: 24px !important;
          }
          #features img {
            width: 80vw !important;
            max-width: 280px !important;
            image-rendering: -webkit-optimize-contrast !important;
            image-rendering: crisp-edges !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features; 