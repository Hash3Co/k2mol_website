import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';

// Home page images
import homeImage1 from '../../assets/images/home/IMG-20250620-WA0022.jpg';
import homeImage2 from '../../assets/images/home/IMG-20250620-WA0024.jpg';
import homeImage3 from '../../assets/images/home/IMG-20250620-WA0036.jpg';
import homeImage4 from '../../assets/images/home/IMG-20250620-WA0043.jpg';

// About page images
import aboutImage1 from '../../assets/images/about/IMG-20260318-WA0027.jpg';
import aboutImage2 from '../../assets/images/about/IMG-20260318-WA0030.jpg';
import aboutImage3 from '../../assets/images/about/IMG-20260318-WA0040.jpg';
import aboutImage4 from '../../assets/images/about/IMG-20260318-WA0059.jpg';

// Services page images
import servicesImage1 from '../../assets/images/services/IMG-20260318-WA0019.jpg';
import servicesImage2 from '../../assets/images/services/IMG-20260318-WA0023.jpg';
import servicesImage3 from '../../assets/images/services/IMG-20260318-WA0043.jpg';

// Experience page images (will also be used for Clients and Projects)
import experienceImage1 from '../../assets/images/experience/IMG-20260318-WA0003.jpg';
import experienceImage2 from '../../assets/images/experience/IMG-20260318-WA0060.jpg';
import experienceImage3 from '../../assets/images/experience/IMG-20260318-WA0067.jpg';

// Contact page images
import contactImage1 from '../../assets/images/contact/IMG-20260318-WA0036.jpg';
import contactImage2 from '../../assets/images/contact/IMG-20260318-WA0054.jpg';
import contactImage3 from '../../assets/images/contact/IMG-20260318-WA0065.jpg';

// Page configuration with images and content
const pageConfig = {
  '/': {
    images: [homeImage1, homeImage2, homeImage3, homeImage4],
    title: 'Welcome to K2MOL Consulting',
    subtitle: 'Professional Quantity Surveying and Project Management Solutions',
    heading: 'Building Excellence in Construction',
    pageName: 'Home'
  },
  '/about': {
    images: [aboutImage1, aboutImage2, aboutImage3, aboutImage4],
    title: 'About K2MOL Consulting',
    subtitle: 'Delivering Excellence in Quantity Surveying Since 2008',
    heading: 'Your Trusted Construction Partner',
    pageName: 'About Us'
  },
  '/services': {
    images: [servicesImage1, servicesImage2, servicesImage3],
    title: 'Our Services',
    subtitle: 'Comprehensive Quantity Surveying and Project Management Solutions',
    heading: 'Expertise You Can Rely On',
    pageName: 'Services'
  },
  '/experience': {
    images: [experienceImage1, experienceImage2, experienceImage3],
    title: 'Our Experience',
    subtitle: 'Delivering Results Across Diverse Construction Projects',
    heading: 'Proven Track Record of Success',
    pageName: 'Experience'
  },
  '/contact': {
    images: [contactImage1, contactImage2, contactImage3],
    title: 'Contact K2MOL Consulting',
    subtitle: 'Get in Touch with Our Expert Team',
    heading: 'Let\'s Discuss Your Project',
    pageName: 'Contact'
  },
  '/projects': {
    images: [experienceImage1, experienceImage2, experienceImage3], // Using experience images
    title: 'Our Projects',
    subtitle: 'Showcasing Our Portfolio of Successful Projects',
    heading: 'Building Excellence Together',
    pageName: 'Projects'
  },
  '/clients': {
    images: [experienceImage1, experienceImage2, experienceImage3], // Using experience images
    title: 'Our Clients',
    subtitle: 'Trusted by Leading Companies Across Industries',
    heading: 'Partnerships Built on Trust',
    pageName: 'Clients'
  }
};

export function ImageSlider({ interval = 5000 }) {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  
  // Get configuration for current page
  const config = pageConfig[currentPath];
  
  // If page doesn't exist in config, return null
  if (!config) {
    return null;
  }
  
  const images = config.images;
  const { title, subtitle, heading, pageName } = config;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="hero-slider">
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isNext = index === (currentIndex + 1) % images.length;
        
        return(
          <div
            key={index}
            className={`slide ${isActive ? 'active' : ''} ${isNext ? 'next' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        );
      })}

      <div className="hero-overlay">
        <div className="container mx-auto px-4">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="current-page-indicator">
          {pageName}
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
}