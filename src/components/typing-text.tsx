"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypingTextProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export function TypingText({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1400,
}: TypingTextProps) {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const word = words[wordIndex];
    const finishedTyping = !deleting && length === word.length;
    const finishedDeleting = deleting && length === 0;
    const delay = finishedTyping ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [
    words,
    wordIndex,
    length,
    deleting,
    typeSpeed,
    deleteSpeed,
    pause,
    reduceMotion,
  ]);

  const visibleText = reduceMotion
    ? words[0]
    : words[wordIndex].slice(0, length);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {visibleText}
        {!reduceMotion && (
          <span className="ml-1 inline-block h-[1.1em] w-0.5 translate-y-[0.15em] animate-pulse bg-primary" />
        )}
      </span>
    </>
  );
}
