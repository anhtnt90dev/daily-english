import { describe, expect, it } from 'vitest';

import { buildLessonProgress, mergePartResult } from './progress';

describe('progress helpers', () => {
  it('merges a checked sentence result without losing existing results', () => {
    const progress = mergePartResult(
      {
        lessonId: 'morning-walk',
        updatedAt: '2026-05-31T00:00:00.000Z',
        parts: { 'part-1': { percent: 100, completed: true } },
      },
      'part-2',
      75,
      '2026-05-31T01:00:00.000Z',
    );

    expect(progress.parts['part-1']).toEqual({ percent: 100, completed: true });
    expect(progress.parts['part-2']).toEqual({ percent: 75, completed: true });
    expect(progress.updatedAt).toBe('2026-05-31T01:00:00.000Z');
  });

  it('summarizes completion and average accuracy for a lesson', () => {
    const summary = buildLessonProgress(
      ['part-1', 'part-2', 'part-3'],
      {
        lessonId: 'morning-walk',
        updatedAt: '2026-05-31T01:00:00.000Z',
        parts: {
          'part-1': { percent: 100, completed: true },
          'part-2': { percent: 50, completed: true },
        },
      },
    );

    expect(summary.completedParts).toBe(2);
    expect(summary.totalParts).toBe(3);
    expect(summary.averagePercent).toBe(75);
    expect(summary.isComplete).toBe(false);
  });
});

