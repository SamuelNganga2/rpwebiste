import React, { useState } from 'react'

interface SalvationPrayerProps {
  onNavigate: (page: string) => void
}

const SalvationPrayer: React.FC<SalvationPrayerProps> = ({ onNavigate }) => {
  const [showPrayer, setShowPrayer] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-spiritual-50 to-primary-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-spiritual-200 dark:border-gray-600 transition-colors duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="bi bi-heart-fill text-white text-2xl"></i>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Salvation Prayer
          </h2>
          
          <p className="text-lg text-accent-600 dark:text-gray-300 mb-8 leading-relaxed">
            If you feel God calling you to accept Jesus Christ as your Lord and Savior, 
            we invite you to pray this prayer with a sincere heart.
          </p>

          <button
            onClick={() => setShowPrayer(!showPrayer)}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-8"
          >
            {showPrayer ? 'Hide Prayer' : 'Show Salvation Prayer'}
          </button>

          {showPrayer && (
            <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-8 animate-fade-in transition-colors duration-300">
              <div className="text-left space-y-4 text-primary-800 dark:text-white leading-relaxed">
                <p className="font-semibold text-center mb-6 text-lg">Pray this prayer from your heart:</p>
                <p className="italic">
                  "Dear Lord Jesus, I acknowledge that I am a sinner and I need Your forgiveness. 
                  I believe that You died on the cross for my sins and rose again from the dead. 
                  I invite You to come into my heart and be my Lord and Savior.
                </p>
                <p className="italic">
                  I surrender my life to You and ask You to help me live according to Your will. 
                  Thank You for Your love, mercy, and the gift of eternal life. 
                  In Jesus' name, I pray. Amen."
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-accent-600 dark:text-gray-300">
              If you prayed this prayer, welcome to the family of God! 
              We would love to help you grow in your new faith.
            </p>
            
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                onNavigate('disciple-program')
              }}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-10 py-4 rounded-full font-bold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <i className="bi bi-person-heart mr-2"></i>
              Join My Disciple Program
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SalvationPrayer
