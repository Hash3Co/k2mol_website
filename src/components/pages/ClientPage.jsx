import { ClientsSection } from '../sections/ClientsSection';

export function ClientPage() {
  return (
    <div className="client-page">
      

      <section className="clients-intro">
        <div className="section-container">
          <div className="intro-header">
            <span className="section-badge">
              Our Esteemed Network
            </span>
            
            <h2 className="section-title">
              Trusted by Industry Leaders
            </h2>
            
            <p className="section-description">
              We're proud to partner with forward-thinking organizations that value excellence, 
              innovation, and results-driven solutions. These relationships fuel our commitment 
              to delivering exceptional value.
            </p>
          </div>
          
          <div className="intro-grid">
            <div className="intro-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Enterprise Solutions</h3>
              <p>Partnering with Fortune 500 companies to deliver scalable, enterprise-grade solutions.</p>
            </div>
            
            <div className="intro-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>Startup Innovation</h3>
              <p>Supporting emerging companies with cutting-edge technology and agile development.</p>
            </div>
            
            <div className="intro-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Long-Term Partnerships</h3>
              <p>Building lasting relationships based on trust, reliability, and consistent excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />
      
    
    </div>
  );
}