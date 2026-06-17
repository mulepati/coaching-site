export type PersonEntry = {
  name: string;
  note?: string;
  role?: string;
  durationLabel?: string;
  ongoing?: boolean;
  statusLabel?: string | null;
  href: string;
};

export type TraditionEntry = {
  name: string;
  note?: string;
  related: string[];
};

export type FrameworkGroup = {
  name: string;
  items: string[];
};

export const lineagePage = {
  title: "Lineage",
  intro:
    "This work is shaped by the people I've trained with, the traditions I've practiced in, and the frameworks that continue to inform how I coach. What I offer is an integration of direct training, contemplative practice, and lived experience.",
  supportingLine:
    "I share these influences here as a way of honoring the people and traditions that have shaped my work, and to make it easier to explore them directly.",
  closingNote:
    "This is not a complete map, but an acknowledgment of the people and traditions that continue to shape how I work.",
};

export const directTraining: PersonEntry[] = [
  {
    name: "Tara Howley",
    role: "Art of Accomplishment - old student program",
    durationLabel: "1.5 years",
    ongoing: true,
    href: "https://www.artofaccomplishment.com/facilitators",
  },
  {
    name: "Alexa Kistler",
    role: "Coaching",
    durationLabel: "8 months",
    statusLabel: null,
    href: "https://www.artofaccomplishment.com/facilitators",
  },
  {
    name: "Dor Konforty",
    role: "Coaching",
    durationLabel: "8 months",
    ongoing: true,
    href: "https://megananda.org/",
  },
  {
    name: "Chloe Good",
    role: "Attachment-focused coaching",
    durationLabel: "3 months",
    ongoing: true,
    href: "https://chloegood.com/",
  },
  {
    name: "Tai Hubbert",
    role: "Breathwork training - Sword and Lotus",
    durationLabel: "Level 1 training",
    ongoing: true,
    href: "https://www.swordandlotus.com/intro",
  },
];

export const teachersAndInfluences: PersonEntry[] = [
  {
    name: "Joe Hudson",
    note: "Art of Accomplishment - primary influence",
    href: "https://www.artofaccomplishment.com/",
  },
  {
    name: "Tara Howley",
    note: "Coaching and facilitation",
    href: "https://www.artofaccomplishment.com/facilitators",
  },
  {
    name: "Dor Konforty",
    note: "Transformational coaching",
    href: "https://megananda.org/",
  },
  {
    name: "Chloe Good",
    note: "Attachment and relational work",
    href: "https://chloegood.com/",
  },
  {
    name: "Oren Jay Sofer",
    note: "Mindfulness and communication",
    href: "https://www.orenjaysofer.com/",
  },
  {
    name: "David Whyte",
    note: "Poetry and philosophical inquiry",
    href: "https://davidwhyte.com/",
  },
  {
    name: "Ajahn Kovilo",
    note: "Theravada practice",
    href: "https://cloudmountain.org/profile/kovilo-bhikkhu/",
  },
  {
    name: "Ajahn Nisabho",
    note: "Theravada practice",
    href: "https://cloudmountain.org/profile/nisabho-bhikkhu/",
  },
  {
    name: "Rob Burbea",
    note: "Gaia House / dharma influence",
    href: "https://gaia.dharmaseed.org/teacher/210/",
  },
  {
    name: "Mark Lippmann",
    note: "Meditation practice and inquiry",
    href: "https://meditationstuff.wordpress.com/",
  },
  {
    name: "S. N. Goenka",
    note: "Vipassana meditation",
    href: "https://www.dhamma.org/",
  },
];

export const traditions: TraditionEntry[] = [
  {
    name: "Theravada",
    note: "Thai Forest and Goenka Vipassana influences",
    related: ["Ajahn Kovilo", "Ajahn Nisabho", "S. N. Goenka"],
  },
  {
    name: "Soto Zen",
    note: "",
    related: [],
  },
  {
    name: "Gaia House",
    note: "Insight meditation and dharma influence",
    related: ["Rob Burbea"],
  },
];

export const frameworkGroups: FrameworkGroup[] = [
  {
    name: "Art of Accomplishment",
    items: [
      "Great Decisions (2x)",
      "Old Students Year Long (2x)",
      "Masterclass (2x)",
      "Masterclass (Old Student)",
      "Connection Course (7x)",
      "Welcoming Fear",
      "Reunion (2x)",
      "GroundBreakers",
    ],
  },
  {
    name: "Ultraspeaking",
    items: [
      "Foundations / Level 1 (3x)",
      "Year-long program",
      "Level 2 (2x)",
      "Professional Level 1",
    ],
  },
  {
    name: "Nonviolent Communication",
    items: ["8-week course with Oren Jay Sofer"],
  },
  {
    name: "Therapeutic / Somatic",
    items: [
      "Internal Family Systems (IFS)",
      "Hakomi Level 1 training (ongoing)",
      "Gendlin Focusing",
    ],
  },
  {
    name: "Breathwork",
    items: ["Training with Tai Hubbert - Sword and Lotus (Level 1, ongoing)"],
  },
];
