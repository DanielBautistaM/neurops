import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden pt-16 bg-white">

      {/* Imagen de fondo centrada con bordes redondeados */}
      <motion.div
        className="absolute top-20 left-16 right-16 bottom-20 rounded-3xl overflow-hidden z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/firstsection.jpg)' }}
        />
        
        {/* Overlay sutil para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

        {/* Cuadro de bienvenida integrado como cuadrado grande en esquina inferior izquierda */}
        <motion.div
          className="absolute bottom-20 left-16 w-400 h-80 bg-white rounded-tr-3xl p-16 flex flex-col justify-center z-20"
        initial={{ opacity: 0, y: 50, x: -50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        {/* Mensaje de bienvenida corto */}
        <motion.h1
          className="font-serif text-5xl font-bold text-neurops-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Bienvenido a{' '}
          <div className="flex items-center space-x-4 text-neurops-black block font-black text-6xl">
            <img src="/logo.png" alt="Neurops Logo" className="h-16 w-16 object-contain rounded-xl" />
            <span>Neurops</span>
          </div>
        </motion.h1>


      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-32 right-24 flex flex-col items-center text-gray-400 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-xs font-serif mb-2 rotate-90 origin-center">Scroll</span>
        <motion.div
          className="w-px h-16 bg-gray-400/50"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
