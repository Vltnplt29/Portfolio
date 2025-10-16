import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
    alert('Message envoyé ! Nous vous recontacterons bientôt.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Informations de contact */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Travaillons <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">ensemble ?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vous avez un projet web en tête ? En tant qu'étudiant développeur au Cepegra, je serai ravi 
              de discuter avec vous et de voir comment je peux contribuer à votre projet.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                  📧
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <button 
                    onClick={() => window.location.href = 'mailto:dev@monportfolio.com'}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Vltnplt@gmail.com
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Téléphone</h4>
                  <button 
                    onClick={() => window.location.href = 'tel:+32123456789'}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    +32 476 08 33 78
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Adresse</h4>
                  <button 
                    onClick={() => window.open('https://www.google.com/maps/place/6120+Ham-sur-Heure-Nalinnes/@50.3253848,4.1161974,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0x47c3a4ed73c76867:0xc18b3a66787302a7!2sBruxelles!3b1!8m2!3d50.8477029!4d4.3572001!16zL20vMDJybmJ2!3m5!1s0x47c23b5592c34303:0xb7df016b7cf8b81a!8m2!3d50.3219112!4d4.3873737!16zL20vMDE3cWI5?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-left"
                  >
                    6120 Ham-sur-heure<br />
                    Belgique
                  </button>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Disponibilités</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>Après 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Week-end</span>
                  <span>Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span>Formation Cepegra</span>
                  <span>Mars - Décembre 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical min-h-[120px]"
                  placeholder="Décrivez votre projet ou posez votre question..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
