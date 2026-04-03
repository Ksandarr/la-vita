# La Vita e Bella - Luxury Villa Rentals

A modern, responsive React website for luxury villa rentals featuring elegant design, smooth animations, and comprehensive villa showcase functionality.

## Features

- **Modern React Architecture**: Built with React 18, functional components, and hooks
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Luxury Design Aesthetic**: Clean, modern design with blue color scheme (#146ef5, rgb(67, 83, 255))
- **Interactive Components**: Smooth hover effects, transitions, and animations
- **Villa Showcase**: Grid-based villa cards with detailed information and imagery
- **Fixed Navigation**: Smooth scrolling navigation with backdrop blur effect
- **Features Section**: Highlighting key services and amenities
- **Customer Testimonials**: Social proof with guest reviews
- **Multi-column Footer**: Comprehensive footer with links and contact information

## Technology Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Fast development build tool
- **CSS3** - Modern CSS with custom properties, Grid, and Flexbox
- **Google Fonts** - Inter and Roboto Mono typography
- **Unsplash Images** - High-quality placeholder villa images

## Design System

### Color Palette
- Primary Blue: `#146ef5`
- Secondary Blue: `rgb(67, 83, 255)`
- White: `#ffffff`
- Text Primary: `#1a1a1a`
- Text Secondary: `#666666`

### Typography
- Primary Font: Inter (weights 300-700)
- Monospace Font: Roboto Mono (weights 400-600)
- Font smoothing: `-webkit-font-smoothing: antialiased`

### Layout
- Container max-width: 1200px
- Section padding: 5rem vertical
- Responsive breakpoints: 1024px, 768px, 480px

## Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Fixed navigation with mobile menu
│   ├── Header.css
│   ├── Hero.jsx            # Hero section with CTA buttons
│   ├── Hero.css
│   ├── VillaShowcase.jsx   # Villa grid with interactive cards
│   ├── VillaShowcase.css
│   ├── Features.jsx        # Services and testimonials
│   ├── Features.css
│   ├── Footer.jsx          # Multi-column footer
│   └── Footer.css
├── App.jsx                 # Main application component
├── App.css                 # Global app styles
└── index.css               # Global CSS variables and utilities
```

## Key Components

### Header
- Fixed position with backdrop blur
- Mobile-responsive hamburger menu
- Smooth hover effects on navigation links
- Logo with modern typography

### Hero Section
- Full-viewport height with background image
- Overlay gradient for text readability
- Call-to-action buttons
- Statistics showcase
- Scroll indicator with animation

### Villa Showcase
- CSS Grid layout with responsive columns
- Interactive villa cards with hover effects
- Image scaling on hover
- Detailed villa information (guests, bedrooms, bathrooms)
- Amenities tags
- Pricing display

### Features Section
- Service highlights with icons
- Customer testimonials
- Hover animations and effects
- Grid-based responsive layout

### Footer
- Multi-column layout
- Social media links
- Newsletter signup
- Contact information
- Legal links

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd la-vita
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Replacing Villa Images

To replace the placeholder villa images:

1. Add your villa images to the `src/assets/images/` directory
2. Update the image URLs in `VillaShowcase.jsx`
3. Ensure images are optimized for web (recommended: 800x600px, WebP format)

### Updating Villa Data

Edit the `villas` array in `src/components/VillaShowcase.jsx` to add/modify villa information:

```javascript
const villas = [
  {
    id: 1,
    name: "Your Villa Name",
    location: "City, Country",
    image: "your-image-url.jpg",
    price: "$XXX",
    // ... other properties
  }
]
```

### Color Scheme Customization

Update CSS custom properties in `src/index.css`:

```css
:root {
  --primary-blue: #146ef5;
  --primary-blue-dark: rgb(67, 83, 255);
  /* ... other variables */
}
```

### Contact Information

Update contact details in `src/components/Footer.jsx`:

- Address
- Phone number
- Email
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- CSS Grid and Flexbox for efficient layouts
- Modern CSS transitions and transforms
- Optimized images with lazy loading
- Minimal bundle size with Vite
- Responsive images for different screen sizes

## Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team or open an issue in the project repository.