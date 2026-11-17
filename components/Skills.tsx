import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use to design, build and ship web apps." tone="soft">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-3xl bg-peach-50 p-6 shadow-sm ring-1 ring-peach-200">
            <h3 className="font-display text-xl font-bold text-olive-800">{group.category}</h3>
            <ul className="mt-5 space-y-4">
              {group.items.map(([name, level]) => (
                <li key={name}>
                  <div className="mb-1.5 flex justify-between text-sm font-medium text-olive-900">
                    <span>{name}</span><span className="text-olive-600">{level}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-peach-200" role="progressbar" aria-label={name} aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}>
                    <div className="h-full rounded-full bg-gradient-to-r from-olive-600 to-olive-300" style={{ width: `${level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
