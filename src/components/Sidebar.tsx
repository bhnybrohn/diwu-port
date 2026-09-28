import portrait from "../assets/portrait.jpeg";
import { nav as navItems } from "../data";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex max-w-[320px] flex-[1_1_220px] flex-col gap-8 self-start py-[clamp(28px,4vw,48px)]">
      <div className="flex flex-col gap-[6px]">
        <div className="text-[22px] font-semibold tracking-[-0.01em]">
          Blessing Adewuyi
        </div>
        <div className="font-mono text-[12px] text-dim">
          Customer Support, CRM &amp; AI Automation · Lagos, Nigeria
        </div>
      </div>

      <img
        src={portrait}
        alt="Portrait of Blessing"
        className="block aspect-[4/5] w-full max-w-[320px] object-cover object-[center_30%]"
      />

      <nav className="flex flex-col gap-[2px] text-[15px]">
        {navItems.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="flex justify-between border-t border-line py-2 text-paper"
          >
            <span>{n.label}</span>
            <span className="font-mono text-[12px] text-dim">{n.num}</span>
          </a>
        ))}
      </nav>

      <a
        href="https://linkedin.com/in/blessing-adewuyi"
        target="_blank"
        rel="noreferrer"
        className="inline-flex gap-2 self-start border border-line-strong px-4 py-[10px] text-[14px] hover:bg-surface hover:text-accent"
      >
        LinkedIn ↗
      </a>
    </aside>
  );
}
