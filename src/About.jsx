import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

/* ── Tool sticker icons ── */
import toolFigma    from './assets/about/figma.png';
import toolMiro     from './assets/about/Miro-Icon.png';
import toolNotion   from './assets/about/notion-logo-no-background.png';
import toolGithub   from './assets/about/GitHub.png';
import toolVue      from './assets/about/Vue.js.png';
import toolSlack    from './assets/about/Slack.svg';
import toolR        from './assets/about/R.png';
import toolClaude   from './assets/about/claudecode-color.png';
import toolPython   from './assets/about/python.png';
import toolWebflow  from './assets/about/webflow.png';
import toolAdobe    from './assets/about/adobe.png';
import toolDatabase from './assets/about/database.png';
import toolPhysics  from './assets/about/physics.png';
import toolPicture  from './assets/about/picture.png';
import cartImg      from './assets/about/shopping cart.png';

/* ── Polaroid photos ── */
import p01 from './assets/about/01956daf-188e-495e-bc0f-251abf3b48ed.JPG';
import p02 from './assets/about/IMG_1779.JPG';
import p03 from './assets/about/IMG_1864.JPG';
import p04 from './assets/about/IMG_2558.jpeg';
import p05 from './assets/about/IMG_2649.jpeg';
import p06 from './assets/about/IMG_2801.jpeg';
import p07 from './assets/about/IMG_3139.jpeg';
import p08 from './assets/about/IMG_3556.JPG';
import p09 from './assets/about/IMG_3849.jpeg';
import p10 from './assets/about/IMG_3954.jpeg';
import p11 from './assets/about/e5c101e2-8a86-45d0-af32-bba8116e26dd.JPG';
import p12 from './assets/about/f0d1cf2b-9103-47e6-ae39-8120952977a6.JPG';
import p13 from './assets/about/IMG_0918.jpeg';
import p14 from './assets/about/IMG_1935.JPG';
import p15 from './assets/about/IMG_3968.jpeg';

/* ── "How I Got Here" journey (left-aligned, same format for every entry) ── */
const journey = [
  { date: 'May 2020', place: 'Chennai, India',               type: 'location', body: `After wrapping up high school with a suitcase full of dreams in hand, I made one of the biggest and best decisions of my life, to pursue my bachelor's degree in the United States. Little did I know, this was just the start of an incredible adventure.` },
  { date: 'Aug 2020', place: 'UMass Amherst',                type: 'location', body: `I stepped foot on the beautiful UMass Amherst campus! I was really interested in both tech and psychology. So I decided to double major in Computer Science and Psychology. Why choose one when you can have both, right?`,
    hl: ['double major in Computer Science and Psychology'] },
  { date: 'Aug 2022', place: 'Resident Assistant',           type: 'job',      body: `Two years into my bachelor's journey, I got my first job, yayyy! Being an RA taught me how to create community, from late night on-call duties to organizing fun floor events, I learned how to understand people's needs and build environments where everyone could thrive.`,
    hl: ['how to create community', "understand people's needs"] },
  { date: 'Feb 2024', place: 'Head Teaching Assistant',      type: 'job',      body: `I had taken up a volunteer position and realized I love helping others learn, so I applied to be a Teaching Assistant. A semester later I was promoted to Head TA, leading a team of TAs and supporting 80+ students in the course "Human-Computer Interaction."`,
    hl: ['I love helping others learn', 'leading a team of TAs and supporting 80+ students'] },
  { date: 'Aug 2024', place: 'Cornell University, Ithaca',   type: 'location', body: `Bachelor's degree in hand, I wasn't ready to stop learning. Enter Cornell University and a masters in Information Science with a UX focus! I absolutely loved choosing a field that combined my passion for psychology and my skills in technology. I learned about user research methods, design, prototyping and strategy. Plus the campus is absolutely stunning, I loved being so close to nature, the hiking trails, the waterfalls it was all so breathtaking.`,
    hl: ['loved choosing a field that combined my passion for psychology and my skills in technology', 'I loved being so close to nature, the hiking trails, the waterfalls'] },
  { date: 'Aug 2024', place: 'Graduate Teaching Specialist', type: 'job',      body: `With some experience in teaching from my time at UMass and my passion to help others learn I accepted a role as a Graduate Teaching Specialist, supporting 200+ students across design and programming coursework. I graded assignments and mentored students as they explored design practices.`,
    hl: ['supporting 200+ students across design and programming coursework'] },
  { date: 'Jan 2025', place: 'UX Designer + Researcher',     type: 'job',      body: `I lived my capstone dream, getting to work directly with Google Cloud. Our team was mentored by some of the nicest folks at Google Cloud, and I got to learn so much about enterprise design and research.`,
    hl: ['getting to work directly with Google Cloud'] },
  { date: 'May 2025', place: 'Research Assistant',  type: 'job',      body: `During summer 2025 I worked as an RA with a PhD student, Tuan-He-Lee, diving into co-design research with remote mental health support systems.\n\n And then starting Nov 2025 I have been working with a PhD student, Jeremy Faulk, creating and testing interactive systems that connect physiological sensors (e.g., heart rate monitors) with real-time lighting and sound applications (e.g., Philips Hue, Ableton Live), while logging and processing experimental data using Python.`,
    hl: ['diving into co-design research with remote mental health support systems', 'creating and testing interactive systems', 'experimental data using Python'] },
  { date: 'Present',  place: 'Looking for full-time roles', type: 'job', bodyPlace: true, badge: 'Open to relocation nationwide' },
];

/* splits body text and wraps matched phrases in a highlight span */
function renderWithHighlights(body, hl = []) {
  if (!hl.length) return body;
  const escaped = hl.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = body.split(re);
  return parts.map((part, i) =>
    hl.includes(part)
      ? <span key={i} className="journey-hl">{part}</span>
      : part
  );
}

/* ── Polaroids (landscape:true = wider frame, 16:9-ish photo area) ── */
const polaroids = [
  { img: p01, rotate: '-4deg', landscape: false }, // 1 portrait
  { img: p02, rotate: '3deg',  landscape: false }, // 2 portrait
  { img: p03, rotate: '-2deg', landscape: true  }, // 3 landscape
  { img: p04, rotate: '5deg',  landscape: false }, // 4 portrait
  { img: p05, rotate: '-3deg', landscape: false }, // 5 portrait
  { img: p06, rotate: '2deg',  landscape: false }, // 6 portrait
  { img: p07, rotate: '-5deg', landscape: false }, // 7 portrait
  { img: p10, rotate: '3deg',  landscape: false }, // 8 portrait (was 10)
  { img: p08, rotate: '4deg',  landscape: true  }, // 9 landscape (was 8)
  { img: p09, rotate: '-2deg', landscape: false }, // 10 portrait (was 9)
  { img: p11, rotate: '-4deg', landscape: true  }, // 11 landscape
  { img: p12, rotate: '2deg',  landscape: true  }, // 12 landscape
  { img: p13, rotate: '-3deg', landscape: false }, // 13 portrait
  { img: p14, rotate: '4deg',  landscape: false }, // 14 portrait
  { img: p15, rotate: '-2deg', landscape: false }, // 15 portrait
];

/* ── Tool stickers — real icons + placeholders for the rest ── */
const toolStickers = [
  { src: toolFigma,    alt: 'Figma',       rotate: '-8deg', x: '15%', y: '5%',  size: 52 },
  { src: toolMiro,     alt: 'Miro',        rotate: '6deg',  x: '62%', y: '3%',  size: 46 },
  { src: toolNotion,   alt: 'Notion',      rotate: '-4deg', x: '38%', y: '14%', size: 44 },
  { src: toolGithub,   alt: 'GitHub',      rotate: '9deg',  x: '72%', y: '18%', size: 48 },
  { src: toolVue,      alt: 'Vue',         rotate: '-6deg', x: '20%', y: '28%', size: 42 },
  { src: toolSlack,    alt: 'Slack',       rotate: '5deg',  x: '55%', y: '32%', size: 44 },
  { src: toolR,        alt: 'R',           rotate: '-9deg', x: '10%', y: '48%', size: 40 },
  { src: toolClaude,   alt: 'Claude Code', rotate: '7deg',  x: '68%', y: '46%', size: 46 },
  { src: toolPython,   alt: 'Python',      rotate: '-5deg', x: '30%', y: '56%', size: 42 },
  { src: toolWebflow,  alt: 'Webflow',     rotate: '8deg',  x: '75%', y: '62%', size: 40 },
  { src: toolAdobe,    alt: 'Adobe CC',    rotate: '-7deg', x: '18%', y: '70%', size: 42 },
  { src: toolDatabase, alt: 'SQL',         rotate: '6deg',  x: '58%', y: '74%', size: 40 },
  { src: toolPhysics,  alt: 'React JS',    rotate: '-4deg', x: '40%', y: '84%', size: 38 },
  { src: toolPicture,  alt: 'Framer',      rotate: '5deg',  x: '45%', y: '38%', size: 38 },
];

function About() {
  const revealRefs = useRef([]);
  const stripRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  // On hover the row becomes a scrollable, left-aligned strip with 50vw side spacers.
  // Pin the viewport to center for a moment so the cards fan out "in place" — then the
  // user is free to scroll. On unhover, pure CSS flexbox re-centers the 3 cards, so
  // there's no scroll position to shift around.
  const pinCenter = () => {
    const el = stripRef.current;
    if (!el) return;
    const start = performance.now();
    const tick = (now) => {
      el.scrollLeft = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
      if (now - start < 700) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // ── Drag the tool stickers in & out of the cart ──
  const [stickerOffsets, setStickerOffsets] = useState(() => toolStickers.map(() => ({ x: 0, y: 0 })));
  const dragInfo = useRef(null);

  const onStickerDown = (e, i) => {
    e.preventDefault();
    const el = e.currentTarget;
    try { el.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    el.classList.add('dragging');
    dragInfo.current = {
      el, i,
      startX: e.clientX, startY: e.clientY,
      baseX: stickerOffsets[i].x, baseY: stickerOffsets[i].y,
      x: stickerOffsets[i].x, y: stickerOffsets[i].y,
    };
  };
  const onStickerMove = (e) => {
    const d = dragInfo.current;
    if (!d) return;
    d.x = d.baseX + (e.clientX - d.startX);
    d.y = d.baseY + (e.clientY - d.startY);
    d.el.style.transform = `translate(${d.x}px, ${d.y}px) scale(1.12)`;
  };
  const onStickerUp = (e) => {
    const d = dragInfo.current;
    if (!d) return;
    d.el.classList.remove('dragging');
    try { d.el.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
    const { x, y, i } = d;
    dragInfo.current = null;
    setStickerOffsets((prev) => prev.map((o, idx) => (idx === i ? { x, y } : o)));
  };
  // Tidy up: spring every sticker back to its original scattered spot
  const tidyUp = () => setStickerOffsets(toolStickers.map(() => ({ x: 0, y: 0 })));
  const stickersMoved = stickerOffsets.some((o) => o.x !== 0 || o.y !== 0);

  return (
    <div className="about-page">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fjalla+One&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }

        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        .about-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background:
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
        }

        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); filter: blur(0px); }
          25% { transform: translateY(-30px) rotate(2deg) scale(1.05); filter: blur(1px); }
          50% { transform: translateY(-20px) rotate(-1deg) scale(0.95); filter: blur(0.5px); }
          75% { transform: translateY(-40px) rotate(1deg) scale(1.02); filter: blur(1.5px); }
        }

        .content-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

        /* About section wash */
        .about-section {
          padding: 5rem 0 4rem;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(20px);
          position: relative;
        }

        /* Reveal animation */
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.in { opacity: 1; transform: none; }

        /* Section title — "How I Got Here": Fjalla One, pink */
        .section-title {
          font-family: 'Fjalla One', sans-serif;
          font-weight: 400;
          color: var(--rose-pompadour);
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          letter-spacing: 0.01em;
          margin-bottom: 3rem;
        }

        /* Journey — left-aligned timeline */
        .journey { position: relative; padding-left: 2.5rem; margin-bottom: 1rem; }
        .journey-entry {
          position: relative;
          margin-bottom: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }
        .journey-entry:last-child { margin-bottom: 0; }
        /* dot */
        .journey-entry::before {
          content: '';
          position: absolute;
          left: calc(-2.5rem + 1px);
          top: 8px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--rose-pompadour);
          border: 4px solid #fff;
          box-shadow: 0 2px 8px rgba(226, 115, 150, 0.4);
          z-index: 2;
        }
        /* connecting line to the next dot — hidden on the last entry */
        .journey-entry::after {
          content: '';
          position: absolute;
          left: calc(-2.5rem + 7px);
          top: 24px;
          bottom: calc(-2.75rem - 8px);
          width: 3px;
          background: linear-gradient(to bottom, var(--rose-pompadour), var(--amaranth-pink));
          border-radius: 2px;
          z-index: 1;
        }
        .journey-entry:last-child::after { display: none; }
        .journey-text { max-width: 640px; }
        .journey-heading {
          font-family: 'Fjalla One', sans-serif;
          font-size: 1.35rem;
          color: #1a1a1a;
          letter-spacing: 0.01em;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .journey-place { display: inline-flex; align-items: center; gap: 0.3rem; }
        .journey-place svg { color: var(--rose-pompadour); flex-shrink: 0; }
        .journey-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.78;
          max-width: 640px;
          white-space: pre-wrap;
        }
        .journey-hl {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        .journey-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 115, 150, 0.25);
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
        }

        /* pulsing dot for the Present entry's badge */
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          position: relative;
        }
        .badge-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.4);
          animation: badgePulse 1.8s ease-out infinite;
        }
        @keyframes badgePulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          70%  { transform: scale(2);   opacity: 0; }
          100% { transform: scale(2);   opacity: 0; }
        }

        /* dot on the timeline for the Present entry — pink, static */
        .journey-entry--present::before {
          background: var(--rose-pompadour) !important;
        }

        /* ── Tool basket widget ── */
        .journey-basket-wrap {
          flex-shrink: 0;
          width: 360px;
          position: relative;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          padding-bottom: 0.5rem;
        }
        /* sticker zone spans the full height above the cart */
        .sticker-zone {
          position: absolute;
          top: 0; left: 0; right: 0;
          bottom: 155px;
          pointer-events: none;
        }
        /* draggable wrapper — handles position + drag transform */
        .tool-sticker-drag {
          position: absolute;
          pointer-events: auto;
          cursor: grab;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 3;
        }
        .tool-sticker-drag:hover { z-index: 50; }
        .tool-sticker-drag.dragging {
          cursor: grabbing;
          transition: none;
          z-index: 200;
        }
        .tool-sticker {
          position: relative;
          display: flex; flex-direction: column; align-items: center;
          filter: drop-shadow(0 4px 8px rgba(226, 115, 150, 0.3));
          animation: stickerDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .tool-sticker-drag.dragging .tool-sticker::after { opacity: 0 !important; }
        @keyframes stickerDrop {
          from { opacity: 0; transform: translateY(-28px) scale(0.65) rotate(var(--rot,0deg)); }
          to   { opacity: 1; transform: translateY(0)      scale(1)    rotate(var(--rot,0deg)); }
        }
        .tool-sticker img {
          object-fit: contain;
          border-radius: 8px;
          display: block;
          transition: transform 0.2s ease;
        }
        .tool-sticker:hover img { transform: scale(1.18); }

        /* CSS tooltip */
        .tool-sticker {
          --tooltip-text: '';
        }
        .tool-sticker::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(45, 45, 45, 0.88);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          white-space: nowrap;
          padding: 4px 9px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.18s ease;
          z-index: 20;
        }
        .tool-sticker:hover::after { opacity: 1; }

        /* basket image container — right-aligned to match cart position */
        .basket-svg-wrap {
          position: relative; z-index: 2;
          width: 320px;
          filter: drop-shadow(0 10px 24px rgba(226, 115, 150, 0.3));
          margin-top: 160px;
        }
        .basket-svg-wrap img { width: 100%; height: auto; display: block; }

        /* Cart status — hint and tidy button cross-fade in the same spot */
        .cart-status {
          align-self: center;
          margin-top: 1rem;
          z-index: 5;
          display: grid;
          place-items: center;
          min-height: 2.4rem;
        }
        .cart-status > * { grid-area: 1 / 1; }

        .cart-hint {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-style: italic;
          color: var(--deep-rose);
          text-align: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .cart-hint.show { opacity: 1; }

        .tidy-btn {
          border: none;
          background: var(--rose-pompadour);
          color: #fff;
          font-family: 'Fjalla One', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(226, 115, 150, 0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.2s ease, background 0.2s ease;
        }
        .tidy-btn.show {
          opacity: 1;
          pointer-events: auto;
        }
        .tidy-btn:hover {
          background: var(--deep-rose);
          transform: translateY(-2px) scale(1.05);
        }


        /* Polaroid strip — horizontal scroll, no visible scrollbar */
        .polaroid-hint {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-style: italic;
          color: var(--deep-rose);
          margin: 0.25rem 0 1.5rem;
        }

        /* ── Polaroid strip ──
           Mobile (base): simple horizontal scroll.
           Desktop (>=769px): full-bleed, overlapped+centered by default,
           fans apart on hover and overflows to the window edges. */
        .polaroids-strip-wrap {
          margin: 4rem -2rem 0.75rem;
          overflow-x: auto;
          padding: 1.5rem 2rem 2.5rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .polaroids-strip-wrap::-webkit-scrollbar { display: none; }
        .polaroids {
          display: flex;
          flex-wrap: nowrap;
          gap: 1.25rem;
          width: max-content;
          padding: 0.5rem 0;
          align-items: center;
        }
        /* Pink polaroid frame — portrait */
        .polaroid {
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          width: 190px;
          background: #f2a8bf;
          border-radius: 4px;
          box-shadow: 0 8px 24px rgba(226, 115, 150, 0.3);
          padding: 10px 10px 20px;
          display: flex; flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        /* Pink polaroid frame — landscape */
        .polaroid.landscape {
          width: 270px;
        }
        .polaroid:hover {
          transform: rotate(0deg) scale(1.06) translateY(-10px) !important;
          z-index: 30;
        }
        /* Portrait photo: square crop */
        .polaroid .pol-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 2px;
          display: block;
        }
        /* Landscape photo: wider crop */
        .polaroid.landscape .pol-img {
          aspect-ratio: 4 / 3;
        }

        /* Desktop: 3 polaroids by default, fan out + scroll on hover */
        @media (min-width: 769px) {
          .polaroids-strip-wrap {
            width: 100vw;
            margin: 4rem 0 0.75rem;
            margin-left: calc(50% - 50vw);
            overflow: visible;
            padding: 1.5rem 0 2.5rem;
          }
          .polaroids {
            display: flex;
            width: 100%;
            align-items: center;
            /* DEFAULT: flexbox centers the 3 cards — no scroll, so nothing can shift */
            justify-content: center;
            gap: 0;
            overflow-x: hidden;
            overflow-y: hidden;
            scrollbar-width: none;
            padding: 1.5rem 0;
          }
          .polaroids::-webkit-scrollbar { display: none; }
          /* side spacers collapse by default, expand on hover so the row is scrollable */
          .polaroids::before,
          .polaroids::after { content: ''; flex: 0 0 0; }
          /* every polaroid collapsed by default... */
          .polaroid {
            max-width: 0;
            opacity: 0;
            margin-left: 0;
            padding: 0;
            overflow: hidden;
            transition: max-width 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        margin-left 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        padding 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        opacity 0.45s ease,
                        transform 0.35s ease, box-shadow 0.35s ease;
          }
          /* ...except the middle three, shown by default */
          .polaroid:nth-child(6),
          .polaroid:nth-child(7),
          .polaroid:nth-child(8) {
            max-width: 320px;
            opacity: 1;
            margin-left: 1.75rem;
            padding: 10px 10px 20px;
          }
          .polaroid:nth-child(6) { margin-left: 0; }

          /* HOVER: switch to a left-aligned scrollable row + full-width spacers */
          .polaroids-strip-wrap:hover .polaroids {
            justify-content: flex-start;
            overflow-x: auto;
          }
          .polaroids-strip-wrap:hover .polaroids::before,
          .polaroids-strip-wrap:hover .polaroids::after { flex: 0 0 50vw; }
          .polaroids-strip-wrap:hover .polaroid {
            max-width: 320px;
            opacity: 1;
            margin-left: 1.75rem;
            padding: 10px 10px 20px;
          }
          .polaroids-strip-wrap:hover .polaroid:nth-child(6) { margin-left: 1.75rem; }
        }

        /* Footer */
        /* Responsive */
        @media (max-width: 768px) {
          .about-section { padding: 3rem 0; }
          .journey { padding-left: 2rem; }
          .journey-entry::before { left: calc(-2rem + 1px); }
          .journey-basket-wrap { display: none; }
        }
        @media (max-width: 480px) {
          .polaroid { width: 150px; }
          .polaroid.landscape { width: 220px; }
          .polaroids-strip-wrap { margin: 3rem -1rem 2.5rem; padding: 1rem 1rem 2rem; }
        }
        `}
      </style>

      {/* HEADER */}
      <SiteHeader />

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="content-container">

          {/* How I Got Here */}
          <h1 className="section-title reveal" ref={addReveal}>How I Got Here</h1>

          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
            <div className="journey" style={{ flex: 1 }}>
              {journey.map((item, i) => (
                <div className={`journey-entry reveal${item.date === 'Present' ? ' journey-entry--present' : ''}`} ref={addReveal} key={i}>
                  <div className="journey-text">
                    <h3 className="journey-heading">
                      {item.date}{!item.bodyPlace && ','}
                      {!item.bodyPlace && (
                        <span className="journey-place">
                          {item.type === 'location' ? <MapPin size={16} /> : <Briefcase size={16} />}
                          {item.place}
                        </span>
                      )}
                    </h3>
                    {item.bodyPlace && <p className="journey-body">{item.place}</p>}
                    {item.body && <p className="journey-body">{renderWithHighlights(item.body, item.hl)}</p>}
                    {item.badge && (
                      <span className="journey-badge">
                        <span className="badge-dot" />
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Basket + stickers widget */}
            <div className="journey-basket-wrap reveal" ref={addReveal}>
              {/* stickers scattered above the basket */}
              <div className="sticker-zone">
                {toolStickers.map((s, i) => (
                  <div
                    key={i}
                    className="tool-sticker-drag"
                    style={{
                      left: s.x, top: s.y,
                      transform: `translate(${stickerOffsets[i].x}px, ${stickerOffsets[i].y}px)`,
                    }}
                    onPointerDown={(e) => onStickerDown(e, i)}
                    onPointerMove={onStickerMove}
                    onPointerUp={onStickerUp}
                    onPointerCancel={onStickerUp}
                  >
                    <div
                      className="tool-sticker"
                      data-tooltip={s.alt}
                      style={{ '--rot': s.rotate, animationDelay: `${i * 0.07}s` }}
                    >
                      <img src={s.src} alt={s.alt} draggable={false} style={{ width: s.size, height: s.size }} />
                    </div>
                  </div>
                ))}
              </div>
              {/* Pink 3D shopping cart */}
              <div className="basket-svg-wrap">
                <img src={cartImg} alt="Skills shopping cart" style={{width:'100%',height:'auto',display:'block'}}/>
              </div>
              <div className="cart-status">
                <p className={`cart-hint${stickersMoved ? '' : ' show'}`}>
                  Try adding the tools into the tool cart
                </p>
                <button
                  className={`tidy-btn${stickersMoved ? ' show' : ''}`}
                  onClick={tidyUp}
                >
                  ✦ Reorient
                </button>
              </div>
            </div>
          </div>

          {/* Polaroid photo strip */}
          <div
            className="polaroids-strip-wrap reveal"
            ref={addReveal}
            onMouseEnter={pinCenter}
          >
            <div className="polaroids" ref={stripRef}>
              {polaroids.map((p, i) => (
                <div
                  className={`polaroid${p.landscape ? ' landscape' : ''}`}
                  style={{ transform: `rotate(${p.rotate})` }}
                  key={i}
                >
                  <img src={p.img} alt={`Memory ${i + 1}`} className="pol-img" />
                </div>
              ))}
            </div>
          </div>
          <p className="polaroid-hint reveal" ref={addReveal}>hover to see more memories</p>

        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}

export default About;
