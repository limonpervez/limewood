---
target: gym coach showcase
total_score: 31
p0_count: 0
p1_count: 2
timestamp: 2026-07-15T13-31-34Z
slug: apps-html-gymcoach
---
# Critique: Gym Coach showcase (limewood.app)

Method: dual-agent (A: design review · B: detector + browser evidence)
Target: Gym Coach showcase on apps.html#gymcoach + homepage "Also from Limewood" block
Register: brand

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Disabled CTA has no visual disabled state |
| 2 | Match System / Real World | 3 | "animated" vs "photos" terminology contradiction |
| 3 | User Control and Freedom | 3 | Disabled Google Play link is href="#", jumps to top |
| 4 | Consistency and Standards | 3 | Mixed terms (animated/photos/pictures); two apps near-identical |
| 5 | Error Prevention | 3 | "Disabled" CTA still clickable/keyboard-activatable |
| 6 | Recognition Rather Than Recall | 4 | Fully self-contained, nothing to remember |
| 7 | Flexibility and Efficiency | 3 | Homepage deep-links to apps#gymcoach (good); otherwise n/a |
| 8 | Aesthetic and Minimalist Design | 3 | private/offline/free repeated in para + features + specs |
| 9 | Error Recovery | 3 | n/a for marketing page |
| 10 | Help and Documentation | 3 | Privacy linked; no FAQ needed |
| **Total** | | **31/40** | **Good (lower band)** |

## Anti-Patterns Verdict

NOT AI slop. The phone mockup tells a believable product story (completed Warm-up with green check, ringed active Workout B with ember play glyph, greyed optional cardio, "8 workouts to Level 2" gamification alert). Copy is specific ("76 moves", "5 guided minutes · done", "Never been to a gym? Perfect."). Teal+ember palette gives real identity distinct from Renewfox lime. Cleanly avoids generic-SaaS and corporate-agency anti-references.

One real risk: structural sameness. Gym Coach and Renewfox stack back-to-back with near-identical skeleton (same badge, 6-item/2-col feature list, 4-cell spec grid, phone anatomy, CTA pairing). Reads as a deliberate design system, but Gym Coach leans on borrowed identity beyond its color swap.

Deterministic scan: 5 findings, all warnings, all pre-existing or false-positive. overused-font (Inter) ×2 = intentional site fonts. em-dash-overuse ×2 = pre-existing Renewfox copy (0 em-dashes in the Gym Coach homepage block; only 1 of 5 on apps page, a CTA label). flat-type-hierarchy at apps.html:73 = borderline false positive (compares a body paragraph to a stylized mockup card). No defect the Gym Coach addition introduced.

Browser evidence: renders correctly desktop + mobile, no console errors, no horizontal overflow. Contrast measured: teal .app-total card 6.10:1 (passes AA). Real failure: .badge-soon "Launching soon" pill 2.90:1 (below AA, visible text). Mockup internals (gray #7C8B8E sub-icon 3.53:1, .sub-due 3.00:1) below AA but the whole mockup is aria-hidden decorative, so lower priority.

## Priority Issues

**[P1] Mobile feature list stays 2-column and wraps raggedly.** Inline grid-template-columns:1fr 1fr is never overridden below 560px. At 390px titles fracture across 2-3 lines. Core scannability for the most likely visitor (mobile). Fix: add .feature-list{grid-template-columns:1fr} to the <=560px block (helps Renewfox too).

**[P1] Contradictory feature copy: "animated" vs "photos".** Feature cell says "Every exercise animated" with sub-copy "Demonstration photos for all 76 moves"; paragraph says "a moving picture". For a form-anxious beginner "will it show me the movement?" is the #1 question, and the answer contradicts itself, against the stated Honest brand value. (Note: exercises DO animate via 2-frame cross-fade, so unify wording, e.g. "Animated demo for every move".)

**[P2] Primary CTA is dead; no capture path.** Only primary action is disabled "Google Play - coming soon" (real href="#", no visual disabled state, clicking scrolls to top). Secondary link is "Read the privacy policy", not conversion. Renewfox offers "Join the waitlist"; Gym Coach offers nothing. Fix: add "Notify me / Join the waitlist" -> /contact; give the disabled button a real disabled state, drop href="#".

**[P2] Closing CTA and nav ignore Gym Coach.** Gym Coach is the top showcase, yet the page's final CTA band ("Want a ping when Renewfox goes live?") and nav button ("Get Renewfox") mention only Renewfox. Mismatched closing ask. Fix: make closing CTA app-agnostic or name both.

**[P2] Low-contrast "Launching soon" badge.** .badge-soon = lemon-700 on lemon-100 = 2.90:1, below AA for 12.5px text. First thing under the badge line, real visible UI text. Fix: darken text toward ink-800 or deepen pill background. (Shared with Renewfox.)

**[P3] Redundant privacy/price messaging.** private/no-account/offline/free repeated across paragraph, two feature cells, two spec cells. Let the spec grid own price/privacy; trim duplicates.

## Persona Red Flags

Jordan (first-timer): hits animated-vs-photos contradiction; clicks confident "coming soon" button -> nothing; no notify fallback, interest dead-ends.

Riley (stress tester): activates disabled href="#" -> silent scroll-to-top; "Read the privacy policy" lands on /ascend/privacy (URL still uses old "ascend" codename while app is branded Gym Coach); narrow viewport fractures titles; spots animated/photos mismatch.

Casey (distracted mobile): 2-col feature list at 390px wraps every label, nothing scans one-handed; 4-line intro before any bullet; closing CTA talks about Renewfox not the app she opened.

## Minor Observations

- 🏋️ emoji renders small/muddy in the 68px teal tile; a custom glyph would feel more crafted.
- Spec cell "100% on-device" hyphen-wraps to "on-/device" at desktop column width.
- Real body copy passes AA (lede 5.41:1, app-alert 14.31:1).
- Homepage alternates phone direction between app blocks, softening back-to-back sameness (nice).
- Privacy path /ascend/privacy uses the retired codename; app + folder brand mismatch.

## Questions to Consider

1. Two near-identical showcases back-to-back: what one element would make a visitor remember Gym Coach specifically 30 seconds later? Right now it's "the teal one".
2. If Gym Coach owns the top slot, why do every site-wide CTA and the nav button still sell only Renewfox?
3. Do the exercises actually animate, and does the copy tell the truth consistently?
4. For a pre-launch app the real conversion is email capture, so why is a privacy-policy link the CTA instead of "Notify me"?
