import { bookingUrl } from "@/data/site";

export type CollaborationLink = {
  label: string;
  href: string;
};

export type CollaborationSectionEntry = {
  title: string;
  description: string;
  visualVariant: "podcasts" | "facilitation" | "retreats" | "handpan";
  imageSrc?: string;
  imageAlt?: string;
  links: CollaborationLink[];
  overviewTitle?: string;
  overviewItems?: string[];
};

export const collaborationPage = {
  intro:
    "Samek collaborates on exploratory, thoughtful projects across facilitation, conversation, and experiential work.",
  outro: "If you're not sure where you fit, that's fine - reach out.",
  cta: {
    label: "Let's Chat",
    href: bookingUrl,
  },
  sections: [
    {
      title: "Podcasts",
      description:
        "Long-form conversations, collaborative episodes, and inquiry-driven dialogue that make room for honesty instead of performance. This includes the current Exploring Aliveness podcast as well as earlier conversations from The Attunement Podcast.",
      visualVariant: "podcasts",
      imageSrc: "https://i.ytimg.com/vi/AQ4qaqde7xE/hqdefault.jpg",
      imageAlt: "Exploring Aliveness podcast thumbnail",
      links: [
        {
          label: "Exploring Aliveness",
          href: "https://www.youtube.com/@ExploringAlivenessPodcast",
        },
        {
          label: "Featured Spotify episode",
          href: "https://open.spotify.com/episode/5wr0fSueQ0L4h60dhwQxHL?si=XMwCmToATCqk1WOSghi_1A",
        },
        {
          label: "The Attunement Podcast",
          href: "https://www.youtube.com/@TheAttunementPodcast",
        },
      ],
    },
    {
      title: "Facilitation",
      description:
        "Workshops, courses, and group experiences that help people notice what is happening, stay in contact with themselves, and move with more clarity together. This work ranges from guided containers to more custom formats shaped around a group's actual needs.",
      visualVariant: "facilitation",
      links: [],
      overviewTitle: "Container Design",
      overviewItems: [
        "Thoughtful structure without over-rigidity",
        "Clear invitations into participation",
        "Emotional honesty with care and pacing",
        "Formats shaped around the people actually in the room",
      ],
    },
    {
      title: "Retreats",
      description:
        "Immersive spaces for emotional honesty, relational depth, and the kind of reflection that benefits from shared time and presence. Retreat work brings together inquiry, connection, and simple life together in a way that can move quickly and land deeply.",
      visualVariant: "retreats",
      imageSrc:
        "https://harryandsamek.com/resources/TOP-TIER/budda%20VIBING.jpg",
      imageAlt: "Retreat image from The Attunement Residency",
      links: [
        {
          label: "The Attunement Residency",
          href: "https://harryandsamek.com",
        },
        {
          label: "The Village 2025",
          href: "https://docs.google.com/document/d/1dgyjo1meo_IeWlNnNKihT5n_20oTD4Nv2D3CF7CR3I8/edit?usp=sharing",
        },
      ],
    },
    {
      title: "Sound / Handpan",
      description:
        "Sound-based experiences that support contemplation, regulation, and a more intentional atmosphere. This part of the work leans quieter and more spacious, often serving as a soft way into presence rather than explanation.",
      visualVariant: "handpan",
      imageSrc: "/handpan-removebg-preview.png",
      imageAlt: "Handpan instrument",
      links: [],
    },
  ] satisfies CollaborationSectionEntry[],
};
