import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/useLanguage'
import './HouseModal.css'

const HouseModal = ({ house, isOpen, onClose }) => {
  const { t } = useLanguage()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Reset selected image when house changes
  useEffect(() => {
    setSelectedImageIndex(0)
  }, [house?.id])

  if (!isOpen || !house) return null

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === house.images.gallery.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? house.images.gallery.length - 1 : prev - 1
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{house.name}</h2>
            <p className="modal-subtitle">{house.shortDescription}</p>
            <div className="modal-price">
              {house.pricing.currency} {house.pricing.basePrice}
              <span>/{t('house.perNight')}</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">

          {/* Gallery Section */}
          <div className="modal-gallery">
            <div className="main-image">
              <img
                src={house.images.gallery[selectedImageIndex]?.url}
                alt={house.images.gallery[selectedImageIndex]?.alt}
                className="gallery-main-image"
              />

              {/* Gallery Navigation */}
              <button className="gallery-nav gallery-nav-prev" onClick={prevImage}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="gallery-nav gallery-nav-next" onClick={nextImage}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Image Counter */}
              <div className="image-counter">
                {selectedImageIndex + 1} / {house.images.gallery.length}
              </div>

              {/* Category Badge */}
              <div className="image-category">
                {house.images.gallery[selectedImageIndex]?.category}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="thumbnail-gallery">
              {house.images.gallery.map((image, index) => (
                <button
                  key={image.id}
                  className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={image.url} alt={image.alt} />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="modal-details">

            {/* House Stats */}
            <div className="modal-stats">
              <div className="stat">
                <span className="stat-icon">👥</span>
                <div>
                  <div className="stat-value">{house.capacity.guests}</div>
                  <div className="stat-label">{t('house.guests')}</div>
                </div>
              </div>
              <div className="stat">
                <span className="stat-icon">🛏️</span>
                <div>
                  <div className="stat-value">{house.capacity.bedrooms}</div>
                  <div className="stat-label">{t('house.bedrooms')}</div>
                </div>
              </div>
              <div className="stat">
                <span className="stat-icon">🚿</span>
                <div>
                  <div className="stat-value">{house.capacity.bathrooms}</div>
                  <div className="stat-label">{t('house.bathrooms')}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="modal-description">
              <h3>About This Villa</h3>
              <p>{house.longDescription}</p>
            </div>

            {/* Bed Configuration */}
            <div className="modal-beds">
              <h4>{t('house.beds')}</h4>
              <p>{house.capacity.beds}</p>
            </div>

            {/* Featured Amenities */}
            <div className="modal-amenities">
              <h4>{t('house.featuredAmenities')}</h4>
              <div className="amenities-grid">
                {house.amenities
                  .filter(amenity => amenity.featured)
                  .map((amenity) => (
                    <div key={amenity.id} className="amenity-card">
                      <div className="amenity-name">{amenity.name}</div>
                      <div className="amenity-description">{amenity.description}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Location & Access */}
            <div className="modal-location">
              <h4>{t('house.locationTitle')}</h4>
              <p className="location-position">{house.location.position}</p>

              <div className="walking-times">
                <h5>Walking Times</h5>
                <div className="walking-times-list">
                  <div className="walking-time">
                    <span className="time-icon">🏖️</span>
                    <span>{house.location.walkingTimes.beach} to beach</span>
                  </div>
                  <div className="walking-time">
                    <span className="time-icon">🧘</span>
                    <span>{house.location.walkingTimes.spa} to spa</span>
                  </div>
                  <div className="walking-time">
                    <span className="time-icon">🚗</span>
                    <span>{house.location.walkingTimes.parking} to parking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Details */}
            <div className="modal-pricing">
              <h4>Pricing</h4>
              <div className="pricing-details">
                <div className="base-price">
                  <span className="price-label">Base Price:</span>
                  <span className="price-value">{house.pricing.currency} {house.pricing.basePrice}/night</span>
                </div>
                {house.pricing.extraGuest && (
                  <div className="extra-guest">
                    <span className="price-label">Extra Guest Fee:</span>
                    <span className="price-value">{house.pricing.currency} {house.pricing.extraGuest}/night</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary">
            {t('house.bookNow')}
          </button>
        </div>

      </div>
    </div>
  )
}

export default HouseModal