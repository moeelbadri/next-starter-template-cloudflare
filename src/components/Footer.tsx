// import './Footer.css';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h3 className="footer-title">Black Apex Global</h3>
          <p className="footer-text">
            <i className="fas fa-map-marker-alt"></i> Hon Kong, Cairo, Dubai
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <p className="footer-text">
            <i className="fas fa-phone"></i> <a className="links" href="tel:+201000474416">+20 10 00474416</a>
          </p>
          <p className="footer-text">
            <i className="fab fa-whatsapp"></i> <a className="links" href="https://wa.me/201000474416" target="_blank" rel="noopener noreferrer">+20 10 00474416</a>
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4 className="footer-title">Get in Touch</h4>
          <p className="footer-text">
            <i className="fas fa-globe"></i> <a className="links" href="https://www.Blackapexglobal.com" target="_blank" rel="noopener noreferrer">www.Blackapexglobal.com</a>
          </p>
          <p className="footer-text">
            <i className="fas fa-at"></i> <a className="links" href="mailto:info@Blackapexglobal.com">info@Blackapexglobal.com</a>
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © 2025 - Black Apex Global - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
