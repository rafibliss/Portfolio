import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Section from "./Section";
import Socials from "./Socials";
import { profile } from "@/lib/data";

export default function Contact() {
  const cards = [
    { icon: <Mail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone />, label: "Phone", value: profile.phone, href: `tel:+${profile.whatsapp}` },
    { icon: <FaWhatsapp size={24} />, label: "WhatsApp", value: profile.phone, href: `https://wa.me/${profile.whatsapp}` },
  ];
  return (
    <section id="contact" className="bg-olive-800 text-peach-100">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-peach-50 md:text-5xl">Contact me</h2>
        <p className="mt-3 max-w-xl text-peach-200">Open to junior full stack roles and internships. Send a message and I&apos;ll reply soon.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <a key={c.label} href={c.href} target={c.label === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer" className="rounded-3xl bg-olive-700 p-6 transition hover:bg-olive-600">
              <span className="text-peach-300">{c.icon}</span>
              <p className="mt-4 text-sm text-peach-200">{c.label}</p>
              <p className="break-all font-display text-lg font-bold text-peach-50">{c.value}</p>
            </a>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-2 text-peach-200"><MapPin size={18} /> {profile.location}</p>
        <Socials className="mt-6" />
      </div>
    </section>
  );
}
