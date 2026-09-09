import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Member Stories — College Fit" },
      { name: "description", content: "Hear from students who transformed their fitness at College Fit." },
      { property: "og:title", content: "Member Stories — College Fit" },
      { property: "og:description", content: "Hear from students who transformed their fitness at College Fit." },
    ],
  }),
  component: TestimonialsPage,
});

const stories = [
  {
    quote: "I went from skipping workouts to showing up five days a week. The coaches and community make it impossible to quit.",
    name: "Ava Thompson",
    role: "Biology Major",
    result: "+40 lbs on deadlift",
  },
  {
    quote: "College Fit gave me structure during the most stressful semester of my life. Training here is my reset button.",
    name: "Jordan Lee",
    role: "Engineering Student",
    result: "Lost 18 lbs in 12 weeks",
  },
  {
    quote: "I had never lifted before. The Foundations class met me where I was and built my confidence from day one.",
    name: "Maya Singh",
    role: "Psychology Major",
    result: "First pull-up achieved",
  },
  {
    quote: "The recovery sessions saved my shoulders after years of bad posture. I move better, sleep better, and feel stronger.",
    name: "Ethan Brooks",
    role: "Computer Science",
    result: "Shoulder pain gone",
  },
  {
    quote: "Best decision I made in college. The energy is unreal, the equipment is top-tier, and the price actually makes sense.",
    name: "Olivia Chen",
    role: "Business Major",
    result: "Member for 2 years",
  },
  {
    quote: "I came for the free week and stayed for the people. Everyone here wants to see you win.",
    name: "Noah Martinez",
    role: "Kinesiology Student",
    result: "Coached 3 friends to join",
  },
];

function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Member Stories</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Real students. Real results.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            These are the voices that make College Fit more than a gym.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.name}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="mt-4 flex-1 text-card-foreground">"{story.quote}"</p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-card-foreground">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {story.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
