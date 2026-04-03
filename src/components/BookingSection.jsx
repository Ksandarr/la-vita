import { useState } from 'react'
import { useLanguage } from '../contexts/useLanguage'
import './BookingSection.css'

const BookingSection = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Booking inquiry submitted:', formData)
    // You can add actual booking logic here
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const timeDiff = checkOut.getTime() - checkIn.getTime()
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24))
      return nights > 0 ? nights : 0
    }
    return 0
  }

  const nights = calculateNights()
  const pricePerNight = 950
  const totalPrice = nights * pricePerNight

  return (
    <section className="booking-section section" id="booking">
      <div className="container">
        <div className="booking-content">
          <div className="booking-info">
            <h2 className="section-title">{t('reserveVillaTitle')}</h2>
            <p className="booking-description">
              {t('bookingDescription')}
            </p>

            <div className="booking-highlights">
              <div className="highlight">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4900 2.02168 11.3363C2.16356 9.18258 2.99721 7.13677 4.39828 5.49707C5.79935 3.85736 7.69279 2.71548 9.79619 2.24817C11.8996 1.78087 14.1003 1.01604 16.07 2.00004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>{t('instantConfirmation')}</h4>
                  <p>{t('instantConfirmationDesc')}</p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4>{t('flexibleDates')}</h4>
                  <p>{t('flexibleDatesDesc')}</p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>{t('bestRateGuarantee')}</h4>
                  <p>{t('bestRateGuaranteeDesc')}</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <h3>{t('contactInformation')}</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44818 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59553 1.99523 8.06831 2.16708 8.43371 2.48353C8.79912 2.79999 9.02793 3.23945 9.08999 3.72C9.20685 4.68007 9.42455 5.62273 9.72999 6.53C9.86062 6.88792 9.8939 7.27691 9.8289 7.65088C9.76391 8.02485 9.60278 8.37205 9.35999 8.65L8.08999 9.92C9.51355 12.4135 11.5865 14.4864 14.08 15.91L15.35 14.64C15.6279 14.3972 15.9751 14.2361 16.3491 14.1711C16.7231 14.1061 17.1121 14.1394 17.47 14.27C18.3773 14.5755 19.3199 14.7932 20.28 14.91C20.7658 14.9721 21.2094 15.2009 21.5265 15.5689C21.8437 15.9368 22.0122 16.4148 21.9999 16.9L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+39 089 123 4567</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>info@villalaviata.com</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Amalfi Coast, Italy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-container">
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-header">
                <h3>{t('bookYourStayTitle')}</h3>
                <div className="price-display">
                  <span className="price">€{pricePerNight}</span>
                  <span className="period">per night</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn">{t('checkIn')}</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOut">{t('checkOut')}</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">{t('numberOfGuests')}</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                >
                  <option value="1">{t('guestOptions.1')}</option>
                  <option value="2">{t('guestOptions.2')}</option>
                  <option value="3">{t('guestOptions.3')}</option>
                  <option value="4">{t('guestOptions.4')}</option>
                  <option value="5">{t('guestOptions.5')}</option>
                  <option value="6">{t('guestOptions.6')}</option>
                  <option value="7">{t('guestOptions.7')}</option>
                  <option value="8">{t('guestOptions.8')}</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('fullName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('emailAddress')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('phoneNumber')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('specialRequests')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('specialRequestsPlaceholder')}
                ></textarea>
              </div>

              {nights > 0 && (
                <div className="booking-summary">
                  <div className="summary-row">
                    <span>€{pricePerNight} × {nights} {t('nights')}</span>
                    <span>€{totalPrice}</span>
                  </div>
                  <div className="summary-row total">
                    <span>{t('total')}</span>
                    <span>€{totalPrice}</span>
                  </div>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-large booking-submit">
                {t('submitInquiry')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection