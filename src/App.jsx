import React, { useEffect, useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import VillaDetails from './components/VillaDetails'
import VillaGallery from './components/VillaGallery'
import Features from './components/Features'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scrolling function for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const headerHeight = 70 // Account for fixed header
          const targetPosition = targetElement.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <LanguageProvider>
      <div className="App">
        <Header isScrolled={isScrolled} />
        <main className="main-content">
          <Hero />
          <VillaDetails />
          <VillaGallery />
          <Features />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App