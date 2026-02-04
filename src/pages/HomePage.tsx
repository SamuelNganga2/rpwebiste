import React from 'react'
import HeroSection from '../components/HeroSection'
import SalvationPrayer from '../components/SalvationPrayer'
import FeaturedSermons from '../components/FeaturedSermons'
import TestimonyPreview from '../components/TestimonyPreview'

interface HomePageProps {
  onNavigate: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      <HeroSection onNavigate={onNavigate} />
      <SalvationPrayer onNavigate={onNavigate} />
      
      {/* Ministry Purpose Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              Our Purpose & Beliefs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-spiritual-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-book text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">Biblical Foundation</h3>
              <p className="text-accent-600 dark:text-gray-300 leading-relaxed">
                We stand firmly on the Word of God, teaching and living by biblical principles 
                that transform lives and communities.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-people text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">Community Impact</h3>
              <p className="text-accent-600 dark:text-gray-300 leading-relaxed">
                Through welfare initiatives and community outreach, we demonstrate Christ's love 
                in practical ways that make a difference.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-heart text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">Discipleship</h3>
              <p className="text-accent-600 dark:text-gray-300 leading-relaxed">
                We are committed to nurturing spiritual growth and helping believers 
                mature in their faith journey with Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedSermons onNavigate={onNavigate} />
      <TestimonyPreview onNavigate={onNavigate} />
    </div>
  )
}

export default HomePage
