// ImageSlider.jsx - Complete fixed version with proper path detection
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
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

// Slide configuration with cinematic settings
const slideConfigs = {
  '/': {
    slides: [
      {
        id: 0,
        image: homeImage1,
        title: "Rely On\nOur Ability",
        description: "Delivering world-class construction and consulting services across Southern Africa and beyond.",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '340px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: '45% center', laptop: '45% 35%', tablet: '50% center', mobile: '55% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      },
      {
        id: 2,
        image: homeImage3,
        title: "Trusted To\nBuild Tomorrow",
        description: "Every project is built on precision, safety and uncompromising quality.",
        textPosition: { bottom: '12%', right: '8%' },
        textAlign: 'right',
        textWidth: '340px',
        titleColor:'#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'zoom-center',
        titleDelay: 0.3,
        descDelay: 0.6,
      },
      {
        id: 1,
        image: homeImage2,
        title: "Engineering\nWith Purpose",
        description: "Creating sustainable infrastructure through innovative engineering and trusted expertise.",
        textPosition: { bottom: '12%', right: '8%' },
        textAlign: 'right',
        textWidth: '340px',
        titleColor: '#60A5FA',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: '55% center', laptop: '55% 40%', tablet: '50% center', mobile: '45% center' },
        imageMotion: 'pan-left',
        titleDelay: 0.3,
        descDelay: 0.6,
      },
      {
        id: 3,
        image: homeImage4,
        title: "Where Quality\nMeets Expertise",
        description: "Trusted by clients across Southern Africa for dependable construction and consulting solutions.",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '360px',
        titleColor: '#60A5FA',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: '40% center', laptop: '40% 30%', tablet: '45% center', mobile: '50% center' },
        imageMotion: 'pan-diagonal',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'Home',
    isFullScreen: true,
    transitionDuration: 2800,
    slideInterval: 10000,
  },
  '/about': {
    slides: [
      {
        id: 0,
        image: aboutImage1,
        title: "Our Story",
        description: "A legacy built on precision, safety, quality and reliability since 2017.",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '300px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'About Us',
    isFullScreen: false,
    transitionDuration: 2500,
    slideInterval: 8000,
  },
  '/services': {
    slides: [
      {
        id: 0,
        image: servicesImage1,
        title: "What We Do",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '300px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'Services',
    isFullScreen: false,
    transitionDuration: 2500,
    slideInterval: 8000,
  },
  '/experience': {
    slides: [
      {
        id: 0,
        image: experienceImage4,
        title: "Our Journey",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '280px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'Experience',
    isFullScreen: false,
    transitionDuration: 2500,
    slideInterval: 8000,
  },
  '/projects': {
    slides: [
      {
        id: 0,
        image: experienceImage4,
        title: "Our Work",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '280px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'Projects',
    isFullScreen: false,
    transitionDuration: 2500,
    slideInterval: 8000,
  },
  '/clients': {
    slides: [
      {
        id: 0,
        image: experienceImage1,
        title: "Our Clientele",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '280px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'Clients',
    isFullScreen: false,
    transitionDuration: 2500,
    slideInterval: 8000,
  },
  '/contact': {
    slides: [
      {
        id: 0,
        image: contactImage4,
        title: "Get In Touch",
        textPosition: { bottom: '12%', left: '8%' },
        textAlign: 'left',
        textWidth: '300px',
        titleColor: '#FFFFFF',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        titleEntry: 'bottom-up',
        descEntry: 'bottom-up-delayed',
        imagePosition: { desktop: 'center center', laptop: 'center 35%', tablet: 'center center', mobile: '50% center' },
        imageMotion: 'pan-right',
        titleDelay: 0.3,
        descDelay: 0.6,
      }
    ],
    pageName: 'Contact',
    isFullScreen: false,
    transitionDuration: 2500,
    slideInterval: 8000,
  },
};

export const ImageSlider = memo(function ImageSlider() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  
  const config = slideConfigs[currentPath];
  if (!config) return null;
  
  const { slides, pageName, isFullScreen, transitionDuration = 2800, slideInterval = 10000 } = config;
  
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const [textPhase, setTextPhase] = useState('visible');
  const [imagesReady, setImagesReady] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const slideTimerRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const textTimerRef = useRef(null);
  const previousPathRef = useRef(currentPath);
  
  // Reset and load images when path changes
  useEffect(() => {
    // Check if path actually changed
    if (previousPathRef.current !== currentPath) {
      previousPathRef.current = currentPath;
      setIsFirstLoad(true);
      setImagesReady(false);
      setCurrentIndex(0);
      setNextIndex(1);
      setTextVisible(false);
      setTextPhase('exiting');
      setIsTransitioning(false);
      
      // Clear all timers
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    }
    
    // Preload images for this path
    let mounted = true;
    let loadedCount = 0;
    const totalImages = slides.length;
    
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loadedCount++;
        if (mounted && loadedCount === totalImages) {
          setImagesReady(true);
          // Show text with animation after images load
          setTimeout(() => {
            setTextVisible(true);
            setTextPhase('entering');
            setTimeout(() => {
              setTextPhase('visible');
              setIsFirstLoad(false);
            }, 1200);
          }, 300);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (mounted && loadedCount === totalImages) {
          setImagesReady(true);
          setTimeout(() => {
            setTextVisible(true);
            setTextPhase('entering');
            setTimeout(() => {
              setTextPhase('visible');
              setIsFirstLoad(false);
            }, 1200);
          }, 300);
        }
      };
    });
    
    return () => { 
      mounted = false;
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
  }, [currentPath, slides]);

  const getImagePosition = (slide) => {
    if (!slide?.imagePosition) return 'center center';
    const pos = slide.imagePosition;
    if (window.innerWidth >= 1920) return pos.desktop || 'center center';
    if (window.innerWidth >= 1024) return pos.laptop || pos.desktop || 'center center';
    if (window.innerWidth >= 768) return pos.tablet || pos.laptop || pos.desktop || 'center center';
    return pos.mobile || pos.tablet || pos.laptop || pos.desktop || 'center center';
  };

  // Change slide with synchronized transition
  const changeSlide = useCallback(() => {
    if (isTransitioning || !imagesReady || slides.length <= 1) return;
    
    const next = (currentIndex + 1) % slides.length;
    setNextIndex(next);
    setIsTransitioning(true);
    setTextPhase('exiting');
    
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    textTimerRef.current = setTimeout(() => {
      setTextVisible(false);
    }, 400);
    
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      setCurrentIndex(next);
      setTextVisible(true);
      setTextPhase('entering');
      
      setTimeout(() => {
        setTextPhase('visible');
        setIsTransitioning(false);
      }, 1200);
      
    }, transitionDuration);
    
  }, [currentIndex, slides.length, isTransitioning, transitionDuration, imagesReady]);

  // Auto-play
  useEffect(() => {
    if (slides.length <= 1 || !imagesReady || isFirstLoad) return;
    
    slideTimerRef.current = setInterval(() => {
      if (!isTransitioning) {
        changeSlide();
      }
    }, slideInterval);
    
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [changeSlide, slides.length, slideInterval, isTransitioning, imagesReady, isFirstLoad]);

  // Go to specific slide
  const goToSlide = (index) => {
    if (index === currentIndex || isTransitioning || !imagesReady) return;
    
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = setInterval(() => {
        if (!isTransitioning) changeSlide();
      }, slideInterval);
    }
    
    const next = index;
    setNextIndex(next);
    setIsTransitioning(true);
    setTextPhase('exiting');
    
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    textTimerRef.current = setTimeout(() => {
      setTextVisible(false);
    }, 400);
    
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      setCurrentIndex(next);
      setTextVisible(true);
      setTextPhase('entering');
      setTimeout(() => {
        setTextPhase('visible');
        setIsTransitioning(false);
      }, 1200);
    }, transitionDuration);
  };

  const heroClass = isFullScreen ? 'hero hero-fullscreen' : 'hero hero-banner';
  
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[nextIndex];
  
  const currentImagePos = getImagePosition(currentSlide);
  const nextImagePos = getImagePosition(nextSlide);

  const renderTitle = (title) => {
    if (!title) return null;
    const lines = title.split('\n');
    return lines.map((line, i) => (
      <span key={i} className="title-line">{line}</span>
    ));
  };

  const getTextStyles = (slide) => {
    if (!slide?.textPosition) return { bottom: '12%', left: '8%' };
    return slide.textPosition;
  };

  if (!imagesReady) {
    return (
      <section className={heroClass} style={{ background: '#0a0a0a' }}>
        <div className="hero-overlay">
          <div className="hero-header">
            <div className="header-brand">
              <h1>K2MOL Consulting</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={heroClass}>
      {/* Image Stack */}
      <div className="hero-image-stack">
        {/* Current Image */}
        <div 
          className={`hero-slide-wrapper hero-slide-current ${isTransitioning ? 'exiting' : ''}`}
          style={{ 
            opacity: isTransitioning ? 0 : 1,
            transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            zIndex: isTransitioning ? 1 : 2,
          }}
        >
          <img 
            src={currentSlide?.image} 
            alt=""
            className={`hero-slide-image motion-${currentSlide?.imageMotion || 'pan-right'}`}
            style={{
              objectPosition: currentImagePos,
            }}
            loading="eager"
            fetchpriority="high"
          />
        </div>
        
        {/* Next Image */}
        <div 
          className={`hero-slide-wrapper hero-slide-next ${isTransitioning ? 'entering' : ''}`}
          style={{
            opacity: isTransitioning ? 1 : 0,
            transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            zIndex: isTransitioning ? 3 : 1,
          }}
        >
          <img 
            src={nextSlide?.image} 
            alt=""
            className={`hero-slide-image motion-${nextSlide?.imageMotion || 'pan-right'}`}
            style={{
              objectPosition: nextImagePos,
            }}
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="hero-overlay">
        <div className="hero-overlay-gradient"></div>
        <div className="hero-overlay-soft"></div>

        {/* Header */}
        <div className="hero-header">
          <div className="header-brand">
            <h1>K2MOL Consulting</h1>
          </div>
          
          <nav className="header-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
            
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
            
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
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

        {/* Hero Content */}
        <div className="hero-content-wrapper">
          {isFullScreen ? (
            <div 
              className={`hero-content text-${textPhase}`}
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                paddingTop: '80px',
              }}
            >
              <div 
                className="hero-text-container"
                style={{
                  position: 'absolute',
                  ...getTextStyles(currentSlide),
                  textAlign: currentSlide?.textAlign || 'left',
                  maxWidth: currentSlide?.textWidth || '340px',
                  width: 'auto',
                  opacity: textVisible ? 1 : 0,
                  transition: `opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
              >
                <h1 
                  className={`hero-title entry-${currentSlide?.titleEntry || 'bottom-up'}`}
                  style={{ 
                    animationDelay: `${currentSlide?.titleDelay || 0.3}s`,
                    textAlign: currentSlide?.textAlign || 'left',
                    color: currentSlide?.titleColor || '#FFFFFF',
                  }}
                >
                  {renderTitle(currentSlide?.title)}
                </h1>
                {currentSlide?.description && (
                  <p 
                    className={`hero-description entry-${currentSlide?.descEntry || 'bottom-up-delayed'}`}
                    style={{ 
                      animationDelay: `${currentSlide?.descDelay || 0.6}s`,
                      textAlign: currentSlide?.textAlign || 'left',
                      color: currentSlide?.descriptionColor || 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {currentSlide?.description}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div 
              className={`hero-banner-content text-${textPhase}`}
              style={{
                opacity: textVisible ? 1 : 0,
                transition: `opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)`,
                paddingTop: '80px',
              }}
            >
              <div style={{ 
                maxWidth: currentSlide?.textWidth || '340px',
                position: 'relative',
                bottom: '0',
              }}>
                <h1 
                  className={`banner-title entry-${currentSlide?.titleEntry || 'bottom-up'}`}
                  style={{ 
                    animationDelay: `${currentSlide?.titleDelay || 0.3}s`,
                    textAlign: currentSlide?.textAlign || 'left',
                    color: currentSlide?.titleColor || '#FFFFFF',
                  }}
                >
                  {renderTitle(currentSlide?.title)}
                </h1>
                {currentSlide?.description && (
                  <p 
                    className={`banner-description entry-${currentSlide?.descEntry || 'bottom-up-delayed'}`}
                    style={{ 
                      animationDelay: `${currentSlide?.descDelay || 0.6}s`,
                      textAlign: currentSlide?.textAlign || 'left',
                      color: currentSlide?.descriptionColor || 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {currentSlide?.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Indicators */}
        {isFullScreen && slides.length > 1 && (
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="indicator-progress" />
              </button>
            ))}
          </div>
        )}

        {/* Page Indicator */}
        <div className="current-page-indicator">
          <span className="page-label">{pageName}</span>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay">
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
                <div className="mobile-dropdown-group">
                  <span className="mobile-dropdown-label">Experience</span>
                  <div className="mobile-dropdown-items">
                    <NavLink to="/experience" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
                    <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
                    <NavLink to="/clients" onClick={() => setMobileMenuOpen(false)}>Clients</NavLink>
                  </div>
                </div>
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});