// One Line, Big Laugh — make.fun bounty u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output/entry.txt). Node 22 stdlib only: no network, no files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I went to bed early for once, and my brain threw a surprise party for every embarrassing thing I've ever done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Gate guard: the entry must be exactly one line of 1-200 characters.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote ${chars} chars to ${outPath}`);
