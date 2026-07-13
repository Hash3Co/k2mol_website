import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import logo from '../../assets/images/K2M_Logo.jpg';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo/Brand */}
        <div className="header-brand">
          <NavLink to="/" className="brand-link">
            <img
              src={logo}
              alt="K2MOL Consulting"
              className="header-logo"
            />
          </NavLink>
        </div>
        
        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/experience">Experience</a>
          <a href="/contact">Contact</a>
        </nav>
        
        <div className="header-actions">
          <a href="tel:+27112368630" className="header-phone">
            <Phone className="icon" />
            <span>(011) 236 8630</span>
          </a>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="icon" />
          </button>
        </div>
      </div>

    {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <img
              src={logo}
              alt="K2MOL Consulting"
              className="mobile-logo"
            />
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="icon" />
            </button>
          </div>
         
          <nav className="mobile-nav">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/experience" onClick={() => setMobileMenuOpen(false)}>
              Experience
            </NavLink>
            
          </nav>
        
        </div>
      )}
    </header>
  );
}