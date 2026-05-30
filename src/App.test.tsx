import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { App } from './App';

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('Daily English app', () => {
  it('renders home content and featured lesson navigation', () => {
    renderRoute('/');

    expect(screen.getByRole('heading', { name: /practice english dictation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start now/i })).toHaveAttribute('href', '/exercises');
    expect(screen.getByRole('link', { name: /morning at the station/i })).toBeInTheDocument();
  });

  it('checks a lesson answer and shows feedback', async () => {
    const user = userEvent.setup();
    renderRoute('/lesson/morning-at-the-station');

    await user.type(screen.getByLabelText(/type what you hear/i), 'morning train arrive early today');
    await user.click(screen.getByRole('button', { name: /check answer/i }));

    expect(screen.getByText(/60% match/i)).toBeInTheDocument();
    expect(screen.getByText(/Missing: the, arrives/i)).toBeInTheDocument();
    expect(screen.getByText(/Extra: arrive, today/i)).toBeInTheDocument();
  });
});

