import { useLanguage } from '../contexts/LanguageContext'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Luxury villa with pool overlooking the ocean"
          className="hero-image"
        />
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <div className="villa-badge">
              <span>{t('exclusiveVilla')}</span>
            </div>
            <h1 className="hero-title">
              {t('villaName')}
            </h1>
            <div className="hero-location">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t('location')}</span>
            </div>
            <p className="hero-description">
              {t('heroDescription')}
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn btn-primary btn-large">
                {t('bookYourStay')}
              </a>
              <a href="#gallery" className="btn btn-secondary btn-large">
                {t('viewGallery')}
              </a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">8</div>
              <div className="stat-label">{t('guests')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">{t('bedrooms')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">{t('bathrooms')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t('concierge')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero