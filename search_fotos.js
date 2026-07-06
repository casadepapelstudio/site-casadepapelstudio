import fs from 'fs';

const data = fs.readFileSync('drive_html.txt', 'utf-8');

// Search for strings containing "Foto" or "foto" or "FOTO" (case-insensitive) or escaped versions
// Google Drive sometimes encodes unicode like \u0046\u006f\u0074\u006f etc.
// Let's write a regex that matches occurrences of "Foto" or similar names, and print their surrounding JSON structure.

// Let's search for "Foto" case-insensitive
const matches = [];
const regex = /Foto\s*\d+/gi;
let match;
while ((match = regex.exec(data)) !== null) {
  matches.push({
    match: match[0],
    index: match.index
  });
}

console.log(`Found ${matches.length} simple regex matches for "Foto <number>":`);
matches.forEach((m, idx) => {
  const surrounding = data.substring(Math.max(0, m.index - 100), Math.min(data.length, m.index + 200));
  console.log(`Match ${idx + 1}: ${m.match} at index ${m.index}`);
  console.log(`Context: ${surrounding}\n`);
});

// Let's also look for unicode escaped "Foto" which is "F" (56 or 46 in hex), "o" (6f), "t" (74), "o" (6f)
// Escape pattern: \\u0046\\u006f\\u0074\\u006f or similar
const unicodeRegex = /\\u0046\\u006f\\u0074\\u006f/gi;
const uniMatches = [];
while ((match = unicodeRegex.exec(data)) !== null) {
  uniMatches.push(match.index);
}
console.log(`Found ${uniMatches.length} unicode escaped "Foto" matches.`);
uniMatches.forEach((index, idx) => {
  const surrounding = data.substring(Math.max(0, index - 100), Math.min(data.length, index + 200));
  console.log(`Unicode Match ${idx + 1} at index ${index}`);
  console.log(`Context: ${surrounding}\n`);
});
