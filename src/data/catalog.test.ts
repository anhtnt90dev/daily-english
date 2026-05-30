import { describe, expect, it } from 'vitest';

import { filterLessons, getFeaturedLessons, getLessonBySlug, getTopicBySlug, topics } from './lessons';

describe('lesson catalog', () => {
  it('contains original topic groups with lessons and parts', () => {
    expect(topics.length).toBeGreaterThanOrEqual(5);
    expect(topics.every((topic) => topic.lessons.length > 0)).toBe(true);
    expect(topics.every((topic) => topic.lessons.every((lesson) => lesson.parts.length > 0))).toBe(true);
  });

  it('finds topics and lessons by slug', () => {
    const topic = getTopicBySlug('short-stories');
    const lesson = getLessonBySlug('morning-at-the-station');

    expect(topic?.title).toBe('Short Stories');
    expect(lesson?.level).toBe('A1');
  });

  it('filters lessons by level and query', () => {
    const results = filterLessons({ level: 'B1', query: 'meeting' });

    expect(results).toHaveLength(1);
    expect(results[0].slug).toBe('planning-the-team-meeting');
  });

  it('returns featured lessons from different topics', () => {
    const featured = getFeaturedLessons();
    const topicSlugs = new Set(featured.map((lesson) => lesson.topicSlug));

    expect(featured).toHaveLength(6);
    expect(topicSlugs.size).toBeGreaterThan(3);
  });
});

