import Image from "next/image";
import { Download, Eye } from "lucide-react";
import { profile } from "@/lib/data";
import Socials from "./Socials";
import TypeName from "./TypeName";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-olive-800 text-peach-100">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-olive-700/60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div className="order-2 md:order-1">
          <p className="hero-in text-lg text-peach-300">Hi, I&apos;m</p>
          <h1 className="hero-in font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-peach-50 sm:text-6xl lg:text-7xl" style={{ animationDelay: ".08s" }}>
            <TypeName text={profile.name} />
          </h1>
          <p className="hero-in mt-4 inline-block rounded-full bg-peach-300 px-4 py-1.5 text-base font-semibold text-olive-900 sm:text-lg" style={{ animationDelay: ".16s" }}>
            {profile.role}
          </p>
          <p className="hero-in mt-6 max-w-md text-lg leading-relaxed text-peach-100/90" style={{ animationDelay: ".24s" }}>
            {profile.tagline}
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".32s" }}>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-peach-300 px-6 py-3 font-semibold text-olive-900 transition hover:bg-peach-200">
              <Download size={18} /> Download resume
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-peach-300/70 px-6 py-3 font-semibold text-peach-100 transition hover:bg-peach-300/15">
              <Eye size={18} /> View resume
            </a>
          </div>
          <Socials className="hero-in mt-8" />
        </div>

        <div className="hero-in order-1 mx-auto w-full max-w-sm md:order-2" style={{ animationDelay: ".12s" }}>
          <div className="float-slow relative">
            {/* Offset architectural backdrop frame (paints behind, floats with the portrait) */}
            <div aria-hidden className="absolute left-4 top-4 h-full w-full border-2 border-peach-300/30 bg-olive-700/40" />
            {/* Sharp main frame with crisp peach border and soft glow */}
            <div className="relative rounded-none border-2 border-peach-300 bg-peach-100 p-2 shadow-[0_0_44px_-8px_rgba(249,190,155,0.35)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-none">
                <Image src="/rafi.jpg" alt="Portrait of MD Rafi Al Islam" fill priority sizes="(min-width: 768px) 384px, 90vw" className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
