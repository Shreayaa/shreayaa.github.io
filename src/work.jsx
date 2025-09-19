import React, { useEffect, useRef } from 'react';
import logo from './assets/general/profile.png';
import capstoneMockup from './assets/google-cloud/capstone-mockup.png';
import ithacaSoapMockup from './assets/ithaca-soap/ithaca-soap-mockup.png';
import iNameMockup from './assets/iname/iName.png';
import routes from './assets/routes-to-roots/routes.png';
import ecocart from './assets/ecocart/ecoCart.png';
import rShiny from './assets/r-shiny/rShiny.png';
import dialogflow from './assets/tools/Dialogflow CX.png';
import gemini from './assets/tools/Google_Gemini_logo.svg.png';
import openai from './assets/tools/OpenAI-black-monoblossom.png';
import slack from './assets/tools/Slack.svg';
import vertex from './assets/tools/Vertex AI.png';
import colab from './assets/tools/colab.svg';
import figmaTool from './assets/tools/figma.png';
import gcloud from './assets/tools/google-cloud-1.svg';
import notion from './assets/tools/notion-logo-no-background.png';
import pythonLogo from './assets/tools/python-logo-only.png';
import miroLogo from './assets/tools/Miro-Icon.png';
import rLogo from './assets/tools/RStudio.png';
import docsLogo from './assets/tools/google-docs.png';
import photoshopLogo from './assets/tools/Adobe Photoshop.png';
import vueLogo from './assets/tools/Vue.js.png';
import vuetifyLogo from './assets/tools/Veutify.png';
import githubLogo from './assets/tools/Github.png';
import copilotLogo from './assets/tools/copilot-color.png';
import canvaLogo from './assets/tools/Canva.png';
import ggplotLogo from './assets/tools/ggplot.svg.png';
import midjourneyLogo from './assets/tools/midjourney.png';
import dplyrLogo from './assets/tools/dplyr.png';
import rPngLogo from './assets/tools/R.png';

const projects = [
  {
    id: 1,
    title: "Cornell x Google Cloud Capstone Project",
    description: "Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users.",
    image: capstoneMockup,
    imageType: "laptop",
    caseStudyUrl: "/google-cloud-case-study",
    toolLogos: [gcloud, colab, dialogflow, vertex, gemini, pythonLogo, slack, notion]
  },
  {
    id: 2,
    title: "Ithaca Soap Redesign",
    description: "Redesigned a local brand’s app to connect sustainability values with user priorities.",
    image: ithacaSoapMockup,
    imageType: "mobile",
    caseStudyUrl: "/ithaca-soap-case-study"
  },

  {
    id: 3,
    title: "Routes to Roots App",
    description: "Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.",
    image: routes,
    imageType: "mobile",
    caseStudyUrl: "/routes-to-roots-case-study"
  },
  {
    id: 4,
    title: "iName App",
    description: "Built a mobile app and wearable environment that helps people pronounce and remember names correctly, fostering identity and inclusion.",
    image: iNameMockup,
    imageType: "mobile",
    caseStudyUrl: "/iname-case-study"
  },

  {
    id: 5,
    title: "EcoCart App",
    description: "Designed a mobile app that makes sustainable grocery shopping simple and actionable by turning confusing eco-labels into clear choices.",
    image: ecocart,
    imageType: "laptop",
    caseStudyUrl: "/ecocart-case-study"
  },
  {
    id: 6,
    title: "Immunization Data Analysis Dashboard",
    description: "Developed an interactive dashboard that transforms messy vaccination data into clear insights for educators and policymakers.",
    image: rShiny,
    imageType: "mobile",
    caseStudyUrl: "/rshiny-case-study"
  }
];

function Work() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    // Scroll animation for project rows
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

  const handleProjectClick = (caseStudyUrl) => {
    window.location.href = caseStudyUrl;
  };

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

        /* Content Container - Same as About.jsx */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header - Fixed to match About.jsx structure */
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

        /* Tools row below project descriptions */
        .tools-row {
          display: flex;
          gap: 0.6rem;
          margin-top: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .tool-badge {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.04);
          font-size: 0.7rem;
          color: var(--text-primary);
        }

        .tool-text {
          padding: 0 6px;
          text-align: center;
        }

        /* Tool logos row (Cornell project) */
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

        /* Work Section */
        .work-section {
          padding: 4rem 0;
          position: relative;
        }

        /* Project Row - Alternating Layout with Animation */
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

        .project-row.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Reverse layout for even rows */
        .project-row.reverse {
          flex-direction: row-reverse;
        }

        .project-row:hover {
          transform: translateY(-5px) scale(1.01);
        }

        /* Mockup Side */
        .mockup-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          position: relative;
        }

        /* Smaller hover text - FIXED SIZE */
        .mockup-side::after {
          content: 'Click to read case study';
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          font-family: 'Roboto', sans-serif;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 10;
          white-space: nowrap;
          /* Smaller dimensions */
          width: 160px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Smaller hover area for the text */
        .mockup-side::before {
          content: '';
          position: absolute;
          bottom: -45px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 50px;
          z-index: 5;
        }

        .project-row:hover .mockup-side::after {
          opacity: 1;
          transform: translateX(-50%) translateY(-3px);
        }

        /* Direct mockup without container */
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

        /* Different sizing for laptop vs mobile mockups */
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
          image-rendering: -webkit-optimize-contrast;
          image-rendering: -webkit-crisp-edges;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          filter: contrast(1.02) brightness(1.01);
          transition: all 0.6s ease;
          border-radius: 12px;
        }

        .mockup-placeholder {
          color: #999;
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
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

        /* Content Side with Animation */
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
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-family: 'Roboto', sans-serif;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-description {
          transform: translateX(0);
          opacity: 1;
        }

        /* Left side content animation */
        .project-row.reverse .project-title,
        .project-row.reverse .project-description {
          transform: translateX(-20px);
        }

        .project-row.reverse.animate-in .project-title,
        .project-row.reverse.animate-in .project-description {
          transform: translateX(0);
        }

        .project-row.reverse:hover .project-title {
          transform: translateX(-5px);
        }

        /* Main Footer */
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

        /* Responsive Design */
        @media (max-width: 1200px) {
          .project-row {
            gap: 3rem;
            min-height: 450px;
          }
          
          .mockup-side {
            min-height: 450px;
          }

          .mockup-image-wrapper {
            height: 450px;
          }

          .project-title {
            font-size: 2.2rem;
          }

          .project-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .project-row,
          .project-row.reverse {
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 4rem;
            min-height: auto;
          }

          .mockup-side::after {
            bottom: -25px;
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
            width: 140px;
            height: 30px;
            border-radius: 12px;
          }

          .mockup-side::before {
            bottom: -35px;
            width: 160px;
            height: 45px;
          }

          .mockup-side {
            min-height: 350px;
            width: 100%;
          }

          .mockup-image-wrapper {
            height: 350px;
          }

          .content-side {
            text-align: center;
            padding: 1rem 0;
          }

          .project-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .project-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }

          /* Reset transforms for mobile */
          .project-row .project-title,
          .project-row .project-description,
          .project-row.reverse .project-title,
          .project-row.reverse .project-description {
            transform: translateY(20px);
          }

          .project-row.animate-in .project-title,
          .project-row.animate-in .project-description,
          .project-row.reverse.animate-in .project-title,
          .project-row.reverse.animate-in .project-description {
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .content-container {
            padding: 0 1rem;
          }

          .project-row {
            margin-bottom: 3rem;
          }

          .mockup-side::after {
            bottom: -20px;
            font-size: 0.65rem;
            padding: 0.3rem 0.6rem;
            width: 120px;
            height: 25px;
            border-radius: 10px;
          }

          .mockup-side::before {
            bottom: -30px;
            width: 140px;
            height: 40px;
          }

          .mockup-side {
            min-height: 280px;
          }

          .mockup-image-wrapper {
            height: 280px;
          }

          .project-title {
            font-size: 1.7rem;
          }

          .project-description {
            font-size: 0.95rem;
          }

          .mockup-placeholder {
            height: 250px;
            padding: 2rem;
            font-size: 1rem;
          }
        }
        `}
      </style>

      {/* HEADER - Fixed structure to match About.jsx */}
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

      {/* WORK SECTION */}
      <section className="work-section">
        <div className="content-container">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={el => projectRefs.current[index] = el}
              className={`project-row ${index % 2 === 1 ? 'reverse' : ''}`}
              onClick={() => handleProjectClick(project.caseStudyUrl)}
            >
              {/* Mockup Side */}
              <div className="mockup-side">
                <div className={`mockup-image-wrapper ${project.imageType}`}> 
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} mockup`}
                      className="mockup-image"
                    />
                  ) : (
                    <div className="mockup-placeholder">
                      <div>Project Mockup Image</div>
                      <small>({project.imageType} mockup)</small>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className="content-side">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                {project.tools && (
                  <div className="tools-row">
                    {project.tools.map((tool, i) => (
                      <div key={i} className="tool-badge" title={tool}>
                        <span className="tool-text">{tool}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render tool logos ONLY for Cornell x Google Cloud (project id 1) */}
                {project.id === 1 && project.toolLogos && (
                  <div className="tool-logos-row">
                   {[gcloud, colab, dialogflow, vertex, gemini, pythonLogo, slack, notion].map((logoSrc, idx) => (
                      <img key={idx} src={logoSrc} alt={`tool-${idx}`} className="tool-logo" />
                    ))}
                  </div>
                )}

                {/* Render tool logos for Ithaca Soap Redesign (project id 2) */}
                {project.id === 2 && (
                  <div className="tool-logos-row">
                    {[vueLogo, vuetifyLogo, githubLogo, copilotLogo, figmaTool, canvaLogo, openai].map((logoSrc, idx) => (
                      <img key={idx} src={logoSrc} alt={`ithaca-tool-${idx}`} className="tool-logo" />
                    ))}
                  </div>
                )}

                {/* Render tool logos for Routes to Roots App (project id 3) */}
                {project.id === 3 && (
                  <div className="tool-logos-row">
                    {[figmaTool, miroLogo, canvaLogo, rLogo, openai, docsLogo, photoshopLogo].map((logoSrc, idx) => (
                      <img key={idx} src={logoSrc} alt={`routes-tool-${idx}`} className="tool-logo" />
                    ))}
                  </div>
                )}

                {/* Render tool logos for iName App (project id 4) */}
                {project.id === 4 && (
                  <div className="tool-logos-row">
                    {[figmaTool, miroLogo, canvaLogo, openai, docsLogo].map((logoSrc, idx) => (
                      <img key={idx} src={logoSrc} alt={`iname-tool-${idx}`} className="tool-logo" />
                    ))}
                  </div>
                )}

                {/* Render tool logos for EcoCart App (project id 5) */}
                {project.id === 5 && (
                  <div className="tool-logos-row">
                    {[figmaTool, miroLogo, canvaLogo, openai, docsLogo].map((logoSrc, idx) => (
                      <img key={idx} src={logoSrc} alt={`ecocart-tool-${idx}`} className="tool-logo" />
                    ))}
                  </div>
                )}

                {/* Render tool logos for Immunization Data Dashboard (project id 6) */}
                {project.id === 6 && (
                  <div className="tool-logos-row">
                    {[rLogo, rPngLogo, githubLogo, ggplotLogo, dplyrLogo, midjourneyLogo].map((logoSrc, idx) => (
                      <img key={idx} src={logoSrc} alt={`immunization-tool-${idx}`} className="tool-logo" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
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

export default Work;