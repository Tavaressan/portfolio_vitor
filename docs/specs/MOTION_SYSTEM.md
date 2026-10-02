# Motion System v2
## Vitor Tavares Portfolio

## Philosophy

Motion represents wind, drafting, flight and construction.

It should communicate:
- continuity;
- hierarchy;
- state;
- transformation;
- spatial relationship.

It must never feel like a library showcase.

---

## Motion Families

| Family | Meaning | Primary use |
|---|---|---|
| Wind | horizontal movement | navigation, section transitions |
| Draft | technical reveal | projects, architecture, archive |
| Petal | organic atmosphere | rare hero moments |
| Flight | depth | hero and selected media |
| Machine | stateful system response | filters, search, technical controls |

`Machine` is new in v2. It should remain restrained and functional.

---

## Wind

Predominantly horizontal.

Use for:
- hero exit;
- project navigation;
- section transitions;
- navigation underline.

Amplitude should remain small.

---

## Draft

Technical reveal through:
- clip-path;
- masks;
- width;
- transform;
- line drawing.

Best uses:
- project preview;
- architecture diagram;
- evidence reveal;
- capability preview;
- archive result transitions.

The content must remain understandable without animation.

---

## Machine

Used when the interface changes because of user input.

Examples:
- activating a project filter;
- search results changing;
- switching archive categories;
- revealing evidence;
- expanding capability detail.

Motion should communicate causality.

Avoid animated counters or decorative loading unless they represent real system
state.

---

## Petal

Rare and atmospheric.

No permanent particle field.

Use only where it reinforces the hero or a transition.

Disable under reduced motion.

---

## Flight

Hero depth.

Approximate scroll scale:

```text
1.00 → 0.94
```

Use small parallax only.

No scroll-jacking.

---

## Theme Transition

Dark/light transitions should be tied to section boundaries.

The transition may use:
- color interpolation;
- background wipe;
- Wind;
- subtle Draft line movement.

Do not animate every token independently if that creates visual noise.

---

## Project Shared Transition

Opening a project:

```text
PROJECT ENTRY
      ↓
visual expansion
      ↓
PROJECT DETAIL
```

Preserve:
- title;
- index;
- preview;
- or another identifiable element.

Returning should restore the previous archive/section state when possible.

---

## Archive Filtering

Filtering should feel like a machine re-indexing a catalogue.

Recommended:
- short opacity/position adjustment;
- stagger only when needed;
- preserve spatial anchors;
- avoid full-page transitions.

Search should react quickly and quietly.

---

## Timing

```text
micro       160ms
short       280ms
medium      520ms
cinematic   900–1400ms
```

No bounce.
No elastic easing.
No scroll-jacking.

Use easing that feels controlled and physical.

---

## Reduced Motion

With `prefers-reduced-motion: reduce`:

Disable:
- parallax;
- scroll-linked scale;
- Petal;
- cinematic transitions;
- non-essential stagger.

Keep:
- state changes;
- focus;
- filter results;
- project navigation;
- essential reveals.

---

## Performance Rules

- Do not animate layout-heavy properties unnecessarily.
- Prefer transform and opacity.
- Respect `content-visibility` where appropriate.
- Avoid continuous WebGL.
- Do not add 3D rendering merely for visual novelty.
