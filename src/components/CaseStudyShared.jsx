import React, { useState, useEffect, useRef } from 'react';
import './caseStudy.css';

/* ── Animated count-up box ─────────────────────────────────────── */
export function CountBox({ end, suffix = '', label, inView }) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const n   = parseInt(end, 10);
    const dur = 3200;
    const t0  = performance.now();
    const tick = (t) => {
      const p     = Math.min((t - t0) / dur, 1);
      const eased = 1 - (1 - p) ** 3;
      setVal(Math.floor(eased * n));
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setVal(n);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [inView, end]);

  return (
    <div className="impact-item">
      {/* box: number only — label lives outside */}
      <div className={`impact-box${inView ? ' impact-visible' : ''}`}>
        <span className="impact-num">{val}{suffix}</span>
      </div>
      {/* label below the box */}
      <p className="impact-lbl">{label}</p>
    </div>
  );
}

/* ── Scroll-scrubbed stacking iMessage cards ───────────────────── */

// How far each card peeks below the one on top of it
const DEPTH = [
  { y: 0,  scale: 1,     rotate:  0   },
  { y: 16, scale: 0.982, rotate:  0.4 },
  { y: 28, scale: 0.965, rotate: -0.6 },
  { y: 37, scale: 0.950, rotate:  0.8 },
];

const SCROLL_PER_CARD = 700; // px of wheel/touch travel each card's slide-in occupies
const MAX_TICK        = 120; // cap per-event delta so trackpad momentum can't blast through
const LOCK_BAND       = 260; // how close to the lock spot input capture engages

/* Scroll-locked stack: the section is only as tall as the card frame.
   When it reaches the middle of the viewport with cards still left to
   animate (in the direction being scrolled), wheel/touch input is
   captured and scrubbed into card progress instead of page scroll.
   Once the stack is done (either end), input passes through and the
   page scrolls on normally. `cards` is an array of { num, msg }. */
export function CardStack({ cards }) {
  const [progress, setProgress] = React.useState(0); // continuous 0..N
  const [frameH, setFrameH] = React.useState(null);  // frame hugs the cards
  const progressRef = React.useRef(0);
  const touchYRef = React.useRef(0);
  const wrapRef = React.useRef(null);

  // size the frame to the tallest card plus the stack's downward spread,
  // so there's no dead space below the stack (card height varies per page)
  React.useEffect(() => {
    const measure = () => {
      const els = wrapRef.current?.querySelectorAll('.pain-stack-card');
      if (!els?.length) return;
      const tallest = Math.max(...[...els].map((el) => el.offsetHeight));
      setFrameH(tallest + DEPTH[DEPTH.length - 1].y + 6);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [cards]);

  React.useEffect(() => {
    const setP = (v) => {
      const clamped = Math.max(0, Math.min(cards.length, v));
      progressRef.current = clamped;
      setProgress(clamped);
    };

    /* Decide whether this scroll delta should be captured: only near
       the lock spot (frame vertically centred in the viewport), and
       only with cards still to play in that direction. Returns the
       offset to the lock spot so the frame can be nudged exactly
       on-centre when capture engages. */
    const claim = (deltaY) => {
      const el = wrapRef.current;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const lock = (window.innerHeight - r.height) / 2;
      const p = progressRef.current;
      const ok = deltaY > 0
        ? r.top <= lock + 1 && r.top > lock - LOCK_BAND && p < cards.length
        : r.top >= lock - 1 && r.top < lock + LOCK_BAND && p > 0;
      return ok ? r.top - lock : null;
    };

    const tick = (dy) => Math.sign(dy) * Math.min(Math.abs(dy), MAX_TICK);

    const capture = (e, dy) => {
      const off = claim(dy);
      if (off === null) return false;
      e.preventDefault();
      if (Math.abs(off) > 1) window.scrollBy(0, off); // settle exactly on-centre
      setP(progressRef.current + tick(dy) / SCROLL_PER_CARD);
      return true;
    };

    const onWheel = (e) => capture(e, e.deltaY);

    const onTouchStart = (e) => {
      touchYRef.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      const dy = touchYRef.current - e.touches[0].clientY;
      if (capture(e, dy)) touchYRef.current = e.touches[0].clientY;
    };

    /* Fallback for scrollbar drags / keyboard paging, which bypass
       wheel events: once the section is carried well past the lock
       band without being scrubbed, settle the cards to the matching
       end so they're never stranded. */
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const lock = (window.innerHeight - r.height) / 2;
      if (r.top < lock - LOCK_BAND) setP(cards.length);
      else if (r.top > lock + LOCK_BAND) setP(0);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [cards.length]);

  const easeOut = (t) => 1 - (1 - t) ** 3;
  const lerp = (a, b, t) => a + (b - a) * t;
  // continuous depth: interpolate between DEPTH rows so cards sink smoothly
  const depthAt = (d) => {
    const k  = Math.min(Math.floor(d), DEPTH.length - 1);
    const k2 = Math.min(k + 1, DEPTH.length - 1);
    const f  = Math.min(d - k, 1);
    return {
      y:      lerp(DEPTH[k].y,      DEPTH[k2].y,      f),
      scale:  lerp(DEPTH[k].scale,  DEPTH[k2].scale,  f),
      rotate: lerp(DEPTH[k].rotate, DEPTH[k2].rotate, f),
    };
  };

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <div className="pain-stack-sticky">
        <div className="pain-stack-outer" style={frameH ? { height: `${frameH}px` } : undefined}>
          {cards.map((card, i) => {
            // t: this card's own slide-in progress (0→1), scrubbed by scroll
            const t = Math.max(0, Math.min(1, progress - i));
            // d: how far the cards after it have pushed it down the stack
            const d = Math.max(0, Math.min(DEPTH.length - 1, progress - i - 1));
            const { y, scale, rotate } = depthAt(d);
            const slide = (1 - easeOut(t)) * 115;          // vw still off-centre
            const dir   = i % 2 === 0 ? -1 : 1;
            const tf = `translateX(calc(-50% + ${(dir * slide).toFixed(2)}vw)) translateY(${y.toFixed(1)}px) scale(${scale.toFixed(3)}) rotate(${rotate.toFixed(2)}deg)`;

            return (
              <div
                key={card.num}
                className="pain-stack-card"
                style={{ opacity: t === 0 ? 0 : Math.min(1, t * 2), transform: tf, zIndex: 10 + i }}
              >
                <span className="psc-num">{card.num}</span>
                <div className="psc-bubble">{card.msg}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Road connector between process steps ─────────────────────── */
export function RoadConnector({ flip = false }) {
  // Curvy S-shaped road winding between the alternating steps
  const d = flip
    ? 'M 255,5 C 255,60 40,20 40,75'
    : 'M 45,5 C 45,60 260,20 260,75';
  return (
    <div className="road-connector" aria-hidden="true">
      <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* road body */}
        <path d={d} stroke="rgba(30,30,30,0.85)" strokeWidth="28" strokeLinecap="round"/>
        {/* edge lines */}
        <path d={d} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        {/* center lane dashes */}
        <path d={d} stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeDasharray="12,9"/>
        {/* little pink car driving down the road (top-down view) */}
        <g>
          <rect x="-9" y="-5.5" width="18" height="11" rx="3.5" fill="#e27396" stroke="white" strokeWidth="1"/>
          <rect x="-3" y="-3.5" width="6" height="7" rx="1.5" fill="#fbd9e3"/>
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" path={d}/>
        </g>
        {/* second car, offset so they're spread out */}
        <g>
          <rect x="-8" y="-5" width="16" height="10" rx="3.5" fill="#74b5c6" stroke="white" strokeWidth="1"/>
          <rect x="-2.5" y="-3" width="5" height="6" rx="1.5" fill="#d8eef3"/>
          <animateMotion dur="12s" begin="-6s" repeatCount="indefinite" rotate="auto" path={d}/>
        </g>
      </svg>
    </div>
  );
}
