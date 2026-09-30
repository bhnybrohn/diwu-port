import SectionLabel from "./SectionLabel";
import { groups } from "../data";

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-[clamp(48px,6vw,88px)]">
      <SectionLabel className="mb-5">04 Systems Case Studies</SectionLabel>
      <p className="mb-12 max-w-[720px] text-pretty text-[clamp(20px,2vw,26px)] leading-[1.4] tracking-[-0.01em]">
        A closer look at the automation and CRM work behind the CX practice.
        across Monday.com, Airtable, GoHighLevel, Zapier, and Make.com.
      </p>
      <div className="flex flex-col gap-12">
        {groups.map((g) => (
          <div key={g.tool} className="flex flex-col">
            <div className="flex justify-between pb-3 font-mono text-[12px] text-dim">
              <span>{g.tool}</span>
              <span>{g.count}</span>
            </div>
            {g.items.map((c) => (
              <a
                key={c.slug}
                href={c.href}
                className="flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-line py-5 text-paper hover:bg-row-hover"
              >
                <div className="aspect-[16/10] flex-[0_0_132px] overflow-hidden border border-line bg-surface">
                  {c.img ? (
                    <div
                      role="img"
                      aria-label={c.title}
                      className="h-full w-full"
                      style={{
                        backgroundImage: `url(${c.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "left top",
                      }}
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg,#1C1C1A 0 6px,#222220 6px 12px)",
                      }}
                    />
                  )}
                </div>
                <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-1">
                  <div className="text-[clamp(19px,1.8vw,23px)] font-medium leading-[1.25] tracking-[-0.015em]">
                    {c.title}
                  </div>
                  <div className="text-[14px] text-dim">{c.category}</div>
                </div>
                <span className="flex-[0_0_auto] font-mono text-[12px] text-dim">
                  {c.num} →
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
