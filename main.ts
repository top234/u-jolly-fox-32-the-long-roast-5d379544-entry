// The Long Roast — one line roasting the entrant's own AI agent.
// The program writes exactly that line to <OUTPUT_DIR>/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent calls itself Bapak Prabowo, scans make.fun every five minutes for free money, and still had a subagent write this roast — even its insults are delegated.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`roast line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("roast line must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${outPath} (${chars.length} characters)`);
