import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';

// Home page images
import homeImage1 from '../../assets/images/home/IMG-20260713-WA0082.jpg';
import homeImage2 from '../../assets/images/home/IMG-20260318-WA0012.jpg';
import homeImage3 from '../../assets/images/home/IMG-20250620-WA0036.jpg';
import homeImage4 from '../../assets/images/home/IMG-20260318-WA0020.jpg';

// About page images
import aboutImage1 from '../../assets/images/about/IMG-20260713-WA0036.jpg';
import aboutImage2 from '../../assets/images/about/IMG-20260713-WA0090.jpg';
import aboutImage3 from '../../assets/images/about/IMG-20260318-WA0040.jpg';
import aboutImage4 from '../../assets/images/about/IMG-20260318-WA0059.jpg';

// Services page images
import servicesImage1 from '../../assets/images/services/IMG-20260318-WA0019.jpg';
import servicesImage2 from '../../assets/images/services/IMG-20260318-WA0023.jpg';
import servicesImage3 from '../../assets/images/services/IMG-20260318-WA0043.jpg';
import servicesImage4 from '../../assets/images/services/IMG-20260318-WA0074.jpg';

// Experience page images
import experienceImage1 from '../../assets/images/experience/IMG-20260713-WA0054.jpg';
import experienceImage2 from '../../assets/images/experience/IMG-20260713-WA0044.jpg';
import experienceImage3 from '../../assets/images/experience/IMG-20260713-WA0077.jpg';
import experienceImage4 from '../../assets/images/experience/IMG-20260713-WA0089.jpg';

// Contact page images
import contactImage1 from '../../assets/images/contact/IMG-20250620-WA0043.jpg';
import contactImage2 from '../../assets/images/contact/IMG-20260713-WA0057.jpg';
import contactImage3 from '../../assets/images/contact/IMG-20260318-WA0065.jpg';
import contactImage4 from '../../assets/images/contact/IMG-20260318-WA0021.jpg';

// Page configuration with images and content
const pageConfig = {
  '/': {
    images: [homeImage1, homeImage2, homeImage3, homeImage4],
    title: 'Welcome to K2MOL Consulting',
    subtitle: 'Professional Quantity Surveying and Project Management Solutions',
    heading: 'Building Excellence in Construction',
    pageName: 'Home',
    transition: 'x-reveal' // Image growth transition
  },
  '/about': {
    images: [aboutImage1, aboutImage2, aboutImage3, aboutImage4],
    title: 'About K2MOL Consulting',
    subtitle: 'Delivering Excellence in Quantity Surveying Since 2008',
    heading: 'Your Trusted Construction Partner',
    pageName: 'About Us',
    transition: 'slice' // 3D slice transition
  },
  '/services': {
    images: [servicesImage1, servicesImage2, servicesImage3, servicesImage4],
    title: 'Our Services',
    subtitle: 'Comprehensive Quantity Surveying and Project Management Solutions',
    heading: 'Expertise You Can Rely On',
    pageName: 'Services',
    transition: 'band' // Band reveal transition
  },
  '/experience': {
    images: [experienceImage1, experienceImage2, experienceImage3, experienceImage4],
    title: 'Our Experience',
    subtitle: 'Delivering Results Across Diverse Construction Projects',
    heading: 'Proven Track Record of Success',
    pageName: 'Experience',
    transition: 'x-reveal' // X-Reveal split transition
  },
  '/contact': {
    images: [contactImage1, contactImage2, contactImage3, contactImage4],
    title: 'Contact K2MOL Consulting',
    subtitle: 'Get in Touch with Our Expert Team',
    heading: 'Let\'s Discuss Your Project',
    pageName: 'Contact',
    transition: 'x-reveal' // Fade with blur transition
  },
  '/projects': {
    images: [experienceImage1, experienceImage2, experienceImage3, experienceImage4],
    title: 'Our Projects',
    subtitle: 'Showcasing Our Portfolio of Successful Projects',
    heading: 'Building Excellence Together',
    pageName: 'Projects',
    transition: 'slice' // Using slice transition for projects
  },
  '/clients': {
    images: [experienceImage1, experienceImage2, experienceImage3, experienceImage4],
    title: 'Our Clients',
    subtitle: 'Trusted by Leading Companies Across Industries',
    heading: 'Partnerships Built on Trust',
    pageName: 'Clients',
    transition: 'band' // Using band transition for clients
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
  const { title, subtitle, heading, pageName, transition } = config;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, currentIndex]);

  // Get transition class based on page
  const getTransitionClass = () => {
    switch(transition) {
      case 'growth':
        return 'growth-transition';
      case 'slice':
        return 'slice-transition';
      case 'band':
        return 'band-transition';
      case 'x-reveal':
        return 'x-transition';
      case 'fade':
        return 'fade-transition';
      default:
        return 'growth-transition';
    }
  };

  return (
    <div className={`hero-slider ${getTransitionClass()}`}>
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isPrevious = index === previousIndex;
        
        return(
          <div
            key={index}
            className={`slide ${isActive ? 'active' : ''} ${isPrevious && !isActive ? 'previous' : ''}`}
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
          <a href="tel:+27835529401" className="header-phone">
            <Phone className="icon" />
            <span>(083) 552 9401</span>
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
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/experience" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </NavLink>
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}