import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import logo from '../../assets/images/K2M_Logo.png';

import image1 from '../../assets/images/slider/IMG-20250620-WA0022.jpg';
import image2 from '../../assets/images/slider/IMG-20250620-WA0024.jpg';
import image3 from '../../assets/images/slider/IMG-20250620-WA0036.jpg';
import image4 from '../../assets/images/slider/IMG-20250620-WA0043.jpg';


export function ImageSlider  ({  interval = 5000 }) {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getCurrentPageName = () => {
  const path = window.location.hash.replace("#","");
  
  switch(path) {
    case '/':
      return 'Home';
    case '/about':
      return 'About Us';
    case '/services':
      return 'Services';
    case '/experience':
      return 'Experience';
    case '/contact':
      return 'Contact';
    case '/projects':
      return 'Projects';
    case '/clients':
      return 'Clients';    
    default:
      return 'Home';
  }
};


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    
    <div className="hero-slider">
      {images.map((image, index) => {
        const isActive = index == currentIndex;
        const isNext = index == (currentIndex + 1) % images.length;
        
        return(
          <div
            key={index}
            className={`slide ${isActive ? 'active': ''} ${isNext ? 'next' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        );
      })}

      <div className="hero-overlay">

          <div className="container mx-auto px-4">
            <h1>Professional Consulting Services</h1>
            <p>
              Comprehensive quantity surveying and project management solutions 
              for your construction needs
            </p>
          </div>

          <div className="current-page-indicator">
            {getCurrentPageName()}
           </div>
            
          
          <div className="header-brand">
           <h1>K2MOL Consulting</h1>
          </div>
        
         <nav className="header-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
    </div>
      </div>

      


  );
};
