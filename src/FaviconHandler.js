import React, { useEffect } from 'react';
import AnthonyHead from './Files/AnthonyHead.png';

function FaviconHandler() {
  useEffect(() => {
    // Create a link element for the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = AnthonyHead;
    link.type = 'image/png';
    
    // Remove any existing favicon
    const existingLink = document.querySelector('link[rel="icon"]');
    if (existingLink) {
      existingLink.remove();
    }
    
    // Add the new favicon
    document.head.appendChild(link);
    
    // Cleanup function
    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

export default FaviconHandler;
