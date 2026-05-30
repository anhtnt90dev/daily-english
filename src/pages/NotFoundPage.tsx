import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="page-section not-found">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The requested page is not available in this static app.</p>
      <Link className="primary-button" to="/exercises">
        Browse exercises
      </Link>
    </section>
  );
}

