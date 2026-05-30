import { describe, expect, it } from 'vitest';

import { evaluateAnswer, normalizeAnswer, revealHint } from './dictation';

describe('dictation helpers', () => {
  it('normalizes capitalization, punctuation, and spacing', () => {
    expect(normalizeAnswer('  The   morning, train!  ')).toBe('the morning train');
  });

  it('scores matching words and reports missing and extra words', () => {
    const result = evaluateAnswer('The morning train arrives early.', 'Morning train arrive early today');

    expect(result.percent).toBe(60);
    expect(result.correctWords).toEqual(['morning', 'train', 'early']);
    expect(result.missingWords).toEqual(['the', 'arrives']);
    expect(result.extraWords).toEqual(['arrive', 'today']);
    expect(result.isExact).toBe(false);
  });

  it('treats equivalent normalized answers as exact', () => {
    const result = evaluateAnswer("We're ready now.", 'were ready now');

    expect(result.percent).toBe(100);
    expect(result.isExact).toBe(true);
  });

  it('reveals the first letters of hidden words for hints', () => {
    expect(revealHint('Fresh rain makes the garden quiet.')).toBe('F____ r___ m____ t__ g_____ q____.');
  });
});

