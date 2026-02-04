import React from 'react'

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/RoyalPriesthood1.png" 
          alt="Royal Priesthood logo" 
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-secondary-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-spiritual-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-secondary-300 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-serif leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-500">
              Royal Priesthood
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-300 mb-4">Our Mission</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Raising a kingdom of priests through the transformative power of God’s Word, 
              the work of the Holy Spirit, and the demonstration of His love.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-300 mb-4">Our Vision</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                To lead believers into the full experience of their divine rest and reign in life; 
              establishing them in a life of dominion, peace and rest as they reign victoriously in every area of life.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              onNavigate('disciple-program')
            }}
            className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-pulse"
          >
            <i className="bi bi-heart-fill mr-3"></i>
            I'm Newly Born Again
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <i className="bi bi-chevron-down text-white text-2xl opacity-70"></i>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
