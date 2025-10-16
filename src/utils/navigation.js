// Utilitaires pour gérer les redirections et actions du site

// Fonction pour le scroll fluide vers une section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId.replace('#', ''));
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
};

// Fonction pour rediriger vers une page externe
export const redirectToExternal = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Fonction pour gérer les actions de contact
export const handleContactAction = () => {
  scrollToSection('#contact');
};

// Fonction pour gérer les actions "En savoir plus"
export const handleLearnMore = (section = '#a-propos') => {
  scrollToSection(section);
};

// Fonction pour gérer l'inscription newsletter
export const handleNewsletterSubscribe = (email) => {
  if (!email || !email.includes('@')) {
    alert('Veuillez entrer une adresse email valide');
    return;
  }
  
  // Simulation d'inscription
  console.log('Inscription newsletter:', email);
  alert('Merci pour votre inscription à notre newsletter !');
  return email;
};

// Fonction pour gérer les liens de services
export const handleServiceAction = (serviceType) => {
  console.log(`Action pour le service: ${serviceType}`);
  // Ici vous pourriez rediriger vers une page spécifique du service
  alert(`Plus d'informations sur ${serviceType} bientôt disponibles !`);
};

// Fonction pour gérer les réseaux sociaux
export const handleSocialLink = (platform) => {
  const socialUrls = {
    facebook: 'https://facebook.com/vltnplt',
    linkedin: 'https://www.linkedin.com/in/valentin-philippart/',
    instagram: 'https://instagram.com/vltnplt'
  };
  
  const url = socialUrls[platform];
  if (url) {
    redirectToExternal(url);
  }
};

// Fonction pour gérer les liens légaux
export const handleLegalLink = (type) => {
  console.log(`Lien légal: ${type}`);
  // Ici vous pourriez rediriger vers les pages légales appropriées
  alert(`Page ${type} en cours de création`);
};

// Fonction pour gérer les actions de projets
export const handleProjectAction = (url) => {
  if (!url || url === '#') {
    // Si pas d'URL spécifiée, afficher un message
    alert('Ce projet sera bientôt disponible en ligne !');
    return;
  }
  
  if (url.startsWith('#')) {
    // Si c'est une ancre interne (comme #contact)
    scrollToSection(url);
  } else {
    // Si c'est une URL externe
    redirectToExternal(url);
  }
};
