import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Lightbulb,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ProgressBar } from '../components/ProgressBar';
import { getLessonBySlug, getTopicBySlug } from '../data/lessons';
import { evaluateAnswer, revealHint, type AnswerEvaluation } from '../lib/dictation';
import {
  buildLessonProgress,
  createEmptyProgress,
  loadProgress,
  mergePartResult,
  saveProgress,
  type LessonProgress,
} from '../lib/progress';
import { NotFoundPage } from './NotFoundPage';

type Tab = 'dictation' | 'transcript';

export function LessonPage() {
  const { lessonSlug } = useParams();
  const lesson = lessonSlug ? getLessonBySlug(lessonSlug) : undefined;
  const topic = lesson ? getTopicBySlug(lesson.topicSlug) : undefined;
  const [activeIndex, setActiveIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<AnswerEvaluation | null>(null);
  const [tab, setTab] = useState<Tab>('dictation');
  const [playbackMessage, setPlaybackMessage] = useState('');
  const [progress, setProgress] = useState<LessonProgress | undefined>(() => {
    if (!lesson) {
      return undefined;
    }

    return loadProgress()[lesson.id];
  });

  useEffect(() => {
    if (!lesson) {
      return;
    }

    setProgress(loadProgress()[lesson.id]);
  }, [lesson]);

  if (!lesson || !topic) {
    return <NotFoundPage />;
  }

  const lessonId = lesson.id;
  const activePart = lesson.parts[activeIndex];
  const summary = useMemo(
    () => buildLessonProgress(lesson.parts.map((part) => part.id), progress),
    [lesson.parts, progress],
  );
  const completionPercent = Math.round((summary.completedParts / summary.totalParts) * 100);

  function speakSentence() {
    if (!('speechSynthesis' in window)) {
      setPlaybackMessage('Speech playback is unavailable in this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(activePart.sentence);
    utterance.lang = 'en-US';
    utterance.rate = 0.86;
    window.speechSynthesis.speak(utterance);
    setPlaybackMessage('Playing sentence audio');
  }

  function checkAnswer() {
    const result = evaluateAnswer(activePart.sentence, answer);
    const allProgress = loadProgress();
    const currentProgress = allProgress[lessonId] ?? createEmptyProgress(lessonId);
    const nextProgress = mergePartResult(currentProgress, activePart.id, result.percent);

    saveProgress({ ...allProgress, [lessonId]: nextProgress });
    setProgress(nextProgress);
    setEvaluation(result);
  }

  function goToPart(nextIndex: number) {
    setActiveIndex(nextIndex);
    setAnswer('');
    setEvaluation(null);
    setPlaybackMessage('');
  }

  return (
    <section className="page-section lesson-page">
      <Link className="text-link back-link" to={`/topic/${topic.slug}`}>
        <ArrowLeft size={17} /> {topic.title}
      </Link>

      <div className="lesson-header">
        <div>
          <span className="eyebrow">
            {lesson.level} · {lesson.accent} · {lesson.durationMinutes} min
          </span>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
        </div>
        <div className="lesson-progress-panel">
          <ProgressBar value={completionPercent} label="Completion" />
          <ProgressBar value={summary.averagePercent} label="Accuracy" />
        </div>
      </div>

      <div className="tabs" role="tablist" aria-label="Lesson mode">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'dictation'}
          className={tab === 'dictation' ? 'is-selected' : ''}
          onClick={() => setTab('dictation')}
        >
          Dictation
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'transcript'}
          className={tab === 'transcript' ? 'is-selected' : ''}
          onClick={() => setTab('transcript')}
        >
          Full transcript
        </button>
      </div>

      {tab === 'dictation' ? (
        <div className="practice-grid">
          <article className="practice-panel">
            <div className="part-status">
              <span>
                Sentence {activeIndex + 1} of {lesson.parts.length}
              </span>
              <span>{progress?.parts[activePart.id]?.completed ? 'Checked' : 'Unchecked'}</span>
            </div>

            <button className="audio-button" type="button" onClick={speakSentence}>
              <Volume2 size={30} />
              Play sentence
            </button>
            {playbackMessage ? <p className="inline-status">{playbackMessage}</p> : null}

            <label className="answer-box">
              <span>Type what you hear</span>
              <textarea
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                rows={5}
                placeholder="Write the sentence here"
              />
            </label>

            <div className="practice-actions">
              <button className="primary-button" type="button" onClick={checkAnswer}>
                <Check size={18} /> Check answer
              </button>
              <button className="secondary-button" type="button" onClick={() => setAnswer(revealHint(activePart.sentence))}>
                <Lightbulb size={18} /> Hint
              </button>
              <button className="secondary-button" type="button" onClick={() => setAnswer(activePart.sentence)}>
                <Eye size={18} /> Reveal
              </button>
              <button className="icon-button" type="button" onClick={() => setAnswer('')} title="Clear answer">
                <RotateCcw size={18} />
                <span className="sr-only">Clear answer</span>
              </button>
            </div>

            {evaluation ? (
              <div className={evaluation.isExact ? 'feedback good' : 'feedback'}>
                <strong>{evaluation.percent}% match</strong>
                {evaluation.isExact ? <p>Exact answer.</p> : null}
                {evaluation.missingWords.length > 0 ? <p>Missing: {evaluation.missingWords.join(', ')}</p> : null}
                {evaluation.extraWords.length > 0 ? <p>Extra: {evaluation.extraWords.join(', ')}</p> : null}
              </div>
            ) : null}
          </article>

          <aside className="sentence-list" aria-label="Lesson sentences">
            {lesson.parts.map((part, index) => (
              <button
                key={part.id}
                type="button"
                className={index === activeIndex ? 'is-selected' : ''}
                onClick={() => goToPart(index)}
              >
                <span>{index + 1}</span>
                {progress?.parts[part.id]?.completed ? <Check size={16} /> : null}
              </button>
            ))}
          </aside>
        </div>
      ) : (
        <article className="transcript-panel">
          {lesson.parts.map((part, index) => (
            <p key={part.id}>
              <strong>{index + 1}.</strong> {part.sentence}
            </p>
          ))}
        </article>
      )}

      <div className="lesson-nav">
        <button
          type="button"
          className="secondary-button"
          onClick={() => goToPart(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
        >
          <ChevronLeft size={18} /> Previous
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => goToPart(Math.min(lesson.parts.length - 1, activeIndex + 1))}
          disabled={activeIndex === lesson.parts.length - 1}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
