// src/hooks/useScrollAnimation.js
// Custom hook for scroll-triggered animations

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px'
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isVisible];
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && 
          scrolled < elementTop + elementHeight) {
        const yPos = (scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return ref;
};

// Hook for counter animation
export const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(start + (end - start) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [ref, count];
};

// Hook for stagger animation
export const useStaggerAnimation = (itemCount, baseDelay = 100) => {
  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * baseDelay);
            observer.unobserve(ref);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs.current[index]) {
          observer.unobserve(refs.current[index]);
        }
      });
    };
  }, [itemCount, baseDelay]);

  const setRef = (index) => (element) => {
    refs.current[index] = element;
  };

  const isVisible = (index) => visibleItems.has(index);

  return { setRef, isVisible };
};

// Utility function to add animation classes
export const getAnimationClasses = (animation = 'fade-up', isVisible, extraClasses = '') => {
  return `animate-on-scroll ${animation} ${isVisible ? 'is-visible' : ''} ${extraClasses}`.trim();
};