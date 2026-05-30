import type { LeaderboardRow } from '../types';

export const weeklyLeaders: LeaderboardRow[] = [
  { rank: 1, name: 'Avery Chen', activeMinutes: 640, completedLessons: 34, initials: 'AC' },
  { rank: 2, name: 'Mina Torres', activeMinutes: 612, completedLessons: 32, initials: 'MT' },
  { rank: 3, name: 'Samir Patel', activeMinutes: 588, completedLessons: 31, initials: 'SP' },
  { rank: 4, name: 'Linh Tran', activeMinutes: 545, completedLessons: 29, initials: 'LT' },
  { rank: 5, name: 'Grace Miller', activeMinutes: 501, completedLessons: 26, initials: 'GM' },
  { rank: 6, name: 'Owen Brooks', activeMinutes: 476, completedLessons: 25, initials: 'OB' },
  { rank: 7, name: 'Yara Novak', activeMinutes: 443, completedLessons: 23, initials: 'YN' },
  { rank: 8, name: 'Hugo Martin', activeMinutes: 421, completedLessons: 22, initials: 'HM' },
];

export const monthlyLeaders: LeaderboardRow[] = [
  { rank: 1, name: 'Mina Torres', activeMinutes: 2260, completedLessons: 121, initials: 'MT' },
  { rank: 2, name: 'Avery Chen', activeMinutes: 2194, completedLessons: 116, initials: 'AC' },
  { rank: 3, name: 'Grace Miller', activeMinutes: 2055, completedLessons: 110, initials: 'GM' },
  { rank: 4, name: 'Samir Patel', activeMinutes: 1980, completedLessons: 104, initials: 'SP' },
  { rank: 5, name: 'Linh Tran', activeMinutes: 1855, completedLessons: 99, initials: 'LT' },
  { rank: 6, name: 'Owen Brooks', activeMinutes: 1724, completedLessons: 91, initials: 'OB' },
  { rank: 7, name: 'Yara Novak', activeMinutes: 1648, completedLessons: 88, initials: 'YN' },
  { rank: 8, name: 'Hugo Martin', activeMinutes: 1515, completedLessons: 80, initials: 'HM' },
];

export function formatActiveTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} min`;
  }

  return remainingMinutes === 0 ? `${hours} hr` : `${hours} hr ${remainingMinutes} min`;
}

