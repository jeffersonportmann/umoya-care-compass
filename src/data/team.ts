import ravi from "@/assets/team-ravi.jpg";
import shereen from "@/assets/team-shereen.jpg";
import vees from "@/assets/team-vees.jpg";
import glynis from "@/assets/team-glynis.jpg.asset.json";

export type TeamMember = {
  slug: string;
  n: string;
  init: string;
  r: string;
  l: string;
  img: string | null;
  /** Partners founded uMoya; guides are the live-in care team. */
  kind: "partner" | "guide";
  /** Short intro shown on the team page. */
  d: string;
  /** Extended story shown on the member's own page (to be built out further). */
  more: string;
};

export const team: TeamMember[] = [
  {
    slug: "rahul-singh",
    n: "Rahul Singh",
    init: "RS",
    r: "CEO, Founder",
    l: "Zürich, Switzerland",
    img: null,
    kind: "partner",
    d: "With a background in chemical engineering, Rahul is a lifelong student and teacher of the science of self. His curiosity about energy, nature and the principles that connect them continues to shape his thinking. He brings creativity, scientific curiosity and a distinctive perspective to the development of uMoya.",
    more: "He holds the first conversation with every guest, before anything is planned. From that conversation the shape of a stay begins — what the body has been carrying, what the week needs to look like, and where the work should start.",
  },
  {
    slug: "shereen-singh",
    n: "Shereen Singh",
    init: "SS",
    r: "Head of Integrative Healing",
    l: "Zürich, Switzerland",
    img: shereen,
    kind: "partner",
    d: "A compassionate holistic practitioner specialising in Reiki, energy healing and shamanic practices. Shereen brings warmth, intuition and a deeply personal approach to supporting people through their healing journeys.",
    more: "She leads the healing programme — Reiki, sound, breath and time in nature — and stays close throughout the stay, adjusting each session as the nervous system begins to settle.",
  },
  {
    slug: "dr-ravi-govender",
    n: "Dr Ravi Govender",
    init: "RG",
    r: "Head of Care and Clinical Advisory",
    l: "Cape Town, South Africa",
    img: ravi,
    kind: "partner",
    d: "A psychiatrist with an analytical mind and a thoughtful approach to understanding complex human experiences. Ravi brings his clinical knowledge, experience and problem-solving abilities to uMoya's approach to care.",
    more: "He looks after clinical safety and works alongside the care team, so that medical insight and energetic work support the same person instead of pulling in different directions.",
  },
  {
    slug: "vees-moodley",
    n: "Vees Moodley",
    init: "VM",
    r: "Head of Operations",
    l: "Cape Town, South Africa",
    img: vees,
    kind: "partner",
    d: "A chemical engineer with extensive experience in managing global operations. Vees brings structure, practical thinking and attention to detail, helping ensure that every aspect of the uMoya experience is thoughtfully organised.",
    more: "He runs the day-to-day in Cape Town — arrivals, the house, the team and the quiet rhythm of each stay, so that nothing a guest needs to think about is left to chance.",
  },
  {
    slug: "glynis-overmeyer",
    n: "Glynis Overmeyer",
    init: "GO",
    r: "Live-in Wellbeing Guide",
    l: "Cape Town, South Africa",
    img: glynis.url,
    kind: "guide",
    d: "Glynis has a background in personal development, holistic wellbeing and organisational development, along with a lifelong connection to nature. Her experience includes Reiki, Emotional Freedom Technique (EFT), NLP, hypnotherapy, Kundalini Yoga and forest therapy.",
    more: "She also facilitates mindful nature walks, yoga sessions and women's circles, encouraging people to reconnect with themselves and find greater balance in their lives. As uMoya's live-in Wellbeing Guide, Glynis offers a warm, supportive presence throughout each guest's stay — personal conversations, regular check-ins and gentle guidance, so that guests feel heard and cared for while their privacy is respected.",
  },
];

export function findMember(slug: string | undefined) {
  return team.find((m) => m.slug === slug);
}
