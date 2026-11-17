import Logo from "./Logo";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-olive-700 bg-olive-900 text-peach-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm sm:flex-row">
        <Logo light />
        <p>&copy; {new Date().getFullYear()} {profile.name}.</p>
      </div>
    </footer>
  );
}
