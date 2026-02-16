import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variants = {
      primary: "bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90",
      secondary: "bg-[#F97316] text-white hover:bg-[#F97316]/90",
      outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
      ghost: "hover:bg-slate-100 hover:text-slate-900",
      link: "text-slate-900 underline-offset-4 hover:underline",
    }
    
    // Size styles (min 44px touch targets on mobile)
    const sizes = {
      default: "min-h-[44px] h-10 px-4 py-2",
      sm: "min-h-[44px] h-9 rounded-md px-3",
      lg: "min-h-[48px] h-12 rounded-md px-6 sm:px-8",
      icon: "min-h-[44px] min-w-[44px] h-10 w-10",
    }
    
    const variantClass = variants[variant] || variants.primary
    const sizeClass = sizes[size] || sizes.default

    return (
      <Comp
        className={cn(baseStyles, variantClass, sizeClass, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
