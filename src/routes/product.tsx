import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Users, Flame, ArrowRight } from "lucide-react";
import classStrength from "../assets/class-strength.jpg";
import classCardio from "../assets/class-cardio.jpg";
import classYoga from "../assets/class-yoga.jpg";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Classes — College Fit" },
      { name: "description", content: "Explore our premium student classes: strength, HIIT, mobility, and more." },
      { property: "og:title", content: "Classes — College Fit" },
      { property: "og:description", content: "Explore our premium student classes: strength, HIIT, mobility, and more." },
    ],
  }),
  component: ProductPage,
});

const classes = [
  {
    title: "Strength Foundations",
    description: "Master the squat, deadlift, press, and row with expert coaching and progressive programming.",
    image: classStrength,
    duration: "60 min",
    level: "All levels",
    intensity: "High",
  },
  {
    title: "Cardio Engine",
    description: "Treadmills, rowers, bikes, and bodyweight intervals designed to build an unstoppable engine.",
    image: classCardio,
    duration: "45 min",
    level: "Intermediate",
    intensity: "Very High",
  },
  {
    title: "Recover & Mobilize",
    description: "Yoga, stretching, and breathwork to restore your body and keep you training week after week.",
    image: classYoga,
    duration: "50 min",
    level: "All levels",
    intensity: "Low",
  },
];

function ProductPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Classes</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Train the way you want.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every class is coached, scalable, and built to fit a student schedule. Pick your path and start moving.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {classes.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-semibold text-card-foreground">{item.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary" /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-primary" /> {item.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5 text-primary" /> {item.intensity}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Not sure where to start?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a free intro session and we will match you with the right class and coach.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Free Intro <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
