import React from 'react';
import { Building2, Target, Eye, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="about-section">
      {/* Elegant Header with Background Pattern */}
      <div className="about-header">
        <div className="header-overlay">
          <div className="header-content">
            <span className="header-subtitle">WHO WE ARE</span>
            <h1 className="header-title">About K2Mol Consulting</h1>
            <div className="header-divider">
              <div className="divider-line"></div>
              <Award className="divider-icon" />
              <div className="divider-line"></div>
            </div>
            <p className="header-description">
              Established in 2017, we are dedicated to excellence in quantity surveying and 
              infrastructure development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Modern Grid Layout */}
        <div className="about-grid">
          {/* Left Column - Company Story */}
          <div className="about-story">
            <div className="story-card">
              <div className="story-header">
                <Building2 className="story-icon" />
                <h2 className="story-title">Our Foundation</h2>
              </div>
              <div className="story-content">
                <p className="story-text">
                  K2Mol Consulting was founded by dynamic and competent professionals in the 
                  cost and project management field. Our establishment in 2017 marked the 
                  beginning of our journey to revolutionize infrastructure development and 
                  the building industry.
                </p>
                <p className="story-text">
                  Driven by challenges and committed to meeting client needs, we've grown 
                  into a trusted partner for numerous successful projects across the region.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column - Stats & Achievements */}
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="about-values">
            <div className="values-card">
              <div className="value-item">
                <div className="value-icon-wrapper">
                  <Target className="value-icon" />
                </div>
                <div className="value-content">
                  <h3 className="value-title">Precision</h3>
                  <p className="value-description">
                    Accurate cost estimation and project planning
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon-wrapper">
                  <Eye className="value-icon" />
                </div>
                <div className="value-content">
                  <h3 className="value-title">Vision</h3>
                  <p className="value-description">
                    Forward-thinking approach to infrastructure development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section - Split Layout */}
        <div className="vision-mission-section">
          <div className="section-pattern">
            <div className="pattern-dot"></div>
            <div className="pattern-line"></div>
            <div className="pattern-dot"></div>
          </div>
          
          <div className="vision-mission-grid">
            {/* Vision Card */}
            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon-wrapper vision-icon">
                  <Eye className="card-icon" />
                </div>
                <h2 className="card-title">Our Vision</h2>
              </div>
              <div className="card-content">
                <p className="card-text">
                  To establish a strong national footprint and become one of the most 
                  trusted leaders in the quantity surveying industry, representing our 
                  clients' interests with excellence and integrity.
                </p>
                <div className="vision-highlights">
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>National presence</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Industry leadership</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Client trust</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon-wrapper mission-icon">
                  <Target className="card-icon" />
                </div>
                <h2 className="card-title">Our Mission</h2>
              </div>
              <div className="card-content">
                <p className="card-text">
                  To provide exceptional expertise in cost and project management while 
                  adhering to sound business principles and ethical standards that earn 
                  and maintain our clients' trust.
                </p>
                <div className="mission-pillars">
                  <div className="pillar-item">
                    <div className="pillar-number">01</div>
                    <div className="pillar-content">
                      <h4 className="pillar-title">Expertise</h4>
                      <p className="pillar-description">Cost & project management</p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <div className="pillar-number">02</div>
                    <div className="pillar-content">
                      <h4 className="pillar-title">Integrity</h4>
                      <p className="pillar-description">Ethical business practices</p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <div className="pillar-number">03</div>
                    <div className="pillar-content">
                      <h4 className="pillar-title">Trust</h4>
                      <p className="pillar-description">Client confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}