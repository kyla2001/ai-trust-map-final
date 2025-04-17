interface CountyMarkerProps {
  county: string
  score: number
}

export default function CountyMarker({ county, score }: CountyMarkerProps) {
  return (
    <div className="absolute top-0 left-0 transform -translate-y-full -translate-x-1/2 mb-1 whitespace-nowrap">
      <div className="bg-white px-2 py-1 rounded shadow-md border border-[#e0ddd3] text-xs">
        <div className="font-medium text-[#2c3e50]">{county}</div>
        <div className="text-[#34495e]">Score: {score}</div>
      </div>
      <div className="w-2 h-2 bg-white transform rotate-45 border-r border-b border-[#e0ddd3] absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
    </div>
  )
}
