# Coding Patterns Documentation - SCAQ-Prep Project

This document outlines the key coding patterns and architectural decisions found in this early-stage Next.js project.

## Table of Contents
- [Component Architecture](#component-architecture)
- [Styling Patterns](#styling-patterns)
- [Type Safety](#type-safety)
- [Styling Utility Pattern](#styling-utility-pattern)
- [Component Composition](#component-composition)
- [Prop Spreading](#prop-spreading)
- [Polymorphic Components](#polymorphic-components)
- [Font Loading](#font-loading)
- [Client Component Directive](#client-component-directive)
- [Accessibility](#accessibility)
- [State Management](#state-management)
- [Build & Development](#build--development)
- [CSS Organization](#css-organization)
- [Naming Conventions](#naming-conventions)
- [Import Organization](#import-organization)

---

## Component Architecture

### UI Component Library Structure
- Components follow the **shadcn/ui** pattern (New York style)
- Each component is self-contained in `components/ui/`
- Components use Radix UI primitives for accessibility
- All UI components include `data-slot` attributes for identification

**Example:**
```tsx
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(/* classes */)}
      {...props}
    />
  )
}
```

---

## Styling Patterns

### Tailwind CSS with Design Tokens

- Using **Tailwind CSS v4** with CSS variables
- Custom color scheme using **OKLCH color space** for better perceptual uniformity
- Dark mode support via CSS class (`.dark`)
- Centralized design tokens in `globals.css` using `@theme inline`
- Custom variant for dark mode: `@custom-variant dark (&:is(.dark *))`

**Color Token Example:**
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.21 0.006 285.885);
  /* ... */
}
```

### Responsive Design
- Mobile-first approach with `md:` breakpoints
- Container queries for advanced layouts (`@container/card-header`)
- Flexible grid systems (`grid`, `flex`)

---

## Type Safety

### TypeScript Configuration
- Strict mode enabled (`"strict": true`)
- Path aliases using `@/*` for clean imports
- React Server Components TypeScript support
- All components use proper TypeScript types with `React.ComponentProps<T>`

**Path Aliases:**
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

**Component Type Pattern:**
```tsx
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}) {
  // ...
}
```

---

## Styling Utility Pattern

### Class Variance Authority (CVA) + Tailwind Merge

**Pattern Example (from button.tsx):**
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border bg-background shadow-xs hover:bg-accent",
        // ...
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        // ...
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### Utility Function

**lib/utils.ts:**
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Purpose:**
- Combines `clsx` for conditional classes
- Uses `twMerge` for deduplication of Tailwind classes
- Used consistently across all components

---

## Component Composition

### Compound Component Pattern

Components are designed to work together as a family:

**Card Component Family:**
- `Card` - Container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Subtitle/description
- `CardAction` - Action buttons in header
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage Example:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardAction>
      <Button>Action</Button>
    </CardAction>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

**Tabs Component Family:**
- `Tabs` - Container
- `TabsList` - Tab buttons container
- `TabsTrigger` - Individual tab button
- `TabsContent` - Content panel for each tab

---

## Prop Spreading

### Consistent Component Structure

All components follow this pattern:

```typescript
function Component({ className, ...props }: React.ComponentProps<"element">) {
  return (
    <element 
      data-slot="component-name"
      className={cn("default-classes", className)} 
      {...props} 
    />
  )
}
```

**Benefits:**
- Destructure `className` for custom styling
- Spread remaining props for maximum flexibility
- Use `cn()` utility to merge classes safely
- Maintains all native HTML attributes

---

## Polymorphic Components

### "asChild" Pattern

Used in the Button component to render as different elements:

```typescript
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
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
```

**Usage:**
```tsx
<Button asChild>
  <a href="/link">Link styled as button</a>
</Button>
```

**Benefits:**
- Uses Radix UI's `Slot` component
- Allows component to render as different elements
- Maintains styling and behavior
- Improves semantic HTML

---

## Font Loading

### Next.js Font Optimization

**Pattern (from layout.tsx):**
```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**CSS Variables:**
```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

**Benefits:**
- Automatic font optimization
- Self-hosted fonts
- Zero layout shift
- CSS variable integration

---

## Client Component Directive

### Strategic "use client" Usage

Components using Radix UI primitives require client-side JavaScript:

```tsx
"use client"

import * as LabelPrimitive from "@radix-ui/react-label"

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return <LabelPrimitive.Root /* ... */ />
}
```

**Files with "use client":**
- `components/ui/label.tsx`
- `components/ui/tabs.tsx`

**Default Server Components:**
- `app/page.tsx`
- `app/layout.tsx`
- `components/ui/button.tsx` (uses Slot conditionally)
- `components/ui/card.tsx`
- `components/ui/input.tsx`

---

## Accessibility

### Built-in A11y Features

**Focus Management:**
```css
focus-visible:border-ring 
focus-visible:ring-ring/50 
focus-visible:ring-[3px]
```

**ARIA Support:**
```css
aria-invalid:ring-destructive/20
aria-invalid:border-destructive
disabled:pointer-events-none
disabled:opacity-50
```

**Accessibility Checklist:**
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ ARIA attributes
- ✅ Label associations with form elements
- ✅ Disabled state handling
- ✅ Screen reader friendly (Radix UI primitives)

---

## State Management

### Controlled Components Pattern

Components follow React's controlled/uncontrolled pattern:

```tsx
// Controlled
<Input value={value} onChange={handleChange} />

// Uncontrolled
<Input defaultValue="initial" />
```

**State Management Strategy:**
- Form elements accept standard HTML props
- State management delegated to parent components
- Using Radix UI's controlled/uncontrolled pattern
- No global state management library (yet)

---

## Build & Development

### Modern Tooling Stack

**Package Manager:**
```bash
pnpm install
```

**Development Server:**
```bash
pnpm dev  # Uses Next.js with Turbopack
```

**Build:**
```bash
pnpm build  # Uses Turbopack for faster builds
```

**Technologies:**
- **Next.js 15.5.6** - React framework
- **React 19.1.0** - UI library
- **Turbopack** - Fast bundler (enabled via `--turbopack` flag)
- **pnpm** - Efficient package manager
- **TypeScript 5** - Type safety
- **ESLint 9** - Code linting
- **Tailwind CSS 4** - Styling

### ESLint Configuration

**Flat Config Pattern (eslint.config.mjs):**
```javascript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
```

---

## CSS Organization

### Layered Approach

**globals.css structure:**
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Design tokens */
}

/* Color scheme definitions */
:root { /* Light mode */ }
.dark { /* Dark mode */ }

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}
```

**Layers:**
1. Tailwind directives and imports
2. Custom variants
3. Theme tokens
4. Color definitions (light/dark)
5. Base layer for global styles

---

## Naming Conventions

### File Naming
- **CSS files:** `kebab-case` (e.g., `globals.css`)
- **TypeScript/TSX files:** `kebab-case` (e.g., `button.tsx`, `utils.ts`)
- **Config files:** `kebab-case` with extensions (e.g., `next.config.ts`)

### Code Naming
- **Components:** `PascalCase` (e.g., `Button`, `Card`, `TabsList`)
- **Functions:** `camelCase` (e.g., `cn`, `buttonVariants`)
- **Constants:** `UPPER_CASE` (e.g., for true constants)
- **CSS Variables:** `--kebab-case` (e.g., `--font-geist-sans`, `--color-primary`)
- **Data Attributes:** `data-slot` for component identification

### Component Naming Pattern
- Base component: `Card`
- Sub-components: `Card[Section]` (e.g., `CardHeader`, `CardTitle`)
- Variants defined in CVA: lowercase (e.g., `variant="default"`)

---

## Import Organization

### Consistent Import Order

```tsx
// 1. React imports
import * as React from "react"

// 2. Third-party libraries
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

// 3. Local utilities
import { cn } from "@/lib/utils"

// 4. Type imports (when separate)
import type { Metadata } from "next"
```

### Path Aliases

**Configured in tsconfig.json:**
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

**Usage Examples:**
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

**Aliases defined in components.json:**
- `@/components` - Component directory
- `@/lib` - Utility functions
- `@/components/ui` - UI components
- `@/hooks` - Custom hooks (future)

---

## Summary

### Architecture Principles

This project follows modern React/Next.js best practices with a focus on:

1. **Type Safety**
   - TypeScript strict mode
   - Comprehensive type definitions
   - Proper prop typing

2. **Accessibility**
   - Radix UI primitives
   - ARIA attributes
   - Keyboard navigation
   - Focus management

3. **Maintainability**
   - Component composition
   - Utility functions
   - Consistent patterns
   - Clear separation of concerns

4. **Performance**
   - Next.js 15 App Router
   - Turbopack for faster builds
   - Font optimization
   - Server Components by default

5. **Design Consistency**
   - Design tokens
   - CVA for variants
   - OKLCH color space
   - Dark mode support

6. **Developer Experience**
   - Path aliases
   - ESLint configuration
   - Organized structure
   - Type inference
   - Hot module replacement

### Scalability Considerations

The codebase is well-structured for scaling:

- ✅ Modular component architecture
- ✅ Reusable utility functions
- ✅ Consistent naming conventions
- ✅ Type-safe patterns
- ✅ Accessible by default
- ✅ Performance optimized
- ✅ Easy to extend with new components
- ✅ Clear documentation

### Next Steps

As the project grows, consider:

- Adding a state management solution (Zustand, Jotai, or Context)
- Implementing custom hooks in `@/hooks`
- Creating layout components
- Adding error boundaries
- Setting up testing (Jest, React Testing Library)
- Adding Storybook for component documentation
- Implementing authentication patterns
- Adding API route patterns

---

**Last Updated:** October 28, 2025  
**Project:** SCAQ-Prep  
**Version:** 0.1.0
