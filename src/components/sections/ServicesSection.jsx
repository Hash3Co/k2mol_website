import React, { useState } from 'react';
import { 
  Calculator, Building, Users, TrendingUp, 
  CheckCircle, ArrowRight, Target, Shield, 
  Clock, Award, BarChart, FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';


// Replace this with your actual watermark image path
import servicesWatermark from '../../assets/images/services/service1.jpeg';

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: Calculator,
      title: "Cost Management",
      description: "Comprehensive cost planning and control throughout your project lifecycle.",
      detailedDescription: "Our cost management services ensure optimal budget allocation, accurate forecasting, and financial control from project inception to completion.",
      features: [
        "Budget Planning & Forecasting",
        "Cost Estimation & Analysis", 
        "Value Engineering",
        "Life Cycle Costing",
        "Cash Flow Management"
      ],
      benefits: [
        "Reduce project costs by up to 15%",
        "Accurate budget predictions within 5% margin",
        "Improved financial transparency"
      ],
      iconColor: "gold"
    },
    {
      id: 1,
      icon: Building,
      title: "Project Management",
      description: "Expert project oversight ensuring timely delivery and quality outcomes.",
      detailedDescription: "End-to-end project management services that guarantee on-time, on-budget delivery while maintaining the highest quality standards.",
      features: [
        "Timeline & Schedule Management",
        "Quality Control & Assurance", 
        "Risk Assessment & Mitigation",
        "Stakeholder Coordination",
        "Progress Monitoring"
      ],
      benefits: [
        "30% faster project completion",
        "98% on-time delivery rate",
        "Reduced project risks by 40%"
      ],
      iconColor: "dark-gold"
    },
    {
      id: 2,
      icon: Users,
      title: "Consulting Services",
      description: "Strategic advisory services to optimize your construction investments.",
      detailedDescription: "Expert consulting services that provide strategic insights and actionable recommendations for maximizing your construction ROI.",
      features: [
        "Strategic Planning & Advisory",
        "Feasibility Studies", 
        "Contract & Procurement Advice",
        "Dispute Resolution",
        "Due Diligence"
      ],
      benefits: [
        "Increased project success rate",
        "Better investment decisions",
        "Reduced legal complications"
      ],
      iconColor: "light-gold"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Commercial Management",
      description: "Maximize project value through expert commercial and contractual advice.",
      detailedDescription: "Our commercial management services ensure optimal financial returns while maintaining contractual compliance and mitigating commercial risks.",
      features: [
        "Contract Administration",
        "Claims Management & Resolution", 
        "Commercial Strategy Development",
        "Payment Applications",
        "Financial Reporting"
      ],
      benefits: [
        "Improved profit margins",
        "Enhanced contractual compliance",
        "Timely payment processing"
      ],
      iconColor: "bronze"
    }
  ];

  const additionalServices = [
    {
      icon: BarChart,
      title: "Quantity Surveying",
      description: "Accurate measurement and valuation of construction works"
    },
    {
      icon: Target,
      title: "Tender Management",
      description: "Complete tender preparation and evaluation services"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk identification and mitigation strategies"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Professional project documentation and reporting"
    }
  ];

  const ServiceCard = React.memo(({ service, onClick, isActive }) => {
    const IconComponent = service.icon;
    return (
      <div 
        className={`service-card ${isActive ? 'active' : ''}`}
        onClick={() => onClick(service.id)}
      >
        <div className={`service-icon ${service.iconColor}`}>
          <IconComponent size={24} />
        </div>
        <div className="service-card-content">
          <h3>{service.title}</h3>
          <p className="card-description">{service.description}</p>
        </div>
        <div className="card-indicator">
          <ArrowRight size={18} />
        </div>
      </div>
    );
  });

  return (
    <div className='services-page'
        style={{
        "--watermark": `url(${servicesWatermark})`,
    }}
    >
     
      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-content">
          <div className="hero-badge">
            <span>Our Expertise</span>
          </div>
          <h1>Quantity Surveying Services</h1>
          <p className="hero-subtitle">
            Comprehensive solutions designed to deliver exceptional value, 
            optimize costs, and ensure successful project outcomes
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="services-main">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Core Services</span>
            <h2>Specialized Solutions for Your Projects</h2>
            <p className="section-intro">
              We provide a comprehensive range of quantity surveying services 
              tailored to meet the unique needs of each client and project.
            </p>
          </div>
          
          <div className="services-container">
            <div className="services-navigation">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service}
                  onClick={setActiveService}
                  isActive={activeService === service.id}
                />
              ))}
            </div>
            
            <div className="service-details">
              {services.filter(s => s.id === activeService).map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="detailed-service">
                    <div className="service-header">
                      <div className={`detail-icon ${service.iconColor}`}>
                        <IconComponent size={32} />
                      </div>
                      <div className="service-header-text">
                        <h2>{service.title}</h2>
                        <p className="service-description">{service.detailedDescription}</p>
                      </div>
                    </div>
                    
                    <div className="service-content-grid">
                      <div className="features-section">
                        <h3>Key Features</h3>
                        <ul className="features-list">
                          {service.features.map((feature, index) => (
                            <li key={index}>
                              <CheckCircle className="feature-icon" size={18} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="benefits-section">
                        <h3>Client Benefits</h3>
                        <ul className="benefits-list">
                          {service.benefits.map((benefit, index) => (
                            <li key={index}>
                              <Award className="benefit-icon" size={18} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-cta">
                      <Link to="/contact" className="cta-button">
                          Get Started <ArrowRight size={18} />
                        </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Additional Services</span>
            <h2>Complementary Solutions</h2>
            <p className="section-intro">
              Explore our full range of professional services designed to support your project at every stage
            </p>
          </div>
          
          <div className="additional-grid">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="additional-card">
                  <div className="additional-icon">
                    <IconComponent size={24} />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Process</span>
            <h2>How We Deliver Excellence</h2>
            <p className="section-intro">
              A structured approach that ensures quality and consistency across every project
            </p>
          </div>
          
          <div className="process-steps">
            {[
              { number: "01", title: "Consultation", desc: "Understanding your requirements" },
              { number: "02", title: "Analysis", desc: "Detailed project assessment" },
              { number: "03", title: "Planning", desc: "Strategic solution development" },
              { number: "04", title: "Execution", desc: "Expert implementation" },
              { number: "05", title: "Review", desc: "Continuous optimization" }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}