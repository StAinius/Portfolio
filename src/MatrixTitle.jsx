import React, { useState, useEffect, useRef } from 'react';

const MatrixTitle = ({ children, className = "", style = {} }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setIsAnimating(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  // Animation logic
  useEffect(() => {
    if (!isVisible) {
      setDisplayText(children.toString());
      return;
    }

    const text = children.toString();
    let currentIndex = 0;
    let scrambleCount = 0;
    
    const animateText = () => {
      if (currentIndex < text.length) {
        // Scramble phase - show random characters
        if (scrambleCount < 3) { // Reduced from 5 to 3 for speed
          const scrambled = text.slice(0, currentIndex) + 
            Array.from({ length: text.length - currentIndex }, () => 
              matrixChars[Math.floor(Math.random() * matrixChars.length)]
            ).join('');
          setDisplayText(scrambled);
          scrambleCount++;
        } else {
          // Reveal next character
          currentIndex++;
          scrambleCount = 0;
        }
      } else {
        // Animation finished
        setDisplayText(text);
        setIsAnimating(false);
        return;
      }
      
      setTimeout(animateText, 30); // Reduced from 50 to 30 for speed
    };
    
    // Start animation after a small delay
    const startDelay = setTimeout(() => {
      animateText();
    }, 100); // Reduced from 300 to 100
    
    return () => {
      clearTimeout(startDelay);
    };
  }, [children, isVisible]);
  
  return (
    <span 
      ref={elementRef}
      className={`matrix-title ${className}`} 
      style={{
        fontFamily: 'monospace',
        color: 'var(--color-darkest)',
        textShadow: isAnimating ? '0 0 5px var(--color-medium)' : 'none',
        transition: 'text-shadow 0.5s ease',
        ...style
      }}
    >
      {displayText}
      {isAnimating && displayText.length < children.toString().length && (
        <span style={{
          opacity: Math.sin(Date.now() / 200) > 0 ? 1 : 0,
          color: 'var(--color-darkest)',
          fontSize: '1.2em'
        }}>|</span>
      )}
    </span>
  );
};

export default MatrixTitle;