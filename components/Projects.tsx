import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Selected work. Open any project for the stack, challenges and what comes next." tone="soft">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.slug} className="flex flex-col overflow-hidden rounded-3xl bg-peach-50 ring-1 ring-peach-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={`${p.title} preview`} className="aspect-[8/5] w-full object-cover object-top" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-semibold text-olive-600">{p.kind}</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-olive-800">{p.title}</h3>
              <p className="mt-2 flex-1 text-olive-900/85">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 4).map((s) => <li key={s} className="rounded-full bg-olive-100 px-3 py-1 text-xs font-medium text-olive-800">{s}</li>)}
              </ul>
              <Link href={`/projects/${p.slug}`} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-5 py-2.5 font-semibold text-peach-100 transition hover:bg-olive-800">
                View details <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
