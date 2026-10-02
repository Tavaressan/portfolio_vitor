# Design System v2
## Vitor Tavares Portfolio

## 1. Visual Character

Editorial engineering. Warm paper, graphite, horizon blue, terracotta, cinematic
dark surfaces and precise technical typography.

The system should look authored and physical without pretending to be a literal
paper simulator.

---

## 2. Color Tokens

### Light

```css
--bg: #EFE9DD;
--bg-surface: #F7F3EB;
--bg-elevated: #FDFBF7;
--ink: #2A2420;
--ink-2: #6B6055;
--ink-3: #9A9183;
--terracotta: #B86B4A;
--terra-deep: #9C5A3D;
--terra-wash: rgba(184,107,74,.10);
--horizon: #6F8D9E;
--hz-wash: rgba(111,141,158,.10);
--rule: #D9D1C5;
--rule-sub: #E5DED3;
```

### Dark

```css
--bg: #1C1F25;
--bg-surface: #242830;
--bg-elevated: #2C3139;
--ink: #E6E0D6;
--ink-2: #9A9088;
--ink-3: #6B6258;
--terracotta: #D0845E;
--terra-deep: #C07750;
--horizon: #8AAABB;
--rule: #333840;
--rule-sub: #2A2F36;
```

Do not introduce cyan as a new signature color.

---

## 3. Typography

- Display: EB Garamond
- Body: Source Sans 3
- Technical: JetBrains Mono

Type scale:

`0.6875 / 0.875 / 1 / 1.25 / 1.563 / 1.953 / 2.441 / 3.052rem`

Display may use large scale and restrained negative tracking. Technical
metadata should remain compact and highly legible.

---

## 4. Shape

- Maximum radius: approximately 3px.
- Thin rules.
- Flat surfaces.
- Subtle shadows only when hierarchy requires them.
- No glassmorphism.
- Avoid large rounded cards.
- Pills are reserved for functional filters or compact controls.

---

## 5. Grid

Use a disciplined editorial grid.

Desktop:
- generous outer margins;
- asymmetric text/media compositions;
- technical entries aligned to shared columns.

Mobile:
- single column;
- preserve hierarchy;
- avoid shrinking desktop compositions until unreadable.

---

## 6. Theme Sections

Dark and light are part of the information architecture.

### Dark is suited to:
- Cinema / Hero;
- Selected Work;
- Machine / Project Detail;
- technical evidence.

### Light is suited to:
- Paper / Manifesto;
- Track Record;
- Human / About;
- Horizon / Contact.

Theme transitions should happen at section boundaries and should not flash.

---

## 7. Navigation

Sticky/fixed navigation.

Desktop:
- VITOR TAVARES / monogram at left;
- WORK;
- LAB;
- ABOUT;
- CONTACT.

Navigation uses Source Sans 3 or technical labels where appropriate.

Active/hover state:
- terracotta rule or underline;
- no large pill background.

On scroll, a restrained translucent/backdrop treatment is acceptable if it
does not become glassmorphism.

---

## 8. Hero

Full-bleed supplied video.

Composition:
- figure/person left;
- sakura tree right;
- open sky and park between;
- falling petals;
- cinematic crop.

Content remains HTML, accessible and selectable.

Avoid placing a conventional card over the video.

---

## 9. Capabilities Component

Use an editorial numbered list.

Structure:

```text
01  FULL-STACK SYSTEMS                  ↗
    Rust · Java · Next.js · APIs

02  DISTRIBUTED SYSTEMS                 ↗
    MQTT · RabbitMQ · Kafka · Redis
```

Interaction:
- row highlight;
- terracotta rule;
- optional technical preview;
- arrow movement;
- evidence count or related projects.

Never make the component resemble a SaaS feature dashboard.

---

## 10. Project Entry

States:

- idle;
- hover/focus;
- reveal;
- active/open;
- reduced-motion.

Idle:
- thin rule;
- stable metadata.

Hover/focus:
- terracotta emphasis;
- preview revealed through Draft mask;
- arrow responds.

Project entry should support keyboard focus and touch without depending on hover.

---

## 11. Project Archive

The archive uses a functional control bar:

```text
[ALL] [RUST] [IOT] [EMBEDDED] [AI] [WEB]

Search projects, technologies or concepts...
```

Filters should be compact and purposeful.

Search/filter state must be reflected in accessible labels and URL state when
appropriate.

Project results should preserve the editorial visual language rather than
becoming a generic 3-column SaaS grid.

---

## 12. Workbench

The Workbench uses structured lists and small technical labels.

Avoid logo soup.

Prefer:

```text
TECHNOLOGY
WHY / WHERE USED
RELATED PROJECTS
```

Hardware entries may include:
- device;
- role;
- protocol;
- project association.

Only include real equipment and technologies actually used.

---

## 13. Track Record

Timeline rows:

```text
PERIOD
ROLE
ORGANIZATION
SYSTEMS / CONTRIBUTION
```

Keep it concise. Detailed employment history remains in the CV.

---

## 14. Proof of Work

Evidence should be a first-class component.

Possible evidence types:

- Architecture
- Code
- Runtime
- Decision
- Measurement
- Deployment
- Limitation

Visual treatment:
- technical labels;
- rules;
- small diagrams;
- repository/link affordances;
- status markers.

Do not fabricate screenshots or metrics.

---

## 15. Epistemic Status

Where useful, use:

```text
CONFIRMED
INFERRED
ASSUMED
OPEN QUESTION
```

These should be visually distinct but not color-only.

---

## 16. Footer

Footer can contain:

```text
SÃO PAULO · UTC−03
HH:MM:SS
● SYSTEM ONLINE
```

Keep the clock small.

---

## 17. Accessibility

- visible `:focus-visible`;
- keyboard navigation;
- sufficient contrast;
- semantic headings;
- alt text;
- no information conveyed only through color;
- reduced-motion mode;
- controls with accessible names;
- touch-safe interaction.

---

## 18. Avoid

- cyan signature color;
- 3D orb hero;
- glassmorphism;
- giant rounded cards;
- excessive pills;
- decorative Japanese motifs;
- constant petals;
- visual noise;
- icon/logo walls without context.
