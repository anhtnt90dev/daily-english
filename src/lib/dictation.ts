export type AnswerEvaluation = {
  expectedWords: string[];
  actualWords: string[];
  correctWords: string[];
  missingWords: string[];
  extraWords: string[];
  percent: number;
  isExact: boolean;
};

export function normalizeAnswer(value: string): string {
  return value
    .toLocaleLowerCase('en-US')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenizeAnswer(value: string): string[] {
  const normalized = normalizeAnswer(value);
  return normalized.length > 0 ? normalized.split(' ') : [];
}

export function evaluateAnswer(expected: string, actual: string): AnswerEvaluation {
  const expectedWords = tokenizeAnswer(expected);
  const actualWords = tokenizeAnswer(actual);
  const remainingActual = [...actualWords];
  const correctWords: string[] = [];
  const missingWords: string[] = [];

  for (const word of expectedWords) {
    const matchIndex = remainingActual.indexOf(word);
    if (matchIndex >= 0) {
      correctWords.push(word);
      remainingActual.splice(matchIndex, 1);
    } else {
      missingWords.push(word);
    }
  }

  const percent =
    expectedWords.length === 0 ? 0 : Math.round((correctWords.length / expectedWords.length) * 100);

  return {
    expectedWords,
    actualWords,
    correctWords,
    missingWords,
    extraWords: remainingActual,
    percent,
    isExact: normalizeAnswer(expected) === normalizeAnswer(actual),
  };
}

export function revealHint(sentence: string): string {
  return sentence.replace(/[A-Za-z]+/g, (word) => {
    if (word.length <= 1) {
      return word;
    }

    return `${word[0]}${'_'.repeat(word.length - 1)}`;
  });
}

