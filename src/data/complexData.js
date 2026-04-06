// Villa Complex Data Model
// Central data source for La Vita e Bella Complex with 4 rental houses

export const complexData = {
  // Complex-level information
  complex: {
    name: "La Vita e Bella",
    tagline: "Luxury Villa Complex",
    description: {
      short: "An exclusive luxury villa complex featuring four distinct properties on the stunning Amalfi Coast.",
      long: "Experience unparalleled Mediterranean elegance at La Vita e Bella, an exclusive villa complex perched dramatically on the Amalfi Coast cliffs. Our four carefully curated properties offer breathtaking ocean views, sophisticated Italian design, and world-class amenities, creating unforgettable retreats for discerning guests."
    },
    location: {
      name: "Lozenets, Bulgaria",
      coordinates: {
        lat: 40.6318,
        lng: 14.6026
      },
      nearbyAttractions: ["Positano", "Ravello", "Capri", "Naples"]
    },
    contact: {
      email: "reservations@lavitaebella.com",
      phone: "+39 089 123 4567",
      whatsapp: "+39 089 123 4567"
    },
    // Shared amenities available to all guests
    sharedAmenities: [
      {
        id: "concierge",
        name: "24/7 Concierge Service",
        description: "Dedicated personal concierge available around the clock for restaurant reservations, transportation, and bespoke experience planning.",
        icon: "concierge"
      },
      {
        id: "spa",
        name: "Shared Spa & Wellness Center",
        description: "Professional spa facility with massage rooms, sauna, wellness amenities, and therapists available on request.",
        icon: "spa"
      },
      {
        id: "beachAccess",
        name: "Private Beach Access",
        description: "Exclusive access to secluded private beach with complimentary service, water sports equipment, and seaside dining.",
        icon: "beach"
      },
      {
        id: "chef",
        name: "Private Chef Service",
        description: "Professional chef service available for exceptional dining experiences across all properties.",
        icon: "chef"
      },
      {
        id: "transport",
        name: "Luxury Transportation",
        description: "Private car service and boat transfers available for exploring the Amalfi Coast and nearby attractions.",
        icon: "transport"
      }
    ],
    policies: {
      checkIn: "16:00",
      checkOut: "11:00",
      minimumStay: 3,
      cancellationPolicy: "Free cancellation up to 14 days before arrival",
      petsAllowed: false,
      smokingAllowed: false
    }
  },

  // Individual houses data
  houses: [
    {
      id: "villa-bella",
      name: "Villa Bella",
      shortDescription: "Oceanfront luxury with infinity pool and panoramic views",
      longDescription: "Our flagship villa offers the perfect blend of elegance and comfort. Featuring floor-to-ceiling windows, a stunning infinity pool, and unobstructed ocean views, Villa Bella provides an unforgettable luxury experience.",
      capacity: {
        guests: 8,
        bedrooms: 4,
        bathrooms: 3,
        beds: "4 King, 2 Queen"
      },
      pricing: {
        basePrice: 200,
        currency: "EUR",
        period: "night",
        seasonalRates: {
          lowSeason: 200,
          midSeason: 200,
          highSeason: 200
        },
        extraGuest: 50
      },
      images: {
        main: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        gallery: [
          {
            id: 1,
            url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Bella exterior view",
            category: "exterior"
          },
          {
            id: 2,
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
            alt: "Villa Bella infinity pool",
            category: "pool"
          },
          {
            id: 3,
            url: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Bella master bedroom",
            category: "bedroom"
          },
          {
            id: 4,
            url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Bella living area",
            category: "interior"
          },
          {
            id: 5,
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Bella terrace dining",
            category: "terrace"
          },
          {
            id: 6,
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Bella bathroom",
            category: "bathroom"
          }
        ]
      },
      amenities: [
        {
          id: "infinityPool",
          name: "Infinity Pool",
          description: "Stunning infinity pool overlooking the Mediterranean Sea with integrated spa features and underwater lighting.",
          featured: true
        },
        {
          id: "gourmetKitchen",
          name: "Gourmet Kitchen",
          description: "Professional-grade kitchen with premium appliances and wine cellar.",
          featured: true
        },
        {
          id: "oceanView",
          name: "Panoramic Ocean Views",
          description: "Unobstructed 180-degree views of the Mediterranean coastline.",
          featured: true
        },
        {
          id: "aircon",
          name: "Climate Control",
          description: "Individual climate control in all rooms.",
          featured: false
        }
      ],
      location: {
        position: "Clifftop - Premium location with best views in complex",
        walkingTimes: {
          beach: "5 minutes",
          spa: "2 minutes",
          parking: "1 minute"
        }
      }
    },

    {
      id: "casa-sole",
      name: "Casa Sole",
      shortDescription: "Intimate retreat with private garden and sunset terrace",
      longDescription: "A charming Mediterranean villa perfect for couples or small families. Casa Sole features a private garden, intimate infinity pool, and west-facing terrace ideal for sunset cocktails.",
      capacity: {
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        beds: "3 King, 1 Queen"
      },
      pricing: {
        basePrice: 200,
        currency: "EUR",
        period: "night",
        seasonalRates: {
          lowSeason: 200,
          midSeason: 200,
          highSeason: 200
        },
        extraGuest: 40
      },
      images: {
        main: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        gallery: [
          {
            id: 7,
            url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Sole exterior view",
            category: "exterior"
          },
          {
            id: 8,
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Sole sunset terrace",
            category: "terrace"
          },
          {
            id: 9,
            url: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Sole private garden",
            category: "garden"
          },
          {
            id: 10,
            url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Sole intimate pool",
            category: "pool"
          },
          {
            id: 11,
            url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Sole bedroom",
            category: "bedroom"
          }
        ]
      },
      amenities: [
        {
          id: "sunsetTerrace",
          name: "Sunset Terrace",
          description: "West-facing terrace with panoramic sunset views and outdoor dining area.",
          featured: true
        },
        {
          id: "privateGarden",
          name: "Private Garden",
          description: "Landscaped Mediterranean garden with citrus trees and herb garden.",
          featured: true
        },
        {
          id: "intimatePool",
          name: "Intimate Pool",
          description: "Smaller infinity pool perfect for private relaxation.",
          featured: true
        }
      ],
      location: {
        position: "Garden level - Private and peaceful setting",
        walkingTimes: {
          beach: "7 minutes",
          spa: "3 minutes",
          parking: "2 minutes"
        }
      }
    },

    {
      id: "villa-mare",
      name: "Villa Mare",
      shortDescription: "Beachfront luxury with direct access to private cove",
      longDescription: "The closest to the sea, Villa Mare offers direct beach access and the sound of waves as your constant companion. This beachfront property features glass walls that open completely to merge indoor and outdoor living.",
      capacity: {
        guests: 10,
        bedrooms: 5,
        bathrooms: 4,
        beds: "5 King, 2 Queen"
      },
      pricing: {
        basePrice: 200,
        currency: "EUR",
        period: "night",
        seasonalRates: {
          lowSeason: 200,
          midSeason: 200,
          highSeason: 200
        },
        extraGuest: 60
      },
      images: {
        main: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        gallery: [
          {
            id: 12,
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Mare beachfront view",
            category: "exterior"
          },
          {
            id: 13,
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Mare beach access",
            category: "beach"
          },
          {
            id: 14,
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Mare glass walls open",
            category: "interior"
          },
          {
            id: 15,
            url: "https://images.unsplash.com/photo-1571722804746-fa4ba1a2b7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Mare private cove",
            category: "beach"
          },
          {
            id: 16,
            url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Villa Mare master suite",
            category: "bedroom"
          }
        ]
      },
      amenities: [
        {
          id: "directBeachAccess",
          name: "Direct Beach Access",
          description: "Private path directly to secluded cove with exclusive beach area.",
          featured: true
        },
        {
          id: "openGlassWalls",
          name: "Retractable Glass Walls",
          description: "Floor-to-ceiling glass walls that completely retract for seamless indoor-outdoor living.",
          featured: true
        },
        {
          id: "waterSports",
          name: "Water Sports Equipment",
          description: "Complimentary kayaks, paddleboards, and snorkeling gear.",
          featured: true
        }
      ],
      location: {
        position: "Beachfront - Exclusive beach access and sea-level luxury",
        walkingTimes: {
          beach: "0 minutes",
          spa: "5 minutes",
          parking: "3 minutes"
        }
      }
    },

    {
      id: "casa-vista",
      name: "Casa Vista",
      shortDescription: "Penthouse-style villa with 360-degree panoramic views",
      longDescription: "The highest property in our complex, Casa Vista offers breathtaking 360-degree views of both the coastline and mountains. This penthouse-style villa features a rooftop terrace and is perfect for those seeking ultimate privacy and spectacular vistas.",
      capacity: {
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        beds: "2 King"
      },
      pricing: {
        basePrice: 200,
        currency: "EUR",
        period: "night",
        seasonalRates: {
          lowSeason: 200,
          midSeason: 200,
          highSeason: 200
        },
        extraGuest: 45
      },
      images: {
        main: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
        gallery: [
          {
            id: 17,
            url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
            alt: "Casa Vista panoramic view",
            category: "exterior"
          },
          {
            id: 18,
            url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Vista rooftop terrace",
            category: "terrace"
          },
          {
            id: 19,
            url: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Vista mountain views",
            category: "view"
          },
          {
            id: 20,
            url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Vista private entrance",
            category: "exterior"
          },
          {
            id: 21,
            url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Casa Vista stargazing area",
            category: "terrace"
          }
        ]
      },
      amenities: [
        {
          id: "rooftopTerrace",
          name: "Rooftop Terrace",
          description: "Private rooftop with 360-degree views, outdoor kitchen, and stargazing area.",
          featured: true
        },
        {
          id: "panoramicViews",
          name: "360° Panoramic Views",
          description: "Unparalleled views of coastline, mountains, and surrounding landscape.",
          featured: true
        },
        {
          id: "privacy",
          name: "Ultimate Privacy",
          description: "Most secluded villa in complex with private entrance and maximum privacy.",
          featured: true
        }
      ],
      location: {
        position: "Hilltop - Highest elevation with panoramic views",
        walkingTimes: {
          beach: "8 minutes",
          spa: "4 minutes",
          parking: "1 minute"
        }
      }
    }
  ]
}

// Utility functions for working with the data
export const getHouseById = (houseId) => {
  return complexData.houses.find(house => house.id === houseId)
}

export const getAllHouses = () => {
  return complexData.houses
}

export const getHousesByCapacity = (minGuests) => {
  return complexData.houses.filter(house => house.capacity.guests >= minGuests)
}

export const getHousesByPriceRange = (minPrice, maxPrice) => {
  return complexData.houses.filter(house =>
    house.pricing.basePrice >= minPrice && house.pricing.basePrice <= maxPrice
  )
}

export const getFeaturedAmenities = (houseId) => {
  const house = getHouseById(houseId)
  return house ? house.amenities.filter(amenity => amenity.featured) : []
}

export const getComplexInfo = () => {
  return complexData.complex
}