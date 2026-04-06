import React from 'react'
import './ScrollToTopButton.css'

const ScrollToTopButton = ({ isVisible, onClick }) => {
  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
      aria-label="Scroll to top"
      type="button"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 14L12 9L7 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default ScrollToTopButton