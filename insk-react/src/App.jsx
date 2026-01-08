import { Routes, Route } from "react-router-dom";
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
import Home from "./pages/Home";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}
