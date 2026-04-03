import { useState } from 'react'
import { useLanguage } from '../contexts/useLanguage'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <a href="/" className="logo-link">
              La Vita
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">{t('home')}</a>
              </li>
              <li className="nav-item">
                <a href="#details" className="nav-link">{t('theVilla')}</a>
              </li>
              <li className="nav-item">
                <a href="#gallery" className="nav-link">{t('gallery')}</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">{t('amenities')}</a>
              </li>
              <li className="nav-item">
                <a href="#booking" className="nav-link">{t('bookNow')}</a>
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
            <a href="#booking" className="btn btn-primary">
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