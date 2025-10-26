import React from 'react';

const Community: React.FC = () => {
  return (
    <section
      id="community"
      className="w-full flex"
      style={{
        background: '#F5F0E6',
        height: 'clamp(400px, 40vw, 578px)',
        minHeight: '400px',
        maxHeight: '578px',
      }}
    >
      {/* Left Side - Image */}
      <div
        className="flex items-center community-image"
        style={{
          flexBasis: '60%',
          height: '100%',
        }}
      >
        <img
          src="/images/community-image.png"
          alt="Community"
          className="w-full h-full object-cover"
          style={{ display: 'block', borderRadius: '0' }}
        />
      </div>
      {/* Right Side - Content */}
      <div
        className="flex community-content"
        style={{
          flexBasis: '40%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="community-content-inner"
          style={{
            paddingLeft: '80px',
            paddingRight: 'clamp(100px, 8vw, 128px)',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start ',
            justifyContent: 'center',
          }}
        >
          {/* Chip */}
          <div
            className="community-chip"
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
              marginBottom: '18px',
              display: 'inline-block',
            }}
          >
            INTENTIONAL COMMUNITY CONNECTIONS
          </div>
          {/* Title */}
          <h2
            className="community-title"
            style={{
              color: '#313131',
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '46px',
              lineHeight: '140%',
              letterSpacing: '0%',
              margin: 0,
              marginBottom: '18px',
              textAlign: 'left',
            }}
          >
            Community without the scroll
          </h2>
          {/* Subcontent */}
          <div
            className="community-subcontent"
            style={{
              color: '#313131',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '160%',
              letterSpacing: '0%',
              marginBottom: '18px',
              textAlign: 'left',
            }}  
          >
            While we start online, we end in real life.
          </div>
          <div
            className="community-subcontent"
            style={{
              color: '#313131',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '160%',
              letterSpacing: '0%',
              marginBottom: '18px',
              textAlign: 'left',
            }}
          >
            We're bringing moms together in their communities, led by subscribers ready to co-create what's needed most.
          </div>
        </div>
      </div>
      <style>{`
            @media (max-width: 768px) {
              #community {
                flex-direction: column !important;
                height: auto !important;
                min-height: unset !important;
                max-height: unset !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              #community .community-image {
                width: 100vw !important;
                height: auto !important;
                flex-basis: auto !important;
                order: 1;
              }
              #community .community-content-inner {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: center !important;
              }
              #community .community-image img {
                width: 100% !important;
                height: auto !important;
                max-height: 320px !important;
                object-fit: cover;
                display: block;
                border-radius: 0 !important;
              }
              #community .community-content {
                width: 100% !important;
                height: auto !important;
                background: #F5F0E6 !important;
                flex-basis: auto !important;
                order: 2;
                justify-content: flex-start !important;
                padding: 20px 30px 20px 30px !important;
                box-sizing: border-box !important;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center !important;
              }
              #community .community-content > div {
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              #community .community-chip {
                font-size: 14px !important;
                padding: 10px 20px !important;
                margin-bottom: 8px !important;
                margin-top: 16px !important;
                align-self: center !important;
                width: 350px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
              }
              #community .community-title {
                font-size: 28px !important;
                font-weight: 500 !important;
                text-align: center !important;
                margin-bottom: 18px !important;
                margin-top: 0 !important;
                font-family: 'Lora, Georgia, serif' !important;
                width: 100% !important;
                display: block !important;
                white-space: nowrap !important;
              }
              #community .community-subcontent {
                font-size: 14px !important;
                line-height: 160% !important;
                text-align: center !important;
                margin-bottom: 18px !important;
                margin-top: 0 !important;
                font-family: 'Merriweather' !important;
              }
              #community .community-subcontent:first-of-type {
                text-align: center !important;
                width: 100% !important;
                display: block !important;
                margin: 0 auto 18px auto !important;
                text-align-last: center !important;
                -webkit-text-align-last: center !important;
              }
            }
          `}</style>
    </section>
  );
};

export default Community; 