import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

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
        {/* Left: Social Media Links */}
        <div
          className="footer-social"
          style={{ display: 'flex', gap: '24px', justifySelf: 'start' }}>
          <a
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
                src="/socialIcons/instagram.svg"
                alt="Instagram"
                style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
              />
            </span>
          </a>
          <a
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
                src="/socialIcons/x.svg"
                alt="X"
                style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
              />
            </span>
          </a>
          <a
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
                src="/socialIcons/youtube.svg"
                alt="YouTube"
                style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
              />
            </span>
          </a>
          <a
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
                src="/socialIcons/tiktok.svg"
                alt="TikTok"
                style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
              />
            </span>
          </a>
          <a
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
                src="/socialIcons/facebook.svg"
                alt="Facebook"
                style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }}
              />
            </span>
          </a>
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
        
        {/* Right: Legal Links */}
        <div
          className="footer-legal"
          style={{ display: 'flex', gap: '24px', justifySelf: 'end' }}>
          <button
            onClick={() => setShowTerms(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
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
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Terms of Use
          </button>
          
          <button
            onClick={() => setShowPrivacy(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
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
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Privacy Policy
          </button>
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
                DITTO HEALTH WEBSITE TERMS OF USE
              </h2>
              
              <div
                style={{
                  color: '#313131',
                  fontFamily: 'Merriweather',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                <p style={{ marginBottom: '16px', textAlign: 'center' }}>
                  <strong>VERSION 1.0</strong><br />
                  <strong>LAST REVISED ON: AUGUST 26, 2025</strong>
                </p>
                
                <p style={{ marginBottom: '16px' }}>
                  The website located at www.dittohealth.co (the "Site") is a copyrighted work belonging to Ditto Health, Inc. ("Company", "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>

                <p style={{ marginBottom: '16px' }}>
                  THESE TERMS OF USE (THESE "TERMS") SET FORTH THE LEGALLY BINDING TERMS AND CONDITIONS THAT GOVERN YOUR USE OF THE SITE. BY ACCESSING OR USING THE SITE, YOU ARE ACCEPTING THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT). YOU MAY NOT ACCESS OR USE THE SITE OR ACCEPT THE TERMS IF YOU ARE NOT AT LEAST 18 YEARS OLD. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THESE TERMS, DO NOT ACCESS AND/OR USE THE SITE.
                </p>

                <p style={{ marginBottom: '16px' }}>
                  PLEASE BE AWARE THAT SECTION 10.2 CONTAINS PROVISIONS GOVERNING HOW TO RESOLVE DISPUTES BETWEEN YOU AND COMPANY. AMONG OTHER THINGS, SECTION 10.2 INCLUDES AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY BINDING AND FINAL ARBITRATION. SECTION 10.2 ALSO CONTAINS A CLASS ACTION AND JURY TRIAL WAIVER. PLEASE READ SECTION 10.2 CAREFULLY.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  1. ACCOUNTS
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  <strong>1.1 Account Creation.</strong> In order to use certain features of the Site, you must register for an account ("Account") and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Site. Company may suspend or terminate your Account in accordance with Section 8.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong>1.2 Account Responsibilities.</strong> You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  2. ACCESS TO THE SITE
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  <strong>2.1 License.</strong> Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, noncommercial use.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong>2.2 Certain Restrictions.</strong> The rights granted to you in these Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed on the Site; (b) you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website, product, or service; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  3. USER CONTENT
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  <strong>3.1 User Content.</strong> "User Content" means any and all information and content that a user submits to, or uses with, the Site (e.g., content in the user's profile or postings). You are solely responsible for your User Content. You assume all risks associated with use of your User Content, including any reliance on its accuracy, completeness or usefulness by others, or any disclosure of your User Content that personally identifies you or any third party.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  4. INDEMNIFICATION
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site, (b) your violation of these Terms, (c) your violation of applicable laws or regulations or (d) your User Content.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  5. DISCLAIMERS
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  THE SITE IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS, AND COMPANY (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  6. LIMITATION ON LIABILITY
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY (OR OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SITE.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  7. COPYRIGHT POLICY
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Company respects the intellectual property of others and asks that users of our Site do the same. In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination, in appropriate circumstances, of users of our online Site who are repeat infringers of intellectual property rights, including copyrights.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  8. CONTACT INFORMATION
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  <strong>Ditto Health</strong><br />
                  <strong>Address:</strong><br />
                  3723 Greenville Ave<br />
                  STE 41003<br />
                  Dallas, TX 75206<br />
                  <strong>Telephone:</strong> 214-838-6162 #800<br />
                  <strong>Email:</strong> contact@dittohealth.co
                </p>

                <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                  <strong>Note:</strong> This is a summary of key sections. For the complete Terms of Use, please refer to the full document. These Terms constitute the entire agreement between you and us regarding the use of the Site.
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

      {/* Privacy Policy Modal */}
      {showPrivacy && (
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
          onClick={() => setShowPrivacy(false)}
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
              onClick={() => setShowPrivacy(false)}
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

            {/* Privacy Policy Content */}
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
                Ditto Health Privacy Policy
              </h2>
              
              <div
                style={{
                  color: '#313131',
                  fontFamily: 'Merriweather',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                <p style={{ marginBottom: '16px' }}>
                  <strong>Effective Date: August 26, 2025</strong>
                </p>
                
                <p style={{ marginBottom: '16px' }}>
                  Ditto Health ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect the information you provide when using our website, mobile application, and services (collectively, the "Services").
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  Information We Collect
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We collect information to provide better care, support, and experiences. This may include:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Personal Information:</strong> Your name, email, phone number, payment details, and account login credentials.</li>
                  <li style={{ marginBottom: '8px' }}><strong>Health & Wellness Information:</strong> Information you choose to share about your nutrition, fitness, or mental health goals, including progress photos, journal entries, and survey responses.</li>
                  <li style={{ marginBottom: '8px' }}><strong>Device & Usage Information:</strong> IP address, browser type, operating system, and usage patterns when you visit our website or app.</li>
                  <li style={{ marginBottom: '8px' }}><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to improve your browsing experience, remember preferences, and deliver relevant content.</li>
                </ul>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  How We Use Your Information
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We use the information we collect to:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Deliver and improve our Services</li>
                  <li style={{ marginBottom: '8px' }}>Personalize your experience (e.g., tailored nutrition or fitness guidance)</li>
                  <li style={{ marginBottom: '8px' }}>Facilitate group sessions and community support features</li>
                  <li style={{ marginBottom: '8px' }}>Process payments and manage subscriptions</li>
                  <li style={{ marginBottom: '8px' }}>Communicate updates, offers, and program information</li>
                  <li style={{ marginBottom: '8px' }}>Ensure security and prevent fraudulent activity</li>
                </ul>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  How We Share Information
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We do not sell your personal information. We may share information only in the following circumstances:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>With Providers:</strong> Licensed clinicians, dietitians, or trainers you interact with through Ditto Health may access the information you share in your account.</li>
                  <li style={{ marginBottom: '8px' }}><strong>With Service Partners:</strong> Third-party vendors that help us run our platform (e.g., hosting, payment processing, analytics) under strict confidentiality agreements.</li>
                  <li style={{ marginBottom: '8px' }}><strong>As Required by Law:</strong> To comply with legal obligations or protect the rights, safety, or property of Ditto Health, our users, or others.</li>
                </ul>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  Your Choices & Controls
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  You can:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Access and update your account information at any time</li>
                  <li style={{ marginBottom: '8px' }}>Upload or delete your progress photos or other personal entries</li>
                  <li style={{ marginBottom: '8px' }}>Opt out of non-essential emails by using "unsubscribe" links</li>
                  <li style={{ marginBottom: '8px' }}>Request the deletion of your account and personal data by contacting us at: <strong>contact@dittohealth.co</strong></li>
                </ul>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  Data Security
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We use industry-standard safeguards to protect your data, including encryption, access controls, and secure servers. However, no system can be guaranteed 100% secure. We encourage you to use strong passwords and keep your login details private.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  Children's Privacy
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Our Services are designed for adults 18+. We do not knowingly collect information from children. If we learn we have collected information from a minor, we will delete it promptly.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  Updates to This Policy
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the website or by email.
                </p>

                <h3 style={{ color: '#6B0EC7', fontSize: '20px', marginBottom: '12px', marginTop: '24px' }}>
                  Contact Us
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  If you have questions about this Privacy Policy, please contact us at: <strong>contact@dittohealth.co</strong>
                </p>
              </div>
            </div>

            {/* Close Button at Bottom */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setShowPrivacy(false)}
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
            grid-template-rows: auto auto auto !important;
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
          .footer-legal {
            order: 3 !important;
            justify-self: center !important;
            display: flex !important;
            gap: 24px !important;
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
