import React, { useState, useEffect } from 'react'

const TestimoniesPage: React.FC = () => {
  const [newTestimony, setNewTestimony] = useState({
    name: '',
    location: '',
    testimony: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showDevConsole, setShowDevConsole] = useState(false)
  const [testimonies, setTestimonies] = useState([
    {
      id: 1,
      name: "Sarah M.",
      location: "Nairobi",
      testimony: "RP Ministries helped me find my purpose in Christ. The discipleship program transformed my life completely. I went from feeling lost and hopeless to having a clear direction and unshakeable faith. The pastoral care and community support have been incredible.",
      date: "December 2024"
    },
    {
      id: 2,
      name: "David K.",
      location: "Mombasa",
      testimony: "Through the teachings and fellowship, I've grown stronger in faith and found a loving church family. The sermons are always biblically sound and practically applicable. I've learned to trust God in ways I never thought possible.",
      date: "November 2024"
    },
    {
      id: 3,
      name: "Grace W.",
      location: "Kisumu",
      testimony: "The welfare programs showed me God's love in action. I'm grateful for this ministry's heart for the community. When I was going through financial difficulties, the church family supported me both spiritually and practically. God used RP Ministries to restore my hope.",
      date: "November 2024"
    },
    {
      id: 4,
      name: "Peter N.",
      location: "Eldoret",
      testimony: "I was struggling with addiction for years until I encountered Christ through RP Ministries. The prayer support and counseling helped me overcome my struggles. Today, I'm free and helping others who face similar challenges. God is faithful!",
      date: "October 2024"
    },
    {
      id: 5,
      name: "Mary J.",
      location: "Nakuru",
      testimony: "As a single mother, I felt overwhelmed and alone. RP Ministries became my spiritual family. The women's fellowship and children's programs have been a blessing to my family. My children are growing up knowing Jesus because of this ministry.",
      date: "October 2024"
    }
  ])

  // Load testimonies from localStorage on component mount
  useEffect(() => {
    const savedTestimonies = localStorage.getItem('submittedTestimonies')
    if (savedTestimonies) {
      try {
        const parsedTestimonies = JSON.parse(savedTestimonies)
        setTestimonies(prev => [...parsedTestimonies, ...prev])
      } catch (error) {
        console.error('Error loading testimonies:', error)
      }
    }
  }, [])

  // Save new testimonies to localStorage
  useEffect(() => {
    const submittedTestimonies = testimonies.filter(t => t.id > 5) // Only save user-submitted testimonies
    if (submittedTestimonies.length > 0) {
      localStorage.setItem('submittedTestimonies', JSON.stringify(submittedTestimonies))
    }
  }, [testimonies])

  // Developer console keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+Shift+D to toggle developer console
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault()
        setShowDevConsole(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const removeTestimony = (id: number) => {
    setTestimonies(prev => prev.filter(t => t.id !== id))
    // Update localStorage
    const remainingTestimonies = testimonies.filter(t => t.id !== id && t.id > 5)
    if (remainingTestimonies.length > 0) {
      localStorage.setItem('submittedTestimonies', JSON.stringify(remainingTestimonies))
    } else {
      localStorage.removeItem('submittedTestimonies')
    }
  }

  const clearAllSubmittedTestimonies = () => {
    setTestimonies(prev => prev.filter(t => t.id <= 5))
    localStorage.removeItem('submittedTestimonies')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewTestimony(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => window.setTimeout(resolve, 2000))
    
    // Add the new testimony to the list
    const currentDate = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]
    const dateString = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    
    const submittedTestimony = {
      id: testimonies.length + 1,
      name: newTestimony.name,
      location: newTestimony.location || "Unknown",
      testimony: newTestimony.testimony,
      date: dateString
    }
    
    setTestimonies(prev => [submittedTestimony, ...prev])
    setIsSubmitting(false)
    setShowSuccess(true)
    setNewTestimony({ name: '', location: '', testimony: '' })
    
    window.setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Testimonies
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear the amazing stories of how God has transformed lives through RP Ministries. 
            These testimonies are a testament to God's faithfulness and love.
          </p>
        </div>

        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="bi bi-quote text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white">{testimony.name}</h3>
                <p className="text-sm text-accent-500 dark:text-gray-400">{testimony.location}</p>
                <p className="text-xs text-accent-400 dark:text-gray-500 mt-1">{testimony.date}</p>
              </div>
              
              <blockquote className="text-accent-600 dark:text-gray-300 italic leading-relaxed text-center">
                "{testimony.testimony}"
              </blockquote>
              
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-secondary-400 text-sm"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Testimony Section */}
        <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12 transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
                Share Your Testimony
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
              <p className="text-xl text-accent-600 dark:text-gray-300 leading-relaxed">
                Has God done something amazing in your life through RP Ministries? 
                We'd love to hear your story and share it to encourage others.
              </p>
            </div>

            {showSuccess && (
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-8 animate-fade-in transition-colors duration-300">
                <div className="flex items-center">
                  <i className="bi bi-check-circle-fill text-green-500 dark:text-green-400 mr-3"></i>
                  <p className="text-green-800 dark:text-green-200 font-semibold">
                    Thank you for sharing your testimony! It will be reviewed and may be featured on our website.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 transition-colors duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newTestimony.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                    Location (Optional)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newTestimony.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                    placeholder="Your city or region"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="testimony" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                  Your Testimony *
                </label>
                <textarea
                  id="testimony"
                  name="testimony"
                  value={newTestimony.testimony}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                  placeholder="Share how God has worked in your life through RP Ministries..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting Testimony...
                  </div>
                ) : (
                  <>
                    <i className="bi bi-heart-fill mr-2"></i>
                    Submit Testimony
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Encouragement Section */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 transition-colors duration-300">
            <h3 className="text-3xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              "And they overcame him by the blood of the Lamb and by the word of their testimony"
            </h3>
            <p className="text-lg text-accent-600 dark:text-gray-300 mb-8">
              - Revelation 12:11
            </p>
            <p className="text-accent-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your testimony has power! When you share what God has done in your life, 
              it encourages others and brings glory to His name. Don't underestimate 
              the impact your story can have on someone who needs hope today.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Console */}
      {showDevConsole && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-2xl z-50 max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold">Developer Console</h3>
            <button 
              onClick={() => setShowDevConsole(false)}
              className="text-gray-400 hover:text-white"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="text-xs text-gray-300">
              Submitted Testimonies: {testimonies.filter(t => t.id > 5).length}
            </div>
            
            <div className="space-y-2">
              {testimonies.filter(t => t.id > 5).map(testimony => (
                <div key={testimony.id} className="bg-gray-800 p-2 rounded text-xs">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-semibold">{testimony.name}</div>
                      <div className="text-gray-400">{testimony.location} - {testimony.date}</div>
                    </div>
                    <button 
                      onClick={() => removeTestimony(testimony.id)}
                      className="text-red-400 hover:text-red-300 ml-2"
                      title="Remove testimony"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {testimonies.filter(t => t.id > 5).length > 0 && (
              <button 
                onClick={clearAllSubmittedTestimonies}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-xs font-semibold transition-colors"
              >
                Clear All Submitted Testimonies
              </button>
            )}
            
            <div className="text-xs text-gray-400 pt-2 border-t border-gray-700">
              Press Ctrl+Shift+D to toggle
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestimoniesPage
