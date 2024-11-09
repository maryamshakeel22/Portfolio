"use client"

import  Hero  from "./hero/page";
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import AOS from 'aos'
import About from "./about/page";
import SkillsShowcase from "./skills/page";
import PortFolio from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
return(
  <>

 {/* hero */}
 <Hero/>
 
 {/* about */}
 <About />

 {/* skills */}
 <SkillsShowcase />
 
 {/* projects */}
 <PortFolio />

 {/* contact */}
 <Contact />
  </>
)
}
