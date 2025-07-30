import React, { useState, useEffect, useRef } from 'react';

const FastMatrixText = ({ children, style = {} }) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  // Fast matrix animation
  useEffect(() => {
    if (!isVisible) {
      setDisplayText(children.toString());
      return;
    }

    const text = children.toString();
    const totalDuration = 1000; // 1 second total
    const scramblePhase = 300; // 300ms for scrambling
    const revealPhase = totalDuration - scramblePhase; // 700ms for revealing
    
    let scrambleInterval;
    let revealTimeout;
    
    // Phase 1: Scramble entire text
    scrambleInterval = setInterval(() => {
      const scrambled = Array.from(text, () => 
        matrixChars[Math.floor(Math.random() * matrixChars.length)]
      ).join('');
      setDisplayText(scrambled);
    }, 50);
    
    // Phase 2: Reveal text character by character
    revealTimeout = setTimeout(() => {
      clearInterval(scrambleInterval);
      
      let currentIndex = 0;
      const charactersPerMs = text.length / revealPhase;
      
      const revealInterval = setInterval(() => {
        if (currentIndex >= text.length) {
          setDisplayText(text);
          setIsAnimating(false);
          clearInterval(revealInterval);
          return;
        }
        
        const revealed = text.slice(0, currentIndex + 1);
        const remaining = text.slice(currentIndex + 1);
        const scrambled = Array.from(remaining, () => 
          matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ).join('');
        
        setDisplayText(revealed + scrambled);
        currentIndex += Math.max(1, Math.floor(charactersPerMs * 20)); // Reveal multiple chars per update
      }, 20);
    }, scramblePhase);
    
    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(revealTimeout);
    };
  }, [children, isVisible]);
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Hidden text for consistent layout */}
      <p 
        style={{
          fontFamily: 'monospace',
          color: 'transparent',
          margin: 0,
          padding: 0,
          visibility: 'hidden',
          width: '100%',
          wordWrap: 'break-word',
          ...style
        }}
      >
        {children.toString()}
      </p>
      
      {/* Visible text */}
      <p 
        ref={elementRef}
        style={{
          fontFamily: 'monospace',
          color: 'var(--color-darkest)',
          textShadow: '0 0 3px var(--color-medium)',
          transition: 'opacity 0.3s ease',
          opacity: isVisible ? 1 : 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          margin: 0,
          padding: 0,
          width: '100%',
          wordWrap: 'break-word',
          ...style
        }}
      >
        {isAnimating ? displayText : children.toString()}
      </p>
    </div>
  );
};

export default FastMatrixText;