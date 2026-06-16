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

const SCROLL_PER_CARD = 1000; // px of page scroll each card's slide-in occupies

/* ── Pain-point messages: static iMessage-style chat ───────────────
   TEMPORARY. Renders the cards as a plain, static chat — bubbles
   alternating left/right — so the section ships without the janky
   scroll-scrubbed interaction. The interactive version is preserved
   below as `CardStackScroll`; point the pages back at it when it's
   ready. `cards` is { num, msg }[]. */
export function CardStack({ cards }) {
  return (
    <div className="pain-chat" role="list">
      {cards.map((card, i) => (
        <div key={card.num} role="listitem" className={`pain-chat-row ${i % 2 === 0 ? 'is-left' : 'is-right'}`}>
          <span className="pain-chat-avatar" aria-hidden="true">{card.num}</span>
          <p className="pain-chat-bubble">{card.msg}</p>
        </div>
      ))}
    </div>
  );
}

/* Scroll-scrubbed stacking cards — preserved for later, NOT currently used.

   The card frame is pinned at the centre of the viewport with position:sticky
   while a tall track scrolls past it; each card slides in as you scroll deeper.
   Progress is read straight from the *scroll position* — not from wheel/touch
   deltas — so it behaves identically for a trackpad, a mouse wheel, the arrow
   keys, Page Up/Down and the scrollbar. A short CSS transition on each card
   (see caseStudy.css) smooths the discrete jumps a mouse wheel or keypress
   produces, so every input glides like a trackpad. `cards` is { num, msg }[]. */
export function CardStackScroll({ cards }) {
  const [progress, setProgress] = React.useState(0); // continuous 0..N
  const [frameH, setFrameH]     = React.useState(null); // frame hugs the cards
  const trackRef = React.useRef(null);

  // size the frame to the tallest card plus the stack's downward spread,
  // so there's no dead space below the stack (card height varies per page)
  React.useEffect(() => {
    const measure = () => {
      const els = trackRef.current?.querySelectorAll('.pain-stack-card');
      if (!els?.length) return;
      const tallest = Math.max(...[...els].map((el) => el.offsetHeight));
      setFrameH(tallest + DEPTH[DEPTH.length - 1].y + 6);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [cards]);

  React.useEffect(() => {
    // Map scroll position → progress (0..N). Driven purely by where the page is
    // scrolled, so trackpad, mouse wheel, arrow keys and the scrollbar all feed
    // the exact same value; the CSS transition on the cards does the smoothing.
    // The lock point is derived from the track's own height (frame + scrubLen,
    // set inline), so it's self-consistent without a separate frame measurement.
    const scrubLen = cards.length * SCROLL_PER_CARD;
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const H = el.offsetHeight;
      if (H <= scrubLen) return;                              // tall height not applied yet
      const top0 = (window.innerHeight - H + scrubLen) / 2;   // y where the frame is centred
      const raw  = (top0 - el.getBoundingClientRect().top) / SCROLL_PER_CARD;
      setProgress(Math.max(0, Math.min(cards.length, raw)));
    };

    update(); // settle correctly on mount / when already scrolled into view
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
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

  // track height = frame + the scroll distance the cards scrub across
  const trackStyle  = frameH ? { height: `${frameH + cards.length * SCROLL_PER_CARD}px` } : undefined;
  // pin the frame so its centre lands at the viewport centre
  const stickyStyle = frameH ? { top: `calc(50vh - ${frameH / 2}px)` } : undefined;

  return (
    <div ref={trackRef} className="pain-stack-track" style={trackStyle}>
      <div className="pain-stack-sticky" style={stickyStyle}>
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
