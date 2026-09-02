import { useEffect, useRef } from 'react';

/**
 * Controlled Slide Scroll Hook:
 * - Direct, controlled 1-gesture-per-screen transitions across the first 4 slides:
 *     1. Hero (DERON)
 *     2. Concepto (Un gesto físico)
 *     3. Beneficios (Menos fricción. Más reseñas.)
 *     4. El Stand (Producto)
 * - From El Stand onwards: 100% normal, native, free continuous scrolling.
 * - Robust inertial debounce prevents accidental double-skipping so every screen
 *   is clearly viewed.
 * - Scrolling up from top of El Stand smoothly returns to Beneficios -> Concepto -> Hero.
 */
export function useIntroScroll() {
  const isAnimatingRef = useRef(false);
  const cooldownUntilRef = useRef<number>(0);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run on desktop screens (>= 1024px) without coarse pointer
    if (typeof window === 'undefined') return;
    const isTouchOrMobile =
      window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches;
    if (isTouchOrMobile) {
      return;
    }

    const getElementTop = (id: string, offset = 0) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      return Math.max(0, rect.top + window.scrollY - offset);
    };

    const scrollToPosition = (targetY: number, duration = 400, callback?: () => void) => {
      const now = performance.now();
      if (isAnimatingRef.current || now < cooldownUntilRef.current) return;

      isAnimatingRef.current = true;
      const startY = window.scrollY;
      const change = targetY - startY;

      // If change is negligible, unlock immediately
      if (Math.abs(change) < 5) {
        isAnimatingRef.current = false;
        return;
      }

      const startTime = performance.now();
      // Premium cubic ease-out
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutCubic(progress);

        window.scrollTo(0, startY + change * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetY);
          isAnimatingRef.current = false;
          // Set cooldown to absorb trackpad inertial wheel events
          cooldownUntilRef.current = performance.now() + 500;
          callback?.();
        }
      };

      requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      if (typeof window === 'undefined' || window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const now = performance.now();
      const isCoolingDown = now < cooldownUntilRef.current;

      const currentY = window.scrollY;
      const conceptTop = getElementTop('concepto', 0);
      const benefitsTop = getElementTop('beneficios', 0);
      const productTop = getElementTop('producto', 68);

      // --- SECTION 4 AND BEYOND: El Stand and the rest of the web ---
      if (currentY >= productTop - 30) {
        // Scrolling up at the top edge of El Stand returns to Beneficios
        if (e.deltaY < -15 && currentY <= productTop + 15) {
          e.preventDefault();
          if (!isAnimatingRef.current && !isCoolingDown) {
            scrollToPosition(benefitsTop);
          }
          return;
        }

        if (isAnimatingRef.current) {
          e.preventDefault();
          return;
        }

        // 100% NATIVE, FREE NORMAL SCROLL BELOW STAND
        return;
      }

      // During animation or cooldown in the intro slides, absorb wheel events
      if (isAnimatingRef.current || isCoolingDown) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const threshold = 12; // Deliberate scroll intent required

      // --- SLIDE 1: Hero (Deron) ---
      if (currentY < conceptTop - 60) {
        if (delta > threshold) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
        return;
      }

      // --- SLIDE 2: Concepto (Un gesto físico) ---
      if (currentY >= conceptTop - 60 && currentY < benefitsTop - 60) {
        if (delta > threshold) {
          e.preventDefault();
          scrollToPosition(benefitsTop);
        } else if (delta < -threshold) {
          e.preventDefault();
          scrollToPosition(0);
        }
        return;
      }

      // --- SLIDE 3: Beneficios (Menos fricción. Más reseñas.) ---
      if (currentY >= benefitsTop - 60 && currentY < productTop - 30) {
        if (delta > threshold) {
          e.preventDefault();
          scrollToPosition(productTop);
        } else if (delta < -threshold) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (typeof window !== 'undefined' && window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      if (e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (typeof window !== 'undefined' && window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;
      if (touchStartYRef.current === null) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY; // positive = swipe up = scroll down
      const currentY = window.scrollY;

      const conceptTop = getElementTop('concepto', 0);
      const benefitsTop = getElementTop('beneficios', 0);
      const productTop = getElementTop('producto', 68);

      // Below Stand
      if (currentY >= productTop - 30) {
        if (deltaY < -20 && currentY <= productTop + 15) {
          if (!isAnimatingRef.current && performance.now() >= cooldownUntilRef.current) {
            e.preventDefault();
            scrollToPosition(benefitsTop);
          }
          return;
        }
        return;
      }

      if (isAnimatingRef.current || performance.now() < cooldownUntilRef.current) {
        e.preventDefault();
        return;
      }

      const swipeThreshold = 30;

      // In Hero
      if (currentY < conceptTop - 60) {
        if (deltaY > swipeThreshold) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
        return;
      }

      // In Concepto
      if (currentY >= conceptTop - 60 && currentY < benefitsTop - 60) {
        if (deltaY > swipeThreshold) {
          e.preventDefault();
          scrollToPosition(benefitsTop);
        } else if (deltaY < -swipeThreshold) {
          e.preventDefault();
          scrollToPosition(0);
        }
        return;
      }

      // In Beneficios
      if (currentY >= benefitsTop - 60 && currentY < productTop - 30) {
        if (deltaY > swipeThreshold) {
          e.preventDefault();
          scrollToPosition(productTop);
        } else if (deltaY < -swipeThreshold) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (typeof window !== 'undefined' && window.innerWidth < 900) return;
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
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          if (currentY >= benefitsTop - 60) {
            scrollToPosition(conceptTop);
          } else if (currentY >= conceptTop - 60) {
            scrollToPosition(0);
          }
        }
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
