import fs from "node:fs";
import path from "node:path";

export type WritingEntry = {
  slug: string;
  title: string;
  type: string;
  context: string;
  dateLabel: string;
  excerpt: string;
  order: number;
  lines: string[];
};

export const writingPage = {
  title: "Writing",
  intro:
    "Poems, reflections, and notes from practice, retreat, and being human.",
};

const writingDirectory = path.join(process.cwd(), "content", "writing");

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Writing files must start with frontmatter.");
  }

  const metadata = Object.fromEntries(
    match[1]
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");
        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();

        return [key, value.replace(/^["']|["']$/g, "")];
      }),
  );

  return {
    metadata,
    body: match[2].trim(),
  };
}

export function getWritingEntries() {
  const filenames = fs
    .readdirSync(writingDirectory)
    .filter((filename) => filename.endsWith(".md") && !filename.startsWith("_"));

  return filenames
    .map((filename) => {
      const markdown = fs.readFileSync(
        path.join(writingDirectory, filename),
        "utf8",
      );
      const { metadata, body } = parseFrontmatter(markdown);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: metadata.title ?? "Untitled",
        type: metadata.type ?? "Writing",
        context: metadata.context ?? "",
        dateLabel: metadata.dateLabel ?? "",
        excerpt: metadata.excerpt ?? "",
        order: Number(metadata.order ?? 999),
        lines: body.split(/\r?\n/),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getWritingEntry(slug: string) {
  return getWritingEntries().find((entry) => entry.slug === slug);
}

export function getAdjacentWritingEntries(slug: string) {
  const entries = getWritingEntries();
  const index = entries.findIndex((entry) => entry.slug === slug);

  return {
    previous: index > 0 ? entries[index - 1] : null,
    next:
      index >= 0 && index < entries.length - 1 ? entries[index + 1] : null,
  };
}
