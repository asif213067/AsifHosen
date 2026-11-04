"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type Status = { type: "success" | "error"; message: string } | null;

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialFormState = { name: "", email: "", message: "" };

export function Contact() {
  const [values, setValues] = useState(initialFormState);
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (name === "company") return; // honeypot, not stored in form values
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const showSuccess = (message: string) => {
    setStatus({ type: "success", message });
    toast.success(message);
    setValues(initialFormState);
  };

  const showError = (message: string, description?: string) => {
    setStatus({ type: "error", message: message });
    toast.error(message, { description });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    // Honeypot: a filled hidden field means a bot submitted; fake success silently.
    if (honeypot.trim()) {
      showSuccess("Thanks! Your message has been sent.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      const missing = [
        !serviceId && "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
        !templateId && "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
        !publicKey && "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
      ]
        .filter(Boolean)
        .join(", ");
      showError(
        "EmailJS is not configured yet. Please contact me directly by email.",
        `Missing environment variables: ${missing}`,
      );
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        publicKey,
      );
      showSuccess("Message sent! I'll get back to you as soon as I can.");
    } catch {
      // Values are preserved on failure so nothing is lost.
      showError(
        "Something went wrong while sending. Please try again in a moment.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Reach out" title="Let’s connect" />

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Get in touch</h3>
            <p className="mt-3 text-lg text-muted-foreground">
              I’m open to new opportunities and ideas. Use the form or write to
              me directly.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border bg-card p-5 text-card-foreground shadow-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1.5 inline-block break-all font-medium hover:text-primary"
                >
                  {profile.email}
                </a>
              </div>
              <div className="rounded-2xl border bg-card p-5 text-card-foreground shadow-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Location
                </p>
                <p className="mt-1.5 font-medium">{profile.location}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border bg-card p-6 text-card-foreground shadow-sm sm:p-8"
          >
            {/* Spam protection: hidden field, invisible to users, ignored on submit. */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-[-9999px] size-0 overflow-hidden"
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                  value={values.name}
                  onChange={handleChange}
                  disabled={sending}
                  className="h-11 rounded-xl bg-muted px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={values.email}
                  onChange={handleChange}
                  disabled={sending}
                  className="h-11 rounded-xl bg-muted px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello Asif, I’d like to talk about…"
                  value={values.message}
                  onChange={handleChange}
                  disabled={sending}
                  className="min-h-36 rounded-xl bg-muted px-4 py-3"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={sending}
                  aria-describedby="contact-status"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-brand-gradient px-6 text-primary-foreground hover:bg-brand-gradient hover:opacity-90",
                  )}
                >
                  {sending ? "Sending…" : "Send message"}
                </button>
                <p
                  id="contact-status"
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "mt-3 text-sm font-medium",
                    status === null
                      ? "sr-only"
                      : status.type === "error"
                        ? "text-red-600 dark:text-red-400"
                        : "text-primary",
                  )}
                >
                  {status?.message ?? "No messages sent yet."}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
