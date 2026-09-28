import SectionLabel from "./SectionLabel";
import { roles } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line py-[clamp(48px,6vw,88px)]"
    >
      <SectionLabel className="mb-3">02 — Experience</SectionLabel>
      <p className="mb-8 text-[15px] text-dim">
        Roles that shaped how she thinks about customers, systems, and service.
      </p>
      <div className="grid gap-px border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {roles.map((r) => (
          <div
            key={`${r.company}-${r.role}`}
            className="flex flex-col gap-3 bg-ink p-7"
          >
            <div className="flex justify-between gap-3 font-mono text-[12px] text-dim">
              <span>{r.company}</span>
              <span>{r.when}</span>
            </div>
            <div className="text-[22px] font-medium leading-[1.2] tracking-[-0.015em]">
              {r.role}
            </div>
            <p className="m-0 text-pretty text-[15px] leading-[1.6] text-muted">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
