"use client"

import type { Section } from "./story-map"

interface ProgressIndicatorProps {
  activeSection: Section
}

export default function ProgressIndicator({ activeSection }: ProgressIndicatorProps) {
  const sections: { id: Section; label: string }[] = [
    { id: "intro", label: "Introduction" },
    { id: "trust-score", label: "Trust Score" },
    { id: "categories", label: "Categories" },
    { id: "case-studies", label: "Case Studies" },
    { id: "rankings", label: "Rankings" },
  ]

  return (
    <div className="fixed top-4 left-12 z-50 hidden lg:block">
      <div className="flex flex-row items-center space-x-4 bg-white bg-opacity-80 px-6 py-3 rounded-full shadow-sm border border-[#e0ddd3]">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex flex-col items-center"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(`[data-section="${section.id}"]`)?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                activeSection === section.id ? "bg-[#2c3e50]" : "bg-[#d1cdc0] hover:bg-[#a3a195]"
              } transition-colors duration-200`}
            ></div>
            <span
              className={`mt-1 text-xs transition-opacity duration-200 ${
                activeSection === section.id
                  ? "opacity-100 text-[#2c3e50] font-medium"
                  : "opacity-0 group-hover:opacity-100 text-[#6c7a89]"
              }`}
            >
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
