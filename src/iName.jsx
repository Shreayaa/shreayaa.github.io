import React from 'react';
import { useEffect } from 'react';
import logo from './assets/general/profile.png';
import iNameMockup from './assets/iname/iName.png';
import storyboard1 from './assets/iname/storyboard1.png';
import storyboard2 from './assets/iname/storyboard2.png';
import storyboard3 from './assets/iname/storyboard3.png';
import prototypeSignup from './assets/iname/prototype1.png';
import prototypeProfile from './assets/iname/prototype2.png';
import prototypeGroups from './assets/iname/prototype3.png';
import prototypeExplore from './assets/iname/prototype4.png';
import prototypeDevices from './assets/iname/prototype5.png';
import iNameShowcase from './assets/iname/iName showcase.mp4';

const caseStudySections = [
  {
    id: 1,
    title: "Overview",
    content: (
      <div>
        <p>
          Imagine landing in a new country for the first time. You're excited, nervous, and ready to meet 
          people, except every introduction turns into a mini struggle. Your name gets mispronounced 
          again and again. You start shortening it, giving an "easy version," or just avoiding correcting 
          people altogether. Over time, this chips away at your confidence in classrooms, networking 
          events, and even casual conversations.
        </p>
        <p>
          That frustration sparked our team's project: <strong>iName</strong> — a mobile and wearable app designed to make 
          introductions smoother by helping people pronounce and remember names correctly while also 
          honoring the cultural stories behind them.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "My Role",
    content: (
      <div>
        <p>I wore many hats in this project:</p>
        <ul>
          <li>As a <strong>researcher</strong>, I interviewed international participants, analyzed the data, and conducted usability tests.</li>
          <li>As a <strong>strategist</strong>, I sketched and storyboarded scenarios, imagining how technology could work in real life.</li>
          <li>As a <strong>designer</strong>, I built prototypes in Figma, turning our rough sketches into something people could actually use.</li>
        </ul>
        <p>
          More than anything, I focused on making sure the voices of our users stayed at the center of every decision.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Understanding Our Users",
    content: (
      <div>
        <p>
          We focused on non-native English speakers at Cornell — students, visiting scholars, and newcomers navigating a new world.
        </p>
        <p>
          One student told us, "I stopped correcting because I was tired of repeating my name ten times."
          Another said, "It feels like I'm asking people for too much just to say it right."
        </p>
        <p>
          These stories shaped our problem: people don't just need their names pronounced correctly; they need their identity respected and remembered.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "Design Process",
    content: (
      <div>
        <h4>01 Research</h4>
        <p>
          Our research showed that existing solutions like Google Translate or simple name tags fell short; 
          they either lacked cultural context, felt outdated, or weren't built just for social/professional environments. 
        </p>
        <p>
          We also explored tools like RescueTime in the productivity space (from our inspiration case) and 
          saw a parallel: they solved the "what" but not the "how." Similarly, apps stored names, but none 
          combined memory, pronunciation, and cultural meaning in one. That gap was our opportunity.
        </p>

        <h4>02 Early Concepts</h4>
        <p>
          We started with imagination. What if you could rent smart glasses at an event, and when you met 
          someone new, their name floated above them with the correct pronunciation whispered in your ear? 
        </p>
        <p>
          What if there was an interactive map that let you dive into the syllables of Irish, Mandarin, or 
          Hindi names?  
        </p>
        <p>
          What if, before a networking event, you could know the names of all the attendees so you never 
          had to stumble through introductions again? 
        </p>
        <p>
          These "what ifs" turned into sketches, and the sketches turned into storyboards.
        </p>
        <ul>
          <li>Liu, a student from China, records his pronunciation during sign-up, finally feeling like people will hear his name the way his family intended.</li>
        </ul>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem 0'}}>
          <img src={storyboard1} alt="Storyboard panels 1-2: User signs up and tries iName app" />
          <img src={storyboard2} alt="Storyboard panels 3-4: User learns phonics and accesses family name pronunciation" />
          <img src={storyboard3} alt="Storyboard panels 5-6: User explores China/Mandarin meaning and successfully uses iName" />
        </div>

        <h4>03 Prototyping</h4>
        <p>
          From there, we built wireframes: clean flows for creating profiles, saving names, exploring the 
          world map, and connecting to smart devices. As fidelity increased, we experimented with 
          typography, color palettes, and interactions until the app felt warm and inclusive.
        </p>

        <h4>04 Testing</h4>
        <p>
          Then came the real test: putting iName into the hands of students. We gave them tasks like signing up, saving names from a group, or exploring the cultural map. That's when we realized some things weren't working:
        </p>
        <ul>
          <li>The "Starred Names" icon confused people; nobody knew what it did.</li>
          <li>The Explore map looked pretty, but users didn't know they could click into it.</li>
          <li>Dense blocks of cultural content overwhelmed readers.</li>
          <li>Everyone wanted profile pictures to connect faces with names.</li>
        </ul>
        <p>So we iterated</p>
        <ul>
          <li>We turned "Starred Names" into a clearly labeled Saved tab.</li>
          <li>We added tooltips and markers to the map.</li>
          <li>We broke content into bite-sized sections with visuals.</li>
          <li>We redesigned event attendee lists into profile cards with photos and play buttons.</li>
        </ul>
        <p>Each cycle of testing pulled us closer to the product our users actually needed.</p>
      </div>
    )
  },
  {
    id: 5,
    title: "Final Design Solution",
    content: (
      <div>
        <p>The final iName experience combines mobile and wearable design with fun features:</p>
        <ul>
          <li><strong>Sign Up</strong>: Users can record their pronunciation, add phonetic hints, and share the meaning of their name.</li>
          <li><strong>Explore</strong>: An interactive world map that connects names to cultures, syllables, and stories.</li>
          <li><strong>Saved</strong>: A dedicated space to bookmark and organize names you want to remember for events.</li>
          <li><strong>Event Prep</strong>: Attendees get pronunciation reminders ahead of time.</li>
          <li><strong>Smart Devices</strong>: Glasses and earbuds that display and pronounce names in real time at events.</li>
        </ul>
        <div style={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: '2.5rem 0',
          overflowX: 'auto',
          /* increased visual bleed: wider than content to create a stronger cinematic effect */
          width: 'calc(100% + 480px)',
          marginLeft: '-240px',
          marginRight: '-240px',
          paddingLeft: '240px',
          paddingRight: '240px'
        }}>
          <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
            <img src={prototypeSignup} alt="Sign Up screen" style={{maxWidth: '100%', maxHeight: '480px', height: 'auto'}} />
          </div>

          <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
            <img src={prototypeProfile} alt="Profile screen" style={{maxWidth: '100%', maxHeight: '480px', height: 'auto'}} />
          </div>

          <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
            <img src={prototypeGroups} alt="Groups screen" style={{maxWidth: '100%', maxHeight: '480px', height: 'auto'}} />
          </div>

          <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
            <img src={prototypeExplore} alt="Explore screen" style={{maxWidth: '100%', maxHeight: '480px', height: 'auto'}} />
          </div>

          <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
            <img src={prototypeDevices} alt="Devices screen" style={{maxWidth: '100%', maxHeight: '480px', height: 'auto'}} />
          </div>
        </div>
        <div style={{marginTop: '1.5rem'}}>
          <h3 style={{margin: 0, color: 'var(--text-secondary)'}}>Watch how the solution works in real life</h3>
          <video controls style={{maxWidth: '100%', marginTop: '1rem', borderRadius: '12px'}}>
            <source src={iNameShowcase} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "What Did I Learn?",
    content: (
      <div>
        <ul>
          <li>Storyboards helped us communicate user needs more vividly to our team, ensuring alignment before we invested in prototypes.</li>
          <li>During think-aloud sessions, the most valuable feedback came from moments of hesitation, when users weren't sure what to tap or why a feature existed.</li>
          <li>Learning to observe confusion without intervening gave me clearer signals on where the design was failing.</li>
        </ul>
      </div>
    )
  }
];

function IName() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

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
          --yellow-bg: #F4E84C;
          --case-study-bg: #b3b7ee;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
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

        /* Animated Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: floatBackground 25s ease-in-out infinite;
        }

        @keyframes floatBackground {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) rotate(1deg) scale(1.02);
          }
          66% { 
            transform: translateY(-30px) rotate(-1deg) scale(0.98);
          }
        }

        .content-container {
          max-width: 1400px;
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
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInHeader 1s ease-out 0.2s forwards;
        }

        @keyframes slideInHeader {
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        /* Main Layout */
        .case-study-layout {
          padding: 4rem 0;
        }

        /* Mockup Section - No Container */
        .mockup-section {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.4s forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mockup-image {
          width: auto;
          max-width: 1600px;
          height: auto;
          max-height: 1000px;
          object-fit: contain;
          object-position: center;
          transition: all 0.4s ease;
        }

        .mockup-image:hover {
          transform: scale(1.02);
        }

        /* Project Metadata */
        .project-metadata {
          display: flex;
          justify-content: center;
          gap: 6rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.6s forwards;
        }

        .metadata-item {
          text-align: center;
        }

        .metadata-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Fjalla One', sans-serif;
        }

        .metadata-value {
          font-size: 1.3rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Cascading Cards Section - HORIZONTAL STACKING */
        .cascade-section {
          display: flex;
          justify-content: center;
          margin-bottom: 8rem;
          margin-top: 4rem; /* Add space above to push cards down */
          opacity: 0;
          animation: slideInUp 1s ease-out 0.8s forwards;
          width: 100%;
          overflow-x: auto; /* Allow horizontal scroll if needed */
          padding: 0 20px; /* Add padding to prevent edge cutoff */
        }

        .cascade-container {
          position: relative;
          width: 1400px; /* Further increased to ensure no cutoff */
          height: 600px; /* Increased height for taller cards */
          margin: 0 auto; /* Center the container */
        }

        /* Section cards - stacked horizontally to the right - BEHIND yellow card */
        .cascade-card {
          position: absolute;
          width: 380px; /* Updated to requested size */
          height: 320px; /* Updated to requested size */
          background: #b3dee2;;
          backdrop-filter: blur(25px);
          border-radius: 12px;
          border: 3px solid #2d2d2d;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: flex-start; /* Align text to top */
          justify-content: center;
          padding-top: 10px; /* Reduced from 25px to move text closer to top */
          opacity: 0;
          animation: cascadeIn 0.6s ease-out forwards;
        }

        .cascade-card h3 {
          font-size: 1.3rem; /* Increased for better consistency */
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          line-height: 1.3;
          margin: 0;
          padding: 0 15px; /* Add some horizontal padding */
        }

        /* ADD THE MISSING ANIMATION */
        @keyframes cascadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .cascade-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          z-index: 11; /* Even higher on hover */
        }

        /* Horizontal stacking - adjusted for larger card sizes */
        .cascade-card:nth-child(1) { /* Overview */
          bottom: 0px; /* Adjusted for taller cards */
          left: 200px; /* More spacing for wider cards */
          z-index: 6;
          animation-delay: 1s;
        }

        .cascade-card:nth-child(1) h3 { /* Ensure first card font size is consistent */
          font-size: 1.3rem;
          font-weight: 600;
        }

        .cascade-card:nth-child(2) { /* My Role */
          bottom: 50px;
          left: 300px;
          z-index: 5;
          animation-delay: 1.2s;
        }

        .cascade-card:nth-child(3) { /* Understanding Our */
          bottom: 100px;
          left: 400px;
          z-index: 4;
          animation-delay: 1.4s;
        }

        .cascade-card:nth-child(4) { /* Design Process */
          bottom: 150px;
          left: 500px;
          z-index: 3;
          animation-delay: 1.6s;
        }

        .cascade-card:nth-child(5) { /* Final Design Solution */
          bottom: 200px;
          left: 600px;
          z-index: 2;
          animation-delay: 1.8s;
        }

        .cascade-card:nth-child(6) { /* What Did I Learn */
          bottom:250px;
          left: 700px;
          z-index: 1;
          animation-delay: 2s;
        }

        /* Content Sections - SIMPLIFIED HEADERS */
        .content-sections {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .content-section {
          margin-bottom: 2rem;
          padding: 1rem 0;
        }

        .section-header {
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          line-height: 1.2;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .section-content {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Extra rules for PDF-style formatting */
        .section-content p {
          margin-bottom: 1rem;
        }
        .section-content ul,
        .section-content ol {
          margin: 1rem 0 1rem 2rem;
          padding-left: 1rem;
        }
        .section-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .section-content em {
          display: block;
          margin: 1.5rem 0;
          color: #888;
          font-style: italic;
          text-align: center;
        }
        
        /* Direct image styling for build process images */
        .section-content img {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* Video styling */
        .section-content video {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        /* Hover animation for images */
        .section-content img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Hover animation for videos */
        .section-content video:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Scroll animation classes */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Image captions */
        .image-caption {
          text-align: center;
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0.5rem auto 2rem auto;
          max-width: 80%;
        }
        
        .section-content h4, .section-content h5, .section-content h6 {
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        
        /* Main section headings (01, 02, 03) */
        .section-content h4 {
          font-size: 1.3rem;
          margin-left: 0;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        /* Sub-section headings (01.1, 01.2, 02.1, etc.) */
        .section-content h5 {
          font-size: 1.1rem;
          margin-left: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 1.2rem;
          margin-bottom: 0.7rem;
        }
        
        /* Sub-sub-section headings (02.4.1, etc.) */
        .section-content h6 {
          font-size: 1rem;
          margin-left: 3rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Content indentation following sub-headings */
        .section-content h5 + p,
        .section-content h5 + ul,
        .section-content h5 + ol {
          margin-left: 1.5rem;
        }

        .section-content h6 + p,
        .section-content h6 + ul,
        .section-content h6 + ol {
          margin-left: 3rem;
        }

        /* Navigation Buttons */
        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 4rem 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .nav-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Roboto', sans-serif;
          min-width: 180px;
          justify-content: center;
        }

        .nav-button.primary {
          background: var(--rose-pompadour);
          color: white;
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.3);
        }

        .nav-button.primary:hover {
          background: var(--deep-rose);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.4);
        }

        .nav-button.secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          border: 2px solid var(--rose-pompadour);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .nav-button.secondary:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.3);
        }

        @media (max-width: 768px) {
          .nav-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem 1rem;
          }
        }

        /* Responsive Design */
        @media (max-width: 1600px) {
          .cascade-container {
            width: 1350px;
            height: 550px;
            margin: 0 auto;
          }
        }

        @media (max-width: 1400px) {
          .cascade-container {
            width: 1300px;
            height: 500px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 320px;
            height: 260px;
          }

          /* Adjust positioning for smaller container */
          .cascade-card:nth-child(1) { left: 80px; bottom: 40px; }
          .cascade-card:nth-child(2) { left: 180px; bottom: 80px; }
          .cascade-card:nth-child(3) { left: 280px; bottom: 120px; }
          .cascade-card:nth-child(4) { left: 380px; bottom: 160px; }
          .cascade-card:nth-child(5) { left: 480px; bottom: 200px; }
          .cascade-card:nth-child(6) { left: 580px; bottom: 240px; }
        }

        @media (max-width: 1200px) {
          .cascade-container {
            width: 1000px;
            height: 400px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 250px;
            height: 200px;
          }

          /* Tighter positioning */
          .cascade-card:nth-child(1) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(2) { left: 140px; bottom: 60px; }
          .cascade-card:nth-child(3) { left: 220px; bottom: 90px; }
          .cascade-card:nth-child(4) { left: 300px; bottom: 120px; }
          .cascade-card:nth-child(5) { left: 380px; bottom: 150px; }
          .cascade-card:nth-child(6) { left: 460px; bottom: 180px; }
        }

        @media (max-width: 768px) {
          .cascade-container {
            width: 90%;
            height: auto;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 1rem;
          }

          .cascade-card {
            position: static !important;
            width: 100%;
            height: auto;
            min-height: 120px;
            padding: 1rem;
            margin: 0;
            transform: none !important;
          }

          .cascade-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          /* Reset all positioning for mobile stack layout */
          .cascade-card:nth-child(1),
          .cascade-card:nth-child(2),
          .cascade-card:nth-child(3),
          .cascade-card:nth-child(4),
          .cascade-card:nth-child(5),
          .cascade-card:nth-child(6) { 
            left: auto !important;
            bottom: auto !important;
            right: auto !important;
            top: auto !important;
          }

          }

          .project-metadata {
            flex-direction: row;
            gap: 2rem;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .cascade-card {
            min-height: 100px;
            padding: 0.8rem;
          }

          .cascade-card h3 {
            font-size: 0.75rem;
          }

          .project-metadata {
            gap: 1.5rem;
          }

          .metadata-label {
            font-size: 0.8rem;
          }

          .metadata-value {
            font-size: 0.9rem;
          }
        }          .mockup-image {
            max-width: 90%;
            max-height: 350px;
          }

          .section-title {
            font-size: 1.5rem;
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

          .cascade-container {
            width: 95%;
            height: 250px;
            max-width: 400px;
          }

          .cascade-card {
            width: 140px;
            height: 110px;
            padding-top: 5px; /* Further reduced for smallest screens */
          }

          .cascade-card h3 {
            font-size: 0.75rem;
          }

          /* Very tight mobile positioning */
          .cascade-card:nth-child(1) { left: 30px; bottom: 15px; }
          .cascade-card:nth-child(2) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(3) { left: 90px; bottom: 45px; }
          .cascade-card:nth-child(4) { left: 120px; bottom: 60px; }
          .cascade-card:nth-child(5) { left: 150px; bottom: 75px; }
          .cascade-card:nth-child(6) { left: 180px; bottom: 90px; }

          .section-title {
            font-size: 1.3rem;
          }

          .metadata-value {
            font-size: 1.1rem;
          }
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
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
              <a href="https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                RESUME
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="case-study-layout">
        <div className="content-container">
          
          {/* Mockup Section - No Container */}
          <div className="mockup-section">
            {iNameMockup ? (
              <img 
                src={iNameMockup} 
                alt="iName Project Mockup"
                className="mockup-image"
              />
            ) : (
              <div style={{color: '#999', fontSize: '1.2rem', textAlign: 'center'}}>
                <div>Project Mockup</div>
                <small>(iName Interface)</small>
              </div>
            )}
          </div>

          {/* Project Metadata */}
          <div className="project-metadata fade-in-up">
            <div className="metadata-item fade-in-left">
              <div className="metadata-label">Role</div>
              <div className="metadata-value">UX Designer + Developer</div>
            </div>
            <div className="metadata-item fade-in-up">
              <div className="metadata-label">Team</div>
              <div className="metadata-value">Shreayaa, Ariel, Chaowei, and Qiqiu</div>
            </div>
            <div className="metadata-item fade-in-right">
              <div className="metadata-label">Timeline</div>
              <div className="metadata-value">Aug 2024 - Dec 2024</div>
            </div>
          </div>

          {/* Cascading Cards - HORIZONTAL STACKING */}
          <div className="cascade-section">
            <div className="cascade-container">
              
              {/* Section cards stacked horizontally */}
              {caseStudySections.map((section) => (
                <div 
                  key={section.id}
                  className="cascade-card"
                  onClick={() => scrollToSection(section.id)}
                >
                  <h3>{section.title}</h3>
                </div>
              ))}
              
              {/* Play button positioned to the right */}
              <div className="play-button" onClick={() => scrollToSection(1)}>
                <div className="play-icon"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="content-sections">
        {caseStudySections.map((section, index) => (
          <div 
            key={section.id}
            id={`section-${section.id}`}
            className={`content-section fade-in-up`}
          >
            <div className={`section-header fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
              <h2 className="section-title">{section.title}</h2>
            </div>
            <div className="section-content fade-in-up">{section.content}</div>
          </div>
        ))}
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="nav-buttons fade-in-up">
        <a href="/work" className="nav-button primary fade-in-left">
          View My Other Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
        <button onClick={scrollToTop} className="nav-button secondary fade-in-right">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15L12 9L6 15"/>
          </svg>
          Back to Top
        </button>
      </div>

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
            <a href="https://medium.com/@shreayaa" target="_blank" rel="noopener noreferrer" title="Medium">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" title="Dribbble">
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

          <p className="footer-copyright">Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default IName;
