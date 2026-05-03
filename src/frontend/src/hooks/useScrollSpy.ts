import { useCallback, useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + offset + 10;

    let current = sectionIds[0] ?? "";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveId(current);
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeId;
}

export function scrollToSection(id: string, offset = 80): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
