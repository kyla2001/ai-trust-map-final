"use client"

import { useRef, useState, useEffect } from "react"
import NarrativePanel from "./narrative-panel"
import MapPanel from "./map-panel"
import ProgressIndicator from "./progress-indicator"
import { mockCountyData } from "@/lib/mock-data"

export type Section = "intro" | "trust-score" | "categories" | "case-studies" | "rankings"
export type Category = "crime" | "health" | "education" | "economy" | "environment"

export default function StoryMap() {
  const [activeSection, setActiveSection] = useState<Section>("intro")
  const [activeCategory, setActiveCategory] = useState<Category>("crime")
  const [highlightedCounties, setHighlightedCounties] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const sections = containerRef.current.querySelectorAll("[data-section]")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const sectionBottom = sectionTop + section.clientHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionId = section.getAttribute("data-section") as Section
          setActiveSection(sectionId)

          // If we're in the categories section, check which category is active
          if (sectionId === "categories") {
            const categoryElements = section.querySelectorAll("[data-category]")
            categoryElements.forEach((catEl) => {
              const catTop = catEl.getBoundingClientRect().top + window.scrollY
              const catBottom = catTop + catEl.clientHeight

              if (scrollPosition >= catTop && scrollPosition < catBottom) {
                const categoryId = catEl.getAttribute("data-category") as Category
                setActiveCategory(categoryId)
              }
            })
          }

          // If we're in the case studies section, highlight specific counties
          if (sectionId === "case-studies") {
            setHighlightedCounties(["New York County, NY", "Cook County, IL"])
          } else if (sectionId === "rankings") {
            const topCounties = mockCountyData
              .sort((a, b) => b.trustScore - a.trustScore)
              .slice(0, 5)
              .map((c) => c.name)
            const bottomCounties = mockCountyData
              .sort((a, b) => a.trustScore - b.trustScore)
              .slice(0, 5)
              .map((c) => c.name)
            setHighlightedCounties([...topCounties, ...bottomCounties])
          } else {
            setHighlightedCounties([])
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative bg-[#f5f2e8]" ref={containerRef}>
      <ProgressIndicator activeSection={activeSection} />

      <div className="flex flex-col lg:flex-row min-h-screen">
        <NarrativePanel />
        <MapPanel
          activeSection={activeSection}
          activeCategory={activeCategory}
          highlightedCounties={highlightedCounties}
        />
      </div>
    </div>
  )
}
