import { useState } from 'react'
import { scrollToSection } from '../utils/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Ferme le menu mobile après clic
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('#accueil')}
              className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              {/* Logo SVG personnalisé */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M8 12L9 15L12 14L15 15L16 12L15 9L12 10L9 9L8 12Z"/>
                </svg>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </button>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              <li>
                <button 
                  onClick={() => handleNavClick('#accueil')}
                  className="text-gray-700 hover:text-blue-600 px-4 py-3 text-lg font-medium transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#a-propos')}
                  className="text-gray-700 hover:text-blue-600 px-4 py-3 text-lg font-medium transition-colors duration-300"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#projects')}
                  className="text-gray-700 hover:text-blue-600 px-4 py-3 text-lg font-medium transition-colors duration-300"
                >
                  Projets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="text-gray-700 hover:text-blue-600 px-4 py-3 text-lg font-medium transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-8 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200">
            <button 
              onClick={() => handleNavClick('#accueil')}
              className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavClick('#a-propos')}
              className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
            >
              À propos
            </button>
            <button 
              onClick={() => handleNavClick('#projects')}
              className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
            >
              Projets
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
