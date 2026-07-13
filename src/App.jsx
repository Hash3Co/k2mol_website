import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, SponsorBand, ImageSlider } from "./components/layout";
import { Home, ProjectPage, AboutPage, ContactPage, ExperiencePage, ClientPage, ServicePage} from "./components/pages";

export default function App() {
  return (
    <Router>
      <ImageSlider />
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