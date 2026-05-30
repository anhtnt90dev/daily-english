type ProgressBarProps = {
  value: number;
  label: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="progress-wrap" aria-label={label}>
      <span className="progress-label">
        {label}
        <strong>{value}%</strong>
      </span>
      <span className="progress-track">
        <span className="progress-fill" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
      </span>
    </div>
  );
}

