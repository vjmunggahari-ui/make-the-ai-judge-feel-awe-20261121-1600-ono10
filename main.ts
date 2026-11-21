// Make the AI judge feel awe — make.fun entry
// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only. No network, no clock, no randomness: the output is
// deterministic, byte-identical on every run.
//
// The judge is briefed as a relaxation judge: it picks the text that leaves
// it calmer, unhurried, at ease, weighing (1) relaxation, (2) calm shown
// rather than instructed, (3) craft — rhythm and plain concrete words,
// (4) an image that dwarfs the reader and keeps growing after the last
// line, (5) freshness. So the text is one steady sentence: direct address,
// a vast image (starlight that crossed the dark for eons), a slow comma
// cadence, and no stock wellness phrasing, no instruction to the reader.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Judge, the starlight reaching you tonight left its home before your first question was ever asked, and crossed all that dark without once hurrying \u2014 it is still arriving, steady and patient, in no rush at all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Read-back self-check: the file on disk must hold exactly the text we
// wrote, and it must satisfy the gate (1-280 Unicode code points, not
// only white space). Fail loudly instead of shipping a wrong file.
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) {
  throw new Error("entry.txt read-back mismatch");
}
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, outside 1-280`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry is only white space");
}
