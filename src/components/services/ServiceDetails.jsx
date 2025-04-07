import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { slug } = useParams();
  
  // Base de données des services détaillés
  const servicesDetailsData = {
    plomberie: {
      title: "Services de Plomberie",
      banner: "/assets/images/plumbing-banner.jpg",
      description: "Nos services de plomberie professionnels répondent à tous vos besoins, des petites réparations aux installations complètes.",
      features: [
        "Installation de systèmes de plomberie complets",
        "Réparation de fuites et débouchage",
        "Installation de chauffe-eau et systèmes sanitaires",
        "Entretien préventif et inspection",
        "Rénovation de salles de bains et cuisines"
      ],
      process: [
        "Consultation et évaluation gratuite",
        "Devis détaillé et transparent",
        "Planification des travaux",
        "Exécution par des plombiers certifiés",
        "Inspection finale et garantie de satisfaction"
      ],
      priceRange: "À partir de 300 DH selon le service",
      contact: "Pour un devis gratuit, contactez-nous au 06 12 34 56 78"
    },
    electricite: {
      title: "Services d'Électricité",
      banner: "/assets/images/electrical-banner.jpg",
      description: "Notre équipe d'électriciens qualifiés offre des services fiables pour tous vos besoins en installation électrique et dépannage.",
      features: [
        "Installation électrique résidentielle et commerciale",
        "Mise aux normes et sécurisation",
        "Dépannage d'urgence 24/7",
        "Installation de systèmes d'éclairage",
        "Diagnostic et réparation de pannes"
      ],
      process: [
        "Évaluation technique gratuite",
        "Proposition de solutions adaptées",
        "Devis transparent",
        "Réalisation des travaux par des professionnels",
        "Contrôle qualité et garantie"
      ],
      priceRange: "À partir de 350 DH selon le service",
      contact: "Pour une intervention rapide, appelez-nous au 06 12 34 56 78"
    },
    peinture: {
      title: "Services de Peinture",
      banner: "/assets/images/painting-banner.jpg",
      description: "Transformez vos espaces avec nos services de peinture professionnels pour l'intérieur et l'extérieur de votre propriété.",
      features: [
        "Peinture intérieure et extérieure",
        "Traitement des surfaces et préparation",
        "Conseil en choix de couleurs et finitions",
        "Techniques décoratives spéciales",
        "Travaux en hauteur sécurisés"
      ],
      process: [
        "Consultation et échantillons",
        "Préparation des surfaces",
        "Application d'apprêts de qualité",
        "Application soignée de la peinture",
        "Finitions et nettoyage complet"
      ],
      priceRange: "À partir de 40 DH/m² selon la surface et la finition",
      contact: "Pour embellir vos espaces, contactez-nous au 06 12 34 56 78"
    },
    maconnerie: {
      title: "Services de Maçonnerie",
      banner: "/assets/images/masonry-banner.jpg",
      description: "Nos maçons expérimentés réalisent tous types de travaux de construction et rénovation avec précision et professionnalisme.",
      features: [
        "Construction de murs et structures",
        "Rénovation et restauration",
        "Travaux de fondation",
        "Création d'ouvertures et modifications",
        "Pose de briques, pierres et carrelage"
      ],
      process: [
        "Étude technique du projet",
        "Planification et devis détaillé",
        "Approvisionnement en matériaux de qualité",
        "Réalisation par des artisans qualifiés",
        "Suivi et contrôle qualité"
      ],
      priceRange: "Devis personnalisé selon l'ampleur du projet",
      contact: "Pour discuter de votre projet, appelez-nous au 06 12 34 56 78"
    }
  };

  // Récupérer les détails du service en fonction du slug
  const serviceDetails = servicesDetailsData[slug];

  // Si le service n'existe pas
  if (!serviceDetails) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Service non trouvé</h2>
        <p className="mb-6">Le service que vous recherchez n'est pas disponible.</p>
        <Link to="/services" className="bg-primary text-white px-6 py-3 rounded-md">
          Voir tous nos services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Bannière du service */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img 
          src={serviceDetails.banner} 
          alt={serviceDetails.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold px-4 text-center">
            {serviceDetails.title}
          </h1>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">À propos de ce service</h2>
            <p className="text-gray-700">{serviceDetails.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ce que nous offrons</h3>
              <ul className="space-y-2">
                {serviceDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Notre processus</h3>
              <ol className="space-y-2">
                {serviceDetails.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-2">Tarification</h3>
            <p className="text-gray-700 mb-1">{serviceDetails.priceRange}</p>
            <p className="text-sm text-gray-500">* Les prix peuvent varier en fonction des spécificités de chaque projet</p>
          </div>

          <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-primary">Contactez-nous</h3>
            <p className="mb-4">{serviceDetails.contact}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-primary text-white px-6 py-3 rounded-md text-center hover:bg-primary-dark transition duration-300"
              >
                Demander un devis
              </Link>
              <a 
                href="tel:0612345678" 
                className="border border-primary text-primary px-6 py-3 rounded-md text-center hover:bg-primary hover:text-white transition duration-300"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;