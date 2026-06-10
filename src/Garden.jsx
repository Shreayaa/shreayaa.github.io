import React, { useState, useEffect, useCallback } from 'react';
import logo from './assets/general/profile.png';
import { Sprout, ArrowLeft, RotateCcw, Droplets } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   The Garden — a digibouquet-inspired toy.
   Pick seeds → sow them in the garden → water them → watch them
   grow. Every fully-grown plant counts toward the world record of
   23,060 trees planted in 24 hours. Progress persists per-browser
   in localStorage.
   ────────────────────────────────────────────────────────────── */

const GOAL = 23060;          // world record: trees planted in 24h
const PLOT_COUNT = 12;       // plots in the garden grid
const WATERS_TO_GROW = 2;    // seed → sprout → bloom

// Seed catalog. `petals`, `rx`, `ry`, `cr` tune the generic flower.
const SEEDS = [
  { id: 'rose',      name: 'Rose',      petal: '#e27396', center: '#a73e5a' },
  { id: 'tulip',     name: 'Tulip',     petal: '#ea9ab2', center: '#c55577', petals: 5, rx: 8,  ry: 15, cr: 6 },
  { id: 'sunflower', name: 'Sunflower', petal: '#f6c453', center: '#7a5230', petals: 13, rx: 5, ry: 16, cr: 11 },
  { id: 'daisy',     name: 'Daisy',     petal: '#ffffff', center: '#f6c453', petals: 11, rx: 5, ry: 13, cr: 7 },
  { id: 'lavender',  name: 'Lavender',  petal: '#b39ddb', center: '#7e57c2' },
  { id: 'sapling',   name: 'Sapling',   petal: '#7cb342', center: '#5d4037' },
];

const seedById = (id) => SEEDS.find((s) => s.id === id);

/* ── The plant artwork (pure SVG, three stages) ─────────────────── */

function Bloom({ seed }) {
  const cx = 50;
  const cy = 38;

  if (seed.id === 'sapling') {
    return (
      <g>
        <circle cx={50} cy={40} r={17} fill="#8bc34a" />
        <circle cx={36} cy={50} r={13} fill="#689f38" />
        <circle cx={64} cy={50} r={13} fill="#7cb342" />
        <circle cx={50} cy={54} r={15} fill="#7cb342" />
        <circle cx={45} cy={44} r={9}  fill="#9ccc65" />
      </g>
    );
  }

  if (seed.id === 'lavender') {
    return (
      <g>
        {Array.from({ length: 7 }).map((_, k) => (
          <circle key={k} cx={50 + (k % 2 ? 4 : -4)} cy={20 + k * 5} r={5} fill={seed.petal} />
        ))}
        <circle cx={50} cy={18} r={4} fill="#9575cd" />
      </g>
    );
  }

  if (seed.id === 'rose') {
    return (
      <g>
        {/* outer ring */}
        {Array.from({ length: 6 }).map((_, k) => (
          <ellipse key={`o${k}`} cx={cx} cy={cy - 14} rx={7} ry={13} fill={seed.petal}
            transform={`rotate(${(360 / 6) * k} ${cx} ${cy})`} />
        ))}
        {/* inner ring */}
        {Array.from({ length: 5 }).map((_, k) => (
          <ellipse key={`i${k}`} cx={cx} cy={cy - 8} rx={5} ry={8} fill="#d65f82"
            transform={`rotate(${(360 / 5) * k + 36} ${cx} ${cy})`} />
        ))}
        <circle cx={cx} cy={cy} r={6} fill={seed.center} />
      </g>
    );
  }

  // generic radial flower (tulip, sunflower, daisy)
  const n = seed.petals || 8;
  const rx = seed.rx || 6;
  const ry = seed.ry || 13;
  const cr = seed.cr || 9;
  return (
    <g>
      {Array.from({ length: n }).map((_, k) => (
        <ellipse key={k} cx={cx} cy={cy - ry + 1} rx={rx} ry={ry} fill={seed.petal}
          stroke={seed.id === 'daisy' ? '#f0d7c0' : 'none'} strokeWidth={seed.id === 'daisy' ? 0.6 : 0}
          transform={`rotate(${(360 / n) * k} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={cr} fill={seed.center} />
    </g>
  );
}

function PlantSVG({ seedId, stage }) {
  const seed = seedById(seedId);
  if (!seed) return null;

  // stage 0 = seed, 1 = sprout, 2 = bloom
  if (stage === 0) {
    return (
      <svg viewBox="0 0 100 120" className="plant-svg">
        <ellipse cx={50} cy={101} rx={10} ry={7} fill="#6d4c2f" />
        <path d="M50 96 q3 4 0 8" stroke="#8a6440" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  const grown = stage === 2;
  const topY = grown ? 42 : 82;
  const leafY = grown ? 74 : 88;
  const leafR = grown ? 12 : 8;

  return (
    <svg viewBox="0 0 100 120" className="plant-svg">
      {/* stem */}
      <path d={`M50 108 Q 47 ${(108 + topY) / 2} 50 ${topY}`}
        stroke="#5a8f3c" strokeWidth={grown ? 5 : 4} fill="none" strokeLinecap="round" />
      {/* leaves */}
      <ellipse cx={50 - leafR} cy={leafY} rx={leafR} ry={leafR * 0.55} fill="#6aa84f"
        transform={`rotate(-28 ${50 - leafR} ${leafY})`} />
      <ellipse cx={50 + leafR} cy={leafY} rx={leafR} ry={leafR * 0.55} fill="#7cb85f"
        transform={`rotate(28 ${50 + leafR} ${leafY})`} />
      {grown && <Bloom seed={seed} />}
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
};

function Garden() {
  const [step, setStep] = useState(() => load('garden_step', 'seeds')); // 'seeds' | 'garden'
  const [chosen, setChosen] = useState(() => load('garden_chosen', []));  // seed ids
  const [activeSeed, setActiveSeed] = useState(null);
  const [plots, setPlots] = useState(() => {
    const saved = load('garden_plots', null);
    return Array.isArray(saved) && saved.length === PLOT_COUNT ? saved : Array(PLOT_COUNT).fill(null);
  });
  const [planted, setPlanted] = useState(() => load('garden_planted', 0));

  const [watering, setWatering] = useState(null); // plot index showing droplets
  const [grew, setGrew] = useState(null);         // plot index showing sparkle
  const [wiggle, setWiggle] = useState(null);      // plot index doing a happy wiggle

  // default the active seed to the first chosen one
  useEffect(() => {
    if (step === 'garden' && chosen.length && !chosen.includes(activeSeed)) {
      setActiveSeed(chosen[0]);
    }
  }, [step, chosen, activeSeed]);

  // persistence
  useEffect(() => { localStorage.setItem('garden_step', JSON.stringify(step)); }, [step]);
  useEffect(() => { localStorage.setItem('garden_chosen', JSON.stringify(chosen)); }, [chosen]);
  useEffect(() => { localStorage.setItem('garden_plots', JSON.stringify(plots)); }, [plots]);
  useEffect(() => { localStorage.setItem('garden_planted', JSON.stringify(planted)); }, [planted]);

  const toggleSeed = (id) => {
    setChosen((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  const handlePlot = useCallback((i) => {
    const cell = plots[i];

    // empty plot → sow the active seed
    if (!cell) {
      if (!activeSeed) return;
      setPlots((p) => { const n = [...p]; n[i] = { seedId: activeSeed, stage: 0 }; return n; });
      return;
    }

    // not grown yet → water it
    if (cell.stage < 2) {
      const newStage = cell.stage + 1;
      setPlots((p) => { const n = [...p]; n[i] = { ...cell, stage: newStage }; return n; });
      setWatering(i);
      setTimeout(() => setWatering((w) => (w === i ? null : w)), 750);
      if (newStage === 2) {
        setPlanted((c) => c + 1);
        setGrew(i);
        setTimeout(() => setGrew((g) => (g === i ? null : g)), 1300);
      }
      return;
    }

    // already grown → happy wiggle
    setWiggle(i);
    setTimeout(() => setWiggle((w) => (w === i ? null : w)), 500);
  }, [plots, activeSeed]);

  const resetGarden = () => {
    if (!window.confirm('Clear your garden? Your total planted count stays.')) return;
    setPlots(Array(PLOT_COUNT).fill(null));
  };

  const enterGarden = () => {
    if (!chosen.length) return;
    setActiveSeed(chosen[0]);
    setStep('garden');
  };

  const pct = Math.min(100, (planted / GOAL) * 100);
  const hasEmpty = plots.some((c) => !c);
  const hasWaterable = plots.some((c) => c && c.stage < 2);

  let hint;
  if (!plots.some(Boolean)) {
    hint = activeSeed
      ? `Click any plot to sow your ${seedById(activeSeed).name.toLowerCase()}.`
      : 'Pick a seed from your pouch below, then click a plot to sow it.';
  } else if (hasWaterable) {
    hint = 'Click a seedling to water it 💧 — water it twice and it blooms.';
  } else if (hasEmpty) {
    hint = 'Keep sowing, or water any seedlings until they bloom.';
  } else {
    hint = 'Your garden is in full bloom! 🌸 Reset it to plant more.';
  }

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
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
          --soil: #7b5536;
          --soil-dark: #5e3f27;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        .app::before {
          content: '';
          position: fixed; inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%);
          pointer-events: none; z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
        }
        @keyframes waveFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(0.97); }
        }

        .content-container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

        /* Header (shared with the rest of the site) */
        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative; z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
        }
        .header-content { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; }
        .custom-logo { height: 3.5rem; width: auto; object-fit: contain; transition: transform .3s ease, filter .3s ease; }
        .custom-logo:hover { transform: scale(1.15); filter: drop-shadow(0 0 6px rgba(226,115,150,.4)); }
        .nav-links { display: flex; gap: 2.5rem; font-family: 'Fjalla One', sans-serif; align-items: center; }
        .nav-links a {
          text-decoration: none; color: var(--text-primary); font-weight: 400; font-size: 1rem;
          transition: all .3s ease; position: relative; padding: .5rem 0; display: flex; align-items: center; gap: .35rem;
        }
        .nav-links a:hover { transform: scale(1.05); color: var(--rose-pompadour); }
        .nav-links a.active-leaf { color: var(--deep-rose); }
        .nav-links a:after {
          content: ''; position: absolute; width: 0; height: 2px; bottom: -2px; left: 0;
          background: var(--rose-pompadour); transition: width .4s cubic-bezier(.175,.885,.32,1.275);
        }
        .nav-links a:hover:after { width: 100%; }

        /* Garden shell */
        .garden-wrap { padding: 3rem 0 4rem; min-height: calc(100vh - 100px); }
        .garden-head { text-align: center; margin-bottom: 2.5rem; }
        .garden-head h1 {
          font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 700; color: var(--text-primary);
          letter-spacing: -.02em; margin-bottom: .6rem;
        }
        .garden-head p { color: var(--text-secondary); font-family: 'DM Sans', sans-serif; font-size: 1.05rem; max-width: 620px; margin: 0 auto; }

        /* Progress toward the world record */
        .record-card {
          max-width: 640px; margin: 0 auto 2.5rem; background: rgba(255,255,255,.6);
          border: 1px solid rgba(226,115,150,.2); border-radius: 20px; padding: 1.4rem 1.8rem;
          box-shadow: 0 12px 30px rgba(226,115,150,.1); backdrop-filter: blur(10px);
        }
        .record-top { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: .8rem; flex-wrap: wrap; }
        .record-count { font-family: ui-serif, Georgia, serif; font-size: 1.9rem; font-weight: 700; color: var(--deep-rose); }
        .record-count small { font-size: 1rem; color: var(--text-secondary); font-weight: 400; }
        .record-label { font-family: 'DM Sans', sans-serif; font-size: .85rem; color: var(--text-secondary); }
        .record-bar { height: 12px; border-radius: 999px; background: rgba(226,115,150,.15); overflow: hidden; }
        .record-fill {
          height: 100%; border-radius: 999px;
          background: linear-gradient(90deg, #7cb342, var(--rose-pompadour));
          transition: width .6s cubic-bezier(.25,.46,.45,.94);
          min-width: 6px;
        }

        /* Seed selection */
        .seed-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1.4rem; max-width: 760px; margin: 0 auto 2.5rem;
        }
        .seed-packet {
          border: 2px dashed rgba(226,115,150,.4); border-radius: 18px; background: rgba(255,255,255,.55);
          padding: 1.1rem 1rem 1rem; cursor: pointer; text-align: center;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
          position: relative;
        }
        .seed-packet:hover { transform: translateY(-5px); box-shadow: 0 14px 28px rgba(226,115,150,.16); border-color: var(--rose-pompadour); }
        .seed-packet.selected {
          border-style: solid; border-color: var(--rose-pompadour); background: rgba(255,255,255,.85);
          box-shadow: 0 14px 30px rgba(226,115,150,.22);
        }
        .seed-packet .plant-svg { width: 84px; height: 100px; display: block; margin: 0 auto; }
        .seed-name { font-family: 'DM Sans', sans-serif; font-weight: 700; color: var(--text-primary); margin-top: .3rem; }
        .seed-check {
          position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%;
          background: var(--rose-pompadour); color: #fff; display: flex; align-items: center; justify-content: center;
          font-size: .9rem; box-shadow: 0 3px 8px rgba(226,115,150,.4);
        }

        .center-actions { text-align: center; }
        .btn {
          padding: .95rem 2.4rem; border: none; border-radius: 50px; font-weight: 600; font-size: 1rem;
          cursor: pointer; font-family: 'DM Sans', sans-serif; display: inline-flex; align-items: center; gap: .5rem;
          transition: all .35s cubic-bezier(.175,.885,.32,1.275);
        }
        .btn-primary { background: var(--rose-pompadour); color: #fff; box-shadow: 0 8px 22px rgba(226,115,150,.3); }
        .btn-primary:hover:not(:disabled) { transform: translateY(-3px) scale(1.02); background: var(--deep-rose); }
        .btn-primary:disabled { opacity: .45; cursor: not-allowed; }
        .btn-ghost {
          background: rgba(255,255,255,.7); color: var(--text-primary); border: 1px solid rgba(226,115,150,.3);
          padding: .6rem 1.2rem; font-size: .9rem;
        }
        .btn-ghost:hover { background: #fff; color: var(--deep-rose); }

        /* Garden toolbar + grid */
        .garden-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; max-width: 760px; margin: 0 auto 1rem; flex-wrap: wrap; }
        .seed-pouch { display: flex; gap: .6rem; flex-wrap: wrap; }
        .pouch-seed {
          display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .85rem .4rem .5rem;
          border-radius: 999px; border: 1px solid rgba(226,115,150,.3); background: rgba(255,255,255,.6);
          cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: .9rem; color: var(--text-secondary);
          transition: all .2s ease;
        }
        .pouch-seed:hover { transform: translateY(-2px); }
        .pouch-seed.active { background: var(--rose-pompadour); color: #fff; border-color: var(--rose-pompadour); box-shadow: 0 6px 16px rgba(226,115,150,.3); }
        .pouch-seed .swatch { width: 16px; height: 16px; border-radius: 50%; }

        .hint {
          text-align: center; font-family: 'DM Sans', sans-serif; color: var(--text-secondary);
          font-size: .98rem; margin: 0 auto 1.6rem; max-width: 620px; min-height: 1.4em;
        }

        .garden-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
          max-width: 760px; margin: 0 auto;
        }
        @media (max-width: 640px) { .garden-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 420px) { .garden-grid { grid-template-columns: repeat(2, 1fr); } }

        .plot {
          position: relative; aspect-ratio: 1 / 1; border-radius: 16px; cursor: pointer; overflow: hidden;
          background: linear-gradient(180deg, #936844 0%, var(--soil) 55%, var(--soil-dark) 100%);
          box-shadow: inset 0 -6px 12px rgba(0,0,0,.25), inset 0 4px 8px rgba(255,255,255,.12), 0 6px 16px rgba(94,63,39,.25);
          transition: transform .2s ease, box-shadow .2s ease;
          display: flex; align-items: flex-end; justify-content: center;
        }
        .plot.empty {
          background: rgba(123,85,54,.18);
          box-shadow: inset 0 0 0 2px rgba(123,85,54,.35);
          border: 2px dashed rgba(94,63,39,.35);
        }
        .plot.empty::after {
          content: '+'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          font-size: 2rem; color: rgba(94,63,39,.4); font-weight: 300;
        }
        .plot.empty.sowable:hover { background: rgba(124,179,66,.25); border-color: var(--rose-pompadour); transform: translateY(-3px); }
        .plot.empty.sowable:hover::after { color: var(--deep-rose); }
        .plot.planted:hover { transform: translateY(-3px); box-shadow: inset 0 -6px 12px rgba(0,0,0,.25), 0 10px 22px rgba(94,63,39,.3); }

        .plant-svg { width: 78%; height: 92%; }
        .plot.sowing .plant-svg { animation: pop .4s cubic-bezier(.34,1.56,.64,1); }
        .plot.grown .plant-svg { animation: bloomPop .6s cubic-bezier(.34,1.56,.64,1); }
        .plot.wiggle .plant-svg { animation: sway .5s ease; transform-origin: bottom center; }
        @keyframes pop { from { transform: translateY(8px) scale(.4); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes bloomPop { 0% { transform: scale(.6); } 60% { transform: scale(1.12); } 100% { transform: scale(1); } }
        @keyframes sway { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-7deg); } 75% { transform: rotate(7deg); } }

        /* gentle idle sway for grown plants */
        .plot.bloomed .plant-svg { animation: idleSway 5s ease-in-out infinite; transform-origin: bottom center; }
        @keyframes idleSway { 0%,100% { transform: rotate(-1.5deg); } 50% { transform: rotate(1.5deg); } }

        /* watering droplets */
        .droplets { position: absolute; inset: 0; pointer-events: none; }
        .droplet {
          position: absolute; top: -12px; width: 6px; height: 10px; border-radius: 0 100% 100% 100%;
          background: var(--light-blue); transform: rotate(45deg); opacity: 0;
          animation: drop .75s ease-in forwards;
        }
        @keyframes drop {
          0% { top: -12px; opacity: 0; }
          20% { opacity: 1; }
          100% { top: 70%; opacity: 0; }
        }

        /* sparkle burst on bloom */
        .sparkles { position: absolute; inset: 0; pointer-events: none; }
        .sparkle { position: absolute; font-size: 1rem; opacity: 0; animation: spark 1.2s ease-out forwards; }
        @keyframes spark {
          0% { opacity: 0; transform: translateY(0) scale(.4); }
          25% { opacity: 1; transform: translateY(-14px) scale(1.1); }
          100% { opacity: 0; transform: translateY(-40px) scale(.6); }
        }

        .garden-footer-actions { text-align: center; margin-top: 2.2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

        /* Footer */
        .footer { text-align: center; padding: 3rem 0; background: #ea9ab2; position: relative; }
        .footer-content { max-width: 650px; margin: 0 auto; padding: 0 2rem; }
        .footer-copyright { color: rgba(255,255,255,.9); font-size: .9rem; }
        .footer h3 { font-size: 1.3rem; color: #fff; margin-bottom: 1rem; }
      `}</style>

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
              <a href="/" onClick={(e) => { e.preventDefault(); sessionStorage.setItem('scrollTo', 'google-cloud'); window.location.href = '/'; }}>WORK</a>
              <a href="/about">ABOUT</a>
              <a href="/garden" className="active-leaf" title="The Garden"><Sprout size={20} /></a>
            </nav>
          </div>
        </div>
      </header>

      <section className="garden-wrap">
        <div className="content-container">
          <div className="garden-head">
            <h1>{step === 'seeds' ? 'Plant a little garden 🌱' : 'Your garden'}</h1>
            <p>
              {step === 'seeds'
                ? 'Pick the seeds you’d like to grow. Every plant you raise here counts toward the world record.'
                : 'Sow your seeds, water them, and watch them bloom. Each bloom is one more toward the record.'}
            </p>
          </div>

          {/* World-record progress */}
          <div className="record-card">
            <div className="record-top">
              <span className="record-count">{planted.toLocaleString()} <small>/ {GOAL.toLocaleString()}</small></span>
              <span className="record-label"><span role="img" aria-label="tree" style={{ marginRight: '.35em' }}>🌳</span>plants grown toward the 24-hour world record</span>
            </div>
            <div className="record-bar">
              <div className="record-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {step === 'seeds' && (
            <>
              <div className="seed-grid">
                {SEEDS.map((seed) => {
                  const selected = chosen.includes(seed.id);
                  return (
                    <div
                      key={seed.id}
                      className={`seed-packet ${selected ? 'selected' : ''}`}
                      onClick={() => toggleSeed(seed.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSeed(seed.id); } }}
                      aria-pressed={selected}
                    >
                      {selected && <span className="seed-check">✓</span>}
                      <PlantSVG seedId={seed.id} stage={2} />
                      <div className="seed-name">{seed.name}</div>
                    </div>
                  );
                })}
              </div>
              <div className="center-actions">
                <button className="btn btn-primary" onClick={enterGarden} disabled={!chosen.length}>
                  <Sprout size={20} /> Go to my garden{chosen.length ? ` (${chosen.length})` : ''}
                </button>
              </div>
            </>
          )}

          {step === 'garden' && (
            <>
              <div className="garden-toolbar">
                <button className="btn btn-ghost" onClick={() => setStep('seeds')}>
                  <ArrowLeft size={16} /> Choose seeds
                </button>
                <div className="seed-pouch">
                  {chosen.map((id) => {
                    const seed = seedById(id);
                    return (
                      <button
                        key={id}
                        className={`pouch-seed ${activeSeed === id ? 'active' : ''}`}
                        onClick={() => setActiveSeed(id)}
                      >
                        <span className="swatch" style={{ background: seed.petal }} />
                        {seed.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="hint">{hint}</p>

              <div className="garden-grid">
                {plots.map((cell, i) => {
                  const isEmpty = !cell;
                  const bloomed = cell && cell.stage === 2;
                  const classes = [
                    'plot',
                    isEmpty ? 'empty' : 'planted',
                    isEmpty && activeSeed ? 'sowable' : '',
                    bloomed ? 'bloomed' : '',
                    watering === i ? 'sowing' : '',
                    grew === i ? 'grown' : '',
                    wiggle === i ? 'wiggle' : '',
                  ].filter(Boolean).join(' ');
                  return (
                    <div
                      key={i}
                      className={classes}
                      onClick={() => handlePlot(i)}
                      role="button"
                      tabIndex={0}
                      aria-label={isEmpty ? 'Empty plot' : `${seedById(cell.seedId).name}, ${['seed', 'sprout', 'bloom'][cell.stage]}`}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handlePlot(i); } }}
                    >
                      {cell && <PlantSVG seedId={cell.seedId} stage={cell.stage} />}
                      {watering === i && (
                        <div className="droplets">
                          {[20, 42, 60, 78].map((x, k) => (
                            <span key={k} className="droplet" style={{ left: `${x}%`, animationDelay: `${k * 0.08}s` }} />
                          ))}
                        </div>
                      )}
                      {grew === i && (
                        <div className="sparkles">
                          {['✨', '🌟', '✨'].map((s, k) => (
                            <span key={k} className="sparkle" style={{ left: `${25 + k * 25}%`, top: '30%', animationDelay: `${k * 0.12}s` }}>{s}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="garden-footer-actions">
                <button className="btn btn-ghost" onClick={resetGarden}>
                  <RotateCcw size={16} /> Clear garden
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Grow something today 🌷</h3>
          <p className="footer-copyright">Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default Garden;
