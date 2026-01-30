const stats = [
  { value: "1.2M", label: "Videos Decoded" },
  { value: "94%", label: "Accuracy" },
  { value: "2,847", label: "Creators" },
  { value: "312M", label: "Views Influenced" },
];

export function StatsBar() {
  return (
    <section className="px-6 lg:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="font-serif text-4xl lg:text-5xl font-normal leading-none text-foreground mb-2">
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
