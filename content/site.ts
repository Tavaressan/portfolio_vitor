import { LINK_REQUIRED } from "./placeholders";

export const site = {
  name: "Vitor Tavares",
  role: "Software developer",
  location: "São Paulo, Brazil",
  description: "Building software systems from embedded and cloud infrastructure to real-time applications.",
};

export const hero = {
  overline: "Software developer",
  title: "Vitor Tavares",
  lead: "Building software systems from embedded and cloud infrastructure to real-time applications.",
  sceneLabel:
    "Animated scene: a man in a fedora and round glasses reaches toward a branch of a cherry tree in bloom, petals drifting across a park.",
};

export const manifesto = {
  overline: "Manifesto",
  title: "I start where the signal starts — at the board, the wire, the protocol — and follow it all the way to the screen.",
  lead: "Every project here follows the same five moves, and each move leaves a record.",
  steps: [
    { index: "01", title: "Observe", body: "Read the schematic before writing the spec. Hardware assumptions get checked early." },
    { index: "02", title: "Draft", body: "Write the protocol down and version it. Ask the teams you depend on for the smallest change." },
    { index: "03", title: "Build", body: "Build against a synthetic source, so missing hardware never blocks the pipeline." },
    { index: "04", title: "Ship", body: "Ship the core that holds, and name what was deferred as technical debt." },
    { index: "05", title: "Evidence", body: "Publish each claim with the record that backs it, or mark it as not yet measured." },
  ],
};

// Sem href, o canal é mostrado como texto marcado, nunca como link vazio.
// GitHub: conta que hospeda todos os repositórios citados no briefing.
export const contactLinks: { label: string; href?: string }[] = [
  { label: "Email" },
  { label: "GitHub", href: "https://github.com/Tavaressan" },
  { label: "LinkedIn" },
];

export const contact = {
  overline: "Contact",
  title: "Send the problem. I will start at the wire.",
  missing: LINK_REQUIRED,
};
