// Updated translations for villa complex structure
// Focuses on UI labels and generic content rather than hardcoded villa data

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      houses: 'Our Houses',
      complex: 'The Complex',
      amenities: 'Amenities',
      gallery: 'Gallery',
      contact: 'Contact',
      bookNow: 'Book Now'
    },

    // Complex-level content (displayed for the overall complex)
    complex: {
      welcomeTitle: 'Welcome to {complexName}',
      exploreHouses: 'Explore Our Houses',
      description: 'An exclusive luxury villa complex featuring four distinct properties on the stunning Amalfi Coast.',
      longDescription: 'Experience unparalleled Mediterranean elegance at La Vita e Bella, an exclusive villa complex perched dramatically on the Amalfi Coast cliffs. Our four carefully curated properties offer breathtaking ocean views, sophisticated Italian design, and world-class amenities, creating unforgettable retreats for discerning guests.',
      totalCapacity: 'Total Capacity',
      totalHouses: 'Luxury Houses',
      sharedAmenitiesTitle: 'Shared Amenities',
      locationTitle: 'Prime Location',
      contactTitle: 'Contact Us'
    },

    // House-specific UI labels
    house: {
      // Labels for house details
      guests: 'Guests',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      beds: 'Bed Configuration',
      priceFrom: 'From',
      perNight: 'per night',
      extraGuest: 'Extra guest fee',

      // Actions
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      viewGallery: 'View Gallery',
      checkAvailability: 'Check Availability',

      // Sections
      amenitiesTitle: 'Amenities',
      featuredAmenities: 'Featured Amenities',
      allAmenities: 'All Amenities',
      locationTitle: 'Location & Access',
      galleryTitle: 'Photo Gallery',

      // Walking times
      walkingTimes: {
        toBeach: 'to beach',
        toSpa: 'to spa',
        toParking: 'to parking'
      },

      // Time units
      minutes: 'minutes',

      // Gallery categories
      galleryCategories: {
        all: 'All Photos',
        exterior: 'Exterior',
        interior: 'Interior',
        bedroom: 'Bedrooms',
        bathroom: 'Bathrooms',
        pool: 'Pool & Outdoor',
        terrace: 'Terraces',
        beach: 'Beach Access'
      }
    },

    // Villa-specific data translations
    villas: {
      'villa-bella': {
        shortDescription: 'Oceanfront luxury with infinity pool and panoramic views',
        longDescription: 'Our flagship villa offers the perfect blend of elegance and comfort. Featuring floor-to-ceiling windows, a stunning infinity pool, and unobstructed ocean views, Villa Bella provides an unforgettable luxury experience.',
        position: 'Clifftop - Premium location with best views in complex'
      },
      'casa-sole': {
        shortDescription: 'Mediterranean elegance with private garden and spa access',
        longDescription: 'Casa Sole embodies the warmth of Italian hospitality with its sun-drenched terraces, private garden oasis, and direct spa access. This intimate villa features authentic Mediterranean architecture with modern luxury touches.',
        position: 'Garden level - Private and peaceful setting'
      },
      'villa-mare': {
        shortDescription: 'Exclusive beachfront villa with private beach access',
        longDescription: 'Villa Mare offers the ultimate seaside luxury experience with direct beach access, expansive oceanfront terraces, and panoramic sea views. This prestigious villa features premium amenities and unparalleled coastal living.',
        position: 'Beachfront - Exclusive beach access and sea-level luxury'
      },
      'casa-vista': {
        shortDescription: 'Hilltop retreat with panoramic mountain and sea views',
        longDescription: 'Perched at the highest point of the complex, Casa Vista offers breathtaking 360-degree views of both mountains and sea. This sophisticated villa combines dramatic vistas with refined interior design and premium amenities.',
        position: 'Hilltop - Highest elevation with panoramic views'
      }
    },

    // Amenity translations
    amenities: {
      infinityPool: {
        name: 'Infinity Pool',
        description: 'Stunning infinity pool overlooking the Mediterranean Sea with integrated spa features and underwater lighting.'
      },
      gourmetKitchen: {
        name: 'Gourmet Kitchen',
        description: 'Professional-grade kitchen with premium appliances and wine cellar.'
      },
      oceanView: {
        name: 'Panoramic Ocean Views',
        description: 'Unobstructed 180-degree views of the Mediterranean coastline.'
      },
      privateTerrace: {
        name: 'Private Terrace',
        description: 'Expansive outdoor living space with dining area and panoramic views.'
      },
      airConditioning: {
        name: 'Air Conditioning',
        description: 'Climate-controlled comfort throughout the villa.'
      },
      wifiInternet: {
        name: 'WiFi Internet',
        description: 'High-speed wireless internet throughout the property.'
      },
      smartHome: {
        name: 'Smart Home System',
        description: 'Integrated automation for lighting, climate, and entertainment.'
      },
      securitySystem: {
        name: '24/7 Security',
        description: 'Comprehensive security system with 24-hour monitoring.'
      },
      parkingSpace: {
        name: 'Private Parking',
        description: 'Secure private parking spaces for villa guests.'
      },
      beachAccess: {
        name: 'Beach Access',
        description: 'Direct access to pristine private beach areas.'
      },
      spaAccess: {
        name: 'Spa Access',
        description: 'Exclusive access to luxury spa facilities and treatments.'
      },
      conciergeService: {
        name: 'Concierge Service',
        description: 'Dedicated concierge for personalized guest services.'
      }
    },

    // Booking system
    booking: {
      title: 'Book Your Stay',
      subtitle: 'Reserve your perfect villa experience',

      // Form labels
      selectHouse: 'Select House',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Number of Guests',

      // Personal details
      personalDetails: 'Personal Details',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      specialRequests: 'Special Requests',
      specialRequestsPlaceholder: 'Any special requests or dietary requirements...',

      // Booking summary
      bookingSummary: 'Booking Summary',
      selectedHouse: 'Selected House',
      dates: 'Dates',
      duration: 'Duration',
      nights: 'nights',
      basePrice: 'Base Price',
      extraFees: 'Extra Fees',
      total: 'Total',

      // Actions
      submitBooking: 'Submit Booking Request',
      modifySearch: 'Modify Search',

      // Policies
      policies: 'Booking Policies',
      minimumStay: 'Minimum stay',
      checkInTime: 'Check-in',
      checkOutTime: 'Check-out',
      cancellation: 'Cancellation Policy',

      // Booking highlights
      highlights: {
        instantConfirmation: {
          title: 'Instant Confirmation',
          description: 'Quick response within 24 hours'
        },
        flexibleDates: {
          title: 'Flexible Dates',
          description: '3-night minimum stay required'
        },
        bestRate: {
          title: 'Best Rate Guarantee',
          description: 'Competitive pricing with no hidden fees'
        }
      }
    },

    // Search and filters
    search: {
      title: 'Find Your Perfect Villa',
      filters: 'Filter Houses',
      priceRange: 'Price Range',
      capacity: 'Guest Capacity',
      amenities: 'Amenities',
      clearFilters: 'Clear All',
      applyFilters: 'Apply Filters',
      results: 'houses found',
      noResults: 'No houses match your criteria',
      sortBy: 'Sort by',
      sortOptions: {
        price_low: 'Price: Low to High',
        price_high: 'Price: High to Low',
        capacity_high: 'Capacity: High to Low',
        name: 'Name: A to Z'
      },
      filters: {
        allHouses: 'All Houses',
        couples: 'Couples & Small Groups',
        families: 'Families & Large Groups',
        premium: 'Premium Properties'
      }
    },

    // Feature highlights
    features: {
      title: 'Why Choose {complexName}',
      subtitle: 'Experience luxury across our collection of unique properties',

      highlights: {
        variety: {
          title: 'Four Unique Properties',
          description: 'Each house offers distinct character, amenities, and experiences'
        },
        location: {
          title: 'Premium Coastal Location',
          description: 'Stunning Amalfi Coast setting with multiple perspectives and access points'
        },
        service: {
          title: 'Unparalleled Service',
          description: 'Dedicated concierge and comprehensive guest services across all properties'
        },
        flexibility: {
          title: 'Flexible Accommodations',
          description: 'From intimate couples retreats to large family gatherings'
        }
      }
    },

    // Testimonials
    testimonials: {
      title: 'Guest Experiences',
      subtitle: 'What our guests say about staying at {complexName}',

      // Generic testimonial structure - specific content comes from data
      author: 'Guest',
      verified: 'Verified Guest',
      stayedAt: 'Stayed at',
      stayDuration: 'for {nights} nights'
    },

    // Common UI elements
    ui: {
      loading: 'Loading...',
      error: 'Something went wrong',
      retry: 'Try Again',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      select: 'Select',
      confirm: 'Confirm',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      share: 'Share',
      favorite: 'Add to Favorites',

      // Status messages
      success: 'Success!',
      bookingSubmitted: 'Your booking request has been submitted',
      inquirySent: 'Your inquiry has been sent',

      // Time and dates
      today: 'Today',
      tomorrow: 'Tomorrow',
      selectDate: 'Select date',
      selectDates: 'Select dates',
      nights: 'nights',
      night: 'night'
    },

    // Footer
    footer: {
      aboutComplex: 'About {complexName}',
      quickLinks: 'Quick Links',
      contact: 'Contact Information',
      followUs: 'Follow Us',

      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        sitemap: 'Sitemap',
        accessibility: 'Accessibility'
      },

      copyright: '© 2024 {complexName} Luxury Villa Complex. All rights reserved.',

      description: 'Experience the finest luxury villa complex on the Amalfi Coast. Four unique properties, one unforgettable destination.'
    }
  },

  bg: {
    // Navigation (Bulgarian)
    nav: {
      home: 'Начало',
      houses: 'Нашите Вили',
      complex: 'Комплексът',
      amenities: 'Удобства',
      gallery: 'Галерия',
      contact: 'Връзка',
      bookNow: 'Резервация'
    },

    // Complex-level content
    complex: {
      welcomeTitle: 'Добре дошли в {complexName}',
      exploreHouses: 'Разгледайте нашите вили',
      description: 'Ексклузивен луксозен вилен комплекс с четири отличителни имота на зашеметяващия курорт Лозенец.',
      longDescription: 'Изживейте несравнима средиземноморска елегантност в La Vita e Bella, ексклузивен вилен комплекс разположен драматично на скалите на курорт Лозенец. Нашите четири внимателно подбрани имота предлагат спиращи дъха морски гледки, изискан дизайн и удобства от световна класа, създавайки незабравими убежища за взискателни гости.',
      totalCapacity: 'Общ капацитет',
      totalHouses: 'Луксозни вили',
      sharedAmenitiesTitle: 'Споделени удобства',
      locationTitle: 'Отлично местоположение',
      contactTitle: 'Свържете се с нас'
    },

    // House-specific UI labels
    house: {
      guests: 'Гости',
      bedrooms: 'Спални',
      bathrooms: 'Бани',
      beds: 'Конфигурация на леглата',
      priceFrom: 'От',
      perNight: 'на нощ',
      extraGuest: 'Такса за допълнителен гост',

      viewDetails: 'Детайли',
      bookNow: 'Резервация',
      viewGallery: 'Галерия',
      checkAvailability: 'Проверете наличността',

      amenitiesTitle: 'Удобства',
      featuredAmenities: 'Основни удобства',
      allAmenities: 'Всички удобства',
      locationTitle: 'Местоположение и достъп',
      galleryTitle: 'Фото галерия',

      // Walking times
      walkingTimes: {
        toBeach: 'до плажа',
        toSpa: 'до спа',
        toParking: 'до паркинга'
      },

      // Time units
      minutes: 'минути',

      galleryCategories: {
        all: 'Всички снимки',
        exterior: 'Екстериор',
        interior: 'Интериор',
        bedroom: 'Спални',
        bathroom: 'Бани',
        pool: 'Басейн и двор',
        terrace: 'Тераси',
        beach: 'Плажен достъп'
      }
    },

    // Villa-specific data translations
    villas: {
      'villa-bella': {
        shortDescription: 'Крайбрежен лукс с инфинити басейн и панорамни гледки',
        longDescription: 'Нашата водеща вила предлага перфектното съчетание от елегантност и комфорт. С прозорци от пода до тавана, зашеметяващ инфинити басейн и безпрепятствени гледки към морето, Villa Bella осигурява незабравимо луксозно изживяване.',
        position: 'На скала - Премиум местоположение с най-добри гледки в комплекса'
      },
      'casa-sole': {
        shortDescription: 'Средиземноморска елегантност с частна градина и достъп до спа',
        longDescription: 'Casa Sole въплъщава топлотата на италианското гостоприемство с озарените от слънце тераси, частната градинска оазис и директен достъп до спа. Тази интимна вила се отличава с автентична средиземноморска архитектура и модерни луксозни акценти.',
        position: 'На нивото на градината - Частно и спокойно място'
      },
      'villa-mare': {
        shortDescription: 'Ексклузивна крайбрежна вила с частен плажен достъп',
        longDescription: 'Villa Mare предлага най-доброто крайморско луксозно изживяване с директен плажен достъп, обширни крайморски тераси и панорамни морски гледки. Тази престижна вила се отличава с премиум удобства и несравнимо крайбрежно живеене.',
        position: 'На плажа - Ексклузивен плажен достъп и лукс на морското равнище'
      },
      'casa-vista': {
        shortDescription: 'Хълмисто убежище с панорамни планински и морски гледки',
        longDescription: 'Разположена на най-високата точка от комплекса, Casa Vista предлага спиращи дъха 360-градусови гледки към планините и морето. Тази изискана вила съчетава драматични панорами с изтънчен интериорен дизайн и премиум удобства.',
        position: 'На хълма - Най-високо разположение с панорамни гледки'
      }
    },

    // Amenity translations
    amenities: {
      infinityPool: {
        name: 'Инфинити басейн',
        description: 'Зашеметяващ инфинити басейн с гледка към Средиземно море с интегрирани спа функции и подводно осветление.'
      },
      gourmetKitchen: {
        name: 'Гурме кухня',
        description: 'Професионална кухня с премиум уреди и винена изба.'
      },
      oceanView: {
        name: 'Панорамни морски гледки',
        description: 'Безпрепятствени 180-градусови гледки към средиземноморския бряг.'
      },
      privateTerrace: {
        name: 'Частна тераса',
        description: 'Обширно външно жилищно пространство с трапезария и панорамни гледки.'
      },
      airConditioning: {
        name: 'Климатик',
        description: 'Контролиран климат за комфорт в цялата вила.'
      },
      wifiInternet: {
        name: 'WiFi интернет',
        description: 'Високоскоростен безжичен интернет в целия имот.'
      },
      smartHome: {
        name: 'Умен дом система',
        description: 'Интегрирана автоматизация за осветление, климат и развлечения.'
      },
      securitySystem: {
        name: '24/7 охрана',
        description: 'Цялостна охранителна система с 24-часово наблюдение.'
      },
      parkingSpace: {
        name: 'Частен паркинг',
        description: 'Охранявани частни паркоместа за гостите на вилата.'
      },
      beachAccess: {
        name: 'Плажен достъп',
        description: 'Директен достъп до девствени частни плажни зони.'
      },
      spaAccess: {
        name: 'Спа достъп',
        description: 'Ексклузивен достъп до луксозни спа съоръжения и процедури.'
      },
      conciergeService: {
        name: 'Консиерж услуги',
        description: 'Посветен консиерж за персонализирани гостови услуги.'
      }
    },

    // Booking system
    booking: {
      title: 'Резервирайте престоя си',
      subtitle: 'Резервирайте вашето перфектно вила изживяване',

      selectHouse: 'Изберете вила',
      checkIn: 'Настаняване',
      checkOut: 'Освобождаване',
      guests: 'Брой гости',

      personalDetails: 'Лични данни',
      firstName: 'Име',
      lastName: 'Фамилия',
      email: 'Имейл адрес',
      phone: 'Телефон',
      specialRequests: 'Специални заявки',
      specialRequestsPlaceholder: 'Специални заявки или диетични изисквания...',

      bookingSummary: 'Резюме на резервацията',
      selectedHouse: 'Избрана вила',
      dates: 'Дати',
      duration: 'Продължителност',
      nights: 'нощи',
      basePrice: 'Основна цена',
      extraFees: 'Допълнителни такси',
      total: 'Общо',

      submitBooking: 'Изпратете заявка за резервация',
      modifySearch: 'Променете търсенето',

      policies: 'Условия за резервация',
      minimumStay: 'Минимален престой',
      checkInTime: 'Настаняване',
      checkOutTime: 'Освобождаване',
      cancellation: 'Условия за анулиране',

      // Booking highlights
      highlights: {
        instantConfirmation: {
          title: 'Незабавно потвърждение',
          description: 'Бърз отговор в рамките на 24 часа'
        },
        flexibleDates: {
          title: 'Гъвкави дати',
          description: 'Изисква се минимум 3-нощен престой'
        },
        bestRate: {
          title: 'Гаранция за най-добра цена',
          description: 'Конкурентни цени без скрити такси'
        }
      }
    },

    // Search and filters
    search: {
      title: 'Намерете вашата перфектна вила',
      filters: 'Филтър за вили',
      priceRange: 'Ценова категория',
      capacity: 'Капацитет на гостите',
      amenities: 'Удобства',
      clearFilters: 'Изчисти всички',
      applyFilters: 'Приложи филтри',
      results: 'намерени вили',
      noResults: 'Няма вили, отговарящи на критериите',
      sortBy: 'Сортиране по',
      sortOptions: {
        price_low: 'Цена: Ниска към висока',
        price_high: 'Цена: Висока към ниска',
        capacity_high: 'Капацитет: Висок към нисък',
        name: 'Име: А до Я'
      },
      filters: {
        allHouses: 'Всички вили',
        couples: 'Двойки и малки групи',
        families: 'Семейства и големи групи',
        premium: 'Премиум имоти'
      }
    },

    // Feature highlights
    features: {
      title: 'Защо да изберете {complexName}',
      subtitle: 'Изживейте лукс в нашата колекция от уникални имоти',

      highlights: {
        variety: {
          title: 'Четири уникални имота',
          description: 'Всяка вила предлага отличителен характер, удобства и изживявания'
        },
        location: {
          title: 'Премиум крайбрежно местоположение',
          description: 'Зашеметяваща обстановка на Лозенец с множество гледки и достъп'
        },
        service: {
          title: 'Несравнимо обслужване',
          description: 'Посветен консиерж и цялостни гостови услуги във всички имоти'
        },
        flexibility: {
          title: 'Гъвкаво настаняване',
          description: 'От интимни убежища за двойки до големи семейни събирания'
        }
      }
    },

    // Testimonials
    testimonials: {
      title: 'Гостови преживявания',
      subtitle: 'Какво казват нашите гости за престоя в {complexName}',

      author: 'Гост',
      verified: 'Потвърден гост',
      stayedAt: 'Отсядал в',
      stayDuration: 'за {nights} нощи'
    },

    // Common UI elements
    ui: {
      loading: 'Зарежда...',
      error: 'Възникна грешка',
      retry: 'Опитайте отново',
      close: 'Затвори',
      next: 'Следващ',
      previous: 'Предишен',
      select: 'Избери',
      confirm: 'Потвърди',
      cancel: 'Отказ',
      save: 'Запази',
      edit: 'Редактирай',
      delete: 'Изтрий',
      share: 'Сподели',
      favorite: 'Добави в любими',

      success: 'Успешно!',
      bookingSubmitted: 'Вашата заявка за резервация е изпратена',
      inquirySent: 'Вашето запитване е изпратено',

      today: 'Днес',
      tomorrow: 'Утре',
      selectDate: 'Изберете дата',
      selectDates: 'Изберете дати',
      nights: 'нощи',
      night: 'нощ'
    },

    // Footer
    footer: {
      aboutComplex: 'За {complexName}',
      quickLinks: 'Бързи връзки',
      contact: 'Информация за контакт',
      followUs: 'Последвайте ни',

      links: {
        privacy: 'Политика за поверителност',
        terms: 'Общи условия',
        sitemap: 'Карта на сайта',
        accessibility: 'Достъпност'
      },

      copyright: '© 2024 {complexName} Луксозен вилен комплекс. Всички права запазени.',

      description: 'Изживейте най-добрия луксозен вилен комплекс на Лозенец. Четири уникални имота, една незабравима дестинация.'
    }
  }
}

// Helper function to replace placeholders in translations
export const interpolateTranslation = (text, variables = {}) => {
  if (!text) return text

  return Object.keys(variables).reduce((result, key) => {
    const placeholder = `{${key}}`
    return result.replace(new RegExp(placeholder, 'g'), variables[key])
  }, text)
}