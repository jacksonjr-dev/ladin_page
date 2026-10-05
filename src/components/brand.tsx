export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand ${footer ? 'brand-footer' : ''}`}>
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="brand-mark">
        <path d="M8 4h12v12H8zM20 16h12v12H20zM8 28h12v4H4V16h4z" fill="currentColor" />
        <path d="M24 4h8v8h-8z" className="brand-spark" fill="currentColor" />
      </svg>
      <span>JPG<span className="brand-labs">Labs</span></span>
    </span>
  );
}