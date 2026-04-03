import { useState } from 'react'
import { useLanguage } from '../contexts/useLanguage'
import { useData } from '../contexts/useData'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const { complex } = useData()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <a href="/" className="logo-link">
              {complex.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={closeMenu}>{t('nav.home')}</a>
              </li>
              <li className="nav-item">
                <a href="#details" className="nav-link" onClick={closeMenu}>{t('nav.houses')}</a>
              </li>
              <li className="nav-item">
                <a href="#gallery" className="nav-link" onClick={closeMenu}>{t('nav.gallery')}</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link" onClick={closeMenu}>{t('nav.amenities')}</a>
              </li>
              <li className="nav-item">
                <a href="#booking" className="nav-link" onClick={closeMenu}>{t('nav.bookNow')}</a>
              </li>
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              onClick={toggleLanguage}
              className="language-btn"
              aria-label="Switch language"
              title={language === 'en' ? 'Switch to Bulgarian' : 'Switch to English'}
            >
              <span className="flag-icon">
                {language === 'en' ? '🇧🇬' : '🇬🇧'}
              </span>
              <span className="language-text">
                {language === 'en' ? 'BG' : 'EN'}
              </span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="header-cta">
            <a href="#booking" className="btn btn-primary" onClick={closeMenu}>
              {t('reserveVilla')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-toggle ${isMenuOpen ? 'mobile-toggle-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="mobile-toggle-line"></span>
            <span className="mobile-toggle-line"></span>
            <span className="mobile-toggle-line"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header