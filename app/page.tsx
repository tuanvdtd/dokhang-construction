import { ConstructionGrid } from "@/components/ConstructionGrid";
import { HeroSection } from "./HeroSection";
import { Services } from '@/components/Services';
import { AboutUs } from '@/components/AboutUs';
// import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
// import { Contact } from '@/components/Contact';
import { SectionDivider } from '@/components/SectionDivider';

export default function App() {

  return (
    <>
       <HeroSection />
          <SectionDivider />
          <div id="services">
            <Services />
          </div>
          <SectionDivider />
          <div id="about">
            <AboutUs />
          </div>
          <SectionDivider />
          <div id="projects">
            <ConstructionGrid />
          </div>
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          {/* <div id="contact">
            <Contact />
          </div> */}
    </>
  );
}
/*
 <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Project 3" className="w-full h-64 object-cover" />
  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Project 2" className="w-full h-64 object-cover" />
*/