import type { Lesson, LessonFilters, Level, Topic } from '../types';

const makeLesson = (
  topicSlug: string,
  lesson: Omit<Lesson, 'topicSlug'>,
): Lesson => ({
  ...lesson,
  topicSlug,
});

export const topics: Topic[] = [
  {
    slug: 'short-stories',
    title: 'Short Stories',
    description: 'Gentle everyday stories for focused sentence-by-sentence listening.',
    levelRange: ['A1', 'A2', 'B1'],
    icon: 'BookOpen',
    lessons: [
      makeLesson('short-stories', {
        id: 'lesson-morning-station',
        slug: 'morning-at-the-station',
        title: 'Morning at the Station',
        description: 'A simple story about catching an early train.',
        level: 'A1',
        accent: 'American',
        durationMinutes: 4,
        featured: true,
        parts: [
          { id: 'station-1', sentence: 'The morning train arrives early.' },
          { id: 'station-2', sentence: 'Mia buys a small ticket at the window.' },
          { id: 'station-3', sentence: 'She waits beside a blue bench.' },
          { id: 'station-4', sentence: 'A friendly guard points to platform two.' },
          { id: 'station-5', sentence: 'Mia smiles when the train lights appear.' },
        ],
      }),
      makeLesson('short-stories', {
        id: 'lesson-quiet-library',
        slug: 'the-quiet-library',
        title: 'The Quiet Library',
        description: 'Practice clear past-tense sentences in a calm setting.',
        level: 'A2',
        accent: 'British',
        durationMinutes: 5,
        parts: [
          { id: 'library-1', sentence: 'Jon returned three books after lunch.' },
          { id: 'library-2', sentence: 'The librarian placed them on a wooden cart.' },
          { id: 'library-3', sentence: 'A child whispered a question about space.' },
          { id: 'library-4', sentence: 'Jon found an atlas near the window.' },
          { id: 'library-5', sentence: 'He copied one map into his notebook.' },
        ],
      }),
    ],
  },
  {
    slug: 'daily-conversations',
    title: 'Daily Conversations',
    description: 'Short exchanges for real-life errands, plans, and small talk.',
    levelRange: ['A1', 'A2', 'B1'],
    icon: 'MessagesSquare',
    lessons: [
      makeLesson('daily-conversations', {
        id: 'lesson-coffee-after-class',
        slug: 'coffee-after-class',
        title: 'Coffee After Class',
        description: 'Two classmates arrange a quick meeting.',
        level: 'A2',
        accent: 'American',
        durationMinutes: 4,
        featured: true,
        parts: [
          { id: 'coffee-1', sentence: 'Do you want to get coffee after class?' },
          { id: 'coffee-2', sentence: 'I can meet you near the front gate.' },
          { id: 'coffee-3', sentence: 'The small cafe is usually quiet at four.' },
          { id: 'coffee-4', sentence: 'Let us review the homework together.' },
          { id: 'coffee-5', sentence: 'That sounds useful, and I am free today.' },
        ],
      }),
      makeLesson('daily-conversations', {
        id: 'lesson-weekend-market',
        slug: 'weekend-market',
        title: 'Weekend Market',
        description: 'Listen for prices, preferences, and polite requests.',
        level: 'A1',
        accent: 'Mixed',
        durationMinutes: 4,
        parts: [
          { id: 'market-1', sentence: 'How much are these red apples?' },
          { id: 'market-2', sentence: 'They are three dollars for a bag.' },
          { id: 'market-3', sentence: 'Can I also have two fresh lemons?' },
          { id: 'market-4', sentence: 'The lemons are next to the carrots.' },
          { id: 'market-5', sentence: 'Thank you, I will pay with cash.' },
        ],
      }),
    ],
  },
  {
    slug: 'exam-listening',
    title: 'Exam Listening',
    description: 'Academic and workplace mini passages for test-style practice.',
    levelRange: ['B1', 'B2', 'C1'],
    icon: 'GraduationCap',
    lessons: [
      makeLesson('exam-listening', {
        id: 'lesson-team-meeting',
        slug: 'planning-the-team-meeting',
        title: 'Planning the Team Meeting',
        description: 'A workplace update with dates, roles, and decisions.',
        level: 'B1',
        accent: 'American',
        durationMinutes: 6,
        featured: true,
        parts: [
          { id: 'meeting-1', sentence: 'The team meeting has moved from Tuesday to Thursday.' },
          { id: 'meeting-2', sentence: 'Nora will prepare the budget summary before noon.' },
          { id: 'meeting-3', sentence: 'Everyone should read the client notes in advance.' },
          { id: 'meeting-4', sentence: 'The final agenda will be shared after lunch.' },
          { id: 'meeting-5', sentence: 'Please bring one practical suggestion for the launch.' },
        ],
      }),
      makeLesson('exam-listening', {
        id: 'lesson-campus-tour',
        slug: 'campus-tour-announcement',
        title: 'Campus Tour Announcement',
        description: 'A guided-tour announcement with locations and instructions.',
        level: 'B2',
        accent: 'British',
        durationMinutes: 7,
        parts: [
          { id: 'campus-1', sentence: 'The campus tour begins outside the science building.' },
          { id: 'campus-2', sentence: 'Visitors should keep their badges visible during the walk.' },
          { id: 'campus-3', sentence: 'The library extension opened after two years of construction.' },
          { id: 'campus-4', sentence: 'Questions about accommodation will be answered at reception.' },
          { id: 'campus-5', sentence: 'The group will finish beside the student services office.' },
        ],
      }),
    ],
  },
  {
    slug: 'numbers-and-names',
    title: 'Numbers & Names',
    description: 'Drill spelling, phone numbers, dates, codes, and proper names.',
    levelRange: ['A1', 'A2'],
    icon: 'Hash',
    lessons: [
      makeLesson('numbers-and-names', {
        id: 'lesson-phone-message',
        slug: 'phone-message',
        title: 'Phone Message',
        description: 'Practice short numbers and names in a message.',
        level: 'A1',
        accent: 'American',
        durationMinutes: 3,
        featured: true,
        parts: [
          { id: 'phone-1', sentence: 'Please call Lina at five one two.' },
          { id: 'phone-2', sentence: 'Her office opens at nine thirty.' },
          { id: 'phone-3', sentence: 'The meeting room is B fourteen.' },
          { id: 'phone-4', sentence: 'Write the code as seven zero eight.' },
          { id: 'phone-5', sentence: 'Ask for Daniel when you arrive.' },
        ],
      }),
      makeLesson('numbers-and-names', {
        id: 'lesson-spelling-passenger',
        slug: 'spelling-a-passenger-name',
        title: 'Spelling a Passenger Name',
        description: 'Listen for letters in a travel desk conversation.',
        level: 'A2',
        accent: 'Australian',
        durationMinutes: 3,
        parts: [
          { id: 'passenger-1', sentence: 'The passenger name is Clara Stone.' },
          { id: 'passenger-2', sentence: 'Clara is spelled C L A R A.' },
          { id: 'passenger-3', sentence: 'Stone is spelled S T O N E.' },
          { id: 'passenger-4', sentence: 'Her flight leaves at six fifteen.' },
          { id: 'passenger-5', sentence: 'The seat number is twelve A.' },
        ],
      }),
    ],
  },
  {
    slug: 'pronunciation-focus',
    title: 'Pronunciation Focus',
    description: 'Minimal-pair and rhythm drills for more accurate listening.',
    levelRange: ['A2', 'B1', 'B2'],
    icon: 'AudioLines',
    lessons: [
      makeLesson('pronunciation-focus', {
        id: 'lesson-rain-and-train',
        slug: 'rain-and-train',
        title: 'Rain and Train',
        description: 'Hear consonant clusters in short sentences.',
        level: 'A2',
        accent: 'American',
        durationMinutes: 4,
        featured: true,
        parts: [
          { id: 'rain-1', sentence: 'Fresh rain makes the garden quiet.' },
          { id: 'rain-2', sentence: 'The train crossed the bridge slowly.' },
          { id: 'rain-3', sentence: 'Grace brought green grapes for breakfast.' },
          { id: 'rain-4', sentence: 'The street lights glowed after the storm.' },
          { id: 'rain-5', sentence: 'Brian cleaned the glass tray carefully.' },
        ],
      }),
      makeLesson('pronunciation-focus', {
        id: 'lesson-final-sounds',
        slug: 'final-sounds',
        title: 'Final Sounds',
        description: 'Practice hearing word endings clearly.',
        level: 'B1',
        accent: 'British',
        durationMinutes: 5,
        parts: [
          { id: 'final-1', sentence: 'The guest packed three small bags.' },
          { id: 'final-2', sentence: 'She watched the birds above the roofs.' },
          { id: 'final-3', sentence: 'The chef washed the plates twice.' },
          { id: 'final-4', sentence: 'Cold winds changed the plans quickly.' },
          { id: 'final-5', sentence: 'Mark fixed the lamps before guests arrived.' },
        ],
      }),
    ],
  },
  {
    slug: 'workplace-english',
    title: 'Workplace English',
    description: 'Professional requests, updates, and announcements.',
    levelRange: ['B1', 'B2', 'C1'],
    icon: 'BriefcaseBusiness',
    lessons: [
      makeLesson('workplace-english', {
        id: 'lesson-project-update',
        slug: 'project-update',
        title: 'Project Update',
        description: 'Follow a clear status report about a product release.',
        level: 'B2',
        accent: 'American',
        durationMinutes: 6,
        featured: true,
        parts: [
          { id: 'project-1', sentence: 'The design review finished ahead of schedule.' },
          { id: 'project-2', sentence: 'Two accessibility issues still need attention.' },
          { id: 'project-3', sentence: 'The engineering team will publish a patch tomorrow.' },
          { id: 'project-4', sentence: 'Customer training begins once the release notes are approved.' },
          { id: 'project-5', sentence: 'The next milestone depends on final security testing.' },
        ],
      }),
      makeLesson('workplace-english', {
        id: 'lesson-support-call',
        slug: 'support-call-summary',
        title: 'Support Call Summary',
        description: 'A concise customer support summary with action items.',
        level: 'C1',
        accent: 'Mixed',
        durationMinutes: 7,
        parts: [
          { id: 'support-1', sentence: 'The customer reported intermittent errors during checkout.' },
          { id: 'support-2', sentence: 'Logs suggest the payment gateway timed out repeatedly.' },
          { id: 'support-3', sentence: 'A temporary retry policy reduced the failure rate.' },
          { id: 'support-4', sentence: 'Finance requested a detailed incident timeline by Friday.' },
          { id: 'support-5', sentence: 'Engineering will monitor the queue until traffic stabilizes.' },
        ],
      }),
    ],
  },
];

export const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const allLessons: Lesson[] = topics.flatMap((topic) => topic.lessons);

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.slug === slug);
}

export function filterLessons({ level = 'all', query = '', topicSlug }: LessonFilters): Lesson[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('en-US');

  return allLessons.filter((lesson) => {
    const matchesLevel = level === 'all' || lesson.level === level;
    const matchesTopic = !topicSlug || lesson.topicSlug === topicSlug;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      `${lesson.title} ${lesson.description}`.toLocaleLowerCase('en-US').includes(normalizedQuery);

    return matchesLevel && matchesTopic && matchesQuery;
  });
}

export function getFeaturedLessons(): Lesson[] {
  return allLessons.filter((lesson) => lesson.featured).slice(0, 6);
}

