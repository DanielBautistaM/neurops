import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Componente simple de carrusel de imágenes
const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const carouselImages = [
    {
      src: '/1.jpg',
      title: 'Evaluación Neuropsicológica',
      subtitle: 'Diagnóstico especializado'
    },
    {
      src: '/2.jpg',
      title: 'Terapia Grupal',
      subtitle: 'Sesiones colaborativas'
    },
    {
      src: '/3.jpg',
      title: 'Atención Personalizada',
      subtitle: 'Cuidado individual'
    },
    {
      src: '/4.jpg',
      title: 'Profesionales Certificados',
      subtitle: 'Experiencia garantizada'
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const nextIndex = prev + 1;
        // Si llegamos al final, volvemos al inicio (infinito)
        return nextIndex >= carouselImages.length ? 0 : nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const indicatorColors = [
    'bg-neurops-blue',   // Azul para la primera imagen
    'bg-neurops-green',  // Verde para la segunda imagen
    'bg-neurops-royal',  // Azul rey para la tercera imagen
    'bg-neurops-red'     // Rojo para la cuarta imagen
  ];

  return (
    <div 
      className="w-80 h-[500px] mx-auto rounded-3xl overflow-hidden relative shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay con gradiente para mejor legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Contenido del texto sobre la imagen */}
          <div className="absolute bottom-8 left-0 right-0 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2 font-serif">
              {image.title}
            </h3>
            <p className="text-white/90 font-serif text-lg">
              {image.subtitle}
            </p>
          </div>
        </div>
      ))}
      
      {/* Indicadores con colores de marca - clickeables */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentImage 
                ? `${indicatorColors[index]} scale-110` 
                : 'bg-white/50 border border-white/30 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const About = () => {
  const features = [
    {
      title: "Profesionales Certificados",
      description: "Nuestro equipo cuenta con especialistas certificados en neuropsicología con amplia experiencia clínica."
    },
    {
      title: "Métodos Basados en Evidencia Científica", 
      description: "Utilizamos técnicas y protocolos respaldados por la investigación científica más actualizada."
    },
    {
      title: "Atención Personalizada",
      description: "Cada tratamiento es diseñado específicamente para las necesidades individuales de cada paciente."
    },
    {
      title: "Seguimiento Presencial y En Línea",
      description: "Ofrecemos flexibilidad en el seguimiento con opciones presenciales y telemedicina."
    }
  ];

  const images = [
    {
      src: "/1.jpg",
      alt: "Consulta profesional",
      className: "rounded-3xl shadow-xl",
      size: "large",
      position: "top-left"
    },
    {
      src: "/2.jpg", 
      alt: "Terapia grupal",
      className: "rounded-2xl shadow-lg",
      size: "small",
      position: "top-right"
    },
    {
      src: "/3.jpg",
      alt: "Evaluación neuropsicológica",
      className: "rounded-2xl shadow-lg",
      size: "medium",
      position: "bottom-left"
    },
    {
      src: "/4.jpg",
      alt: "Sesión de rehabilitación",
      className: "rounded-3xl shadow-xl",
      size: "large",
      position: "bottom-right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-neurops-black sm:text-4xl lg:text-5xl">
            ¿Por qué elegir <span className="text-neurops-black">Neurops</span>?
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen vertical simple */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageCarousel />
          </motion.div>

          {/* Lista de características sin iconos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="border-l-2 border-gray-200 pl-6 py-2 hover:border-neurops-black transition-colors duration-300">
                  <h3 className="text-xl font-bold text-neurops-black mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
