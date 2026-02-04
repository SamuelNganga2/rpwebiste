import React, { useState } from 'react'

interface DiscipleProgramProps {
  onStepChange?: (step: number) => void
}

const DiscipleProgram: React.FC<DiscipleProgramProps> = ({ onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    salvationDate: '',
    previousChurch: '',
    spiritualGoals: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      onStepChange?.(newStep)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      onStepChange?.(newStep)
    }
  }

  const handleSubmitAndStart = () => {
    // Open YouTube in a new tab
    window.open('https://www.youtube.com', '_blank')
  }

  
  const programModules = [
    {
      title: "Foundation of Faith",
      description: "Understanding salvation, baptism, and the basics of Christian living",
      duration: "4 weeks",
      lessons: ["What is Salvation?", "Water Baptism", "The Holy Spirit", "Prayer Life"]
    },
    {
      title: "Growing in Christ",
      description: "Developing spiritual disciplines and understanding God's Word",
      duration: "6 weeks", 
      lessons: ["Bible Study Methods", "Worship & Praise", "Fasting", "Fellowship", "Spiritual Gifts", "Overcoming Temptation"]
    },
    {
      title: "Living as a Disciple",
      description: "Practical Christian living and sharing your faith",
      duration: "4 weeks",
      lessons: ["Christian Character", "Relationships", "Evangelism", "Stewardship"]
    },
    {
      title: "Ministry & Service",
      description: "Discovering your calling and serving in the body of Christ",
      duration: "4 weeks",
      lessons: ["Spiritual Gifts", "Ministry Opportunities", "Leadership", "Mentoring Others"]
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            My Disciple Program
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 font-semibold mb-4">
            Step {currentStep} of 4
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to your spiritual growth journey! This comprehensive program will help you 
            grow strong in your faith and become an effective disciple of Jesus Christ.
          </p>
        </div>

        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            {/* Welcome Step */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="bi bi-heart-fill text-white text-3xl"></i>
              </div>
              
              <h2 className="text-4xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
                Welcome to the Family!
              </h2>
              
              <p className="text-xl text-accent-600 dark:text-gray-300 mb-8 leading-relaxed">
                Congratulations on your decision to follow Jesus Christ! This is the most important 
                decision you'll ever make. We're here to help you grow in your new faith and 
                become a strong disciple of Christ.
              </p>

              <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-8 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">Personal Mentorship</h4>
                      <p className="text-accent-600 dark:text-gray-300">One-on-one guidance from experienced believers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">Structured Learning</h4>
                      <p className="text-accent-600 dark:text-gray-300">18-week comprehensive discipleship curriculum</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">Community Support</h4>
                      <p className="text-accent-600 dark:text-gray-300">Connect with other new believers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">Practical Application</h4>
                      <p className="text-accent-600 dark:text-gray-300">Learn to live out your faith daily</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
                <i className="bi bi-arrow-right ml-3"></i>
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            {/* Registration Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors duration-300">
              <h2 className="text-4xl font-bold text-primary-800 dark:text-white mb-8 text-center font-serif">
                Tell Us About Yourself
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                      placeholder="+254 700 123 456"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                      When did you accept Christ?
                    </label>
                    <input
                      type="date"
                      name="salvationDate"
                      value={userInfo.salvationDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                    Previous Church Experience (Optional)
                  </label>
                  <input
                    type="text"
                    name="previousChurch"
                    value={userInfo.previousChurch}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                    placeholder="Name of previous church or 'First time in church'"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                    What are your spiritual goals?
                  </label>
                  <textarea
                    name="spiritualGoals"
                    value={userInfo.spiritualGoals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                    placeholder="What do you hope to achieve in your spiritual journey?"
                  ></textarea>
                </div>
              </form>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-all duration-300"
                >
                  <i className="bi bi-arrow-left mr-2"></i>
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Continue
                  <i className="bi bi-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="max-w-6xl mx-auto">
            {/* Program Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors duration-300">
              <h2 className="text-4xl font-bold text-primary-800 dark:text-white mb-8 text-center font-serif">
                Your 18-Week Journey
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programModules.map((module, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-spiritual-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-800 dark:text-white">{module.title}</h3>
                        <p className="text-sm text-secondary-600 dark:text-gray-300">{module.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-accent-600 dark:text-gray-300 mb-4">{module.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary-800 dark:text-white text-sm">Lessons Include:</h4>
                      <ul className="space-y-1">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center text-sm text-accent-600 dark:text-gray-300">
                            <i className="bi bi-check-circle text-green-500 mr-2"></i>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-center transition-colors duration-300">
                <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">Program Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <i className="bi bi-book text-secondary-500 text-3xl mb-3"></i>
                    <h4 className="font-semibold text-primary-800 dark:text-white">Study Materials</h4>
                    <p className="text-accent-600 dark:text-gray-300 text-sm">Comprehensive workbooks and resources</p>
                  </div>
                  <div>
                    <i className="bi bi-people text-secondary-500 text-3xl mb-3"></i>
                    <h4 className="font-semibold text-primary-800 dark:text-white">Small Groups</h4>
                    <p className="text-accent-600 dark:text-gray-300 text-sm">Weekly fellowship and discussion</p>
                  </div>
                  <div>
                    <i className="bi bi-award text-secondary-500 text-3xl mb-3"></i>
                    <h4 className="font-semibold text-primary-800 dark:text-white">Certificate</h4>
                    <p className="text-accent-600 dark:text-gray-300 text-sm">Completion certificate and recognition</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-all duration-300"
                >
                  <i className="bi bi-arrow-left mr-2"></i>
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Enroll Now
                  <i className="bi bi-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="max-w-4xl mx-auto">
            {/* Confirmation */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="bi bi-check-lg text-white text-3xl"></i>
              </div>
              
              <h2 className="text-4xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
                Welcome to the Program!
              </h2>
              
              <p className="text-xl text-accent-600 dark:text-gray-300 mb-8 leading-relaxed">
                Congratulations! You've successfully enrolled in the My Disciple Program. 
                We're excited to journey with you as you grow in your faith.
              </p>

              <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-8 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">What Happens Next?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">Welcome Call</h4>
                      <p className="text-accent-600 dark:text-gray-300">Our team will contact you within 24 hours to welcome you and answer any questions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">Mentor Assignment</h4>
                      <p className="text-accent-600 dark:text-gray-300">You'll be paired with an experienced believer who will guide you through the program.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white">First Meeting</h4>
                      <p className="text-accent-600 dark:text-gray-300">Your first session will be scheduled for next week. You'll receive all study materials.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 mb-8 transition-colors duration-300">
                <p className="text-primary-800 dark:text-white font-semibold mb-2">
                  "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
                </p>
                <p className="text-accent-600 dark:text-gray-300 text-sm">- 2 Corinthians 5:17</p>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleSubmitAndStart}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <i className="bi bi-download mr-2"></i>
                  Start course
                </button>
                
                <button
                  onClick={() => {
                    setCurrentStep(1)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="w-full bg-accent-500 text-white py-4 rounded-full font-semibold hover:bg-accent-600 transition-all duration-300"
                >
                  <i className="bi bi-house mr-2"></i>
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                  currentStep >= step 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-accent-200 dark:bg-gray-600 text-accent-500 dark:text-gray-300'
                }`}>
                  {currentStep > step ? (
                    <i className="bi bi-check-lg"></i>
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 transition-colors duration-300 ${
                    currentStep > step ? 'bg-primary-500' : 'bg-accent-200 dark:bg-gray-600'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4 text-sm">
            <span className={currentStep >= 1 ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-accent-500 dark:text-gray-400'}>Welcome</span>
            <span className={currentStep >= 2 ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-accent-500 dark:text-gray-400'}>Registration</span>
            <span className={currentStep >= 3 ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-accent-500 dark:text-gray-400'}>Program</span>
            <span className={currentStep >= 4 ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-accent-500 dark:text-gray-400'}>Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscipleProgram
