import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 px-6 lg:px-12 border-t border-accent/10 text-sm text-muted-foreground">
      <span>&copy; 2026 <span className="text-accent">Creator</span>Luck</span>
      <div className="flex gap-6">
        <Link href="/terms" className="hover:text-accent transition-colors">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-accent transition-colors">
          Privacy
        </Link>
        <a
          href="https://twitter.com/creatorluck"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
