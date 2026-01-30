import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 px-6 lg:px-12 border-t border-border text-sm text-muted-foreground">
      <span>&copy; 2026 CreatorLuck</span>
      <div className="flex gap-6">
        <Link href="/terms" className="hover:text-foreground transition-colors">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-foreground transition-colors">
          Privacy
        </Link>
        <a
          href="https://twitter.com/creatorluck"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
