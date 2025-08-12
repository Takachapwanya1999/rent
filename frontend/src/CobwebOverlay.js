import React from 'react';


function CobwebOverlay() {
  return (
    <svg style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none'}} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#bdbdbd" strokeWidth="1.5">
        {/* Top left cobweb */}
        <circle cx="120" cy="120" r="100" />
        <circle cx="120" cy="120" r="80" />
        <circle cx="120" cy="120" r="60" />
        <circle cx="120" cy="120" r="40" />
        <line x1="120" y1="20" x2="120" y2="220" />
        <line x1="20" y1="120" x2="220" y2="120" />
        <line x1="60" y1="60" x2="180" y2="180" />
        <line x1="60" y1="180" x2="180" y2="60" />

        {/* Top right cobweb */}
        <circle cx="1800" cy="120" r="100" />
        <circle cx="1800" cy="120" r="80" />
        <circle cx="1800" cy="120" r="60" />
        <circle cx="1800" cy="120" r="40" />
        <line x1="1800" y1="20" x2="1800" y2="220" />
        <line x1="1700" y1="120" x2="1900" y2="120" />
        <line x1="1740" y1="60" x2="1860" y2="180" />
        <line x1="1740" y1="180" x2="1860" y2="60" />

        {/* Bottom left cobweb */}
        <circle cx="120" cy="960" r="100" />
        <circle cx="120" cy="960" r="80" />
        <circle cx="120" cy="960" r="60" />
        <circle cx="120" cy="960" r="40" />
        <line x1="120" y1="860" x2="120" y2="1060" />
        <line x1="20" y1="960" x2="220" y2="960" />
        <line x1="60" y1="900" x2="180" y2="1020" />
        <line x1="60" y1="1020" x2="180" y2="900" />

        {/* Bottom right cobweb */}
        <circle cx="1800" cy="960" r="100" />
        <circle cx="1800" cy="960" r="80" />
        <circle cx="1800" cy="960" r="60" />
        <circle cx="1800" cy="960" r="40" />
        <line x1="1800" y1="860" x2="1800" y2="1060" />
        <line x1="1700" y1="960" x2="1900" y2="960" />
        <line x1="1740" y1="900" x2="1860" y2="1020" />
        <line x1="1740" y1="1020" x2="1860" y2="900" />
      </g>
    </svg>
  );
}

export default CobwebOverlay;
