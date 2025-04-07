import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const AppContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useAppContext = () => useContext(AppContext);

// Provider du contexte
export const AppProvider = ({ children }) => {
  // État pour le mode mobile du menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // État pour le thème (clair/sombre)
  const [darkMode, setDarkMode] = useState(false);
  
  // État pour la langue
  const [language, setLanguage] = useState('fr');

  // État pour stocker les demandes de devis
  const [quoteRequests, setQuoteRequests] = useState([]);

  // Fonction pour ajouter une demande de devis
  const addQuoteRequest = (request) => {
    setQuoteRequests([...quoteRequests, { ...request, id: Date.now(), date: new Date() }]);
  };

  // Fonction pour basculer le menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Fonction pour basculer le mode sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Appliquer le mode sombre au document HTML
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Fonction pour changer la langue
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Valeurs à fournir au contexte
  const value = {
    mobileMenuOpen,
    toggleMobileMenu,
    darkMode,
    toggleDarkMode,
    language,
    changeLanguage,
    quoteRequests,
    addQuoteRequest
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;