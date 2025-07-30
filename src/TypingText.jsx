import React, { useState, useEffect } from 'react';

const TypingText = ({ children, isVisible, delay = 0, speed = 5, className = "", style = {} }) => {
  const [displayText, setDisplayText] = useState('');
  
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
        setTimeout(typeText, speed);
      }
    };
    
    const startDelay = setTimeout(() => {
      typeText();
    }, delay);
    
    return () => {
      clearTimeout(startDelay);
    };
  }, [children, isVisible, delay, speed]);
  
  return (
    <span className={className} style={{ ...style, minHeight: '1.2em', display: 'inline-block' }}>
      <span style={{
        visibility: 'hidden',
        position: 'absolute',
        pointerEvents: 'none'
      }}>
        {children.toString()}
      </span>
      {displayText}
    </span>
  );
};

export default TypingText;