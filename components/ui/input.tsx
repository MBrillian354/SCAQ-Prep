import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-xs transition-[border,box-shadow] placeholder:text-slate-400 selection:bg-primary-light selection:text-primary-foreground file:inline-flex file:h-9 file:items-center file:rounded-md file:border-0 file:bg-primary-lightest file:px-3 file:text-sm file:font-medium file:text-primary",
        "focus:border-primary-focus focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-0",
        "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 aria-invalid:border-red-500 aria-invalid:focus:ring-red-300",
        className
      )}
      {...props}
    />
  )
}

export { Input }
