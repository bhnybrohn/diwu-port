import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-line pt-[clamp(56px,8vw,120px)] pb-6"
    >
      <SectionLabel className="mb-7">05 Contact</SectionLabel>
      <h2 className="mb-10 max-w-[820px] text-balance text-[clamp(36px,5vw,72px)] font-medium leading-none tracking-[-0.035em]">
        Let’s talk about customer support.
      </h2>
      <a
        href="mailto:adewuyiblessing42@gmail.com"
        className="inline-flex gap-[10px] bg-paper px-[22px] py-[14px] font-medium text-ink hover:bg-accent hover:text-ink"
      >
        adewuyiblessing42@gmail.com ↗
      </a>
      <div className="mt-[clamp(64px,9vw,112px)] flex flex-wrap justify-between gap-3 font-mono text-[12px] text-dim">
        <span>Blessing Adediwura Adewuyi, Lagos, Nigeria</span>
        <a
          href="https://linkedin.com/in/blessing-adewuyi"
          target="_blank"
          rel="noreferrer"
          className="text-inherit"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
