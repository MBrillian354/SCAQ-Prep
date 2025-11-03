import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 text-sm font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:bg-primary-dark hover:shadow-xl focus-visible:ring-primary-focus",
        primary:
          "bg-primary text-primary-foreground shadow-lg hover:bg-primary-dark hover:shadow-xl focus-visible:ring-primary-focus",
        secondary:
          "bg-secondary text-secondary-foreground border border-slate-200 shadow-sm hover:border-primary-medium hover:text-primary focus-visible:ring-primary-focus",
        outline:
          "bg-white text-slate-700 border border-slate-200 shadow-sm hover:border-primary-medium hover:text-primary focus-visible:ring-primary-focus",
        ghost:
          "bg-transparent text-slate-600 hover:bg-primary-lightest hover:text-primary focus-visible:ring-primary-focus",
        text:
          "bg-transparent px-0 py-0 text-primary font-medium hover:text-primary-dark focus-visible:ring-0 focus-visible:ring-offset-0",
        link:
          "bg-transparent px-0 py-0 text-primary font-medium underline-offset-4 hover:text-primary-dark hover:underline focus-visible:ring-0 focus-visible:ring-offset-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-[#b91c1c] focus-visible:ring-red-300",
      },
      size: {
        default: "px-4 py-3",
        sm: "px-3 py-2 text-sm",
        lg: "px-6 py-3.5 text-base",
  icon: "size-10 px-0 py-0",
  "icon-sm": "size-9 px-0 py-0",
  "icon-lg": "size-12 px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
