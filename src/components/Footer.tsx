import React from 'react'
import rplogo1 from '../assets/rplogo1.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ministry Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                <img src={rplogo1} alt="rp logo" />
              </div>
              <h3 className="text-xl font-bold font-serif">Royal Priesthood Ministry</h3>
            </div>
            <p className="text-primary-200 leading-relaxed">
              Spreading the Gospel and nurturing disciples in the love of Christ. 
              Join us as we possess the land of His promises together.
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/royalpriesthoodembassy?igsh=NXQ3M2JmYjc3dGc0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 group"
              >
                <i className="bi bi-instagram text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a 
                href="https://youtube.com/@royalpriesthoodembassy?si=8za81AlnjePS4WTU"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group"
              >
                <i className="bi bi-youtube text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a 
                href="https://t.me/+JlXjIgrFs71jNzJk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group"
              >
                <i className="bi bi-telegram text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/1AT6usMkBM/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group"
              >
                <i className="bi bi-facebook text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Partnership Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Partnership</h4>
            <div className="space-y-2">
              <div className="bg-primary-700 p-3 rounded-lg">
                <p className="text-sm text-primary-200">Offerings Paybill</p>
                <p className="font-semibold">8598004</p>
              </div>
              <div className="bg-primary-700 p-3 rounded-lg">
                <p className="text-sm text-primary-200">Welfare Paybill</p>
                <p className="font-semibold">8598004</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-2xl font-bold font-serif text-secondary-400">
              "Possessing the Land of the Promise"
            </p>
            <p className="text-primary-300 text-sm">
              © 2025 Royal Priesthood Ministry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
