import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg"
  as?: "section" | "div" | "main" | "article"
}

const Section: React.FC<SectionProps> = ({
  className,
  size = "lg",
  as: Component = "section",
  ...props
}) => {
  return (
    <Component
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        {
          "py-8 sm:py-12 lg:py-16": size === "sm",
          "py-12 sm:py-16 lg:py-20": size === "md",
          "py-16 sm:py-20 lg:py-24": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
}

export { Section }
