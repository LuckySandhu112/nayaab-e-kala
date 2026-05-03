import { scrollToSection } from "@/hooks/useScrollSpy";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "admissions", label: "Admissions" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-foreground text-background" data-ocid="footer">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <img
                src="/assets/images/logo.jpeg"
                alt="NAYAAB-E-KALA"
                className="object-contain max-h-12 brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-60 font-body leading-relaxed">
              Where Art Becomes Identity
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_link"
                aria-label="Instagram"
                className="opacity-60 hover:opacity-100 hover:text-primary transition-smooth"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.facebook_link"
                aria-label="Facebook"
                className="opacity-60 hover:opacity-100 hover:text-primary transition-smooth"
              >
                <SiFacebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.youtube_link"
                aria-label="YouTube"
                className="opacity-60 hover:opacity-100 hover:text-primary transition-smooth"
              >
                <SiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-section-label text-primary text-xs">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    data-ocid={`footer.${link.id}_link`}
                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-section-label text-primary text-xs">Contact</p>
            <ul className="space-y-3 text-sm opacity-70">
              <li>
                <span className="block font-medium opacity-90">Phone</span>
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-smooth"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span className="block font-medium opacity-90">Email</span>
                <a
                  href="mailto:info@nayaabekala.com"
                  className="hover:text-primary transition-smooth"
                >
                  info@nayaabekala.com
                </a>
              </li>
              <li>
                <span className="block font-medium opacity-90">Address</span>
                <span>42, Kala Vihar, Lucknow, UP 226001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {year} NAYAAB-E-KALA. All rights reserved.
          </p>
          <p className="text-xs opacity-40">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
