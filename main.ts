import { mkdirSync, writeFileSync } from "node:fs";

// One original cat voicemail greeting: the cat treats the caller as door staff.
const line = "You've reached the cat. Leave a message after the beep, then open the door, close it, and open it again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
