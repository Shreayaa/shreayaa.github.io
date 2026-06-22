import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import shreayaaPhoto from './assets/general/heroImage.png';
import vennImage from './assets/general/Venn.png';
import trophy from './assets/general/trophy.png';
import gillyPhoto from './assets/general/Gilly.jpeg';
import jeremyPhoto from './assets/general/Jeremy.jpeg';
import hrishikaPhoto from './assets/general/Hrishika.jpeg';
import About from './About';
import Work from './work';
import { projects } from './projects';
import GoogleCloudCaseStudy from './google';
import IthacaSoap from './ithacaSoap';
import RoutesToRoots from './routestoroots';
import IName from './iName';
import EcoCartCaseStudy from './ecoCart';
import RShinyCaseStudy from './rShiny';
import Garden from './Garden';

// designPrinciples removed — carousel was removed per request

// Shared heart silhouette (24×24) reused by the envelope seal and the stamps.
const HEART_PATH =
  "M12 21 C12 21 3 14.5 3 8.5 C3 5.4 5.4 3 8.5 3 C10.3 3 11.6 4 12 4.8 C12.4 4 13.7 3 15.5 3 C18.6 3 21 5.4 21 8.5 C21 14.5 12 21 12 21 Z";

/* Closed envelope (pink outline + heart seal). The flap lifts open via CSS when
   the parent button has `.is-open` / on hover. Pure SVG so it scales crisply. */
function EnvelopeArt() {
  return (
    <span className="env__art" aria-hidden="true">
      <svg className="env__base" viewBox="0 0 240 168" preserveAspectRatio="none" fill="none">
        <rect x="5" y="5" width="230" height="158" rx="14"
              fill="rgba(255,255,255,0.5)" stroke="var(--env-stroke)" strokeWidth="3.5" />
        <path d="M6 159 L120 102 L234 159" stroke="var(--env-stroke)"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="env__flap" viewBox="0 0 240 168" preserveAspectRatio="none" fill="none">
        <path d="M6 9 L120 102 L234 9 Z" fill="rgba(255,255,255,0.72)"
              stroke="var(--env-stroke)" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
      <svg className="env__heart" viewBox="0 0 24 24" fill="none">
        <path d={HEART_PATH} fill="var(--env-heart)" />
      </svg>
    </span>
  );
}

/* How the postcard reveals when a letter is clicked: 'inline' expands it in
   place under the row; 'modal' opens it as a full-screen overlay. */
const POSTCARD_MODE = 'modal';

/* The opened air-mail postcard — shared by both reveal modes. */
function PostcardLetter({ testimonial, onClose }) {
  return (
    <div className="postcard">
      <button type="button" className="postcard__close" onClick={onClose} aria-label="Close letter">
        &times;
      </button>
      <div className="postcard__inner">
        <div className="postcard__content">
          <p className="testimonial-quote">{testimonial.quote}</p>
        </div>
        <div className="postcard__divider" />
        <div className="postcard__side">
          <img src={testimonial.photo} alt={testimonial.name} className="postcard__photo" />
          <span className="postcard__name">{testimonial.name}</span>
          {testimonial.role && <span className="postcard__role">{testimonial.role}</span>}
          {testimonial.note && <span className="postcard__note">{testimonial.note}</span>}
        </div>
      </div>
    </div>
  );
}


const SKILLS = [
  "Prototyping", "Wireframing", "Interaction Design", "Accessibility", "Python",
  "Javascript", "CSS", "HTML", "Figma", "Framer", "Webflow", "Sketch", "R Studio",
  "Problem Solving", "Leadership", "User Research", "Design Systems", "A/B Testing",
  "AI Workflows", "Claude Code", "Github Copilot",
];

/* Skills carousel: drifts on its own, pauses on hover/interaction, and can be driven
   by mouse wheel, trackpad, click-drag, arrow buttons, keyboard arrows, or touch.
   Uses a native overflow scroller (free touch + trackpad) with a rAF auto-drift on top
   and a duplicated list for a seamless infinite loop. */
function SkillsCarousel() {
  const trackRef = useRef(null);
  const hoverRef = useRef(false);
  const interactUntil = useRef(0);
  const manualVel = useRef(0);
  const setRef = useRef(0); // width of one copy of the list

  const bump = (ms = 1200) => { interactUntil.current = performance.now() + ms; };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const AUTO_SPEED = reduce ? 0 : 0.4;

    const measure = () => { setRef.current = el.scrollWidth / 3; };
    measure();
    el.scrollLeft = setRef.current; // rest in the middle copy so it loops both directions
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

    // Seamless wrap: 3 identical copies, kept within the middle one so a shift of one
    // copy-width is invisible — an infinite loop in both directions with no edge stop.
    const wrap = () => {
      const set = setRef.current;
      if (set <= 0) return;
      if (el.scrollLeft >= set * 2) el.scrollLeft -= set;
      else if (el.scrollLeft < set) el.scrollLeft += set;
    };

    let raf = 0;
    const tick = () => {
      const paused = hoverRef.current || performance.now() < interactUntil.current;
      let v = manualVel.current;
      if (!paused) v += AUTO_SPEED;
      if (v) el.scrollLeft += v;
      wrap();
      manualVel.current *= 0.9;
      if (Math.abs(manualVel.current) < 0.04) manualVel.current = 0;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Wheel / vertical trackpad → horizontal scrub.
    const onWheel = (e) => {
      bump();
      const d = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      el.scrollLeft += d;
      wrap();
      e.preventDefault();
    };

    // Mouse click-drag (touch keeps native scrolling).
    let dragging = false, startX = 0, startScroll = 0;
    const onPointerDown = (e) => {
      if (e.pointerType !== 'mouse') { bump(); return; }
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      try { el.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
      el.classList.add('is-grabbing');
      bump();
      e.preventDefault();
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
      wrap();
      bump();
    };
    const onPointerUp = (e) => {
      if (dragging) {
        dragging = false;
        try { el.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ }
        el.classList.remove('is-grabbing');
      }
      bump();
    };

    const onTouch = () => bump();

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('touchstart', onTouch, { passive: true });
    el.addEventListener('touchmove', onTouch, { passive: true });

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('touchstart', onTouch);
      el.removeEventListener('touchmove', onTouch);
      ro.disconnect();
    };
  }, []);

  const nudge = (dir) => { manualVel.current += dir * 22; bump(1400); };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { nudge(1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { nudge(-1); e.preventDefault(); }
  };

  const items = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section className="skills">
      <div
        className="skills-carousel"
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; }}
      >
        <button type="button" className="skills-arrow skills-arrow--left" onClick={() => nudge(-1)} aria-label="Scroll skills left">&lsaquo;</button>
        <div
          className="skills-track"
          ref={trackRef}
          tabIndex={0}
          role="group"
          aria-label="Skills — scroll, drag, or use the arrows"
          onKeyDown={onKeyDown}
        >
          {items.map((skill, idx) => (
            <span className="skill-chip" key={idx} aria-hidden={idx >= SKILLS.length ? 'true' : undefined}>{skill}</span>
          ))}
        </div>
        <button type="button" className="skills-arrow skills-arrow--right" onClick={() => nudge(1)} aria-label="Scroll skills right">&rsaquo;</button>
      </div>
    </section>
  );
}


const INTRO_LINE1 = "Hi, this is Shreayaa!";
const INTRO_LINE2 = "Welcome to my little corner of the internet 🩷";
const INTRO_L1 = [...INTRO_LINE1]; // split by code point so the emoji stays intact
const INTRO_L2 = [...INTRO_LINE2];
const INTRO_TOTAL = INTRO_L1.length + INTRO_L2.length;

/* Opening overlay: types the two-line greeting in Cedarville cursive, then lifts up to
   reveal the site. Shows once per browser session (first arrival) — not on in-app
   navigation such as clicking the logo. Click to skip; skipped for reduced motion. */
function IntroOverlay() {
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [show, setShow] = useState(() => {
    if (prefersReduced) return false;
    try { return !sessionStorage.getItem('introSeen'); } catch (e) { return true; }
  });
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef([]);
  const finished = useRef(false);

  const later = (fn, ms) => { timers.current.push(setTimeout(fn, ms)); };
  const clearAll = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const dismiss = () => {
    if (finished.current) return;
    finished.current = true;
    clearAll();
    setLeaving(true);
    later(() => setShow(false), 900);
  };

  useEffect(() => {
    if (!show) return undefined;
    try { sessionStorage.setItem('introSeen', '1'); } catch (e) { /* ignore */ }
    document.body.style.overflow = 'hidden';
    let i = 0;
    const type = () => {
      i += 1;
      setCount(i);
      if (i < INTRO_TOTAL) later(type, 42);
      else later(dismiss, 950);
    };
    later(type, 400);
    return () => { clearAll(); document.body.style.overflow = ''; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!show) return null;

  const skip = () => { setCount(INTRO_TOTAL); dismiss(); };

  const typed1 = INTRO_L1.slice(0, Math.min(count, INTRO_L1.length)).join('');
  const typed2 = count > INTRO_L1.length ? INTRO_L2.slice(0, count - INTRO_L1.length).join('') : '';
  const caretOnLine1 = count < INTRO_L1.length;

  return (
    <div
      className={`intro-overlay${leaving ? ' is-leaving' : ''}`}
      onClick={skip}
      role="presentation"
      aria-hidden="true"
    >
      <p className="intro-text">
        <span className="intro-line1">
          {typed1}
          {caretOnLine1 && <span className="intro-caret" />}
        </span>
        <span className="intro-line2">
          {typed2}
          {!caretOnLine1 && <span className="intro-caret" />}
        </span>
      </p>
    </div>
  );
}


function HomePage() {
  
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
const words = React.useMemo(() => ["designer.", "researcher.", "strategist."], []);




  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[typewriterIndex];
      if (!isDeleting) {
        setTypewriterText(currentWord.substring(0, typewriterText.length + 1));
        if (typewriterText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypewriterText(currentWord.substring(0, typewriterText.length - 1));
        if (typewriterText === '') {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 80);
    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, typewriterIndex, words]);

  // Project rows animation (moved from Work.jsx)
  const projectRefs = useRef([]);

  // Testimonial scroll reveal
  const testimonialRef = useRef(null);
  const [testimonialInView, setTestimonialInView] = useState(false);

  // Which testimonial "letter" is currently open (by id), if any.
  const [openId, setOpenId] = useState(null);
  const lastOpenRef = useRef(null);

  // Modal mode: close on Escape and lock body scroll while a letter is open.
  useEffect(() => {
    if (POSTCARD_MODE !== 'modal' || !openId) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpenId(null); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openId]);

  useEffect(() => {
    const observers = [];
    projectRefs.current.forEach((project, index) => {
      if (project) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('animate-in');
              }
            });
          },
          { threshold: 0.1, rootMargin: '-100px' }
        );
        observer.observe(project);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const el = testimonialRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-80px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll to #work when HomePage mounts or when the hash changes
  useEffect(() => {
    // Only scroll when a click set a session flag. This prevents automatic
    // scrolling on refresh while preserving deep-link behavior when clicked.
    const scrollFromSession = () => {
      const target = sessionStorage.getItem('scrollTo');
      if (target) {
        const el = document.getElementById(target);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        }
        sessionStorage.removeItem('scrollTo');
      }
    };

    scrollFromSession();
    window.addEventListener('storage', scrollFromSession);
    return () => window.removeEventListener('storage', scrollFromSession);
  }, []);

  const handleProjectClick = (caseStudyUrl) => {
    window.location.href = caseStudyUrl;
  };

  // Testimonials shown as air-mail letters. Add more objects here as they come in.
  const testimonials = [
    {
      id: 'gilly',
      name: 'Gilly Leshed',
      role: 'Teaching Professor, Cornell University',
      photo: gillyPhoto,
      note: 'Words from one of the most talented professors I learnt from',
      quote: (
        <>
          &ldquo;I have witnessed her journey and growth toward becoming an exceptional
          UX professional. Her projects were exemplary &mdash; literally &mdash;{' '}
          <span className="tq-highlight">I have been using her projects as examples in the following semesters</span>. Her designs
          were grounded in systematic, in-depth user research that followed ethical
          principles. Shreayaa is a remarkably effective and{' '}
          <span className="tq-highlight">proactive collaborator</span>. She was the
          de-facto driver behind the group projects, with{' '}
          <span className="tq-highlight">high work ethic and endless positive can-do attitude</span>. I have no doubt that Shreayaa will make a
          strong, long-lasting impact in any organization that she will join.&rdquo;
        </>
      ),
    },
    {
      id: 'jeremy',
      name: 'Jeremy D. Faulk',
      role: 'Design Researcher, Cornell University',
      photo: jeremyPhoto,
      note: 'One of the most creative person I have collaborated with',
      quote: (
        <>
          &ldquo;Shreayaa has met every milestone of our human-computer-interaction
          project. Her competence as a{' '}
          <span className="tq-highlight">software-to-hardware engineer</span> has
          enabled our interactive gallery installation to feature heart rate monitors
          that capture scientific data while also triggering automated lighting and
          sound effects. She is{' '}
          <span className="tq-highlight">kind, skillful, and a good communicator</span>.
          I would work with Shreayaa on every HCI project if I could.&rdquo;
        </>
      ),
    },
    {
      id: 'hrishika',
      name: 'Hrishika Jotwani',
      photo: hrishikaPhoto,
      note: 'I have the best peers to learn from and grow together',
      quote: (
        <>
          &ldquo;Shreayaa and I worked on many group projects together, and{' '}
          <span className="tq-highlight">she was a delight to work with, as a collaborator</span>. We spent hours
          and hours brainstorming ideas, researching techniques and implementation
          methods, discussing new strategies and{' '}
          <span className="tq-highlight">learning a lot from each other</span>. I truly miss work with her, and
          I&rsquo;m sure she has a lot to contribute to every team she works with!!&rdquo;
        </>
      ),
    },
  ];

  if (openId) lastOpenRef.current = openId;
  const activeTestimonial = testimonials.find(
    (t) => t.id === (openId || lastOpenRef.current)
  );

  return (
    <div className="app">
      <IntroOverlay />
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        @font-face {
          font-family: 'Lovely Coffee';
          src: url('/fonts/LovelyCoffee.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

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

        /* ── Opening intro overlay ─────────────────────────────────── */
        .intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 35%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          cursor: pointer;
          transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);
          will-change: transform;
        }
        .intro-overlay.is-leaving { transform: translateY(-105%); }

        .intro-text {
          font-family: 'Cedarville Cursive', cursive;
          font-size: clamp(1.5rem, 3.8vw, 2.4rem);
          line-height: 1.4;
          color: var(--text-primary);
          max-width: min(95vw, 1200px);
          margin: 0;
        }

        .intro-line1 {
          display: block;
          min-height: 1.15em;
          font-family: 'Lovely Coffee', 'Petit Formal Script', cursive;
          font-size: clamp(2rem, 8vw, 5.2rem);
          line-height: 1.15;
          color: var(--rose-pompadour);
          -webkit-text-stroke: 0.5px var(--rose-pompadour);
          margin-bottom: 0.05em;
        }

        .intro-line2 {
          display: block;
          min-height: 1.2em;
          color: var(--text-primary);
        }

        .intro-caret {
          display: inline-block;
          width: 3px;
          height: 0.9em;
          margin-left: 0.06em;
          vertical-align: -0.08em;
          border-radius: 2px;
          background: currentColor;
          animation: introBlink 0.9s steps(1, end) infinite;
        }
        @keyframes introBlink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }

        .dm-sans {
          font-family: 'DM Sans', sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        .content-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
        }

        .app::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 120%;
          height: 120%;
          background: 
            radial-gradient(ellipse 800px 600px at 10% 40%, rgba(234, 154, 178, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 600px 400px at 90% 70%, rgba(179, 222, 226, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 400px 300px at 50% 20%, rgba(239, 207, 227, 0.1) 0%, transparent 60%);
          pointer-events: none;
          z-index: -1;
          animation: waveMove 25s ease-in-out infinite reverse;
        }

        @keyframes waveFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            filter: blur(0px);
          }
          25% { 
            transform: translateY(-30px) rotate(2deg) scale(1.05);
            filter: blur(1px);
          }
          50% { 
            transform: translateY(-20px) rotate(-1deg) scale(0.95);
            filter: blur(0.5px);
          }
          75% { 
            transform: translateY(-40px) rotate(1deg) scale(1.02);
            filter: blur(1.5px);
          }
        }

        @keyframes waveMove {
          0%, 100% { 
            transform: translateX(-10%) translateY(-5%) rotate(0deg);
          }
          25% { 
            transform: translateX(5%) translateY(-10%) rotate(1deg);
          }
          50% { 
            transform: translateX(-5%) translateY(5%) rotate(-0.5deg);
          }
          75% { 
            transform: translateX(3%) translateY(-3%) rotate(0.5deg);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero {
          padding: 6rem 0;
          min-height: 85vh;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          width: 100%;
        }

        .hero-text {
          flex: 1;
          max-width: 650px;
          animation: slideInLeft 1s ease-out;
          position: relative;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-text h1 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        /* keeps "Hi, I'm Shreayaa." on a single line at all viewport sizes */
        .greeting-line {
          white-space: nowrap;
          display: block;
        }

        .typewriter {
          color: var(--rose-pompadour);
          position: relative;
          display: block;
          margin-top: -0.4em;
        }

        .hero-text p {
          font-size: 1.1rem; /* ~17.6px */
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          max-width: 550px;
          line-height: 1.6;
          font-weight: 400;
          font-family: 'DM Sans', sans-serif;
        }

        /* "Open to full-time roles" availability pill (matches the About page badge) */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          position: relative;
        }
        .hero-badge-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.4);
          animation: heroBadgePulse 1.8s ease-out infinite;
        }
        @keyframes heroBadgePulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          70%  { transform: scale(2);   opacity: 0; }
          100% { transform: scale(2);   opacity: 0; }
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Roboto', sans-serif;
        }

        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .btn:hover::before {
          transform: translateX(100%);
        }

        .btn-primary {
          background: var(--rose-pompadour);
          color: white;
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 35px rgba(226, 115, 150, 0.4);
          background: var(--deep-rose);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          border: 2px solid var(--rose-pompadour);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: translateY(-4px) scale(1.02);
        }

        .hero-image {
          flex-shrink: 0;
          animation: slideInRight 1s ease-out;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          margin-top: 0;
          /* Pull image up to align with text baseline */
          margin-bottom: 2.5rem;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-photo {
          /* enable 3D space for a subtle tilt effect */
          perspective: 1200px;
        }

        .hero-photo img {
          width: clamp(350px, 35vw, 480px);
          height: auto;
          object-fit: contain;
          object-position: center bottom;
          transition: transform 450ms cubic-bezier(0.2, 0.9, 0.2, 1), box-shadow 350ms ease;
          transform-origin: center center;
          will-change: transform;
          display: block;
        }

        /* Zoom on hover/focus */
        .hero-photo img:hover,
        .hero-photo img:focus {
          transform: scale(1.08);
          box-shadow: 0 20px 50px rgba(45,45,45,0.14);
        }

        .skills {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          padding: 1.2rem 0; /* reduced height */
          position: relative;
          border-top: 1px solid rgba(226, 115, 150, 0.1);
          border-bottom: 1px solid rgba(226, 115, 150, 0.1);
        }

        .skills-carousel {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-track {
          display: flex;
          gap: 3rem;
          align-items: center;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0.7rem 2.9rem;
          touch-action: pan-x;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          user-select: none;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%);
        }
        .skills-track::-webkit-scrollbar { display: none; }
        .skills-track.is-grabbing { cursor: grabbing; }
        .skills-track:focus-visible { outline: 2px solid var(--rose-pompadour); outline-offset: 3px; border-radius: 10px; }

        .skill-chip {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-secondary);
          padding: 0.4rem 1.1rem;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 9999px;
          border: 1px solid rgba(226, 115, 150, 0.12);
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 6px 18px rgba(226, 115, 150, 0.09);
          white-space: nowrap;
          line-height: 1;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .skill-chip:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(226, 115, 150, 0.14);
        }

        .skills-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(226, 115, 150, 0.18);
          background: rgba(255, 255, 255, 0.92);
          color: var(--deep-rose);
          font-size: 1.5rem;
          line-height: 1;
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(226, 115, 150, 0.18);
          transition: transform 0.18s ease, background 0.18s ease;
        }
        .skills-arrow:hover { background: #fff; transform: translateY(-50%) scale(1.12); }
        .skills-arrow:active { transform: translateY(-50%) scale(0.95); }
        .skills-arrow--left { left: 0.35rem; }
        .skills-arrow--right { right: 0.35rem; }

        .design-section {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          position: relative;
          padding: 7rem 0 0;
        }

        .design-content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5rem;
        }

        .design-left {
          flex: 0 0 520px;
          max-width: 520px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .design-left h2 {
          font-size: clamp(2.2rem, 3vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .design-left p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 400;
          margin-bottom: 1.5rem;
          font-family: 'DM Sans', sans-serif;
        }

        .soft-green-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        .design-gallery {
          flex: 1;
          max-width: 600px;
          height: 480px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 0;
        }

        .gallery-container {
          position: relative;
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(8px); /* nudge down a bit */
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 0;
          box-shadow: none;
          background: transparent;
        }

        .gallery-card {
          position: absolute;
          width: 450px;
          height: 300px;
          background: #b3b7ee;
          color: #2d2d2d;
          backdrop-filter: blur(25px) saturate(180%);
          border-radius: 20px;
          border: 1px solid #b3b7ee;
          box-shadow: 
            0 15px 40px rgba(179, 183, 238, 0.12),
            0 5px 20px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          opacity: 0;
          transform: translateX(100px) scale(0.8);
        }

        .gallery-card.active {
          opacity: 1;
          transform: translateX(0) scale(1);
          z-index: 3;
        }

        .gallery-card.prev {
          opacity: 0.6;
          transform: translateX(-80px) scale(0.9);
          z-index: 2;
        }

        .gallery-card.next {
          opacity: 0.6;
          transform: translateX(80px) scale(0.9);
          z-index: 2;
        }

        .gallery-card:hover.active {
          transform: translateX(0) scale(1.03);
          box-shadow: 
            0 25px 60px rgba(226, 115, 150, 0.18),
            0 8px 30px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .card-content {
          padding: 2rem 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .card-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          color: #2d2d2d;
          font-family: 'Roboto', sans-serif;
          line-height: 1.3;
        }

        .card-content p {
          font-size: 1.25rem;
          color: #2d2d2d;
          font-family: 'Roboto', sans-serif;
          line-height: 1.7;
          font-weight: 600;
        }

        .gallery-nav {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 2rem;
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid var(--rose-pompadour);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--rose-pompadour);
        }

        .nav-btn:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.3);
        }

        .gallery-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(226, 115, 150, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--rose-pompadour);
          transform: scale(1.3);
        }

        .dot:hover {
          background: var(--rose-pompadour);
          transform: scale(1.1);
        }

        /* Work Section (copied from Work.jsx) */
        .work-section {
          padding: 4rem 0;
          position: relative;
        }

        .project-row {
          display: flex;
          align-items: center;
          gap: 4rem;
          margin-bottom: 6rem;
          min-height: 500px;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .work-section .project-row:last-child {
          margin-bottom: 0;
        }

        .project-row.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .project-row.reverse {
          flex-direction: row-reverse;
        }

        .project-row:hover {
          transform: translateY(-5px) scale(1.01);
        }

        .mockup-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          position: relative;
        }

        .mockup-image-wrapper {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-row:hover .mockup-image-wrapper {
          transform: translateY(-8px) scale(1.02);
        }

        .mockup-image-wrapper.laptop .mockup-image {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .mockup-image-wrapper.mobile .mockup-image {
          height: 90%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
        }

        .mockup-image {
          image-rendering: high-quality;
          transition: all 0.6s ease;
          border-radius: 12px;
        }

        .mockup-placeholder {
          color: #999;
          font-size: 1.2rem;
          text-align: center;
          padding: 3rem;
          border: 2px dashed rgba(153, 153, 153, 0.3);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          width: 80%;
          height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .content-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 0;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          line-height: 1.2;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-title {
          transform: translateX(0);
          opacity: 1;
        }

        .project-row:hover .project-title {
          color: var(--rose-pompadour);
          transform: translateX(5px);
        }

        .project-description {
          font-size: 1.1rem; /* match hero ~17.6px */
          color: var(--text-secondary);
          line-height: 1.6;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-description {
          transform: translateX(0);
          opacity: 1;
        }

        .tool-logos-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .tool-logo {
          width: 48px !important;
          height: 48px !important;
          object-fit: contain;
          padding: 0;
          display: inline-block;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
        }

        .project-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: var(--text-secondary);
          background: rgba(226, 115, 150, 0.08);
          border: 1px solid rgba(226, 115, 150, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .project-row:hover .project-tag {
          background: rgba(226, 115, 150, 0.15);
          border-color: rgba(226, 115, 150, 0.4);
        }

        .award-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .award-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .award-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #4a4a4a;
          line-height: 1.5;
          font-weight: 400;
        }

        /* Testimonial Section (under Routes to Roots) */
        .testimonial-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 5rem 0 7rem;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .testimonial-section.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Heading ─────────────────────────────────────────────── */
        .testimonial-heading {
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          line-height: 1.2;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .testimonial-hint {
          text-align: center;
          font-family: 'Cedarville Cursive', cursive;
          font-size: 1.2rem;
          color: var(--deep-rose);
          margin-bottom: 3rem;
        }

        /* ── Envelope row ────────────────────────────────────────── */
        .envelope-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: clamp(1.5rem, 6vw, 4.5rem);
          padding-top: 2.5rem; /* headroom for the flap as it lifts open */
        }

        .env {
          --env-stroke: #e7a3c0;
          --env-heart: #e2503a;
          appearance: none;
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.9rem;
        }

        .env__art {
          position: relative;
          width: clamp(156px, 19vw, 190px);
          aspect-ratio: 240 / 168;
          perspective: 750px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 12px 18px rgba(197, 85, 119, 0.2));
        }
        .env:hover .env__art,
        .env:focus-visible .env__art { transform: translateY(-7px) rotate(-1deg); }

        .env__base,
        .env__flap { position: absolute; inset: 0; width: 100%; height: 100%; }
        .env__base { z-index: 1; }
        .env__flap {
          z-index: 3;
          transform-origin: 50% 5.5%;
          transform: rotateX(0deg);
          transition: transform 0.55s cubic-bezier(0.6, 0.04, 0.3, 1);
          backface-visibility: visible;
        }
        .env:hover .env__flap,
        .env:focus-visible .env__flap { transform: rotateX(26deg); }

        .env__heart {
          position: absolute;
          left: 50%;
          top: 60.5%;
          width: 14%;
          transform: translate(-50%, -50%);
          z-index: 4;
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .env.is-open .env__flap { transform: rotateX(174deg); z-index: 2; }
        .env.is-open .env__heart { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
        .env.is-open .env__art { transform: translateY(-3px); }

        .env__caption {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }
        .env:hover .env__caption,
        .env.is-open .env__caption { color: var(--deep-rose); }

        /* ── Inline air-mail postcard reveal ─────────────────────── */
        .postcard-wrap {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          margin-top: 0;
          transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease, margin-top 0.5s ease;
        }
        .postcard-wrap.open { grid-template-rows: 1fr; opacity: 1; margin-top: 3.25rem; }
        .postcard-min { overflow: hidden; min-height: 0; }

        .postcard {
          position: relative;
          background: repeating-linear-gradient(45deg,
            #e23b3b 0 13px, #f4a6c0 13px 26px, #ffffff 26px 39px);
          padding: 14px;
          border-radius: 18px;
          box-shadow: 0 26px 55px rgba(45, 45, 45, 0.22);
          transform: translateY(14px);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .postcard-wrap.open .postcard { transform: translateY(0); }

        /* Modal variant: full-screen overlay (rendered via portal to <body>) */
        .postcard-modal {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 3rem);
          background: rgba(58, 34, 44, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          animation: postcardFade 0.28s ease;
        }
        @keyframes postcardFade { from { opacity: 0; } to { opacity: 1; } }

        .postcard-modal__card {
          width: min(940px, 100%);
          max-height: 90vh;
          overflow: auto;
          animation: postcardPop 0.42s cubic-bezier(0.34, 1.4, 0.6, 1);
        }
        @keyframes postcardPop {
          from { opacity: 0; transform: translateY(22px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .postcard-modal__card .postcard { transform: none; }

        .postcard__close {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 6;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.92);
          color: #c5375a;
          font-size: 1.4rem;
          line-height: 1;
          display: grid;
          place-items: center;
          box-shadow: 0 3px 9px rgba(0, 0, 0, 0.18);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .postcard__close:hover { transform: scale(1.12); background: #fff; }

        .postcard__inner {
          position: relative;
          background: #fffdf7;
          border-radius: 9px;
          display: flex;
          gap: 2.5rem;
          padding: 2.6rem 2.8rem;
          min-height: 290px;
        }

        .postcard__content { flex: 1.4; display: flex; align-items: center; }
        .postcard__content .testimonial-quote { margin: 0; font-size: 1.05rem; line-height: 1.75; }

        .postcard__divider { width: 1px; background: rgba(45, 45, 45, 0.16); align-self: stretch; }

        .postcard__side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.3rem;
        }

        .postcard__photo {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
          box-shadow: 0 8px 20px rgba(197, 85, 119, 0.22);
          margin-bottom: 0.4rem;
        }
        .postcard__name {
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
          font-weight: 700;
          font-size: 1.12rem;
          color: var(--text-primary);
        }
        .postcard__role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .postcard__note {
          margin-top: 0.7rem;
          max-width: 210px;
          font-family: 'Cedarville Cursive', cursive;
          font-size: 1.1rem;
          line-height: 1.25;
          color: var(--deep-rose);
          transform: rotate(-2deg);
        }

        .testimonial-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-primary);
        }

        .tq-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }



        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            gap: 3rem;
            text-align: center;
          }

          .hero-text {
            max-width: 100%;
          }

          /* clamp floor of 350px overflows narrow screens — scale the photo to the viewport */
          .hero-photo img {
            width: min(340px, 72vw);
          }

          .design-content {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }

          .design-left {
            text-align: center;
            max-width: 100%;
          }

          .design-gallery {
            width: 100%;
            max-width: 100%;
            height: 400px;
          }

          .gallery-container {
            height: 320px;
          }

          .gallery-card {
            width: 90%;
            min-width: 280px;
            height: 260px;
          }

          /* Project rows: stack into a single column so the mockup sits above the
             text instead of being squeezed side-by-side on narrow screens */
          .project-row,
          .project-row.reverse {
            flex-direction: column;
            gap: 1.75rem;
            min-height: auto;
            margin-bottom: 3.5rem;
            text-align: center;
          }

          .mockup-side {
            width: 100%;
            min-height: auto;
          }

          .mockup-image-wrapper {
            height: auto;
            max-height: 300px;
          }

          .mockup-image-wrapper.mobile .mockup-image {
            height: auto;
            width: auto;
            max-height: 300px;
            max-width: 78%;
          }

          .content-side {
            width: 100%;
            padding: 0;
          }

          .project-title {
            font-size: 1.85rem;
            margin-bottom: 1rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .project-tags,
          .tool-logos-row,
          .award-badge {
            justify-content: center;
          }

          .postcard__inner {
            flex-direction: column;
            gap: 1.75rem;
            padding: 2.25rem 1.5rem 2.5rem;
          }

          .postcard__divider { width: auto; height: 1px; }

          /* stacked envelopes need extra row spacing so an opened flap clears the caption above */
          .envelope-row { row-gap: 5.5rem; }
          .env__art { width: clamp(150px, 52vw, 178px); }

        }

        @media (max-width: 480px) {
          .design-gallery {
            height: 360px;
          }

          .gallery-container {
            height: 280px;
          }

          .gallery-card {
            width: 95%;
            min-width: 260px;
            height: 240px;
          }

          .skill-chip {
            font-size: 0.9rem;
            padding: 0.4rem 1rem;
          }

          .skills-track { gap: 1.5rem; padding-left: 2.5rem; padding-right: 2.5rem; }

          .skills-arrow { width: 32px; height: 32px; font-size: 1.25rem; }

          .project-title { font-size: 1.6rem; }
          .mockup-image-wrapper { max-height: 260px; }
          .mockup-image-wrapper.mobile .mockup-image { max-height: 260px; }

          .design-content {
            gap: 2rem;
          }

          .card-content {
            padding: 1.5rem 2rem;
          }

          .card-content h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .card-content p {
            font-size: 0.9rem;
            line-height: 1.5;
          }

        }
        `}
      </style>

      {/* HEADER */}
      <SiteHeader />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="content-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span className="greeting-line">Hi, I'm Shreayaa.</span>
                <br />
                <span className="typewriter">
                  I'm a {typewriterText}
                  <span style={{animation: 'blink 1s infinite'}}>|</span>
                </span>
              </h1>
              <p className="dm-sans">
                I love to design with empathy and purpose. I'm passionate about making complex things feel simple and smooth.
              </p>
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                Open to full-time roles
              </span>
            </div>
            <div className="hero-image">
              <div className="hero-photo">
                <img src={shreayaaPhoto} alt="Shreayaa Srinivasan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED SKILLS STRIP */}
      <SkillsCarousel />

      {/* IMPROVED DESIGN PRINCIPLES SECTION */}
      <section className="design-section">
        <div className="content-container">
          <div className="design-content">
            <div className="design-left">
              <h2>Who am I as a designer?</h2>
              <p>
                I come from a background in Information Science, Computer Science and Psychology which puts me in this unique position where I <span className="soft-green-highlight">understand the technical capabilities, the human side, and the UX side of things.</span> So I'm keen on designing interactions and products that people actually find delightful. 
              </p>
              <p>
                These experiences make me very <span className="soft-green-highlight">comfortable working closely with researchers, engineers, and stakeholders</span> and understand the feasibility and implications of my design decisions.
              </p>
            </div>
            
            <div className="design-gallery">
              <div className="gallery-container">
                <div className="gallery-image">
                  <img src={vennImage} alt="Venn diagram: Computer Science, User Experience, Psychology — Human-Computer Interaction Designer" />
                </div>
              </div>
            </div>

          {/* close design-content then insert projects so they share background */}
          </div>
          <section id="work" className="work-section">
            {projects.filter(p => ![4,5,6].includes(p.id)).map((project, index) => (
                <div
                  key={project.id}
                  id={project.id === 1 ? 'google-cloud' : undefined}
                  ref={el => projectRefs.current[index] = el}
                  className={`project-row ${index % 2 === 1 ? 'reverse' : ''}`}
                  onClick={() => handleProjectClick(project.caseStudyUrl)}
                >
                  <div className="mockup-side">
                    <div className={`mockup-image-wrapper ${project.imageType}`}>
                      {project.image ? (
                        <img src={project.image} alt={`${project.title} mockup`} className="mockup-image" />
                      ) : (
                        <div className="mockup-placeholder">
                          <div>Project Mockup Image</div>
                          <small>({project.imageType} mockup)</small>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="content-side">
                    <h2 className="project-title">{project.title}</h2>
                    {project.tags && (
                      <div className="project-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    <p className="project-description">{project.description}</p>
                    {project.toolLogos && (
                      <div className="tool-logos-row">
                        {project.toolLogos.map((logoSrc, idx) => (
                          <img key={idx} src={logoSrc} alt={`tool-${idx}`} className="tool-logo" />
                        ))}
                      </div>
                    )}
                    {project.award && (
                      <div className="award-badge">
                        <img src={trophy} alt="Award" className="award-icon" />
                        <p className="award-text">{project.award}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </section>

          {/* WORDS THAT MOTIVATE ME — testimonials as openable air-mail letters */}
          <section
            ref={testimonialRef}
            className={`testimonial-section${testimonialInView ? ' in-view' : ''}`}
            aria-label="Testimonials"
          >
            <h2 className="testimonial-heading">Words that motivate me to keep going</h2>
            <p className="testimonial-hint">tap a letter to open it</p>

            <div className="envelope-row">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`env${openId === t.id ? ' is-open' : ''}`}
                  aria-expanded={openId === t.id}
                  aria-label={`${openId === t.id ? 'Close' : 'Open'} the letter from ${t.name}`}
                  onClick={() => setOpenId(openId === t.id ? null : t.id)}
                >
                  <EnvelopeArt />
                  <span className="env__caption">from {t.name}</span>
                </button>
              ))}
            </div>

            {POSTCARD_MODE === 'inline' ? (
              <div className={`postcard-wrap${openId ? ' open' : ''}`}>
                <div className="postcard-min">
                  {activeTestimonial && (
                    <PostcardLetter testimonial={activeTestimonial} onClose={() => setOpenId(null)} />
                  )}
                </div>
              </div>
            ) : (
              openId && activeTestimonial && createPortal(
                <div
                  className="postcard-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-label={`Letter from ${activeTestimonial.name}`}
                  onClick={() => setOpenId(null)}
                >
                  <div className="postcard-modal__card" onClick={(e) => e.stopPropagation()}>
                    <PostcardLetter testimonial={activeTestimonial} onClose={() => setOpenId(null)} />
                  </div>
                </div>,
                document.body
              )
            )}
          </section>
        </div>
      </section>


       {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} /> 
        <Route path="/google-cloud-case-study" element={<GoogleCloudCaseStudy />} /> 
        <Route path="/ithaca-soap-case-study" element={<IthacaSoap />} />
        <Route path="/routes-to-roots-case-study" element={<RoutesToRoots />} />
        <Route path="/ecocart-case-study" element={<EcoCartCaseStudy />} />
        <Route path="/iname-case-study" element={<IName />} />
        <Route path="/rshiny-case-study" element={<RShinyCaseStudy />} />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </Router>
  );
}

export default App;