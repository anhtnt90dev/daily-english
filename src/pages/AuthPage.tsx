import { Mail, UserRound } from 'lucide-react';

type AuthPageProps = {
  mode: 'login' | 'register';
};

export function AuthPage({ mode }: AuthPageProps) {
  const isRegister = mode === 'register';

  return (
    <section className="page-section auth-page">
      <div className="auth-panel">
        <span className="eyebrow">{isRegister ? 'Create profile' : 'Welcome back'}</span>
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        <form className="auth-form">
          {isRegister ? (
            <label>
              <span>Name</span>
              <input placeholder="Your name" />
            </label>
          ) : null}
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" placeholder="Password" />
          </label>
          <button className="primary-button" type="button">
            {isRegister ? <UserRound size={18} /> : <Mail size={18} />}
            {isRegister ? 'Create account' : 'Continue'}
          </button>
        </form>
        <p className="note">Static demo only. No credentials are sent or stored.</p>
      </div>
    </section>
  );
}

