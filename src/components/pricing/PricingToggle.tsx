import { useState } from 'react'

export function PricingToggle({ onChange }: { onChange: (yearly: boolean) => void }) {
  const [yearly, setYearly] = useState(false)

  const handleToggle = () => {
    setYearly(!yearly)
    onChange(!yearly)
  }

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-sm font-medium transition-colors duration-200 ${!yearly ? 'text-white' : 'text-white/70'}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${
          yearly ? 'bg-white/20' : 'bg-white/10'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
            yearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-medium transition-colors duration-200 ${yearly ? 'text-white' : 'text-white/70'}`}>
        Yearly
        <span className="ml-1.5 rounded-full bg-emerald-400/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
          Save 20%
        </span>
      </span>
    </div>
  )
}