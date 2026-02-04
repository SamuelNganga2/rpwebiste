import React, { useState } from 'react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => window.setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: '', phone: '', email: '', message: '' })
    
    window.setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out to us for prayer requests, 
            questions, or to learn more about our ministry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
              <h2 className="text-3xl font-bold text-primary-800 dark:text-white mb-8 font-serif">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <i className="bi bi-telephone text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-accent-500 dark:text-gray-400">Primary Phone</p>
                    <p className="text-lg font-semibold text-primary-800 dark:text-white">+254 700 123 456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                    <i className="bi bi-phone text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-accent-500 dark:text-gray-400">Secondary Phone</p>
                    <p className="text-lg font-semibold text-primary-800 dark:text-white">+254 701 789 012</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center">
                    <i className="bi bi-envelope text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-accent-500 dark:text-gray-400">Email Address</p>
                    <p className="text-lg font-semibold text-primary-800 dark:text-white">info@rpministries.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6 font-serif">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-600 dark:text-gray-300">Monday - Friday</span>
                  <span className="font-semibold text-primary-800 dark:text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-600 dark:text-gray-300">Saturday</span>
                  <span className="font-semibold text-primary-800 dark:text-white">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-600 dark:text-gray-300">Sunday</span>
                  <span className="font-semibold text-primary-800 dark:text-white">Service Days</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4 font-serif">Emergency Prayer Line</h3>
              <p className="text-accent-600 dark:text-gray-300 mb-4">
                Need urgent prayer? Our prayer team is available 24/7 for emergency situations.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <i className="bi bi-heart-pulse text-white"></i>
                </div>
                <span className="text-lg font-bold text-red-600">+254 702 PRAYER</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
            <h2 className="text-3xl font-bold text-primary-800 dark:text-white mb-8 font-serif">Send Us a Message</h2>
            
            {showSuccess && (
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-6 animate-fade-in transition-colors duration-300">
                <div className="flex items-center">
                  <i className="bi bi-check-circle-fill text-green-500 dark:text-green-400 mr-3"></i>
                  <p className="text-green-800 dark:text-green-200 font-semibold">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                  placeholder="+254 700 123 456"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-800 dark:text-white mb-2">
                  Message or Prayer Request *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-accent-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-primary-800 dark:text-white"
                  placeholder="Share your message, prayer request, or feedback with us..."
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
                    Sending Message...
                  </div>
                ) : (
                  <>
                    <i className="bi bi-send mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
