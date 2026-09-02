import { useEffect, useRef } from 'react';

/**
 * Direct scroll hook:
 * - First 2 scroll gestures are direct:
 *     Hero -> Concepto -> El Stand (Producto)
 * - From El Stand onwards: 100% normal, standard, free scrolling down
 *   all the way to the bottom.
 * - Scrolling up from the top of El Stand smoothly returns to Concepto,
 *   and from Concepto returns to Hero.
 */
export function useIntroScroll() {
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    // Completely disable on touch devices or screens under 1024px to guarantee native 60fps mobile scroll
    if (typeof window === 'undefined') return;
    const isTouchOrMobile = window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches;
    if (isTouchOrMobile) {
      return;
    }

    const getElementTop = (id: string, offset = 0) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      return Math.max(0, rect.top + window.scrollY - offset);
    };

    const scrollToPosition = (targetY: number, duration = 140, callback?: () => void) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const startY = window.scrollY;
      const change = targetY - startY;

      // If change is negligible, unlock immediately
      if (Math.abs(change) < 5) {
        isAnimatingRef.current = false;
        return;
      }

      const startTime = performance.now();
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
          // Very minimal cooldown (15ms) so reaction to next scroll is instant
          setTimeout(() => {
            isAnimatingRef.current = false;
            callback?.();
          }, 15);
        }
      };

      requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if mobile/tablet (< 900px) or menu/modal is open
      if (typeof window !== 'undefined' && window.innerWidth < 900) return;
      if (document.body.style.overflow === 'hidden') return;

      // Don't intercept if ctrl/cmd zoom
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const currentY = window.scrollY;
      const conceptTop = getElementTop('concepto', 0);
      const productTop = getElementTop('producto', 68);

      // SECTION 3 AND BELOW: El Stand and the rest of the page
      // From El Stand onwards: 100% normal, native, continuous scroll down and up
      if (currentY >= productTop - 30) {
        // If user is right at the top boundary of El Stand and scrolls UP
        if (e.deltaY < -2 && currentY <= productTop + 10) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            scrollToPosition(conceptTop);
          }
          return;
        }

        // If currently animating into Stand, prevent conflict
        if (isAnimatingRef.current) {
          e.preventDefault();
          return;
        }

        // 100% NATIVE, FREE NORMAL SCROLL
        return;
      }

      // If currently animating between sections, prevent duplicate triggers
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      // SECTION 1: Hero (Top of page)
      if (currentY < conceptTop - 60) {
        if (e.deltaY > 1.5) {
          // 1st direct scroll: Hero -> Concepto (immediate reaction)
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
        return;
      }

      // SECTION 2: Concepto (Middle section)
      if (currentY >= conceptTop - 60 && currentY < productTop - 30) {
        if (e.deltaY > 1.5) {
          // 2nd direct scroll: Concepto -> El Stand (Producto)
          e.preventDefault();
          scrollToPosition(productTop);
        } else if (e.deltaY < -1.5) {
          // Scroll up: Concepto -> Hero
          e.preventDefault();
          scrollToPosition(0);
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
      const productTop = getElementTop('producto', 68);

      // At or below El Stand: normal free touch scroll
      if (currentY >= productTop - 30) {
        if (deltaY < -8 && currentY <= productTop + 10) {
          if (!isAnimatingRef.current) {
            e.preventDefault();
            scrollToPosition(conceptTop);
          }
          return;
        }

        if (isAnimatingRef.current) {
          e.preventDefault();
          return;
        }

        return;
      }

      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      // In Hero
      if (currentY < conceptTop - 60) {
        if (deltaY > 6) {
          e.preventDefault();
          scrollToPosition(conceptTop);
        }
        return;
      }

      // In Concepto
      if (currentY >= conceptTop - 60 && currentY < productTop - 30) {
        if (deltaY > 6) {
          e.preventDefault();
          scrollToPosition(productTop);
        } else if (deltaY < -6) {
          e.preventDefault();
          scrollToPosition(0);
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
      const productTop = getElementTop('producto', 68);

      if (currentY < productTop - 30) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          if (currentY < conceptTop - 60) {
            e.preventDefault();
            scrollToPosition(conceptTop);
          } else {
            e.preventDefault();
            scrollToPosition(productTop);
          }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          if (currentY >= conceptTop - 60) {
            e.preventDefault();
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
