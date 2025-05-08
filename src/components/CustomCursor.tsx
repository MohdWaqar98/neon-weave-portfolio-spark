
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const handleElementHover = (e: MouseEvent) => {
        const target = e.target as Element;
        const isHoverable = 
          target.closest('a') || 
          target.closest('button') || 
          target.closest('[role="button"]') ||
          target.closest('.hover-target') ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          window.getComputedStyle(target).cursor === 'pointer';
        
        setIsPointer(!!isHoverable);
      };

      document.addEventListener('mouseover', handleElementHover);
      
      return () => {
        document.removeEventListener('mouseover', handleElementHover);
      };
    };

    document.addEventListener('mousemove', updateCursorPosition);
    const cleanup = updateCursorType();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      cleanup();
    };
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isPointer ? 'cursor-dot-pointer' : ''}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 9999,
        }}
      />
      <div 
        className={`custom-cursor-outline ${isPointer ? 'cursor-outline-pointer' : ''}`}
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          opacity: isPointer ? 0.8 : 0.6,
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;
