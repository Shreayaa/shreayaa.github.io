import React, { useState, useEffect, useRef } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { CountBox, CardStack, RoadConnector } from './components/CaseStudyShared';
import ithacaSoapMockup from './assets/ithaca-soap/ithaca-soap-mockup.png';
import googleMockup    from './assets/google-cloud/capstone-mockup.png';
import routesMockup    from './assets/routes-to-roots/routes.png';
import vueLogo         from './assets/tools/Vue.js.png';
import vuetifyLogo     from './assets/tools/Veutify.png';
import githubLogo      from './assets/tools/GitHub.png';
import copilotLogo     from './assets/tools/copilot-color.png';
import figmaLogo       from './assets/tools/figma.png';
import canvaLogo       from './assets/tools/Canva.png';
import chatgptLogo     from './assets/tools/OpenAI-black-monoblossom.png';
import researchImg     from './assets/ithaca-soap/research.png';
import personasImg     from './assets/ithaca-soap/personas.png';
import taskScenariosImg from './assets/ithaca-soap/taskscenarios.png';
import lowfiImg        from './assets/ithaca-soap/lowfi.jpeg';
import usabilityImg    from './assets/ithaca-soap/usability.png';
import hifiImg         from './assets/ithaca-soap/ithaca-soap-mockup.png';
import homepageImg     from './assets/ithaca-soap/home.png';
import productImg      from './assets/ithaca-soap/product.png';
import communityImg    from './assets/ithaca-soap/community.png';
import dealsImg        from './assets/ithaca-soap/deals.png';
import foundersImg     from './assets/ithaca-soap/founders.png';
import teamImg         from './assets/ithaca-soap/team.JPG';
import girlAvatar      from './assets/ithaca-soap/girl.png';

/* ── Stacking iMessage User-Goal Cards ─────────────────────────── */
const GOAL_CARDS = [
  { num: '01', msg: 'Users prefer products that are easy to use and store, especially in small living spaces.' },
  { num: '02', msg: 'Fragrance and how the products feel on the skin are consistently important across users.' },
  { num: '03', msg: 'Ingredient transparency and simple explanations are critical to building trust.' },
  { num: '04', msg: 'Design and presentation of the product influence purchasing decisions, especially for new users.' },
  { num: '05', msg: 'Users are open to sustainability when it aligns with comfort, price, and clarity.' },
  { num: '06', msg: 'Users want clarity on whether one product can really do it all.' },
];


/* ── Main component ────────────────────────────────────────────── */
export default function IthacaSoap() {
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

    /* impact counter trigger */
    const impObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setImpactInView(true); impObs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (impactRef.current) impObs.observe(impactRef.current);

    const SECTION_IDS = ['context', 'overview', 'problem', 'solution-preview', 'impact',
      'design-process', 'final-design', 'takeaways', 'skills'];
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= trigger) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => { revObs.disconnect(); impObs.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const skipToFinal = () =>
    document.getElementById('final-design')?.scrollIntoView({ behavior: 'smooth' });

  const TOOLS = [
    { src: vueLogo,     name: 'Vue.js'           },
    { src: vuetifyLogo, name: 'Vuetify'          },
    { src: githubLogo,  name: 'GitHub'           },
    { src: copilotLogo, name: 'Microsoft Copilot' },
    { src: figmaLogo,   name: 'Figma'            },
    { src: canvaLogo,   name: 'Canva'            },
    { src: chatgptLogo, name: 'ChatGPT'          },
  ];

  const TEAM = [
    { name: 'Shreayaa Srinivasan', avatar: girlAvatar },
    { name: 'Hrishika Jotwani',    avatar: girlAvatar },
    { name: 'Siying Wang',         avatar: girlAvatar },
  ];

  const sidebarSections = [
    { id: 'context',       label: 'Context'           },
    { id: 'overview',      label: 'Overview'          },
    { id: 'problem',       label: 'Problem'           },
    { id: 'solution-preview', label: 'Solution'       },
    { id: 'impact',        label: 'Key Output'        },
    { id: 'design-process',label: 'Design Process'    },
    { id: 'final-design',  label: 'Final Design'      },
    { id: 'takeaways',     label: '3 Lessons Learned' },
    { id: 'skills',        label: 'Skills Built'      },
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
          max-width: 700px;
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
          top: 7.5rem;
          align-self: start;
          width: 200px;
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
        .cs-brand-logo {
          font-family: 'Fjalla One', sans-serif;
          font-size: 1.15rem;
          letter-spacing: .02em;
          color: #2d2d2d;
        }
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

        /* metadata grid */
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

        .cs-meta-team {
          align-items: center;
        }
        .cs-meta-team-avatars {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: .35rem;
        }
        .cs-meta-team-role {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .5rem;
          width: 90px;
        }
        .cs-team-avatar {
          height: 60px;
          width: 60px;
          object-fit: cover;
          border: none;
        }
        .cs-team-role-label {
          font-size: .75rem;
          color: #2d2d2d;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          line-height: 1.3;
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
          max-width: 50px;
        }

        /* ── SECTION ANATOMY ───────────────────────────────────── */
        .cs-section {
          padding: 4.5rem 0;
          border-top: 1px solid rgba(0,0,0,.08);
        }
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
          color: #e27396;
          margin-bottom: 1.5rem;
        }
        .cs-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        .people-img-wrap {
          position: relative;
          z-index: 2;
          border-radius: 12px;
          overflow: hidden;
          max-width: 500px;
          margin: 0 auto;
        }
        .people-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
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
          margin: 2rem auto 1.5rem;
          max-width: 420px;
          display: flex;
          justify-content: center;
        }
        .cs-video-wrap iframe {
          display: block;
          width: 100%;
          aspect-ratio: 9/16;
          border: none;
          border-radius: 20px;
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
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin: 2.5rem 0 2rem;
        }
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
          margin-bottom: .75rem;
        }
        .ps-text {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }
        .ps-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,.1);
        }
        .ps-img img { width: 100%; height: auto; display: block; }

        /* sub-content inside a process step */
        .ps-sublist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .55rem;
          margin-top: .25rem;
        }
        .ps-sublist li {
          font-size: .92rem;
          color: #555;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
          padding-left: 1.1rem;
          position: relative;
        }
        .ps-sublist li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .62em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e27396;
        }
        .ps-scenario { margin-top: .5rem; }
        .ps-scenario-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .62rem;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: #e27396;
          margin-bottom: .25rem;
        }
        .ps-scenario-text {
          font-size: .92rem;
          color: #555;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }
        .ps-testing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: .85rem;
          margin-top: .5rem;
        }
        .ps-testing-item {
          background: rgba(255,255,255,.55);
          border: 1px solid rgba(226,115,150,.25);
          border-radius: 10px;
          padding: .7rem .85rem;
        }
        .ps-testing-key {
          font-family: 'Fjalla One', sans-serif;
          font-size: .6rem;
          text-transform: uppercase;
          letter-spacing: .16em;
          color: #e27396;
          margin-bottom: .3rem;
        }
        .ps-testing-val {
          font-size: .85rem;
          color: #555;
          line-height: 1.55;
          font-family: 'DM Sans', sans-serif;
        }

        /* video placeholder — subtle pink tint + play icon */
        .cs-video-ph {
          background: rgba(226,115,150,0.05) !important;
          border-color: rgba(226,115,150,0.25) !important;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: 10px;
        }

        /* ── FINAL DESIGN ──────────────────────────────────────── */
        .fd-empty-note {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.15rem;
          color: #999;
          font-style: italic;
          line-height: 1.6;
          margin-top: 1rem;
        }

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
          color: rgba(226,115,150,.4);
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

        /* ── THE END ───────────────────────────────────────────── */
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

        /* ── IMAGE MODAL ───────────────────────────────────────── */
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
          animation: fadeIn 0.3s ease;
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .clickable-image {
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .clickable-image:hover {
          opacity: 0.85;
        }
        .image-subtext {
          font-size: 0.75rem;
          color: #999;
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
          font-family: 'DM Sans', sans-serif;
        }

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
          .impact-row        { grid-template-columns: repeat(2, 1fr); }
          .process-step      { grid-template-columns: 1fr; gap: 1.5rem; }
          .ps-testing-grid   { grid-template-columns: 1fr; }
          .cs-the-end-text   { font-size: 3.5rem; }
        }
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
          .impact-row       { grid-template-columns: repeat(3, 1fr); }
          .problem-n        { width: 42px; font-size: 2rem; }
          .problem-text     { font-size: 0.98rem; }
        }
        @media (max-width: 480px) {
          .cs-page-layout    { padding: 0 1rem; }
          .impact-row        { grid-template-columns: 1fr 1fr; gap: .9rem; }
          .impact-num        { font-size: 2.5rem; }
          .cs-the-end-text   { font-size: 2.5rem; }
        }
      `}</style>

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <SiteHeader />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div className="cs-hero">
        <img src={ithacaSoapMockup} alt="Ithaca Soap Mobile App — Final Product" className="cs-hero-img" />
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

          {/* Tag pills */}
          <div className="cs-tags fade-up">
            {['Mobile App Design', 'AI Workflows', 'Product Design', 'Development', 'UX Research', 'Vue.js'].map(t => (
              <span key={t} className="cs-tag">{t}</span>
            ))}
          </div>

          {/* One-liner */}
          <p className="cs-sublabel fade-up">What is this project?</p>
          <p className="cs-oneliner fade-up">
            Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap.
          </p>

          {/* Metadata grid */}
          <div className="cs-meta fade-up">
            <div className="cs-meta-row cs-meta-row-top">
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Client</div>
                <div className="cs-meta-val">Ithaca Soap</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Institution</div>
                <div className="cs-meta-val">Cornell University</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-key">My Role</div>
                <div className="cs-meta-val">UX Engineer &amp; UX Researcher</div>
              </div>
            </div>
            <div className="cs-meta-row cs-meta-row-mid">
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Timeline</div>
                <div className="cs-meta-val">13 Weeks · May 2025</div>
              </div>
              <div className="cs-meta-cell cs-meta-team">
                <div className="cs-meta-key">Team</div>
                <div className="cs-meta-team-avatars" aria-label="Project team">
                  {TEAM.map(member => (
                    <div key={member.name} className="cs-meta-team-role">
                      <img src={member.avatar} alt={member.name} className="cs-team-avatar" />
                      <div className="cs-team-role-label">{member.name.split(' ')[0]}</div>
                    </div>
                  ))}
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
            <p className="cs-bold-intro">
              Ithaca Soap is a local small business brand in Ithaca.
            </p>
            <p>
              They are known for their sustainable products like water-free, plastic-free
              soaps and ingredient transparency. They have a <span className="cs-highlight">regular customer base in the local Ithaca farmers' market</span>. But their online presence didn't have a good reach, and their website didn't quite reflect what
              made them different. Our team <span className="cs-highlight">partnered with Ithaca Soap to design and build their mobile app from scratch</span>.
            </p>
            <p>
              We started from the research, <span className="cs-highlight">talked to the users to understand their goals</span>, created user personas, task
              scenarios, <span className="cs-highlight">prototyped the product with APIs,</span> and <span className="cs-highlight">built an installable PWA (progressive web app) using Vue.js</span>. This case study
              captures my process with this project in a gist.
            </p>
          </div>
        </div>

        {/* ── PROBLEM ────────────────────────────────────────────── */}
        <div className="cs-section" id="problem">
          <p className="cs-section-label">Problem</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div className="cs-body">
              <p className="cs-bold-intro fade-up">
                When we first sat down with Wendy, the Ithaca Soap co-founder, two things became pretty clear.
              </p>

              <div className="problem-list">
                <div className="problem-item fade-up">
                  <span className="problem-n">1</span>
                  <div className="problem-text">
                    Most customers found them by stumbling onto their farmers' market stall, or they were people who found
                    the product by word of mouth. There was not much reach through their existing website.
                  </div>
                </div>

                <div className="problem-item fade-up">
                  <span className="problem-n">2</span>
                  <div className="problem-text">
                    The product itself was genuinely confusing to people who hadn't tried it. One soap for everything? That
                    sounds like an unreliable claim.
                  </div>
                </div>
              </div>

              <p className="fade-up" style={{ marginTop: '1.5rem' }}>
                After understanding the stakeholders' branding and expectations, we moved on to the users. I conducted
                interviews and field studies with several users to understand their goals.
              </p>
            </div>
            <img src={foundersImg} alt="Ithaca Soap founders" className="fade-up" style={{ width: '100%', maxWidth: '360px', height: 'auto', display: 'block', borderRadius: '10px' }} />
          </div>

          <CardStack cards={GOAL_CARDS} />
        </div>

        {/* ── SOLUTION PREVIEW ───────────────────────────────────── */}
        <div className="cs-section" id="solution-preview">
          <p className="cs-section-label">Solution Preview</p>
          <p className="cs-solution-oneliner fade-up">Here is a walkthrough of the final design solution.</p>

          <div className="cs-video-wrap fade-up">
            <iframe
              src="https://www.youtube.com/embed/GDo7jKW1DII"
              title="Ithaca Soap App Showcase"
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

        {/* ── IMPACT ─────────────────────────────────────────────── */}
        <div className="cs-section" id="impact" ref={impactRef}>
          <p className="cs-section-label">Key Output</p>
          <div className="impact-row">
            <CountBox end={10} suffix="" inView={impactInView}
              label="User interviews across 3 target groups" />
            <CountBox end={3}  suffix="" inView={impactInView}
              label="Personas built from real research" />
            <CountBox end={3}  suffix="" inView={impactInView}
              label="Task scenarios created to map user goals to features" />
            <CountBox end={5}  suffix="" inView={impactInView}
              label="App screens fully designed and coded" />
            <CountBox end={1}  suffix="" inView={impactInView}
              label="Working & installable Vue.js app shipped and deployed" />
          </div>
        </div>

        {/* ── DESIGN PROCESS ─────────────────────────────────────── */}
        <div className="cs-section" id="design-process">
          <p className="cs-section-label">Design Process</p>

          <p className="process-intro fade-up">
            The process wasn't linear, each phase informed the next. The research uncovered needs, design translated them, and testing revealed what still needed work.
          </p>

          <div className="process-timeline">

            {/* 01 — LEFT — Research */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img"><img src={researchImg} alt="Research & field studies" className="clickable-image" onClick={() => setModalImage(researchImg)} /></div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">01</p>
                <h3 className="ps-title">Research</h3>
                <p className="ps-text">
                  When it came to research, we chose user interviews and field studies. Field studies, because we wanted
                  to see the relationship the users have with their products live. For example, one of our users explained
                  how she wanted the product to fit in a particular space in her shower, which we understood clearly
                  through field research.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 02 — RIGHT — Personas */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <img src={personasImg} alt="Persona cards" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <p className="ps-num">02</p>
                <h3 className="ps-title">Personas</h3>
                <p className="ps-text">
                  Once the initial user research was completed, we created three user personas to guide us through the
                  design process. By focusing on the three personas, we wanted to resist the temptation to design for
                  everyone.
                </p>
                <ul className="ps-sublist">
                  <li><strong>Priya Malhotra</strong>, a busy PhD student open to sustainable products if they're convenient and feel luxurious.</li>
                  <li><strong>Sharon Kim</strong>, a small business owner and eco-product advocate who values clear ingredients.</li>
                  <li><strong>Dr. Florence Morris</strong>, a professor with sensitive skin who values dermatologist-backed, biodegradable options.</li>
                </ul>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 03 — LEFT — Task Scenarios */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img"><img src={taskScenariosImg} alt="Task scenarios" className="clickable-image" onClick={() => setModalImage(taskScenariosImg)} /></div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">03</p>
                <h3 className="ps-title">Task Scenarios</h3>
                <p className="ps-text">
                  We brainstormed: What are the most important things that every user must be able to accomplish on this
                  app? Once that was figured out, we wrote down three task scenarios that helped provide context during
                  usability testing so users could engage with the interface and pretend to perform the intended tasks.
                </p>
                <div className="ps-scenario">
                  <p className="ps-scenario-label">Scenario 1 · Priya</p>
                  <p className="ps-scenario-text">
                    You're looking for a sustainable personal care product that combines multiple uses, is gentle on the
                    skin, and has a pleasant scent. Find a product on the app that meets these needs and learn more about
                    how to use it.
                  </p>
                </div>
                <div className="ps-scenario">
                  <p className="ps-scenario-label">Scenario 2 · Sharon</p>
                  <p className="ps-scenario-text">
                    You're ready to restock your favorite soap and are curious if there are any current offers or rewards
                    available. Explore the app to find a product you haven't tried before and discover how you can earn a
                    reward by participating in the community.
                  </p>
                </div>
                <div className="ps-scenario">
                  <p className="ps-scenario-label">Scenario 3 · Dr. Morris</p>
                  <p className="ps-scenario-text">
                    You want to know whether any of the products are safe for your skin and want to read more about the
                    company's values before deciding whether to buy. Use the app to evaluate product options and learn
                    about the company's sustainability efforts.
                  </p>
                </div>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 04 — RIGHT — Low-fi designs */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img"><img src={lowfiImg} alt="Low-fidelity sketches" className="clickable-image" onClick={() => setModalImage(lowfiImg)} /></div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">04</p>
                <h3 className="ps-title">Low-fi Designs</h3>
                <p className="ps-text">
                  Finally, when the design phase started, we connected the user goals to the features the app needed to
                  have the specific screens that they had to be placed in. The design ideation started with low-fidelity
                  paper sketches, and then, after three iterations, moved to a more mid-fidelity prototype coded with
                  Vue.js.
                </p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 05 — LEFT — Usability testing */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img"><img src={usabilityImg} alt="Usability testing" className="clickable-image" onClick={() => setModalImage(usabilityImg)} /></div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">05</p>
                <h3 className="ps-title">Usability Testing &amp; Iteration</h3>
                <p className="ps-text">
                  To evaluate the prototype efficiently, we used the task scenarios to understand how users reacted to the
                  product in a real-time setting.
                </p>
                <div className="ps-testing-grid">
                  <div className="ps-testing-item">
                    <p className="ps-testing-key">Participants</p>
                    <p className="ps-testing-val">3 individuals, each representing a core persona.</p>
                  </div>
                  <div className="ps-testing-item">
                    <p className="ps-testing-key">Device</p>
                    <p className="ps-testing-val">Testing was conducted on a mobile phone with the PWA installed to reflect a real-time setting.</p>
                  </div>
                  <div className="ps-testing-item">
                    <p className="ps-testing-key">Method</p>
                    <p className="ps-testing-val">Each participant completed all three task scenarios in a randomized order. No help or push was given during testing, and our real-time observations were documented.</p>
                  </div>
                  <div className="ps-testing-item">
                    <p className="ps-testing-key">Consent</p>
                    <p className="ps-testing-val">Verbal consent was obtained. No audio or video recordings were made. Notes were taken anonymously and stored securely.</p>
                  </div>
                </div>
                <p className="ps-text" style={{ marginTop: '.75rem' }}>
                  After the usability testing, we analyzed the insights to extract key findings like what worked well and
                  what needed improvement.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 06 — RIGHT — Hi-fi prototype */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <img src={hifiImg} alt="High-fidelity prototype" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <p className="ps-num">06</p>
                <h3 className="ps-title">Hi-fi Prototype</h3>
                <p className="ps-text">
                  We made revisions to the mid-fidelity prototype to reflect the issues raised during usability testing.
                </p>
                <p className="ps-text">
                  This high-fidelity prototype of the Ithaca Soap mobile app translates the brand's mission of
                  sustainability and ingredient transparency into a polished user-centered digital experience. Built using
                  Vue.js and Vuetify, the app simulates the full customer journey from discovering gentle, multi-use soaps
                  to engaging with community stories and local retail partners.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── FINAL DESIGN ───────────────────────────────────────── */}
        <div className="cs-section" id="final-design">
          <p className="cs-section-label">Final Design</p>
          <img src={homepageImg} alt="Ithaca Soap final design — homepage" className="fade-up clickable-image" onClick={() => setModalImage(homepageImg)} style={{ width: '100%', height: 'auto', display: 'block' }} />
          <p className="image-subtext">Click to view in detail</p>
          <img src={productImg} alt="Ithaca Soap final design — product" className="fade-up clickable-image" onClick={() => setModalImage(productImg)} style={{ width: '100%', height: 'auto', display: 'block', marginTop: '2rem' }} />
          <p className="image-subtext">Click to view in detail</p>
          <img src={communityImg} alt="Ithaca Soap final design — community" className="fade-up clickable-image" onClick={() => setModalImage(communityImg)} style={{ width: '100%', height: 'auto', display: 'block', marginTop: '2rem' }} />
          <p className="image-subtext">Click to view in detail</p>
          <img src={dealsImg} alt="Ithaca Soap final design — deals" className="fade-up clickable-image" onClick={() => setModalImage(dealsImg)} style={{ width: '100%', height: 'auto', display: 'block', marginTop: '2rem' }} />
          <p className="image-subtext">Click to view in detail</p>
        </div>

        {/* ── 3 THINGS LEARNED ───────────────────────────────────── */}
        <div className="cs-section" id="takeaways">
          <p className="cs-section-label">3 Things This Project Taught Me</p>
          <div className="learnings-list">
            <div className="learning-item fade-up">
              <span className="learning-n">1</span>
              <p className="learning-text">
                Field studies are really powerful in terms of observing the users in the context.
              </p>
            </div>
            <div className="learning-item fade-up">
              <span className="learning-n">2</span>
              <p className="learning-text">
                Designing for sustainability taught me a lot. This only works when the product doesn't ask users to
                compromise on anything they actually care about like price and comfort on their skin. So the design had to be really intentional about how to communicating sustainability without compromise.
              </p>
            </div>
            <div className="learning-item fade-up">
              <span className="learning-n">3</span>
              <p className="learning-text">
                The founder obviously knew her customers better than we did, and learning to design with that knowledge
                rather than around it made the product better.
              </p>
            </div>
          </div>
        </div>

        {/* ── SKILLS ─────────────────────────────────────────────── */}
        <div className="cs-section" id="skills">
          <p className="cs-section-label">Skills Gained Through This Project</p>
          <div className="skills-pills">
            {[
              'Semi-structured User Interviewing',
              'Field Studies',
              'Persona Development',
              'Task Scenario Mapping',
              'Vue.js Frontend Development',
              'UI Architecture (Vuetify)',
              'Scope Decision-Making',
              'AI Assisted Prototyping Methods',
              'Prototyping',
              'Client Communication'
            ].map(s => (
              <span key={s} className="skill-pill fade-up">{s}</span>
            ))}
          </div>
        </div>

        {/* ── THE PEOPLE BEHIND ALL THIS ─────────────────────────── */}
        <div className="cs-section" id="people">
          <p className="cs-section-label">The People Behind All This</p>
          <div className="people-img-wrap fade-up">
            <img src={teamImg} alt="Ithaca Soap team" />
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
          <a href="/google-cloud-case-study" className="see-next-card fade-up">
            <img src={googleMockup} alt="Google Cloud Capstone" className="see-next-img" />
            <div className="see-next-body">
              <h3 className="see-next-title">Google Cloud Capstone</h3>
              <p className="see-next-desc">Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users.</p>
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
