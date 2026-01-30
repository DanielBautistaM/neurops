import React from 'react';
import { motion } from 'framer-motion';

const YouTubeSection = () => {
  // ID del video extraído del URL proporcionado: https://www.youtube.com/shorts/mu7CYxo4jC4
  const videoId = 'mu7CYxo4jC4';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section id="youtube" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-neurops-black sm:text-4xl lg:text-5xl">
            Mira nuestro contenido
          </h2>
          <p className="mt-4 text-gray-600">
            Conoce más sobre nuestros métodos y resultados en YouTube.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto rounded-2xl overflow-hidden shadow-xl"
          style={{ maxWidth: 420 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contenedor responsivo 9:16 para Shorts */}
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
            <iframe
              title="Neurops - Contenido de YouTube"
              src={`${embedUrl}?rel=0&modestbranding=1`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

        <div className="text-center mt-6">
          <a
            href={`https://www.youtube.com/shorts/${videoId}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-neurops-black hover:underline"
          >
            Ver en YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;

