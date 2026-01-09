import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLights = () => {
  // Generar posiciones aleatorias para las luces
  const lights = [
    { color: 'bg-neurops-green', size: 'w-3 h-3', top: '10%', left: '15%', delay: 0 },
    { color: 'bg-neurops-blue', size: 'w-2 h-2', top: '25%', left: '85%', delay: 0.5 },
    { color: 'bg-neurops-yellow', size: 'w-4 h-4', top: '40%', left: '5%', delay: 1 },
    { color: 'bg-neurops-royal', size: 'w-2 h-2', top: '60%', left: '90%', delay: 1.5 },
    { color: 'bg-neurops-orange', size: 'w-3 h-3', top: '75%', left: '20%', delay: 2 },
    { color: 'bg-neurops-red', size: 'w-2 h-2', top: '15%', left: '70%', delay: 2.5 },
    { color: 'bg-neurops-green', size: 'w-2 h-2', top: '85%', left: '80%', delay: 3 },
    { color: 'bg-neurops-blue', size: 'w-3 h-3', top: '30%', left: '30%', delay: 3.5 },
    { color: 'bg-neurops-yellow', size: 'w-2 h-2', top: '50%', left: '75%', delay: 4 },
    { color: 'bg-neurops-royal', size: 'w-4 h-4', top: '70%', left: '10%', delay: 4.5 },
    { color: 'bg-neurops-orange', size: 'w-2 h-2', top: '20%', left: '45%', delay: 5 },
    { color: 'bg-neurops-red', size: 'w-3 h-3', top: '90%', left: '60%', delay: 5.5 },
    { color: 'bg-neurops-green', size: 'w-2 h-2', top: '5%', left: '50%', delay: 6 },
    { color: 'bg-neurops-blue', size: 'w-3 h-3', top: '80%', left: '40%', delay: 6.5 },
    { color: 'bg-neurops-yellow', size: 'w-2 h-2', top: '35%', left: '95%', delay: 7 },
    { color: 'bg-neurops-royal', size: 'w-2 h-2', top: '65%', left: '25%', delay: 7.5 },
    { color: 'bg-neurops-orange', size: 'w-4 h-4', top: '45%', left: '85%', delay: 8 },
    { color: 'bg-neurops-red', size: 'w-2 h-2', top: '95%', left: '15%', delay: 8.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lights.map((light, index) => (
        <motion.div
          key={index}
          className={`absolute ${light.color} ${light.size} rounded-full opacity-20 blur-sm`}
          style={{ 
            top: light.top, 
            left: light.left,
          }}
          animate={{ 
            scale: [0.5, 1.2, 0.8, 1],
            opacity: [0.1, 0.3, 0.15, 0.25]
          }}
          transition={{ 
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: light.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Luces más grandes y sutiles */}
      <motion.div
        className="absolute w-32 h-32 bg-neurops-green rounded-full opacity-5 blur-3xl"
        style={{ top: '20%', left: '10%' }}
        animate={{ 
          scale: [0.8, 1.2, 0.9, 1.1],
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-40 h-40 bg-neurops-blue rounded-full opacity-5 blur-3xl"
        style={{ top: '60%', right: '15%' }}
        animate={{ 
          scale: [1, 0.8, 1.3, 1],
          x: [0, -25, 15, 0],
          y: [0, 20, -5, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute w-28 h-28 bg-neurops-royal rounded-full opacity-5 blur-3xl"
        style={{ bottom: '20%', left: '30%' }}
        animate={{ 
          scale: [0.9, 1.1, 0.7, 1],
          x: [0, 30, -20, 0],
          y: [0, -10, 25, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};

export default BackgroundLights;





