import React from 'react';
import sponsor1 from '../../assets/images/sponsor/Association-of-South-African-Quantity-Surveyors-seminar.png';
import sponsor2 from '../../assets/images/sponsor/sacqsp_logo.png';
import sponsor3 from '../../assets/images/sponsor/RICS-Stacked-reg-Logo.jpg';

export function SponsorBand() {
  const sponsors = [
    { id: 1, logo: sponsor1, name: 'ASAQS', url: 'https://www.asaqs.co.za' },
    { id: 2, logo: sponsor2, name: 'SACQSP', url: 'https://www.sacqsp.co.za' },
    { id: 3, logo: sponsor3, name: 'RICS', url: 'https://www.rics.org' },
  ];

  return (
    <div className="sponsor-band">
      <div className="sponsor-container">
        <div className="sponsor-logos">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sponsor-link"
              title={sponsor.name}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="sponsor-logo"
                loading="eager"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}