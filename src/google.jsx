import React, { useState, useEffect, useRef } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { CountBox, CardStack, RoadConnector } from './components/CaseStudyShared';
import ithacaSoapMockup from './assets/ithaca-soap/ithaca-soap-mockup.png';
import routesMockup from './assets/routes-to-roots/routes.png';
import heroImg     from './assets/google-cloud/capstone-mockup.png';
import matrix      from './assets/google-cloud/ImpactFeas.png';
import dp1         from './assets/google-cloud/designPrinciple1.png';
import dp2         from './assets/google-cloud/designPrinciple2.png';
import dp3         from './assets/google-cloud/designPrinciple3.png';
import pic1 from './assets/google-cloud/pic1.png';
import pic2 from './assets/google-cloud/pic2.png';
import pic3 from './assets/google-cloud/pic3.png';
import pic4 from './assets/google-cloud/pic4.png';
import pic5 from './assets/google-cloud/pic5.png';
import mov1 from './assets/google-cloud/mov1.gif';
import mov2 from './assets/google-cloud/mov2.gif';
import designerLogo from './assets/google-cloud/designer.png';
import researcherLogo from './assets/google-cloud/userresearcher.png';
import productManagerLogo from './assets/google-cloud/productmanager.png';
import gcLogo      from './assets/tools/google-cloud-1.svg';
import geminiLogo  from './assets/tools/Google_Gemini_logo.svg.png';
import colabLogo   from './assets/tools/colab.svg';
import figmaLogo   from './assets/tools/figma.png';
import slackLogo   from './assets/tools/Slack.svg';
import notionLogo  from './assets/tools/notion-logo-no-background.png';
import pythonLogo  from './assets/tools/python-logo-only.png';
import dialogflowLogo from './assets/tools/Dialogflow CX.png';
import visionAiLogo from './assets/tools/Vertex AI.png';

/* ── Stacking iMessage Pain Cards ──────────────────────────────── */
const PAIN_CARDS = [
  { num: '01', label: 'Navigation', msg: 'Overwhelming navigation and amount of content'          },
  { num: '02', label: 'Search',     msg: 'Irrelevant search results and poor query matching'       },
  { num: '03', label: 'No Path',    msg: 'Lack of clear path to finding answers to a question'          },
  { num: '04', label: 'Guidance',   msg: 'No step-by-step guidance for non-technical users'        },
];

/* ── Hand-drawn squiggly arrow pointing from text to image ─────── */
function SquigglyArrow({ direction = 'left' }) {
  return (
    <div className={`fd-arrow fd-arrow-${direction}`} aria-hidden="true">
      <svg viewBox="0 0 96 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 88 10 C 68 30, 58 2, 44 16 C 34 26, 26 14, 12 28"
          stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round"
        />
        <path
          d="M 23 24.5 L 12 28 L 16.5 17.5"
          stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Main component ────────────────────────────────────────────── */
export default function GoogleCloudCaseStudy() {
  const [impactInView, setImpactInView] = useState(false);
  const [activeSection, setActiveSection] = useState('context');
  const [modalImage, setModalImage] = useState(null);
  const impactRef = useRef(null);

  useEffect(() => {
    /* scroll-reveal for all animated elements */
    const revObs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right')
            .forEach(el => revObs.observe(el));

    /* impact counter trigger — fires at 10% to stay in sync with fade-up */
    const impObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setImpactInView(true); impObs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (impactRef.current) impObs.observe(impactRef.current);

    // Passive scroll listener — finds the last section whose top edge
    // has scrolled past 35% of the viewport height (reliable, no threshold issues)
    const SECTION_IDS = ['context', 'overview', 'problem', 'solution-preview', 'impact',
      'design-process', 'final-design', 'not-to-build', 'takeaways', 'skills'];
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= trigger) current = id;
      }
      setActiveSection(current);
    };
    handleScroll(); // run once on mount to set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => { revObs.disconnect(); impObs.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const skipToFinal = () =>
    document.getElementById('final-design')?.scrollIntoView({ behavior: 'smooth' });

  const TOOLS = [
    { src: figmaLogo,  name: 'Figma'          },
    { src: slackLogo,  name: 'Slack'          },
    { src: notionLogo, name: 'Notion'         },
    { src: gcLogo,     name: 'Google Cloud'  },
    { src: colabLogo,  name: 'Google Colab'  },
    { src: geminiLogo, name: 'Gemini'         },
    { src: pythonLogo, name: 'Python'         },
    { src: dialogflowLogo, name: 'DialogFlow CX' },
    { src: visionAiLogo, name: 'Vision AI' },
  ];

  const sidebarSections = [
    { id: 'context',       label: 'Context'              },
    { id: 'overview',      label: 'Overview'             },
    { id: 'problem',       label: 'Problem'              },
    { id: 'solution-preview', label: 'Solution'          },
    { id: 'impact',        label: 'Key Outputs'          },
    { id: 'design-process',label: 'Design Process'       },
    { id: 'final-design',  label: 'Final Design'         },
    { id: 'not-to-build',  label: "Prioritization"       },
    { id: 'takeaways',     label: '3 Lessons Learned'    },
    { id: 'skills',        label: 'Skills Built'         },
  ];

  /* ── JSX ─────────────────────────────────────────────────────── */
  return (
    <div className="cs-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: linear-gradient(160deg, #eaf2d7 0%, #efcfe3 35%, #b3dee2 70%, #ea9ab2 100%);
        }
        body {
          min-height: 100%;
        }

        .cs-root {
          min-height: 100vh;
          color: #2d2d2d;
          font-family: 'DM Sans', sans-serif;
          /* clip instead of hidden — hidden promotes overflow-y to auto,
             which breaks position:sticky on all descendants */
          overflow-x: clip;
        }

        /* ── HERO ──────────────────────────────────────────────── */
        .cs-hero {
          width: 100%;
          padding: 3.5rem 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: transparent;
          overflow: hidden;
          gap: 0.75rem;
        }
        .cs-hero-img {
          width: 100%;
          max-width: 880px;
          height: auto;
          object-fit: contain;
          display: block;
          opacity: 0;
          animation: heroFade 1.2s ease-out .2s forwards;
        }
        .cs-hero-subtitle {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          opacity: 0;
          animation: heroFade 1.2s ease-out .4s forwards;
        }
        @keyframes heroFade { to { opacity: 1; } }

        /* ── CONTENT COLUMN ────────────────────────────────────── */
        .cs-content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0;
          /* allow the grid track to shrink below children's min-content so a
             single nowrap/wide element can't blow the column past the viewport */
          min-width: 0;
        }

        .cs-page-layout {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 200px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .cs-sidebar {
          position: sticky;
          /* sits just below the sticky header (~6.5 rem) when scrolling */
          top: 7.5rem;
          align-self: start;
          width: 200px;
          /* align first nav link with the Cornell logo inside .cs-intro (padding-top: 4.5rem) */
          padding-top: 4.5rem;
        }
        .cs-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: .95rem;
        }
        .cs-sidebar-link {
          text-decoration: none;
          color: #aaa;
          font-family: 'DM Sans', sans-serif;
          font-size: .75rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          transition: color .2s ease, padding-left .2s ease;
          position: relative;
          padding-left: 1rem;
          display: block;
          line-height: 1.4;
        }
        /* left‑bar indicator */
        .cs-sidebar-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 100%;
          border-radius: 2px;
          background: transparent;
          transition: background .2s ease;
        }
        .cs-sidebar-link:hover {
          color: #e27396;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link:hover::before {
          background: rgba(226, 115, 150, .35);
        }
        /* ── active state: bold pink + solid left bar ── */
        .cs-sidebar-link.active {
          color: #e27396;
          font-weight: 700;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link.active::before {
          background: #e27396;
        }

        /* ── INTRO ─────────────────────────────────────────────── */
        .cs-intro { padding: 4.5rem 0 3rem; }

        .cs-logo-bar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          justify-content: flex-start;
        }
        .cs-cornell-badge {
          background: #b31b1b;
          color: white;
          font-family: 'Fjalla One', sans-serif;
          font-size: .82rem;
          padding: .35rem .9rem;
          border-radius: 4px;
          letter-spacing: .04em;
        }
        .cs-gc-logo { height: 34px; width: auto; object-fit: contain; }
        .cs-logo-sep { font-size: 1.3rem; color: #ccc; font-weight: 300; }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 2.5rem;
        }
        .cs-tag {
          border: 1.5px solid rgba(45,45,45,.22);
          border-radius: 50px;
          padding: .3rem 1rem;
          font-size: .83rem;
          color: #555;
          background: rgba(255,255,255,.5);
          font-family: 'DM Sans', sans-serif;
        }

        .cs-sublabel {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: .55rem;
        }

        .cs-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin-bottom: 3rem;
          max-width: none;
          white-space: nowrap;
          display: block;
        }
        .cs-solution-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin: 1.25rem 0 1.5rem;
          max-width: none;
          white-space: nowrap;
          display: block;
        }

        /* metadata grid — explicit rows to match sketch */
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 3.5rem auto 2.5rem auto;
          max-width: 1200px;
          background: transparent;
          border: none;
        }
        .cs-meta-row {
          display: grid;
          gap: 0;
          width: 100%;
        }
        .cs-meta-row-top {
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 6px 6px 0 0;
          overflow: hidden;
        }
        .cs-meta-row-mid {
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          align-items: center;
        }
        .cs-meta-row-tools {
          grid-template-columns: 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 0 0 6px 6px;
        }
        .cs-meta-cell {
          padding: 1.25rem 1.5rem;
          border-right: 1px solid rgba(226, 115, 150, 0.25);
          text-align: center;
          min-height: 100%;
        }
        .cs-meta-row-top .cs-meta-cell:last-child,
        .cs-meta-row-mid .cs-meta-cell:last-child,
        .cs-meta-row-tools .cs-meta-cell {
          border-right: none;
        }
        .cs-meta-row-mid .cs-meta-cell {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-meta-team {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .75rem;
        }
        .cs-meta-team-avatars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cs-meta-team-role {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .35rem;
        }
        .cs-team-avatar {
          width: 34px;
          height: 34px;
          object-fit: cover;
          border-radius: 0;
          border: none;
          box-shadow: none;
        }
        .cs-team-role-label {
          font-family: 'DM Sans', sans-serif;
          font-size: .8rem;
          color: #444;
          line-height: 1.2;
          text-align: center;
        }
        .cs-team-caption {
          font-size: .82rem;
          color: #444;
          font-family: 'DM Sans', sans-serif;
          line-height: 1.35;
        }

        .cs-meta-key {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: #8b8b8b;
          margin-bottom: .6rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
        }
        .cs-meta-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: #2d2d2d;
          line-height: 1.4;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-tool-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          margin-top: .35rem;
          justify-content: center;
        }
        .cs-tool-logo {
          height: 30px;
          width: auto;
          object-fit: contain;
          filter: grayscale(15%);
          transition: filter .2s, transform .2s;
        }
        .cs-tool-logo:hover { filter: grayscale(0%); transform: scale(1.12); }
        .cs-tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .cs-tool-name {
          font-size: 0.7rem;
          color: #555;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
          max-width: 60px;
        }
        /* ── SECTION ANATOMY ───────────────────────────────────── */
        .cs-section {
          padding: 4.5rem 0;
          border-top: 1px solid rgba(0,0,0,.08);
        }

        /* CHANGE 6: section labels jet black */
        .cs-section-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 1.75rem;
        }

        .cs-body {
          font-size: 1rem;
          line-height: 1.85;
          color: #444;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-body p { margin-bottom: 1.2rem; }
        .cs-body p:last-child { margin-bottom: 0; }
        .cs-bold-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.4rem;
          line-height: 1.5;
          color: #e27396; /* pink */
          margin-bottom: 1.5rem;
        }
        .cs-highlight {
          background: rgba(198,236,201,0.55); /* pastel green */
          padding: 0.05em 0.28em;
          border-radius: 2px; /* sharp-ish edges, not a pill */
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        .cs-placeholder {
          background: rgba(255,255,255,.4);
          border: 2px dashed rgba(0,0,0,.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: .85rem;
          font-style: italic;
        }

        /* ── SOLUTION VIDEO ────────────────────────────────────── */
        .cs-video-wrap {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,.14);
          margin: 2rem 0 1.5rem;
        }
        .cs-video-wrap iframe {
          display: block;
          width: 100%;
          aspect-ratio: 16/9;
          border: none;
        }
        .cs-skip-btn {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          background: transparent;
          border: 1.5px solid #e27396;
          color: #e27396;
          border-radius: 9999px;
          padding: .6rem 1.25rem;
          font-size: .95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all .18s ease;
          margin: 1.25rem auto 0 auto;
          display: inline-flex;
        }
        .cs-skip-btn:hover { background: #e27396; color: white; }
        .cs-skip-icon {
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(226,115,150,0.12);
          color: #e27396;
          flex-shrink: 0;
        }
        .cs-skip-icon svg { width: 16px; height: 16px; }
        .cs-skip-label { display: inline-block; font-family: 'DM Sans', sans-serif; font-weight:700; }

        /* ── IMPACT ────────────────────────────────────────────── */
        .impact-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin: 2.5rem 0 2rem;
        }

        /* "An invaluable impact" — Georgia/serif, pink, no border, no italic */
        .impact-note {
          font-size: 1.1rem;
          color: #e27396;
          font-style: normal;
          font-family: ui-serif, Georgia, serif;
          font-weight: 500;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          border-left: 4px solid #000;
          padding-left: 1rem;
          margin-left: 0.5rem;
        }
        .impact-note a { color: #e27396; text-decoration: underline; }

        /* ── DESIGN PROCESS ────────────────────────────────────── */
        .process-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          color: #e27396;
          font-style: normal;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }
        .process-timeline { margin-top: 0; }
        .process-step {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          position: relative;
        }
        .ps-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ps-num {
          /* Georgia/serif to match sketch annotation */
          font-family: ui-serif, Georgia, serif;
          font-size: .8rem;
          font-weight: 600;
          color: #e27396;
          margin-bottom: .35rem;
          letter-spacing: .04em;
        }
        .ps-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0;
        }
        .ps-text {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
          margin-top: -0.7rem;
          margin-bottom: 0;
        }
        .ps-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,.1);
        }
        .ps-img img { width: 100%; height: auto; display: block; }

        /* video placeholder — subtle pink tint + play icon */
        .cs-video-ph {
          background: rgba(226,115,150,0.05) !important;
          border-color: rgba(226,115,150,0.25) !important;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: 10px;
        }

        /* ── FINAL DESIGN ──────────────────────────────────────── */
        .fd-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4.5rem;
          position: relative;
        }
        .fd-row:last-child { margin-bottom: 0; }
        /* squiggly arrow floating in the gap between text and image */
        .fd-arrow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 78px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 3;
        }
        .fd-arrow svg { width: 100%; height: auto; display: block; }
        .fd-arrow-right { transform: translate(-50%, -50%) scaleX(-1); }
        .fd-pain-point {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: .9rem;
          line-height: 1.5;
        }
        .fd-why {
          font-size: .68rem;
          font-family: 'Fjalla One', sans-serif;
          text-transform: uppercase;
          letter-spacing: .2em;
          color: #e27396;
          margin-bottom: .5rem;
        }
        .fd-principle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: .9rem;
          line-height: 1.3;
        }
        .fd-desc {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }
        .fd-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 6px 26px rgba(0,0,0,.1);
        }
        .fd-img img { width: 100%; height: auto; display: block; }
        .fd-img-caption {
          font-family: 'DM Sans', sans-serif;
          font-size: .85rem;
          font-weight: 400;
          font-style: italic;
          color: #1a1a1a;
          text-align: center;
          margin-top: .85rem;
          line-height: 1.4;
        }

        /* ── NOT TO BUILD ──────────────────────────────────────── */
        .ntb-layout {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3rem;
          align-items: start;
          margin-top: 2.5rem;
        }
        .ntb-cards { display: flex; flex-direction: column; gap: 1.25rem; }
        .ntb-card {
          background: rgba(255,255,255,.75);
          border-radius: 12px;
          padding: 1.4rem;
          box-shadow: 0 2px 14px rgba(0,0,0,.06);
        }
        .ntb-card-title {
          font-weight: 700;
          font-size: .95rem;
          color: #1a1a1a;
          margin-bottom: .65rem;
          font-family: 'DM Sans', sans-serif;
        }
        .ntb-tag {
          display: inline-flex;
          align-items: center;
          gap: .35rem;
          border-radius: 50px;
          padding: .2rem .8rem;
          font-size: .75rem;
          font-weight: 600;
          margin-bottom: .7rem;
          font-family: 'DM Sans', sans-serif;
        }
        .ntb-tag.built { background: #e8f5e9; color: #2e7d32; border: 1.5px solid #2e7d32; }
        .ntb-tag.cut   { background: #fff3e0; color: #e65100; border: 1.5px solid #e65100; }
        .ntb-desc {
          font-size: .88rem;
          color: #555;
          line-height: 1.68;
          font-family: 'DM Sans', sans-serif;
        }
        .matrix-container {
          width: 100%;
        }
        .matrix-caption {
          font-size: .88rem;
          color: #555;
          line-height: 1.68;
          font-family: 'DM Sans', sans-serif;
          text-align: center;
          margin-top: 1rem;
        }
        .ntb-matrix {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 22px rgba(0,0,0,.1);
          position: sticky;
          top: 90px;
        }
        .ntb-matrix img { width: 100%; height: auto; display: block; }

        /* ── LEARNINGS ─────────────────────────────────────────── */
        .learnings-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-family: 'DM Sans', sans-serif;
        }
        .learning-item {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        .learning-n {
          font-size: 4rem;
          font-weight: 900;
          color: rgba(226,115,150,.18);
          line-height: .85;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 52px;
          text-align: right;
        }
        .learning-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          padding-top: 0;
          flex: 1;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── PROBLEM LIST (numbered items) ───────────────────── */
        .problem-list {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .problem-item {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .problem-n {
          font-size: 2.4rem;
          font-weight: 900;
          color: rgba(226,115,150,.18);
          line-height: 1;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 56px;
          text-align: right;
          padding-top: 0;
        }
        .problem-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── SKILLS ────────────────────────────────────────────── */
        .skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-top: 1.5rem;
        }
        .skill-pill {
          background: rgba(255,255,255,.75);
          border: 1.5px solid rgba(226,115,150,.45);
          color: #c55577;
          border-radius: 50px;
          padding: .42rem 1.2rem;
          font-size: .87rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          transition: background .2s, color .2s;
        }
        .skill-pill:hover { background: #e27396; color: white; }

        /* CHANGE 7: "THE END" — Fjalla One, uppercase, bold, not italic, not faded */
        .cs-the-end {
          text-align: center;
          padding: 5rem 2rem 3.5rem;
        }
        .cs-the-end-text {
          font-family: 'Fjalla One', sans-serif;
          font-size: 5rem;
          color: #2d2d2d;
          text-transform: uppercase;
          letter-spacing: .08em;
          line-height: 1;
        }

        /* ── SEE NEXT ──────────────────────────────────────────── */
        .see-next {
          padding: 4rem 2rem 2rem;
          max-width: 1120px;
          margin: 0 auto;
        }
        .see-next-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 2rem;
        }
        .see-next-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .see-next-card {
          background: rgba(255,255,255,.6);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,.08);
          text-decoration: none;
          color: inherit;
          transition: transform .25s ease, box-shadow .25s ease;
          display: flex;
          flex-direction: column;
        }
        .see-next-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 36px rgba(0,0,0,.13);
        }
        .see-next-img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: contain;
          display: block;
          background: rgba(255,255,255,.6);
        }
        .see-next-body {
          padding: 1.4rem 1.6rem 1.8rem;
        }
        .see-next-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: .6rem;
        }
        .see-next-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .9rem;
          color: #555;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .see-next-grid { grid-template-columns: 1fr; }
        }

        /* ── NAV BUTTONS ───────────────────────────────────────── */
        .cs-nav-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 3.5rem 2rem;
          flex-wrap: wrap;
        }
        .cs-btn {
          padding: .78rem 2rem;
          border-radius: 50px;
          font-size: .95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all .25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: .45rem;
          border: none;
        }
        .cs-btn.primary { background: #e27396; color: white; box-shadow: 0 4px 16px rgba(226,115,150,.3); }
        .cs-btn.primary:hover { background: #c55577; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(226,115,150,.38); }
        .cs-btn.secondary { background: rgba(255,255,255,.85); color: #2d2d2d; border: 1.5px solid rgba(226,115,150,.4); }
        .cs-btn.secondary:hover { background: #e27396; color: white; border-color: #e27396; transform: translateY(-2px); }

        /* ── SCROLL ANIMATIONS ─────────────────────────────────── */
        .fade-up    { opacity: 0; transform: translateY(24px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-left  { opacity: 0; transform: translateX(-36px); transition: opacity .65s ease, transform .65s ease; }
        .fade-right { opacity: 0; transform: translateX(36px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-up.visible,
        .fade-left.visible,
        .fade-right.visible { opacity: 1; transform: none; }

        /* ── RESPONSIVE ────────────────────────────────────────── */
        @media (max-width: 768px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-oneliner       { font-size: 1.2rem; white-space: normal; }
          .cs-solution-oneliner { font-size: 1.2rem; white-space: normal; }
          .cs-meta           { grid-template-columns: repeat(2, 1fr); }
          .cs-meta-tools     { grid-column: span 1; }
          .impact-row        { grid-template-columns: repeat(2, 1fr); }
          .process-step      { grid-template-columns: 1fr; gap: 1.5rem; }
          .fd-row            { grid-template-columns: 1fr; gap: 2rem; }
          .fd-arrow          { display: none; }
          .ntb-layout        { grid-template-columns: 1fr; }
          .ntb-matrix        { position: static; }
          .cs-the-end-text   { font-size: 3.5rem; }
        }
        /* Medium screens (tablets) */
        @media (max-width: 1024px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-bold-intro    { font-size: 1.15rem; }
          .cs-oneliner      { font-size: 18px; white-space: normal; }
          .cs-solution-oneliner { font-size: 18px; white-space: normal; }
          .cs-meta-row-top  { grid-template-columns: 1fr; }
          .cs-meta-row-mid  { grid-template-columns: 1fr; }
          .cs-meta-row-tools{ grid-template-columns: 1fr; }
          .problem-n        { width: 42px; font-size: 2rem; }
          .problem-text     { font-size: 0.98rem; }
        }
        @media (max-width: 480px) {
          .cs-page-layout    { padding: 0 1rem; }
          .impact-row        { grid-template-columns: 1fr 1fr; gap: .9rem; }
          .impact-num        { font-size: 2.5rem; }
          .cs-the-end-text   { font-size: 2.5rem; }
        }

        /* ── IMAGE MODAL (click-to-view) ───────────────────────────── */
        .clickable-image {
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.3s ease;
        }
        .clickable-image:hover {
          opacity: 0.88;
        }
        .image-subtext {
          font-size: 0.75rem;
          color: #999;
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
          font-family: 'DM Sans', sans-serif;
        }
        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: csModalFadeIn 0.3s ease;
          cursor: pointer;
        }
        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 10px 60px rgba(0, 0, 0, 0.3);
          cursor: default;
        }
        .image-modal-content img {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: calc(90vh - 2rem);
          display: block;
        }
        .image-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .image-modal-close:hover {
          transform: scale(1.2);
        }
        @keyframes csModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <SiteHeader />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div className="cs-hero">
        <img src={heroImg} alt="Google Cloud Capstone Project — Final Product" className="cs-hero-img" />
        <p className="cs-hero-subtitle">Final Product View</p>
      </div>

      

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <div className="cs-page-layout">
        <aside className="cs-sidebar" aria-label="Section navigation">
          <nav className="cs-sidebar-nav">
            {sidebarSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`cs-sidebar-link${activeSection === section.id ? ' active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="cs-content">

        {/* ── INTRO ──────────────────────────────────────────────── */}
        <div className="cs-intro" id="context">

          {/* Cornell × Google Cloud */}
          <div className="cs-logo-bar fade-up">
              <div className="cs-cornell-badge">Cornell University</div>
            <span className="cs-logo-sep">×</span>
              <img src={gcLogo} alt="Google Cloud" className="cs-gc-logo" />
          </div>

          {/* Tag pills */}
          <div className="cs-tags fade-up">
            {['UX Research', 'Product Design', 'UX Strategy', 'Google Cloud'].map(t => (
              <span key={t} className="cs-tag">{t}</span>
            ))}
          </div>

          {/* One-liner */}
          <p className="cs-sublabel fade-up">What is this project?</p>
          <p className="cs-oneliner fade-up">
            Designed a linear onboarding flow that reimagines how cloud platforms can guide
            non-technical users.
          </p>

          {/* Metadata grid — includes Team & Tools as last row */}
          <div className="cs-meta fade-up">
            <div className="cs-meta-row cs-meta-row-top">
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Client</div>
                <div className="cs-meta-val">Google Cloud (CGC)</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Institution</div>
                <div className="cs-meta-val">Cornell University</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-key">My Role</div>
                <div className="cs-meta-val">UX Researcher &amp; Product Designer</div>
              </div>
            </div>
            <div className="cs-meta-row cs-meta-row-mid">
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Timeline</div>
                <div className="cs-meta-val">13 Weeks · May 2025</div>
              </div>
              <div className="cs-meta-cell cs-meta-team">
                <div className="cs-meta-key">Team</div>
                <div className="cs-meta-team-avatars" aria-label="Project team avatars">
                  <div className="cs-meta-team-role">
                    <img src={designerLogo} alt="Designer icon" className="cs-team-avatar" />
                    <div className="cs-team-role-label">3 Designers</div>
                  </div>
                  <div className="cs-meta-team-role">
                    <img src={researcherLogo} alt="Researcher icon" className="cs-team-avatar" />
                    <div className="cs-team-role-label">3 Researchers</div>
                  </div>
                  <div className="cs-meta-team-role">
                    <img src={productManagerLogo} alt="Product manager icon" className="cs-team-avatar" />
                    <div className="cs-team-role-label">2 Product Managers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-meta-row cs-meta-row-tools">
              <div className="cs-meta-cell cs-meta-tools">
                <div className="cs-meta-key">Tools</div>
                <div className="cs-tool-logos">
                  {TOOLS.map(t => (
                    <div key={t.name} className="cs-tool-item">
                      <img src={t.src} alt={t.name} title={t.name} className="cs-tool-logo" />
                      <p className="cs-tool-name">{t.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── OVERVIEW ───────────────────────────────────────────── */}
        <div className="cs-section" id="overview">
          <p className="cs-section-label">Overview</p>
          <div className="cs-body fade-up">
            <p>
              This project was my capstone project in collaboration with Google Cloud. It was an amazing
              opportunity to work directly with one of the leading companies in the industry. I was beyond
              excited to gain such an opportunity.
            </p>
            <p>
              Our team worked with the wonderful Alex Pytlarz on this project, who mentored us
              and gave us something unusual to work on. The plot of the project was to{' '}
              <span className="cs-highlight">redesign the Google Cloud platform by designing two Gen-AI-centric apps using Google Cloud products</span>{' '}
              and understanding their product. We had to identify areas for improvement by keeping
              a diary study and then{' '}
              <span className="cs-highlight">building a well-rounded UX and content strategy solution</span>.
            </p>
            <p>
              We weren't observing the users. We were the users. In the next 6 weeks, we ran diary studies
              while building two working GenAI applications. Furthermore, we conducted{' '}
              <span className="cs-highlight">external interviews with engineers</span>, synthesized the
              findings into a{' '}
              <span className="cs-highlight">UX design solution proposal</span>, and presented it live
              to our Google stakeholders.
            </p>
            <p>
              Our client was not only happy with our solution proposal, but to{' '}
              <span className="cs-highlight">see the live changes on cloud.google.com months later</span>{' '}
              was the rewarding part of this project.
            </p>
          </div>
        </div>

        {/* ── PROBLEM ────────────────────────────────────────────── */}
        <div className="cs-section" id="problem">
          <p className="cs-section-label">Problem</p>
            <div className="cs-body">
            <p className="cs-bold-intro fade-up">
              Google Cloud is an incredibly powerful platform. But getting started as someone new
              felt like being dropped in the ocean without a map.
            </p>

            <p className="fade-up">From the moment I started engaging with Google Cloud, I started to get the hang of the sheer amount of content. As part of the project, we built two Gen AI products:</p>

            <div className="problem-list">
              <div className="problem-item fade-up">
                <span className="problem-n">1</span>
                <div className="problem-text"><strong>Photo-Haiku App:</strong> An App that takes in a picture from the user and turns it into a beautiful haiku. </div>
              </div>

              <div className="problem-item fade-up">
                <span className="problem-n">2</span>
                <div className="problem-text"><strong>Cornell Chatbot:</strong> A chatbot for Cornell University to answer enrollment questions for new admits.</div>
              </div>
            </div>

            <p className="fade-up" style={{ marginTop: '2rem' }}>
              While using Google Cloud products to aid us with the development of these apps,{' '}
              <span className="cs-highlight">we realized the Google Cloud solution generator was text-heavy and unreliable.</span>{' '}
              There were times when the{' '}
              <span className="cs-highlight">documentation was outdated</span>, so we had to resort to using other resources like LLMs and YouTube. Once both the apps were built, we put together the major pain points faced.
            </p>
          </div>

          <CardStack cards={PAIN_CARDS} />
        </div>

        {/* ── SOLUTION PREVIEW ───────────────────────────────────── */}
        <div className="cs-section" id="solution-preview">
          <p className="cs-section-label">Solution Preview</p>
          <p className="cs-solution-oneliner fade-up">Watch a walkthrough of the final design solution we built.</p>

          <div className="cs-video-wrap fade-up">
            <iframe
              src="https://www.youtube.com/embed/g4A4sPdYbSs"
              title="Google Cloud Guided Onboarding Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <button className="cs-skip-btn fade-up" onClick={skipToFinal}>
            <span className="cs-skip-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v10M7 12l5 5 5-5" />
              </svg>
            </span>
            <span className="cs-skip-label">In a hurry? Skip to the final design</span>
          </button>
        </div>

        {/* ── KEY OUTPUTS ───────────────────────────────────────────── */}
        <div className="cs-section" id="impact" ref={impactRef}>
          <p className="cs-section-label">Key Outputs</p>
          <p className="impact-note fade-up">
            An invaluable impact was seeing our design proposal implemented live on{' '}
            <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">
              cloud.google.com
            </a>.
          </p>
          <div className="impact-row">
            <CountBox end={2}  suffix=""  inView={impactInView}
              label="GenAI-centric apps built from scratch using Google Cloud products" />
            <CountBox end={10} suffix="+" inView={impactInView}
              label="User interviews conducted across internal and external participants" />
            <CountBox end={20} suffix="+" inView={impactInView}
              label="How might we? questions generated to guide the design process" />
            <CountBox end={1}  suffix=""  inView={impactInView}
              label="High-fidelity prototype presented live to Google stakeholders" />
          </div>
        </div>

        {/* ── DESIGN PROCESS ─────────────────────────────────────── */}
        <div className="cs-section" id="design-process">
          <p className="cs-section-label">Design Process</p>

          {/* intro — pink Georgia/serif per sketch */}
          <p className="process-intro fade-up">
            The design process was a messy long road, every insight led to new questions, and every iteration surfaced something we had missed.
          </p>

          <div className="process-timeline">

            {/* 01 — LEFT */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={mov1} alt="Haiku App Creation" className="clickable-image" onClick={() => setModalImage(mov1)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">01</p>
                <h3 className="ps-title">Haiku App Creation</h3>
                <p className="ps-text">
                  Created an app that took in an image and turned it into a beautiful haiku.
                  Used Google Cloud's solution generator, Vertex AI, cloud documentation, and
                  tools like ChatGPT and Gemini to build it. Coded in Python on Google Colab and deployed
                  on Streamlit.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 02 — RIGHT */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={mov2} alt="Chatbot Creation" className="clickable-image" onClick={() => setModalImage(mov2)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">02</p>
                <h3 className="ps-title">Chatbot Creation</h3>
                <p className="ps-text">
                  Created a chatbot to answer questions about Cornell programs, deadlines, and
                  contacts. Designed and trained it in Dialogflow CX, integrating Gemini for
                  advanced language understanding. Built the HTML front-end and deployed on
                  Firebase Hosting.
                </p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 03 — LEFT */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={pic1} alt="Diary Study Research" className="clickable-image" onClick={() => setModalImage(pic1)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">03</p>
                <h3 className="ps-title">Diary Study Research</h3>
                <p className="ps-text">
                  Kept individual and team diary studies, noting key obstacles, resources that
                  helped overcome them, and more. Every frustration, every workaround, every
                  moment of clarity became a data point for what to improve.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 04 — RIGHT */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={pic2} alt="Research Synthesis" className="clickable-image" onClick={() => setModalImage(pic2)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">04</p>
                <h3 className="ps-title">Research Synthesis</h3>
                <p className="ps-text">
                  Analyzed common pain points using affinity mapping and prioritized four main
                  friction areas. Brought both teams' diary studies together to find patterns
                  and turn scattered observations into clear pain points.
                </p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 05 — LEFT */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={pic3} alt="Identifying Opportunities" className="clickable-image" onClick={() => setModalImage(pic3)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">05</p>
                <h3 className="ps-title">Identifying Opportunities</h3>
                <p className="ps-text">
                  Brainstormed opportunity areas to solve the main friction points identified.
                  Created an impact-feasibility matrix to prioritize which opportunities were
                  worth designing for within our timeline.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 06 — RIGHT */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={pic4} alt="How Might We" className="clickable-image" onClick={() => setModalImage(pic4)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">06</p>
                <h3 className="ps-title">How Might We?</h3>
                <p className="ps-text">
                  Brainstormed 20+ "How Might We?" questions to guide the design process.
                  Reframing pain points into opportunities helped us shift from describing
                  problems to designing solutions. We converged on one final HMW to drive the
                  entire design.
                </p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 07 — LEFT */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={pic5} alt="Design Ideation" className="clickable-image" onClick={() => setModalImage(pic5)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">07</p>
                <h3 className="ps-title">Design Ideation</h3>
                <p className="ps-text">
                  Connected the HMW questions to possible design solutions by sketching
                  low-fi expressions of each feature. Iterated the designs multiple times and
                  incorporated stakeholder feedback before arriving at the final design.
                </p>
              </div>
              <div />
            </div>

          </div>
        </div>

        {/* Restored Final Design header at original location */}
        <div className="cs-section" id="final-design">
          <p className="cs-section-label">Final Design</p>

          {/* Row 1 — image left */}
          <div className="fd-row">
            <SquigglyArrow direction="left" />
            <div className="fade-left">
              <div className="fd-img">
                <img src={dp1} alt="Interactivity by Default design principle" />
              </div>
              <p className="fd-img-caption">Interactivity by Default</p>
            </div>
            <div className="fade-right">
              <p className="fd-why">Pain point 1</p>
              <p className="fd-pain-point">No clear path to find answers the users were looking for</p>
              <p className="fd-why">Why this works</p>
              <p className="fd-desc">
                Your steps are personalized to your use case, combating overwhelming navigation.
                Instead of confronting users with walls of content, the experience adapts to
                whatever you're building, making Google Cloud feel like it was designed for you.
              </p>
            </div>
          </div>

          {/* Row 2 — image right */}
          <div className="fd-row">
            <SquigglyArrow direction="right" />
            <div className="fade-left">
              <p className="fd-why">Pain point 2</p>
              <p className="fd-pain-point">Overwhelming navigation and amount of content</p>
              <p className="fd-why">Why this works</p>
              <p className="fd-desc">
                Reduces cognitive load while providing a clear and linear guide to even
                non-technical users. Information is revealed incrementally, only what's needed
                at each stage, so users never feel overwhelmed by the depth of Google Cloud's
                ecosystem.
              </p>
            </div>
            <div className="fade-right">
              <div className="fd-img">
                <img src={dp2} alt="Step-by-step guidance with progressive disclosure" />
              </div>
              <p className="fd-img-caption">Step-by-Step Guidance with Progressive Disclosure</p>
            </div>
          </div>

          {/* Row 3 — image left */}
          <div className="fd-row">
            <SquigglyArrow direction="left" />
            <div className="fade-left">
              <div className="fd-img">
                <img src={dp3} alt="Clarity through concise visual communication" />
              </div>
              <p className="fd-img-caption">Clarity through Concise Visual Communication</p>
            </div>
            <div className="fade-right">
              <p className="fd-why">Pain point 3</p>
              <p className="fd-pain-point">Irrelevant search results and poor query matching</p>
              <p className="fd-why">Why this works</p>
              <p className="fd-desc">
                Reduces cognitive load while solving irrelevant results and poor query matching.
                Visuals, icons, and concise language replace dense text, so users can scan,
                understand, and act without getting lost in documentation.
              </p>
            </div>
          </div>
        </div>

        {/* ── NOT TO BUILD ───────────────────────────────────────── */}
        <div className="cs-section" id="not-to-build">
          <p className="cs-section-label">What We Decided Not to Build &amp; Why</p>

          <div className="matrix-container fade-up">
            <img src={matrix} alt="Impact vs Feasibility Matrix" className="clickable-image" onClick={() => setModalImage(matrix)} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <p className="image-subtext">Click to view in detail</p>
            <p className="matrix-caption">We had to prioritize to build the most impactful solution within the deadline</p>
          </div>
        </div>

        {/* ── 3 THINGS LEARNED ───────────────────────────────────── */}
        <div className="cs-section" id="takeaways">
          <p className="cs-section-label">3 Things This Project Taught Me</p>
          <div className="learnings-list">
            <div className="learning-item fade-up">
              <span className="learning-n">1</span>
              <p className="learning-text">
                We need to rethink interaction flows and features beyond the classic text
                chatbot. It needs to be a seamless guiding experience.
              </p>
            </div>
            <div className="learning-item fade-up">
              <span className="learning-n">2</span>
              <p className="learning-text">
                LLMs changed so much over the course of this project. This really taught me the
                crucial importance of flexibility and the rapid ability to adopt new
                technologies.
              </p>
            </div>
            <div className="learning-item fade-up">
              <span className="learning-n">3</span>
              <p className="learning-text">
                AI is really lowering the bar to entry for non-technical users, opening the
                door to innovation like never before.
              </p>
            </div>
          </div>
        </div>

        {/* ── SKILLS ─────────────────────────────────────────────── */}
        <div className="cs-section" id="skills">
          <p className="cs-section-label">Skills Built Through This Project</p>
          <div className="skills-pills">
            {[
              'Diary Study Design',
              'Contextual & Exit Interviews',
              'AutoEthnography Method',
              'Cloud Design',
              'Insight Synthesis',
              'UX Strategy',
              'High-fi Prototyping',
              'Impact-Feasibility Prioritization',
              'Cross-Functional Leadership',
              'Stakeholder Communication',
              'AI app development'
            ].map(s => (
              <span key={s} className="skill-pill fade-up">{s}</span>
            ))}
          </div>
        </div>

        {/* ── THE END ────────────────────────────────────────────── */}
        <div className="cs-the-end">
          <p className="cs-the-end-text fade-up">THE END</p>
        </div>

        </div>{/* /cs-content */}
      </div>{/* /cs-page-layout */}

      {/* ── SEE NEXT ─────────────────────────────────────────────── */}
      <div className="see-next">
        <p className="see-next-label fade-up">See Next</p>
        <div className="see-next-grid">
          <a href="/ithaca-soap-case-study" className="see-next-card fade-up">
            <img src={ithacaSoapMockup} alt="Ithaca Soap Redesign" className="see-next-img" />
            <div className="see-next-body">
              <h3 className="see-next-title">Ithaca Soap Redesign</h3>
              <p className="see-next-desc">Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap.</p>
            </div>
          </a>
          <a href="/routes-to-roots-case-study" className="see-next-card fade-up">
            <img src={routesMockup} alt="Routes to Roots App" className="see-next-img" />
            <div className="see-next-body">
              <h3 className="see-next-title">Routes to Roots App</h3>
              <p className="see-next-desc">Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.</p>
            </div>
          </a>
        </div>
      </div>


      {/* ── FOOTER (matches App.jsx) ──────────────────────────────── */}
      <SiteFooter />

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="Enlarged view" />
          </div>
        </div>
      )}

    </div>
  );
}
