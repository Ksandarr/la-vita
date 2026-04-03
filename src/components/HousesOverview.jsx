import { useState } from 'react'
import { useLanguage } from '../contexts/useLanguage'
import { useData } from '../contexts/useData'
import HouseModal from './HouseModal'
import './HousesOverview.css'

const HousesOverview = () => {
  const { t } = useLanguage()
  const { complex, houses, selectedHouseId, setSelectedHouseId } = useData()
  const [activeFilter, setActiveFilter] = useState('all')
  const [modalHouse, setModalHouse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (house) => {
    setModalHouse(house)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalHouse(null)
  }

  const handleBookNow = (house) => {
    // Set the selected house
    setSelectedHouseId(house.id)

    // Scroll to booking section
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const getFilteredHouses = () => {
    if (activeFilter === 'all') return houses

    switch (activeFilter) {
      case 'couples':
        return houses.filter(house => house.capacity.guests <= 6)
      case 'families':
        return houses.filter(house => house.capacity.guests >= 8)
      case 'luxury':
        return houses.filter(house => house.pricing.basePrice >= 1000)
      default:
        return houses
    }
  }

  const filteredHouses = getFilteredHouses()

  return (
    <section className="houses-overview section" id="details">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            {t('complex.exploreHouses')}
          </h2>
          <p className="section-subtitle">
            {complex.description.short}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Houses ({houses.length})
          </button>
          <button
            className={`filter-tab ${activeFilter === 'couples' ? 'active' : ''}`}
            onClick={() => setActiveFilter('couples')}
          >
            Couples & Small Groups
          </button>
          <button
            className={`filter-tab ${activeFilter === 'families' ? 'active' : ''}`}
            onClick={() => setActiveFilter('families')}
          >
            Families & Large Groups
          </button>
          <button
            className={`filter-tab ${activeFilter === 'luxury' ? 'active' : ''}`}
            onClick={() => setActiveFilter('luxury')}
          >
            Premium Properties
          </button>
        </div>

        {/* Houses Grid */}
        <div className="houses-grid">
          {filteredHouses.map((house) => (
            <div
              key={house.id}
              className={`house-card ${selectedHouseId === house.id ? 'selected' : ''}`}
              onClick={() => setSelectedHouseId(house.id)}
            >
              {/* House Image */}
              <div className="house-image">
                <img
                  src={house.images.main}
                  alt={house.name}
                  loading="lazy"
                />
                <div className="house-badge">
                  {house.pricing.currency} {house.pricing.basePrice}
                  <span>/{t('house.perNight')}</span>
                </div>
              </div>

              {/* House Content */}
              <div className="house-content">
                <div className="house-header">
                  <h3 className="house-title">{house.name}</h3>
                  <p className="house-location">{house.location.position}</p>
                </div>

                <p className="house-description">{house.shortDescription}</p>

                {/* House Stats */}
                <div className="house-stats">
                  <div className="stat">
                    <span className="stat-value">{house.capacity.guests}</span>
                    <span className="stat-label">{t('house.guests')}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{house.capacity.bedrooms}</span>
                    <span className="stat-label">{t('house.bedrooms')}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{house.capacity.bathrooms}</span>
                    <span className="stat-label">{t('house.bathrooms')}</span>
                  </div>
                </div>

                {/* Featured Amenities */}
                <div className="featured-amenities">
                  {house.amenities
                    .filter(amenity => amenity.featured)
                    .slice(0, 3)
                    .map((amenity) => (
                      <span key={amenity.id} className="amenity-tag">
                        {amenity.name}
                      </span>
                    ))
                  }
                </div>

                {/* Walking Times */}
                <div className="walking-times">
                  <div className="walking-time">
                    <span className="time-icon">🏖️</span>
                    <span>{house.location.walkingTimes.beach} to beach</span>
                  </div>
                  <div className="walking-time">
                    <span className="time-icon">🧘</span>
                    <span>{house.location.walkingTimes.spa} to spa</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="house-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(house)
                    }}
                  >
                    {t('house.viewDetails')}
                  </button>
                  <button
                    className="btn btn-primary btn-small"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleBookNow(house)
                    }}
                  >
                    {t('house.bookNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected House Details */}
        {selectedHouseId && (
          <div className="selected-house-details">
            <div className="detail-content">
              <div className="detail-text">
                <h3>About {houses.find(h => h.id === selectedHouseId)?.name}</h3>
                <p>{houses.find(h => h.id === selectedHouseId)?.longDescription}</p>

                <div className="detail-amenities">
                  <h4>{t('house.featuredAmenities')}</h4>
                  <div className="amenities-list">
                    {houses.find(h => h.id === selectedHouseId)?.amenities
                      .filter(amenity => amenity.featured)
                      .map((amenity) => (
                        <div key={amenity.id} className="amenity-item">
                          <strong>{amenity.name}</strong>
                          <span>{amenity.description}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>

              <div className="detail-image">
                <img
                  src={houses.find(h => h.id === selectedHouseId)?.images.main}
                  alt={houses.find(h => h.id === selectedHouseId)?.name}
                />
              </div>
            </div>
          </div>
        )}

        {/* Complex Stats */}
        <div className="complex-stats">
          <div className="complex-stat">
            <div className="stat-number">{houses.length}</div>
            <div className="stat-label">Unique Properties</div>
          </div>
          <div className="complex-stat">
            <div className="stat-number">{houses.reduce((sum, house) => sum + house.capacity.guests, 0)}</div>
            <div className="stat-label">Total Guest Capacity</div>
          </div>
          <div className="complex-stat">
            <div className="stat-number">{Math.min(...houses.map(h => h.pricing.basePrice))}-{Math.max(...houses.map(h => h.pricing.basePrice))}</div>
            <div className="stat-label">Price Range (EUR)</div>
          </div>
          <div className="complex-stat">
            <div className="stat-number">{complex.sharedAmenities.length}</div>
            <div className="stat-label">Shared Amenities</div>
          </div>
        </div>
      </div>

      {/* House Details Modal */}
      <HouseModal
        house={modalHouse}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default HousesOverview