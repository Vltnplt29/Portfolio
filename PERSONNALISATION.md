# 🎯 Guide de Personnalisation du Portfolio

## 🔧 Modifications Rapides

### 1. Changer le nom et le titre
**Fichiers à modifier :**
- `src/components/Hero.jsx` - Ligne du titre principal
- `src/components/Header.jsx` - Logo/nom du site
- `src/components/Footer.jsx` - Copyright

### 2. Modifier les informations de contact
**Fichiers à modifier :**
- `src/components/Contact.jsx` - Email, téléphone, adresse
- `src/components/Footer.jsx` - Mêmes informations dans le footer
- `src/utils/navigation.js` - URLs des réseaux sociaux

### 3. Personnaliser les compétences
**Fichier :** `src/components/About.jsx`
```javascript
const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'VotreSkill', level: 85, icon: '🔥' },
  // Ajouter vos compétences ici
]
```

### 4. Ajouter vos projets
**Fichier :** `src/components/Projects.jsx`
```javascript
{
  id: 1,
  title: "Nom du Projet",
  description: "Description courte",
  image: "🎯", // Emoji ou URL d'image
  category: "react", // pour le filtre
  technologies: ["React", "Tailwind", "Node.js"],
  demoUrl: "https://votre-demo.com",
  githubUrl: "https://github.com/votre-repo",
  featured: true // projet mis en avant
}
```

## 🎨 Personnalisation Visuelle

### Couleurs principales
Remplacer les classes Tailwind dans tous les fichiers :
- `cyan-500` et `blue-600` → vos couleurs préférées
- `from-cyan-500 to-blue-600` → votre dégradé

### Animations
Modifier `src/index.css` pour personnaliser les animations :
```css
@keyframes votreAnimation {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

## 📊 Données à Personnaliser

### Statistiques (About.jsx)
```javascript
<div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
<div className="text-gray-600">Projets réalisés</div>
```

### Expérience professionnelle (About.jsx)
```javascript
const experiences = [
  {
    period: "2023 - Présent",
    role: "Votre Poste",
    company: "Votre Entreprise",
    description: "Description de votre rôle"
  }
]
```

### Services proposés (Services.jsx)
```javascript
{
  title: "Votre Service",
  description: "Description du service",
  features: ["Caractéristique 1", "Caractéristique 2"],
  price: "Votre tarif"
}
```

## 🔗 Liens et Redirections

Toutes les actions sont gérées dans `src/utils/navigation.js` :

```javascript
export const handleSocialLink = (platform) => {
  const urls = {
    linkedin: 'https://linkedin.com/in/votre-profil',
    github: 'https://github.com/votre-username',
    twitter: 'https://twitter.com/votre-handle'
  }
  // Modifier les URLs selon vos profils
}
```

## 📱 Ajout de Nouvelles Sections

1. **Créer le composant**
```jsx
// src/components/NouvellSection.jsx
const NouvelleSection = () => {
  return (
    <section id="nouvelle-section" className="py-20">
      {/* Votre contenu */}
    </section>
  )
}
export default NouvelleSection
```

2. **L'ajouter à App.jsx**
```jsx
import NouvelleSection from './components/NouvelleSection'

// Dans le return
<NouvelleSection />
```

3. **Ajouter la navigation**
- Dans `Header.jsx` : ajouter le lien de navigation
- Dans `Footer.jsx` : ajouter dans la navigation secondaire

## 🖼️ Images et Médias

### Remplacer les placeholders
- Actuellement : emojis et formes CSS
- Remplacer par : vraies images de vos projets
- Format recommandé : `.webp` pour les performances

### Ajouter votre photo
Dans `About.jsx`, remplacer :
```jsx
<div className="text-8xl mb-4">👨‍💻</div>
```
Par :
```jsx
<img src="/votre-photo.jpg" alt="Votre nom" className="w-full h-full object-cover rounded-2xl" />
```

## 📝 Contenu Textuel

### Tons à personnaliser
- **Hero** : Accrocheur et professionnel
- **About** : Personnel mais reste professionnel
- **Services** : Orienté bénéfices client
- **Contact** : Invitation à l'action

### SEO (Optionnel)
Ajouter dans `index.html` :
```html
<title>Votre Nom - Développeur Front-End</title>
<meta name="description" content="Portfolio de développeur front-end spécialisé en React et technologies modernes">
```

## 🚀 Optimisations

### Performance
- Optimiser les images (format WebP)
- Lazy loading pour les composants
- Code splitting si nécessaire

### Accessibilité
- Vérifier les contrastes de couleurs
- Ajouter des alt texts appropriés
- Tester la navigation au clavier

---

**Conseil** : Commencez par les modifications rapides, puis personnalisez progressivement selon vos besoins !
