import { AboutSection }  from '../sections/AboutSection';
import AboutWatermark from "../../assets/images/watermark/about2.jpeg";

export function AboutPage() {
  return (
    <div className='about-page'
      style={{
        "--watermark": `url(${AboutWatermark})`,
      }}
    >
      <AboutSection />
    </div>
  );
}