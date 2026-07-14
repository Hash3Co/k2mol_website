import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/images/K2M_Logo.jpg';

export function Footer() {
  // State to handle image loading errors
  const [logoError, setLogoError] = React.useState(false);
  const [logoLoaded, setLogoLoaded] = React.useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-brand">
              <NavLink to="/" className="brand-link">
                {!logoError ? (
                  <img
                    src={logo}
                    alt="K2MOL Consulting"
                    className="footer-logo"
                    loading="lazy"
                    decoding="async"
                    onError={() => setLogoError(true)}
                    onLoad={() => setLogoLoaded(true)}
                    style={{
                      opacity: logoLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                ) : (
                  // Fallback text when image fails to load
                  <div className="footer-logo-fallback">
                    <span className="fallback-text">K2MOL</span>
                    <span className="fallback-subtext">Consulting</span>
                  </div>
                )}
              </NavLink>
            </div>
            <p>Competes with a strong national footprint delivering innovative solutions and strategic consulting services.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/" className="footer-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="footer-link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="footer-link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="footer-link">
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="footer-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <address>
                    377 Rivonia Blvd<br />
                    Rivonia, ST 2128
                  </address>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:+27835529401" className="contact-link">
                  (083) 552 9401 
                </a>
              </div>
              
              <div className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:bmoleko@k2mol.co.za" className="contact-link">
                  bmoleko@k2mol.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Hash & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}