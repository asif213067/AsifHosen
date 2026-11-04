"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { TypingText } from "@/components/typing-text";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:min-h-0 md:py-12 lg:min-h-[calc(100vh-4rem)] lg:py-16"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="text-xl font-medium text-muted-foreground"
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-gradient mt-1 pb-1 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-3 min-h-9 text-2xl font-medium text-muted-foreground sm:text-3xl"
        >
          <TypingText words={profile.roles} />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              {social.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className={cn(
              buttonVariants(),
              "bg-brand-gradient text-primary-foreground hover:bg-brand-gradient hover:opacity-90",
            )}
          >
            <Download className="size-4" />
            Download resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.2 }}
        className="mx-auto w-full max-w-sm"
      >
        <div className="bg-brand-gradient rounded-3xl p-1 shadow-xl">
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={800}
            height={800}
            priority
            sizes="(min-width: 768px) 384px, 80vw"
            className="aspect-square w-full rounded-[1.35rem] object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
