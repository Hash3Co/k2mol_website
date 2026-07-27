// ExperiencePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, Users, CheckCircle, Clock, 
  ArrowRight, Star, Award, TrendingUp 
} from 'lucide-react';

import ExperienceWatermark from "../../assets/images/watermark/home2.jpeg";

export function ExperiencePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('projects'); // 'projects' or 'clients'

  return (
    <div className="experience-page"
      style={{
        "--watermark": `url(${ExperienceWatermark})`,
      }}
    >
      {/* Background Elements - already in your CSS */}
      <div className="experience-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>

      {/* Header Section */}
      <div className="experience-header">
        <div className="header-badge">
          <span>Our Track Record</span>
        </div>
        <h1 className="experience-title">
          Years of <span className="highlight">Excellence</span>
        </h1>
        <p className="experience-subtitle">
          Delivering exceptional construction and consulting services worldwide
        </p>
      </div>

      {/* Metrics Bar - already styled in your CSS */}
      <div className="metrics-bar">
        <div className="metric-item">
          <div className="metric-icon"><Briefcase /></div>
          <div className="metric-content">
            <div className="metric-value">20+</div>
            <div className="metric-label">Projects Completed</div>
          </div>
        </div>
        <div className="metric-item">
          <div className="metric-icon"><Users /></div>
          <div className="metric-content">
            <div className="metric-value">13+</div>
            <div className="metric-label">Happy Clients</div>
          </div>
        </div>
        <div className="metric-item">
          <div className="metric-icon"><Clock /></div>
          <div className="metric-content">
            <div className="metric-value">12+</div>
            <div className="metric-label">Years Experience</div>
          </div>
        </div>
        <div className="metric-item">
          <div className="metric-icon"><TrendingUp /></div>
          <div className="metric-content">
            <div className="metric-value">98%</div>
            <div className="metric-label">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Toggle Cards for Projects/Clients */}
      <div className="experience-cards">
        {/* Projects Card */}
        <div >
          <div className="card-background projects-bg"></div>
          <div className="card-header">
            <div className="card-icon"><Briefcase /></div>
          </div>
          <div className="card-content">
            <h2 className="card-title">Our Projects</h2>
            <p className="card-description">
              Innovative construction and development projects worldwide
            </p>
            <div className="card-highlights">
              <h3>Project Excellence:</h3>
              <div className="highlight-list">
                <div className="highlight-item"><Award /> Award-Winning Designs</div>
                <div className="highlight-item"><CheckCircle /> On-Time Delivery</div>
                <div className="highlight-item"><TrendingUp /> Sustainable Solutions</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Clients Card */}
        <div>
          <div className="card-background clients-bg"></div>
          <div className="card-header">
            <div className="card-icon"><Users /></div>
          </div>
          <div className="card-content">
            <h2 className="card-title">Our Clients</h2>
            <p className="card-description">
              Trusted by industry leaders across multiple sectors
            </p>
            <div className="card-highlights">
              <h3>Client Success:</h3>
              <div className="highlight-list">
                <div className="highlight-item"><Star /> Fortune 500 Companies</div>
                <div className="highlight-item"><Star /> Government Contracts</div>
                <div className="highlight-item"><Star /> International Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}