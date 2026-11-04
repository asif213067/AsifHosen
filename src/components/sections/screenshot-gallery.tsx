"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideProps {
  src: string;
  index: number;
  title: string;
  single: boolean;
}

interface ScreenshotGalleryProps {
  title: string;
  images: string[];
}

const arrowClass =
  "absolute top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border bg-card text-foreground shadow-md hover:bg-muted";

function Slide({ src, index, title, single }: SlideProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-16/10 snap-center overflow-hidden rounded-xl border bg-primary/10",
        single ? "flex-[0_0_100%]" : "flex-[0_0_88%]",
      )}
    >
      {failed ? (
        <div className="flex h-full flex-col">
          <span className="block h-5.5 bg-border" />
          <span className="flex flex-1 items-center justify-center text-sm font-medium text-muted-foreground">
            Screenshot {index}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={`${title} screenshot ${index}`}
          fill
          sizes="(min-width: 768px) 620px, 88vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function ScreenshotGallery({ title, images }: ScreenshotGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const hasMany = images.length > 1;

  function scrollByDirection(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className="relative">
        <div
          ref={trackRef}
          role="region"
          tabIndex={0}
          aria-label={`${title} screenshots`}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-xl scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <Slide
              key={src}
              src={src}
              index={i + 1}
              title={title}
              single={!hasMany}
            />
          ))}
        </div>

        {hasMany && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => scrollByDirection(-1)}
              className={`${arrowClass} left-2`}
            >
              <ChevronLeft className="size-4.5" />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => scrollByDirection(1)}
              className={`${arrowClass} right-2`}
            >
              <ChevronRight className="size-4.5" />
            </button>
          </>
        )}
      </div>

      {hasMany && (
        <p className="mt-2 text-xs text-muted-foreground">
          Scroll sideways or use the arrows to see all {images.length}{" "}
          screenshots.
        </p>
      )}
    </div>
  );
}
