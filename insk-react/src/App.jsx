import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import Newsletter from "./components/Newsletter/Newsletter";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Process from './components/Process/Process';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Process />
      <Newsletter />
      <Team />
      <Testimonials />
      <Map />
      <Footer />
    </>
  );
}
