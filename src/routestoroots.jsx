import React, { useState, useEffect, useRef } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { CountBox, CardStack, RoadConnector } from './components/CaseStudyShared';
import googleMockup     from './assets/google-cloud/capstone-mockup.png';
import ithacaSoapMockup from './assets/ithaca-soap/ithaca-soap-mockup.png';
import routesMockup     from './assets/routes-to-roots/routes.png';
import girlAvatar       from './assets/routes-to-roots/girl.png';
import boyAvatar        from './assets/routes-to-roots/boy.png';
import figmaLogo        from './assets/tools/figma.png';
import miroLogo         from './assets/tools/Miro-Icon.png';
import canvaLogo        from './assets/tools/Canva.png';
import rLogo            from './assets/tools/R.png';
import chatgptLogo      from './assets/tools/OpenAI-black-monoblossom.png';
import photoshopLogo    from './assets/tools/Adobe Photoshop.png';
import interviewImg     from './assets/routes-to-roots/interview.JPG';
import probesImg        from './assets/routes-to-roots/item1.jpeg';
import probe2           from './assets/routes-to-roots/item2.jpg';
import probe3           from './assets/routes-to-roots/item3.jpeg';
import probe4           from './assets/routes-to-roots/item4.JPG';
import probe5           from './assets/routes-to-roots/item5.png';
import findings1         from './assets/routes-to-roots/method2data1.png';
import findings2         from './assets/routes-to-roots/method2data2.png';
import findings3         from './assets/routes-to-roots/method2data3.png';
import findings4         from './assets/routes-to-roots/method2data4.png';
import personaImg       from './assets/routes-to-roots/Persona.jpg';
import autoethnoImg     from './assets/routes-to-roots/Auto.png';
import ideationImg      from './assets/routes-to-roots/ideation.jpeg';
import finalDesignImg   from './assets/routes-to-roots/finaldesign.JPG';
import groupImg         from './assets/routes-to-roots/group.JPG';
import fd1              from './assets/routes-to-roots/fd1.png';
import fd2              from './assets/routes-to-roots/fd2.png';
import fd3              from './assets/routes-to-roots/fd3.png';
import fd4              from './assets/routes-to-roots/fd4.png';

/* ── Stacking iMessage Research-Question Cards ─────────────────── */
const QUESTION_CARDS = [
  { num: '01', msg: 'How do students currently experience and emotionally relate to their cultural hobbies while navigating academic life?' },
  { num: '02', msg: 'What barriers, emotional, institutional, or social, prevent consistent engagement in cultural hobbies?' },
  { num: '03', msg: 'How might digital or physical systems better support students in building a sustainable, emotionally reflective cultural hobby practice?' },
];

/* ── Main component ────────────────────────────────────────────── */
export default function RoutesToRoots() {
  const [impactInView, setImpactInView] = useState(false);
  const [activeSection, setActiveSection] = useState('context');
  const [modalImages, setModalImages] = useState(null); // array of srcs, or null
  const [modalIndex, setModalIndex] = useState(0);
  const impactRef = useRef(null);

  // Open the lightbox with one image or a navigable gallery
  const openModal = (imgs, idx = 0) => {
    setModalImages(Array.isArray(imgs) ? imgs : [imgs]);
    setModalIndex(idx);
  };
  const closeModal = () => setModalImages(null);
  const modalNext = (e) => { e.stopPropagation(); setModalIndex(i => (i + 1) % modalImages.length); };
  const modalPrev = (e) => { e.stopPropagation(); setModalIndex(i => (i - 1 + modalImages.length) % modalImages.length); };

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
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => { revObs.disconnect(); impObs.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  /* keyboard navigation for the lightbox */
  useEffect(() => {
    if (!modalImages) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setModalImages(null);
      else if (modalImages.length > 1 && e.key === 'ArrowRight') setModalIndex(i => (i + 1) % modalImages.length);
      else if (modalImages.length > 1 && e.key === 'ArrowLeft')  setModalIndex(i => (i - 1 + modalImages.length) % modalImages.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalImages]);

  const skipToFinal = () =>
    document.getElementById('final-design')?.scrollIntoView({ behavior: 'smooth' });

  const TOOLS = [
    { src: figmaLogo,     name: 'Figma'     },
    { src: miroLogo,      name: 'Miro'      },
    { src: canvaLogo,     name: 'Canva'     },
    { src: rLogo,         name: 'R'         },
    { src: chatgptLogo,   name: 'ChatGPT'   },
    { src: photoshopLogo, name: 'Photoshop' },
  ];

  const TEAM = [
    { name: 'Ashley Huang',       avatar: girlAvatar },
    { name: 'Carrie Kim',         avatar: girlAvatar },
    { name: 'Hrishika Jotwani',   avatar: girlAvatar },
    { name: 'Shreayaa Srinivasan', avatar: girlAvatar },
    { name: 'Sumit Gawali',       avatar: boyAvatar  },
  ];

  const sidebarSections = [
    { id: 'context',          label: 'Context'           },
    { id: 'overview',         label: 'Overview'          },
    { id: 'problem',          label: 'Problem'           },
    { id: 'solution-preview', label: 'Solution'          },
    { id: 'impact',           label: 'Key Outputs'       },
    { id: 'design-process',   label: 'Research Process'   },
    { id: 'final-design',     label: 'Final Design'      },
    { id: 'not-to-build',     label: 'Decisions Made'    },
    { id: 'takeaways',        label: '3 Lessons Learned' },
    { id: 'skills',           label: 'Skills Built'      },
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
          max-width: 500px;
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
          display: block;
        }
        .cs-solution-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin: 1.25rem 0 1.5rem;
          max-width: none;
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
          grid-template-columns: 1fr;
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
          width: 48px;
          height: 48px;
          object-fit: contain;
        }
        .cs-team-role-label {
          font-family: 'DM Sans', sans-serif;
          font-size: .8rem;
          font-weight: 600;
          color: #2d2d2d;
          line-height: 1.25;
          text-align: center;
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
          background: rgba(198,236,201,0.55);
          padding: 0.12rem 0.5rem;
          border-radius: 9999px;
          display: inline-block;
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

        /* ── STACKING iMESSAGE CARDS ──────────────────────────── */
        /* base styles live in components/caseStudy.css; wider bubble
           here because the research questions are longer */
        .psc-bubble { max-width: 460px; }

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
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin: 2.5rem 0 2rem;
        }
        .impact-note {
          font-size: 1.1rem;
          color: #e27396;
          font-style: normal;
          font-family: ui-serif, Georgia, serif;
          font-weight: 500;
          margin-top: 1.5rem;
          line-height: 1.6;
          border-left: 4px solid #000;
          padding-left: 1rem;
          margin-left: 0.5rem;
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
        .process-timeline > .process-step:nth-child(3) .ps-img,
        .process-timeline > .process-step:nth-child(7) .ps-img,
        .process-timeline > .process-step:nth-child(13) .ps-img {
          max-width: 85%;
        }

        /* sub-content inside a process step */
        .ps-list-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: .95rem;
          color: #1a1a1a;
          margin-top: .5rem;
        }
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
        .fd-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }
        .fd-item {
          width: 100%;
        }
        .fd-item img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── NOT TO BUILD ──────────────────────────────────────── */
        .ntb-list { display: flex; flex-direction: column; gap: 2.25rem; margin-top: 1rem; }
        .ntb-item-title {
          font-family: ui-serif, Georgia, serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: #e27396;
          margin-bottom: .65rem;
        }
        .ntb-desc {
          font-size: 1rem;
          color: #444;
          line-height: 1.85;
          font-family: 'DM Sans', sans-serif;
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

        /* ── PROBLEM ─────────────────────────────────────────── */
        .problem-lead { margin-bottom: 1rem; }

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

        /* ── THE PEOPLE BEHIND ALL THIS ────────────────────────── */
        .people-img-wrap {
          width: 100%;
          max-width: 900px;
          margin: 2rem auto;
        }
        .people-img-wrap img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,.14);
          display: block;
        }

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
        .image-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 9999px;
          border: none;
          background: rgba(255,255,255,.9);
          color: #2d2d2d;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,.25);
          transition: background .2s, transform .2s;
          z-index: 2;
        }
        .image-modal-nav svg { width: 22px; height: 22px; }
        .image-modal-nav.prev { left: -23px; }
        .image-modal-nav.next { right: -23px; }
        .image-modal-nav:hover { background: #e27396; color: white; transform: translateY(-50%) scale(1.08); }
        .image-modal-counter {
          position: absolute;
          bottom: -34px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: .85rem;
          letter-spacing: .05em;
        }
        @media (max-width: 600px) {
          .image-modal-nav.prev { left: 6px; }
          .image-modal-nav.next { right: 6px; }
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
          .cs-oneliner       { font-size: 1.2rem; }
          .impact-row        { grid-template-columns: repeat(2, 1fr); }
          .process-step      { grid-template-columns: 1fr; gap: 1.5rem; }
          .cs-the-end-text   { font-size: 3.5rem; }
        }
        @media (max-width: 1024px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-bold-intro    { font-size: 1.15rem; }
          .cs-oneliner      { font-size: 18px; }
          .cs-solution-oneliner { font-size: 18px; }
          .cs-meta-row-top  { grid-template-columns: 1fr; }
          .cs-meta-row-mid  { grid-template-columns: 1fr; }
          .cs-meta-row-tools{ grid-template-columns: 1fr; }
          .impact-row       { grid-template-columns: repeat(3, 1fr); }
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
        <img src={routesMockup} alt="Routes to Roots — Final Product" className="cs-hero-img" />
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
            {['UX Research', 'Interaction Design', 'Cultural Probes', 'Auto Ethnography', 'Diary Studies'].map(t => (
              <span key={t} className="cs-tag">{t}</span>
            ))}
          </div>

          {/* One-liner */}
          <p className="cs-sublabel fade-up">What is this project?</p>
          <p className="cs-oneliner fade-up">
            Designed a research-driven solution to support students who want to practice their cultural hobbies and manage them along with hectic academic schedules.
          </p>

          {/* Metadata grid */}
          <div className="cs-meta fade-up">
            <div className="cs-meta-row cs-meta-row-top">
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Institution</div>
                <div className="cs-meta-val">Cornell University</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-key">My Role</div>
                <div className="cs-meta-val">UX Researcher &amp; Interaction Designer</div>
              </div>
              <div className="cs-meta-cell">
                <div className="cs-meta-key">Timeline</div>
                <div className="cs-meta-val">13 Weeks · May 2025</div>
              </div>
            </div>
            <div className="cs-meta-row cs-meta-row-mid">
              <div className="cs-meta-cell cs-meta-team">
                <div className="cs-meta-key">Team</div>
                <div className="cs-meta-team-avatars" aria-label="Project team">
                  {TEAM.map(member => (
                    <div key={member.name} className="cs-meta-team-role">
                      <img src={member.avatar} alt="" className="cs-team-avatar" />
                      <div className="cs-team-role-label">{member.name}</div>
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
              Cornell brings together students from culturally diverse backgrounds.
            </p>
            <p>
              And somewhere between orientation week and finals season, a lot of them quietly stop doing the things that they grew up loving, traditional cooking, dance, music, art, the cultural hobbies that tied them to home.
            </p>
            <p>
              It is because they struggle to maintain these hobbies while navigating the demands of university life. Because there was no time, no space, no community, and honestly, no easy way to find any of those things.
            </p>
            <p>
              Now you might think that there are cultural clubs one could join. But they're not built for this. To join most cultural clubs, you need to already be skilled. They're not designed for the student who grew up folding dumplings with their grandmother, or who learned Bharatanatyam basics as a child but never trained formally, someone who loves the practice, feels culturally grounded by it, and wants to get back to it, but has no entry point. There was no one holistic system where you could pursue your own cultural hobby at your own level, stumble into someone else's tradition, and feel welcome doing either. That gap is what we were designing for.
            </p>
            <p>
              Over the course of this project, we ran contextual interviews, designed and distributed physical cultural probe kits to participants, conducted an autoethnographic research within our research team, synthesized everything through affinity mapping and personas, and landed on a design concept. This case study is a gist of my process throughout this project.
            </p>
          </div>
        </div>

        {/* ── PROBLEM ────────────────────────────────────────────── */}
        <div className="cs-section" id="problem">
          <p className="cs-section-label">Problem</p>
          <div className="cs-body">
            <p className="cs-bold-intro fade-up problem-lead">
              Once the problem was clear, we put forth a list of research questions to guide us through the research process.
            </p>
          </div>

          <CardStack cards={QUESTION_CARDS} />
        </div>

        {/* ── SOLUTION PREVIEW ───────────────────────────────────── */}
        <div className="cs-section" id="solution-preview">
          <p className="cs-section-label">Solution Preview</p>
          <p className="cs-solution-oneliner fade-up">Here is a walkthrough of the final design solution.</p>

          <div className="cs-video-wrap fade-up">
            <iframe
              src="https://www.youtube.com/embed/NbugF3D0B9k"
              title="Routes to Roots — Final Design Demo"
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

        {/* ── KEY OUTPUTS ────────────────────────────────────────── */}
        <div className="cs-section" id="impact" ref={impactRef}>
          <p className="cs-section-label">Key Outputs</p>
          <div className="impact-row">
            <CountBox end={10} suffix="+" inView={impactInView}
              label="Cornell students recruited across cultural clubs as research participants" />
            <CountBox end={2}  suffix="" inView={impactInView}
              label="Complementary research methods in this mixed-method research study (cultural probes and autoethnography)" />
            <CountBox end={1}  suffix="" inView={impactInView}
              label="High-fidelity prototype presented to the class" />
          </div>
          <p className="impact-note fade-up">
            The most meaningful impact was winning "Best Project for Social Impact and Uniqueness" amongst 75+ students.
          </p>
        </div>

        {/* ── RESEARCH PROCESS ────────────────────────────────────── */}
        <div className="cs-section" id="design-process">
          <p className="cs-section-label">Research Process</p>

          <p className="process-intro fade-up">
            The research process was messy and interesting. Every diary study entry surfaced the emotional depth of the problem, and every research method revealed something we had overlooked.
          </p>

          <div className="process-timeline">

            {/* 01 — LEFT — Contextual Interviews */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={interviewImg} alt="Contextual interviews" />
                </div>
                <p className="ps-num">01</p>
                <h3 className="ps-title">Contextual Interviews</h3>
                <p className="ps-text">
                  We started off the research process by interviewing and observing students who practiced cultural hobbies. We wanted to understand what these hobbies meant to the users and analyze the space that we had to design for.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 02 — RIGHT — Cultural Probes & Diary Studies */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={probesImg} alt="Cultural probe kit" className="clickable-image" onClick={() => openModal([probesImg, probe2, probe3, probe4, probe5], 0)} />
                </div>
                <p className="image-subtext">Click to browse the full probe kit →</p>
                <p className="ps-num">02</p>
                <h3 className="ps-title">Method: Cultural Probes &amp; Diary Studies</h3>
                <p className="ps-text">
                  <strong>Why?</strong> The first method was a cultural probe kit. We wanted participants to show us things they couldn't easily say out loud. So we chose a cultural probe kit with scrapbooks, postcards, and timeline maps, low-pressure creative materials that let emotions surface naturally, without the awkwardness of a formal interview. Alongside that, we had them fill out daily diary prompts for a week, capturing their actual routines in real time.
                </p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 03 — LEFT — Persona creation */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={personaImg} alt="Persona" className="clickable-image" onClick={() => openModal(personaImg)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">03</p>
                <h3 className="ps-title">Persona Creation</h3>
                <p className="ps-text">
                  Once we had completed probe kits and conducted exit interviews with participants. The findings from method 1 helped us weave a persona representing the user group we were solving for.
                </p>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 04 — RIGHT — AutoEthnography */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={autoethnoImg} alt="Autoethnography study" className="clickable-image" onClick={() => openModal(autoethnoImg)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">04</p>
                <h3 className="ps-title">Method: Autoethnography</h3>
                <p className="ps-text">
                  <strong>Why?</strong> Every person on our team came from a culturally diverse background, and most of us had felt that quiet drift away from our own cultural practices at some point in college. So it made sense to turn inward. We ran an autoethnography study after Method 1, making ourselves the participants. We genuinely fit the people we were designing for, and there's something you can only learn from your own honest experience that no interview script can pull out of someone else.
                </p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 05 — LEFT — Findings */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={findings4} alt="Findings & synthesis" className="clickable-image" onClick={() => openModal([findings4, findings1, findings2, findings3], 0)} />
                </div>
                <p className="image-subtext">Click to browse the findings →</p>
                <p className="ps-num">05</p>
                <h3 className="ps-title">Findings</h3>
                <p className="ps-list-label">The cultural probe method revealed:</p>
                <ul className="ps-sublist">
                  <li>Cultural hobbies help the students to sustain a connection to their heritage and strengthen social bonds.</li>
                  <li>Cultural hobbies act as anchors of self-identity and aspiration.</li>
                  <li>Cultural engagement is often deprioritized in hectic academic schedules</li>
                </ul>
                <p className="ps-list-label">The autoethnography study revealed:</p>
                <ul className="ps-sublist">
                  <li>Most apps lacked built-in motivators, resulting in self-driven participation.</li>
                  <li>Participants desired tools for reflection and growth tracking.</li>
                  <li>Cultural connection fluctuated with the tone and depth of content.</li>
                </ul>
              </div>
              <div />
            </div>

            <RoadConnector flip={false} />

            {/* 06 — RIGHT — Design Ideation */}
            <div className="process-step">
              <div />
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={ideationImg} alt="Design ideation sketches" className="clickable-image" onClick={() => openModal(ideationImg)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">06</p>
                <h3 className="ps-title">Design Ideation</h3>
                <p className="ps-text">
                  We sketched low-fidelity sketches of multiple concepts, including apps, community boards, and event platforms. A competitor analysis of existing hobby apps (YouTube, Duolingo-style trackers, cooking platforms) revealed they all prioritized productivity over cultural connection.
                </p>
                <p className="ps-text"><strong>We decided not to build another app.</strong></p>
              </div>
            </div>

            <RoadConnector flip={true} />

            {/* 07 — LEFT — Final Design concept */}
            <div className="process-step">
              <div className="ps-content fade-up">
                <div className="ps-img">
                  <img src={finalDesignImg} alt="Routes to Roots kiosk concept" className="clickable-image" onClick={() => openModal(finalDesignImg)} />
                </div>
                <p className="image-subtext">Click to view in detail</p>
                <p className="ps-num">07</p>
                <h3 className="ps-title">Final Design</h3>
                <p className="ps-text">
                  We developed a final concept, Routes to Roots, a physical kiosk placed in visible spaces across the Cornell campus (eg, Duffield, Sage Atrium). It offers students an accessible, reflective way to rediscover and connect with their cultural hobbies through peers, events, and visible spaces. The kiosk steps in to fill the gaps of:
                </p>
                <ul className="ps-sublist">
                  <li><strong>Visibility:</strong> Making culturally meaningful hobbies public and discoverable.</li>
                  <li><strong>Agency:</strong> Empowering students to define and share their own practices.</li>
                  <li><strong>Emotional resonance:</strong> Prioritizing curiosity and reflection over achievement.</li>
                </ul>
              </div>
              <div />
            </div>

          </div>
        </div>

        {/* ── FINAL DESIGN ───────────────────────── */}
        <div className="cs-section" id="final-design">
          <p className="cs-section-label">Final Design</p>
          <div className="fd-grid fade-up">
            <div className="fd-item">
              <img src={fd1} alt="Final design concept 1" className="clickable-image" onClick={() => openModal(fd1)} />
              <p className="image-subtext">Click to view in detail →</p>
            </div>
            <div className="fd-item">
              <img src={fd2} alt="Final design concept 2" className="clickable-image" onClick={() => openModal(fd2)} />
              <p className="image-subtext">Click to view in detail →</p>
            </div>
            <div className="fd-item">
              <img src={fd3} alt="Final design concept 3" className="clickable-image" onClick={() => openModal(fd3)} />
              <p className="image-subtext">Click to view in detail →</p>
            </div>
            <div className="fd-item">
              <img src={fd4} alt="Final design concept 4" className="clickable-image" onClick={() => openModal(fd4)} />
              <p className="image-subtext">Click to view in detail →</p>
            </div>
          </div>
        </div>

        {/* ── WHAT WE DECIDED NOT TO BUILD ───────────────────────── */}
        <div className="cs-section" id="not-to-build">
          <p className="cs-section-label">What We Decided Not to Build &amp; Why</p>
          <div className="ntb-list">
            <div className="ntb-item fade-up">
              <h3 className="ntb-item-title">A physical cultural center</h3>
              <p className="ntb-desc">
                One concept we seriously explored was a dedicated campus space with different rooms dedicated to different hobbies: instruments you could borrow, art supplies, and cooking equipment. The idea was that if you used to play violin as a kid but don't have one here, you shouldn't have to buy a new one just to reconnect with something that's always been part of you. It was a compelling concept. But we kept coming back to the same problem: visibility. Cornell is already full of resources that students don't know about. A cultural center, however well-equipped, risks becoming just another thing that exists on campus without reaching the people who need it most, exactly like the cultural clubs we started this project trying to understand. So we let it go.
              </p>
            </div>
            <div className="ntb-item fade-up">
              <h3 className="ntb-item-title">A mobile app</h3>
              <p className="ntb-desc">
                Our autoethnography showed clearly that apps don't sustain cultural engagement on their own. Emotional connection doesn't come from an app; it comes from a triggering memory. An app would have replicated the same hollow experience we were trying to fix.
              </p>
            </div>
          </div>
        </div>

        {/* ── 3 THINGS LEARNED ───────────────────────────────────── */}
        <div className="cs-section" id="takeaways">
          <p className="cs-section-label">3 Things That This Project Taught Me</p>
          <div className="learnings-list">
            <div className="learning-item fade-up">
              <span className="learning-n">1</span>
              <p className="learning-text">
                <strong>Design beyond usability.</strong> This project shifted something for me. I'm used to asking "Is this intuitive?" or "Can users complete the task?" But Routes to Roots asked a completely different question: Does this make someone feel like they belong? Designing for that, for the feeling of being seen, required me to slow down and sit with the research in a way I hadn't before. It was uncomfortable in a good way.
              </p>
            </div>
            <div className="learning-item fade-up">
              <span className="learning-n">2</span>
              <p className="learning-text">
                <strong>Mixed method research is highly useful when used the right way.</strong> Cultural probes let participants show us things they couldn't have said in an interview, grief about lost hobbies, longing in a postcard, pride in a scrapbook drawing. Autoethnography let us feel those same things ourselves. Neither would have been enough on its own. Together, they gave us a kind of view of the problem that I think showed up in the depth of our final design.
              </p>
            </div>
            <div className="learning-item fade-up">
              <span className="learning-n">3</span>
              <p className="learning-text">
                <strong>Not only this project but this course taught me that the most impactful design is not always an app or something digital.</strong> That sounds obvious when I say it out loud, but it really wasn't during the project. Every design instinct pulls you toward a screen. What changed for us was paying attention to where students actually were, walking through Duffield, sitting in Sage Atrium, passing through spaces they use every single day. A kiosk in those spaces does something an app notification never could: it catches you when you weren't looking for it.
              </p>
            </div>
          </div>
        </div>

        {/* ── SKILLS ─────────────────────────────────────────────── */}
        <div className="cs-section" id="skills">
          <p className="cs-section-label">Skills Gained Through This Project</p>
          <div className="skills-pills">
            {[
              'Cultural Probes Design',
              'Diary Study',
              'Autoethnography',
              'Affinity Mapping',
              'Persona Development',
              'Interaction Design',
              'Kiosk UX',
              'Figma Prototyping',
              'Qualitative Data Analysis',
              'R (data visualization)',
              'Physical Research Artifact Design'
            ].map(s => (
              <span key={s} className="skill-pill fade-up">{s}</span>
            ))}
          </div>
        </div>

        {/* ── THE PEOPLE BEHIND ALL THIS ────────────────────────── */}
        <div className="cs-section" id="people">
          <p className="cs-section-label">The People Behind All This</p>
          <div className="people-img-wrap fade-up">
            <img src={groupImg} alt="Routes to Roots team" />
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
          <a href="/ithaca-soap-case-study" className="see-next-card fade-up">
            <img src={ithacaSoapMockup} alt="Ithaca Soap Redesign" className="see-next-img" />
            <div className="see-next-body">
              <h3 className="see-next-title">Ithaca Soap Redesign</h3>
              <p className="see-next-desc">Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap.</p>
            </div>
          </a>
        </div>
      </div>

      <SiteFooter />

      {/* Image Modal / Gallery */}
      {modalImages && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeModal}>×</button>
            {modalImages.length > 1 && (
              <button className="image-modal-nav prev" onClick={modalPrev} aria-label="Previous image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            )}
            <img src={modalImages[modalIndex]} alt="Enlarged view" />
            {modalImages.length > 1 && (
              <button className="image-modal-nav next" onClick={modalNext} aria-label="Next image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            )}
            {modalImages.length > 1 && (
              <div className="image-modal-counter">{modalIndex + 1} / {modalImages.length}</div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
