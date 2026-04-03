import React, { createContext, useState } from 'react'
import { complexData, getHouseById, getAllHouses, getComplexInfo } from '../data/complexData'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  // State for currently selected house (for detailed views)
  const [selectedHouseId, setSelectedHouseId] = useState('villa-bella') // Default to first house

  // State for booking/filtering preferences
  const [searchFilters, setSearchFilters] = useState({
    guests: 2,
    checkIn: null,
    checkOut: null,
    priceRange: [0, 2000]
  })

  // Get complex information
  const complex = getComplexInfo()

  // Get all houses
  const houses = getAllHouses()

  // Get currently selected house
  const selectedHouse = getHouseById(selectedHouseId)

  // Filter houses based on current search criteria
  const getFilteredHouses = () => {
    return houses.filter(house => {
      const meetsGuestRequirement = house.capacity.guests >= searchFilters.guests
      const meetsPriceRange = house.pricing.basePrice >= searchFilters.priceRange[0] &&
                             house.pricing.basePrice <= searchFilters.priceRange[1]
      return meetsGuestRequirement && meetsPriceRange
    })
  }

  // Calculate total capacity across all houses
  const getTotalComplexCapacity = () => {
    return houses.reduce((total, house) => total + house.capacity.guests, 0)
  }

  // Get price range across all houses
  const getPriceRange = () => {
    const prices = houses.map(house => house.pricing.basePrice)
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    }
  }

  // Get all unique amenities across all houses
  const getAllAmenities = () => {
    const allAmenities = houses.flatMap(house => house.amenities)
    const uniqueAmenities = allAmenities.reduce((acc, amenity) => {
      if (!acc.find(item => item.id === amenity.id)) {
        acc.push(amenity)
      }
      return acc
    }, [])
    return uniqueAmenities
  }

  // Calculate availability and pricing for date range
  const calculateStayDetails = (houseId, checkIn, checkOut, guests) => {
    const house = getHouseById(houseId)
    if (!house || !checkIn || !checkOut) return null

    const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
    const baseTotal = house.pricing.basePrice * nights
    const extraGuestFee = Math.max(0, guests - house.capacity.guests) * house.pricing.extraGuest * nights

    return {
      house,
      nights,
      basePrice: house.pricing.basePrice,
      baseTotal,
      extraGuestFee,
      total: baseTotal + extraGuestFee,
      currency: house.pricing.currency
    }
  }

  const value = {
    // Data
    complex,
    houses,
    selectedHouse,

    // State
    selectedHouseId,
    setSelectedHouseId,
    searchFilters,
    setSearchFilters,

    // Computed values
    filteredHouses: getFilteredHouses(),
    totalComplexCapacity: getTotalComplexCapacity(),
    priceRange: getPriceRange(),
    allAmenities: getAllAmenities(),

    // Utility functions
    getHouseById,
    calculateStayDetails,

    // Original data for reference
    rawData: complexData
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}