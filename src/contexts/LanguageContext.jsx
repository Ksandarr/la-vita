import React, { useState } from 'react'
import { LanguageContext } from './context'
import { translations } from './translations'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bg') // Default to Bulgarian

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bg' : 'en')
  }

  const t = (key) => {
    const keys = key.split('.')
    let translation = translations[language]

    for (const k of keys) {
      if (translation && typeof translation === 'object') {
        translation = translation[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return translation || key
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}