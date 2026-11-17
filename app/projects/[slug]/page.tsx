import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} | MD Rafi Al Islam` : "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 md:py-16">
      <Link href="/#projects" className="inline-flex items-center gap-2 font-medium text-olive-700 hover:text-olive-900">
        <ArrowLeft size={18} /> All projects
      </Link>
      <p className="mt-8 text-sm font-semibold text-olive-600">{p.kind}</p>
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-olive-800 md:text-6xl">{p.title}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.image} alt={`${p.title} preview`} className="mt-8 aspect-[8/5] w-full rounded-3xl object-cover object-top ring-1 ring-peach-200" />

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-olive-700 px-6 py-3 font-semibold text-peach-100 hover:bg-olive-800">
          <ExternalLink size={18} /> Live project
        </a>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-olive-700 px-6 py-3 font-semibold text-olive-800 hover:bg-peach-200">
          <FaGithub size={18} /> GitHub repository
        </a>
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold text-olive-800">Description</h2>
      <p className="mt-3 text-lg leading-relaxed text-olive-900/90">{p.description}</p>

      <h2 className="mt-10 font-display text-2xl font-bold text-olive-800">Main technology stack</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => <li key={s} className="rounded-full bg-olive-100 px-4 py-1.5 text-sm font-medium text-olive-800">{s}</li>)}
      </ul>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-peach-100 p-6">
          <h2 className="font-display text-xl font-bold text-olive-800">Challenges faced</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-olive-900/90">{p.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div className="rounded-3xl bg-olive-800 p-6 text-peach-100">
          <h2 className="font-display text-xl font-bold text-peach-50">Future plans</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">{p.improvements.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
