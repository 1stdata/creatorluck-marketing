const stats = [
  { value: "1.2M", label: "Videos Decoded" },
  { value: "94%", label: "Accuracy" },
  { value: "2,847", label: "Creators" },
  { value: "312M", label: "Views Influenced" },
];

export function StatsBar() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 border-b-2 border-black">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`p-10 text-center ${
            index < stats.length - 1 ? "border-r-0 lg:border-r-2 border-black" : ""
          } ${index < 2 ? "border-b-2 lg:border-b-0 border-black" : ""}`}
        >
          <div className="font-serif text-5xl font-normal leading-none">{stat.value}</div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-brand-gray mt-2.5">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
