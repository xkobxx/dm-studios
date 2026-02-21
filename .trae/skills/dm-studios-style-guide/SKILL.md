---
name: "dm-studios-style-guide"
description: "Provides UI/UX guidelines, color palettes, and component usage for DM Studios. Also guides creation of distinctive, production-grade interfaces avoiding generic aesthetics. Invoke when creating or styling pages."
---

# DM Studios UI Style Guide & Design System

Use this guide when creating new pages or components to ensure consistency with the existing design system.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons/Primitives**: Radix UI (shadcn/ui patterns)
- **Utilities**: `class-variance-authority` (cva), `clsx`, `tailwind-merge`

## Design Tokens

### Colors
Defined in `tailwind.config.js` and `globals.css`.

| Token | Value | Description |
|-------|-------|-------------|
| `primary` | `#1c1c22` | Main background color (Dark Mode) |
| `secondary` | `#f8f9fa` | Light mode background |
| `accent` | `#FF4E00` | Brand accent color (Orange) |
| `accent-hover` | `#E54400` | Hover state for accent |
| `white` | `#ffffff` | Primary text in Dark Mode |

**Theme Handling**:
- **Dark Mode**: Default.
- **Light Mode**: Activated via `.light` class on parent (usually `html` or `body`).
- **Implementation**: `globals.css` contains extensive overrides for `.light` mode (e.g., `.light body`, `.light .text-white`).

### Typography
- **Font Family**: `JetBrains Mono` (mapped to `font-primary`).
- **Base Styles**: `leading-loose` (relaxed line height).

### Layout
- **Container**: Centered (`mx-auto`) with `padding: 15px`.
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 960px
  - `xl`: 1200px (Primary desktop breakpoint)

## Components

### Buttons
Located in `components/ui/button.jsx`.
- **Variants**:
  - `default`: `bg-accent text-primary hover:bg-accent-hover`
  - `primary`: `bg-primary text-white`
  - `outline`: `border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary`
- **Sizes**:
  - `default`: `h-[44px] px-6`
  - `md`: `h-[48px] px-6`
  - `lg`: `h-[56px] px-8 uppercase tracking-[2px]`
- **Shape**: `rounded-full`

### Inputs & Forms
- **Input**: Standard Tailwind styled input.
- **Select**: Radix UI based.
- **Textarea**: Standard Tailwind styled textarea.

## Code Patterns

### Component Structure
```jsx
import { cn } from "@/lib/utils";
// other imports

const ComponentName = ({ className, ...props }) => {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* content */}
    </div>
  );
};

export default ComponentName;
```

### Animation
- **Tailwind Config**: `tailwindcss-animate` plugin is used.
- **Custom Keyframes**: `accordion-down`, `accordion-up`.

### Page Transitions
- `PageTransition` component wraps content.
- `StairTransition` provides visual effect on navigation.

## Usage Guidelines
1.  **New Pages**: Ensure they are wrapped with necessary transition components if not handled by `layout.jsx`.
2.  **Colors**: Use `text-accent` for highlights. Use `bg-primary` for dark sections.
3.  **Spacing**: Adhere to the `container` pattern for main content width.
4.  **Responsive**: Mobile-first. Use `xl:` prefix for desktop-specific layouts.

# Frontend Design Philosophy

This section guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. *Note: For this project, primarily use the defined `JetBrains Mono` but explore creative sizing, weights, and layout usage.*
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.
