import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { AuthPage } from './pages/AuthPage';
import { ExercisesPage } from './pages/ExercisesPage';
import { HomePage } from './pages/HomePage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { LessonPage } from './pages/LessonPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TopicPage } from './pages/TopicPage';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/topic/:topicSlug" element={<TopicPage />} />
        <Route path="/lesson/:lessonSlug" element={<LessonPage />} />
        <Route path="/top-users" element={<LeaderboardPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

