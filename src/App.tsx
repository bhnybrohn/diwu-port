import { useRouter } from "./router";
import Portfolio from "./components/Portfolio";
import CaseStudy from "./components/CaseStudy";

const CASE_PREFIX = "/case/";

export default function App() {
  const { path, handleClick } = useRouter();
  const slug = path.startsWith(CASE_PREFIX)
    ? decodeURIComponent(path.slice(CASE_PREFIX.length))
    : null;

  return (
    <div
      onClick={handleClick}
      className="min-h-screen bg-ink font-sans text-[16px] leading-[1.6] text-paper"
    >
      {slug === null ? <Portfolio /> : <CaseStudy slug={slug} />}
    </div>
  );
}
