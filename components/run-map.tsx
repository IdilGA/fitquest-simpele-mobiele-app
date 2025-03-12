export function RunMap() {
  return (
    <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=256&width=384')] bg-cover bg-center"></div>
      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
        Live Locaties
      </div>

      {/* Buddy location marker */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="h-4 w-4 rounded-full bg-green-600 border-2 border-white"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs whitespace-nowrap">
            Joost (200m voor)
          </div>
        </div>
      </div>

      {/* Your location marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs">
            Jij
          </div>
        </div>
      </div>

      {/* Route line */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <path d="M192,128 L192,85" stroke="#22c55e" strokeWidth="3" strokeDasharray="5,5" fill="none" />
        </svg>
      </div>
    </div>
  )
}

