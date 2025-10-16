import { handleServiceAction, handleContactAction } from '../utils/navigation'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" fill="#9C27B0"/>
        </svg>
      ),
      title: "Intégration UI/UX",
      description: "Intégration de maquettes design en sites web responsives et animés.",
      features: ["Figma to Code", "Animations CSS", "Micro-interactions"],
      price: "À partir de 400€"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z" fill="#4CAF50"/>
        </svg>
      ),
      title: "Site vitrine responsive",
      description: "Création de sites web adaptatifs pour présenter votre activité.",
      features: ["Mobile-first", "SEO de base", "Design personnalisé"],
      price: "À partir de 600€"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" fill="#FF9800"/>
        </svg>
      ),
      title: "Optimisation simple",
      description: "Amélioration de la rapidité et du référencement de votre site existant.",
      features: ["Analyse basique", "Optimisation images", "SEO technique"],
      price: "À partir de 300€"
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3S1 7.1 3 9.1C4.9 11 7.6 11.5 9.9 10.6L19 19.7C19.3 20 19.7 20 20 19.7L22.7 17C23 16.7 23 16.3 22.7 16L22.7 19Z" fill="#607D8B"/>
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Maintenance, corrections de bugs et évolutions simples de votre site web.",
      features: ["Bug fixes", "Mises à jour", "Support technique"],
      price: "À partir de 200€/mois"
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <path d="M12,8.11C9.96,8.11 8.11,9.96 8.11,12C8.11,14.04 9.96,15.89 12,15.89C14.04,15.89 15.89,14.04 15.89,12C15.89,9.96 14.04,8.11 12,8.11M12,17.33C9.24,17.33 6.67,15.24 6.67,12C6.67,8.76 9.24,6.67 12,6.67C14.76,6.67 17.33,8.76 17.33,12C17.33,15.24 14.76,17.33 12,17.33" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      ),
      title: "Développement React avancé",
      description: "Création d'applications React complexes, gestion d'état, API, etc.",
      features: ["State management", "Hooks personnalisés", "Performance optimisée"],
      price: "Sur devis (niveau senior)"
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13,1L8,6H11V14H13V6H16M6,19A2,2 0 0,1 4,17V15H6V17H18V15H20V17A2,2 0 0,1 18,19" fill="#2196F3"/>
        </svg>
      ),
      title: "API Integration avancée",
      description: "Connexion et intégration d'APIs REST et GraphQL complexes.",
      features: ["REST APIs", "GraphQL", "Authentication", "Data fetching"],
      price: "Sur devis (niveau senior)"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Du développement front-end à l'optimisation, je vous accompagne dans tous vos projets web avec expertise et passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleServiceAction(service.title)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Technologies maîtrisées
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { 
                name: 'React', 
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="2.2" fill="currentColor"/>
                    <path d="M12,8.11C9.96,8.11 8.11,9.96 8.11,12C8.11,14.04 9.96,15.89 12,15.89C14.04,15.89 15.89,14.04 15.89,12C15.89,9.96 14.04,8.11 12,8.11M12,17.33C9.24,17.33 6.67,15.24 6.67,12C6.67,8.76 9.24,6.67 12,6.67C14.76,6.67 17.33,8.76 17.33,12C17.33,15.24 14.76,17.33 12,17.33" fill="currentColor"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
                  </svg>
                ),
                color: 'from-blue-400 to-cyan-500' 
              },
              { 
                name: 'JavaScript', 
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor"/>
                  </svg>
                ),
                color: 'from-yellow-400 to-orange-500' 
              },
              { 
                name: 'TypeScript', 
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM9.273 7.125V11.25H6.545v2.25h2.728v5.618c0 1.456.294 2.508.882 3.156.588.648 1.479.972 2.673.972.385 0 .78-.031 1.185-.093v-2.178a8.14 8.14 0 01-.72.048c-.515 0-.896-.132-1.143-.396-.247-.264-.37-.66-.37-1.188v-5.939h2.033V11.25h-2.033V7.125H9.273zM16.596 11.11c-.776 0-1.455.229-2.036.688-.581.459-.871 1.06-.871 1.804 0 .564.145 1.04.437 1.428.292.388.693.715 1.203.981l1.581.792c.334.167.582.353.744.558.162.205.243.454.243.747 0 .336-.117.61-.351.822-.234.212-.564.318-.99.318-.543 0-.994-.192-1.353-.576-.359-.384-.539-.9-.539-1.548h-2.19c0 .747.176 1.407.528 1.98.352.573.843 1.02 1.473 1.341.63.321 1.36.482 2.19.482.774 0 1.466-.151 2.076-.453.61-.302 1.089-.73 1.437-1.284.348-.554.522-1.205.522-1.953 0-.73-.184-1.344-.552-1.842-.368-.498-.88-.918-1.536-1.26l-1.446-.747c-.41-.211-.71-.432-.9-.663-.19-.231-.285-.504-.285-.819 0-.315.104-.575.312-.78.208-.205.494-.307.858-.307.43 0 .787.142 1.071.426.284.284.426.679.426 1.185h2.133c0-.731-.17-1.376-.51-1.935-.34-.559-.82-1.001-1.44-1.326-.62-.325-1.349-.487-2.187-.487z" fill="currentColor"/>
                  </svg>
                ),
                color: 'from-blue-500 to-indigo-600' 
              },
              { 
                name: 'Tailwind', 
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="currentColor"/>
                  </svg>
                ),
                color: 'from-cyan-400 to-blue-500' 
              },
              { 
                name: 'Node.js', 
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="currentColor"/>
                  </svg>
                ),
                color: 'from-green-400 to-emerald-500' 
              },
              { 
                name: 'Git', 
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="currentColor"/>
                  </svg>
                ),
                color: 'from-gray-400 to-gray-600' 
              }
            ].map((tech, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé pour votre projet web.
          </p>
          <button 
            onClick={handleContactAction}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
