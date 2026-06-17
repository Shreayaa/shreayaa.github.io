import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import shreayaaPhoto from './assets/general/heroImage.png';
import vennImage from './assets/general/Venn.png';
import trophy from './assets/general/trophy.png';
import gillyPhoto from './assets/general/Gilly.jpeg';
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

  return (
    <div className="app">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

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

        .skills-container {
          position: relative;
          height: 44px; /* slightly shorter */
          display: flex;
          align-items: center;
        }

        .skills-strip {
          display: flex;
          white-space: nowrap;
          animation: scrollSkills 120s linear infinite;
          gap: 3rem;
          align-items: center;
          width: max-content;
        }

        .skills-strip span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-secondary);
          padding: 0.4rem 1.1rem; /* tighter vertical padding */
          background: rgba(255, 255, 255, 0.98);
          border-radius: 9999px !important;
          -webkit-border-radius: 9999px !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-clip: padding-box;
          border: 1px solid rgba(226, 115, 150, 0.12);
          transition: transform 180ms ease, box-shadow 180ms ease;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 6px 18px rgba(226, 115, 150, 0.09);
          flex-shrink: 0;
          min-width: max-content;
          line-height: 1;
          transform: translateZ(0);
        }

        .skills-strip span:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(226, 115, 150, 0.14);
        }

        @keyframes scrollSkills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

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

        .testimonial-card {
          display: flex;
          align-items: flex-start;
          gap: 3.5rem;
          padding: 3rem 0;
          border-top: 1px solid rgba(45, 45, 45, 0.12);
          border-bottom: 1px solid rgba(45, 45, 45, 0.12);
        }

        .testimonial-quote-side {
          flex: 1;
        }

        .testimonial-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-primary);
          margin-bottom: 1.75rem;
        }

        .tq-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        .testimonial-attribution {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .testimonial-name {
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .testimonial-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .testimonial-photo-side {
          flex-shrink: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 0.5rem;
        }

        .testimonial-photo {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          background: linear-gradient(135deg, var(--mimi-pink), var(--light-blue));
          border: 4px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 12px 30px rgba(197, 85, 119, 0.15);
        }

        /* Hand-drawn annotation pointing from the photo */
        .testimonial-annotation {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          width: 262px;
          pointer-events: none;
        }

        .testimonial-arrow {
          flex-shrink: 0;
          width: 64px;
          height: auto;
          margin-top: -4px;
          color: #1a1a1a;
        }

        .testimonial-annotation-text {
          flex-shrink: 0;
          width: 190px;
          font-family: 'Shadows Into Light Two', cursive;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.2;
          text-align: center;
          color: #1f1f1f;
          transform: rotate(-3deg);
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

          .testimonial-card {
            flex-direction: column-reverse;
            align-items: center;
            gap: 2rem;
            text-align: center;
            padding: 2.5rem 0;
          }

          .testimonial-attribution {
            align-items: center;
          }

          .testimonial-photo-side {
            align-items: center;
            margin-top: 0;
          }

          .testimonial-photo {
            width: 130px;
            height: 130px;
          }

          .testimonial-annotation {
            display: none;
          }

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

          .skills-strip span {
            font-size: 0.9rem;
            padding: 0.7rem 1.2rem;
          }

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
                  <span style={{borderRight: '2px solid', animation: 'blink 1s infinite'}}>|</span>
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
      <section className="skills" style={{position: 'relative'}}>
        <div className="skills-inner">
          <div className="skills-container">
            <div className="skills-strip">
              {[
                ...["Prototyping", "Wireframing", "Interaction Design", "Accessibility", "Python",
                   "Javascript", "CSS", "HTML", "Figma", "Framer", "Webflow", "Sketch", "R Studio",
                   "Problem Solving", "Leadership", "User Research", "Design Systems", "A/B Testing"],
                ...["Prototyping", "Wireframing", "Interaction Design", "Accessibility", "Python",
                   "Javascript", "CSS", "HTML", "Figma", "Framer", "Webflow", "Sketch", "R Studio",
                   "Problem Solving", "Leadership", "User Research", "Design Systems", "A/B Testing"]
              ].map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

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

          {/* TESTIMONIAL (under Routes to Roots) */}
          <section
            ref={testimonialRef}
            className={`testimonial-section${testimonialInView ? ' in-view' : ''}`}
            aria-label="Testimonial"
          >
            <div className="testimonial-card">
              <div className="testimonial-quote-side">
                <p className="testimonial-quote">
                  &ldquo;I have witnessed her journey and growth toward becoming an exceptional
                  UX professional. Her projects were exemplary &mdash; literally &mdash;{' '}
                  <span className="tq-highlight">I have been using her projects as examples in the following semesters</span>. Her designs
                  were grounded in systematic, in-depth user research that followed ethical
                  principles. Shreayaa is a remarkably effective and{' '}
                  <span className="tq-highlight">proactive collaborator</span>. She was
                  the de-facto driver behind the group projects, with{' '}
                  <span className="tq-highlight">high work ethic and endless positive can-do attitude</span>. I have no doubt that Shreayaa will make a
                  strong, long-lasting impact in any organization that she will join.&rdquo;
                </p>
                <div className="testimonial-attribution">
                  <span className="testimonial-name">&mdash; Gilly Leshed</span>
                  <span className="testimonial-role">Teaching Professor, Cornell University</span>
                </div>
              </div>
              <div className="testimonial-photo-side">
                <img src={gillyPhoto} alt="Gilly Leshed" className="testimonial-photo" />
                <span className="testimonial-annotation-text">
                  Words from one of the most talented professors I learnt from
                </span>
              </div>
            </div>
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