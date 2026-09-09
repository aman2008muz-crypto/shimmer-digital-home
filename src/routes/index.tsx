import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Users, Trophy } from "lucide-react";
import heroGym from "../assets/hero-gym.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "College Fit — Premium Gym for Students" },
      { name: "description", content: "Train hard, recover smart, and build lifelong discipline at College Fit, the premium gym built for students." },
      { property: "og:title", content: "College Fit — Premium Gym for Students" },
      { property: "og:description", content: "Train hard, recover smart, and build lifelong discipline at College Fit, the premium gym built for students." },
      { property: "og:image", content: heroGym },
      { name: "twitter:image", content: heroGym },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt="College Fit premium gym interior"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Train Without Compromise
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Built for students. <br />
              <span className="text-primary">Designed for results.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Premium equipment, expert coaching, and a community that keeps you accountable — all at a student-friendly price.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center rounded-md border border-border bg-background/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <Flame className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">High-Energy Classes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From strength and HIIT to mobility and recovery — every session is coached and scalable.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">Student Community</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Train alongside people who get the grind. Accountability partners, not strangers.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:col-span-2 lg:col-span-1">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">Premium Equipment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Rogue, Eleiko, and Technogym — the tools you need to push your limits safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Your first week is free.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Try every class, meet the coaches, and feel the difference before you commit.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Claim Your Free Week
          </Link>
        </div>
      </section>
    </>
  );
}
