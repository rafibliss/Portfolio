import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex max-w-2xl items-start gap-5 rounded-3xl border-l-8 border-olive-600 bg-peach-100 p-6 md:p-8">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-olive-700 text-peach-200"><GraduationCap size={28} /></span>
        <div>
          <h3 className="font-display text-2xl font-bold text-olive-800">{education.degree}</h3>
          <p className="mt-1 text-lg font-medium text-olive-700">{education.school}</p>
          <p className="text-olive-700/80">{education.place}</p>
          <p className="mt-3 inline-block rounded-full bg-peach-300 px-3 py-1 text-sm font-semibold text-olive-900">{education.period}</p>
        </div>
      </div>
    </Section>
  );
}
