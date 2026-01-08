import { useState } from 'react';
import './Process.css';

const processSteps = [
  {
    id: 1,
    step: "Step 01",
    title: "Tailored Solutions",
    description: "Custom approaches designed around your brand’s unique needs.",
    icon: "🎯" // Replace with your actual icon
  },
  {
    id: 2,
    step: "Step 02",
    title: "Planning & Strategy",
    description: "Structured planning backed by insight and clear objectives.",
    icon: "🌐" // Replace with your actual icon
  },
  {
    id: 3,
    step: "Step 03",
    title: "Content Planing & Creation",
    description: "Strategically crafted content designed to inform, and inspire.",
    icon: "💡" // Replace with your actual icon
  },
  {
    id: 4,
    step: "Step 04",
    title: "Review & Delivery",
    description: "Refined and flawlessly delivered to ensure quality, consistency, and impact.",
    icon: "✨" // Replace with your actual icon
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__header">
          <h2 className="process__title">
            <span className="process__title-outline">OUR</span>
            <span className="process__title-solid"> PROCESS</span>
          </h2>
        </div>

        <div className="process__steps">
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`process__step ${activeStep === step.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="process__step-header">
                <span className="process__step-number">{step.step}</span>
                <div className={`process__step-indicator ${activeStep === step.id ? 'active' : ''}`}></div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="process__step-line"></div>
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