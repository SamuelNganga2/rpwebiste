import React from 'react'

interface TestimonyPreviewProps {
  onNavigate: (page: string) => void
}

const TestimonyPreview: React.FC<TestimonyPreviewProps> = ({ onNavigate }) => {
  const testimonies = [
    {
      name: "Sarah M.",
      location: "Nairobi",
      quote: "RP Ministries helped me find my purpose in Christ. The discipleship program transformed my life completely."
    },
    {
      name: "David K.",
      location: "Mombasa",
      quote: "Through the teachings and fellowship, I've grown stronger in faith and found a loving church family."
    },
    {
      name: "Grace W.",
      location: "Kisumu",
      quote: "The welfare programs showed me God's love in action. I'm grateful for this ministry's heart for the community."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Lives Transformed
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from those whose lives have been touched by God's love through our ministry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonies.map((testimony, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="bi bi-quote text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white">{testimony.name}</h3>
                <p className="text-sm text-accent-500 dark:text-gray-400">{testimony.location}</p>
              </div>
              
              <blockquote className="text-accent-600 dark:text-gray-300 italic leading-relaxed text-center">
                "{testimony.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              onNavigate('testimonies')
            }}
            className="bg-gradient-to-r from-spiritual-500 to-spiritual-600 text-white px-8 py-4 rounded-full font-semibold hover:from-spiritual-600 hover:to-spiritual-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View More Testimonies
            <i className="bi bi-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonyPreview
