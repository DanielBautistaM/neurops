import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Evaluación Neuropsicológica",
      description: "Evaluación completa de funciones cognitivas para diagnóstico preciso y personalizado.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      bgColor: "bg-neurops-blue",
      textColor: "text-black",
      size: "large"
    },
    {
      title: "Terapia Cognitiva",
      description: "Rehabilitación de funciones ejecutivas, memoria, atención y otras habilidades cognitivas.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      bgColor: "bg-neurops-green",
      textColor: "text-black",
      size: "small"
    },
    {
      title: "Rehabilitación Neuronal",
      description: "Programas especializados para recuperación después de lesiones cerebrales o trastornos neurológicos.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      bgColor: "bg-neurops-red",
      textColor: "text-black",
      size: "medium"
    },
    {
      title: "Atención a Niños",
      description: "Evaluación y tratamiento especializado para trastornos del neurodesarrollo en la infancia.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M21 15V17L15 16.5V15M9 12C9 13.1 9.9 14 11 14H13C14.1 14 15 13.1 15 12V8H9V12ZM4 7V9C5.1 9 6 9.9 6 11C6 12.1 5.1 13 4 13V15C6.21 15 8 13.21 8 11C8 8.79 6.21 7 4 7ZM20 7C17.79 7 16 8.79 16 11C16 13.21 17.79 15 20 15V13C18.9 13 18 12.1 18 11C18 9.9 18.9 9 20 9V7ZM12 16C10.9 16 10 16.9 10 18V22H14V18C14 16.9 13.1 16 12 16Z"/>
        </svg>
      ),
      bgColor: "bg-neurops-yellow",
      textColor: "text-neurops-black",
      size: "medium"
    },
    {
      title: "Atención a Adultos Mayores",
      description: "Programas de estimulación cognitiva y prevención del deterioro en la tercera edad.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <circle cx="18" cy="8" r="2"/>
          <path d="M18 10c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      bgColor: "bg-neurops-orange",
      textColor: "text-black",
      size: "medium"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-neurops-black sm:text-4xl lg:text-5xl">
            Nuestros Servicios
          </h2>

        </motion.div>

        <div className="mt-16 space-y-8">
          {/* Primera fila: 2 cajas (2/3 + 1/3) */}
          <motion.div
            className="grid grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Caja grande (2/3) */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 group"
            >
              <motion.div
                className={`relative ${services[0].bgColor} rounded-2xl transition-all duration-300 p-8 h-full`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icono */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-6 ${services[0].textColor}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {services[0].icon}
                </motion.div>

                {/* Contenido */}
                <h3 className={`text-xl font-bold ${services[0].textColor} mb-4 transition-colors duration-300`}>
                  {services[0].title}
                </h3>
                <p className={`${services[0].textColor} opacity-90 leading-relaxed`}>
                  {services[0].description}
                </p>

                {/* Elemento decorativo */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/30 opacity-70"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Caja pequeña (1/3) */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 group"
            >
              <motion.div
                className={`relative ${services[1].bgColor} rounded-2xl transition-all duration-300 p-8 h-full`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icono */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-6 ${services[1].textColor}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {services[1].icon}
                </motion.div>

                {/* Contenido */}
                <h3 className={`text-xl font-bold ${services[1].textColor} mb-4 transition-colors duration-300`}>
                  {services[1].title}
                </h3>
                <p className={`${services[1].textColor} opacity-90 leading-relaxed`}>
                  {services[1].description}
                </p>

                {/* Elemento decorativo */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/30 opacity-70"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Segunda fila: 3 cajas iguales (1/3 cada una) */}
          <motion.div
            className="grid grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={index + 2}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`relative ${service.bgColor} rounded-2xl transition-all duration-300 p-8 h-full`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icono */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-6 ${service.textColor}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Contenido */}
                  <h3 className={`text-xl font-bold ${service.textColor} mb-4 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`${service.textColor} opacity-90 leading-relaxed`}>
                    {service.description}
                  </p>

                  {/* Elemento decorativo */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/30 opacity-70"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;
