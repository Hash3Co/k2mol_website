import { ClientsSection } from '../sections/ClientsSection';
import { Building2, Users, Award } from 'lucide-react';
import ClientWatermark from "../../assets/images/watermark/home2.jpeg";
export function ClientPage() {
  return (
    <div className="client-page"
     style={{
        "--watermark": `url(${ClientWatermark})`,
      }} 
    >
      {/* Hero Section */}
      <div className="client-hero">
        <h1>Our Esteemed Clients</h1>
        <p>Trusted by industry leaders across multiple sectors</p>
      </div>

      {/* Introduction Cards */}
      <div className="intro-grid">
        <div className="intro-card">
          <div className="card-icon">
            <Building2 />
          </div>
          <h3>Enterprise Solutions</h3>
          <p>Partnering with Fortune 500 companies to deliver scalable, enterprise-grade solutions.</p>
        </div>
        
        <div className="intro-card">
          <div className="card-icon">
            <Users />
          </div>
          <h3>Startup Innovation</h3>
          <p>Supporting emerging companies with cutting-edge technology and agile development.</p>
        </div>
        
        <div className="intro-card">
          <div className="card-icon">
            <Award />
          </div>
          <h3>Long-Term Partnerships</h3>
          <p>Building lasting relationships based on trust, reliability, and consistent excellence.</p>
        </div>
      </div>

      {/* Clients Grid */}
      <ClientsSection />
    </div>
  );
}