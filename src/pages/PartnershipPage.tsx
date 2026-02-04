import React, { useState } from 'react'

const PartnershipPage: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)

  const scrollToOfferings = () => {
    const element = document.getElementById('offerings-tithes')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToWelfare = () => {
    const element = document.getElementById('welfare-programs')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const welfareInitiatives = [
    {
      title: "Food Distribution",
      description: "Providing meals and food packages to families in need within our community.",
      icon: "bi-basket",
      impact: "500+ families served monthly"
    },
    {
      title: "Educational Support",
      description: "Scholarships and school supplies for underprivileged children to continue their education.",
      icon: "bi-book",
      impact: "150+ students supported"
    },
    {
      title: "Medical Assistance",
      description: "Healthcare support and medical bill assistance for community members in crisis.",
      icon: "bi-heart-pulse",
      impact: "200+ medical cases assisted"
    },
    {
      title: "Widow & Orphan Care",
      description: "Special programs to support widows and orphans with practical needs and spiritual care.",
      icon: "bi-people-fill",
      impact: "100+ widows & orphans cared for"
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setSelectedAccount(text)
    window.setTimeout(() => setSelectedAccount(null), 2000)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Partnership
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us in making a difference in our community. Your partnership enables us 
            to spread the Gospel and serve those in need with Christ's love.
          </p>
        </div>

        {/* Welfare Initiatives */}
        <div id="welfare-initiatives" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              Our Welfare Initiatives
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
            <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto">
              Through your generous support, we're able to demonstrate God's love 
              through practical service to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {welfareInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`bi ${initiative.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-4">{initiative.title}</h3>
                <p className="text-accent-600 dark:text-gray-300 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="bg-gradient-to-r from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 transition-colors duration-300">
                  <p className="text-sm font-semibold text-primary-700 dark:text-white">{initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Offerings Account */}
          <div id="offerings-tithes" className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12 transition-colors duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-heart-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-primary-800 dark:text-white mb-4 font-serif">Offerings & Tithes</h3>
              <p className="text-accent-600 dark:text-gray-300 leading-relaxed">
                Support the general ministry operations, pastoral care, and spiritual programs 
                that help believers grow in their faith journey.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-colors duration-300">
              <div className="text-center">
                <p className="text-sm text-accent-500 dark:text-gray-400 mb-2">Paybill Number</p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl font-bold text-primary-800 dark:text-white">8598004</span>
                  <button
                    onClick={() => copyToClipboard('123456')}
                    className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <i className="bi bi-copy"></i>
                  </button>
                </div>
                {selectedAccount === '123456' && (
                  <p className="text-green-600 dark:text-green-400 text-sm mt-2 animate-fade-in">Copied to clipboard!</p>
                )}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-accent-600 dark:text-gray-300">Account Number:</span>
                  <span className="font-semibold text-primary-800 dark:text-white">Your Phone Number</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-accent-600 dark:text-gray-300">Reference:</span>
                  <span className="font-semibold text-primary-800 dark:text-white">Offering/Tithe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Welfare Account */}
          <div id="welfare-programs" className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12 transition-colors duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-people-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-primary-800 dark:text-white mb-4 font-serif">Welfare Programs</h3>
              <p className="text-accent-600 dark:text-gray-300 leading-relaxed">
                Directly support our community outreach programs including food distribution, 
                medical assistance, and educational support for those in need.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-colors duration-300">
              <div className="text-center">
                <p className="text-sm text-accent-500 dark:text-gray-400 mb-2">Paybill Number</p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl font-bold text-primary-800 dark:text-white">8598004</span>
                  <button
                    onClick={() => copyToClipboard('789012')}
                    className="bg-secondary-500 text-white p-2 rounded-lg hover:bg-secondary-600 transition-colors duration-300"
                  >
                    <i className="bi bi-copy"></i>
                  </button>
                </div>
                {selectedAccount === '789012' && (
                  <p className="text-green-600 dark:text-green-400 text-sm mt-2 animate-fade-in">Copied to clipboard!</p>
                )}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-accent-600 dark:text-gray-300">Account Number:</span>
                  <span className="font-semibold text-primary-800 dark:text-white">Your Phone Number</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-accent-600 dark:text-gray-300">Reference:</span>
                  <span className="font-semibold text-primary-800 dark:text-white">Welfare</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-br from-spiritual-50 to-primary-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12 mb-20 transition-colors duration-300">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              Your Impact in Numbers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
            <p className="text-xl text-accent-600 dark:text-gray-300">
              See how your partnership is making a real difference in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1,200+', label: 'Lives Touched', icon: 'bi-people' },
              { number: '500+', label: 'Families Fed', icon: 'bi-basket' },
              { number: '150+', label: 'Students Supported', icon: 'bi-mortarboard' },
              { number: '50+', label: 'Medical Cases', icon: 'bi-heart-pulse' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-spiritual-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`bi ${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-primary-800 dark:text-white mb-2">{stat.number}</div>
                <div className="text-accent-600 dark:text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors duration-300">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              Partner with Us Today
            </h2>
            <p className="text-xl text-accent-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every contribution, no matter the size, makes a difference. Join us in building 
              God's kingdom and serving our community with love and compassion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToOfferings}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="bi bi-heart-fill mr-2"></i>
                Give Offering
              </button>
              <button 
                onClick={scrollToWelfare}
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="bi bi-people-fill mr-2"></i>
                Support Welfare
              </button>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl transition-colors duration-300">
              <p className="text-primary-800 dark:text-white font-semibold mb-2">
                "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
              </p>
              <p className="text-accent-600 dark:text-gray-300 text-sm">- Luke 6:38</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnershipPage
