import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  gradient?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, gradient = false, children, ...props }, ref) => {
    return (
      <section
        className={cn(
          "relative py-16 lg:py-24",
          gradient && "bg-gradient-card",
          className
        )}
        ref={ref}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }