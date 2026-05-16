---
name: Precision Intelligence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f26'
  on-tertiary-container: '#0090a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is built on the pillars of **technical rigor, transparency, and strategic clarity.** It targets a sophisticated audience of decision-makers in fintech and NGOs who require the reliability of enterprise-grade software combined with the agility of a modern AI startup.

The visual style is **Corporate Modern with a Technical Edge.** It leverages heavy whitespace to signify clarity of thought, while utilizing precise geometric accents to reflect the accuracy of data processing. The emotional response should be one of "calm authority"—the feeling that complex data has been elegantly tamed into actionable insights.

## Colors
The palette is anchored by a deep **Midnight Navy** (Primary), providing a foundation of trust and stability. Action and progression are signaled through **Electric Blue** (Secondary) and **Vivid Cyan** (Tertiary), often used in tandem through subtle linear gradients (135° angle) to represent the flow of information.

The background uses a hierarchy of off-whites (#F8FAFC) to maintain a "clean SaaS" aesthetic without the harshness of pure white. Success, Warning, and Error states should be muted but clear, maintaining the professional tone of a high-end consultancy.

## Typography
This design system employs a dual-typeface strategy to balance personality with utility. **Space Grotesk** is used for all headlines and display text; its geometric, idiosyncratic terminals suggest a futuristic, technical prowess.

**Inter** handles all functional and long-form content. It is selected for its exceptional legibility in data-dense environments. To maintain a premium feel, body text uses a slightly increased line-height and tight letter-spacing on larger headings to ensure a cohesive, "locked-in" appearance.

## Layout & Spacing
The layout follows a **12-column fluid grid** system. We prioritize "breathability" by utilizing generous outer margins and vertical spacing (frequently 80px or 120px between sections) to separate distinct ideas.

- **Desktop (1440px+):** 12 columns, 64px margins, 24px gutters.
- **Tablet (768px - 1024px):** 8 columns, 40px margins, 20px gutters.
- **Mobile (320px - 480px):** 4 columns, 20px margins, 16px gutters.

The spacing rhythm is strictly based on an 8px scale. Component internal padding should favor the horizontal (e.g., 12px top/bottom, 20px left/right) to create a sense of forward momentum.

## Elevation & Depth
Depth in the design system is achieved through **Ambient Tinted Shadows.** Unlike neutral gray shadows, our shadows incorporate a hint of the Midnight Navy primary color (#0F172A) at very low opacities (5–8%). This creates a more integrated, premium feel.

- **Level 1 (Surface):** Flat, used for the main background.
- **Level 2 (Cards):** 0px 4px 20px rgba(15, 23, 42, 0.05). Used for static content containers.
- **Level 3 (Interactive):** 0px 10px 30px rgba(15, 23, 42, 0.08). Used for hovered states and dropdowns.
- **Technical Layers:** Subtle 1px borders in a very light gray-blue (#E2E8F0) are preferred over heavy shadows to define boundaries in data-heavy views.

## Shapes
The shape language is **Soft-Rounded.** This specific radius (8px for standard components) strikes a balance between the "friendliness" of consumer apps and the "precision" of enterprise tools. 

Corners should never be fully sharp, as that feels overly aggressive for a consultancy, nor should they be fully pill-shaped (except for Tags/Chips), as that can feel too casual. Large containers like section backgrounds or hero images should use `rounded-xl` (24px) to soften the layout's structural edges.

## Components
### Buttons
Primary buttons use a subtle linear gradient from **Electric Blue** to a slightly deeper shade. They feature a 1px inner light-blue stroke to give a "glassy" edge. Text is always semi-bold Inter.

### Cards
Cards are the primary vehicle for consultancy "cases." They use a white background, the Level 2 ambient shadow, and a subtle transition where the shadow deepens and the border-color shifts to the Secondary Blue on hover.

### Input Fields
Minimalist with a "ghostly" feel. No background fill when empty—only a 1px border (#CBD5E1). Upon focus, the border transitions to Primary Navy with a 2px outer glow in Tertiary Cyan (20% opacity).

### Chips & Badges
Used for AI labels and data categories. These are pill-shaped, using a light tint of the Tertiary color (#CFFAFE) with dark text to ensure high contrast and readability.

### Progress & Data Viz
Lines should be thin (2px) with rounded caps. Gradients should be used sparingly in charts to indicate "growth" or "optimization" trends, moving from Cyan to Blue.