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

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialFormState = { name: "", email: "", message: "" };

// Needs text before "@", a domain with at least one dot, and a 2+ letter ending.
// "work@gmail" and "work@gmail." fail, "work@gmail.com" passes.
const EMAIL_PATTERN =
  /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

// Text for the browser's own pop-up bubble on the field. Empty string = field is fine.
function getFieldError(name: string, value: string): string {
  const trimmed = value.trim();
  if (name === "name" && !trimmed) return "Please enter your name.";
  if (name === "email") {
    if (!trimmed) return "Please enter your email address.";
    if (!EMAIL_PATTERN.test(trimmed)) {
      return "Please enter a valid email address, like name@gmail.com.";
    }
  }
  if (name === "message" && !trimmed) return "Please write your message.";
  return "";
}

export function Contact() {
  const [values, setValues] = useState(initialFormState);
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  // Shown under the form only when the form itself is broken or sending failed.
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (name === "company") return; // honeypot, not stored in form values
    // Flags the field as invalid, so the browser blocks submit and shows the bubble.
    event.target.setCustomValidity(getFieldError(name, value));
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  // Runs when the browser finds a field invalid on submit (for example an untouched,
  // empty field). Replaces the default "Please fill out this field" with our text.
  const handleInvalid = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.currentTarget;
    field.setCustomValidity(getFieldError(field.name, field.value));
  };

  const showSuccess = (message: string) => {
    toast.success(message);
    setValues(initialFormState);
    setFormError(null);
  };

  const showFailure = (
    toastMessage: string,
    inlineMessage: string,
    description?: string,
  ) => {
    toast.error(toastMessage, { description });
    setFormError(inlineMessage);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setFormError(null);

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
      showFailure(
        "EmailJS is not configured yet. Please contact me directly by email.",
        "This contact form isn’t working right now. Please email me directly at",
        // `Missing environment variab,les: ${missing}`,
      );
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          message: values.message.trim(),
        },
        publicKey,
      );
      showSuccess("Message sent! I'll get back to you as soon as I can.");
    } catch {
      // Values are preserved on failure so nothing is lost.
      showFailure(
        "Something went wrong while sending. Please try again in a moment.",
        "Your message could not be sent. Please try again, or email me directly at",
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
                  onInvalid={handleInvalid}
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
                  onInvalid={handleInvalid}
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
                  onInvalid={handleInvalid}
                  disabled={sending}
                  className="min-h-36 rounded-xl bg-muted px-4 py-3"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-brand-gradient px-6 text-primary-foreground hover:bg-brand-gradient hover:opacity-90",
                  )}
                >
                  {sending ? "Sending…" : "Send message"}
                </button>

                {formError && (
                  <p
                    role="alert"
                    className="mt-3 text-sm font-medium text-red-600 dark:text-red-400"
                  >
                    {formError}{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="break-all underline underline-offset-2"
                    >
                      {profile.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
