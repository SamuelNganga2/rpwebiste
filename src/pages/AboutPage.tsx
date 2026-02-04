import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            About Royal Priesthood
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded on the solid rock of Jesus Christ, we are committed to spreading the Gospel 
            and nurturing believers in their spiritual journey.
          </p>
        </div>

        {/* Mission, Vision, Faith Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-bullseye text-white text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-primary-800 dark:text-white mb-4 text-center font-serif">Our Mission</h2>
            <p className="text-accent-600 dark:text-gray-300 leading-relaxed text-center">
              Raising a kingdom of priests through the transformative power of God's Word, 
              the work of the Holy Spirit, and the demonstration of His love.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-eye text-white text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-primary-800 dark:text-white mb-4 text-center font-serif">Our Vision</h2>
            <p className="text-accent-600 dark:text-gray-300 leading-relaxed text-center">
              To lead believers into the full experience of their divine rest and reign in life; 
              establishing them in a life of dominion, peace and rest as they reign victoriously in every area of life.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 bg-gradient-to-br from-spiritual-500 to-spiritual-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-book text-white text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-primary-800 dark:text-white mb-4 text-center font-serif">Our Faith</h2>
            <div className="flex-1 overflow-y-auto max-h-32 pr-2">
              <p className="text-accent-600 dark:text-gray-300 leading-relaxed text-center">
                We as ROYAL PRIESTHOOD MINISTRY believe in one God  - Father, Son, and Holy Spirit, 
                Creator of all things.We believe that the Lord Jesus Christ, the first begotten son of God, 
                was conceived of the Holy Spirit, was born of the Virgin Mary, was crucified and died, was 
                buried and resurrected, ascended into heaven, is now seated at the right hand of God the Father, 
                and is both true God and true man. We believe the Bible in its entirety to be the inspired word of 
                God and the infallible rule of faith and conduct. We believe in the resurrection of the dead, the 
                eternal happiness of the saved, and the eternal punishment of the Lost. We believe in personal salvation 
                of believers through the shed blood of Jesus Christ. We believe in sanctification through the word of God 
                and by the Holy Spirit, and we believe in personal holiness, purity of heart and life. We believe in divine 
                healing through faith in the name of Jesus Christ, and we believe that healing is included in the Redemption. 
                We believe in evidence of the fruit of the spirit. We believe that all of these are available to believers. 
                we believe in the Christian's hope: the soon-coming, personal return of the Lord Jesus Christ.
              </p>
            </div>
          </div>
        </div>

        {/* Man of God Section */}
        <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12 transition-colors duration-300">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              The Vision Bearer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-primary-800 dark:text-white mb-6">Pastor [Charles Muchemi]</h3>
              <div className="space-y-6 text-accent-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Called by God to shepherd His people, Pastor Charles Muchemi has been faithfully serving 
                  the Lord for over four years. With a heart for evangelism and discipleship, 
                  he has dedicated his life to seeing souls saved and believers equipped for ministry.
                </p>
                <p>
                  His passion for God's Word and commitment to biblical truth has been the 
                  foundation of RP Ministries' growth and impact in the community. Through his 
                  leadership, countless lives have been transformed by the power of the Gospel.
                </p>
                <p>
                  Pastor Charles Muchemi holds a [Degree/Qualification] in [Field] and continues to pursue 
                  excellence in ministry through ongoing study and prayer.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md transition-colors duration-300">
                  <span className="text-sm text-accent-500 dark:text-gray-400">Years in Ministry</span>
                  <p className="font-semibold text-primary-800 dark:text-white">Four Years</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md transition-colors duration-300">
                  <span className="text-sm text-accent-500 dark:text-gray-400">Education</span>
                  <p className="font-semibold text-primary-800 dark:text-white">[Qualification]</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md transition-colors duration-300">
                  <span className="text-sm text-accent-500 dark:text-gray-400">Specialty</span>
                  <p className="font-semibold text-primary-800 dark:text-white">Discipleship</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md transition-colors duration-300">
                  <span className="text-sm text-accent-600 dark:text-gray-400 block text-center">Favourite verse</span>
                  <p className="font-semibold text-primary-800 dark:text-white">for in Him we live and move and have our 
                    being, as also some of your own poets have said, 'For we are also His offspring.'

Acts 17:28</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <img src="src/assets/pastor.png" alt="Man of God" />
              </div>
              <p className="mt-6 text-lg font-semibold text-primary-800 dark:text-white">
                "Possessing the Land of the Promise"
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'bi-heart-fill', title: 'Love', description: 'Demonstrating Christ\'s love in all we do' },
              { icon: 'bi-book', title: 'Truth', description: 'Standing firm on God\'s unchanging Word' },
              { icon: 'bi-people', title: 'Unity', description: 'Building strong community bonds in Christ' },
              { icon: 'bi-arrow-up-circle', title: 'Excellence', description: 'Pursuing excellence in ministry and service' }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-spiritual-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`bi ${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">{value.title}</h3>
                <p className="text-accent-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
