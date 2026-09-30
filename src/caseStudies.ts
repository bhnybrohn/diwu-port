import mondayContacts2 from "./assets/monday-contacts-2.jpeg";
import mondayContacts1 from "./assets/monday-contacts-1.jpeg";
import orderFlowchart from "./assets/order-flowchart.jpeg";
import orderForm from "./assets/order-form.jpeg";
import orderBoard from "./assets/order-board.jpeg";
import orderAutomations from "./assets/order-automations.jpeg";
import dealBoards from "./assets/deal-boards.jpeg";
import dealAutomations from "./assets/deal-automations.jpeg";
import dealBoard from "./assets/deal-board.jpeg";
import airtableSales from "./assets/airtable-sales.jpeg";
import requestAutomations from "./assets/request-automations.jpeg";
import requestForm from "./assets/request-form.jpeg";
import requestTable from "./assets/request-table.jpeg";
import ghlContacts from "./assets/ghl-contacts.jpeg";
import ghlLeads from "./assets/ghl-leads.jpeg";
import ghlSegments from "./assets/ghl-segments.jpeg";
import makeScenario from "./assets/make-scenario.jpeg";
import makeHistory from "./assets/make-history.jpeg";
import makeReply from "./assets/make-reply.jpeg";
import makeAirtable from "./assets/make-airtable.jpeg";
import lovreInquiryForm from "./assets/lovre-inquiry-form.jpeg";
import lovreZapierWorkflow from "./assets/lovre-zapier-workflow.jpeg";
import lovreInquiryResponses from "./assets/lovre-inquiry-responses.jpeg";

export type CaseImage = { src: string | null; alt: string; caption: string };

export type CaseDetail = {
  slug: string;
  tool: string;
  category: string;
  title: string;
  problem: string;
  did: string[];
  steps: string[];
  images: CaseImage[];
  outcome: string;
};

const img = (
  src: string | null,
  alt: string,
  caption: string,
): CaseImage => ({ src, alt, caption });

export const caseStudies: CaseDetail[] = [
  {
    slug: "structuring-data",
    tool: "Monday.com",
    category: "Data Import & Board Setup",
    title: "Structuring Data for Operations Workflows",
    problem: `Raw data from spreadsheets, forms, and various sources doesn't organize itself. Before it can power a usable workflow, it has to be captured consistently and cleaned, or the system built on top of it inherits the mess.`,
    did: [],
    steps: [
      `Built forms tailored to the type of information being collected, rather than a form for every situation`,
      `Imported data from Excel and Google Sheets into Monday.com`,
      `Cleaned and structured the data before import so it stayed usable once inside the board`,
      `Exported data back out to Excel for reporting and analysis, closing the loop between the board and other tools`,
    ],
    outcome: `Scattered, inconsistent information became a single organized board, easy to track, easy to report on, and actually usable by a team. It reinforced a core principle behind this work: automation and CRM systems aren't just about the tools themselves, they're about creating clarity for teams and better experiences for the customers on the other end.`,
    images: [
      img(
        mondayContacts2,
        `Monday.com board showing imported and structured contact data`,
        `Sample data, for illustration only, not a real client.`,
      ),
      img(
        mondayContacts1,
        `Structured contact board, alternate view`,
        `Board after cleaning and import.`,
      ),
    ],
  },
  {
    slug: "ordering-workflow",
    tool: "Monday.com",
    category: "Process Mapping & Automation",
    title: "Process Mapping a Full Cycle Ordering Workflow",
    problem: `A "simple" online order actually involves a chain of dependent steps: payment, availability, preparation, quality control, delivery, and follow up. If any one of them breaks silently, the customer feels it, even if they never see the internal process.`,
    did: [
      `Mapped the complete online ordering workflow for a food delivery business, from the moment a customer places an order to feedback after delivery. This covered payment verification and delivery zone validation, ingredient availability checks and kitchen preparation, quality control before an order ships, rider assignment and customer notifications, and refund paths and approval loops for when things go wrong.`,
      `The exception flows got as much attention as the happy path. We mapped what happens if payment fails (the process pauses), if an ingredient is unavailable (the customer chooses a replacement or refund), or if quality control fails (the kitchen restarts prep until the order passes). Designing for failure, not just success, changes how the whole process holds together.`,
      `On the automation side, built in Monday.com: automatic order confirmations, QC and order status notifications, and automated review requests after delivery.`,
    ],
    steps: [],
    outcome: `A workflow where customers only ever see the final delivery, but the process behind it, including the notifications, escalation paths, and handoffs, actually determines whether that delivery feels smooth or frustrating. A delayed update or unclear handoff doesn't stay an internal issue; it becomes a customer experience problem.`,
    images: [
      img(
        orderFlowchart,
        `Flowchart of a full cycle food delivery ordering workflow, mapped in draw.io`,
        `Sample business scenario, for illustration only. Tools: draw.io`,
      ),
      img(
        orderForm,
        `Custom order intake form built for the workflow`,
        `Custom intake form built for the workflow.`,
      ),
      img(
        orderBoard,
        `Monday.com order tracking board`,
        `Order board with status, QC and delivery coverage columns.`,
      ),
      img(
        orderAutomations,
        `Monday.com board automations`,
        `Status driven notification automations.`,
      ),
    ],
  },
  {
    slug: "deal-sourcing-crm",
    tool: "Monday.com",
    category: "CRM Setup & Automation",
    title: "Building a Deal Sourcing CRM",
    problem: `Outreach, acquisition targets, follow ups, and broker relationships were being tracked without a shared system, making it hard to know who'd been contacted, who needed a follow up, and which leads were going untouched.`,
    did: [
      `Built a Deal Sourcing CRM in Monday.com to track outreach calls, acquisition targets, and broker relationships for two partners.`,
    ],
    steps: [
      `Created an Acquisition Outreach Tracker board and a separate Broker & Banker Network board`,
      `Set up customized CRM columns and statuses to reflect the actual stages of a deal`,
      `Built filtered views to surface daily follow ups and untouched leads, so nothing quietly falls through`,
      `Set up automations for reminders, updates, and priority alerts`,
      `Used Calendar and Kanban views to make the workflow easier to manage visually, not just track it in a list`,
    ],
    outcome: `A CRM where follow ups happen on time, information stays organized, and communication is consistent. This structure keeps relationships with leads and partners manageable as volume grows. It reinforced a core idea: good systems don't just improve team efficiency, they directly shape the experience on the other end.`,
    images: [
      img(
        dealBoards,
        `Acquisition Outreach Tracker board in Monday CRM, filtered to today's calls`,
        `Sample data, for illustration only, not real client data.`,
      ),
      img(
        dealAutomations,
        `Deal CRM automations and Broker & Banker Network board`,
        `Reminder and priority alert automations.`,
      ),
      img(dealBoard, `Filtered follow up view`, `Filtered view surfacing daily follow ups.`),
    ],
  },
  {
    slug: "product-sales-database",
    tool: "Airtable",
    category: "Database Design & Automation",
    title: "Building a Product Sales Database",
    problem: `Sales and customer data spread across a workspace without structure makes it hard to track what actually matters: who's paid, who needs a follow up, and who's happy. It's harder still to keep that information friendly for clients rather than purely technical.`,
    did: [
      `Built a product sales database in Airtable, focused on making customer and sales operations trackable in one place.`,
    ],
    steps: [
      `Organized customer and sales data into a structured, usable format`,
      `Created formula fields to automate calculations rather than tracking them manually`,
      `Set up tracking for payments, follow ups, and customer ratings within a single workspace`,
      `Used different views to keep the same data structured for internal work and readable for clients`,
    ],
    outcome: `A workspace that stayed simple enough for easy collaboration but powerful enough to support real sales and customer operations. It reinforced a pattern that's shown up across every tool so far: when the data behind a team is clean and accessible, customers feel the difference on their end too, even if they never see the database itself.`,
    images: [
      img(
        airtableSales,
        `Airtable product sales database with formula fields and payment status tracking`,
        `Sample data, for illustration only, not real client data.`,
      ),
    ],
  },
  {
    slug: "request-management",
    tool: "Airtable",
    category: "Forms, Database & Automation",
    title: "Building a Request Management System",
    problem: `A request management system sounds simple: a form, a database, and a few automations. But every one of those automations is actually a customer touchpoint. A customer who submits a request wants to know it landed. One waiting on review wants updates. A team that just received a request needs enough visibility to act on it.`,
    did: [
      `Built a request management workflow in Airtable covering the full loop from submission to resolution.`,
    ],
    steps: [
      `A form to capture customer requests`,
      `Automatic team notifications when a new request comes in`,
      `Confirmation emails sent to customers on submission`,
      `Status change notifications so customers stay informed without having to ask`,
    ],
    outcome: `A system where customers get timely communication, teams spend less time on repetitive manual follow up, and requests don't quietly fall through the cracks. It highlighted something that kept showing up across this work: the customer experiences people praise are usually backed by a process they never see, including the notifications, structure, and quiet handoffs doing the work in the background.`,
    images: [
      img(
        requestAutomations,
        `Airtable automations for the request workflow`,
        `Submission, confirmation, and status update automations.`,
      ),
      img(
        requestForm,
        `Customer request form built in Airtable`,
        `Sample workflow, built for illustration purposes.`,
      ),
      img(
        requestTable,
        `Request tracking table in Airtable`,
        `Requests tracked from submission to resolution.`,
      ),
    ],
  },
  {
    slug: "lead-segmentation",
    tool: "GoHighLevel",
    category: "CRM Segmentation",
    title: "Segmenting Leads for Faster Follow Up",
    problem: `Contacts sitting in a CRM without structure aren't actually useful. Teams can't tell which leads are priority, where they came from, or who's at risk of being overlooked while attention goes elsewhere.`,
    did: [
      `Organized customer data in GoHighLevel into structured segments based on lead source and customer intent, with the goal of helping teams identify priority leads faster, understand where customers are actually coming from, build more focused and targeted follow up processes, and reduce the number of prospects that get overlooked.`,
    ],
    steps: [],
    outcome: `A CRM where information was organized enough for teams to move faster and communicate more consistently. It reinforced a pattern across all of this work: most customer experience challenges are actually system design challenges in disguise. Good experience depends as much on what's working quietly in the background as it does on the interaction itself.`,
    images: [
      img(
        ghlContacts,
        `Contacts segmented into smart lists in GoHighLevel`,
        `Sample data, for illustration only, not real client data.`,
      ),
      img(ghlLeads, `New website leads smart list`, `Smart list by lead source.`),
      img(ghlSegments, `Referral segment`, `Smart list by customer intent.`),
    ],
  },
  {
    slug: "guest-inquiry-routing",
    tool: "Zapier",
    category: "Workflow Automation, Lovre Homes",
    title: "Automating Guest Inquiry Routing & Acknowledgment",
    problem: `Lovre Homes was handling every guest inquiry manually. Staff checked form responses daily, entered guest details into Google Sheets by hand, and sent thank you emails one by one. Nothing was routed by the team, and the process depended entirely on someone remembering to do it.`,
    did: [`Built a Zap from start to finish, triggered by new form submissions:`],
    steps: [
      `New Google Forms response automatically creates a record in Google Sheets, capturing name, email, phone, apartment preference, inquiry category, and notes`,
      `A Formatter step cleans the incoming text before it's used downstream`,
      `A Paths step splits the workflow by inquiry category, Sales and Property Management, so each team only sees what's relevant to them`,
      `Within each path, a filter checks the guest's email domain before triggering an acknowledgment email, so only qualifying inquiries get an automatic reply`,
      `Each branch sends a personalized confirmation email, addressed by first name, confirming the inquiry was received`,
    ],
    outcome: `A fully automated intake process with no manual data entry or missed acknowledgments. Inquiries are automatically sorted to the right team instead of sitting in one shared inbox. Tested from form submission through to routed email delivery.`,
    images: [
      img(
        lovreInquiryForm,
        `Lovre Homes guest inquiry form with contact details, apartment preference, inquiry category, and notes fields`,
        `Guest inquiry form used to collect guest details and route requests.`,
      ),
      img(
        lovreZapierWorkflow,
        `Zapier workflow routing Lovre Homes inquiries to the Sales and Property Management teams`,
        `Zapier workflow with separate paths for Sales and Property Management inquiries.`,
      ),
      img(
        lovreInquiryResponses,
        `Google Sheets guest inquiry response log with apartment preference, inquiry category, and notes columns`,
        `Guest inquiry responses recorded in Google Sheets.`,
      ),
    ],
  },
  {
    slug: "policy-support-ai",
    tool: "Make.com",
    category: "Make.com + Airtable + Google Gemini, AI Workflow Automation",
    title: "Automating Customer Support Responses from Policy Documents",
    problem: `Customers asking routine questions about returns, shipping, refunds and warranty had to wait for a team member to find the answer in a policy document and reply by hand. Response times depended on someone being available, and the same questions were answered over and over.`,
    did: [
      `Designed the data structure and built an automation from start to finish, triggered by incoming support emails:`,
    ],
    steps: [
      `Set up an Airtable base with four tables (Businesses, Policy Docs, Knowledge Chunks, Conversations), all linked by a Business record so multiple businesses can be held in one system`,
      `Broke a policy document into topic based chunks (returns, shipping, refunds, warranty, cancellations, contact) stored as individual records`,
      `A Gmail trigger in Make.com picks up new customer emails`,
      `An Airtable search retrieves the policy chunks, and an Array Aggregator merges them into one block of text so the AI runs once per email`,
      `Google Gemini answers the customer's question using only that policy content, and says a team member will follow up when the answer isn't in the document`,
      `The answer is sent back to the customer automatically by email`,
      `Each question and answer is logged to the Conversations table with the customer's email, the business, and a status`,
      `Added a filter that blocks system notification emails, after catching an unintended reply loop during testing`,
    ],
    outcome: `A working pipeline from customer email to accurate, policy based reply and logged conversation, with no manual lookup or typing. Tested from start to finish with a sample store policy: a return question came back with the correct 30 day window, full refund, and original packaging conditions. Built on free tiers of all three tools.`,
    images: [
      img(
        makeScenario,
        `Make.com scenario: Gmail, Airtable, Array aggregator, Google Gemini, Gmail, Airtable`,
        `Built as an automation exercise using a sample business (Acme Store), in a client style.`,
      ),
      img(
        makeHistory,
        `Make.com scenario run history showing successful executions`,
        `Scenario run history from testing the complete workflow.`,
      ),
      img(
        makeReply,
        `Automated reply based on policy received in Gmail`,
        `Automated reply to a return question, based on the policy document.`,
      ),
      img(
        makeAirtable,
        `Airtable base for the Acme sample business`,
        `Airtable base holding customers, conversations and knowledge documents.`,
      ),
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export type CaseView = {
  c: CaseDetail;
  num: string;
  total: string;
  lead: CaseImage | null;
  gallery: CaseImage[];
  steps: { n: string; text: string }[];
  prev: CaseDetail;
  next: CaseDetail;
};

/**
 * Shapes one case study for display. An unknown slug falls back to the first
 * case, and prev/next wrap around, both matching the source design.
 */
export function buildCaseView(slug: string | null): CaseView {
  const count = caseStudies.length;
  const found = caseStudies.findIndex((c) => c.slug === slug);
  const index = found < 0 ? 0 : found;
  const c = caseStudies[index]!;

  const lead = c.images[0]?.src ? c.images[0]! : null;
  const gallery = lead ? c.images.slice(1) : c.images;

  return {
    c,
    num: pad(index + 1),
    total: pad(count),
    lead,
    gallery,
    steps: c.steps.map((text, n) => ({ n: pad(n + 1), text })),
    prev: caseStudies[(index - 1 + count) % count]!,
    next: caseStudies[(index + 1) % count]!,
  };
}
