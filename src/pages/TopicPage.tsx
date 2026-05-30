import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { LessonCard } from '../components/LessonCard';
import { getTopicBySlug } from '../data/lessons';
import { NotFoundPage } from './NotFoundPage';

export function TopicPage() {
  const { topicSlug } = useParams();
  const topic = topicSlug ? getTopicBySlug(topicSlug) : undefined;

  if (!topic) {
    return <NotFoundPage />;
  }

  return (
    <section className="page-section">
      <Link className="text-link back-link" to="/exercises">
        <ArrowLeft size={17} /> Exercises
      </Link>
      <div className="topic-hero">
        <span className="eyebrow">{topic.levelRange.join(' - ')}</span>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </div>
      <div className="lesson-grid">
        {topic.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}

