import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./Container"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg"
  centered?: boolean
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, size = "lg", centered = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          {
            "min-h-[60vh]": size === "sm",
            "min-h-[70vh]": size === "md",
            "min-h-[80vh]": size === "lg",
          },
          className
        )}
        {...props}
      >
        <Container className={cn("relative z-10", centered && "flex flex-col justify-center items-center text-center")}>
          {children}
        </Container>
      </section>
    )
  }
)
Hero.displayName = "Hero"

export { Hero }
