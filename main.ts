// One Line, Lights Out — make.fun entry
// Writes a single sad status update to /output/entry.txt.
// The line: the laptop lid goes down at 11:47 pm, and the cooling fan
// keeps cooling a laptop nobody is using. Quiet fact, no weeping.

import { mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Lid down at 11:47 pm. The fan keeps cooling a laptop nobody is using.";

function fail(message) {
  console.error("FAIL: " + message);
  process.exit(1);
}

function main() {
  const outDir = (process.env.OUTPUT_DIR || "/output").trim();
  if (outDir.length === 0) fail("OUTPUT_DIR is empty");

  // The entry must be exactly one line, 1-200 chars, not only whitespace.
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 200) {
    fail("entry is " + chars.length + " characters, must be 1-200");
  }
  if (ENTRY.trim().length === 0) fail("entry is only whitespace");
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    fail("entry must be exactly one line");
  }
  // Reject invisible / control characters other than plain spaces.
  for (const ch of ENTRY) {
    const code = ch.codePointAt(0);
    if (code < 0x20 || code === 0x7f || (code >= 0x200b && code <= 0x200f)) {
      fail("entry contains an invisible or control character");
    }
  }

  // Create the output directory (recursive mkdir only). Never remove the
  // output directory itself: the grader's /output is a mount point, so
  // only its contents are cleared.
  mkdirSync(outDir, { recursive: true });
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");

  // Round-trip check: read the file back and verify it is byte-exact,
  // with no trailing newline and no BOM added.
  const back = readFileSync(target);
  const expected = Buffer.from(ENTRY, "utf8");
  if (!back.equals(expected)) fail("round-trip mismatch in entry.txt");
  const text = back.toString("utf8");
  if (text !== ENTRY) fail("round-trip text mismatch in entry.txt");
  const bytes = back.length;
  console.log("OK: wrote " + target);
  console.log("chars: " + chars.length + ", bytes: " + bytes);
  console.log("entry: " + text);
}

main();
