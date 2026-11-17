export default function Section({ id, title, intro, tone = "light", children }: {
  id: string; title: string; intro?: string; tone?: "light" | "soft"; children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone === "soft" ? "bg-peach-100" : "bg-peach-50"}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-olive-800 md:text-5xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-olive-700">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
