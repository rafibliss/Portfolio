import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/#home" aria-label="Rafi, home" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl rounded-br-3xl bg-olive-700 font-display text-lg font-extrabold text-peach-200">
        R
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-peach-100" : "text-olive-800"}`}>
        Rafi
      </span>
    </Link>
  );
}
