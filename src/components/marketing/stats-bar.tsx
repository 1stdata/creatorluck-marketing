const stats = [
  { value: "1.2M", label: "Videos Decoded", highlight: false },
  { value: "94%", label: "Accuracy", highlight: true },
  { value: "2,847", label: "Creators", highlight: false },
  { value: "312M", label: "Views Influenced", highlight: true },
];

export function StatsBar() {
  return (
    <section className="px-6 lg:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                stat.highlight 
                  ? "bg-accent/10 border-accent/30 hover:bg-accent/15" 
                  : "bg-card border-border hover:border-accent/20"
              }`}
            >
              <div className={`font-serif text-4xl lg:text-5xl font-normal leading-none mb-2 ${
                stat.highlight ? "text-accent" : "text-foreground"
              }`}>
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
