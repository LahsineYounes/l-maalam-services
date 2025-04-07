import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import { useAppContext } from '../context/AppContext';

const Services = () => {
  const { language } = useAppContext();

  // Données complètes des services
  const allServicesData = [
    {
      id: 1,
      title: language === 'fr' ? "Plomberie" : "Plumbing",
      description: language === 'fr' 
        ? "Installation, réparation et entretien de tous systèmes de plomberie pour votre maison ou entreprise."
        : "Installation, repair and maintenance of all plumbing systems for your home or business.",
      icon: "/assets/icons/plumbing.svg",
      image: "/assets/images/plumbing-service.jpg",
      slug: "plomberie",
      category: ["interior", "installation", "repair"]
    },
    {
      id: 2,
      title: language === 'fr' ? "Électricité" : "Electricity",
      description: language === 'fr'
        ? "Services d'installation électrique, dépannage et mise aux normes par des électriciens qualifiés."
        : "Electrical installation services, troubleshooting and standards compliance by qualified electricians.",
      icon: "/assets/icons/electricity.svg",
      image: "/assets/images/electrical-service.jpg",
      slug: "electricite",
      category: ["interior", "exterior", "installation", "repair"]
    },
    {
      id: 3,
      title: language === 'fr' ? "Peinture" : "Painting",
      description: language === 'fr'
        ? "Travaux de peinture intérieure et extérieure réalisés avec soin pour transformer vos espaces."
        : "Interior and exterior painting work carried out with care to transform your spaces.",
      icon: "/assets/icons/painting.svg",
      image: "/assets/images/painting-service.jpg",
      slug: "peinture",
      category: ["interior", "exterior"]
    },
    {
      id: 4,
      title: language === 'fr' ? "Maçonnerie" : "Masonry",
      description: language === 'fr'
        ? "Construction et rénovation de structures en maçonnerie par des artisans expérimentés."
        : "Construction and renovation of masonry structures by experienced craftsmen.",
      icon: "/assets/icons/masonry.svg",
      image: "/assets/images/masonry-service.jpg",
      slug: "maconnerie",
      category: ["exterior", "installation"]
    },
    {
      id: 5,
      title: language === 'fr' ? "Carrelage" : "Tiling",
      description: language === 'fr'
        ? "Pose de carrelage au sol et mural pour salles de bain, cuisines et espaces commerciaux."
        : "Floor and wall tiling for bathrooms, kitchens and commercial spaces.",
      icon: "/assets/icons/tiling.svg",
      image: "/assets/images/tiling-service.jpg",
      slug: "carrelage",
      category: ["interior", "installation"]
    },
    {
      id: 6,
      title: language === 'fr' ? "Menuiserie" : "Carpentry",
      description: language === 'fr'
        ? "Travaux de menuiserie personnalisés pour portes, fenêtres, armoires et meubles sur mesure."
        : "Custom carpentry work for doors, windows, cabinets and custom furniture.",
      icon: "/assets/icons/carpentry.svg",
      image: "/assets/images/carpentry-service.jpg",
      slug: "menuiserie",
      category: ["interior", "installation", "repair"]
    },
    {
      id: 7,
      title: language === 'fr' ? "Climatisation" : "Air Conditioning",
      description: language === 'fr'
        ? "Installation et entretien de systèmes de climatisation et chauffage pour un confort optimal."
        : "Installation and maintenance of air conditioning and heating systems for optimal comfort.",
      icon: "/assets/icons/ac.svg",
      image: "/assets/images/ac-service.jpg",
      slug: "climatisation",
      category: ["interior", "installation", "repair"]
    },
    {
      id: 8,
      title: language === 'fr' ? "Rénovation complète" : "Complete Renovation",
      description: language === 'fr'
        ? "Services de rénovation complète pour transformer entièrement votre espace selon vos besoins."
        : "Complete renovation services to fully transform your space according to your needs.",
      icon: "/assets/icons/renovation.svg",
      image: "/assets/images/renovation-service.jpg",
      slug: "renovation",
      category: ["interior", "exterior", "installation"]
    }
  ];

  // Catégories de services
  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous' : 'All' },
    { id: 'interior', name: language === 'fr' ? 'Intérieur' : 'Interior' },
    { id: 'exterior', name: language === 'fr' ? 'Extérieur' : 'Exterior' },
    { id: 'installation', name: language === 'fr' ? 'Installation' : 'Installation' },
    { id: 'repair', name: language === 'fr' ? 'Réparation' : 'Repair' }
  ];

  // État pour filtrer les services
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filtrer les services selon la catégorie active et la recherche
  const filteredServices = allServicesData.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category.includes(activeCategory);
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Bannière */}
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <img 
          src="/assets/images/services-banner.jpg" 
          alt="Nos Services" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {language === 'fr' ? 'Nos Services' : 'Our Services'}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              {language === 'fr' 
                ? 'Des solutions professionnelles pour tous vos projets de construction et rénovation' 
                : 'Professional solutions for all your construction and renovation projects'}
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Recherche et filtres */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder={language === 'fr' ? "Rechercher un service..." : "Search for a service..."}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg 
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Liste des services */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {language === 'fr' ? 'Aucun service trouvé' : 'No services found'}
            </h3>
            <p className="mt-1 text-gray-500">
              {language === 'fr' 
                ? 'Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.' 
                : 'Try changing your search criteria or selecting another category.'}
            </p>
          </div>
        )}

        {/* Section CTA */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'fr' 
              ? 'Vous ne trouvez pas ce que vous cherchez ?' 
              : 'Can\'t find what you\'re looking for?'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Nous proposons également des solutions personnalisées adaptées à vos besoins spécifiques.'
              : 'We also offer customized solutions tailored to your specific needs.'}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300"
          >
            {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;