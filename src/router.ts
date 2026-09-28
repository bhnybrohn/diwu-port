import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";

/**
 * Minimal history-API router. Internal links (href starting with "/") are
 * intercepted so navigation stays client-side; everything else — in-page
 * hashes, mailto:, target="_blank" — is left to the browser.
 */
export function useRouter() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const anchor = (event.target as HTMLElement).closest("a");
    if (!anchor || anchor.target === "_blank") return;

    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("/")) return;

    event.preventDefault();
    const [pathname, hash] = href.split("#");
    const nextPath = pathname || "/";

    window.history.pushState(null, "", href);
    setPath(nextPath);

    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return { path, handleClick };
}
