import { Trophy } from 'lucide-react';
import { useState } from 'react';

import { formatActiveTime, monthlyLeaders, weeklyLeaders } from '../data/leaderboard';

export function LeaderboardPage() {
  const [period, setPeriod] = useState<'week' | 'month'>('week');
  const rows = period === 'week' ? weeklyLeaders : monthlyLeaders;

  return (
    <section className="page-section">
      <div className="section-heading inline">
        <div>
          <span className="eyebrow">Ranking</span>
          <h1>Top users</h1>
        </div>
        <div className="segmented-control small" aria-label="Leaderboard period">
          <button type="button" className={period === 'week' ? 'is-selected' : ''} onClick={() => setPeriod('week')}>
            Week
          </button>
          <button type="button" className={period === 'month' ? 'is-selected' : ''} onClick={() => setPeriod('month')}>
            Month
          </button>
        </div>
      </div>

      <div className="leaderboard">
        {rows.map((row) => (
          <article className="leader-row" key={row.rank}>
            <span className="rank">
              {row.rank <= 3 ? <Trophy size={19} /> : null}
              {row.rank}
            </span>
            <span className="avatar">{row.initials}</span>
            <span className="leader-name">{row.name}</span>
            <span>{formatActiveTime(row.activeMinutes)}</span>
            <span>{row.completedLessons} lessons</span>
          </article>
        ))}
      </div>
      <p className="note">Sample local data. The deployed app does not connect to real user accounts.</p>
    </section>
  );
}

