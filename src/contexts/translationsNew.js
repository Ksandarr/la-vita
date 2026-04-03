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
      cancellation: 'Cancellation Policy'
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
      cancellation: 'Условия за анулиране'
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
          description: 'Зашеметяваща обстановка на Брега Амалфи с множество гледки и достъп'
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

      description: 'Изживейте най-добрия луксозен вилен комплекс на Брега Амалфи. Четири уникални имота, една незабравима дестинация.'
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