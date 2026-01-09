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

const Home = () => {
  return (
    <>
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
