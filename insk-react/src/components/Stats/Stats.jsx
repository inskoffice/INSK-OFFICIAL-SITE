import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const statsData = [
    {
      icon: "ri-briefcase-4-line",
      number: 100,
      suffix: "+",
      text: "Projects Completed"
    },
    {
      icon: "ri-line-chart-line",
      number: 95,
      suffix: "%",
      text: "Client Success Rate"
    },
    {
      icon: "ri-team-line",
      number: 65,
      suffix: "+",
      text: "Expert Members"
    },
    {
      icon: "ri-shield-check-line",
      number: 28,
      suffix: "K+",
      text: "Trusted Clients"
    }
  ];

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    statsData.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.number);
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, [isVisible]);

  // Random flip function
  useEffect(() => {
    if (!isVisible) return;

    function randomFlip() {
      const randomCard = cardsRef.current[Math.floor(Math.random() * cardsRef.current.length)];
      
      if (randomCard) {
        randomCard.classList.toggle('flipped');
        
        const nextFlipTime = Math.random() * 2000 + 1000;
        setTimeout(randomFlip, nextFlipTime);
      }
    }

    // Start multiple flip sequences
    const timeouts = [];
    for (let i = 0; i < 3; i++) {
      const timeout = setTimeout(() => {
        randomFlip();
      }, Math.random() * 2000);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isVisible]);

  return (
    <section className="stats-premium" ref={sectionRef}>
      <div className="container stats-wrapper">

        {/* LEFT CONTENT */}
        <div className="stats-left">
          <span className="stats-tag animate-on-scroll fade-up">
            <span className="gradient-text">★ INSK Success</span>
          </span>

          <h2 className="animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
            Expert-Led Strategies <br />
            Driving Online Success
          </h2>

          <div className="stats-years animate-on-scroll scale-up" style={{ transitionDelay: '200ms' }}>
            <span className="stats-years-num gradient-animated">3+</span>
            <span className="stats-years-text">
              Years of Experience <br />
              Delivering Quality Solutions
            </span>
          </div>

          <img
            src="/images/trophy.png"
            alt="INSK Awards"
            className="stats-trophy animate-on-scroll fade-up float"
            style={{ transitionDelay: '300ms' }}
          />
        </div>

        {/* RIGHT GRID */}
        <div className="stats-right">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`stats-card-wrapper animate-on-scroll fade-up stagger-${index + 1}`}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="stats-card-inner">
                {/* FRONT */}
                <div className="stats-card stats-card-front">
                  <div className="stats-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <h3 className="counter">
                    {counts[index]}{stat.suffix}
                  </h3>
                </div>

                {/* BACK */}
                <div className="stats-card stats-card-back">
                  <p className="stats-card-text">{stat.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}