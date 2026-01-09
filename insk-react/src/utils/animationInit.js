// src/utils/animationInit.js
// Auto-initialize animations on page load
// Call this in your App.jsx useEffect

export const initScrollAnimations = () => {
  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // If triggerOnce, unobserve after animation
          if (entry.target.hasAttribute('data-trigger-once')) {
            observer.unobserve(entry.target);
          }
        } else {
          // Remove class if not trigger-once
          if (!entry.target.hasAttribute('data-trigger-once')) {
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

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => {
    observer.observe(el);
    
    // Add trigger-once by default
    if (!el.hasAttribute('data-trigger-repeat')) {
      el.setAttribute('data-trigger-once', 'true');
    }
  });

  return () => {
    observer.disconnect();
  };
};

// Parallax scroll effect
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-layer');
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement.getBoundingClientRect();
      
      // Only animate when in viewport
      if (parentRect.top < window.innerHeight && parentRect.bottom > 0) {
        const yPos = (scrolled - (parentRect.top + scrolled)) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial call

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Initialize section header animations
export const initSectionHeaders = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.section-header-animated').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
};

// Add scroll indicator bounce
export const addScrollIndicator = (selector = '.scroll-indicator') => {
  const indicators = document.querySelectorAll(selector);
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    indicators.forEach((indicator) => {
      if (scrolled > 100) {
        indicator.style.opacity = '0';
      } else {
        indicator.style.opacity = '1';
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// Initialize all animations
export const initAllAnimations = () => {
  const cleanup = [
    initScrollAnimations(),
    initParallax(),
    initSectionHeaders()
  ];

  // Return cleanup function
  return () => {
    cleanup.forEach(fn => fn && fn());
  };
};


