"use client";

const cards = [
  {
    number: "01",
    suit: "\u2660",
    suitColor: "text-foreground",
    title: "Hook",
    description: "First 3 seconds. Why they stay or leave.",
    score: 85,
  },
  {
    number: "02",
    suit: "\u2665",
    suitColor: "text-accent",
    title: "Retention",
    description: "The hold. Patterns that lock attention.",
    score: 72,
  },
  {
    number: "03",
    suit: "\u2663",
    suitColor: "text-foreground",
    title: "CTR",
    description: "The click. Thumbnail psychology.",
    score: 91,
  },
  {
    number: "04",
    suit: "\u2666",
    suitColor: "text-accent",
    title: "Pattern",
    description: "The edge. 1.2M video database.",
    score: 78,
  },
];

export function CardsSection() {
  return (
    <section className="px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal mb-4 text-foreground text-balance">
            Your Analytics <span className="text-accent italic">Deck</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Four key metrics that determine video success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group card-modern p-8 flex flex-col cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {card.number}
                </span>
                <span
                  className={`text-3xl leading-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 ${card.suitColor}`}
                >
                  {card.suit}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal leading-none mb-3 text-foreground">
                {card.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {card.description}
              </p>

              <div className="mt-auto flex items-end justify-between">
                <div className="font-serif text-5xl font-normal leading-none text-foreground">
                  {card.score}
                </div>
                <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${card.score}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
