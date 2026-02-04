import React, { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
  discipleProgramStep?: number | null
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, discipleProgramStep }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'sermons', label: 'Sermons' },
    { id: 'testimonies', label: 'Testimonies' },
    { id: 'partnership', label: 'Partnership' }
  ]

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-primary-100 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-spiritual-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="src/assets/rplogo1.png" alt="" />
            </div>
            <div className="block">
              <h1 className="text-xl font-bold text-primary-800 dark:text-white font-serif">Royal Priesthood</h1>
              <p className="text-xs text-accent-600 dark:text-gray-300 -mt-1">Possessing the land of the Promise</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-accent-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white hover:bg-primary-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              title="Toggle dark mode"
            >
              <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'} text-xl`}></i>
            </button>
          </div>

          {/* Dashboard Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('disciple-program')}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-full font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <i className="bi bi-person-heart mr-2"></i>
              My Disciple Program
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              title="Toggle dark mode"
            >
              <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'} text-lg`}></i>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-accent-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-primary-100 dark:border-gray-700 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-primary-500 text-white'
                      : 'text-accent-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('disciple-program')}
                className="block w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300"
              >
                <i className="bi bi-person-heart mr-2"></i>
                My Disciple Program
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
