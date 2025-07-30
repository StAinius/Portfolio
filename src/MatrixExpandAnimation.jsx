import React, { useState, useEffect } from 'react';

const MatrixExpandAnimation = ({ children, isExpanded, onAnimationComplete }) => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrixLines, setMatrixLines] = useState([]);
  
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  useEffect(() => {
    if (isExpanded && !showMatrix) {
      // Pradėti matricos efektą
      setShowMatrix(true);
      
      // Sukurti atsitiktinius matricos simbolius
      const lines = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        chars: Array.from({ length: 20 + Math.random() * 30 }, () => 
          matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ),
        delay: Math.random() * 500,
        speed: 50 + Math.random() * 100
      }));
      
      setMatrixLines(lines);
      
      // Sustabdyti matricos efektą po 0.5 sekundės
      setTimeout(() => {
        setShowMatrix(false);
        if (onAnimationComplete) onAnimationComplete();
      }, 500);
    }
  }, [isExpanded, showMatrix, onAnimationComplete]);
  
  return (
    <>
      {showMatrix && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 10,
          background: 'transparent'
        }}>
          {matrixLines.map((line) => (
            <div
              key={line.id}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: '-50px',
                color: 'var(--color-medium)',
                fontFamily: 'monospace',
                fontSize: '14px',
                textShadow: '0 0 10px var(--color-medium)',
                animation: `matrixFall ${line.speed}ms linear 1`,
                animationDelay: `${line.delay}ms`,
                whiteSpace: 'nowrap',
                opacity: 0.7
              }}
            >
              {line.chars.join('')}
            </div>
          ))}
        </div>
      )}
      
      <div style={{ 
        position: 'relative',
        zIndex: showMatrix ? 5 : 1,
        transition: 'all 0.3s ease'
      }}>
        {children}
      </div>
      
      <style jsx>{`
        @keyframes matrixFall {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(250px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default MatrixExpandAnimation;