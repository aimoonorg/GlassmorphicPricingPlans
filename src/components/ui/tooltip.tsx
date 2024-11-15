import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface TooltipProps {
  content: string
  children: React.ReactElement
  className?: string
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top - (tooltipRef.current?.offsetHeight || 0) - 8,
        left: rect.left + (rect.width - (tooltipRef.current?.offsetWidth || 0)) / 2
      })
    }
  }, [isVisible])

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            className={cn(
              'fixed z-50 px-3 py-1.5 text-sm text-white bg-zinc-900 rounded-md shadow-md',
              'animate-in fade-in-0 zoom-in-95',
              className
            )}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`
            }}
            role="tooltip"
          >
            {content}
          </div>,
          document.body
        )}
    </>
  )
}