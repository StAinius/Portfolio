import React, { useState, useEffect, useRef } from 'react';

const AnimatedText = ({ children, style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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

  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      return;
    }

    const text = children.toString();
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 3); // Same speed as expand animations
      }
    };
    
    const startDelay = setTimeout(() => {
      typeText();
    }, 50);
    
    return () => {
      clearTimeout(startDelay);
    };
  }, [children, isVisible]);
  
  return (
    <p 
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease',
        minHeight: '1.2em',
        ...style
      }}
    >
      {displayText}
      {isVisible && displayText.length < children.toString().length && (
        <span style={{
          opacity: Math.sin(Date.now() / 300) > 0 ? 1 : 0,
          color: 'var(--color-medium)',
          fontWeight: 'normal'
        }}>|</span>
      )}
    </p>
  );
};

export default AnimatedText;