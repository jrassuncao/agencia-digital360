import { useEffect, useRef } from 'react'

interface InteractiveBackgroundProps {
  className?: string
}

export function InteractiveBackground({ className }: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating particles
    const particleCount = 30
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full animate-float'
      
      // Random size and color
      const size = Math.random() * 6 + 2
      const colorIndex = Math.random()
      let color = ''
      
      if (colorIndex < 0.33) {
        color = 'bg-primary/30'
      } else if (colorIndex < 0.66) {
        color = 'bg-secondary/30'
      } else {
        color = 'bg-accent/30'
      }
      
      particle.className += ` ${color}`
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 6}s`
      particle.style.animationDuration = `${6 + Math.random() * 4}s`

      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  )
}