import type { GalleryItem } from "@/lib/store/mmcp";

export type Service = {
  id: string;
  index: string;
  title: string;
  discipline: string;
  summary: string;
  image: string;
  spec: { label: string; value: string }[];
};

export const heroPlates: GalleryItem[] = [
  {
    src: `/img/control-room.webp`,
    alt: "24-hour tactical control room with multi-wall surveillance monitors",
    title: "The Watch Floor",
    caption:
      "Our Polokwane operations centre runs twenty-four hours a day, consolidating every signal, camera and patrol into a single verified picture.",
    spec: [
      { label: "Uptime", value: "24 / 7 / 365" },
      { label: "Operators", value: "12 on shift" },
      { label: "Camera feeds", value: "1 920+" },
    ],
  },
  {
    src: `/img/armed-response.webp`,
    alt: "Armed response officer in tactical uniform standing watch at dusk",
    title: "Armed Response — First Wave",
    caption:
      "PSIRA-registered armed responders deploy from four Polokwane cells, averaging sub-six-minute arrival across the metropolitan area.",
    spec: [
      { label: "Response", value: "< 6 min" },
      { label: "Cells", value: "4 active" },
      { label: "Grade", value: "B – E" },
    ],
  },
  {
    src: `/img/patrol.webp`,
    alt: "Armoured security response vehicle on a road at dusk",
    title: "Patrol & Pursuit",
    caption:
      "Ballistic-rated response vehicles run marked and unmarked patrol routes across Limpopo, linked by live telemetry to the watch floor.",
    spec: [
      { label: "Fleet", value: "18 units" },
      { label: "Armour", value: "B4 / NIJ IIIA" },
      { label: "Telemetry", value: "live" },
    ],
  },
  {
    src: `/img/ground.webp`,
    alt: "Limpopo bushveld at sunset with acacia trees and dry grass",
    title: "Ground We Hold — Limpopo",
    caption:
      "From Polokwane outwards — its city grid, its suburbs, its bushveld — MMCP holds Limpopo under one accountable picture.",
    spec: [
      { label: "Region", value: "Limpopo" },
      { label: "Sites secured", value: "340+" },
      { label: "Response zone", value: "120 km" },
    ],
  },
];

export const operations: GalleryItem[] = [
  {
    src: `/img/night.webp`,
    alt: "Night-time surveillance operations wall",
    title: "Operation Nightwatch",
    caption:
      "A 72-hour coordinated surveillance cycle across a Polokwane commercial corridor, resolving nine verified incidents with zero loss.",
    spec: [
      { label: "Duration", value: "72 hrs" },
      { label: "Incidents", value: "9 resolved" },
      { label: "Loss prevented", value: "R 2.1m" },
    ],
  },
  {
    src: `/img/k9.webp`,
    alt: "K9 handler working with patrol dog at dusk",
    title: "K9 Field Deployment",
    caption:
      "Trained detection and apprehension dogs deployed for perimeter sweeps, access-point search and high-risk escort detail.",
    spec: [
      { label: "Teams", value: "6 active" },
      { label: "Discipline", value: "patrol / detect" },
      { label: "Certified", value: "SAPCA" },
    ],
  },
  {
    src: `/img/aerial.webp`,
    alt: "Surveillance drone in flight at golden hour",
    title: "Aerial Overwatch",
    caption:
      "Licensed RPAS patrols map perimeter breaches and track movement across large agricultural and mining footprints.",
    spec: [
      { label: "Platform", value: "RPAS" },
      { label: "Endurance", value: "45 min" },
      { label: "Altitude", value: "120 m AGL" },
    ],
  },
  {
    src: `/img/surveillance.webp`,
    alt: "Close-up of CCTV camera installation",
    title: "Verified Surveillance",
    caption:
      "AI-assisted verification cuts false alarms to a fraction, routing only confirmed threats to armed response.",
    spec: [
      { label: "False-alarm cut", value: "92%" },
      { label: "Verification", value: "< 90 sec" },
      { label: "Retention", value: "30 days" },
    ],
  },
  {
    src: `/img/close-protection.webp`,
    alt: "Tactical officer in formation",
    title: "Close Protection Detail",
    caption:
      "Discreet executive protection for principals in transit, at residence and during public engagement across the province.",
    spec: [
      { label: "Detail size", value: "2 – 6" },
      { label: "Profile", value: "discreet" },
      { label: "Vehicles", value: "armoured" },
    ],
  },
  {
    src: `/img/estate.webp`,
    alt: "Gated residential estate entrance at dusk",
    title: "Estate Perimeter — Sealed",
    caption:
      "A layered defence — access control, patrols and verified surveillance — holds the perimeter of a gated residential estate.",
    spec: [
      { label: "Access points", value: "4 controlled" },
      { label: "Patrol cadence", value: "every 18 min" },
      { label: "Breach alerts", value: "instant" },
    ],
  },
];

export const services: Service[] = [
  {
    id: "armed-response",
    index: "01",
    title: "Armed Response",
    discipline: "Reaction · Armed",
    summary:
      "PSIRA-registered armed officers deploy from four Polokwane cells to any verified alarm within minutes.",
    image: `/img/armed-response.webp`,
    spec: [
      { label: "Response", value: "< 6 min" },
      { label: "Cells", value: "4" },
      { label: "Grade", value: "B – E" },
    ],
  },
  {
    id: "tactical-guarding",
    index: "02",
    title: "Tactical Guarding",
    discipline: "Presence · Patrol",
    summary:
      "Visible, disciplined guarding officers trained in de-escalation, access control and incident reporting.",
    image: `/img/commercial.webp`,
    spec: [
      { label: "Officers", value: "210+" },
      { label: "PSIRA", value: "Grade A–E" },
      { label: "Rotation", value: "12 hr" },
    ],
  },
  {
    id: "surveillance",
    index: "03",
    title: "Verified Surveillance",
    discipline: "Optics · AI",
    summary:
      "Hybrid CCTV with AI verification — only confirmed threats reach the response fleet.",
    image: `/img/surveillance.webp`,
    spec: [
      { label: "False-alarm cut", value: "92%" },
      { label: "Verification", value: "< 90 sec" },
      { label: "Retention", value: "30 days" },
    ],
  },
  {
    id: "alarms",
    index: "04",
    title: "Alarm & Detection",
    discipline: "Sensors · Linked",
    summary:
      "Intrusion, beam and panic infrastructure wired straight to the watch floor with dual-path signalling.",
    image: `/img/alarm.webp`,
    spec: [
      { label: "Signalling", value: "dual-path" },
      { label: "Panic", value: "mobile + fixed" },
      { label: "Poll cycle", value: "60 sec" },
    ],
  },
  {
    id: "executive-protection",
    index: "05",
    title: "Executive Protection",
    discipline: "Close · Discreet",
    summary:
      "Close-protection details for principals in transit, residence and public engagement.",
    image: `/img/close-protection.webp`,
    spec: [
      { label: "Detail", value: "2 – 6" },
      { label: "Profile", value: "discreet" },
      { label: "Vehicles", value: "armoured" },
    ],
  },
  {
    id: "k9-aerial",
    index: "06",
    title: "K9 & Aerial Overwatch",
    discipline: "Specialist · Mobile",
    summary:
      "Patrol and detection dogs plus licensed RPAS drones cover ground cameras cannot.",
    image: `/img/k9.webp`,
    spec: [
      { label: "K9 teams", value: "6" },
      { label: "RPAS", value: "licensed" },
      { label: "Endurance", value: "45 min" },
    ],
  },
];

export type Sector = {
  id: string;
  index: string;
  title: string;
  note: string;
  image: string;
};

export const sectors: Sector[] = [
  {
    id: "residential",
    index: "S—01",
    title: "Residential & Estate",
    note: "Layered perimeter, access control, patrols.",
    image: `/img/estate.webp`,
  },
  {
    id: "commercial",
    index: "S—02",
    title: "Commercial & Retail",
    note: "Verified surveillance, loss prevention.",
    image: `/img/commercial.webp`,
  },
  {
    id: "industrial",
    index: "S—03",
    title: "Industrial & Mining",
    note: "High-risk perimeter, response, escort.",
    image: `/img/ground.webp`,
  },
  {
    id: "agricultural",
    index: "S—04",
    title: "Agricultural Holdings",
    note: "Aerial patrol, perimeter, stock loss.",
    image: `/img/farm.webp`,
  },
];

export type Pack = {
  id: string;
  edition: string;
  title: string;
  tier: string;
  price: string;
  cadence: string;
  image: string;
  includes: string[];
};

export const packages: Pack[] = [
  {
    id: "sentinel",
    edition: "Tier I",
    title: "Sentinel",
    tier: "Verified alarms + response",
    price: "R 590",
    cadence: "/ month",
    image: `/img/estate.webp`,
    includes: [
      "24/7 alarm monitoring",
      "Armed response — 4 cells",
      "Panic app + fixed panic",
      "Monthly system health check",
    ],
  },
  {
    id: "vanguard",
    edition: "Tier II",
    title: "Vanguard",
    tier: "Surveillance + guarding",
    price: "R 1 850",
    cadence: "/ month",
    image: `/img/surveillance.webp`,
    includes: [
      "Everything in Sentinel",
      "AI-verified CCTV (8 cam)",
      "Patrol cadence — every 90 min",
      "Quarterly risk review",
    ],
  },
  {
    id: "sovereign",
    edition: "Tier III",
    title: "Sovereign",
    tier: "Full estate / site command",
    price: "By brief",
    cadence: "bespoke",
    image: `/img/control-room.webp`,
    includes: [
      "Everything in Vanguard",
      "Dedicated site commander",
      "K9 + RPAS overwatch",
      "Executive protection on call",
      "Dedicated liaison officer",
    ],
  },
];

export type Operator = {
  id: string;
  /** No personal names are published: the post is the identity. */
  role: string;
  grade: string;
  image: string;
};

export const operators: Operator[] = [
  {
    id: "o1",
    role: "Operations Director",
    grade: "PSIRA Grade A · 18 yrs",
    image: "/img/portrait-operations.webp",
  },
  {
    id: "o2",
    role: "Head, Armed Response",
    grade: "PSIRA Grade E · 14 yrs",
    image: "/img/portrait-armed.webp",
  },
  {
    id: "o3",
    role: "Watch Floor Lead",
    grade: "PSIRA Grade B · 11 yrs",
    image: "/img/portrait-watch.webp",
  },
  {
    id: "o4",
    role: "Close Protection Lead",
    grade: "PSIRA Grade E · 16 yrs",
    image: "/img/portrait-close.webp",
  },
];

export const fieldBriefing = {
  standfirst:
    "MMCP Securities was founded in Polokwane on a single conviction — that security is a craft of discipline, not a commodity of alarms.",
  body: [
    "We do not sell fear. We sell a discipline of watching, of arriving, of holding the line. Every officer on our books is PSIRA-registered; every patrol is logged; every alarm is verified before a single vehicle moves.",
    "From our watch floor in Polokwane we hold Limpopo — its estates, its mines, its shops and its homes — under a single, accountable picture. Four response cells cover the metropolitan area; aerial overwatch covers the ground that cameras cannot.",
    "We measure ourselves not in incidents responded to, but in incidents prevented. The quiet night is the work done well.",
  ],
  signoff: "— MMCP Securities, Polokwane",
};

export const stats: { value: string; label: string }[] = [
  { value: "24 / 7", label: "Watch floor" },
  { value: "< 6 min", label: "Avg. response" },
  { value: "340+", label: "Sites secured" },
  { value: "210+", label: "PSIRA officers" },
];
