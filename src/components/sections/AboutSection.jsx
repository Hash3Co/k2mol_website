import React from 'react';
import { Building2, Target, Eye, Award } from 'lucide-react';

// Replace this with your actual image path
import about from '../../assets/images/about/about1.jpeg';

export function AboutSection() {
  return (
    <section className="about-section">
      
      {/* Main Content - Two Column Layout */}
      <div className="about-main">
        <div className="about-container">
          {/* Left Column - Image */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img 
                src={about} 
                alt="K2Mol Consulting Team" 
                className="about-main-image"
                loading="lazy"
              />
              <div className="about-image-overlay">
                <div className="about-image-badge">
                  <span>Est. 2017</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content-wrapper">
            <div className="about-content-inner">
              <div className="about-content-header">
                <span className="about-content-tag">OUR FOUNDATION</span>
                <h2 className="about-content-title">Building Excellence Since 2017</h2>
              </div>

              <div className="about-content-text">
                <p className="about-text">
                  K2Mol Consulting was founded by dynamic and competent professionals in the 
                  cost and project management field. Our establishment in 2017 marked the 
                  beginning of our journey to revolutionize infrastructure development and 
                  the building industry.
                </p>
                <p className="about-text">
                  Driven by challenges and committed to meeting client needs, we've grown 
                  into a trusted partner for numerous successful projects across the region.
                </p>
              </div>

              {/* Core Values */}
              <div className="about-values-grid">
                <div className="about-value-item">
                  <div className="about-value-icon">
                    <Target size={20} />
                  </div>
                  <div className="about-value-content">
                    <h4 className="about-value-title">Precision</h4>
                    <p className="about-value-desc">Accurate cost estimation and project planning</p>
                  </div>
                </div>

                <div className="about-value-item">
                  <div className="about-value-icon">
                    <Eye size={20} />
                  </div>
                  <div className="about-value-content">
                    <h4 className="about-value-title">Vision</h4>
                    <p className="about-value-desc">Forward-thinking approach to infrastructure development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="about-vision-mission">
        <div className="about-container">
          <div className="about-vm-grid">
            {/* Vision Card */}
            <div className="about-vm-card vision-card">
              <div className="about-vm-icon vision-icon-bg">
                <Eye size={28} />
              </div>
              <h3 className="about-vm-title">Our Vision</h3>
              <p className="about-vm-text">
                To establish a strong national footprint and become one of the most 
                trusted leaders in the quantity surveying industry, representing our 
                clients' interests with excellence and integrity.
              </p>
              <ul className="about-vm-list">
                <li>National presence</li>
                <li>Industry leadership</li>
                <li>Client trust</li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="about-vm-card mission-card">
              <div className="about-vm-icon mission-icon-bg">
                <Target size={28} />
              </div>
              <h3 className="about-vm-title">Our Mission</h3>
              <p className="about-vm-text">
                To provide exceptional expertise in cost and project management while 
                adhering to sound business principles and ethical standards that earn 
                and maintain our clients' trust.
              </p>
              <ul className="about-vm-list">
                <li>Expertise in cost &amp; project management</li>
                <li>Ethical business practices</li>
                <li>Client confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}