# Design Brief

## Direction

NAYAAB-E-KALA — A refined art studio landing page using wine, black, and white as a luxury palette with minimal layout and artistic texture accents.

## Tone

Intentional restraint with craft — every element earns its place; negative space breathes; no gradients or skeuomorphism.

## Differentiation

Subtle animated brush stroke patterns and artistic grain overlays on key sections combined with bilingual typography respecting both Hindi and English as equally authentic design elements.

## Color Palette

| Token             | OKLCH        | Role                          |
| ----------------- | ------------ | ----------------------------- |
| background        | 0.98 0 0     | Off-white page background     |
| foreground        | 0.18 0 0     | Deep charcoal body text       |
| card              | 1.0 0 0      | Pure white card surfaces      |
| primary           | 0.35 0.18 15 | Deep wine accent              |
| accent            | 0.55 0.22 15 | Vibrant wine highlights       |
| muted             | 0.92 0 0     | Subtle borders, subtle greys  |
| secondary         | 0.55 0.22 15 | Wine buttons and CTAs         |
| destructive       | 0.55 0.22 25 | Wine variant (form validation)|

## Typography

- Display: Fraunces — elegant serif for headings, hero text, section titles
- Body: General Sans — warm humanist sans-serif for paragraphs, labels, bilingual content
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl`, label `text-sm uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Minimal shadow hierarchy: subtle baseline shadows (`shadow-subtle: 0 2px 8px`), elevated for interactive elements (`shadow-elevated: 0 8px 16px`); surfaces separated by white/off-white background alternation rather than depth effects.

## Structural Zones

| Zone    | Background    | Border              | Notes                                      |
| ------- | ------------- | ------------------- | ------------------------------------------ |
| Header  | White (1.0)   | Wine border-bottom  | Minimal padding, artistic spacing          |
| Hero    | Off-white     | None                | Artistic texture overlay, wine accent text |
| Content | Alternating   | None                | White + off-white alternation per section  |
| CTA Box | Wine accent   | None                | Wine background, white text                |
| Footer  | Deep black    | Wine border-top     | White text, wine links                     |

## Spacing & Rhythm

Section gaps: `py-16 md:py-24` for major sections; micro-spacing: `gap-4` for card grids, `px-4 md:px-8` for section padding; bilingual labels stacked with consistent vertical rhythm.

## Component Patterns

- Buttons: wine background (`bg-primary`), white text, rounded corners (`rounded-lg`), smooth hover effect (`hover:bg-accent transition-accent`)
- Cards: white background, minimal shadow, wine accent left border or top border on hover
- Badges: wine text on off-white background, small rounded (`rounded-md`), uppercase label

## Motion

- Entrance: fade-in (0.4s ease-out) on section scroll, slide-up on cards
- Hover: smooth color transition (0.3s) on buttons, scale (1.05) on interactive elements, wine accent brightening
- Decorative: none (avoid distraction from content)

## Constraints

- No purple, no blue, no gradients (wine/black/white only)
- Bilingual content equally weighted (Hindi first in taglines, English paralleled)
- Mobile-first responsive (sm, md, lg breakpoints)
- High contrast text (>4.5:1 ratio) for accessibility
- Typography hierarchy via size and weight, not color

## Signature Detail

Subtle diagonal grain texture overlay (artistic-texture utility) behind hero and key CTA sections; creates visual depth through material suggestion rather than shadow, reinforcing the art studio aesthetic without distraction.
