# Limewood Agency - Color Palette & Design Specs

**Last Updated:** 2026-07-06

---

## Color Palette

### Primary Colors

**Lemon Yellow**
- Primary: `#F4D03F`
- Bright: `#FFD700`
- Light: `#FFFACD` (light lemon)
- Dark: `#FFA500` (darker golden)

**Lime Green**
- Primary: `#32CD32`
- Bright: `#ADFF2F`
- Light: `#98FB98` (pale green)
- Dark: `#228B22` (forest green)

### Accent Colors

**Wood Brown**
- Primary: `#8B4513`
- Light: `#D2B48C` (tan)
- Dark: `#654321` (dark wood)
- Neutral: `#A0826D` (medium wood)

### Neutral Colors

**Text & Structure**
- Dark: `#222222` (near black, for text)
- Gray: `#666666` (secondary text)
- Light Gray: `#EEEEEE` (borders, dividers)
- White: `#FFFFFF` (backgrounds)

**Special**
- Background Cream: `#FFFDF7` (warm white)
- Shadow: `rgba(0, 0, 0, 0.1)` (subtle shadows)

---

## CSS Color Variables

```css
:root {
  /* Lemon */
  --lemon-primary: #F4D03F;
  --lemon-bright: #FFD700;
  --lemon-light: #FFFACD;
  --lemon-dark: #FFA500;
  
  /* Lime */
  --lime-primary: #32CD32;
  --lime-bright: #ADFF2F;
  --lime-light: #98FB98;
  --lime-dark: #228B22;
  
  /* Wood */
  --wood-primary: #8B4513;
  --wood-light: #D2B48C;
  --wood-dark: #654321;
  --wood-neutral: #A0826D;
  
  /* Neutrals */
  --text-dark: #222222;
  --text-gray: #666666;
  --text-light: #EEEEEE;
  --bg-white: #FFFFFF;
  --bg-cream: #FFFDF7;
  
  /* Effects */
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-medium: rgba(0, 0, 0, 0.2);
}
```

---

## Usage Guidelines

### Buttons & CTAs
- **Primary CTA:** Lemon Yellow (#F4D03F) with dark text
- **Secondary CTA:** Lime Green (#32CD32) with white text
- **Hover:** Brighten/darken 10% on hover

### Backgrounds
- Main background: Cream (#FFFDF7)
- Section background: White (#FFFFFF)
- Accent sections: Light lemon (#FFFACD) or light lime (#98FB98)

### Text
- Body text: Dark gray (#222222)
- Secondary text: Gray (#666666)
- On colored backgrounds: Adjust for contrast (WCAG AA compliance)

### Accents & Decorative Elements
- Wood textures: Use wood brown (#8B4513) with subtle opacity
- Lemon/lime illustrations: Use primary colors with shading
- Borders: Light gray (#EEEEEE) or muted wood (#A0826D)

### Hover & Active States
- Link hover: Lime green (#32CD32)
- Button active: Darken by 15%
- Card hover: Add shadow + 2px lift

---

## Typography

**Headings (H1, H2, H3):**
- Font: Bold sans-serif (e.g., Segoe UI, Trebuchet MS, Arial)
- Color: Dark gray (#222222) or wood brown (#8B4513)
- Line height: 1.2

**Body Text:**
- Font: Regular sans-serif
- Color: Dark gray (#222222)
- Line height: 1.6
- Size: 16px base

**Accent Text (taglines, labels):**
- Color: Lemon (#F4D03F) or Lime (#32CD32)
- Font weight: 600 (semi-bold)

---

## Visual Elements

### Textures & Patterns
- **Wood grain:** Subtle background, 5-10% opacity
- **Lemon slices:** Illustration accent (full color)
- **Lime leaf:** Illustration accent (full color)
- **Wood paneling:** Subtle horizontal lines behind team section

### Icons & Illustrations
- Style: Minimalist, outline-based
- Colors: Use palette above
- Size: Scale from 16px to 64px as needed

### Shadows & Depth
- Light shadow (cards): `0 2px 8px rgba(0,0,0,0.1)`
- Medium shadow (hover): `0 4px 12px rgba(0,0,0,0.15)`
- Dark shadow (modals): `0 8px 24px rgba(0,0,0,0.2)`

---

## Responsive Considerations
- All colors should be accessible on mobile
- Ensure 4.5:1 contrast ratio for text (WCAG AA)
- Test on light and dark displays
- Print-friendly color version (if needed)

---

## Notes
- Wood color is an accent, not primary — lemon/lime are the stars
- Keep the aesthetic fresh and modern, not retro
- Use white space generously
- The goal is "professional yet playful"
