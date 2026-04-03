import './VillaShowcase.css'

const VillaShowcase = () => {
  const villas = [
    {
      id: 1,
      name: "Ocean Breeze Villa",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "$850",
      period: "night",
      guests: 8,
      bedrooms: 4,
      bathrooms: 2,
      amenities: ["Private Pool", "Ocean View", "Chef Service", "WiFi"],
      description: "Stunning oceanfront villa with panoramic views of the Aegean Sea. Features infinity pool and private beach access."
    },
    {
      id: 2,
      name: "Mountain Retreat Villa",
      location: "Aspen, Colorado",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "$1,200",
      period: "night",
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      amenities: ["Ski Access", "Hot Tub", "Fireplace", "Mountain Views"],
      description: "Luxurious mountain villa with ski-in/ski-out access and breathtaking alpine views. Perfect for winter getaways."
    },
    {
      id: 3,
      name: "Tropical Paradise Villa",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      price: "$650",
      period: "night",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Private Pool", "Garden", "Spa", "Cultural Tours"],
      description: "Traditional Balinese villa surrounded by lush tropical gardens. Includes private spa and cultural experience packages."
    },
    {
      id: 4,
      name: "Coastal Elegance Villa",
      location: "Lozenets, Bulgaria",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "$950",
      period: "night",
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["Cliff View", "Private Terrace", "Wine Cellar", "Boat Access"],
      description: "Elegant villa perched on the dramatic cliffs of the Amalfi Coast with stunning Mediterranean views and private boat access."
    },
    {
      id: 5,
      name: "Desert Oasis Villa",
      location: "Scottsdale, Arizona",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      price: "$750",
      period: "night",
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["Desert Views", "Golf Access", "Pool & Spa", "Outdoor Kitchen"],
      description: "Modern desert villa with stunning sunset views and championship golf course access. Features extensive outdoor living spaces."
    },
    {
      id: 6,
      name: "Lake House Villa",
      location: "Lake Como, Italy",
      image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "$1,100",
      period: "night",
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      amenities: ["Lake Access", "Boat Dock", "Garden", "Historic Charm"],
      description: "Historic villa on the shores of Lake Como with private dock and meticulously maintained gardens. Rich in Italian heritage."
    }
  ]

  return (
    <section className="villa-showcase section" id="villas">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Villas</h2>
          <p className="section-description">
            Discover our handpicked collection of luxury villas, each offering unique experiences
            and world-class amenities in the most sought-after destinations.
          </p>
        </div>

        <div className="villas-grid">
          {villas.map((villa) => (
            <div key={villa.id} className="villa-card">
              <div className="villa-image-container">
                <img
                  src={villa.image}
                  alt={`${villa.name} - ${villa.location}`}
                  className="villa-image"
                />
                <div className="villa-overlay">
                  <button className="villa-favorite">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.509 2.9987 7.05 2.9987C5.591 2.9987 4.1917 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.5487 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.12087 20.84 4.61V4.61Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="villa-quick-view">
                    <span>Quick View</span>
                  </div>
                </div>
              </div>

              <div className="villa-content">
                <div className="villa-header">
                  <h3 className="villa-name">{villa.name}</h3>
                  <div className="villa-location">
                    <svg
                      width="16"
                      height="16"
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
                    <span>{villa.location}</span>
                  </div>
                </div>

                <p className="villa-description">{villa.description}</p>

                <div className="villa-details">
                  <div className="villa-detail">
                    <span className="detail-value">{villa.guests}</span>
                    <span className="detail-label">Guests</span>
                  </div>
                  <div className="villa-detail">
                    <span className="detail-value">{villa.bedrooms}</span>
                    <span className="detail-label">Bedrooms</span>
                  </div>
                  <div className="villa-detail">
                    <span className="detail-value">{villa.bathrooms}</span>
                    <span className="detail-label">Bathrooms</span>
                  </div>
                </div>

                <div className="villa-amenities">
                  {villa.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="amenity-tag">
                      {amenity}
                    </span>
                  ))}
                  {villa.amenities.length > 3 && (
                    <span className="amenity-tag more">
                      +{villa.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="villa-footer">
                  <div className="villa-price">
                    <span className="price">{villa.price}</span>
                    <span className="period">/{villa.period}</span>
                  </div>
                  <button className="btn btn-primary villa-book-btn">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="showcase-actions">
          <a href="#all-villas" className="btn btn-secondary">
            View All Villas
          </a>
        </div>
      </div>
    </section>
  )
}

export default VillaShowcase