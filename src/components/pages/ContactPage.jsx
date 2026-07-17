import { ContactForm } from '../sections/ContactForm';
import { Mail, Phone, MapPin, Linkedin, Twitter,  Building2 } from 'lucide-react';

export function ContactPage() {
  const handleEmailClick = () => {
    window.open('mailto:bmoleko@k2mol.co.za', '_blank');
  };

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`, '_blank');
  };

  const handleLocationClick = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
  };

  const handleSocialClick = (platform) => {
    const urls = {
      linkedin: 'https://www.linkedin.com/in/bafokeng-moleko-6baa7388/',
      
    };
    window.open(urls[platform], '_blank');
  };


  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <h1> Contact Us </h1>
        <p> We're here to help you 24 hours a day </p>
        <div className="contact-page__grid">
        
          {/* Office Locations Card with Embedded Map */}
            <div className="contact-page__locations-card">
              <div className="contact-page__locations-header">
                <div className="contact-page__locations-icon-wrapper">
                  <Building2 className="contact-page__locations-icon" />
                </div>
                <h3 className="contact-page__card-title">Our Office Location</h3>
              </div>
              
              <div className="contact-page__locations-content">
                <div className="contact-page__location-details">
                  <div 
                    className="contact-page__location-item"
                    onClick={() => handleLocationClick('377 Rivonia Boulevard, Sandton, 2146, South Africa')}
                  >
                    <div className="contact-page__location-icon-wrapper">
                      <MapPin className="contact-page__location-icon" />
                    </div>
                    <div className="contact-page__location-content">
                      <h4 className="contact-page__location-title">Johannesburg Office</h4>
                      <p className="contact-page__location-address">
                        377 Rivonia Blvd<br />
                        Rivonia<br />
                        2128, South Africa
                      </p>
                      <span className="contact-page__location-badge">Headquarters</span>
                    </div>
                  </div>
                </div>
                
                {/* Embedded Google Map */}
                <div className="contact-page__map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8234567890123!2d28.056789!3d-26.106234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0b6b5b1%3A0x1234567890abcdef!2s377%20Rivonia%20Blvd%2C%20Sandton%2C%202146%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="K2MOL Office Location - 377 Rivonia Blvd, Sandton"
                  ></iframe>
                  <div className="contact-page__map-overlay">
                    <p className="contact-page__map-note">
                      Click on the map to open in Google Maps for directions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Info Card */}
            <div className="contact-page__info-card">
              <h3 className="contact-page__card-title">Get In Touch</h3>
              
              <div className="contact-page__info-intro">
                <p>Have a project in mind or want to discuss your needs?</p>
                <p>Fill out the form or reach out directly:</p>
              </div>
              
              <div className="contact-page__info-items">
                <div 
                  className="contact-page__info-item contact-page__info-item--email"
                  onClick={handleEmailClick}
                >
                  <div className="contact-page__info-icon-wrapper">
                    <Mail className="contact-page__info-icon" />
                  </div>
                  <div className="contact-page__info-content">
                    <h4 className="contact-page__info-heading">Email Us</h4>
                    <div className="contact-page__info-text">
                      <a href="mailto:bmoleko@k2mol.co.za" className="contact-page__info-link">
                        bmoleko@k2mol.co.za
                      </a>
                    </div>
                    <p className="contact-page__info-subtitle">We typically respond within 2-4 hours</p>
                  </div>
                </div>

                <div className="contact-page__info-item contact-page__info-item--phone">
                  <div className="contact-page__info-icon-wrapper">
                    <Phone className="contact-page__info-icon" />
                  </div>
                  <div className="contact-page__info-content">
                    <h4 className="contact-page__info-heading">Call Us</h4>
                    <div className="contact-page__info-text">
                      <a 
                        href="tel:+0115932000" 
                        className="contact-page__info-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePhoneClick('+0115932000');
                        }}
                      >
                        (011) 593-2000
                      </a>
                      <a 
                        href="tel:+0835529401" 
                        className="contact-page__info-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePhoneClick('+0835529401');
                        }}
                      >
                        (083) 552-9401
                      </a>
                    </div>
                    <p className="contact-page__info-subtitle">Mon-Fri, 9:00 AM - 6:00 PM SAST</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media Card */}
            <div className="contact-page__social-card">
              <h3 className="contact-page__card-title">Connect With Us</h3>
              <div className="contact-page__social-links">
                <a 
                  href="#" 
                  className="contact-page__social-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick('linkedin');
                  }}
                >
                  <Linkedin className="contact-page__social-icon" />
                </a>
                
              </div>
              
              <div className="contact-page__guarantee">
                <p className="contact-page__guarantee-text">
                  <strong>Quick Response Guarantee:</strong> We pride ourselves on rapid communication. 
                  Expect a response within 2-4 hours during business hours.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
