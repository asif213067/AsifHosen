"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoBadgeProps {
  name: string;
  logo?: string;
}

export function LogoBadge({ name, logo }: LogoBadgeProps) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      <Image
        src={logo}
        alt=""
        width={48}
        height={48}
        onError={() => setFailed(true)}
        className="size-12 shrink-0 rounded-xl border bg-white object-contain p-1.5"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="bg-brand-gradient flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-primary-foreground"
    >
      {name.charAt(0)}
    </span>
  );
}
