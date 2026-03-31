function MotionModeToast({ message, visible }) {
  return (
    <div
      className={`motion-mode-toast ${visible ? 'is-visible' : ''}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {message}
    </div>
  );
}

export default MotionModeToast;

