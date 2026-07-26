import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X, ChevronDown } from 'lucide-react';

// Home page images
import homeImage1 from '../../assets/images/home/home1.jpeg';
import homeImage2 from '../../assets/images/home/home2.jpeg';
import homeImage3 from '../../assets/images/home/home3.jpeg';
import homeImage4 from '../../assets/images/home/home4.jpeg';

// About page images
import aboutImage1 from '../../assets/images/about/about1.jpeg';
import aboutImage2 from '../../assets/images/about/about2.jpeg';

// Services page images
import servicesImage1 from '../../assets/images/services/service1.jpeg';

// Experience page images
import experienceImage1 from '../../assets/images/experience/experience1.jpeg';
import experienceImage4 from '../../assets/images/experience/experience4.jpeg';

// Contact page images
import contactImage4 from '../../assets/images/contact/contact4.jpeg';

// Page configuration
const pageConfig = {
  '/': {
    groups: [
      {
        title: 'Rely On Our Ability',
        description: 'Delivering world-class construction and consulting services across Southern Africa and beyond.',
        images: [homeImage1, homeImage3, homeImage2, homeImage4],
      },
    ],
    pageName: 'Home',
    isFullScreen: true,
  },
  '/about': {
    groups: [
      {
        title: 'About Us',
        description: 'A legacy built on precision, safety, quality and reliability since 2017.',
        images: [aboutImage1, aboutImage2 ],
      },
    ],
    pageName: 'About Us',
    isFullScreen: false,
  },
  '/services': {
    groups: [
      {
        title: 'Our Services',
        description: 'Comprehensive construction and consulting solutions for every project.',
        images: [servicesImage1],
      },
    ],
    pageName: 'Services',
    isFullScreen: false,
  },
  '/experience': {
    groups: [
      {
        title: 'Experience',
        description: 'Years of excellence delivering successful projects worldwide.',
        images: [experienceImage4],
      },
    ],
    pageName: 'Experience',
    isFullScreen: false,
  },
  '/projects': {
    groups: [
      {
        title: 'Our Projects',
        description: 'Showcasing our portfolio of successful construction projects.',
        images: [experienceImage4],
      },
    ],
    pageName: 'Projects',
    isFullScreen: false,
  },
  '/clients': {
    groups: [
      {
        title: 'Our Clients',
        description: 'Trusted by industry leaders across multiple sectors.',
        images: [experienceImage1],
      },
    ],
    pageName: 'Clients',
    isFullScreen: false,
  },
  '/contact': {
    groups: [
      {
        title: 'Contact Us',
        description: 'Get in touch with our experienced team for your construction needs.',
        images: [ contactImage4],
      },
    ],
    pageName: 'Contact',
    isFullScreen: false,
  },
};

export function ImageSlider({ interval = 5000 }) {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  
  const config = pageConfig[currentPath];
  if (!config) return null;
  
  // Flatten groups into slides
  const slides = config.groups.flatMap((group) =>
    group.images.map((image) => ({
      image,
      title: group.title,
      description: group.description,
    }))
  );
  
  const { pageName, isFullScreen } = config;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentSlide = slides[currentIndex];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  // Determine CSS classes based on whether it's full screen or banner
  const heroClass = isFullScreen ? 'hero hero-fullscreen' : 'hero hero-banner';

  return (
    <section className={heroClass}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${currentIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="hero-overlay">
        {/* Brand */}
        <div className="header-brand">
          <h1>K2MOL Consulting</h1>
        </div>
      
        {/* Navigation */}
        <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          
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

        {/* Header Actions */}
        <div className="header-actions">
          <a href="tel:+27835529401" className="header-phone">
            <Phone className="icon" />
            <span>(083) 552 9401</span>
          </a>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="icon" />
          </button>
        </div>

        {/* Hero Content - Only show on fullscreen home page */}
        {isFullScreen ? (
          <div className="hero-content">
            <h1 className="hero-title">
              Rely On <span className="highlight">Our Ability</span>
            </h1>
            <p className="hero-description">
              Delivering world-class construction and consulting services across Southern Africa and beyond.
            </p>
            
            <div className="hero-buttons">
              <button className="primary-btn">View Our Services</button>
              <button className="secondary-btn">Contact Us</button>
            </div>
          </div>
        ) : (
          /* Banner content for other pages - like WBHO's ABOUT US section */
          <div className="hero-banner-content">
            <span className="banner-subtitle">{pageName}</span>
            <h1 className="banner-title">{currentSlide.title}</h1>
            <p className="banner-description">{currentSlide.description}</p>
          </div>
        )}

        {/* Slide Indicators - Only on home page */}
        {isFullScreen && (
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Page Indicator */}
        <div className="current-page-indicator">
          {pageName}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="icon" />
              </button>
            </div>
           
            <nav className="mobile-nav">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
              <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
              
              <span className="dropdown-label">Experience</span>
              <div className="mobile-dropdown-items">
                <NavLink to="/experience" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
                <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/clients" onClick={() => setMobileMenuOpen(false)}>Clients</NavLink>
              </div>
              
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}