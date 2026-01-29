import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-between items-center h-16 px-8 lg:px-16 border-t-2 border-black text-sm text-brand-gray">
      <span>&copy; 2026 CreatorLuck</span>
      <div className="flex gap-8">
        <Link href="/terms" className="hover:text-black transition-colors">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-black transition-colors">
          Privacy
        </Link>
        <a
          href="https://twitter.com/creatorluck"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
