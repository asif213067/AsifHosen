"use client";

import { useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";

interface CertificateImageProps {
  src?: string;
  title: string;
}

export function CertificateImage({ src, title }: CertificateImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/10] border-b bg-muted">
      {src && !failed ? (
        <Image
          src={src}
          alt={`${title} certificate`}
          fill
          sizes="(min-width: 640px) 360px, 100vw"
          className="object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
          <Award aria-hidden="true" className="size-8 text-primary" />
          <span className="text-sm">Certificate preview</span>
        </div>
      )}
    </div>
  );
}
