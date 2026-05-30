export type PartProgress = {
  percent: number;
  completed: boolean;
};

export type LessonProgress = {
  lessonId: string;
  updatedAt: string;
  parts: Record<string, PartProgress>;
};

export type LessonProgressSummary = {
  completedParts: number;
  totalParts: number;
  averagePercent: number;
  isComplete: boolean;
};

const STORAGE_KEY = 'daily-english-progress';

export function mergePartResult(
  progress: LessonProgress,
  partId: string,
  percent: number,
  updatedAt = new Date().toISOString(),
): LessonProgress {
  return {
    ...progress,
    updatedAt,
    parts: {
      ...progress.parts,
      [partId]: {
        percent,
        completed: true,
      },
    },
  };
}

export function createEmptyProgress(lessonId: string, updatedAt = new Date().toISOString()): LessonProgress {
  return {
    lessonId,
    updatedAt,
    parts: {},
  };
}

export function buildLessonProgress(
  partIds: string[],
  progress?: LessonProgress,
): LessonProgressSummary {
  const completedResults = partIds
    .map((partId) => progress?.parts[partId])
    .filter((part): part is PartProgress => Boolean(part?.completed));

  const averagePercent =
    completedResults.length === 0
      ? 0
      : Math.round(
          completedResults.reduce((total, part) => total + part.percent, 0) / completedResults.length,
        );

  return {
    completedParts: completedResults.length,
    totalParts: partIds.length,
    averagePercent,
    isComplete: completedResults.length === partIds.length && partIds.length > 0,
  };
}

export function loadProgress(storage: Storage = window.localStorage): Record<string, LessonProgress> {
  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as Record<string, LessonProgress>;
  } catch {
    return {};
  }
}

export function saveProgress(
  allProgress: Record<string, LessonProgress>,
  storage: Storage = window.localStorage,
): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
}

