import { AudioLines, BookOpen, BriefcaseBusiness, GraduationCap, Hash, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Topic } from '../types';

const icons = {
  AudioLines,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Hash,
  MessagesSquare,
};

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = icons[topic.icon as keyof typeof icons] ?? BookOpen;

  return (
    <Link className="topic-card" to={`/topic/${topic.slug}`}>
      <span className="topic-icon" aria-hidden="true">
        <Icon size={23} />
      </span>
      <span className="card-title">{topic.title}</span>
      <span className="card-copy">{topic.description}</span>
      <span className="card-meta">
        {topic.lessons.length} lessons · {topic.levelRange.join('-')}
      </span>
    </Link>
  );
}

