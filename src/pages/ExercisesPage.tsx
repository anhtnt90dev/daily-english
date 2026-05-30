import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { LessonCard } from '../components/LessonCard';
import { TopicCard } from '../components/TopicCard';
import { filterLessons, levels, topics } from '../data/lessons';
import type { Level } from '../types';

export function ExercisesPage() {
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [query, setQuery] = useState('');

  const lessons = useMemo(() => filterLessons({ level, query }), [level, query]);

  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">Exercises</span>
        <h1>Choose a dictation lesson</h1>
      </div>

      <div className="filter-bar">
        <label className="search-box">
          <Search size={18} />
          <span className="sr-only">Search lessons</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lessons" />
        </label>
        <div className="segmented-control" aria-label="Filter by level">
          <button type="button" className={level === 'all' ? 'is-selected' : ''} onClick={() => setLevel('all')}>
            All
          </button>
          {levels.map((item) => (
            <button
              type="button"
              key={item}
              className={level === item ? 'is-selected' : ''}
              onClick={() => setLevel(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="topic-grid compact-grid">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}

