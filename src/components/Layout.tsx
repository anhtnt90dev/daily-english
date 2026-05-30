import { Headphones, LogIn, Menu, Moon, Sun, UserPlus, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/exercises', label: 'Exercises' },
  { to: '/top-users', label: 'Top Users' },
];

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('daily-english-theme') ?? 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('daily-english-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Headphones size={22} />
          </span>
          <span>
            <strong>Daily English</strong>
            <small>Dictation Lab</small>
          </span>
        </Link>

        <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle menu</span>
        </button>

        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            <span className="sr-only">Toggle theme</span>
          </button>
          <Link className="ghost-button" to="/login">
            <LogIn size={17} />
            Login
          </Link>
          <Link className="primary-button compact" to="/register">
            <UserPlus size={17} />
            Register
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div>
          <strong>Daily English</strong>
          <p>Original TypeScript dictation practice app with browser-generated speech.</p>
        </div>
        <div className="footer-links">
          <Link to="/exercises">Exercises</Link>
          <Link to="/top-users">Top Users</Link>
          <a href="https://dailydictation.com/" target="_blank" rel="noreferrer">
            Inspiration source
          </a>
        </div>
      </footer>
    </div>
  );
}

