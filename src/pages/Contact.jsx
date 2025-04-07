import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
  const { language, addQuoteRequest } = useAppContext();

  // Texte selon la langue
  const text = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour répondre à toutes vos questions",
      formTitle: "Envoyez-nous un message",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      service: "Service requis",
      serviceOptions: ["Plomberie", "Électricité", "Peinture", "Maçonnerie", "Carrelage", "Menuiserie", "Climatisation", "Rénovation complète", "Autre"],
      message: "Votre message",
      submit: "Envoyer le message",
      infoTitle: "Informations de contact",
      address: "Adresse",
      addressValue: "123 Boulevard Mohammed V, Casablanca, Maroc",
      phoneLabel: "Téléphone",
      phoneValue: "+212 522 123 456",
      emailLabel: "Email",
      emailValue: "contact@lmaalam-services.ma",
      hoursLabel: "Heures d'ouverture",
      hoursValue: "Lun - Sam: 08:00 - 18:00",
      success: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt!",
      error: "Une erreur s'est produite. Veuillez réessayer.",
      required: "Ce champ est requis"
    },
    en: {
      title: "Contact Us",
      subtitle: "We're here to answer all your questions",
      formTitle: "Send us a message",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      service: "Service Required",
      serviceOptions: ["Plumbing", "Electricity", "Painting", "Masonry", "Tiling", "Carpentry", "Air Conditioning", "Complete Renovation", "Other"],
      message: "Your Message",
      submit: "Send Message",
      infoTitle: "Contact Information",
      address: "Address",
      addressValue: "123 Mohammed V Boulevard, Casablanca, Morocco",
      phoneLabel: "Phone",
      phoneValue: "+212 522 123 456",
      emailLabel: "Email",
      emailValue: "contact@lmaalam-services.ma",
      hoursLabel: "Opening Hours",
      hoursValue: "Mon - Sat: 08:00 - 18:00",
      success: "Your message has been sent successfully. We will contact you soon!",
      error: "An error occurred. Please try again.",
      required: "This field is required"
    }
  };

  // État du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // État pour les validations et messages
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    const content = text[language] || text.fr;

    if (!formData.name.trim()) newErrors.name = content.required;
    if (!formData.email.trim()) {
      newErrors.email = content.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'fr' ? "Email invalide" : "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = content.required;
    if (!formData.service) newErrors.service = content.required;
    if (!formData.message.trim()) newErrors.message = content.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simuler un appel API
      setTimeout(() => {
        try {
          // Ajout de la demande au contexte
          addQuoteRequest(formData);
          setSubmitStatus('success');
          // Réinitialiser le formulaire après succès
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
        } catch (error) {
          setSubmitStatus('error');
        } finally {
          setIsSubmitting(false);
        }
      }, 1500);
    }
  };

  const content = text[language] || text.fr;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Bannière */}
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <img 
          src="/assets/images/contact-banner.jpg" 
          alt={content.title} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{content.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">{content.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Formulaire de contact */}
            <div className="md:w-2/3 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">{content.formTitle}</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  {content.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                  {content.error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">{content.name} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">{content.email} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">{content.phone} *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">{content.service} *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">{language === 'fr' ? '-- Sélectionner --' : '-- Select --'}</option>
                      {content.serviceOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">{content.message} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300 flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                    </>
                  ) : content.submit}
                </button>
              </form>
            </div>
            
            {/* Informations de contact */}
            <div className="md:w-1/3 bg-gray-900 text-white p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">{content.infoTitle}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary">{content.address}</h3>
                    <p className="text-gray-300 mt-1">{content.addressValue}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary">{content.phoneLabel}</h3>
                    <p className="text-gray-300 mt-1">{content.phoneValue}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary">{content.emailLabel}</h3>
                    <p className="text-gray-300 mt-1">{content.emailValue}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary">{content.hoursLabel}</h3>
                    <p className="text-gray-300 mt-1">{content.hoursValue}</p>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4">{language === 'fr' ? 'Suivez-nous' : 'Follow Us'}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-primary transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
<a href="#" className="text-white hover:text-primary transition duration-300">
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.001.974-3.127 1.195-.896-.954-2.173-1.55-3.591-1.55-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.729-.666 1.577-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.089.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.396 4.768 2.209 7.548 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
  </svg>
</a>
  <a href="#" className="text-white hover:text-primary transition duration-300">
<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.163c-5.488 0-9.937 4.448-9.937 9.937 0 4.389 3.584 8.065 8.205 8.065.64 0 1.28-.075 1.89-.216.548.1 1.11.15 1.68.15 5.488 0 9.937-4.448 9.937-9.937 0-5.488-4.448-9.937-9.937-9.937zm0 18.062c-4.465 0-8.065-3.6-8.065-8.065 0-4.465 3.6-8.065 8.065-8.065 4.465 0 8.065 3.6 8.065 8.065 0 4.465-3.6 8.065-8.065 8.065zm3.937-11.062h-1.875v-1.875h-2.124v1.875h-1.875v2.124h1.875v1.875h2.124v-1.875h1.875v-2.124z" />
</svg>
  </a>
</div>
  </div>
</div>
  </div>
</div>
  </div>
</div>
  );
};

export default Contact;
