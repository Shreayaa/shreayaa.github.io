import React from 'react';
import './site.css';

function SquigglyArrow() {
  return (
    <svg className="footer-arrow" viewBox="0 0 46 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* body: tail at lower-right, curves up to head at upper-left */}
      <path
        d="M 40 34 C 28 28, 20 18, 8 7"
        stroke="white" strokeWidth="2.2" strokeLinecap="round"
      />
      {/* arrowhead at upper-left, pointing ↖ */}
      <path
        d="M 8 7 L 19 10 M 8 7 L 11 18"
        stroke="white" strokeWidth="2.2" strokeLinecap="round"
      />
    </svg>
  );
}

/* Shared site footer — used on every page. */
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-message">
          <h3>Let's Connect! 🤝</h3>
        </div>

        <div className="footer-links">
          <a className="footer-link" href="https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/" target="_blank" rel="noopener noreferrer">
            <SquigglyArrow />
            <span>LinkedIn</span>
          </a>
          <a className="footer-link" href="mailto:shreayaasrini@gmail.com">
            <SquigglyArrow />
            <span>Email</span>
          </a>
        </div>

        <p className="footer-copyright">Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026</p>
      </div>
    </footer>
  );
}
