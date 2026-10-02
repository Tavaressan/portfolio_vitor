import type { Experience } from "./types";
import { CONTENT_REQUIRED as C } from "./placeholders";

const work: Experience[] = [
  {
    period: C,
    role: C,
    organization: "Alfabra Elevadores",
    context: "IoT and cloud systems",
    systems: [],
    contribution: C,
  },
];

// Declarada do 1º ao 6º semestre; apresentada do 06 para o 01, com o número de cada semestre preservado
const academic: Experience[] = [
  { period: "1st semester", role: "academic project", organization: "Fatec Itaquera", project: "Rosary Store", context: C, systems: [], contribution: C },
  {
    period: "2nd semester",
    role: "academic project",
    organization: "Fatec Itaquera",
    project: "Fluxora Maternal",
    context: "Web application for nutritionist services",
    systems: ["React", "PHP", "SQLite"],
    contribution: C,
  },
  {
    period: "3rd semester",
    role: "academic project",
    organization: "Fatec Itaquera",
    project: "GT Solar",
    context: "Backend for solar energy management",
    systems: ["Java", "Spring Boot"],
    contribution: C,
  },
  {
    period: "4th semester",
    role: "academic project",
    organization: "Fatec Itaquera",
    project: "Kazu Tattoo",
    context: "Web system for a tattoo studio",
    systems: ["Java", "Spring Boot", "Vue", "MySQL", "MongoDB"],
    contribution: C,
  },
  {
    period: "5th semester",
    role: "academic project",
    organization: "Fatec Itaquera",
    project: "UP Barber",
    context: "Frontend · backend · dashboard",
    systems: [],
    contribution: "One project in three parts, to be consolidated in a single repository.",
  },
  {
    period: "6th semester",
    role: "integrator project",
    organization: "Fatec Itaquera",
    project: "Cafey",
    context: "Physical IoT system, end to end",
    systems: ["KiCad", "FreeCAD", "ESP32", "MQTT", "AWS IoT Core"],
    contribution: "A physical product designed for fabrication: mechanical design, electronics, firmware, cloud and applications.",
  },
];

export const experience: Experience[] = [
  ...work,
  ...academic.map((e, i) => ({ ...e, period: `0${i + 1} · ${e.period}` })).reverse(),
];

// Home: só o resumo que aponta para /about
export const trackTeaser = [
  { organization: "Alfabra Elevadores", summary: "IoT and cloud systems" },
  { organization: "Fatec Itaquera", summary: "Academic projects · semesters 01 · 02 · 03 · 04 · 05 · 06" },
];

export const aboutIntro = [
  "I work on IoT and cloud systems at Alfabra Elevadores: firmware at the edge, message pipelines in the middle, and the applications people actually read.",
  "I study at Fatec Itaquera and graduate in December 2026.",
];
