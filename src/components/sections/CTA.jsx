import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Contact us for expert quantity surveying services that deliver 
              exceptional results and outstanding value.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="primary-button">
                Get Started
                <ArrowRight size={18} />
              </a>
              <a href="tel:+27112345678" className="secondary-button">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
