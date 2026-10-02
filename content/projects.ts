import type { Project, ProjectKind } from "./types";
import { CONTENT_REQUIRED as C, LINK_REQUIRED, RESULT_NOT_MEASURED, STATUS_REQUIRED } from "./placeholders";

// Selected Work: três projetos reais, nesta ordem. Conteúdo vindo do briefing e dos READMEs dos
// repositórios (lidos em 2026-10-01 no protótipo); o que não está confirmado fica marcado, nunca preenchido.
const selected: Project[] = [
  {
    slug: "vetor",
    index: "01",
    title: "Vetor",
    category: "Developer tooling",
    // Tipo de sistema ainda não confirmado: aparece só em "All"
    summary:
      "A tool for creating and organising workflows for agent runtimes, focused on automation, agent-assisted development and integration with different execution environments.",
    stack: ["TypeScript", "Deno", "Agent runtimes", "Workflow automation", "GitHub CLI", "Git worktrees"],
    status: STATUS_REQUIRED,
    meta: ["Selected", "Open source", "Developer tools", "Skills", "MCP", "CLI", "Hooks"],
    repositories: [
      { label: "View repository", value: "github.com/Tavaressan/Vetor", href: "https://github.com/Tavaressan/Vetor" },
    ],
    caseStudy: {
      stackLine: ["TypeScript", "Deno", "Agent runtimes"],
      evidenceMark: "Architecture · Code · Decision",
      figure: {
        caption: "Fig. 01 — The development cycle Vetor covers, as stated in the repository README.",
        alt: "Workflow cycle in six steps: ideation, backlog, isolated worktree, autonomous fix loop, ship, guard.",
      },
      spec: [
        { label: "Role", value: C },
        { label: "Context", value: "Open source" },
        { label: "Period", value: C },
        { label: "Status", value: STATUS_REQUIRED },
      ],
      problem: C,
      context:
        "Vetor is a skills plugin that coordinates agents across isolated development flows. It runs natively in one agent runtime, with partial compatibility documented for others.",
      objective: "Cover a whole development cycle: ideation, backlog, isolated worktree, autonomous fix, ship and guard.",
      architecture:
        "The repository is organised by role: agents for coordinated dispatch, skills for each step of the workflow, MCP integrations, a command-line interface, hooks and templates. The scripts are TypeScript, run on Deno.",
      decisions: [
        { ref: "D1", title: "Merges are serialised", rationale: "Issues are dispatched to agents in parallel; their merges go in one at a time." },
        { ref: "D2", title: "The fix loop is bounded", rationale: "The autonomous reproduce, fix, rebuild and test loop stops at five iterations." },
        { ref: "D3", title: "Architecture review stays manual", rationale: "The architecture-review skill is always run by hand, never on a schedule." },
      ],
      implementation:
        "Six skills carry the cycle: spec, issue-coordinator, fix-loop-agent, worktree-ship, guardian and architecture-review.",
      results: [{ text: RESULT_NOT_MEASURED }],
      limitations: [
        { text: "Headless issue coordination needs autonomous permissions to be configured first.", ref: "L-01.1" },
        { text: "Compatibility with other agent runtimes is partial.", ref: "L-01.1" },
      ],
      evidence: [
        { type: "ARCHITECTURE", ref: "Fig. 01", title: "Workflow cycle", description: "The six steps the plugin covers, and the skills that carry them." },
        {
          type: "CODE",
          ref: "E-01.1",
          title: "Skills, agents, hooks and scripts",
          description: "The published repository is the record: TypeScript on Deno, organised by role.",
          source: { label: "View repository", value: "github.com/Tavaressan/Vetor", href: "https://github.com/Tavaressan/Vetor" },
        },
        {
          type: "DECISION",
          ref: "D2",
          title: "The fix loop is bounded",
          description: "Five iterations at most, stated in the skill itself.",
          source: { label: "Source", value: "README" },
        },
        {
          type: "LIMITATION",
          ref: "L-01.1",
          title: "Known limits",
          description: "Headless coordination depends on permission setup; other runtimes are only partly supported.",
          source: { label: "Source", value: "README" },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/Vetor", href: "https://github.com/Tavaressan/Vetor" }],
    },
  },
  {
    slug: "delphos",
    index: "02",
    title: "Delphos",
    category: "AI / distributed systems",
    kind: "AI",
    summary:
      "A distributed architecture that combines application processing, RAG, messaging and specialised workers, connecting Java, Rust and Python components in a service-oriented infrastructure.",
    stack: ["Java", "Spring Boot", "Rust", "Python", "CrewAI", "RabbitMQ", "PostgreSQL", "pgvector", "Next.js", "Vertex AI / Gemini", "MinIO / S3", "Docker"],
    status: STATUS_REQUIRED,
    meta: ["Selected", "AI", "RAG", "Full-stack", "Java 21", "Distributed systems"],
    repositories: [
      { label: "View repository", value: "github.com/Tavaressan/delphos", href: "https://github.com/Tavaressan/delphos" },
    ],
    caseStudy: {
      stackLine: ["Java", "Spring Boot", "Rust", "Python", "RabbitMQ", "PostgreSQL", "pgvector", "Next.js"],
      evidenceMark: "Architecture · Code · Decision",
      figure: {
        caption:
          "Fig. 02 — Delphos services, as described in the repository README. Where the Rust services attach: [CONTENT REQUIRED].",
        alt: "Delphos services: a Next.js frontend calls a Java and Spring Boot core, which enqueues jobs on RabbitMQ for ingestion, RAG and agent-crew workers; the core stores embeddings in PostgreSQL with pgvector; Rust services handle parallel data processing.",
      },
      spec: [
        { label: "Role", value: C },
        { label: "Context", value: C },
        { label: "Period", value: C },
        { label: "Status", value: STATUS_REQUIRED },
      ],
      problem: C,
      context: "Delphos is a modular platform for orchestrating AI agents with retrieval-augmented generation.",
      objective: C,
      architecture:
        "A Next.js frontend talks to a Java and Spring Boot core. The core enqueues jobs on RabbitMQ, and specialised workers for ingestion, RAG and agent crews process them asynchronously. Rust services handle parallel data processing, a Python worker runs the agent crews with CrewAI, and embeddings are stored in PostgreSQL with pgvector. Documents go to MinIO or S3 object storage, generation runs on Vertex AI with Gemini, and the services are packaged with Docker.",
      decisions: [
        { ref: "D1", title: "Low coupling between modules", rationale: "Modules follow a clean architecture so that a later move to separate services stays open." },
        { ref: "D2", title: "Work leaves the core through a queue", rationale: "The core enqueues jobs on RabbitMQ; workers process them asynchronously." },
        { ref: "D3", title: "More than one model provider", rationale: "Vertex AI with Gemini is the provider, with a hosted and a local fallback." },
      ],
      implementation: C,
      results: [{ text: RESULT_NOT_MEASURED }],
      limitations: [{ text: C }],
      evidence: [
        {
          type: "ARCHITECTURE",
          ref: "Fig. 02",
          title: "Services and the queue between them",
          description: "Frontend, core, queue, workers and vector storage, drawn from the README.",
        },
        {
          type: "DECISION",
          ref: "D1",
          title: "Low coupling between modules",
          description: "The repository keeps architectural decision records.",
          source: { label: "Source", value: "ADRs in the repository" },
        },
        {
          type: "CODE",
          ref: "E-02.1",
          title: "Java, Rust and Python in one repository",
          description: "The published repository is the record of how the three runtimes are joined.",
          source: { label: "View repository", value: "github.com/Tavaressan/delphos", href: "https://github.com/Tavaressan/delphos" },
        },
        {
          type: "DEPLOYMENT",
          ref: "E-02.2",
          title: C,
          description: "The repository carries deployment documentation; where it runs has not been stated.",
          source: { label: "View deployment", value: LINK_REQUIRED },
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/delphos", href: "https://github.com/Tavaressan/delphos" }],
    },
  },
  {
    slug: "cafey",
    index: "03",
    title: "Cafey",
    category: "IoT / edge systems",
    kind: "IOT",
    summary:
      "A physical IoT system, end to end: mechanical design, electronics, firmware, cloud, backend and applications for a product designed to be built.",
    stack: ["KiCad", "FreeCAD", "ESP32", "Firmware", "MQTT", "AWS IoT Core", "BLE", "Kotlin", "Spring Boot", "PostgreSQL", "Kotlin Multiplatform"],
    status: "Phase 1 · schematic validated",
    meta: ["Selected", "Academic", "6th semester", "Integrator project", "Fatec Itaquera", "IoT", "Full-stack", "Hardware"],
    repositories: [
      { label: "View repository", value: "github.com/Tavaressan/cafey", href: "https://github.com/Tavaressan/cafey" },
    ],
    caseStudy: {
      stackLine: ["ESP32", "MQTT", "AWS IoT Core", "Kotlin Multiplatform", "Spring Boot", "PostgreSQL", "KiCad", "FreeCAD"],
      evidenceMark: "Architecture · Hardware · Mechanical design",
      figure: {
        caption: "Fig. 03 — Cafey system outline.",
        alt: "Cafey outline: an ESP32 module, with electronics designed in KiCad and a structure modelled in FreeCAD, switches a coffee maker through a relay and publishes over MQTT to AWS IoT Core, which feeds a Kotlin and Spring Boot API backed by PostgreSQL; Kotlin Multiplatform clients reach the module over BLE.",
      },
      spec: [
        { label: "Role", value: C },
        { label: "Context", value: "Sixth-semester integrator project" },
        { label: "Period", value: C },
        { label: "Status", value: "Phase 1 · schematic validated" },
      ],
      problem: "Make a coffee maker with a mechanical switch a connected appliance, without opening it.",
      context:
        "Cafey is an external IoT module that turns a mechanical-switch coffee maker into a connected appliance with no internal modification. It is also the sixth-semester integrator project.",
      objective:
        "A physical product designed for fabrication, connecting mechanical engineering, electronics, firmware, software and cloud.",
      architecture:
        "The work runs in four layers. Physical hardware: the mechanical structure is modelled in FreeCAD and the circuits are designed in KiCad. Edge: an ESP32, its firmware and MQTT. Cloud: AWS IoT Core, a backend and PostgreSQL. Applications: Kotlin Multiplatform clients over a Kotlin and Spring Boot API. In detail, an ESP32 drives a relay that cuts mains power to the coffee maker. The firmware, C++ on ESP-IDF and structured as active objects over FreeRTOS, speaks MQTT over TLS with X.509 certificates to AWS IoT Core. A Kotlin and Spring Boot backend with PostgreSQL consumes MQTT and exposes a REST API for devices, commands and scheduling. Kotlin Multiplatform clients cover web, mobile and desktop.",
      decisions: [
        { ref: "D1", title: "A relay outside, nothing inside", rationale: "Control is a relay on the mains line, so the coffee maker is never opened or modified." },
        { ref: "D2", title: "AWS IoT Core as the broker", rationale: "MQTT runs over TLS with X.509 certificates against a managed broker." },
        {
          ref: "D3",
          title: "Mains and low voltage on opposite sides",
          rationale: "The housing keeps the mains section and the low-voltage section apart, as electrical safety requires.",
        },
      ],
      implementation: "Phase 1, the electrical schematic, is validated. Firmware, backend and basic mobile operation belong to Phase 2.",
      results: [{ text: "Electrical schematic validated.", ref: "E-03.1" }, { text: RESULT_NOT_MEASURED }],
      limitations: [
        { text: "Component procurement is blocking board validation, mechanical design and electrical testing.", ref: "L-03.1" },
        {
          text: "The hardware handles mains voltage: assembly needs validation by an electrician before first use under load.",
          ref: "L-03.2",
        },
      ],
      evidence: [
        {
          type: "ARCHITECTURE",
          ref: "Fig. 03",
          title: "Architecture · hardware, edge, cloud and applications",
          description: "How the physical module, the edge device, the cloud and the applications relate, in one drawing.",
        },
        {
          type: "CODE",
          ref: "E-03.1",
          title: "Hardware · electronics in KiCad",
          description:
            "The circuit around the ESP32: the validated electrical schematic, kept in the repository with the board and component libraries.",
          source: { label: "View repository", value: "github.com/Tavaressan/cafey", href: "https://github.com/Tavaressan/cafey" },
        },
        {
          type: "CODE",
          ref: "E-03.2",
          title: "Mechanical design · structure in FreeCAD",
          description: "The physical structure of the module is modelled in FreeCAD and is meant to be produced. Visual record: [CONTENT REQUIRED].",
          source: { label: "Model files", value: LINK_REQUIRED },
        },
        {
          type: "CODE",
          ref: "E-03.3",
          title: "Firmware · embedded software on the ESP32",
          description: "C++ on ESP-IDF, structured as active objects over FreeRTOS. Implementation record: [CONTENT REQUIRED].",
        },
        {
          type: "DECISION",
          ref: "D2",
          title: "Communication · MQTT",
          description: "The module speaks MQTT over TLS with X.509 certificates.",
          source: { label: "Source", value: "README" },
        },
        {
          type: "DEPLOYMENT",
          ref: "E-03.4",
          title: "Cloud · AWS IoT Core",
          description: "The managed broker between the module and the backend. Deployment record: [CONTENT REQUIRED].",
          source: { label: "View deployment", value: LINK_REQUIRED },
        },
        {
          type: "CODE",
          ref: "E-03.5",
          title: "Backend · Kotlin, Spring Boot and PostgreSQL",
          description: "A REST API for devices, commands and scheduling, consuming MQTT. Implementation record: [CONTENT REQUIRED].",
        },
        {
          type: "CODE",
          ref: "E-03.6",
          title: "Application · Kotlin Multiplatform",
          description: "Clients for web, mobile and desktop. Implementation record: [CONTENT REQUIRED].",
        },
        {
          type: "DECISION",
          ref: "D1",
          title: "A relay outside, nothing inside",
          description: "The module is external; the appliance stays as it was built.",
          source: { label: "Source", value: "README" },
        },
        {
          type: "LIMITATION",
          ref: "L-03.1",
          title: "Blocked on components",
          description: "Board validation, mechanical design and electrical tests wait for parts.",
        },
        {
          type: "LIMITATION",
          ref: "L-03.2",
          title: "Mains voltage",
          description: "The module switches 127 V; it must be validated by an electrician before use under load.",
        },
      ],
      links: [{ label: "View repository", value: "github.com/Tavaressan/cafey", href: "https://github.com/Tavaressan/cafey" }],
    },
  },
];

// Só no arquivo: projetos reais sem página de detalhe; o link leva ao repositório
const archiveOnly: Project[] = [
  {
    slug: "esp32-iot-app",
    index: "04",
    title: "ESP32 IoT App",
    category: "IoT",
    kind: "IOT",
    stack: ["ESP32", "ESP-IDF", "C", "MQTT", "AWS IoT Core"],
    meta: ["Embedded", "Firmware"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/esp32-iot-app" }],
  },
  {
    slug: "arara-carioca",
    index: "05",
    title: "Arara Carioca",
    category: "Mobile",
    kind: "MOBILE",
    stack: ["React Native"],
    meta: [],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/arara-carioca-react-native" }],
  },
];

// Trilha acadêmica declarada do 1º ao 5º semestre (o 6º é o Cafey, em Selected Work),
// apresentada do mais recente para o mais antigo. UP Barber é um projeto único com três repositórios.
const academic: Omit<Project, "index">[] = [
  {
    slug: "rosary-store",
    title: "Rosary Store",
    category: "Academic · 1st semester",
    stack: [],
    meta: ["Academic", "1st semester", "Fatec Itaquera"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/rosary-store/tree/main" }],
  },
  {
    slug: "fluxora-maternal",
    title: "Fluxora Maternal",
    category: "Academic · 2nd semester",
    kind: "WEB",
    stack: ["React", "PHP", "SQLite"],
    meta: ["Academic", "2nd semester", "Fatec Itaquera", "Full-stack"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/fluxora-maternal" }],
  },
  {
    slug: "gt-solar",
    title: "GT Solar",
    category: "Academic · 3rd semester",
    stack: ["Java", "Spring Boot"],
    meta: ["Academic", "3rd semester", "Fatec Itaquera", "Backend"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/GT-Solar-Backend" }],
  },
  {
    slug: "kazu-tattoo",
    title: "Kazu Tattoo",
    category: "Academic · 4th semester",
    kind: "WEB",
    stack: ["Java", "Spring Boot", "Vue", "MySQL", "MongoDB"],
    meta: ["Academic", "4th semester", "Fatec Itaquera", "Full-stack"],
    repositories: [{ label: "View repository", href: "https://github.com/Tavaressan/Project-LDW" }],
  },
  {
    slug: "up-barber",
    title: "UP Barber",
    category: "Academic · 5th semester",
    stack: [],
    meta: ["Academic", "5th semester", "Fatec Itaquera", "Full-stack"],
    repositories: [
      { label: "Frontend", href: "https://github.com/Tavaressan/PI-5SM-FRONT" },
      { label: "Backend", href: "https://github.com/RafaelBorges22/PI-5SM-BACK" },
      { label: "Dashboard", href: "https://github.com/Tavaressan/PI-5SM-DASHBOARD" },
    ],
  },
];

export const selectedProjects = selected;

export const allProjects: Project[] = [
  ...selected,
  ...archiveOnly,
  ...academic
    .slice()
    .reverse()
    .map((p, i) => ({ ...p, index: String(6 + i).padStart(2, "0") })),
];

export const getCaseStudy = (slug: string) => selected.find((p) => p.slug === slug && p.caseStudy);

export const kindFilters: { value: ProjectKind | null; label: string }[] = [
  { value: null, label: "All" },
  { value: "WEB", label: "Web" },
  { value: "MOBILE", label: "Mobile" },
  { value: "IOT", label: "IoT" },
  { value: "AI", label: "AI" },
];
