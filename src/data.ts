import mondayContacts from "./assets/monday-contacts-2.jpeg";
import orderFlowchart from "./assets/order-flowchart.jpeg";
import dealBoards from "./assets/deal-boards.jpeg";
import airtableSales from "./assets/airtable-sales.jpeg";
import requestAutomations from "./assets/request-automations.jpeg";
import ghlContacts from "./assets/ghl-contacts.jpeg";
import makeScenario from "./assets/make-scenario.jpeg";

export type NavItem = { label: string; href: string; num: string };
export type Role = { when: string; role: string; company: string; desc: string };
export type Skill = { title: string; desc: string };

export type CaseStudy = {
  num: string;
  slug: string;
  tool: string;
  title: string;
  category: string;
  img: string | null;
  href: string;
};

export type CaseGroup = { tool: string; count: string; items: CaseStudy[] };

const pad = (n: number) => String(n).padStart(2, "0");

export const nav: NavItem[] = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Capabilities", "#capabilities"],
  ["Work", "#work"],
  ["Contact", "#contact"],
].map(([label, href], i) => ({ label: label!, href: href!, num: pad(i + 1) }));

export const roles: Role[] = [
  {
    when: "2025",
    role: "Customer Support Officer",
    company: "Mita Technologies",
    desc: "Handled 30+ daily inquiries across WhatsApp, email, and live chat for academic and research clients, kept 100% follow up coverage on assigned tickets, and helped revise support workflows that improved response times by 20%.",
  },
  {
    when: "2024 to 2025",
    role: "Customer Operations & Service Delivery Lead",
    company: "Kaizen Stoodios",
    desc: "Primary point of contact for clients at a creative design studio, coordinating clients, vendors, and creative teams from brief to final delivery, and introducing workflow tools that improved project tracking and delivery consistency.",
  },
  {
    when: "2024",
    role: "Customer Experience / Account Relationship Manager",
    company: "LawPavilion Business Solutions",
    desc: "Managed a portfolio of 50+ active clients on a LegalTech SaaS product, cut issue turnaround time by 60% through coordinated escalation with product and tech teams, and supported onboarding and adoption.",
  },
  {
    when: "2023",
    role: "Graduate Trainee, Customer Support",
    company: "LawPavilion Business Solutions",
    desc: "Delivered support across multiple channels, guided new customers through setup and early product use, and tracked client issues through to resolution in the CRM.",
  },
  {
    when: "2023",
    role: "Retail Sales Executive",
    company: "Allianz Insurance",
    desc: "Presented insurance products to individual and small business clients, explained policy terms, and provided post sale and claims support.",
  },
  {
    when: "2021 to 2022",
    role: "Junior Officer (NYSC)",
    company: "Ministry of Women Affairs & Social Inclusion",
    desc: "Tracked and documented welfare cases, supported inter departmental communication, and introduced case sorting methods that sped up record retrieval.",
  },
];

export const skills: Skill[] = [
  {
    title: "Customer support & issue resolution",
    desc: "High volume, multi channel support across email, chat, phone, and WhatsApp, with clear escalation and follow through until the customer is sorted.",
  },
  {
    title: "Onboarding & account retention",
    desc: "Guiding new clients through setup and early use, and managing accounts in ways that build repeat usage and referrals.",
  },
  {
    title: "CRM & AI automation",
    desc: "Building workflows in Airtable, Monday.com, GoHighLevel, Zapier, and Make.com, including AI assisted replies with Google Gemini, that remove manual handling from support.",
  },
  {
    title: "Process documentation",
    desc: "Turning operational processes into clear flowcharts and documentation that a team can actually follow.",
  },
];

type RawCase = [
  slug: string,
  tool: string,
  title: string,
  category: string,
  img: string | null,
];

const rawCases: RawCase[] = [
  [
    "structuring-data",
    "Monday.com",
    "Structuring Data for Operations Workflows",
    "Data Import & Board Setup",
    mondayContacts,
  ],
  [
    "ordering-workflow",
    "Monday.com",
    "Process Mapping a Full Cycle Ordering Workflow",
    "Process Mapping & Automation",
    orderFlowchart,
  ],
  [
    "deal-sourcing-crm",
    "Monday.com",
    "Building a Deal Sourcing CRM",
    "CRM Setup & Automation",
    dealBoards,
  ],
  [
    "product-sales-database",
    "Airtable",
    "Building a Product Sales Database",
    "Database Design & Automation",
    airtableSales,
  ],
  [
    "request-management",
    "Airtable",
    "Building a Request Management System",
    "Forms, Database & Automation",
    requestAutomations,
  ],
  [
    "lead-segmentation",
    "GoHighLevel",
    "Segmenting Leads for Faster Follow Up",
    "CRM Segmentation",
    ghlContacts,
  ],
  [
    "guest-inquiry-routing",
    "Zapier",
    "Automating Guest Inquiry Routing & Acknowledgment",
    "Workflow Automation, Lovre Homes",
    null,
  ],
  [
    "policy-support-ai",
    "Make.com",
    "Automating Customer Support Responses from Policy Documents",
    "Make.com + Airtable + Google Gemini, AI Workflow Automation",
    makeScenario,
  ],
];

export const cases: CaseStudy[] = rawCases.map(
  ([slug, tool, title, category, img], i) => ({
    num: pad(i + 1),
    slug,
    tool,
    title,
    category,
    img,
    href: `/case/${slug}`,
  }),
);

export const groups: CaseGroup[] = cases.reduce<CaseGroup[]>((acc, c) => {
  let group = acc.find((g) => g.tool === c.tool);
  if (!group) {
    group = { tool: c.tool, count: "", items: [] };
    acc.push(group);
  }
  group.items.push(c);
  return acc;
}, []);

groups.forEach((g) => {
  g.count = pad(g.items.length);
});
