import { useState } from 'react'
import { useLanguage } from '../contexts/useLanguage'
import './VillaGallery.css'

const VillaGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { t } = useLanguage()

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Villa La Vita e Bella exterior view",
      category: t('exterior')
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      alt: "Luxury living room with ocean view",
      category: t('interior')
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Master bedroom suite",
      category: t('bedroomsCategory')
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Infinity pool with ocean view",
      category: t('poolOutdoor')
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Dining area with panoramic views",
      category: t('interior')
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      alt: "Outdoor terrace and entertainment area",
      category: t('poolOutdoor')
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Luxury bathroom with marble finishes",
      category: t('bathroomsCategory')
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Gourmet kitchen with modern appliances",
      category: t('interior')
    }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <section className="villa-gallery section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('villaGalleryTitle')}</h2>
          <p className="section-description">
            {t('villaGalleryDescription')}
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item ${index === 0 ? 'featured' : ''}`}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-category">{image.category}</div>
                <div className="gallery-zoom">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-stats">
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>

            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="15,18 9,12 15,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9,18 15,12 9,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image"
            />

            <div className="lightbox-info">
              <div className="lightbox-category">{selectedImage.category}</div>
              <div className="lightbox-title">{selectedImage.alt}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VillaGallery