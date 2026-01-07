import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Building2, Target, Award, 
  CheckCircle, MapPin, ChevronRight,
  Phone, Mail, Linkedin, Twitter, Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [currentStat, setCurrentStat] = useState(0);

  const services = [
    { title: "Cost Management", icon: <Target size={20} /> },
    { title: "Project Consulting", icon: <Building2 size={20} /> },
    { title: "Quantity Surveying", icon: <Award size={20} /> },
  ];

  const projects = [
    { title: "Commercial Complex", location: "Johannesburg", category: "Commercial" },
    { title: "Hospital Extension", location: "Cape Town", category: "Healthcare" },
    { title: "Residential Tower", location: "Durban", category: "Residential" },
  ];

  const testimonials = [
    {
      text: "Exceptional professionalism and expertise exceeded our expectations.",
      author: "Bafokeng Moleko",
      role: "Project Director",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>Established 2017</span>
            <div className="badge-dot"></div>
          </div>
          
          <h1 className="hero-title">
            Precision in
            <span className="highlight"> Quantity Surveying</span>
          </h1>
          
          <p className="hero-subtitle">
            Expert cost management and project consulting services for 
            infrastructure development across South Africa.
          </p>
          
          <div className="hero-actions">
            <Link to="/services" className="primary-button">
              Explore Services
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="secondary-button">
              Get Consultation
            </Link>
          </div>
        </div>

      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-header">
            <span className="section-subtitle">WELCOME TO</span>
            <h2 className="section-title">K2MoL Consulting</h2>
          </div>
          
          <div className="intro-content">
            <p className="intro-text">
              A premier quantity surveying firm established in 2017, dedicated to 
              excellence in infrastructure development and cost management across 
              South Africa.
            </p>
            
            <div className="intro-features">
              <div className="feature-item">
                <CheckCircle size={18} />
                <span>National footprint</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={18} />
                <span>Expert cost management</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={18} />
                <span>Strategic consulting</span>
              </div>
            </div>
            
            <Link to="/about" className="learn-more-link">
              Learn More About Us
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR EXPERTISE</span>
            <h2 className="section-title">Core Services</h2>
            <p className="section-description">
              Specialized solutions for construction and infrastructure projects
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="preview-footer">
            <Link to="/services" className="view-all-link">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR WORK</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <div className="project-location">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            ))}
          </div>
          
          <div className="preview-footer">
            <Link to="/projects" className="view-all-link">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              {testimonials[0].text}
            </p>
            <div className="testimonial-author">
              <div className="author-name">{testimonials[0].author}</div>
              <div className="author-role">{testimonials[0].role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Contact us for expert quantity surveying services that deliver 
              exceptional results and outstanding value.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="primary-button">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link to="tel:+27112345678" className="secondary-button">
                <Phone size={16} />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}