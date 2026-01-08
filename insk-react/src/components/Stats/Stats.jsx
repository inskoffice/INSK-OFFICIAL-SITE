import React, { useEffect, useRef } from 'react';
import './Stats.css';

export default function Stats() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Random flip function
    function randomFlip() {
      const randomCard = cardsRef.current[Math.floor(Math.random() * cardsRef.current.length)];
      
      if (randomCard) {
        // Toggle flip
        randomCard.classList.toggle('flipped');
        
        // Schedule next random flip
        const nextFlipTime = Math.random() * 2000 + 1000; // Between 1-3 seconds
        setTimeout(randomFlip, nextFlipTime);
      }
    }

    // Start multiple flip sequences for more activity
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        randomFlip();
      }, Math.random() * 2000);
    }
  }, []);

  const statsData = [
    {
      icon: "ri-briefcase-4-line",
      number: "300+",
      text: "Projects Completed"
    },
    {
      icon: "ri-line-chart-line",
      number: "95%",
      text: "Client Success Rate"
    },
    {
      icon: "ri-team-line",
      number: "65+",
      text: "Expert Members"
    },
    {
      icon: "ri-shield-check-line",
      number: "28K+",
      text: "Trusted Clients"
    }
  ];

  return (
    <section className="stats-premium">
      <div className="container stats-wrapper">

        {/* LEFT CONTENT */}
        <div className="stats-left">
          <span className="stats-tag"><span className="gradient-text">★ INSK Success</span></span>

          <h2>
            Expert-Led Strategies <br />
            Driving Online Success
          </h2>

          <div className="stats-years">
            <span className="stats-years-num">10+</span>
            <span className="stats-years-text">
              Years of Experience <br />
              Delivering Quality Solutions
            </span>
          </div>

          <img
            src="/images/trophy.png"
            alt="INSK Awards"
            className="stats-trophy"
          />
        </div>

        {/* RIGHT GRID */}
        <div className="stats-right">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="stats-card-wrapper"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="stats-card-inner">
                {/* FRONT */}
                <div className="stats-card stats-card-front">
                  <div className="stats-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <h3>{stat.number}</h3>
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