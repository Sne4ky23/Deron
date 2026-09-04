export function smoothScrollTo(targetY: number, duration = 320) {
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  if (diff === 0) return;

  let startTime: number | null = null;

  // easeInOutCubic
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = ease(t);
    window.scrollTo(0, Math.round(startY + diff * eased));
    if (t < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
