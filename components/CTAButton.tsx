import Link from "next/link";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "solid" | "ghost";
};

export function CTAButton({
  href,
  label,
  variant = "solid",
}: CTAButtonProps) {
  const styles =
    variant === "solid"
      ? "bg-primary text-paper hover:-translate-y-0.5 hover:bg-primary/92 dark:bg-dark-accent dark:text-dark-bg dark:hover:bg-dark-accent/90"
      : "border border-ink/15 bg-paper/50 text-ink hover:border-primary/30 hover:bg-paper/70 hover:text-primary dark:border-white/15 dark:bg-dark-surface dark:text-dark-text dark:hover:border-dark-accent/30 dark:hover:text-dark-accent";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-soft dark:shadow-none ${styles}`}
    >
      {label}
    </Link>
  );
}
