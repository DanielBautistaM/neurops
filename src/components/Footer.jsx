import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Pacientes', href: '#pacientes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Evaluación Neuropsicológica',
    'Terapia Cognitiva',
    'Rehabilitación Neuronal',
    'Atención a Niños',
    'Atención a Adultos Mayores',
    'Asesoría Académica y Laboral'
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/neurops.co/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 2.01c3.3 0 3.69.013 4.99.072 1.203.055 1.858.249 2.292.415.576.224.986.492 1.417.923.431.431.699.841.923 1.417.166.434.36 1.089.415 2.292.059 1.3.072 1.69.072 4.99s-.013 3.69-.072 4.99c-.055 1.203-.249 1.858-.415 2.292-.224.576-.492.986-.923 1.417-.431.431-.841.699-1.417.923-.434.166-1.089.36-2.292.415-1.3.059-1.69.072-4.99.072s-3.69-.013-4.99-.072c-1.203-.055-1.858-.249-2.292-.415-.576-.224-.986-.492-1.417-.923-.431-.431-.699-.841-.923-1.417-.166-.434-.36-1.089-.415-2.292C2.023 15.707 2.01 15.317 2.01 12.017s.013-3.69.072-4.99c.055-1.203.249-1.858.415-2.292.224-.576.492-.986.923-1.417.431-.431.841-.699 1.417-.923.434-.166 1.089-.36 2.292-.415 1.3-.059 1.69-.072 4.99-.072zm0-2.01C8.684 0 8.258.014 6.934.072 5.614.13 4.731.333 3.987.63 3.217.936 2.564 1.347 1.91 2.001.347 3.564-.064 4.217.242 4.987c.297.744.5 1.627.558 2.947C.858 8.258.844 8.684.844 12.017s.014 3.759.072 5.083c.058 1.32.261 2.203.558 2.947.306.77.717 1.423 1.371 2.077.654.654 1.307 1.065 2.077 1.371.744.297 1.627.5 2.947.558C8.258 23.986 8.684 24 12.017 24s3.759-.014 5.083-.072c1.32-.058 2.203-.261 2.947-.558.77-.306 1.423-.717 2.077-1.371.654-.654 1.065-1.307 1.371-2.077.297-.744.5-1.627.558-2.947C23.986 15.776 24 15.35 24 12.017s-.014-3.759-.072-5.083c-.058-1.32-.261-2.203-.558-2.947-.306-.77-.717-1.423-1.371-2.077C21.345 1.256 20.692.845 19.922.539c-.744-.297-1.627-.5-2.947-.558C15.776.014 15.35 0 12.017 0z"/>
          <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zm0 10.188a4.009 4.009 0 1 1 0-8.018 4.009 4.009 0 0 1 0 8.018z"/>
          <circle cx="18.406" cy="5.594" r="1.444"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=573503060503&text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20neuropsicología%20de%20Neurops.%20¿Podrían%20ayudarme%20con%20información?',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
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
    <footer className="bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Neurops Logo" className="h-12 w-12 object-contain rounded-lg" />
                <h3 className="text-2xl font-bold text-black">
                  Neurops
                </h3>
              </div>
            </motion.div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Centro especializado en neuropsicología y terapia neuronal.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-neurops-green transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-black">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-neurops-blue">
              Servicios
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, index) => (
                <motion.li key={index}>
                  <motion.span
                    className="text-gray-700 text-sm"
                    whileHover={{ x: 5, color: '#000000' }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.span>
                </motion.li>
              ))}
              <motion.li>
                <motion.a
                  href="#servicios"
                  className="text-neurops-royal hover:text-black transition-colors duration-300 text-sm font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Ver todos los servicios →
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-neurops-royal">
              Contacto
            </h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-neurops-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 text-sm">
                  Cra 31 # 52b - 12, Bucaramanga, Santander
                </span>
              </motion.div>

              <motion.a
                href="tel:+525512345678"
                className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-neurops-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+57 350 3060503</span>
              </motion.a>

              <motion.a
                href="mailto:contacto@neurops.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-neurops-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">neurops.co@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-gray-400 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © {currentYear} Neurops. Todos los derechos reservados.
            </div>
            
            
          </div>

        </motion.div>
      </div>

      {/* Floating buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40">
        {/* WhatsApp button */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=573503060503&text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20neuropsicología%20de%20Neurops.%20¿Podrían%20ayudarme%20con%20información?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </motion.a>
        
        {/* Back to top button */}
        <motion.button
          className="bg-neurops-green text-white p-3 rounded-full shadow-lg hover:bg-neurops-green/90 transition-all duration-200"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
