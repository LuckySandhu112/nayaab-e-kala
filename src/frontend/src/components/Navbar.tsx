import { scrollToSection, useScrollSpy } from "@/hooks/useScrollSpy";
import type { NavSection } from "@/types";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_SECTIONS: NavSection[] = [
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "admissions", label: "Admissions" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(["hero", ...SECTION_IDS]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card shadow-subtle border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("hero")}
            data-ocid="nav.logo"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-label="Go to top"
          >
            <img
              src="/assets/images/logo.jpeg"
              alt="NAYAAB-E-KALA"
              className={`object-contain max-h-14 transition-smooth ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNav(section.id)}
                data-ocid={`nav.${section.id}`}
                className={`px-4 py-2 rounded text-sm font-body font-medium transition-smooth relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeId === section.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <span>{section.label}</span>
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-smooth origin-left ${
                    activeId === section.id
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.hamburger_toggle"
            className="md:hidden p-2 rounded text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-card border-b border-border overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container mx-auto px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleNav(section.id)}
              data-ocid={`nav.mobile.${section.id}`}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-left transition-smooth ${
                activeId === section.id
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <span className="font-body font-medium">{section.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
