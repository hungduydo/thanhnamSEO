import { ARTICLES as oldArticles } from '@/app/tin-tuc/_data/articles';

describe('Articles Migration (Pre-verification)', () => {
  it('should have at least some articles', () => {
    expect(oldArticles).toBeDefined();
    expect(Array.isArray(oldArticles)).toBe(true);
    expect(oldArticles.length).toBeGreaterThan(0);
  });

  it('should have correct article count (baseline: 8 articles)', () => {
    // Update this number if articles.ts has changed
    expect(oldArticles).toHaveLength(8);
  });

  it('all articles should have required fields', () => {
    oldArticles.forEach((article, index) => {
      expect(article.slug).toBeDefined();
      expect(typeof article.slug).toBe('string');
      expect(article.title).toBeDefined();
      expect(article.description).toBeDefined();
      expect(article.category).toBeDefined();
      expect(article.date).toBeDefined();
      expect(Array.isArray(article.content)).toBe(true);
    });
  });

  it('all article slugs should be unique', () => {
    const slugs = oldArticles.map(a => a.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('should capture all article slugs for migration', () => {
    const slugs = oldArticles.map(a => a.slug).sort();
    console.log('Article count:', oldArticles.length);
    console.log('Slugs to migrate:', slugs);

    // Log for manual verification
    slugs.forEach(slug => {
      expect(slug).toBeTruthy();
    });
  });
});
