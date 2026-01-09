import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      quote: "Gracias a Neurops mejoré mis habilidades cognitivas y volví a confiar en mí misma. El tratamiento personalizado fue exactamente lo que necesitaba.",
      name: "María González",
      role: "Paciente - Rehabilitación Cognitiva",
      avatar: "MG",
      color: "bg-neurops-green"
    },
    {
      quote: "El equipo de profesionales es excepcional. Mi hijo ha mostrado mejoras significativas en su atención y rendimiento académico.",
      name: "Carlos Rodríguez",
      role: "Padre de familia",
      avatar: "CR",
      color: "bg-neurops-blue"
    },
    {
      quote: "La evaluación neuropsicológica me ayudó a entender mejor mis fortalezas y áreas de mejora. Ahora tengo herramientas concretas para mi desarrollo profesional.",
      name: "Ana Martínez",
      role: "Profesional - Asesoría Laboral",
      avatar: "AM",
      color: "bg-neurops-royal"
    },
    {
      quote: "Después del accidente, pensé que no podría recuperar mis capacidades. Neurops me demostró que sí era posible. Eternamente agradecida.",
      name: "Luis Fernández",
      role: "Paciente - Rehabilitación Neuronal",
      avatar: "LF",
      color: "bg-neurops-orange"
    },
    {
      quote: "La atención en línea fue perfecta durante la pandemia. Nunca perdí continuidad en mi tratamiento y los resultados fueron excelentes.",
      name: "Patricia Silva",
      role: "Paciente - Terapia Cognitiva",
      avatar: "PS",
      color: "bg-neurops-yellow text-neurops-black"
    },
    {
      quote: "Como profesional de la salud, puedo confirmar que Neurops maneja los más altos estándares de calidad y evidencia científica.",
      name: "Dr. Roberto Díaz",
      role: "Médico Neurólogo",
      avatar: "RD",
      color: "bg-neurops-red"
    },
    {
      quote: "Neurops transformó mi vida profesional. Las herramientas que me dieron me ayudaron a superar mis limitaciones cognitivas.",
      name: "Andrea López",
      role: "Ejecutiva - Desarrollo Personal",
      avatar: "AL",
      color: "bg-neurops-blue"
    },
    {
      quote: "El seguimiento post-tratamiento es excepcional. Siempre están disponibles para resolver dudas y brindar apoyo continuo.",
      name: "Miguel Torres",
      role: "Paciente - Terapia Cognitiva",
      avatar: "MT",
      color: "bg-neurops-green"
    },
    {
      quote: "Mi experiencia con Neurops ha sido extraordinaria. El equipo es profesional, empático y altamente calificado.",
      name: "Carmen Ruiz",
      role: "Paciente - Evaluación Neuropsicológica",
      avatar: "CR",
      color: "bg-neurops-royal"
    }
  ];

  // Triplicamos los testimonios para scroll infinito sin saltos
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="pacientes" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-neurops-black sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros <span className="text-neurops-black">pacientes</span>
          </h2>
        </motion.div>

        {/* Scroll infinito horizontal sin saltos */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <div 
            className="flex space-x-6 animate-scroll-infinite"
            style={{
              width: `${duplicatedTestimonials.length * 320}px`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-gray-50 rounded-2xl p-6 h-full">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-neurops-black text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-neurops-yellow"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 leading-relaxed text-sm">
                    {testimonial.quote}
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
