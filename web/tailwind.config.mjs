/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#acedff",
        "outline-variant": "#c6c6cd",
        "on-tertiary-fixed-variant": "#004e5c",
        "on-secondary-fixed-variant": "#004395",
        "on-primary-fixed": "#131b2e",
        "tertiary": "#000000",
        "surface-tint": "#565e74",
        "on-tertiary-container": "#0090a9",
        "on-error-container": "#93000a",
        "background": "#f8f9ff",
        "inverse-on-surface": "#eaf1ff",
        "error": "#ba1a1a",
        "primary-fixed": "#dae2fd",
        "tertiary-container": "#001f26",
        "inverse-surface": "#213145",
        "surface-variant": "#d3e4fe",
        "surface-bright": "#f8f9ff",
        "on-background": "#0b1c30",
        "on-surface": "#0b1c30",
        "surface": "#f8f9ff",
        "secondary-fixed": "#d8e2ff",
        "on-primary-fixed-variant": "#3f465c",
        "primary-container": "#131b2e",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed": "#001a42",
        "on-secondary": "#ffffff",
        "surface-dim": "#cbdbf5",
        "outline": "#76777d",
        "secondary-container": "#2170e4",
        "primary-fixed-dim": "#bec6e0",
        "primary": "#000000",
        "tertiary-fixed-dim": "#4cd7f6",
        "surface-container-highest": "#d3e4fe",
        "on-tertiary-fixed": "#001f26",
        "surface-container-low": "#eff4ff",
        "on-primary-container": "#7c839b",
        "inverse-primary": "#bec6e0",
        "secondary-fixed-dim": "#adc6ff",
        "on-secondary-container": "#fefcff",
        "on-surface-variant": "#45464d",
        "surface-container-lowest": "#ffffff",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "secondary": "#0058be"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "margin-desktop": "64px",
        "base": "8px",
        "margin-mobile": "20px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-md": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "caption": ["Inter"],
        "display-lg-mobile": ["Space Grotesk"],
        "body-md": ["Inter"],
        "display-lg": ["Space Grotesk"],
        "body-lg": ["Inter"],
        "label-md": ["Inter"]
      },
      fontSize: {
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "caption": ["12px", {"lineHeight": "16px", "fontWeight": "400"}],
        "display-lg-mobile": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}]
      }
    }
  },
  plugins: []
}