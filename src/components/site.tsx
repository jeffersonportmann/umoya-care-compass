import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logo from "../assets/umoya-logo.png.asset.json";

export const EMAIL = "care@umoya.care";
export const PHONE = "+41 76 235 63 63";
export const WHATSAPP = "https://wa.me/41762356363";

const nav = [
  { to: "/", label: "Home" },
  { to: "/what", label: "What" },
  { to: "/why", label: "Why" },
  { to: "/how", label: "How" },
  { to: "/who", label: "Who" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useLocation({ select: (l) => l.pathname });

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 text-primary-foreground md:px-10 md:py-6">
        <Link to="/" aria-label="uMoya Home">
          <img src={logo.url} alt="uMoya" className="h-14 w-auto md:h-20" />
        </Link>
        <nav className="hidden gap-8 eyebrow md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="opacity-75 transition hover:opacity-100" activeProps={{ className: "opacity-100 border-b border-accent pb-1" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow hidden border border-primary-foreground/50 px-5 py-3 transition hover:bg-primary-foreground hover:text-foreground md:inline-block">
          Enquire
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span className="h-px w-8 bg-current" />
          <span className="h-px w-8 bg-current" />
          <span className="h-px w-5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-secondary text-secondary-foreground md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <img src={logo.url} alt="uMoya" className="h-14 w-auto" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="relative flex h-12 w-12 items-center justify-center">
              <span className="absolute h-px w-7 rotate-45 bg-current" />
              <span className="absolute h-px w-7 -rotate-45 bg-current" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                className="flex items-baseline justify-between gap-4 border-b border-secondary-foreground/15 py-4 font-display text-4xl leading-none transition hover:text-accent"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
                <span className="eyebrow text-xs opacity-40">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10 pt-8">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow block bg-primary px-6 py-4 text-center text-primary-foreground">
              Enquire
            </a>
            <p className="eyebrow mt-5 text-center opacity-60">{PHONE} · {EMAIL}</p>
          </div>
        </div>
      )}
    </header>
  );
}

export function PageHero({ img, eyebrow, title, sub, tall, scrim = "soft" }: { img: string; eyebrow: string; title: ReactNode; sub?: ReactNode; tall?: boolean; scrim?: "soft" | "strong" }) {
  return (
    <section className={`relative flex items-end overflow-hidden ${tall ? "min-h-[82vh]" : "min-h-[52vh]"}`}>
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className={`absolute inset-0 ${scrim === "strong" ? "bg-gradient-to-t from-overlay via-overlay/75 to-overlay/65" : "bg-gradient-to-t from-overlay via-overlay/40 to-overlay/40"}`} />
      <div className={`relative mx-auto w-full max-w-7xl px-6 text-primary-foreground md:px-10 ${tall ? "pt-36 pb-16 md:pt-40 md:pb-24" : "pt-28 pb-10 md:pb-12"}`}>
        <p className="eyebrow animate-rise opacity-90">{eyebrow}</p>
        <h1 className="animate-rise mt-6 max-w-4xl text-5xl leading-[0.95] md:text-8xl">{title}</h1>
        {sub && <div className="animate-rise mt-8 max-w-xl text-lg font-light opacity-90">{sub}</div>}
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
    </section>
  );
}

export function SiteFooter({ curve = false }: { curve?: boolean }) {
  return (
    <footer className={`bg-secondary text-secondary-foreground ${curve ? "rounded-t-[2.5rem] md:rounded-t-[3.5rem]" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="eyebrow text-accent">Explore uMoya</p>
        <h2 className="mt-4 text-5xl md:text-7xl">Begin your journey.</h2>
        <div className="mt-14 grid gap-10 border-t border-secondary-foreground/20 pt-10 md:grid-cols-4">
          <div>
            <p className="eyebrow opacity-60">Call or WhatsApp</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-3 block font-display text-2xl hover:text-accent">{PHONE}</a>
          </div>
          <div>
            <p className="eyebrow opacity-60">Email</p>
            <a href={`mailto:${EMAIL}?subject=Inquiry:%20uMoya%20Care`} className="mt-3 block font-display text-2xl hover:text-accent">{EMAIL}</a>
          </div>
          <div>
            <p className="eyebrow opacity-60">Care Home</p>
            <p className="mt-3 font-light">Camps Bay, Cape Town</p>
          </div>
          <div>
            <p className="eyebrow opacity-60">Client Care</p>
            <p className="mt-3 font-light">Every day, around the clock</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 text-sm opacity-60 md:flex-row">
          <span>© {new Date().getFullYear()} uMoya Cape Town · Quiet discretion. African heart.</span>
          <span className="flex gap-6">
            <a href="https://www.instagram.com/umoya.care/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/umoya.carecapetown" target="_blank" rel="noreferrer">Facebook</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children, seam = "none" }: { children: ReactNode; seam?: "light" | "none" }) {
  return (
    <main className="relative bg-background text-foreground">
      <SiteHeader />
      {children}
      {seam === "light" && <SectionBreak />}
      <SiteFooter curve={seam === "light"} />
    </main>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute rounded-full border border-accent/30 ${className}`}>
      <div className="absolute inset-[12%] rounded-full border border-accent/25" />
      <div className="absolute inset-[26%] rounded-full border border-accent/20" />
      <div className="absolute inset-[40%] rounded-full bg-accent/10" />
    </div>
  );
}

/** Cape Town's ridge — Lion's Head, the flat plateau, Devil's Peak — as a soft creamy wash. */
export function MountainRange({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 bottom-0 h-[74%] overflow-hidden ${className}`}>
      <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
        <defs>
          <linearGradient id="umoya-ridge-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.20" />
            <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="umoya-ridge-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.16" />
            <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="umoya-ridge-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.26" />
            <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.04" />
          </linearGradient>
          <filter id="umoya-blur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          <filter id="umoya-blur-sm" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* low sun behind the peak */}
        <circle cx="1210" cy="168" r="120" fill="var(--color-accent)" opacity="0.16" filter="url(#umoya-blur)" />

        {/* distant ridges */}
        <path d="M0,330 C140,316 240,286 360,282 C500,278 590,304 710,296 C840,288 920,254 1050,248 C1180,242 1290,268 1440,254 L1440,420 L0,420 Z" fill="url(#umoya-ridge-far)" />

        {/* Lion's Head · the plateau · Devil's Peak, rising left to right */}
        <path
          d="M0,388 C70,378 120,318 165,262 C180,244 196,244 212,266 C246,312 276,318 310,306 C344,294 356,246 392,220 C412,206 442,204 480,206 L730,212 C764,214 786,244 812,276 C842,312 876,318 912,302 C962,280 1010,222 1068,176 C1094,156 1122,150 1148,168 C1180,190 1214,232 1258,258 C1310,288 1372,282 1440,266 L1440,420 L0,420 Z"
          fill="url(#umoya-ridge-mid)"
        />
        {/* the tablecloth */}
        <ellipse cx="560" cy="212" rx="190" ry="15" fill="var(--color-card)" opacity="0.6" filter="url(#umoya-blur-sm)" />
        {/* a hairline along the ridge */}
        <path
          d="M0,388 C70,378 120,318 165,262 C180,244 196,244 212,266 C246,312 276,318 310,306 C344,294 356,246 392,220 C412,206 442,204 480,206 L730,212 C764,214 786,244 812,276 C842,312 876,318 912,302 C962,280 1010,222 1068,176 C1094,156 1122,150 1148,168 C1180,190 1214,232 1258,258 C1310,288 1372,282 1440,266"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.26"
          strokeWidth="1.5"
        />

        {/* foothills */}
        <path d="M0,414 C110,406 200,382 320,376 C450,370 540,394 670,388 C800,382 890,356 1020,346 C1150,336 1250,358 1440,348 L1440,420 L0,420 Z" fill="url(#umoya-ridge-near)" />
      </svg>
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-card to-transparent" />
    </div>
  );
}

/** Quiet band that closes one section and opens the next. */
export function SectionBreak({ to = "background" }: { to?: "background" | "card" }) {
  const fill = to === "card" ? "bg-card" : "bg-background";
  const wash = to === "card" ? "bg-gradient-to-b from-background via-card to-card" : "";
  return (
    <div aria-hidden className={`relative flex items-center justify-center overflow-hidden ${fill}`}>
      {wash && <div className={`pointer-events-none absolute inset-0 ${wash}`} />}
      <div className="relative flex w-full max-w-3xl items-center gap-6 px-8 py-16 md:gap-10 md:px-10 md:py-20">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/45" />
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
          <span className="absolute inset-[26%] rounded-full border border-accent/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/45" />
      </div>
    </div>
  );
}
