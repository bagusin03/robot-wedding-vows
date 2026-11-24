// One-Line Robot Wedding Vows — one line, at most 160 characters.
// A robot couple's wedding vow in the classic "to have and to hold" cadence,
// with the laugh paying off in the last few words: death is not what parts
// them — a factory reset is.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, till death — or a factory reset — do us part.";

// Gate: the sealed scorer requires 1-160 UTF-8 characters, not only whitespace.
// Count code points (not UTF-16 units) so the check matches the scorer's
// character count even for non-BMP text.
const CHARS = Array.from(LINE).length;
if (CHARS < 1 || CHARS > 160 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-160 chars, got ${CHARS}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
