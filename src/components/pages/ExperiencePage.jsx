import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Target, Award, ChevronRight, 
  CheckCircle, Clock, TrendingUp, Shield, Star
} from 'lucide-react';

export function ExperiencePage() {
  const [activeHover, setActiveHover] = useState(null);
  const [counter, setCounter] = useState({ projects: 0, clients: 0 });

  useEffect(() => {
    // Animated counters
    const interval = setInterval(() => {
      setCounter(prev => ({
        projects: prev.projects < 50 ? prev.projects + 1 : 50,
        clients: prev.clients < 30 ? prev.clients + 1 : 30
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

 

  const projectHighlights = [
    "Commercial Complex Development",
    "Healthcare Facility Construction",
    "Residential Tower Projects",
    "Infrastructure Development",
  ];

  const clientHighlights = [
    "Government Agencies",
    "Private Developers",
    "Construction Firms",
    "Healthcare Providers",
  ];

  return (
    <div className="experience-page">
      {/* Background Elements */}
      <div className="experience-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>

      {/* Header */}
      <div className="experience-header">
        <div className="header-badge">
          <span>Our Portfolio</span>
        </div>
        <h1 className="experience-title">
          Proven <span className="highlight">Experience</span> in Excellence
        </h1>
        <p className="experience-subtitle">
          Explore our comprehensive portfolio of successful projects and valued client partnerships
        </p>
      </div>

      {/* Main Action Cards */}
      <div className="experience-cards">
        {/* Projects Card */}
        <div 
          className={`action-card ${activeHover === 'projects' ? 'active' : ''}`}
          onMouseEnter={() => setActiveHover('projects')}
          onMouseLeave={() => setActiveHover(null)}
        >
          <div className="card-background projects-bg"></div>
          
          <div className="card-header">
            <div className="card-icon">
              <Building2 size={32} />
            </div>
            <div className="card-counter">
              <span className="counter-number">{counter.projects}+</span>
              <span className="counter-label">Projects</span>
            </div>
          </div>

          <div className="card-content">
            <h2 className="card-title">Our Work Portfolio</h2>
            <p className="card-description">
              Discover our successful infrastructure and construction projects delivered with precision and excellence
            </p>
            
            <div className="card-highlights">
              <h3>Project Highlights</h3>
              <div className="highlight-list">
                {projectHighlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <ChevronRight size={16} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/projects" className="card-button">
              Explore Projects
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="card-ribbon">Featured</div>
        </div>

        {/* Clients Card */}
        <div 
          className={`action-card ${activeHover === 'clients' ? 'active' : ''}`}
          onMouseEnter={() => setActiveHover('clients')}
          onMouseLeave={() => setActiveHover(null)}
        >
          <div className="card-background clients-bg"></div>
          
          <div className="card-header">
            <div className="card-icon">
              <Users size={32} />
            </div>
            <div className="card-counter">
              <span className="counter-number">{counter.clients}+</span>
              <span className="counter-label">Clients</span>
            </div>
          </div>

          <div className="card-content">
            <h2 className="card-title">Our Valued Clients</h2>
            <p className="card-description">
              Meet the organizations and partners who trust our expertise for their construction and development needs
            </p>
            
            <div className="card-highlights">
              <h3>Client Sectors</h3>
              <div className="highlight-list">
                {clientHighlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <ChevronRight size={16} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/clients" className="card-button">
              View Clients
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="value-proposition">
        <div className="value-content">
          <div className="value-header">
            <div className="value-badge">
              <Target size={20} />
              <span>Our Methodology</span>
            </div>
            <h2 className="value-title">Comprehensive Consulting Experience</h2>
          </div>
          
          <p className="value-text">
            With years of industry experience, we've developed a proven methodology that delivers 
            exceptional results through strategic planning, precise execution, and continuous innovation.
          </p>
        </div>
        
        <div className="value-stats">
          <div className="stat-bubble">
            <div className="bubble-content">
              <div className="bubble-icon">
                <Star size={24} />
              </div>
              <div className="bubble-text">
                <div className="bubble-value">98%</div>
                <div className="bubble-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}