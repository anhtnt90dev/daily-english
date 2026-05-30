import { ArrowRight, CheckCircle2, Keyboard, ListChecks, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { LessonCard } from '../components/LessonCard';
import { TopicCard } from '../components/TopicCard';
import { getFeaturedLessons, topics } from '../data/lessons';

const stats = [
  { label: 'topics', value: topics.length.toString() },
  { label: 'lessons', value: topics.reduce((total, topic) => total + topic.lessons.length, 0).toString() },
  { label: 'levels', value: 'A1-C1' },
];

export function HomePage() {
  const featuredLessons = getFeaturedLessons();

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">English listening practice</span>
          <h1>Practice English dictation every day</h1>
          <p>
            Build listening accuracy with sentence playback, typed answers, instant matching,
            transcript review, and progress saved in your browser.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/exercises">
              Start now <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" to="/top-users">
              View ranking
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Dictation preview">
          <div className="wave-card">
            <span className="play-orb">
              <Volume2 size={34} />
            </span>
            <div className="wave-lines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="preview-stack">
            <span>
              <Keyboard size={18} /> The morning train arrives early.
            </span>
            <span>
              <CheckCircle2 size={18} /> 100% match
            </span>
            <span>
              <ListChecks size={18} /> 5 sentences
            </span>
          </div>
        </div>
      </section>

      <section className="stat-strip" aria-label="Catalog summary">
        {stats.map((stat) => (
          <span key={stat.label}>
            <strong>{stat.value}</strong>
            {stat.label}
          </span>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Browse</span>
          <h2>Exercise topics</h2>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>Start with these lessons</h2>
          </div>
          <Link className="text-link" to="/exercises">
            All exercises <ArrowRight size={17} />
          </Link>
        </div>
        <div className="lesson-grid">
          {featuredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </>
  );
}

