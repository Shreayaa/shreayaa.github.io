import React from 'react';
import logo from '../assets/general/profile.png';
import emailIcon from '../assets/general/email.png';
import './site.css';

/* Shared site header — used on every page. */
export default function SiteHeader() {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header-content">
          <a href="/">
            <div className="logo">
              <img src={logo} alt="Shreayaa Srinivasan Logo" className="custom-logo" />
            </div>
          </a>
          <nav className="nav-links">
            <a href="/" onClick={(e) => { e.preventDefault(); if (window.location.pathname === '/') { const el = document.getElementById('google-cloud'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } else { sessionStorage.setItem('scrollTo', 'google-cloud'); window.location.href = '/'; } }}>WORK</a>
            <a href="/about">ABOUT</a>
            <a href="https://drive.google.com/file/d/1npO4k4AAveQdBizDO5rMsA64DmfxBzLA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
            <a href="mailto:shreayaasrini@gmail.com" title="Email me" style={{ lineHeight: 0 }}>
              <img src={emailIcon} alt="Email" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            {/* <a href="/garden" title="The Garden — plant something 🌱">🌱</a> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
