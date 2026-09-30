import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-[clamp(48px,6vw,88px)]">
      <SectionLabel className="mb-7">01 About</SectionLabel>
      <p className="mb-7 max-w-[820px] text-pretty text-[clamp(22px,2.3vw,30px)] leading-[1.35] tracking-[-0.015em]">
        Blessing has spent her career on the front line of customer
        relationships, managing 50+ client accounts on a LegalTech SaaS
        product, handling 30+ daily inquiries across WhatsApp, email, and live
        chat, and coordinating client delivery at a creative studio.
      </p>
      <p className="m-0 max-w-[680px] text-pretty text-[16px] leading-[1.7] text-muted">
        Across every role, the same lesson kept showing up: most support
        problems are process problems. Missed follow ups, slow handoffs, and
        repeated questions are fixed by better systems, not more effort. That
        led her into CRM and AI automation, where she now designs workflows
        that take manual work off the team and keep customers informed.
      </p>
    </section>
  );
}
