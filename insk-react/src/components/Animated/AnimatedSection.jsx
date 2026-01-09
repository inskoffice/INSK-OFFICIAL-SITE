// src/components/Animated/AnimatedSection.jsx
// Reusable animated wrapper components

import React from 'react';
import { useScrollAnimation, useParallax, useCountUp } from '../../hooks/useScrollAnimation';

// Animated wrapper for any element
export const AnimatedElement = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold, triggerOnce });

  const animationClass = `animate-on-scroll ${animation} ${isVisible ? 'is-visible' : ''}`;
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`${animationClass} ${className}`} style={delayStyle}>
      {children}
    </div>
  );
};

// Animated section header
export const AnimatedHeader = ({ 
  children, 
  subtitle,
  centered = true,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div ref={ref} className={centered ? 'text-center' : ''}>
      <h2 
        className={`section-header section-header-animated ${isVisible ? 'is-visible' : ''} ${className}`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className={`section-sub animate-on-scroll fade-up ${isVisible ? 'is-visible' : ''}`} 
           style={{ transitionDelay: '100ms' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Parallax background section
export const ParallaxSection = ({ 
  children, 
  backgroundImage,
  backgroundColor,
  speed = 0.5,
  className = '',
  minHeight = '400px'
}) => {
  const parallaxRef = useParallax(speed);

  return (
    <div className={`parallax-container ${className}`} style={{ minHeight }}>
      <div 
        ref={parallaxRef}
        className="parallax-bg"
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: backgroundColor || 'transparent'
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

// Animated counter
export const AnimatedCounter = ({ 
  end, 
  duration = 2000,
  start = 0,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [ref, count] = useCountUp(end, duration, start);

  return (
    <span ref={ref} className={`counter ${className}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Staggered list items
export const StaggeredList = ({ 
  items, 
  renderItem,
  animation = 'fade-up',
  baseDelay = 100,
  className = ''
}) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <AnimatedElement 
          key={index}
          animation={animation}
          delay={index * baseDelay}
        >
          {renderItem(item, index)}
        </AnimatedElement>
      ))}
    </div>
  );
};

// Image reveal effect
export const AnimatedImage = ({ 
  src, 
  alt,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className={`img-reveal ${isVisible ? 'is-visible' : ''} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

// Card with hover animation
export const AnimatedCard = ({ 
  children,
  animation = 'fade-up',
  delay = 0,
  hoverEffect = true,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const classes = `
    animate-on-scroll 
    ${animation} 
    ${isVisible ? 'is-visible' : ''} 
    ${hoverEffect ? 'card-hover' : ''}
    ${className}
  `.trim();

  const style = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
};

// Gradient animated background
export const GradientBackground = ({ 
  children,
  gradient,
  className = ''
}) => {
  return (
    <div 
      className={`gradient-animated ${className}`}
      style={{ 
        background: gradient || 'linear-gradient(135deg, #f39806, #ff6a3d, #d44c0d)'
      }}
    >
      {children}
    </div>
  );
};

// Floating element
export const FloatingElement = ({ 
  children,
  delay = false,
  className = ''
}) => {
  return (
    <div className={`${delay ? 'float-delayed' : 'float'} ${className}`}>
      {children}
    </div>
  );
};