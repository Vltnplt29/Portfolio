import React, { useState } from 'react'
import { handleProjectAction } from '../utils/navigation'

// Composant Projects avec logos SVG
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "MVP Nuxt & Laravel (12 jours)",
      description: "Développé en 12 jours avec Nuxt et Laravel, déployé sur Netlify. MVP réalisé après des soucis avec Strapi. Ce projet n'évoluera plus.",
      image: (
        <img
          src="public/imgaes/urbex-chronicles.png"
          alt="Urbex Chronicles"
          className="w-32 h-12 object-contain rounded shadow-lg"
        />
      ),
      category: "web",
      technologies: ["Nuxt", "Laravel"],
      demoUrl: "https://tubular-stroopwafel-1c150b.netlify.app/",
      githubUrl: "#",
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous les projets', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'landing', name: 'Landing Pages', count: projects.filter(p => p.category === 'landing').length },
    { id: 'portfolio', name: 'Portfolio', count: projects.filter(p => p.category === 'portfolio').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)
  
  return (
    <section id="projects" className="py-20 bg-white w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations, des applications web modernes aux solutions mobiles innovantes.
          </p>
        </div>

        {/* Projets en vedette */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Projets en vedette</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={`featured-${project.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                  <div className="text-gray-600 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      ⭐ Vedette
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleProjectAction(project.demoUrl)}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Voir Demo
                    </button>
                    <button 
                      onClick={() => handleProjectAction(project.githubUrl)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:border-gray-400 transition-all duration-300"
                    >
                      Code Source
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Tous les projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                <div className="text-gray-600 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      ⭐ Vedette
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleProjectAction(project.demoUrl)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Voir Demo
                  </button>
                  <button 
                    onClick={() => handleProjectAction(project.githubUrl)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:border-gray-400 transition-all duration-300"
                  >
                    Code Source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Intéressé par un projet similaire ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre projet et voir comment nous pouvons le concrétiser ensemble.
          </p>
          <button 
            onClick={() => handleProjectAction('#contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-lg transition-all duration-300"
          >
            Commencer un projet
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
