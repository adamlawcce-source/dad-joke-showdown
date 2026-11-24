import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, told by a father to his kids at the dinner table: he used
// to be a baker but could not make enough dough, so now he just loafs around
// the house telling jokes. Two puns land on the same beat — "dough" (money /
// bread money) and "loaf" (loaf around / a loaf of bread) — and the
// punchline arrives in the last few words, in a voice a dad could deliver
// out loud without explaining anything. The setup was tightened ("quit
// baking because") so the joke gets to the first pun faster.
const TEXT =
  "I told my kids I quit baking because I couldn't make enough dough, so now I just loaf around the house telling jokes.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
