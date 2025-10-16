# 🚀 Portfolio Développeur Front-End

Un portfolio moderne et responsive créé avec React, Vite et Tailwind CSS, spécialement conçu pour les développeurs front-end.

## ✨ Fonctionnalités

- **Design moderne** : Interface élégante avec animations fluides
- **Responsive** : Adaptation parfaite sur tous les appareils
- **Sections complètes** :
  - Hero avec présentation personnalisée
  - À propos avec compétences et expérience
  - Portfolio de projets avec filtres
  - Services proposés avec tarification
  - Formulaire de contact fonctionnel
- **Navigation fluide** : Scroll automatique entre sections
- **Interactions** : Boutons, liens et formulaires entièrement fonctionnels

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS v4** - Framework CSS utility-first
- **JavaScript ES6+** - Fonctionnalités modernes

## 🚀 Installation et démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📝 Personnalisation

### 1. Informations personnelles

**Fichier** : `src/components/Hero.jsx`
- Modifier le titre principal et la description
- Changer les technologies affichées

**Fichier** : `src/components/About.jsx`
- Personnaliser la biographie
- Modifier les compétences et niveaux
- Mettre à jour l'expérience professionnelle

### 2. Projets

**Fichier** : `src/components/Projects.jsx`
- Ajouter/modifier les projets dans le tableau `projects`
- Personnaliser les catégories de filtres

### 3. Services et Contact

**Fichier** : `src/components/Services.jsx` et `src/components/Contact.jsx`
- Modifier les services proposés et tarifs
- Changer les informations de contact

## 🎨 Customisation

### Couleurs principales
- Dégradés : `cyan-500` vers `blue-600`
- Modifiables dans tous les composants via les classes Tailwind

### Navigation
- Toutes les redirections gérées dans `src/utils/navigation.js`
- Scroll fluide entre sections
- Menu responsive intégré

## 📱 Responsive Design

Entièrement responsive avec breakpoints Tailwind :
- Mobile first
- Tablettes et ordinateurs portables
- Grands écrans

## 🚢 Déploiement

```bash
npm run build
# Le dossier `dist` contient les fichiers prêts pour le déploiement
```

Compatible avec Netlify, Vercel, GitHub Pages, etc.

## 📂 Structure

```
src/
├── components/     # Composants React
├── utils/         # Fonctions utilitaires
├── App.jsx        # App principale
└── index.css      # Styles et animations
```

---

**Portfolio prêt à l'emploi pour développeurs front-end ! 🚀**
