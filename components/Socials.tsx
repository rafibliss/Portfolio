import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Socials({ className = "" }: { className?: string }) {
  const links = [
    { href: profile.github, label: "GitHub", icon: <FaGithub /> },
    { href: profile.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
    { href: `https://wa.me/${profile.whatsapp}`, label: "WhatsApp", icon: <FaWhatsapp /> },
    { href: profile.facebook, label: "Facebook", icon: <FaFacebookF /> },
    { href: profile.twitter, label: "X (Twitter)", icon: <FaXTwitter /> },
    { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={18} /> },
  ].filter((l) => l.href);

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target={l.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={l.label}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-peach-300/70 text-lg text-peach-100 transition hover:bg-peach-300 hover:text-olive-900"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
