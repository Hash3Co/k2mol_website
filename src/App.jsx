import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer, SponsorBand, ImageSlider } from "./components/layout";
import { Home, ProjectPage, AboutPage, ContactPage, ExperiencePage, ClientPage, ServicePage} from "./components/pages";

// Import all images for preloading
import homeImage1 from './assets/images/home/home1.jpeg';
import homeImage2 from './assets/images/home/home2.jpeg';
import homeImage3 from './assets/images/home/home3.jpeg';
import homeImage4 from './assets/images/home/home4.jpeg';
import aboutImage1 from './assets/images/about/about1.jpeg';
import aboutImage2 from './assets/images/about/about2.jpeg';
import servicesImage1 from './assets/images/services/service1.jpeg';
import experienceImage1 from './assets/images/experience/experience1.jpeg';
import experienceImage4 from './assets/images/experience/experience4.jpeg';
import contactImage4 from './assets/images/contact/contact4.jpeg';
import watermarkAbout from './assets/images/watermark/about2.jpeg';
import watermarkHome from './assets/images/watermark/home2.jpeg';
import watermarkService from './assets/images/watermark/service1.jpeg';
import logo from './assets/images/K2M_Logo.jpg';
import sponsor1 from './assets/images/sponsor/Association-of-South-African-Quantity-Surveyors-seminar.png';
import sponsor2 from './assets/images/sponsor/sacqsp_logo.png';
import sponsor3 from './assets/images/sponsor/RICS-Stacked-reg-Logo.jpg';

// All images used in the app
const ALL_IMAGES = [
  homeImage1, homeImage2, homeImage3, homeImage4,
  aboutImage1, aboutImage2,
  servicesImage1,
  experienceImage1, experienceImage4,
  contactImage4,
  watermarkAbout, watermarkHome, watermarkService,
  logo,
  sponsor1, sponsor2, sponsor3,
];

export default function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images on app mount
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = ALL_IMAGES.length;
    
    ALL_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  return (
    <Router>
      <ImageSlider key={window.location.pathname} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/clients" element={<ClientPage />} />
        </Routes>
      </main>
      <SponsorBand />
      <Footer />
    </Router>
  );
}