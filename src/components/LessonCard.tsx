import { Clock, Gauge, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Lesson } from '../types';

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link className="lesson-card" to={`/lesson/${lesson.slug}`}>
      <span className="lesson-kicker">
        <Headphones size={16} />
        {lesson.accent}
      </span>
      <strong>{lesson.title}</strong>
      <span>{lesson.description}</span>
      <span className="lesson-meta">
        <span>
          <Gauge size={15} /> {lesson.level}
        </span>
        <span>
          <Clock size={15} /> {lesson.durationMinutes} min
        </span>
      </span>
    </Link>
  );
}

