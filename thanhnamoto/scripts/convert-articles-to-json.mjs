#!/usr/bin/env node
/**
 * Convert articles.ts ARTICLES array to articles.json
 * Usage: node scripts/convert-articles-to-json.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesPath = path.join(__dirname, '../app/tin-tuc/_data/articles.ts');
const outputPath = path.join(__dirname, '../app/tin-tuc/_data/articles.json');

try {
  // Read the TypeScript file
  let fileContent = fs.readFileSync(articlesPath, 'utf-8');

  // Extract just the ARTICLES array content
  const startMatch = fileContent.indexOf('export const ARTICLES: Article[] = [');
  if (startMatch === -1) {
    throw new Error('Could not find ARTICLES array in articles.ts');
  }

  const arrayStart = fileContent.indexOf('[', startMatch);
  const arrayContent = fileContent.substring(arrayStart);

  // Use regex to find the matching closing bracket
  let bracketCount = 0;
  let endIndex = 0;
  for (let i = 0; i < arrayContent.length; i++) {
    if (arrayContent[i] === '[') bracketCount++;
    if (arrayContent[i] === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        endIndex = i;
        break;
      }
    }
  }

  const arrayString = arrayContent.substring(0, endIndex + 1);

  // Evaluate the array (this is safe because we control the source)
  // eslint-disable-next-line no-eval
  const ARTICLES = eval(arrayString);

  // Create the JSON object
  const jsonData = {
    articles: ARTICLES,
    exportedAt: new Date().toISOString(),
    totalArticles: ARTICLES.length,
    slugs: ARTICLES.map(a => a.slug)
  };

  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));

  console.log(`✓ Successfully converted ${ARTICLES.length} articles to JSON`);
  console.log(`✓ Output saved to: ${outputPath}`);
  console.log('\nArticle slugs:');
  ARTICLES.forEach(a => console.log(`  - ${a.slug}`));

} catch (error) {
  console.error('❌ Conversion failed:', error.message);
  process.exit(1);
}
