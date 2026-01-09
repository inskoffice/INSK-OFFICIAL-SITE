import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Team from "./components/Team/Team";
import JobDetails from "./pages/JobDetails";
import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // Unobserve after animation (trigger once by default)
            if (!entry.target.hasAttribute('data-trigger-repeat')) {
              observer.unobserve(entry.target);
            }
          } else {
            // Remove class if repeated animations are enabled
            if (entry.target.hasAttribute('data-trigger-repeat')) {
              entry.target.classList.remove('is-visible');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animated elements
    const observeElements = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe on route changes (with slight delay for new elements to render)
    const timeoutId = setTimeout(observeElements, 100);

    // Parallax effect
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-layer');
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const parentRect = element.parentElement?.getBoundingClientRect();
        
        if (parentRect && parentRect.top < window.innerHeight && parentRect.bottom > 0) {
          const yPos = (scrolled - (parentRect.top + scrolled)) * speed;
          element.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    // Throttle parallax for better performance
    let ticking = false;
    const requestParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestParallax, { passive: true });
    handleParallax(); // Initial call

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('scroll', requestParallax);
    };
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobSlug" element={<JobDetails />} />
        <Route path="/contact" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}