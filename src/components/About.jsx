const About = () => {
  const skills = [
    { 
      name: 'VueJs', 
      level: 90, 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#4FC08D"/>
        </svg>
      )
    },
    { 
      name: 'JavaScript', 
      level: 95, 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E"/>
        </svg>
      )
    },
    { 
      name: 'PineScript', 
      level: 85, 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2E8B57" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    { 
      name: 'CSS/Tailwind', 
      level: 90, 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      level: 80, 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#339933"/>
        </svg>
      )
    },
    { 
      name: 'Git', 
      level: 85, 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F1502F"/>
        </svg>
      )
    }
  ]

  const experiences = [
    {
      period: "2023 - Présent",
      role: "Développeur Front-End Senior",
      company: "Tech Company",
      description: "Développement d'applications React complexes et encadrement d'équipe"
    },
    {
      period: "2021 - 2023",
      role: "Développeur Full-Stack",
      company: "Startup Innovante",
      description: "Création d'applications web complètes avec React, Node.js et MongoDB"
    },
    {
      period: "2020 - 2021",
      role: "Développeur Junior",
      company: "Agence Digitale",
      description: "Intégration web et développement de sites vitrines et e-commerce"
    }
  ]

  return (
    <section id="a-propos" className="py-20 bg-white w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenu texte */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              À propos de <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">moi</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Passionné par le développement web depuis plus de 4 ans, je me spécialise dans la création 
                d'interfaces utilisateur modernes et performantes avec React et les technologies front-end.
              </p>
              
              <p>
                Mon approche combine créativité et technicité pour transformer des idées complexes en 
                expériences web intuitives. J'aime particulièrement travailler sur l'optimisation des 
                performances et l'accessibilité des applications.
              </p>
              
              <p>
                Quand je ne code pas, vous me trouverez probablement en train de découvrir les dernières 
                tendances tech, de contribuer à des projets open source, ou de partager mes connaissances 
                avec la communauté développeur.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Télécharger CV
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/valentin-philippart/', '_blank')}
                className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-all duration-300"
              >
                LinkedIn
              </button>
            </div>
          </div>

          {/* Image et stats */}
          <div className="space-y-8">
            {/* Avatar placeholder */}
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl">
                <div className="text-center">
                  <div className="text-cyan-600 mb-4">
                    <svg className="w-24 h-24 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,6V4H10V6H14M4,8V6H6V8H4M18,8V6H20V8H18M4,10V8H6V10H4M18,10V8H20V10H18M4,12V10H6V12H4M18,12V10H20V12H18M4,14V12H6V14H4M18,14V12H20V14H18M4,16V14H6V16H4M18,16V14H20V16H18M4,18V16H6V18H4M18,18V16H20V18H18M8,18V6H16V18H8Z"/>
                      <path d="M10,7H14V8H10V7M10,8H14V9H10V8M10,9H14V10H10V9M10,10H14V11H10V10M10,11H14V12H10V11M10,12H14V13H10V12M10,13H14V14H10V13M10,14H14V15H10V14M10,15H14V16H10V15M10,16H14V17H10V16Z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Photo de profil</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-gray-600">Projets livrés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Compétences techniques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-700">{skill.icon}</div>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expérience */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Expérience professionnelle
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-8 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-sm font-medium text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
