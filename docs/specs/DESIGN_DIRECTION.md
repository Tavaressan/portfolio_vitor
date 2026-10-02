# Design Direction v2
## Vitor Tavares Portfolio

## 1. Creative Foundation

The portfolio is an authored technical experience built around one idea:

> **Observe → Draft → Build → Ship → Evidence**

It should feel like an engineer's drafting table becoming a working machine.

The visual reference to *Kaze Tachinu / The Wind Rises* remains atmospheric only:
wind, open sky, sakura, flight, hand-drawn warmth and cinematic stillness. It
must never become a fan site or a literal Japanese-themed portfolio.

The central identity is **Vitor Tavares**, not the reference material.

### Core principles

1. Atmosphere before ornament.
2. Engineering must remain visible.
3. Every motion must communicate state, continuity or hierarchy.
4. Technical claims should be backed by evidence whenever possible.
5. Editorial composition replaces generic SaaS cards.
6. Empty space is an active design element.
7. Dark/light changes create narrative rhythm, not theme-switch gimmicks.
8. The portfolio should feel like a system, not a collection of screens.
9. Do not invent metrics, production status, roles or results.
10. The visual language must survive implementation in Next.js without becoming dependent on a prototype runtime.

---

## 2. Narrative Architecture

The site is organized as a sequence of environments:

### 01. Cinema
Hero. The visitor first encounters atmosphere, identity and motion.

### 02. Paper
Manifesto / introduction. The visual language becomes lighter and more
analytical.

### 03. Drafting Table
Selected Work. Projects are presented as engineering sheets rather than cards.

### 04. Machine
Project detail. The visitor sees the problem, architecture, decisions,
implementation and evidence.

### 05. Archive
The complete project index. Search and filters allow technical exploration.

### 06. Workbench
Tools, technologies, hardware and engineering environment.

### 07. Human
Track record and about. Career context without becoming a conventional CV.

### 08. Horizon
Contact and footer. A calm endpoint with timezone/status information.

---

## 3. Information Model

### Observe

What problem or context existed?

### Draft

What was investigated, designed or decided?

### Build

What was actually implemented?

### Ship

What was delivered or reached a usable state?

### Evidence

What proves the previous claims?

Evidence can include:

- repository;
- architecture diagram;
- screenshots;
- runtime recording;
- protocol traces;
- measurements;
- ADR / decision record;
- deployment;
- documented limitation.

Never fabricate a metric to make a project look more successful.

---

## 4. Homepage Structure

Recommended sequence:

1. Cinema / Hero
2. Paper / Manifesto
3. Capabilities
4. Selected Work
5. Track Record
6. Workbench preview
7. Contact / Horizon

The homepage should not expose every project in full. It should create a
curated path into the Archive.

---

## 5. Capabilities

Use a numbered editorial list, not a grid of skill cards.

Example categories:

```text
01  FULL-STACK SYSTEMS
    Rust · Java · Next.js · APIs

02  DISTRIBUTED & EVENT-DRIVEN SYSTEMS
    MQTT · RabbitMQ · Kafka · Redis

03  EDGE & IoT
    ESP32 · ROS2 · FreeRTOS · AWS IoT

04  AI & AGENT SYSTEMS
    RAG · MCP · agent orchestration

05  DEVELOPER TOOLS
    Rust · CLI · automation · agent runtimes
```

Each capability should be connected to actual project evidence.

Hover/focus may reveal a small technical diagram, project count or evidence
preview. Do not turn this into a dashboard.

---

## 6. Selected Work

Selected Work is an editorial catalogue.

Each entry contains:

- sequential number;
- title;
- category;
- concise description;
- stack;
- state/status;
- optional evidence marker;
- OPEN CASE STUDY action.

Avoid floating card grids.

The interaction may reveal a visual preview through a horizontal Draft mask.

---

## 7. Project Detail

Every project should be structured around engineering evidence:

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

`Limitations` is important. If measurable results do not exist, show the current
state and limitations rather than inventing KPIs.

The project page should make a distinction between:

```text
CONFIRMED
INFERRED
ASSUMED
OPEN QUESTION
```

These states are inspired by the user's broader engineering/specification
practice and should be used only when they clarify epistemic status.

---

## 8. Archive

Route: `/projects`

Functions:

- search by name, technology or concept;
- filter by category;
- filter by technology;
- filter by context/status when useful;
- responsive project index.

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

Filters are an exploration tool, not decoration.

---

## 9. Workbench

Route: `/lab` or `/workbench`.

The Workbench should communicate what the engineer actually uses to build.

Sections:

### Languages & Runtime
Rust, Java, C/C#, TypeScript and relevant runtimes.

### Systems
MQTT, RabbitMQ, Kafka, Redis, PostgreSQL, Docker, Linux, AWS.

### Edge
ESP32, ROS2, FreeRTOS, UART and AWS IoT Core.

### AI / Agents
RAG, MCP, agent runtimes, vector search and orchestration.

### Physical Workbench
Only real hardware and equipment owned or actually used by the author.

The page should feel like an engineering bench, not a shopping list.

---

## 10. Track Record

Present professional/academic trajectory as an engineering timeline.

Each role can expose:

```text
ROLE
CONTEXT
SYSTEMS
CONTRIBUTIONS
EVIDENCE
```

The section should complement the CV, not reproduce it line by line.

---

## 11. Theme Rhythm

The portfolio should deliberately alternate between dark and light environments.

Recommended rhythm:

```text
DARK
Cinema / Hero

LIGHT
Paper / Manifesto

DARK
Selected Work / Machine

LIGHT
Track Record

DARK or NEUTRAL
Workbench

LIGHT
Horizon / Contact
```

The alternation must feel like a change of material or workspace:
cinema → paper → machine → human.

It must not feel like an arbitrary theme switch.

---

## 12. Footer

Use a subtle live clock/status indicator:

```text
SÃO PAULO · UTC−03
15:42:18
● SYSTEM ONLINE
```

The clock is a small signature, not a hero feature.

---

## 13. Deliberately Out of Scope

Do not add merely because another portfolio uses it:

- 3D orb/WebGL decoration in the hero;
- electric cyan as signature color;
- glassmorphism;
- excessive pill components;
- constant particle/petal effects;
- giant rounded cards;
- decorative Japanese motifs;
- generic skill-badge walls;
- animation on every text line;
- guestbook in Prototype 0.2.

A future guestbook may be explored separately, but it is not part of the
current core experience.

---

## 14. Rule of Gold

If an element does not:

- communicate identity;
- explain an engineering decision;
- provide evidence;
- orient navigation;
- reveal content;
- create meaningful continuity;

remove it.
