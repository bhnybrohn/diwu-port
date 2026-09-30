import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Capabilities from "./Capabilities";
import Work from "./Work";
import Contact from "./Contact";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Blessing Adewuyi, Customer Support, CRM & AI Automation";
  }, []);

  return (
    <div className="mx-auto flex max-w-[1320px] flex-wrap gap-x-[clamp(32px,5vw,80px)] px-[clamp(20px,3.5vw,48px)]">
      <Sidebar />
      <main className="min-w-0 flex-[3_1_440px] pt-[clamp(28px,4vw,48px)] pb-10">
        <Hero />
        <About />
        <Experience />
        <Capabilities />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
