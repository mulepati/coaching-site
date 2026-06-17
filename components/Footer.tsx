import Link from "next/link";

type FooterProps = {
  links: {
    instagram: string;
    twitter: string;
    podcast: string;
    booking: string;
  };
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="mt-12">
      <div className="flex flex-col gap-4 border-t border-ink/15 pt-5 text-sm text-ink/72 dark:border-white/10 dark:text-dark-text/72 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Samek Mulepati</p>
        <div className="flex flex-wrap gap-4">
          <Link href={links.instagram} target="_blank" className="hover:text-primary dark:hover:text-dark-accent">
            Instagram
          </Link>
          <Link href={links.twitter} target="_blank" className="hover:text-primary dark:hover:text-dark-accent">
            Twitter/X
          </Link>
          <Link href={links.podcast} target="_blank" className="hover:text-primary dark:hover:text-dark-accent">
            Podcast
          </Link>
          <Link href={links.booking} className="hover:text-primary dark:hover:text-dark-accent">
            Booking
          </Link>
        </div>
      </div>
    </footer>
  );
}
