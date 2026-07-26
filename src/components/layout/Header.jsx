import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, X, ChevronDown } from 'lucide-react';
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          
          {/* Dropdown for Experience */}
          <div className="dropdown">
            <button className="dropdown-toggle">
              Experience <ChevronDown size={14} style={{ marginLeft: '4px' }} />
            </button>
            <div className="dropdown-menu">
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/clients">Clients</NavLink>
            </div>
          </div>
          
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        <div className="header-actions">
          <a href="tel:+27835529401" className="header-phone">
            <Phone className="icon" />
            <span>(083) 552 9401</span>
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
            
            <span className="dropdown-label">Experience</span>
            <div className="mobile-dropdown-items">
              <NavLink to="/experience" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </NavLink>
              <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/clients" onClick={() => setMobileMenuOpen(false)}>
                Clients
              </NavLink>
            </div>
            
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}