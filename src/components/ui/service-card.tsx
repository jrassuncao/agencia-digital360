import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "./card"

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  features: string[]
  image: string
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, features, image, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:scale-105",
          className
        )}
        {...props}
      >
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    )
  }
)
ServiceCard.displayName = "ServiceCard"

export { ServiceCard }