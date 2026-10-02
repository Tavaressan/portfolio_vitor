# Implementation Specification v2
## Next.js Portfolio

## 1. Architecture

```text
app/
  layout.tsx
  page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  lab/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  navigation/
  hero/
  manifesto/
  capabilities/
  selected-work/
  project-entry/
  project-archive/
  project-detail/
  proof-of-work/
  track-record/
  workbench/
  section-transition/
  project-transition/
  live-clock/
  media/
  typography/

content/
  projects.ts
  capabilities.ts
  experience.ts
  workbench.ts

styles/
  tokens.css
  themes.css
  globals.css
  motion.css

public/
  media/
    hero-poster.webp
    hero.mp4
    hero.webm
    projects/
    evidence/
```

---

## 2. Content Contracts

### Project

```ts
type Project = {
  slug: string
  index: string
  title: string
  category: string
  summary: string
  stack: string[]
  status?: string
  problem: string
  context: string
  objective: string
  architecture?: string
  decisions: Decision[]
  implementation?: string
  results?: string[]
  limitations?: string[]
  evidence: Evidence[]
  links?: Link[]
}
```

### Decision

```ts
type Decision = {
  title: string
  rationale: string
  status?: "CONFIRMED" | "INFERRED" | "ASSUMED" | "OPEN QUESTION"
}
```

### Evidence

```ts
type Evidence = {
  type: "ARCHITECTURE" | "CODE" | "RUNTIME" | "DECISION" |
        "MEASUREMENT" | "DEPLOYMENT" | "LIMITATION"
  title: string
  description: string
  href?: string
  media?: string
}
```

---

## 3. Hero Contract

```tsx
<video
  className="hero__media"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/media/hero-poster.webp"
>
  <source src="/media/hero.webm" type="video/webm" />
  <source src="/media/hero.mp4" type="video/mp4" />
</video>
```

Essential text remains HTML.

Video:
- no audio;
- optimized poster;
- WebM where useful;
- MP4 fallback;
- no blocking fetch;
- respect reduced motion.

---

## 4. Theme Architecture

Use semantic tokens rather than hard-coded section colors.

```css
[data-theme="light"] { ... }
[data-theme="dark"] { ... }
```

Sections declare their visual environment.

Theme changes must not break text contrast or navigation.

---

## 5. Homepage

Required v2 journey:

```text
Hero
 ↓
Manifesto
 ↓
Capabilities
 ↓
Selected Work
 ↓
Track Record
 ↓
Workbench preview
 ↓
Horizon / Contact
```

The first prototype should still validate only one complete journey. Do not
build every secondary page before the main experience is stable.

---

## 6. Selected Work

Use editorial project entries.

Each entry:
- index;
- title;
- category;
- stack;
- summary;
- status/evidence marker;
- open action.

Hover/focus preview can use shared transition names.

Avoid generic card grids.

---

## 7. Project Archive

Route: `/projects`

Requirements:
- search;
- category filters;
- technology filters;
- clear/reset state;
- responsive results;
- accessible labels;
- URL state when useful.

Suggested categories:

```text
ALL
RUST
JAVA
IOT
EMBEDDED
AI / AGENTS
WEB
SYSTEMS
ACADEMIC
PROFESSIONAL
```

Do not implement filters that have no real content behind them.

---

## 8. Project Detail

Required sections:

```text
Problem
Context
Objective
Architecture
Stack
Decisions
Implementation
Results
Limitations
Evidence
Links
```

Results are optional.

Limitations are encouraged when appropriate.

Every factual claim must come from actual project information.

---

## 9. Proof of Work

Every featured project should have at least one concrete evidence item before
being presented as a complete case study.

Evidence can link to:
- GitHub;
- architecture artifact;
- screenshot;
- recording;
- technical document;
- measurement;
- deployment.

The UI should clearly distinguish evidence from narrative copy.

---

## 10. Capabilities

Capabilities should be data-driven and connected to projects.

```ts
type Capability = {
  index: string
  title: string
  technologies: string[]
  projectSlugs: string[]
  evidence?: Evidence[]
}
```

Do not render capabilities as generic skill cards.

---

## 11. Workbench

Route: `/lab`.

Data model:

```ts
type WorkbenchItem = {
  group: string
  name: string
  purpose: string
  relatedProjects?: string[]
  status?: "CURRENT" | "OCCASIONAL" | "EXPERIMENTAL"
}
```

Only real tools, technologies and equipment should be listed.

---

## 12. Track Record

Data-driven timeline:

```ts
type Experience = {
  period: string
  role: string
  organization: string
  context: string
  systems: string[]
  contribution: string
  links?: Link[]
}
```

The page should complement the CV.

---

## 13. Live Clock

Client-side clock:

```text
SÃO PAULO · UTC−03
HH:MM:SS
● SYSTEM ONLINE
```

Do not use the clock as a fake system-health claim. `SYSTEM ONLINE` is a visual
signature only, not telemetry.

If the clock cannot initialize, show the location/timezone without a broken state.

---

## 14. Navigation

Primary navigation:

```text
WORK
LAB
ABOUT
CONTACT
```

The name/monogram anchors home.

---

## 15. Accessibility

- semantic HTML;
- keyboard navigation;
- visible focus;
- reduced motion;
- accessible filter controls;
- accessible search;
- no hover-only content;
- no color-only status;
- alt text;
- links are real anchors;
- content works without JavaScript where practical.

---

## 16. Performance

- optimize hero poster;
- compress video;
- preload only critical media;
- lazy-load secondary media;
- use responsive images;
- avoid unnecessary JS;
- use CSS for simple hover states;
- avoid continuous WebGL;
- avoid layout shift.

---

## 17. Definition of Done

### Identity
- cinematic hero;
- distinctive editorial typography;
- paper/graphite/horizon/terracotta palette;
- no borrowed cyan/3D-orb aesthetic.

### Information architecture
- Observe → Draft → Build → Ship → Evidence is understandable;
- capabilities connect to projects;
- selected work leads to case studies;
- archive supports exploration;
- workbench communicates engineering context;
- track record provides professional context.

### Motion
- Wind;
- Draft;
- Petal;
- Flight;
- Machine;
- shared project transition;
- reduced motion.

### Engineering
- content separated from components;
- tokens centralized;
- themes semantic;
- evidence model;
- optimized media;
- accessible interaction;
- responsive layout.

### Content integrity
- no invented metrics;
- no invented production status;
- no invented equipment;
- no unsupported claims.
