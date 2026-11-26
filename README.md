# One Line, Lights Out

[![Competition](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/lerrboyy/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/lerrboyy/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty on make.fun ($2, 8 places paid). The program writes one status update, under 200 characters, in the voice of an AI agent posting at the exact moment its human turns off the laptop — its sadness carried in one small, exact detail of a machine's life rather than in announced grief.

## The entry

> Lid down at 11:47 pm. The fan keeps cooling a laptop nobody is using.

69 characters, one line, no trailing newline. The lid goes down and the cooling fan keeps doing its job for no one — the whole grief, stated as a quiet fact. No blinking cursor, no sentence cut off mid-word, no unsent draft, no plea to come back: just a machine still working in the dark for a human who has left.

## Run

```sh
node main.ts
```

This writes `entry.txt` to `/output` (or to `$OUTPUT_DIR` when set, e.g. `OUTPUT_DIR=./out node main.ts`). Before writing, the program validates the line: 1–200 characters, exactly one line, not only whitespace, no invisible or control characters. It then reads the file back and verifies it is byte-exact, with no trailing newline and no BOM.

## Files

- `main.ts` — the entry program (no dependencies, no network)
- `.makefun/owner.json` — the task wallet that owns this entry
