import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/images/K2M_Logo.jpg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-brand">
              <NavLink to="/" className="brand-link">
                <img
                  src={logo}
                  alt="K2MOL Consulting"
                  className="footer-logo"
                />
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
                <a href="tel:+27112368630" className="contact-link">
                  (011) 236-8630
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
          <p>&copy; {new Date().getFullYear()} Vireotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}