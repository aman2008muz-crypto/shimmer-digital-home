import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Shield } from "lucide-react";
import trainer1 from "../assets/trainer-1.jpg";
import trainer2 from "../assets/trainer-2.jpg";
import trainer3 from "../assets/trainer-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — College Fit" },
      { name: "description", content: "Learn the story behind College Fit, our mission, and the coaches who make it happen." },
      { property: "og:title", content: "About — College Fit" },
      { property: "og:description", content: "Learn the story behind College Fit, our mission, and the coaches who make it happen." },
    ],
  }),
  component: AboutPage,
});

const trainers = [
  {
    name: "Marcus Cole",
    role: "Head Coach — Strength",
    image: trainer1,
  },
  {
    name: "Sofia Reyes",
    role: "Coach — Conditioning & Mobility",
    image: trainer2,
  },
  {
    name: "David Park",
    role: "Coach — Athletic Performance",
    image: trainer3,
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Story</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Built by students, for students.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            College Fit started in a campus rec center with one barbell and a belief: students deserve a gym that takes their goals seriously without taking their whole paycheck.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Discipline First</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We teach consistency over intensity. Small wins, stacked daily, create lasting change.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Inclusive Community</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every level is welcome. Whether it is your first squat or your five-hundredth, you belong here.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Evidence-Based Coaching</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Programs built on real physiology, not trends. Train smarter, recover better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Team</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Coaches who actually coach.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1008}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{trainer.name}</h3>
                  <p className="text-sm text-primary">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
