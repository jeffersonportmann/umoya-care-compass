import ravi from "@/assets/team-ravi.jpg";
import shereen from "@/assets/team-shereen.jpg";
import vees from "@/assets/team-vees.jpg";
import glynis from "@/assets/team-glynis.jpg.asset.json";
import glynisHero from "@/assets/team-glynis-hero.jpg.asset.json";
import marlien from "@/assets/team-marlien.jpg.asset.json";
import ashleigh from "@/assets/team-ashleigh.jpg.asset.json";

export type TeamMember = {
  slug: string;
  n: string;
  init: string;
  r: string;
  l: string;
  img: string | null;
  /** Distinguishes founders, live-in guides and specialist practitioners. */
  kind: "partner" | "guide" | "practitioner";
  /** Optional wide header image for the member's own page. */
  hero?: string;
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
    hero: glynisHero.url,
    kind: "guide",
    d: "Glynis has a background in personal development, holistic wellbeing and organisational development, along with a lifelong connection to nature. Her experience includes Reiki, Emotional Freedom Technique (EFT), NLP, hypnotherapy, Kundalini Yoga and forest therapy.",
    more: "She also facilitates mindful nature walks, yoga sessions and women's circles, encouraging people to reconnect with themselves and find greater balance in their lives. As uMoya's live-in Wellbeing Guide, Glynis offers a warm, supportive presence throughout each guest's stay — personal conversations, regular check-ins and gentle guidance, so that guests feel heard and cared for while their privacy is respected.",
  },
  {
    slug: "marlien-wright",
    n: "Marlien Wright",
    init: "MW",
    r: "Kinesiologist | Integrative Health & Wellbeing",
    l: "",
    img: marlien.url,
    kind: "practitioner",
    d: "Marlien is a holistic wellbeing practitioner with a diverse background in kinesiology, nutrition, gut health, 12-Step counselling, yoga and Pilates. She is also the author of The Yoga Kitchen and The Mandala Kitchen.",
    more: "Her approach combines kinesiology, psychosomatic bodywork, counselling and lifestyle guidance, recognising the connection between physical health, emotional wellbeing and the nervous system.\n\nWith a compassionate and practical approach, Marlien helps individuals explore underlying imbalances, reconnect with their bodies and develop greater self-awareness. She believes in supporting each person's natural capacity for healing while encouraging balance and lasting positive change.",
  },
  {
    slug: "ashleigh-caradas",
    n: "Ashleigh Caradas",
    init: "AC",
    r: "Registered Dietitian | Nutrition & Wellbeing",
    l: "",
    img: ashleigh.url,
    kind: "practitioner",
    d: "Ashleigh is a registered dietitian with over 20 years of experience in private practice. She holds a BSc from the University of the Witwatersrand and an Honours degree in Nutrition and Dietetics from the University of Cape Town.",
    more: "Her work focuses on nutritional health, eating behaviours and the connection between food, emotions and wellbeing. With a compassionate, non-judgemental approach, she helps individuals develop healthier relationships with food and themselves.\n\nAlso a qualified yoga instructor, Ashleigh brings an understanding of the mind-body connection to her work.",
  },
];

export function findMember(slug: string | undefined) {
  return team.find((m) => m.slug === slug);
}
