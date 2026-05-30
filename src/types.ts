export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type LessonPart = {
  id: string;
  sentence: string;
};

export type Lesson = {
  id: string;
  topicSlug: string;
  slug: string;
  title: string;
  description: string;
  level: Level;
  accent: 'American' | 'British' | 'Australian' | 'Mixed';
  durationMinutes: number;
  featured?: boolean;
  parts: LessonPart[];
};

export type Topic = {
  slug: string;
  title: string;
  description: string;
  levelRange: Level[];
  icon: string;
  lessons: Lesson[];
};

export type LessonFilters = {
  level?: Level | 'all';
  query?: string;
  topicSlug?: string;
};

export type LeaderboardRow = {
  rank: number;
  name: string;
  activeMinutes: number;
  completedLessons: number;
  initials: string;
};

