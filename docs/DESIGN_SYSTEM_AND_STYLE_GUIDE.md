# Elice Creator AI - Design System & Style Guide

## Introduction & Design Philosophy

The Elice Creator AI platform is designed to be clean, intuitive, and visually appealing. The user interface prioritizes clarity and efficiency, enabling users to discover, generate, and manage educational content with ease. The core philosophy is to blend sophisticated AI capabilities with a user-friendly, professional, and uncluttered design.

This guide outlines the foundational principles and component styles that define the platform's user experience. Adhere to these guidelines to ensure all new features and components are cohesive and maintain the established design language.

---

## I. Core Principles

### 1. Color System

The color palette is built around a vibrant primary purple, complemented by a range of neutral grays (slate) and semantic colors for user feedback.

#### Primary Palette (Purple)

-   **Default:** `primary` (`#6700e6`) - Used for primary actions (buttons), active navigation states, and key highlights.
-   **Dark:** `primary-dark` (`#4a00a3`) - Used for the `:hover` state of primary buttons.
-   **Focus:** `primary-focus` (`#8137ff`) - Used for focus rings (`focus:ring-primary-focus`) and active borders (e.g., on active cards).
-   **Text:** `primary-text` (`#5b00cc`) - Used for text on light primary backgrounds to ensure accessibility and brand consistency.
-   **Medium:** `primary-medium` (`#9c68ff`) - Used for interactive borders, such as on card `:hover` states.
-   **Light Tints (Backgrounds):**
    -   `primary-light` (`#d6c0ff`)
    -   `primary-lighter` (`#e9dfff`) - Used for "Recommended" tags.
    -   `primary-lightest` (`#f4efff`) - Used for subtle backgrounds, like card `:hover` states.

#### Neutral Palette (Slate)

-   **Backgrounds:** `bg-slate-50` or `bg-[#F8F9FA]` are used for the main application background. `bg-white` is used for cards, modals, and primary content areas. `bg-slate-100` and `bg-slate-200` are used for subtle dividers and hover states.
-   **Text:**
    -   `text-slate-800`: Main headings.
    -   `text-slate-700`: Sub-headings and primary body text.
    -   `text-slate-600`: Secondary body text and labels.
    -   `text-slate-500`: Tertiary text, placeholders, and helper text.
    -   `text-slate-400`: Subtle text and disabled states.
-   **Borders:** `border-slate-200` or `border-slate-300` are the standard for cards, inputs, and dividers.

#### Semantic Palette

-   **Success (Green):** Used for "Beginner" tags and success states. (e.g., `bg-green-100 text-green-800`)
-   **Information (Sky Blue):** Used for "Intermediate" tags. (e.g., `bg-sky-100 text-sky-800`)
-   **Danger (Red):** Used for destructive actions like "Delete" or "Cancel". (e.g., `!bg-red-600`, `!text-red-600`)

### 2. Typography

A clean, sans-serif typeface is used throughout. Hierarchy is established through size, weight, and color.

-   **Headings:**
    -   `h1` (`text-3xl font-semibold text-slate-800`): Page titles.
    -   `h2` (`text-2xl font-bold text-slate-800`): Major section titles.
    -   `h3` (`text-xl font-bold text-slate-800`): Card and modal titles.
    -   `h4` (`text-lg font-semibold text-slate-700`): Sub-section titles.
-   **Body Text:** `text-sm` is the default font size for most content, including paragraphs (`text-slate-600`), labels (`text-slate-600`), and input values (`text-slate-800`).
-   **Weights:**
    -   `font-bold`: Primary headings.
    -   `font-semibold`: Sub-headings, card titles, important labels.
    -   `font-medium`: Button text, navigation items.
    -   Default (normal): Body copy.

### 3. Spacing & Layout

A consistent 8-point grid system (multiples of `0.25rem` or `4px`) is used via Tailwind's spacing scale.

-   **Page Layout:** Main content resides within a responsive container: `container mx-auto px-4 sm:px-6 lg:px-8`.
-   **Gaps:**
    -   `gap-8`: Between major layout sections (e.g., settings panel and viewer).
    -   `gap-6`: Between cards in a grid.
    -   `gap-4`: Between elements within a component or form.
    -   `gap-2`: Between smaller elements, like tags or icons and text.
-   **Padding:**
    -   `p-8`: For main containers like the `IdleView`.
    -   `p-6`: Standard padding for cards (`CardWrapper`) and panels.
    -   `p-4`: For smaller components or headers.

### 4. Borders & Shadows

Subtlety is key. Borders and shadows define elevation and separate content areas.

-   **Rounding:**
    -   `rounded-xl` or `rounded-2xl`: For modals and primary containers.
    -   `rounded-lg`: Standard for cards, buttons, and most interactive elements.
    -   `rounded-md`: For inputs and text areas.
    -   `rounded-full`: For tags and avatar-style elements.
-   **Borders:** A standard `border border-slate-200` is used for most cards and panels. Inputs use `border-slate-300`. Active/hover states may use `border-primary-medium` or `border-primary-focus`.
-   **Shadows:**
    -   `shadow-sm`: Default for most cards and static elements.
    -   `shadow-lg`: Used for primary buttons (`shadow-primary-focus/20`) and active cards to create elevation.
    -   `shadow-xl` or `shadow-2xl`: For modals and popovers to lift them clearly above the content.

---

## II. Iconography

A consistent set of outline-style icons (similar to Feather Icons) is used.

-   **Style:** Stroke-based, clean, and simple.
-   **Properties:** `stroke="currentColor"`, `stroke-width="2"` (sometimes `1.5` for finer detail), `stroke-linecap="round"`, `stroke-linejoin="round"`.
-   **Sizing:**
    -   `w-6 h-6` or `w-5 h-5`: Standard size for icons in buttons and section headers.
    -   `w-4 h-4`: For smaller, inline icons.
-   **Color:** Icons inherit the `currentColor` of their parent element. `text-primary` for section headers, `text-slate-500` for secondary elements, etc.

---

## III. Component Library

### Action & Input Components

-   **Button:**
    -   **Variants:** `primary` (solid purple), `secondary` (white with border), `text` (purple link-style).
    -   **Structure:** `rounded-lg`, `py-3 px-4`, `text-sm`, `font-bold`. Always include an icon (`<Icon className="w-5 h-5 mr-2" />`) when appropriate.
    -   **State:** Clear `:hover` (e.g., `hover:bg-primary-dark`), `focus`, and `disabled` (`disabled:bg-slate-400`) styles.
-   **IconButton:** A compact, icon-only button with a `Tooltip`. `w-10 h-10`, `rounded-lg`.
-   **Input / Textarea:**
    -   **Structure:** `rounded-md`, `border-slate-300`, `w-full`, `text-sm`.
    -   **State:** `focus:border-primary-focus` and `focus:ring-0`.
    -   **Label:** Positioned above the input, `text-sm font-medium text-slate-600`.
-   **Select:** Styled to match `Input`, with a `ChevronDown` icon overlay.

### Display & Container Components

-   **CardWrapper:** The base for all cards. `bg-white`, `p-6`, `rounded-lg`, `border-slate-200`, `shadow-sm`. Has a distinct `:hover` state and an `isActive` state with a thicker `border-primary` and a checkmark affordance.
-   **Tag:** `rounded-full`, `px-3 py-1.5`, `text-sm`. Uses `primary-lightest` and `primary-text` for a branded but subtle look.
-   **Collapsible:** A container with a clickable header to toggle content visibility. The header contains a title and a rotating `ChevronDown` icon.
-   **Modal / Popover:** Use a backdrop (`bg-black/50 backdrop-blur-sm`) to focus the user. The container is `bg-white`, `rounded-2xl`, with a prominent `shadow-2xl`.

### Feedback Components

-   **LoadingSpinner:** An overlay with a blurred background. Features a spinning SVG, a title, a message, and an optional progress bar.
-   **Toast:** Appears in the bottom-right corner. Dark background (`bg-slate-800` or `bg-red-600` for errors) with white text. Disappears automatically.

---

## IV. Interactivity & Motion

Motion should be purposeful, providing feedback and guiding the user without being distracting.

-   **States:** All interactive elements must have clear `:hover`, `:focus`, `:active`, and `:disabled` states.
    -   **Hover:** Generally lightens the background or darkens the primary color.
    -   **Focus:** Uses a consistent `focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus`.
    -   **Disabled:** Uses `opacity-50` and `cursor-not-allowed`.
-   **Transitions:** Primarily use `transition-colors` for smooth state changes on buttons and links.
-   **Animations:** Use the predefined keyframe animations for view transitions:
    -   `animate-fadeIn`: For elements appearing in place.
    -   `animate-slideInFromRight` / `animate-slideInFromLeft`: For panel or content transitions.
    -   All animations use a `0.4s ease-out` curve for a quick but smooth effect.
