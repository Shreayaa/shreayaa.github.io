import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from './assets/general/profile.png';

const timelineData = [
  {
    description: [
      <span style={{display: 'block', marginBottom: '1em'}}>August 2020 rolls around, and there I am stepping foot in the beautiful UMass Amherst campus! Interested in tech and psychology I decided to double major in Computer Science and Psychology.</span>,
      <span style={{display: 'block', marginBottom: '1em'}}></span>,
      <span style={{display: 'block', marginBottom: '1em'}}>Why choose one when you can have both, right?</span>
    ],
    position: "right",
    watermark: "🎓",
    isFirst: true,
    year: "Aug 2020",
    location: "University of Massachusetts Amherst",
  },
  {
    description: [
      <span style={{display: 'block', marginBottom: '1em'}}>Two years into my bachelor's journey, I got my first job yayyy!!!</span>,
      <span style={{display: 'block', marginBottom: '1em'}}></span>,
      <span style={{display: 'block', marginBottom: '1em'}}>Being an RA taught me how to create community. From late-night crisis management to organizing fun floor events, this experience taught me how to understand people's needs and create environments where everyone could thrive.</span>
    ],
    position: "left",
    watermark: "💼",
    year: "Aug 2022",
    jobTitle: "Resident Assistant",
  },
  {
    description: [
      <span style={{display: 'block', marginBottom: '1em'}}>I had taken up a volunteer position a few months back and realized that I love to help others learn. So  I applied to be a Teaching Assistant. A semester later I got promoted to be Head TA.</span>,
      <span style={{display: 'block', marginBottom: '1em'}}></span>,
      <span style={{display: 'block', marginBottom: '1em'}}>As Head TA, I found myself leading a team of TAs and supporting 80+ students in Human-Computer Interaction.</span>,
    ],
    position: "right",
    watermark: "💼",
    year: "Feb 2024",
    jobTitle: "Head Teaching Assistant"
  },
  {
    description: [
      <span style={{display: 'block', marginBottom: '1em'}}>Bachelor's degree in hand, I wasn't ready to stop learning. Enter Cornell University and my MPS in Information Science with a UX focus!</span>,
      <span style={{display: 'block', marginBottom: '1em'}}>I was already in love with multi-disciplinary problem solving and I was trying to find an intersection between CS and psychology.</span>,
      <span style={{display: 'block', marginBottom: '1em'}}>So Cornell's program was a dream come true! I loved learning about user research methods, design, prototyping and strategy. Plus, the campus is absolutely stunning!</span>,
    ],
    position: "left",
    watermark: "🎓",
    year: "Aug 2024",
    location: "Cornell University, Ithaca"
  },
  {
    description: [
      <span style={{display: 'block', marginBottom: '1em'}}>During my time at Cornell, I worked as a Graduate Teaching Specialist, supporting 200+ students across design and programming coursework.</span>,
      <span style={{display: 'block', marginBottom: '1em'}}>I graded assignments and mentored students as they explored design practices while programming.</span>,
    ],
    position: "right",
    watermark: "💼",
    year: "Aug 2024",
    jobTitle: "Graduate Teaching Specialist",
  },
  {
    description: [
      <span style={{display: 'block', marginBottom: '1em'}}>I lived my capstone dream, working directly with Google Cloud.</span>,
      <span style={{display: 'block', marginBottom: '1em'}}>Our team was mentored by some of the nicest folks at Google Cloud while we got to learn so much about enterprise design and research.</span>,
    ],
    position: "left",
    watermark: "💼",
    year: "Jan 2025",
    jobTitle: "UX Designer + Researcher",
  },
  {
    description: "I worked as a Graduate RA, diving into co-design research with remote mental health support systems.",
    position: "right",
    watermark: "💼",
    year: "May 2025",
    jobTitle: "Graduate Research Assistant",
  }
];

const skillsData = [
  "Interaction Design", "Interdisciplinary Thinking", "Prototyping", "Mixed Methods Research", "Co-design", "Qualitative Analysis",
  "Programming", "Community Building", "Conflict Resolution", "Leadership", "Mentorship", "Teamwork"
];

function About() {
  const timelineItemsRef = useRef([]);
  const skillsRef = useRef([]);

  useEffect(() => {
    const observers = [];

    // Timeline items observer
    timelineItemsRef.current.forEach((item, index) => {
      if (item) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('animate-in');
              }
            });
          },
          { threshold: 0.1, rootMargin: '-50px' }
        );
        observer.observe(item);
        observers.push(observer);
      }
    });

    // Skills items observer
    skillsRef.current.forEach((item, index) => {
      if (item) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.1}s`;
                entry.target.classList.add('skill-animate-in');
              }
            });
          },
          { threshold: 0.1, rootMargin: '-30px' }
        );
        observer.observe(item);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="about-page">
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
          --sticky-yellow: #fef3c7;
          --sticky-blue: #b3b7ee;
          --sticky-pink: #fce7f3;
          --sticky-green: #d1fae5;
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

        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        /* Animated Background */
        .about-page::before {
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

        /* Content Container */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
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

        /* About Section */
        .about-section {
          padding: 4rem 0;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(15px);
          position: relative;
        }

        /* Intro Header */
        .intro-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInFromTop 1s ease-out 0.3s forwards;
        }

        .intro-year-location {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .intro-description {
          font-size: 1.3rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 400;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        @keyframes slideInFromTop {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Timeline Container */
        .timeline-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto 6rem auto;
          padding: 2rem;
        }

        /* Timeline Path */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 4rem;
          width: 4px;
          transform: translateX(-50%);
          background: linear-gradient(to bottom, var(--rose-pompadour), var(--amaranth-pink));
          border-radius: 2px;
        }

        .timeline-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
        }

        /* Timeline Items */
        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          display: flex;
          align-items: flex-start;
          min-height: 300px;
          opacity: 0;
          transform: translateY(50px) scale(0.8);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Left Side Items */
        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 3rem;
        }

        .timeline-item.left .timeline-content {
          text-align: right;
          margin-right: 2rem;
          transform: translateX(50px);
        }

        .timeline-item.left.animate-in .timeline-content {
          transform: translateX(0);
        }

        /* Right Side Items */
        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 3rem;
        }

        .timeline-item.right .timeline-content {
          text-align: left;
          margin-left: 2rem;
          transform: translateX(-50px);
        }

        .timeline-item.right.animate-in .timeline-content {
          transform: translateX(0);
        }

        /* Watermarks */
        .timeline-item.left::before {
          content: attr(data-watermark);
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translate(50%, -50%) rotate(15deg);
          font-size: 12rem;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          color: rgba(29, 78, 216, 0.8);
          text-shadow: 0 0 20px rgba(29, 78, 216, 0.3);
        }

        .timeline-item.right::before {
          content: attr(data-watermark);
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translate(-50%, -50%) rotate(-15deg);
          font-size: 12rem;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          color: rgba(29, 78, 216, 0.8);
          text-shadow: 0 0 20px rgba(29, 78, 216, 0.3);
        }

        /* Timeline Cards */
        .timeline-content {
          position: relative;
          max-width: 420px;
          min-height: 200px;
          padding: 2rem 2.5rem;
          border-radius: 25px;
          background: var(--sticky-blue);
          border: 3px solid rgba(100, 116, 238, 0.4);
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.15),
            0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          z-index: 5;
          transform-origin: center;
          transform: rotate(1deg);
          flex-shrink: 0;
        }

        .timeline-content:hover {
          transform: translateY(-8px) scale(1.05) rotate(0deg);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Enhanced Timeline Dots */
        .timeline-dot {
          position: absolute;
          left: 50%;
          width: 24px;
          height: 24px;
          background: linear-gradient(45deg, var(--rose-pompadour), var(--deep-rose));
          border: 5px solid white;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 10;
          box-shadow: 
            0 6px 20px rgba(226, 115, 150, 0.4),
            0 0 0 3px rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
        }

        /* Timeline Header - Year and Location */
        .timeline-header {
          margin-bottom: 1.5rem;
        }

        .timeline-year {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Fjalla One', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .timeline-location {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--deep-rose);
          margin-bottom: 1rem;
          font-family: 'Roboto', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          line-height: 1.3;
          }
          .timeline-location.job-title-right {
            justify-content: flex-end;
            text-align: right;
        }

        /* Regular timeline cards with year */
        .timeline-year-regular {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        /* Quote styling */
        .timeline-quote {
          font-size: 1rem;
          font-style: italic;
          color: var(--deep-rose);
          margin-bottom: 1rem;
          padding: 0.5rem 0;
          border-left: 3px solid var(--rose-pompadour);
          padding-left: 1rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        /* Content Text */
        .timeline-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.3;
          position: relative;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .timeline-title.small-title {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-style: italic;
          opacity: 0.9;
        }

        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
          font-weight: 400;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        .timeline-description br {
          display: block;
        }
        .timeline-description br + * {
          margin-top: 1em;
        }
        .timeline-description br::after {
          content: " ";
          display: block;
          margin-bottom: 1em;
        }

        /* Special alignment for left position cards */
        .timeline-item.left .timeline-location,
        .timeline-item.left .timeline-jobTitle,
        .timeline-item.left .timeline-quote {
          text-align: right;
        }

        .timeline-item.left .timeline-description {
          text-align: left;
        }

        /* Skills Section */
        .skills-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInFromTop 1s ease-out 0.8s forwards;
        }

        .skills-header h2 {
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem auto;
        }

        .skill-item {
          background: #b3b7ee;
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(226, 115, 150, 0.15);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-item.skill-animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .skill-item:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(226, 115, 150, 0.2);
          background: rgba(255, 255, 255, 1);
        }

        .skill-item span {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 1rem;
          font-family: 'Roboto', sans-serif;
        }

        /* Skills description */
        .skills-description {
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 3rem auto;
          line-height: 1.6;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        /* Reflection Text */
        .reflection-text {
          text-align: center;
          font-size: 1.3rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          max-width: 800px;
          margin: 2rem auto;
        }

        .reflection-cta {
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-primary);
          font-weight: 600;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          margin-bottom: 3rem;
          font-style: italic;
        }

        /* Footer */
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .timeline-line {
            left: 2rem;
            bottom: 6rem;
          }

          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 4rem !important;
            padding-right: 1rem !important;
            align-items: center !important;
            min-height: auto !important;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
            margin-left: 1rem !important;
            margin-right: 0 !important;
            max-width: calc(100vw - 8rem) !important;
            transform: translateX(-30px) !important;
          }

          .timeline-item.animate-in .timeline-content {
            transform: translateX(0) !important;
          }

          .timeline-item.left .timeline-location,
          .timeline-item.left .timeline-quote,
          .timeline-item.left .timeline-description {
            text-align: left !important;
          }

          .timeline-item.left::before,
          .timeline-item.right::before {
            font-size: 6rem;
            left: 2rem;
            right: auto;
            transform: translate(-50%, -50%) rotate(-15deg);
            opacity: 0.3;
          }

          .timeline-dot {
            left: 2rem;
          }

          .timeline-container {
            padding: 2rem 1rem;
            margin-bottom: 4rem;
          }

          .timeline-content {
            padding: 1.5rem 2rem;
            min-height: 160px;
            max-width: calc(100vw - 8rem) !important;
          }

          .content-container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .timeline-content {
            padding: 1.5rem;
            min-height: 140px;
            max-width: calc(100vw - 6rem) !important;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }
        `}
      </style>

      {/* HEADER */}
      <header className="header">
        <div className="content-container">
          <div className="header-content">
            <a href="/">
              <div className="logo">
                <img src={logo} alt="Shreayaa Srinivasan Logo" className="custom-logo" />
              </div>
            </a>
            <nav className="nav-links">
              <a href="/work">WORK</a>
              <a href="/playground">PLAYGROUND</a>
              <a href="/about">ABOUT</a>
              <a href="https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                RESUME
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="content-container">
          {/* Intro header */}
          <div className="intro-header">
            <div className="intro-year-location">
              🗓 May 2020📍🗺️ Chennai, India
            </div>
            <p className="intro-description">
              After wrapping up high school with a suitcase full of dreams in hand, I made one of the biggest and best decisions of my life. It was to pursue my education in the United States.
              <br />
              Little did I know, this was just the opening scene of an incredible adventure.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                ref={el => timelineItemsRef.current[index] = el}
                className={`timeline-item ${item.position} ${index === 0 ? 'first-item' : ''}`}
                data-watermark={item.watermark}
              >
                <div className="timeline-dot"></div>
                <div className={`timeline-content ${item.isFirst ? 'first-card' : ''}`}>
                  {item.isFirst ? (
                    <div className="timeline-header">
                      <div className="timeline-year">
                        🗓 {item.year}
                      </div>
                      <div className="timeline-location">
                        📍🗺️ {item.location}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="timeline-year-regular">
                        🗓 {item.year}
                      </div>
                      {item.location && (
                        <div className="timeline-location job-title-right" style={{width: '100%', justifyContent: 'flex-end', display: 'flex', textAlign: 'right'}}>
                          <span style={{textAlign: 'right', width: '100%'}}>📍🗺️ {item.location}</span>
                        </div>
                      )}
                      {item.jobTitle && (
                        <div className="timeline-location">
                          {['Resident Assistant', 'UX Designer + Researcher'].includes(item.jobTitle) ? (
                            <div className="timeline-location job-title-right" style={{width: '100%', justifyContent: 'flex-end', display: 'flex', textAlign: 'right'}}>
                              <span style={{textAlign: 'right', width: '100%'}}>💼 {item.jobTitle}</span>
                            </div>
                          ) : (
                            <div className="timeline-location" style={{width: '100%', justifyContent: 'flex-start', display: 'flex', textAlign: 'left'}}>
                              <span style={{textAlign: 'left', width: '100%'}}>💼 {item.jobTitle}</span>
                            </div>
                          )}
                        </div>
                      )}
                      {item.quote && (
                        <div className="timeline-quote">
                          "{item.quote}"
                        </div>
                      )}
                    </>
                  )}
                  <h3 className={`timeline-title ${item.isFirst ? 'small-title' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="skills-content">
            <div className="skills-header">
              <h2>This incredible journey so far has taught me so much. Its safe to say it has gotten me ready for the industry and the real world 💪</h2>
            </div>
            
            <div className="skills-grid">
              {skillsData.map((skill, index) => {
                // Calculate row index (assuming 4 columns per row)
                const columns = 4;
                const row = Math.floor(index / columns);
                let bgColor;
                if (row === 0) bgColor = '#b3dee2';
                else if (row === 1) bgColor = '#b3b7ee';
                else bgColor = '#e27396';

                return (
                  <div
                    key={index}
                    ref={el => skillsRef.current[index] = el}
                    className="skill-item"
                    style={{ background: bgColor }}
                  >
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>

            <p className="skills-description">
              Talk to me about cooking, hiking, music, and more!
            </p>

            {/* Reflection */}
            <p className="reflection-cta">
              Want to be part of the next chapter? Let's connect!
            </p>
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

export default About;