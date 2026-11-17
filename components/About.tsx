import Section from "./Section";
import { about } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-olive-900/90">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl bg-peach-200 p-6">
            <h3 className="font-display text-xl font-bold text-olive-800">Outside of code</h3>
            <ul className="mt-3 space-y-2 text-olive-900/90">
              {about.interests.map((i) => <li key={i} className="flex gap-2"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-olive-600" />{i}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-olive-800 p-6 text-peach-100">
            <h3 className="font-display text-xl font-bold text-peach-50">Languages</h3>
            <ul className="mt-3 space-y-2">
              {about.languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-4 border-b border-peach-100/15 pb-2 last:border-0">
                  <span className="font-semibold">{l.name}</span><span className="text-right text-peach-200">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
