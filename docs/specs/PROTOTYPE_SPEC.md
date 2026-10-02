# Prototype Specification v0.2
## Vitor Tavares Portfolio

## Objective

Validate the updated visual and information architecture without prematurely
building the entire production site.

The prototype must answer:

1. Does Dark → Light → Dark create useful rhythm?
2. Does the portfolio communicate engineering before decoration?
3. Can Capabilities connect naturally to Evidence?
4. Does Selected Work remain editorial rather than card-like?
5. Does the Archive feel useful at 10–20 projects?
6. Does Workbench add authenticity without becoming a gear catalogue?
7. Does Proof of Work make projects more credible?
8. Does the existing cinematic identity survive these additions?

---

## Journey

```text
CINEMA
Hero
  ↓
PAPER
Manifesto
  ↓
CAPABILITIES
Interactive engineering list
  ↓
DRAFTING TABLE
Selected Work
  ↓
MACHINE
Project Detail + Proof of Work
  ↓
ARCHIVE
Project filtering/search
  ↓
WORKBENCH
Technical environment
  ↓
HUMAN
Track Record
  ↓
HORIZON
Contact + clock
```

The prototype may use simulated navigation for secondary routes, but the visual
behavior must be representative of production.

---

## Prototype Content

Use real or already-confirmed project information wherever available.

Do not fill missing fields with invented metrics.

For uncertain content, use explicit placeholders:

```text
[CONTENT REQUIRED]
[RESULT NOT MEASURED]
[LINK REQUIRED]
```

---

## Validation Checklist

### Hero
- [ ] supplied MP4 remains the visual anchor;
- [ ] text remains readable without a heavy overlay;
- [ ] video crop preserves the intended composition;
- [ ] reduced motion is coherent.

### Theme rhythm
- [ ] dark hero;
- [ ] light manifesto;
- [ ] dark work/machine;
- [ ] light human/contact;
- [ ] no abrupt flashing.

### Capabilities
- [ ] numbered list;
- [ ] hover/focus behavior;
- [ ] project/evidence relationship;
- [ ] no dashboard aesthetic.

### Selected Work
- [ ] editorial entries;
- [ ] technical metadata;
- [ ] horizontal reveal;
- [ ] shared project transition.

### Archive
- [ ] search;
- [ ] category filtering;
- [ ] reset;
- [ ] result transition;
- [ ] responsive behavior.

### Project Detail
- [ ] Problem;
- [ ] Context;
- [ ] Objective;
- [ ] Architecture;
- [ ] Decisions;
- [ ] Results;
- [ ] Limitations;
- [ ] Evidence.

### Workbench
- [ ] software;
- [ ] systems;
- [ ] edge;
- [ ] AI/agents;
- [ ] only real equipment.

### Track Record
- [ ] concise timeline;
- [ ] contribution-oriented;
- [ ] not a duplicate CV.

### Footer
- [ ] São Paulo timezone;
- [ ] live clock;
- [ ] subtle system signature.

---

## Review Loop

```text
BUILD
  ↓
SCREENSHOT
  ↓
DETECT
  ↓
CLASSIFY
  ├── IMPLEMENTED
  ├── REINTERPRETED
  ├── LOST
  ├── UNINTENTIONAL
  └── NEEDS DECISION
  ↓
FIX
  ↓
VERIFY
```

Do not judge the prototype only by code. Review:
- composition;
- hierarchy;
- readability;
- interaction;
- motion;
- responsive behavior;
- consistency with Design System v2.
