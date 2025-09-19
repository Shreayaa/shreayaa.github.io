import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight, Mail, Linkedin, Dribbble } from 'lucide-react';
import logo from './assets/general/profile.png';
import shreayaaPhoto from './assets/general/shreayaa.png';
import About from './About';
import Playground from './playground';
import Work from './work';
import GoogleCloudCaseStudy from './google';
import IthacaSoap from './ithacaSoap';
import RoutesToRoots from './routestoroots';
import IName from './iName';
import EcoCartCaseStudy from './ecoCart';
import RShinyCaseStudy from './rShiny';

const designPrinciples = [
  {
    description: (
      <>
        <q>I ground design in mixed-method research.</q>
        <br />
        <br />
        I’ve used methods like cultural probes, diary studies and auto-ethnography to uncover hidden user needs. 
      </>
    ),
  },
  {
    description: (
      <>
        <q>I align user needs with business goals.</q>
        <br />
        <br />
        By prioritizing features based on real pain points and feasibility, I create designs that are purposeful and effective.
      </>
    ),
  },
  {
    description: (
      <>
        <q>I design realistic solutions informed by code.</q>
        <br />
        <br />
        With a CS background, I prototype with technical constraints in mind and easily collaborate with engineers.
      </>
    ),
  },
  {
    description: (
      <>
        <q>I design for social impact.</q>
        <br />
        <br />
        My work focuses on inclusive experiences that foster belonging, respect identity, and make everyday interactions more equitable.
      </>
    ),
  },
  {
    description: (
      <>
        <q>I believe in iteration as progress.</q>
        <br />
        <br />
        Through repeated cycles of design and feedback, I’ve seen how even small changes improve usability.
      </>
    ),
  },
  {
    description: (
      <>
        <q>I have mentored and taught students.</q>
        <br />
        <br />
        As a teaching specialist, I’ve supported 250+ students in design practices that helped them grow with confidence.
      </>
    ),
  },
];


function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

const words = React.useMemo(() => ["designer.", "researcher.", "strategist."], []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % designPrinciples.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

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

  return (
    <div className="app">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

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

        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .custom-logo {
          height: 3.5rem;
          width: auto;
          object-fit: contain;
          display: inline-block;
          transition: transform 0.3s ease, filter 0.3s ease;
          vertical-align: middle;
        }

        .custom-logo:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px rgba(226, 115, 150, 0.4));
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-links a:hover {
          transform: scale(1.05);
          color: var(--rose-pompadour);
        }

        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: var(--rose-pompadour);
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-links a:hover:after {
          width: 100%;
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
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .typewriter {
          color: var(--rose-pompadour);
          position: relative;
        }

        .hero-text p {
          font-size: 1.4rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 550px;
          line-height: 1.7;
          font-weight: 400;
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
          align-items: flex-start;
          justify-content: flex-start;
          margin-top: -150px;
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

        .hero-photo img {
          width: clamp(350px, 45vw, 480px);
          height: auto;
          object-fit: contain;
          object-position: center bottom;
          transition: all 0.4s ease;
        }

        .hero-photo img:hover {
          transform: scale(1.05);
        }

        .skills {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          padding: 2rem 0;
          position: relative;
          border-top: 1px solid rgba(226, 115, 150, 0.1);
          border-bottom: 1px solid rgba(226, 115, 150, 0.1);
        }

        .skills-container {
          position: relative;
          height: 50px;
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
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--text-primary);
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(226, 115, 150, 0.15);
          transition: all 0.3s ease;
          font-family: 'Roboto', sans-serif;
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.1);
          flex-shrink: 0;
          min-width: max-content;
        }

        .skills-strip span:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.2);
          background: rgba(255, 255, 255, 1);
          border-color: var(--rose-pompadour);
        }

        @keyframes scrollSkills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .design-section {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          position: relative;
          padding: 7rem 0;
        }

        .design-content {
          display: flex;
          align-items: flex-start;
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
          font-size: 1.3rem;
          color: var(--text-secondary);
          line-height: 1.8;
          font-weight: 400;
          margin-bottom: 1.5rem;
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

        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
        }

        .footer-content {
          max-width: 650px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-message {
          margin-bottom: 2rem;
        }

        .footer-message h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          padding: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-links a:hover {
          transform: translateY(-2px) scale(1.1);
        }

        .footer-icon {
          width: 28px;
          height: 28px;
          fill: white;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-links a:hover .footer-icon {
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
          font-weight: 400;
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

          .footer-message h3 {
            font-size: 1.2rem;
          }

          .footer-links {
            gap: 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .content-container {
            padding: 0 1rem;
          }
          
          .header-content {
            padding: 1rem 0;
          }
          
          .nav-links {
            gap: 1rem;
          }
          
          .nav-links a {
            font-size: 0.9rem;
          }

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

          .custom-logo {
            height: 3.5rem;
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

          .footer-message h3 {
            font-size: 1.1rem;
          }

          .footer-links {
            gap: 1rem;
          }

          .footer-icon {
            width: 24px;
            height: 24px;
          }
        }
        `}
      </style>

      {/* HEADER */}
      <header className="header">
        <div className="content-container">
          <div className="header-content">
            <a href="/portfolio/">
              <div className="logo">
                <img src={logo} alt="Shreayaa Srinivasan Logo" className="custom-logo" />
              </div>
            </a>
            <nav className="nav-links">
              <a href="/work">WORK</a>
              <a href="/playground">PLAYGROUND</a>
              <a href="/about">ABOUT</a>
              <a href="https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                RESUME
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="content-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Hi, I'm Shreayaa.{" "}
                <span className="typewriter">
                  I'm a {typewriterText}
                  <span style={{borderRight: '2px solid', animation: 'blink 1s infinite'}}>|</span>
                </span>
              </h1>
              <p>
                I'm a user experience designer who is curious about how design influences human behavior in the real world. I design thoughtful user experiences that balance user needs with business strategy.
              </p>
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
      <section className="skills">
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
      </section>

      {/* IMPROVED DESIGN PRINCIPLES SECTION */}
      <section className="design-section">
        <div className="content-container">
          <div className="design-content">
            <div className="design-left">
              <h2>Who am I as a designer?</h2>
              <p>
                Coming from a background in both computer science and user experience design, I bring a unique blend of technical expertise and design thinking. I design with empathy and purpose.
              </p>
              <p>
                I am comfortable working closely with researchers, engineers, and stakeholders to shape ideas into products people trust and enjoy.
              </p>
            </div>
            
            <div className="design-gallery">
              <div 
                className="gallery-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {designPrinciples.map((principle, index) => {
                  let className = 'gallery-card';
                  
                  if (index === currentSlide) {
                    className += ' active';
                  } else if (index === (currentSlide - 1 + designPrinciples.length) % designPrinciples.length) {
                    className += ' prev';
                  } else if (index === (currentSlide + 1) % designPrinciples.length) {
                    className += ' next';
                  }
                  
                  return (
                    <div key={index} className={className}>
                      <div className="card-content">
                        <h3>{principle.title}</h3>
                        <p style={{marginBottom: '1.2rem'}}>
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-message">
            <h3>Like my work? Hit me up with a hi 😊</h3>
          </div>
          
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://medium.com/@shreayaasrini" target="_blank" rel="noopener noreferrer" title="Medium">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a href="https://dribbble.com/shreayaa-srinivasan" target="_blank" rel="noopener noreferrer" title="Dribbble">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
            </a>
            <a href="mailto:shreayaasrini@gmail.com" title="Email">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"/>
              </svg>
            </a>
          </div>

          <p className="footer-copyright">Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/playground" element={<Playground />} /> 
        <Route path="/work" element={<Work />} /> 
        <Route path="/google-cloud-case-study" element={<GoogleCloudCaseStudy />} /> 
        <Route path="/ithaca-soap-case-study" element={<IthacaSoap />} />
        <Route path="/routes-to-roots-case-study" element={<RoutesToRoots />} />
        <Route path="/ecocart-case-study" element={<EcoCartCaseStudy />} />
        <Route path="/iname-case-study" element={<IName />} />
        <Route path="/rshiny-case-study" element={<RShinyCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;