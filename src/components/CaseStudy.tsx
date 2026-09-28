import { useEffect } from "react";
import { buildCaseView } from "../caseStudies";

const SECTION = "flex flex-wrap gap-x-12 gap-y-4 border-t border-line py-[clamp(40px,6vw,72px)]";
const LABEL = "flex-[1_1_200px] font-mono text-[12px] tracking-[0.08em] uppercase text-dim";
const BODY = "m-0 text-pretty text-[17px] leading-[1.7] text-body";
const FRAME = "border border-line bg-surface";
const CAPTION = "font-mono text-[12px] text-dim";

export default function CaseStudy({ slug }: { slug: string }) {
  const { c, num, total, lead, gallery, steps, prev, next } = buildCaseView(slug);

  useEffect(() => {
    document.title = `${c.title} — Blessing Adewuyi`;
  }, [c.title]);

  return (
    <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,48px)]">
      <nav className="flex flex-wrap items-center justify-between gap-6 py-7">
        <a href="/" className="text-[26px] font-medium leading-none tracking-[-0.015em] hover:text-accent">
          Blessing Adewuyi
        </a>
        <a href="/#work" className="text-[14px] text-dim">
          ← All case studies
        </a>
      </nav>

      <header className="pt-[clamp(40px,7vw,96px)] pb-[clamp(40px,6vw,72px)]">
        <div className="mb-7 flex flex-wrap gap-4 font-mono text-[12px] tracking-[0.06em] uppercase text-dim">
          <span>
            {num} / {total}
          </span>
          <span>{c.tool}</span>
          <span>{c.category}</span>
        </div>
        <h1 className="m-0 max-w-[1040px] text-balance text-[clamp(44px,6.6vw,96px)] font-medium leading-none tracking-[-0.035em]">
          {c.title}
        </h1>
      </header>

      {lead && (
        <figure className="mt-0 mr-0 mb-[clamp(48px,7vw,96px)] ml-0 flex flex-col gap-3">
          <div className={FRAME}>
            <img src={lead.src!} alt={lead.alt} className="block h-auto w-full" />
          </div>
          <figcaption className={CAPTION}>{lead.caption}</figcaption>
        </figure>
      )}

      <section className={SECTION}>
        <div className={`${LABEL} pt-2`}>The problem</div>
        <p className="m-0 min-w-0 max-w-[760px] flex-[3_1_520px] text-pretty text-[clamp(24px,2.5vw,32px)] leading-[1.3] font-medium tracking-[-0.015em]">
          {c.problem}
        </p>
      </section>

      <section className={SECTION}>
        <div className={`${LABEL} pt-[6px]`}>What I did</div>
        <div className="flex min-w-0 max-w-[760px] flex-[3_1_520px] flex-col gap-5">
          {c.did.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className={BODY}>
              {paragraph}
            </p>
          ))}
          {steps.length > 0 && (
            <ol className="m-0 flex list-none flex-col p-0">
              {steps.map((step) => (
                <li
                  key={step.text.slice(0, 40)}
                  className="flex gap-5 border-t border-line py-4 text-[16px] leading-[1.6] text-body"
                >
                  <span className="flex-[0_0_28px] pt-[3px] font-mono text-[12px] text-dim">
                    {step.n}
                  </span>
                  <span className="text-pretty">{step.text}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <section className={SECTION}>
        <div className={`${LABEL} pt-2`}>Outcome</div>
        <p className={`${BODY} min-w-0 max-w-[760px] flex-[3_1_520px]`}>{c.outcome}</p>
      </section>

      {gallery.length > 0 && (
        <section className="grid gap-x-8 gap-y-12 border-t border-line py-[clamp(40px,6vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr))]">
          {gallery.map((g) => (
            <figure key={g.alt} className="m-0 flex flex-col gap-3">
              {g.src ? (
                <div className={FRAME}>
                  <img src={g.src} alt={g.alt} className="block h-auto w-full" />
                </div>
              ) : (
                <div
                  className="flex aspect-[16/10] items-center justify-center border border-line p-4 text-center font-mono text-[12px] text-dim"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg,#1C1C1A 0 8px,#222220 8px 16px)",
                  }}
                >
                  {g.alt}
                </div>
              )}
              <figcaption className={CAPTION}>{g.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <nav className="flex flex-wrap justify-between gap-6 border-t border-line pt-[clamp(48px,7vw,96px)] pb-10">
        <a href={`/case/${prev.slug}`} className="flex flex-[1_1_280px] flex-col gap-2 hover:text-accent">
          <span className="font-mono text-[12px] text-dim">← Previous</span>
          <span className="text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.2] tracking-[-0.015em]">
            {prev.title}
          </span>
        </a>
        <a
          href={`/case/${next.slug}`}
          className="flex flex-[1_1_280px] flex-col items-end gap-2 text-right hover:text-accent"
        >
          <span className="font-mono text-[12px] text-dim">Next →</span>
          <span className="text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.2] tracking-[-0.015em]">
            {next.title}
          </span>
        </a>
      </nav>

      <footer className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 pb-10 font-mono text-[12px] text-dim">
        <span>Blessing Adediwura Adewuyi — Lagos, Nigeria</span>
        <a
          href="https://linkedin.com/in/blessing-adewuyi"
          target="_blank"
          rel="noreferrer"
          className="text-dim"
        >
          LinkedIn ↗
        </a>
      </footer>
    </div>
  );
}
