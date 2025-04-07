import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { language } = useAppContext();

  // Statistiques de l'entreprise
  const stats = [
    { value: '10+', label: language === 'fr' ? 'Années d\'expérience' : 'Years of experience' },
    { value: '5000+', label: language === 'fr' ? 'Projets réalisés' : 'Completed projects' },
    { value: '98%', label: language === 'fr' ? 'Clients satisfaits' : 'Satisfied clients' },
    { value: '24/7', label: language === 'fr' ? 'Support client' : 'Customer support' }
  ];

  return (
    <main>
      {/* Section Hero */}
      <Hero />

      {/* Section Services */}
      <Services />

      {/* Section Statistiques */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <Testimonials />

      {/* Section CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'fr' 
              ? 'Prêt à transformer votre espace?' 
              : 'Ready to transform your space?'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {language === 'fr'
              ? 'Contactez-nous dès aujourd\'hui pour discuter de votre projet et obtenir un devis gratuit.'
              : 'Contact us today to discuss your project and get a free quote.'}
          </p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link 
              to="/contact" 
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300 m-2"
            >
              {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition duration-300 m-2"
            >
              {language === 'fr' ? 'Nos services' : 'Our services'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;