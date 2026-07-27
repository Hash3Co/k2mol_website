import { AboutSection } from '../sections/AboutSection';
import AboutWatermark from "../../assets/images/watermark/about2.jpeg";

export function AboutPage() {
  return (
    <div className='about-page' style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Watermark as a direct child div */}
      <div className="about-watermark" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: `url(${AboutWatermark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.30,
        filter: 'grayscale(100%) brightness(88%) contrast(98%)',
      }}>
        {/* White overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.35)',
        }}></div>
      </div>

      {/* Content - sits above watermark */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <AboutSection />
      </div>
    </div>
  );
}