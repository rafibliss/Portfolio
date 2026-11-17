"use client";
import { useEffect, useState } from "react";

// Loop timing (ms). TYPE = per character typed, DELETE = per character deleted,
// HOLD = pause while the full name is on screen, BLANK = pause before retyping.
// Intentionally runs regardless of prefers-reduced-motion (site owner's request).
const TYPE_MS = 130; // within the requested 120–150 range
const DELETE_MS = 80;
const HOLD_MS = 1800; // within the requested 1.5–2s range
const BLANK_MS = 400;

export default function TypeName({ text }: { text: string }) {
  // Start fully typed: matches the server-rendered HTML, so the name is visible
  // even before React hydrates (or if JS never loads), with no hydration mismatch.
  const [count, setCount] = useState(text.length);
  const [deleting, setDeleting] = useState(false);

  // One timeout per state change: hold, delete back, retype, repeat forever.
  useEffect(() => {
    const done = count === text.length;
    const blank = count === 0;
    const delay = deleting ? DELETE_MS : done ? HOLD_MS : blank ? BLANK_MS : TYPE_MS;
    const t = setTimeout(() => {
      if (deleting) {
        if (blank) setDeleting(false);
        else setCount((c) => c - 1);
      } else {
        if (done) setDeleting(true);
        else setCount((c) => c + 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [count, deleting, text]);

  return (
    <>
      {/* Full name for screen readers and SEO; the animated reveal below is decorative. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="relative inline-block">
        {/* Invisible copy reserves the final layout so nothing shifts while typing/deleting.
            The caret is mirrored here so the reserved width always includes it — otherwise
            at exact-fit widths the caret alone wraps to a second line and overlaps the badge. */}
        <span className="invisible">
          {text}
          <span className="type-caret" />
        </span>
        <span className="absolute inset-0">
          {text.slice(0, count)}
          <span className="type-caret" />
        </span>
      </span>
    </>
  );
}
