import SectionLabel from "./SectionLabel";
import { skills } from "../data";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-line py-[clamp(48px,6vw,88px)]"
    >
      <SectionLabel className="mb-8">03 — Capabilities</SectionLabel>
      <div className="flex flex-col">
        {skills.map((s) => (
          <div
            key={s.title}
            className="flex flex-wrap gap-x-10 gap-y-2 border-t border-line py-[22px]"
          >
            <div className="flex-[1_1_260px] text-[20px] font-medium tracking-[-0.01em]">
              {s.title}
            </div>
            <p className="m-0 flex-[1.4_1_320px] text-pretty text-[15px] leading-[1.6] text-muted">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
