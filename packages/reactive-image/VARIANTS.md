# Reactive Image Variant Notes

## Architecture Overview
- `packages/reactive-image/src/index.ts` re-exports the union types and the `ReactiveImage` orchestrator. `ReactiveImage.tsx` checks `props.variant` and renders the matching component or falls back to a plain `<img>`.
- `BaseProps` in `src/types.ts` keeps the shared `<img>` API scoped, while `VariantProps` is a discriminated union that layers variant specific props on top.
- Every variant folder follows the same layout: `Component.tsx`, `hooks.ts`, `animations.ts`, `types.ts` (plus a README). Animation presets live in plain JS objects that feed CSS custom properties (`--duration`, `--origin`, etc.).
- Custom hooks isolate hover/zoom/tilt state, timeouts, raf usage, touch options, and callback lifecycles so the visual components stay declarative.
- Adding a new variant only requires a new folder, updating `VariantName`/`VariantProps`, and plugging the component into `ReactiveImage.tsx`.

## Existing Variants
### HoverSwitch (`src/variants/HoverSwitch/HoverSwitch.tsx`)
**Behavior:** Swaps between `src` and `hoverSrc` with multiple animations. `useHoverSwitch` manages hover state, optional preloading, and touch friendly handlers.

**Key Props:**
- `animation`: `slide`, `crossfade`, `zoom`, `blur`, `rotateY`, `slideUp`, `slideDown`, `scaleRotate`.
- `slideDirection` for slide based presets.
- `timing` (duration/delay/easing) injected as CSS custom props.
- `preloadHover`, `disableLazy`, `enableTouch`, `hoverClassName`, lifecycle callbacks.

**Notes:** Animation recipes live in `animations.ts` and the component merges them with `useMemo`. Hover end/start callbacks fire through a single timeout bucket to avoid leaks.

**Possible New Animations:** radial mask (clip-path circle reveal), pixel dissolve (CSS filter blur + opacity), duotone shift (CSS filter before crossfade), diagonal slide (two-axis translate reveal).

### ZoomOnHover (`src/variants/ZoomOnHover/ZoomOnHover.tsx`)
**Behavior:** Applies zoom/transform combos to a single image. `useZoomOnHover` keeps `isZoomed`, optional cursor-follow transform origin, and touch hooks.

**Key Props:**
- `animation`: `scale`, `scaleRotate`, `scaleBlur`, `scaleFade`, `scaleSlide`, `perspective`, `pulse`, `bounce`, `elastic`.
- `zoomScale`, `origin`, `followCursor`, `opacityChange`, `blurAmount`, `rotation`.
- `containZoom`, `enableTouch`, `zoomClassName`, `onZoomStart/End`.

**Notes:** CSS custom properties (`--origin`, `--zoom-scale`, `--blur`, `--rotation`) keep inline styles trivial. Hook level math keeps mouse tracking light.

**Possible New Animations:** spotlight mask (mask-image tied to cursor), ripple (keyframe scale pulses), RGB split (pseudo elements with translate), magnifier (lens style oval mask).

### TiltOnHover (`src/variants/TiltOnHover/TiltOnHover.tsx`)
**Behavior:** 3D tilt with optional glare, parallax, and magnetic behaviors. `useTiltOnHover` normalizes pointer/touch/gyroscope data and feeds a shared `tiltState`.

**Key Props:**
- `animation`: `basic`, `glare`, `scale`, `perspective`, `bounce`, `elastic`, `magnetic`, `float`, `parallax`.
- `tiltMax`, `axis`, `reverse`, `resetOnLeave`, `gyroscope`, `enableTouch`.
- `perspective`, `scale`, `glare` config, `shadow`, `tiltClassName`, `onTiltStart/Move/End`.

**Notes:** Container transforms use CSS vars (`--tilt-x`, `--tilt-y`, etc.) so new motion curves can hook in easily. `glare` renders a dedicated overlay, and `shadowPresets` store drop shadow options.

**Possible New Animations:** spring return (physics feel), depth layers (stacked blurred copies), gyro parallax (multiple layers reacting to tilt), hover trail (gradient following the cursor).

### ClickExpand (`src/variants/ClickExpand/ClickExpand.tsx`)
**Behavior:** Turns any image into a modal style zoom on click. `useClickExpand` manages open/close, animation phases, and callbacks; `useScrollLock` and `useFocusTrap` handle UX niceties.

**Key Props:**
- `modalAnimation`: `scaleFade`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `springPop`, `zoomBounce`, `rotateIn`, `flipIn`.
- `backdrop`: `dim`, `blur`, `glass`, `dark`, `none` (plus `customBackdrop`).
- `modalSize`: `sm`, `md`, `lg`, `xl`, `full`, `auto`.
- `closeOnEsc`, `closeOnBackdrop`, `animationDuration`, `enableKeyboard`, `preventScroll`, `caption`, class overrides, callbacks.

**Notes:** Keyframes are injected once via `ANIMATION_CSS`. Modal markup uses `figure` + `figcaption`, and the close button ships with ARIA labels plus hover feedback.

**Possible New Animations:** sheet-up (mobile bottom sheet feel), drawer (side anchored), morph/FLIP (start from trigger dimensions), stack (card deck expanding).

### PanReveal (`src/variants/PanReveal/PanReveal.tsx`)
**Behavior:** Reveals a secondary visual (or a different crop of the same asset) by panning, masking, or spotlighting portions of the image. Combines layered `<img>` tags with mask/clip-path math to create cinematic reveals.

**Key Props:**
- `animation`: `slide`, `mask`, `spotlight`.
- `secondarySrc`: optional alternate asset to reveal.
- `direction`: `left`, `right`, `up`, `down`, `diagonal` for slide preset.
- `panAmount`, `maskShape`, `maskSize`, `gradientColor`.
- `followCursor`, `enableTouch`, `revealClassName`, lifecycle callbacks.

**Notes:** `usePanReveal` mirrors the pattern of other hooks—hover/touch handlers fire `onRevealStart` and schedule the `onRevealEnd` callback, while cursor position is normalized to CSS percentages for clip-path math. Animations rely heavily on CSS custom properties (`--cursor-x`, `--gradient-direction`, `--duration`) to keep the component declarative and easy to theme.

## Shared Hook & Animation Principles
- Hooks clean up `setTimeout`, `requestAnimationFrame`, and event listeners on unmount to avoid leaks.
- CSS custom properties make theming/extending easy; every variant already exposes the knobs you would pass down from a design system.
- Touch support is opt-in to avoid hijacking passive scroll; enabling it wires the same handlers through the custom hooks.
- Preloading (HoverSwitch) and overflow containment (ZoomOnHover) are good blueprints for future perf sensitive variants.

## How to Add a New Variant
1. Create `src/variants/NewVariant/` with `NewVariant.tsx`, `types.ts`, `hooks.ts`, `animations.ts` following the established structure.
2. Extend `VariantName` and `VariantProps` in `src/types.ts` so the new discriminated union branch becomes available.
3. Update `ReactiveImage.tsx` with a new branch, e.g. `if (variant === "panReveal") return <PanReveal {...props} />;`.
4. Document the props/animations (package README or a variant specific doc) so consumers know how to opt in.
5. Keep CSS knobs in `animations.ts` and surface runtime tuning via props or CSS custom props; reuse shared helpers when possible.
6. Mirror the lifecycle callback pattern (`onAnimationStart`, `onAnimationEnd`, etc.) for API consistency.

## Variant & Animation Idea Backlog
| Variant | Goal | Suggested Animations |
| --- | --- | --- |
| **PanReveal** | Two cropped versions of the same image sliding over one another | mask-image pans, inertia easing, gradient wipes |
| **KenBurnsSequence** | Slow cinematic zoom/pan for slideshows or hero blocks | Ken Burns keyframes, crossfade between frames |
| **DepthFocus** | Emphasize a focal point by shifting blur/focus | radial gradient masks, CSS filter blur swap |
| **SplitLayers** | Foreground and background layers move at different speeds | translateZ parallax, staggered timing |
| **SpotlightReveal** | Cursor controlled circular spotlight that recolors the asset | mix-blend-mode overlays, animated clip-path |
| **ScrollReactive** | Tie animation state to scroll progress / viewport enter | IntersectionObserver trigger, progress based transforms |
| **PolaroidStack** | Fan out a stack of photos on hover with drop shadows | rotate/translate keyframes, depth shadows |

## Extra Notes
- Align naming for callbacks across variants to keep `ReactiveImageProps` ergonomic.
- If animation presets grow too large, consider a `variants/shared/animations` helper to deduplicate easing strings or transitions.
- Overlay style variants (modal, sheet, lightbox) can reuse `useScrollLock`/`useFocusTrap` for consistency.
- Preserve `willChange` only on the properties actually used in a preset to keep GPU allocation tame on low end devices.
