import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";

const steps = [
  {
    number: "01",
    title: "Search",
    description: "Enter a topic, channel, or video URL. We scan YouTube's data to find what's working.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Our AI decodes hooks, retention patterns, CTR psychology, and viral signals.",
  },
  {
    number: "03",
    title: "Apply",
    description: "Get actionable insights to craft your next video with data-backed confidence.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl font-normal leading-none tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-lg text-brand-gray">
            Three steps to data-driven content creation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`p-10 ${
                index < steps.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-black" : ""
              }`}
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-brand-gray mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-4xl font-normal leading-none mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] text-brand-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
