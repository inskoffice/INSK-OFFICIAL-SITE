import { useState, useEffect, useRef } from 'react';
import './Process.css';

const processSteps = [
  {
    id: 1,
    step: "Step 01",
    title: "Tailored Solutions",
    description: "Custom approaches designed around your brand's unique needs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.8" />
    </svg>
  },
  {
    id: 2,
    step: "Step 02",
    title: "Planning & Strategy",
    description: "Structured planning backed by insight and clear objectives.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 7-7" />
      <circle cx="3" cy="17" r="1.5" />
      <circle cx="9" cy="11" r="1.5" />
      <circle cx="13" cy="15" r="1.5" />
      <circle cx="20" cy="8" r="1.5" />
    </svg>
  },
  {
    id: 3,
    step: "Step 03",
    title: "Content Planing & Creation",
    description: "Strategically crafted content designed to inform, and inspire.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5a7 7 0 0 0-4-12z" />
    </svg>
  },
  {
    id: 4,
    step: "Step 04",
    title: "Review & Delivery",
    description: "Refined and flawlessly delivered to ensure quality, consistency, and impact.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className="process" ref={sectionRef}>
      <div className="process__container">
        <div className="process__header">
          <h2 className="process__title animate-on-scroll fade-up">
            <span className="process__title-outline">OUR</span>
            <span className="process__title-solid"> PROCESS</span>
          </h2>
        </div>

        <div className="process__steps">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`process__step animate-on-scroll ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              } ${activeStep === step.id ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="process__step-header">
                <span className="process__step-number">{step.step}</span>
                <div className={`process__step-indicator ${activeStep === step.id ? 'active' : ''}`}>
                  <div className="indicator-pulse"></div>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <div className="process__step-line">
                  <div className="line-progress"></div>
                </div>
              )}

              <div className="process__step-content">
                <div className={`process__step-icon ${activeStep === step.id ? 'active' : ''}`}>
                  <span>{step.icon}</span>
                </div>

                <div className="process__step-card">
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}