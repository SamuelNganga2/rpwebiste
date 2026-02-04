import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SermonsPage from './pages/SermonsPage'
import TestimoniesPage from './pages/TestimoniesPage'
import PartnershipPage from './pages/PartnershipPage'
import DiscipleProgram from './pages/DiscipleProgram'
import Footer from './components/Footer'
import { DarkModeProvider } from './contexts/DarkModeContext'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [discipleProgramStep, setDiscipleProgramStep] = useState(1)

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Reset step when navigating away from disciple program
    if (page !== 'disciple-program') {
      setDiscipleProgramStep(1)
    }
  }

  const handleDiscipleProgramStepChange = (step: number) => {
    setDiscipleProgramStep(step)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'sermons':
        return <SermonsPage />
      case 'testimonies':
        return <TestimoniesPage />
      case 'partnership':
        return <PartnershipPage />
      case 'disciple-program':
        return <DiscipleProgram onStepChange={handleDiscipleProgramStepChange} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} discipleProgramStep={currentPage === 'disciple-program' ? discipleProgramStep : null} />
        <main className="pt-20">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
