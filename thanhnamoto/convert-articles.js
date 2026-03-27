#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Read the TypeScript articles file
const articlesTsPath = path.join(__dirname, 'app/tin-tuc/_data/articles.ts');
let content = fs.readFileSync(articlesTsPath, 'utf-8');

// Extract just the array part (after the declaration)
const startIndex = content.indexOf('export const ARTICLES: Article[] = [');
if (startIndex === -1) {
  console.error('❌ Could not find ARTICLES array');
  process.exit(1);
}

// Find the actual opening bracket of the array (after the = sign)
const equalIndex = content.indexOf('=', startIndex);
const arrayStartIndex = content.indexOf('[', equalIndex);

// Find matching closing bracket
let bracketCount = 0;
let endIndex = -1;
for (let i = arrayStartIndex; i < content.length; i++) {
  if (content[i] === '[') bracketCount++;
  if (content[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      endIndex = i + 1;
      break;
    }
  }
}

if (endIndex === -1) {
  console.error('❌ Could not find matching closing bracket');
  process.exit(1);
}

const arrayContent = content.substring(arrayStartIndex, endIndex);

// Evaluate the array using Function constructor (safer than eval)
let ARTICLES;
try {
  // eslint-disable-next-line no-new-func
  ARTICLES = new Function('return ' + arrayContent)();
} catch (error) {
  console.error('❌ Failed to parse articles:', error.message);
  process.exit(1);
}

// Verify we have articles
if (!Array.isArray(ARTICLES)) {
  console.error('❌ Articles is not an array');
  process.exit(1);
}

// Create output JSON
const output = {
  articles: ARTICLES,
  exportedAt: new Date().toISOString(),
  totalArticles: ARTICLES.length,
  slugs: ARTICLES.map(a => a.slug)
};

// Write to JSON file
const outputPath = path.join(__dirname, 'app/tin-tuc/_data/articles.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✅ Successfully exported ${ARTICLES.length} articles to articles.json`);
console.log(`📁 Output: ${outputPath}`);
console.log('\nArticles exported:');
ARTICLES.forEach((a, i) => {
  console.log(`  ${i + 1}. ${a.slug}`);
});
