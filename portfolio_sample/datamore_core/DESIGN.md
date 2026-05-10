---
name: Datamore Core
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style

The design system is engineered to project **Technical Excellence** and **AI-Native Scalability**. It targets enterprise decision-makers who value precision, high-performance computing, and modern data architecture. 

The aesthetic is a fusion of **Enterprise Minimalism** and **Futuristic Glassmorphism**. It utilizes a "Dark Mode First" philosophy to create an immersive, low-strain environment suitable for data density and long-form analysis. Visual interest is generated through light refraction, depth via backdrop blurs, and sharp, high-contrast accents that guide the eye toward critical insights. The experience should feel like a premium command center—authoritative yet frictionless.

## Colors

This design system utilizes a tiered dark palette to establish depth without sacrificing clarity. 

- **Foundational Layers:** Use `#0A0C10` for the primary canvas and `#0F172A` for elevated surface containers.
- **Accents:** Electric Blue (`#3B82F6`) serves as the primary action color. Cyan (`#06B6D4`) is used for data visualization and secondary highlights.
- **Gradients:** Subtle teal-to-purple gradients are reserved for glassmorphism highlights and high-impact branding moments. 
- **Status:** Standard semantic colors (Success/Warning/Error) should be desaturated to fit the dark theme but maintain high luminosity for accessibility.

## Typography

The typographic hierarchy distinguishes between technical branding and functional data reading.

- **Headlines:** Use **Space Grotesk** for all titles and display text. Its geometric terminals and technical rhythm reinforce the AI consultancy brand.
- **Body & Data:** Use **Inter** for all UI elements, paragraph text, and data tables. It provides exceptional legibility at small sizes and maintains a neutral, professional tone.
- **Labels:** Use uppercase Inter with slight letter-spacing for category labels, breadcrumbs, and small UI metadata to create a "blueprint" aesthetic.

## Layout & Spacing

This design system employs a **Bento-Grid** philosophy, where content is grouped into distinct, logically organized tiles. 

- **Grid System:** A 12-column fluid grid for desktop, transitioning to 8 columns for tablet and 4 columns for mobile. 
- **Bento Modules:** Use varying aspect ratios (1:1, 2:1, 1:2) for cards to create a modern, dashboard-like layout.
- **Rhythm:** An 8px linear scale (referenced as a 4px base unit) governs all padding and margins. Generous whitespace (64px+) should be used between major sections to emphasize a high-end, premium feel.

## Elevation & Depth

Depth is communicated through light and transparency rather than heavy shadows.

- **Glassmorphism:** Use a background blur (`backdrop-filter: blur(12px)`) combined with a semi-transparent surface color (`#0F172A` at 60% opacity).
- **Borders:** Surfaces must feature a 1px solid border (`#1E293B`). For active or highlighted states, use a subtle gradient border that transitions from Cyan to Transparent.
- **Inner Glow:** High-fidelity components (like primary buttons) should feature a subtle inner highlight on the top edge to simulate a light source from above.
- **Shadows:** Avoid traditional black shadows. Instead, use a very soft, diffused "glow" shadow that takes on the hue of the primary accent color at 10-15% opacity for floating elements.

## Shapes

The shape language is precise and disciplined. 

- **Radius:** A consistent `0.25rem` (4px) or `0.5rem` (8px) radius is used for most UI components to maintain a "sharp" professional look. 
- **Bento Cards:** Larger layout containers should use `rounded-lg` (8px) to soften the overall interface while maintaining a structural, architectural feel. 
- **Avoid Pills:** Do not use fully rounded pill shapes unless used for status indicators (chips) to prevent the UI from appearing too consumer-focused.

## Components

- **Buttons:** Primary buttons feature a solid Electric Blue background with a subtle outer glow (`box-shadow`) of the same color. Secondary buttons use a "ghost" style with a 1px border and a glass-like hover state.
- **Bento Cards:** The standard container for all content. Each card features the 1px `#1E293B` border, a 60% opaque background, and a subtle top-left gradient flare.
- **Input Fields:** Minimalist design with only a bottom border or a very subtle ghost-box. The active state is signaled by a Cyan border and a soft blue glow.
- **Iconography:** Use 2pt stroke, linear icons. Icons should be "open" and geometric to match Space Grotesk.
- **AI Indicators:** Use the teal-to-purple gradient for any features involving AI or machine learning processing to distinguish "intelligence" from standard "data."
- **Data Tables:** Highly condensed with Inter typography. Use zebra-striping with `#0F172A` and `#0A0C10` to maintain hierarchy without heavy lines.