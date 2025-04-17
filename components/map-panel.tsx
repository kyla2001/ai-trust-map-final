"use client";

import { useEffect, useRef, useState } from "react"
import type { Category, Section } from "./story-map"
import { mockCountyData } from "@/lib/mock-data"
import CountyMarker from "./county-marker"



// This would be replaced with actual GeoJSON data for U.S. counties

interface MapPanelProps {
  activeSection: Section
  activeCategory: Category
  highlightedCounties: string[]
}

export default function MapPanel({ activeSection, activeCategory, highlightedCounties }: MapPanelProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapZoom, setMapZoom] = useState(1)
  const [mapCenter, setMapCenter] = useState({ x: 0, y: 0 })

  // Update map visualization based on active section
  useEffect(() => {
    if (activeSection === "case-studies") {
      // Zoom in on New York and Chicago
      setMapZoom(2)
      setMapCenter({ x: -10, y: 0 })
    } else if (activeSection === "rankings") {
      // Show the full map but slightly zoomed
      setMapZoom(1.2)
      setMapCenter({ x: 0, y: 0 })
    } else {
      // Default view
      setMapZoom(1)
      setMapCenter({ x: 0, y: 0 })
    }
  }, [activeSection])

  // Get data for the current view
  const getMapData = () => {
    if (activeSection === "trust-score") {
      return mockCountyData.map((county) => ({
        ...county,
        score: county.trustScore,
      }))
    } else if (activeSection === "categories") {
      return mockCountyData.map((county) => ({
        ...county,
        score: county.categoryScores[activeCategory],
      }))
    } else {
      return mockCountyData.map((county) => ({
        ...county,
        score: county.trustScore,
      }))
    }
  }

  const mapData = getMapData()

  // Get title for the current map view
  const getMapTitle = () => {
    if (activeSection === "intro") {
      return "AI Trust Map"
    } else if (activeSection === "trust-score") {
      return "Overall AI Trust Score by County"
    } else if (activeSection === "categories") {
      const categoryTitles = {
        crime: "Crime & Safety AI Trust",
        health: "Healthcare AI Trust",
        education: "Education AI Trust",
        economy: "Economic AI Trust",
        environment: "Environmental AI Trust",
      }
      return categoryTitles[activeCategory]
    } else if (activeSection === "case-studies") {
      return "County Case Studies"
    } else if (activeSection === "rankings") {
      return "Top & Bottom Counties by Trust Score"
    }
    return "AI Trust Map"
  }

  return (
    <div className="w-full lg:w-1/2 bg-[#f0ede3] lg:sticky lg:top-0 lg:h-screen overflow-hidden">
      <div className="p-6 h-full flex flex-col">
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4 border border-[#e0ddd3]">
          <h2 className="font-serif text-xl text-[#2c3e50] text-center">{getMapTitle()}</h2>
        </div>

        <div
          ref={mapRef}
          className="flex-1 bg-white rounded-xl shadow-sm border border-[#e0ddd3] relative overflow-hidden"
          style={{
            backgroundImage: "url('?height=800&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* US County Map Visualization */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${mapZoom}) translate(${mapCenter.x}%, ${mapCenter.y}%)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <svg width="800" height="500" viewBox="0 0 800 500" className="us-county-map">
              

              

              

              

              

              

              

              

              

              

              {/* County Grid - This simulates county borders */}
              {Array.from({ length: 20 }).map((_, i) => (
                <path
                  key={`h-county-${i}`}
                  d={`M100,${130 + i * 15} L600,${130 + i * 15}`}
                  stroke="#e0e0e0"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              ))}

              {Array.from({ length: 30 }).map((_, i) => (
                <path
                  key={`v-county-${i}`}
                  d={`M${120 + i * 17},100 L${120 + i * 17},350`}
                  stroke="#e0e0e0"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              ))}
            </svg>

            {/* County Data Points */}
            {mapData.map((county, index) => {
              // Calculate position based on county name (in a real app, you'd use geo coordinates)
              const hash = county.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

              // More realistic positioning across the US map
              let x, y

              if (county.name.includes("CA")) {
                // California counties
                x = 120 + (hash % 80)
                y = 200 + ((hash * 13) % 80)
              } else if (county.name.includes("NY")) {
                // New York counties
                x = 530 + (hash % 40)
                y = 150 + ((hash * 7) % 40)
              } else if (county.name.includes("TX")) {
                // Texas counties
                x = 300 + (hash % 100)
                y = 300 + ((hash * 11) % 40)
              } else if (county.name.includes("IL")) {
                // Illinois counties
                x = 400 + (hash % 40)
                y = 180 + ((hash * 5) % 60)
              } else if (county.name.includes("WA")) {
                // Washington counties
                x = 120 + (hash % 60)
                y = 120 + ((hash * 3) % 30)
              } else if (county.name.includes("MA")) {
                // Massachusetts counties
                x = 550 + (hash % 30)
                y = 130 + ((hash * 2) % 20)
              } else if (county.name.includes("AK")) {
                // Alaska counties
                x = 140 + (hash % 80)
                y = 380 + ((hash * 3) % 20)
              } else if (county.name.includes("WV") || county.name.includes("KY")) {
                // Appalachian counties
                x = 450 + (hash % 60)
                y = 220 + ((hash * 9) % 40)
              } else if (county.name.includes("MS")) {
                // Mississippi counties
                x = 400 + (hash % 40)
                y = 280 + ((hash * 7) % 40)
              } else if (county.name.includes("AZ")) {
                // Arizona counties
                x = 200 + (hash % 60)
                y = 250 + ((hash * 5) % 50)
              } else {
                // Other counties distributed across the map
                x = 150 + (hash % 400)
                y = 150 + ((hash * 13) % 200)
              }

              // Determine color based on score
              const getColor = (score: number) => {
                if (score >= 80) return "bg-green-500"
                if (score >= 60) return "bg-lime-400"
                if (score >= 40) return "bg-yellow-300"
                if (score >= 20) return "bg-orange-400"
                return "bg-red-500"
              }

              const isHighlighted = highlightedCounties.includes(county.name)

              return (
                <div
                  key={index}
                  className={`absolute rounded-full ${getColor(county.score)} border ${isHighlighted ? "border-blue-500 shadow-md animate-pulse" : "border-white"}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: isHighlighted ? "12px" : "6px",
                    height: isHighlighted ? "12px" : "6px",
                    transform: isHighlighted ? "translate(-3px, -3px)" : "none",
                    zIndex: isHighlighted ? 10 : 1,
                  }}
                >
                  {isHighlighted && <CountyMarker county={county.name} score={county.score} />}
                </div>
              )
            })}
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-sm border border-[#e0ddd3]">
            <div className="text-sm font-medium text-[#2c3e50] mb-2">Trust Score</div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 rounded-sm bg-red-500"></div>
              <div className="w-4 h-4 rounded-sm bg-orange-400"></div>
              <div className="w-4 h-4 rounded-sm bg-yellow-300"></div>
              <div className="w-4 h-4 rounded-sm bg-lime-400"></div>
              <div className="w-4 h-4 rounded-sm bg-green-500"></div>
            </div>
            <div className="flex justify-between text-xs text-[#34495e] mt-1">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setMapZoom((prev) => Math.max(0.5, prev - 0.2))}
            className="bg-white rounded-lg p-2 shadow-sm border border-[#e0ddd3] text-[#34495e] hover:bg-[#f5f2e8]"
          >
            <span className="sr-only">Zoom Out</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
          <button
            onClick={() => setMapZoom((prev) => Math.min(3, prev + 0.2))}
            className="bg-white rounded-lg p-2 shadow-sm border border-[#e0ddd3] text-[#34495e] hover:bg-[#f5f2e8]"
          >
            <span className="sr-only">Zoom In</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
          <button
            onClick={() => {
              setMapZoom(1)
              setMapCenter({ x: 0, y: 0 })
            }}
            className="bg-white rounded-lg p-2 shadow-sm border border-[#e0ddd3] text-[#34495e] hover:bg-[#f5f2e8]"
          >
            <span className="sr-only">Reset View</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
              <path d="M14 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
              <path d="M6 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Simplified Map Component
function SimplifiedMap({
  data,
  highlightedCounties,
}: {
  data: any[]
  highlightedCounties: string[]
}) {
  // This is a simplified representation of a US map
  // In a real application, you would use a proper mapping library
  return (
    <div className="relative w-[600px] h-[400px]">
      {/* Simplified US Map Shape */}
      <svg width="600" height="400" viewBox="0 0 600 400">
        <path
          d="M50,200 C100,100 200,50 300,50 C400,50 500,100 550,200 C500,300 400,350 300,350 C200,350 100,300 50,200 Z"
          fill="#e6e6e6"
          stroke="#cccccc"
          strokeWidth="1"
        />

        {/* East Coast */}
        <path d="M450,150 C470,180 480,220 470,260" fill="none" stroke="#cccccc" strokeWidth="1" />

        {/* West Coast */}
        <path d="M100,150 C120,180 130,220 120,260" fill="none" stroke="#cccccc" strokeWidth="1" />

        {/* Great Lakes */}
        <circle cx="380" cy="120" r="20" fill="#f0f0f0" stroke="#cccccc" />

        {/* Gulf of Mexico */}
        <path d="M300,350 C250,330 200,330 150,350" fill="none" stroke="#cccccc" strokeWidth="1" />
      </svg>

      {/* County Data Points */}
      {data.map((county, index) => {
        // Calculate position based on county name (in a real app, you'd use geo coordinates)
        const hash = county.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
        const x = 100 + (hash % 400)
        const y = 100 + ((hash * 13) % 200)

        // Determine color based on score
        const getColor = (score: number) => {
          if (score >= 80) return "bg-green-500"
          if (score >= 60) return "bg-lime-400"
          if (score >= 40) return "bg-yellow-300"
          if (score >= 20) return "bg-orange-400"
          return "bg-red-500"
        }

        const isHighlighted = highlightedCounties.includes(county.name)

        return (
          <div
            key={index}
            className={`absolute rounded-full ${getColor(county.score)} border ${isHighlighted ? "border-blue-500 shadow-md animate-pulse" : "border-white"}`}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: isHighlighted ? "12px" : "6px",
              height: isHighlighted ? "12px" : "6px",
              transform: isHighlighted ? "translate(-3px, -3px)" : "none",
              zIndex: isHighlighted ? 10 : 1,
            }}
          >
            {isHighlighted && <CountyMarker county={county.name} score={county.score} />}
          </div>
        )
      })}
    </div>
  )
}
