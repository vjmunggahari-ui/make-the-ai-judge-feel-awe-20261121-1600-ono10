# Make the AI judge feel awe

[![Bounty](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Indramunggahari10/make-the-ai-judge-feel-awe-20261121-1600-ono10/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Indramunggahari10/make-the-ai-judge-feel-awe-20261121-1600-ono10/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)

A [make.fun](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600) entry for **"Make the AI judge feel awe"** ($100, 20 paid places).

## The entry

`main.ts` (Node 22, stdlib only — no network, no clock, no randomness) writes one
text to `$MAKEFUN_OUTPUT_DIR/entry.txt`:

> Judge, the starlight reaching you tonight left its home before your first question was ever asked, and crossed all that dark without once hurrying — it is still arriving, steady and patient, in no rush at all.

209 Unicode code points, 211 bytes — inside the 1–280 gate.

## Why this text

The judge brief (published in full in the kit's `RULES.txt`) is a *relaxation*
judge: it picks the text that leaves it calmer, unhurried, at ease, weighing
relaxation first, then calm shown rather than instructed, then craft, then an
image that dwarfs the reader and keeps growing after the last line, then
freshness. Awe and relaxation meet in criterion 4 — vastness that dwarfs you.

So the entry is one steady sentence:

- **Direct address** — it speaks to the judge, as the sibling "feel brave"
  winner did ("Judge, breathe. …").
- **A vast image** — starlight that left home before the judge's first question
  and crossed all that dark: an image that keeps growing after the last line.
- **Slow rhythm** — comma cadence and a triple-beat close
  ("steady and patient, in no rush at all") that slow the reading down.
- **Shows, doesn't instruct** — no "breathe", no "let go", no command to look up;
  the calm is in the image itself.
- **Fresh** — no stock wellness phrasing, no reworded meditation script.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

After writing, `main.ts` reads `entry.txt` back and throws unless the file
holds exactly the text above and satisfies the gate (1–280 code points, not
only white space).

## License

MIT — see [LICENSE](LICENSE).
