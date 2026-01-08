import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Careers from "./pages/Careers";

import JobDetails from "./pages/JobDetails";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobSlug" element={<JobDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
