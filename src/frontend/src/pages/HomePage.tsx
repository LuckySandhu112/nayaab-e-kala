import { createActor } from "@/backend";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { scrollToSection } from "@/hooks/useScrollSpy";
import type { AdmissionForm, Course, GalleryItem } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  ArrowRight,
  BookOpen,
  Brush,
  Camera,
  CheckCircle,
  Feather,
  Mail,
  MapPin,
  Palette,
  PencilLine,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

// ─── Static Data ────────────────────────────────────────────────────────────

const COURSES: Course[] = [
  {
    id: "sketching",
    nameEn: "Sketching & Drawing",
    descriptionEn:
      "Master lines, shading, perspective and composition with graphite and charcoal.",
    level: "Beginner",
    durationEn: "3 Months",
    icon: "pencil",
  },
  {
    id: "painting",
    nameEn: "Oil & Acrylic Painting",
    descriptionEn:
      "Explore colour theory, brush techniques and expressive painting on canvas.",
    level: "Intermediate",
    durationEn: "4 Months",
    icon: "palette",
  },
  {
    id: "watercolor",
    nameEn: "Watercolour Art",
    descriptionEn:
      "Learn wet-on-wet, glazing and layering for luminous, translucent effects.",
    level: "Beginner",
    durationEn: "2 Months",
    icon: "brush",
  },
  {
    id: "calligraphy",
    nameEn: "Hindi & Urdu Calligraphy",
    descriptionEn:
      "The ancient art of beautiful writing — Devanagari, Nastaliq and modern styles.",
    level: "Beginner",
    durationEn: "2 Months",
    icon: "feather",
  },
  {
    id: "portrait",
    nameEn: "Portrait & Figure Study",
    descriptionEn:
      "Human anatomy, proportion and likeness — from basic study to expressive portraiture.",
    level: "Advanced",
    durationEn: "6 Months",
    icon: "book",
  },
  {
    id: "photography",
    nameEn: "Art Photography",
    descriptionEn:
      "Composition, lighting and post-processing for fine art and documentary photography.",
    level: "Intermediate",
    durationEn: "3 Months",
    icon: "camera",
  },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "/assets/generated/gallery-abstract-1.dim_600x600.jpg",
    altEn: "Abstract painting",
    category: "Painting",
  },
  {
    id: "2",
    src: "/assets/generated/gallery-sketch-1.dim_600x600.jpg",
    altEn: "Pencil portrait sketch",
    category: "Sketching",
  },
  {
    id: "3",
    src: "/assets/generated/gallery-calligraphy-1.dim_600x600.jpg",
    altEn: "Hindi calligraphy art",
    category: "Calligraphy",
  },
  {
    id: "4",
    src: "/assets/generated/gallery-painting-1.dim_600x600.jpg",
    altEn: "Oil painting of woman",
    category: "Painting",
  },
  {
    id: "5",
    src: "/assets/generated/gallery-watercolor-1.dim_600x600.jpg",
    altEn: "Watercolour flowers",
    category: "Watercolour",
  },
  {
    id: "6",
    src: "/assets/generated/hero-artist.dim_1200x800.jpg",
    altEn: "Artist at work",
    category: "Studio",
  },
];

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-muted text-muted-foreground",
  Intermediate: "bg-primary/10 text-primary",
  Advanced: "bg-foreground/10 text-foreground",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  pencil: <PencilLine size={22} />,
  palette: <Palette size={22} />,
  brush: <Brush size={22} />,
  feather: <Feather size={22} />,
  book: <BookOpen size={22} />,
  camera: <Camera size={22} />,
};

const COURSE_OPTIONS = COURSES.map((c) => ({
  value: c.id,
  label: c.nameEn,
}));

const EMPTY_FORM: AdmissionForm = {
  name: "",
  age: "",
  contactNumber: "",
  email: "",
  courseSelection: "",
  message: "",
};

// ─── Section: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-artist.dim_1200x800.jpg"
          alt="Artist painting in studio"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90" />
      </div>

      {/* Decorative brush stroke SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-10 text-primary"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 80 Q180 20 360 60 Q540 100 720 40 Q900 0 1080 50 Q1260 90 1440 30 L1440 120 L0 120Z"
          fill="currentColor"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-section-label text-primary mb-4 tracking-[0.3em]">
            Art Studio
          </p>
          <img
            src="/assets/images/logo.jpeg"
            alt="NAYAAB-E-KALA"
            className="max-h-24 object-contain mx-auto mb-6 brightness-0 invert"
          />
          <h1
            className="font-display font-bold text-background leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            NAYAAB-E-KALA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="font-display text-2xl md:text-4xl text-background/80 mt-4 mb-2">
            Where Art Becomes Identity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("admissions")}
            data-ocid="hero.apply_now_button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-8 py-6 text-base transition-smooth shadow-elevated hover:shadow-lg group"
          >
            Apply Now
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-smooth"
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("courses")}
            data-ocid="hero.explore_courses_button"
            className="border-background/40 text-background hover:bg-background/10 font-body px-8 py-6 text-base transition-smooth"
          >
            Explore Courses
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-background/40 text-xs tracking-widest font-body">
          SCROLL
        </span>
        <div className="w-0.5 h-8 bg-background/20 relative overflow-hidden rounded-full">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-primary animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section: About ─────────────────────────────────────────────────────────

function AboutSection() {
  const highlights = [
    "Expert faculty with 10+ years of experience",
    "Small batch sizes for personalised attention",
    "State-of-the-art studio infrastructure",
    "Regular exhibitions and student showcases",
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/assets/generated/hero-artist.dim_1200x800.jpg"
                alt="Art studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="text-section-label text-primary mb-3">About Us</p>
              <h2 className="text-section-heading font-display">
                A Unique Space for
                <span className="text-primary block">Artistic Growth</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              NAYAAB-E-KALA is a premier art studio dedicated to nurturing
              creative talent since 2012. We believe every student carries a
              unique artistic voice — our role is to help it emerge. From
              classical sketching to contemporary mixed media, our curriculum
              blends tradition with innovation.
            </p>

            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="text-foreground/80 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => scrollToSection("admissions")}
              data-ocid="about.apply_button"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
            >
              Join Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Courses ───────────────────────────────────────────────────────

function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-20 md:py-32 bg-muted/40 artistic-texture"
      data-ocid="courses.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-section-label text-primary mb-3">Courses</p>
          <h2 className="text-section-heading font-display">
            Artistic <span className="text-primary">Disciplines</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Discover your medium. Each course is crafted by practicing artists
            for aspiring ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`courses.item.${i + 1}`}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-elevated transition-smooth group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  {ICON_MAP[course.icon]}
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${LEVEL_COLORS[course.level]}`}
                >
                  {course.level}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg leading-snug">
                {course.nameEn}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.descriptionEn}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-primary font-medium">
                <span>⏱</span>
                <span>Duration: {course.durationEn}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Gallery ───────────────────────────────────────────────────────

function GallerySection() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-background"
      data-ocid="gallery.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-section-label text-primary mb-3">Gallery</p>
          <h2 className="text-section-heading font-display">
            Student <span className="text-primary">Creations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A glimpse into the creative world of our talented students.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => setActive(item)}
              data-ocid={`gallery.item.${i + 1}`}
              className="relative group aspect-square rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={item.altEn}
            >
              <img
                src={item.src}
                alt={item.altEn}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-smooth flex items-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-smooth">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <dialog
          open
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 m-0 max-w-none w-full h-full border-0"
          onClick={() => setActive(null)}
          onKeyDown={(e) => e.key === "Escape" && setActive(null)}
          data-ocid="gallery.lightbox"
          aria-modal="true"
          aria-label={active.altEn}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-elevated relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.altEn}
              className="w-full h-full object-contain bg-card"
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              data-ocid="gallery.lightbox.close_button"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/50 text-background flex items-center justify-center hover:bg-foreground transition-smooth"
              aria-label="Close lightbox"
            >
              ×
            </button>
          </motion.div>
        </dialog>
      )}
    </section>
  );
}

// ─── Section: Admissions ────────────────────────────────────────────────────

function AdmissionsSection() {
  const [form, setForm] = useState<AdmissionForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { actor } = useActor(createActor);

  const handleChange = (field: keyof AdmissionForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Unable to connect to server. Please try again.");
      return;
    }
    const age = Number.parseInt(form.age, 10);
    if (Number.isNaN(age) || age < 5 || age > 80) {
      toast.error("Please enter a valid age between 5 and 80.");
      return;
    }
    setSubmitting(true);
    try {
      const result = await actor.submitAdmission(
        form.name,
        BigInt(age),
        form.contactNumber,
        form.email,
        form.courseSelection,
      );
      if (result.__kind__ === "ok") {
        toast.success("Application submitted successfully!");
        setForm(EMPTY_FORM);
      } else {
        toast.error(`Submission failed: ${result.err}`);
      }
    } catch (_err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="admissions"
      className="py-20 md:py-32 bg-muted/40"
      data-ocid="admissions.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="text-section-label text-primary mb-3">Admissions</p>
              <h2 className="text-section-heading font-display">
                Begin Your
                <span className="text-primary block">Artistic Journey</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Admissions are open year-round for all our programmes. We welcome
              students of all backgrounds and experience levels. Fill in the
              form and our team will get in touch within 48 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    No prior experience needed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm">Flexible batch timings</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    Scholarship available for meritorious students
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-subtle space-y-5"
              data-ocid="admissions.form"
            >
              <h3 className="font-display text-xl font-semibold">Apply Now</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="adm-name" className="text-sm">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="adm-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    data-ocid="admissions.name_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="adm-age" className="text-sm">
                    Age <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="adm-age"
                    type="number"
                    min="5"
                    max="80"
                    required
                    placeholder="Your age"
                    value={form.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    data-ocid="admissions.age_input"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="adm-phone" className="text-sm">
                  Contact Number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="adm-phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.contactNumber}
                  onChange={(e) =>
                    handleChange("contactNumber", e.target.value)
                  }
                  data-ocid="admissions.phone_input"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="adm-email" className="text-sm">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="adm-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  data-ocid="admissions.email_input"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="adm-course" className="text-sm">
                  Course <span className="text-primary">*</span>
                </Label>
                <Select
                  value={form.courseSelection}
                  onValueChange={(val) => handleChange("courseSelection", val)}
                  required
                >
                  <SelectTrigger
                    id="adm-course"
                    data-ocid="admissions.course_select"
                  >
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="adm-message" className="text-sm">
                  Message (optional)
                </Label>
                <Textarea
                  id="adm-message"
                  placeholder="Tell us about your artistic background or goals..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  data-ocid="admissions.message_textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting || !actor}
                data-ocid="admissions.submit_button"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold py-5"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Contact ───────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-background"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-section-label text-primary mb-3">Contact</p>
          <h2 className="text-section-heading font-display">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: <Phone size={22} />,
              titleEn: "Phone",
              detail: "+91 98765 43210",
              href: "tel:+919876543210",
              ocid: "contact.phone_card",
            },
            {
              icon: <Mail size={22} />,
              titleEn: "Email",
              detail: "info@nayaabekala.com",
              href: "mailto:info@nayaabekala.com",
              ocid: "contact.email_card",
            },
            {
              icon: <MapPin size={22} />,
              titleEn: "Address",
              detail: "42, Kala Vihar, Lucknow, UP",
              href: "https://maps.google.com",
              ocid: "contact.address_card",
            },
          ].map((item, i) => (
            <motion.a
              key={item.ocid}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={item.ocid}
              className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-elevated transition-smooth group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                {item.icon}
              </div>
              <p className="font-display font-semibold">{item.titleEn}</p>
              <p className="text-sm text-muted-foreground break-all">
                {item.detail}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Root Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <GallerySection />
      <AdmissionsSection />
      <ContactSection />
    </Layout>
  );
}
