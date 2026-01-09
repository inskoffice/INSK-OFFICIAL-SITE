import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Newsletter from "../components/Newsletter/Newsletter";
import Team from "../components/Team/Team";
import Process from '../components/Process/Process';
import Testimonials from "../components/Testimonials/Testimonials";
import Map from "../components/Map/Map";
import Stats from '../components/Stats/Stats';
import SEO from "../components/SEO/SEO";


const Home = () => {
  return (
    <>
    <SEO
        title="Digital Marketing, Web Design & Creative Solutions"
        description="INSK helps businesses grow through SEO, web design, branding, and digital marketing services across Sri Lanka, India, and Pakistan."
        keywords="digital marketing agency, web design, SEO services, branding agency, INSK"
        url="https://inskgroup.com/"
      />
    <Hero />
    <Services />
    <About />
    <Stats />
    <Process />
    <Team />
    {/* <Newsletter /> */}
    
    <Testimonials />
    <Map />
      
    </>
  )
}

export default Home
