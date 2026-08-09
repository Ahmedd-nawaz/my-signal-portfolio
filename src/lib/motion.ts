// Shared Framer Motion tokens, sourced from design.md's Motion &
// Interaction section. Import these into components rather than
// hardcoding a duration or easing curve directly.

export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const;

export const DURATION_FAST = 0.15; // hover/click — 150ms
export const DURATION_BASE = 0.4;  // scroll reveals — 400ms

export const STAGGER_STEP = 0.08;  // 80ms between staggered elements