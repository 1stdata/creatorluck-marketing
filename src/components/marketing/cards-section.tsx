"use client";

const cards = [
  {
    number: "01",
    suit: "\u2660",
    suitRed: false,
    title: "Hook",
    description: "First 3 seconds. Why they stay or leave.",
    score: 85,
  },
  {
    number: "02",
    suit: "\u2665",
    suitRed: true,
    title: "Retention",
    description: "The hold. Patterns that lock attention.",
    score: 72,
  },
  {
    number: "03",
    suit: "\u2663",
    suitRed: false,
    title: "CTR",
    description: "The click. Thumbnail psychology.",
    score: 91,
  },
  {
    number: "04",
    suit: "\u2666",
    suitRed: true,
    title: "Pattern",
    description: "The edge. 1.2M video database.",
    score: 78,
  },
];

export function CardsSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-b-2 border-black">
      {cards.map((card, index) => (
        <div
          key={card.number}
          className={`group p-10 flex flex-col cursor-pointer transition-all duration-150 hover:bg-black hover:text-white ${
            index < cards.length - 1 ? "border-r-0 lg:border-r-2 border-black" : ""
          } ${
            index < 2 ? "border-b-2 lg:border-b-0 border-black" : ""
          }`}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-gray group-hover:text-gray-500">
              {card.number}
            </span>
            <span
              className={`text-3xl leading-none transition-transform duration-150 group-hover:scale-115 ${
                card.suitRed ? "text-brand-red" : ""
              }`}
            >
              {card.suit}
            </span>
          </div>

          <h3 className="font-serif text-4xl font-normal leading-none mb-3">{card.title}</h3>

          <p className="text-[15px] text-brand-gray leading-relaxed group-hover:text-gray-400">
            {card.description}
          </p>

          <div className="font-serif text-5xl font-normal mt-auto pt-6 leading-none">
            {card.score}
          </div>
        </div>
      ))}
    </section>
  );
}
