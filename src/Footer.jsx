import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div id="first-section-foot" className="footer-section">
          <h2 className="company-name">HERO.IO</h2>
          <p className="company-description">
            HERO.IO empowers you to create, customize, and deploy your mobile
            apps with ease. Build professional Android applications without any
            hassle and reach millions of users worldwide. HERO.IO empowers you
            to create, customize, and deploy your mobile apps with ease. Build
            professional Android applications without any hassle and reach
            millions of users worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="#">info@hero.io</a>
          </p>
          <p>Phone: +1 555 123-4567</p>
          <p>Address: 123 Innovation Drive, Tech City, CA 94016</p>
          <p>
            Facebook:
            <a href="#">facebook.com/heroio</a>
          </p>
          <p>
            Twitter:
            <a href="#">twitter.com/heroio</a>
          </p>
          <p>
            LinkedIn:
            <a href="#">linkedin.com/company/heroio</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p
          style={{
            paddingBottom: "10px",
          }}
        >
          &copy; 2025 HERO.IO. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
