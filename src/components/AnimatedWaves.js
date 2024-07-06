import React, { useEffect, useState } from 'react';

const AnimatedWaves = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    const getWaveTransform = (baseTransformX, baseTransformY) => {
        return `translate(${mouseX * baseTransformX}px, ${mouseY * baseTransformY}px)`;
      };
  
    return (
      <div className="wave-container">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: getWaveTransform(0.05, 0.02) }}
        >
          <path
            fill="#00cba9"
            fillOpacity="0.6"
            d="M0,128L48,154.7C96,181,192,235,288,256C384,277,480,267,576,224C672,181,768,107,864,101.3C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: getWaveTransform(0.1, 0.04) }}
        >
          <path
            fill="#00cba9"
            fillOpacity="0.4"
            d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,250.7C672,224,768,128,864,96C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: getWaveTransform(0.15, 0.06) }}
        >
          <path
            fill="#00cba9"
            fillOpacity="0.2"
            d="M0,224L48,224C96,224,192,224,288,234.7C384,245,480,267,576,256C672,245,768,203,864,192C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  };

export default AnimatedWaves;