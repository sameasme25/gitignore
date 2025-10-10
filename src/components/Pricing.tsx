import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{
        background: '#fff',
        width: '100%',
        padding: '120px clamp(100px, 8vw, 128px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Section Title */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        <div
          className="pricing-chip"
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
            marginBottom: '24px',
            display: 'inline-block',
          }}
        >
          PRICING
        </div>
        <h2
          className="pricing-title"
          style={{
            color: '#313131',
            fontFamily: 'Lora, Georgia, serif',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '46px',
            lineHeight: '140%',
            letterSpacing: '0%',
            margin: 0,
          }}
        >
          Choose Your Plan
        </h2>
      </div>

      {/* Pricing Cards */}
      <div
        className="pricing-cards-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        {/* Beta Founders Card */}
        <div
          className="pricing-card"
          style={{
            background: '#6B0EC7',
            borderRadius: '16px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Featured Badge */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#fff',
              color: '#6B0EC7',
              padding: '6px 16px',
              borderRadius: '999px',
              fontFamily: 'Merriweather',
              fontSize: '12px',
              fontWeight: 700,
            }}
          >
            LIMITED
          </div>

          {/* Plan Name */}
          <h3
            style={{
              color: '#fff',
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '120%',
              margin: '0 0 16px 0',
            }}
          >
            Beta Founders
          </h3>

          {/* Price */}
          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                color: '#fff',
                fontFamily: 'Lora, Georgia, serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '100%',
              }}
            >
              $99
            </span>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Merriweather',
                fontSize: '18px',
                marginLeft: '8px',
              }}
            >
              /month
            </span>
          </div>

          {/* Availability */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '32px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <p
              style={{
                color: '#fff',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                margin: 0,
              }}
            >
              <strong>Availability:</strong> Limited to 150 moms
            </p>
          </div>

          {/* Features */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              width: '100%',
            }}
          >
            <li
              style={{
                color: '#fff',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                marginBottom: '12px',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Early access to all features
            </li>
            <li
              style={{
                color: '#fff',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                marginBottom: '12px',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Lifetime founder pricing
            </li>
            <li
              style={{
                color: '#fff',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                marginBottom: '12px',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Direct input on platform development
            </li>
            <li
              style={{
                color: '#fff',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Exclusive founder community
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="https://form.typeform.com/to/CX0TVylI"
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-btn"
            style={{
              background: '#fff',
              color: '#6B0EC7',
              fontFamily: 'Merriweather',
              fontWeight: 600,
              fontSize: '16px',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              border: 'none',
              width: '100%',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Join the Waitlist
          </a>
        </div>

        {/* Regular Membership Card */}
        <div
          className="pricing-card"
          style={{
            background: '#F5F0E6',
            border: '2px solid #6B0EC7',
            borderRadius: '16px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Plan Name */}
          <h3
            style={{
              color: '#313131',
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '120%',
              margin: '0 0 16px 0',
            }}
          >
            Regular Membership
          </h3>

          {/* Price */}
          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                color: '#313131',
                fontFamily: 'Lora, Georgia, serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '100%',
              }}
            >
              $199
            </span>
            <span
              style={{
                color: '#666',
                fontFamily: 'Merriweather',
                fontSize: '18px',
                marginLeft: '8px',
              }}
            >
              /month
            </span>
          </div>

          {/* Availability */}
          <div
            style={{
              background: 'rgba(107, 14, 199, 0.1)',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '32px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <p
              style={{
                color: '#313131',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                margin: 0,
              }}
            >
              <strong>Availability:</strong> Launching after beta
            </p>
          </div>

          {/* Features */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              width: '100%',
            }}
          >
            <li
              style={{
                color: '#313131',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                marginBottom: '12px',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#6B0EC7' }}>✓</span>
              Full access to all features
            </li>
            <li
              style={{
                color: '#313131',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                marginBottom: '12px',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#6B0EC7' }}>✓</span>
              Priority support
            </li>
            <li
              style={{
                color: '#313131',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                marginBottom: '12px',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#6B0EC7' }}>✓</span>
              Monthly live sessions
            </li>
            <li
              style={{
                color: '#313131',
                fontFamily: 'Merriweather',
                fontSize: '16px',
                lineHeight: '160%',
                paddingLeft: '28px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#6B0EC7' }}>✓</span>
              Community access
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="https://form.typeform.com/to/CX0TVylI"
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-btn-secondary"
            style={{
              background: '#6B0EC7',
              color: '#fff',
              fontFamily: 'Merriweather',
              fontWeight: 600,
              fontSize: '16px',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              border: 'none',
              width: '100%',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(107, 14, 199, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 30px !important;
          }
          .pricing-chip {
            font-size: 14px !important;
            margin-bottom: 16px !important;
          }
          .pricing-title {
            font-size: 32px !important;
          }
          .pricing-cards-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .pricing-card {
            padding: 32px 24px !important;
          }
          .pricing-card h3 {
            font-size: 28px !important;
          }
          .pricing-card span[style*="font-size: 48px"] {
            font-size: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .pricing-section {
            padding: 40px 20px !important;
          }
          .pricing-title {
            font-size: 28px !important;
          }
          .pricing-card h3 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;

