import { Check, Info } from 'lucide-react'
import { Button } from "../ui/button"
import { memo } from 'react'
import { Tooltip } from '../ui/tooltip'

const ListItem = memo(({ text, tooltip }: { text: string; tooltip?: string }) => (
  <li className="flex items-center gap-2">
    <Check className="h-4 w-4 flex-shrink-0 text-white/80" />
    {tooltip ? (
      <Tooltip content={tooltip}>
        <div className="flex items-center gap-2 cursor-help">
          <span className="text-white/90">{text}</span>
          <Info className="h-4 w-4 text-white/50" />
        </div>
      </Tooltip>
    ) : (
      <span className="text-white/90">{text}</span>
    )}
  </li>
))
ListItem.displayName = 'ListItem'

interface PricingCardProps {
  title: string
  description: string
  price: { monthly: string; yearly: string }
  period: string
  features: Array<{ text: string; tooltip?: string }>
  buttonText: string
  popular?: boolean
  yearly: boolean
  onSelect: () => void
  icon: React.ElementType
  type: 'hobby' | 'pro' | 'enterprise'
}

export const PricingCard = memo(({ 
  title, 
  description, 
  price, 
  period, 
  features, 
  buttonText,
  popular,
  yearly,
  onSelect,
  icon: Icon,
  type
}: PricingCardProps) => {
  const currentPrice = yearly ? price.yearly : price.monthly
  
  return (
    <div 
      className={`
        relative rounded-2xl p-8 transition-all duration-300
        pricing-card-${type}
        backdrop-blur-xl backdrop-saturate-150
        ${popular ? 'scale-[1.02] shadow-2xl ring-2 ring-purple-500/50' : 'hover:scale-[1.02]'}
        hover:shadow-xl group
        border border-white/10
      `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-6 py-2 rounded-full text-sm font-semibold text-white 
            bg-gradient-to-r from-purple-500/90 to-purple-600/90
            shadow-lg shadow-purple-500/30 backdrop-blur-md 
            border border-purple-400/30
            flex items-center gap-2
            animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse"></span>
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-8 relative">
        <div className={`
          absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity
          ${popular ? 'opacity-20 group-hover:opacity-30' : ''}
        `}>
          <Icon className="w-16 h-16 text-white" />
        </div>
        <h3 className="text-2xl font-bold flex items-center gap-2 text-white">
          <Icon className="h-5 w-5" />
          {title}
        </h3>
        <p className="mt-2 text-white/70">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className={`text-5xl font-bold tracking-tight ${popular ? 'text-purple-300' : ''}`}>
            {currentPrice}
          </span>
          <span className="ml-2 opacity-70">{period}</span>
        </div>
        {yearly && Number(currentPrice) && (
          <p className="mt-1 text-sm text-emerald-400">
            Save ${(Number(price.monthly) * 12 - Number(price.yearly) * 12).toFixed(2)} yearly
          </p>
        )}
      </div>

      <div className="mb-6">
        <div className="text-sm text-white/70 uppercase tracking-wider mb-2">RESOURCE USAGE</div>
        <div className="text-sm text-white/90">Includes usage details</div>
      </div>

      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <ListItem key={index} text={feature.text} tooltip={feature.tooltip} />
        ))}
      </ul>

      <Button 
        onClick={onSelect}
        className={`
          w-full transition-all duration-200
          ${popular 
            ? 'bg-gradient-to-r from-purple-500/90 to-purple-600/90 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg shadow-purple-500/30' 
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }
          shadow-lg hover:shadow-xl hover:scale-[1.02]
          backdrop-blur-sm
        `}
        size="lg"
      >
        {buttonText}
      </Button>

      {popular && (
        <>
          <div className="absolute -z-10 inset-0.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 blur-xl opacity-50" />
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/50 to-purple-600/50 opacity-0 group-hover:opacity-10 transition-opacity" />
        </>
      )}
    </div>
  )
})

PricingCard.displayName = 'PricingCard'