import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
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
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 text-primary-foreground md:px-10">
        <Link to="/" aria-label="uMoya Home">
          <img src={logo.url} alt="uMoya" className="h-14 w-auto md:h-16" />
        </Link>
        <nav className="hidden gap-8 eyebrow md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="opacity-75 transition hover:opacity-100" activeProps={{ className: "opacity-100 border-b border-accent pb-1" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow border border-primary-foreground/50 px-5 py-3 transition hover:bg-primary-foreground hover:text-foreground">
          Enquire
        </a>
      </div>
      <nav className="flex justify-center gap-5 eyebrow text-primary-foreground md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="opacity-80">{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function PageHero({ img, eyebrow, title, sub, tall }: { img: string; eyebrow: string; title: ReactNode; sub?: ReactNode; tall?: boolean }) {
  return (
    <section className={`relative flex items-end overflow-hidden ${tall ? "min-h-screen" : "min-h-[64vh]"}`}>
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/40" />
      <div className={`relative mx-auto w-full max-w-7xl px-6 text-primary-foreground md:px-10 ${tall ? "pt-40 pb-20 md:pb-28" : "pt-32 pb-16 md:pb-20"}`}>
        <p className="eyebrow animate-rise opacity-90">{eyebrow}</p>
        <h1 className="animate-rise mt-6 max-w-4xl text-5xl leading-[0.95] md:text-8xl">{title}</h1>
        {sub && <div className="animate-rise mt-8 max-w-xl text-lg font-light opacity-90">{sub}</div>}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
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
            <p className="eyebrow opacity-60">Client Office</p>
            <p className="mt-3 font-light">Zurich, Switzerland</p>
          </div>
          <div>
            <p className="eyebrow opacity-60">Client Care</p>
            <p className="mt-3 font-light">Cape Town, South Africa</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 text-sm opacity-60 md:flex-row">
          <span>© {new Date().getFullYear()} uMoya Cape Town · Swiss discretion. African heart.</span>
          <span className="flex gap-6">
            <a href="https://www.instagram.com/umoya.care/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/umoya.carecapetown" target="_blank" rel="noreferrer">Facebook</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
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
