
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-gradient-to-r from-neon-purple to-neon-blue hover:brightness-110 shadow-lg transition-all animate-fade-in group"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
