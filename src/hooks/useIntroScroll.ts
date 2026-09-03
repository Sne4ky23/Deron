import { useEffect, useRef } from 'react';

/**
 * Controlled Slide Scroll Hook:
 * - Direct, controlled 1-gesture-per-screen transitions ONLY scrolling DOWN through
 *   the first 4 slides:
 *     1. Hero (DERON)
 *     2. Concepto (Un gesto físico)
 *     3. Beneficios (Menos fricción. Más reseñas.)
 *     4. El Stand (Producto)
 * - Scrolling UP is always 100% free/native — no snap back, no forced jumps.
 * - From El Stand onwards scrolling down: 100% normal native free scrolling.
 * - Robust inertial debounce prevents accidental double-skipping on the way DOWN.
 */
export function useIntroScroll() {
  const isAnimatingRef = useRef(false);
  const cooldownUntilRef = useRef<number>(0);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouchOrMobile =
      window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches;
    if (isTouchOrMobile) return;

    const getElementTop = (id: string, offset = 0) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      return Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
    };

    const scrollToPosition = (targetY: number, duration = 400, callback?: () => void) => {
      const now = performance.now();
      if (isAnimatingRef.current || now < cooldownUntilRef.current) return;

      isAnimatingRef.current = true;
      const startY = window.scrollY;
      const change = targetY - startY;

      if (Math.abs(change) < 5) {
        isAnimatingRef.current = false;
        return;
      }

      const startTime = performance.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + change * easeOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetY);
          isAnimatingRef.current = false;
          cooldownUntilRef.current = performance.now() + 500;
          callback?.();
        }
      };

      requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const now = performance.now();
      const isCoolingDown = now < cooldownUntilRef.current;
      const currentY = window.scrollY;

      const conceptTop = getElementTop('concepto', 0);
      const benefitsTop = getElementTop('beneficios', 0);
      const productTop = getElementTop('producto', 68);

      const delta = e.deltaY;
      const threshold = 12;

      // ── SCROLLING UP ── always let it go free, no snap at all
      if (delta < 0) {
        // Only block during an active animated transition (not cooldown)
        if (isAnimatingRef.current) {
          e.preventDefault();
        }
        return;
      }

      // ── Below El Stand: 100% native scroll down ──
      if (currentY >= productTop - 30) {
        if (isAnimatingRef.current) {
          e.preventDefault();
        }
        return;
      }

      // ── During animation or cooldown on intro slides: absorb down events ──
      if (isAnimatingRef.current || isCoolingDown) {
        e.preventDefault();
        return;
      }

      // ── SLIDE 1: Hero → Concepto ──
      if (currentY < conceptTop - 60) {
        if (delta > threshold) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
        return;
      }

      // ── SLIDE 2: Concepto → Beneficios ──
      if (currentY >= conceptTop - 60 && currentY < benefitsTop - 60) {
        if (delta > threshold) {
          e.preventDefault();
          scrollToPosition(benefitsTop);
        }
        return;
      }

      // ── SLIDE 3: Beneficios → El Stand ──
      if (currentY >= benefitsTop - 60 && currentY < productTop - 30) {
        if (delta > threshold) {
          e.preventDefault();
          scrollToPosition(productTop);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      if (e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      if (touchStartYRef.current === null) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY; // positive = swipe up = scroll down
      const currentY = window.scrollY;

      const conceptTop = getElementTop('concepto', 0);
      const benefitsTop = getElementTop('beneficios', 0);
      const productTop = getElementTop('producto', 68);

      // Scrolling UP touch: always free
      if (deltaY < 0) {
        if (isAnimatingRef.current) e.preventDefault();
        return;
      }

      // Below Stand: free
      if (currentY >= productTop - 30) return;

      if (isAnimatingRef.current || performance.now() < cooldownUntilRef.current) {
        e.preventDefault();
        return;
      }

      const swipeThreshold = 30;

      if (currentY < conceptTop - 60) {
        if (deltaY > swipeThreshold) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
        return;
      }

      if (currentY >= conceptTop - 60 && currentY < benefitsTop - 60) {
        if (deltaY > swipeThreshold) {
          e.preventDefault();
          scrollToPosition(benefitsTop);
        }
        return;
      }

      if (currentY >= benefitsTop - 60 && currentY < productTop - 30) {
        if (deltaY > swipeThreshold) {
          e.preventDefault();
          scrollToPosition(productTop);
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      const currentY = window.scrollY;
      const conceptTop = getElementTop('concepto', 0);
      const benefitsTop = getElementTop('beneficios', 0);
      const productTop = getElementTop('producto', 68);

      if (currentY < productTop - 30) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          if (currentY < conceptTop - 60) {
            scrollToPosition(conceptTop);
          } else if (currentY < benefitsTop - 60) {
            scrollToPosition(benefitsTop);
          } else {
            scrollToPosition(productTop);
          }
        }
        // Arrow up: let browser handle natively — no preventDefault
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
