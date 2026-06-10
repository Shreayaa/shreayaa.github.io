import React, { useState, useEffect, useRef, useCallback } from 'react';
import momoSprite from './assets/general/momo-sprite.png';

// ── state machine ───────────────────────────────────────────────
const IDLE = ['sitting', 'purring', 'sleeping'];
const DUR  = { sitting: 5000, purring: 6000, sleeping: 8000, petted: 2600 };

const BUBBLE = {
  sitting : 'Give momo some pets!',
  purring : 'Purrr...  ♥',
  sleeping: 'z   z   z',
  petted  : '♥  yay!!  ♥',
};

// ── floating ZZZs ───────────────────────────────────────────────
function Zzz() {
  return (
    <div className="momo-zzz" aria-hidden="true">
      <span className="zzz-char" style={{ fontSize: '0.8rem',  animationDelay: '0s'   }}>z</span>
      <span className="zzz-char" style={{ fontSize: '1rem',   animationDelay: '0.5s' }}>z</span>
      <span className="zzz-char" style={{ fontSize: '1.25rem', animationDelay: '1.0s' }}>Z</span>
    </div>
  );
}

// ── main component ──────────────────────────────────────────────
export default function MomoCat() {
  const [catState, setCatState] = useState('sitting');
  const [hearts,   setHearts]   = useState([]);
  const stateRef = useRef('sitting');
  const idleIdx  = useRef(0);
  const timer    = useRef(null);
  const hid      = useRef(0);

  const tick = useCallback((cur) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (stateRef.current === 'petted') return;
      idleIdx.current = (idleIdx.current + 1) % IDLE.length;
      const next = IDLE[idleIdx.current];
      stateRef.current = next;
      setCatState(next);
      tick(next);
    }, DUR[cur] ?? 5000);
  }, []);

  useEffect(() => {
    tick('sitting');
    return () => clearTimeout(timer.current);
  }, [tick]);

  const pet = (e) => {
    e.stopPropagation();
    clearTimeout(timer.current);
    stateRef.current = 'petted';
    setCatState('petted');

    const batch = Array.from({ length: 9 }, (_, i) => ({
      id : hid.current++,
      x  : (Math.random() - 0.5) * 120,
      s  : 0.8 + Math.random() * 1.1,
      d  : i * 55,
      rot: (Math.random() - 0.5) * 40,
    }));
    setHearts(p => [...p, ...batch]);
    setTimeout(() => {
      const ids = new Set(batch.map(h => h.id));
      setHearts(p => p.filter(h => !ids.has(h.id)));
    }, 2800);

    setTimeout(() => {
      idleIdx.current = 0;
      stateRef.current = 'sitting';
      setCatState('sitting');
      tick('sitting');
    }, DUR.petted);
  };

  const sleeping = catState === 'sleeping';
  const purring  = catState === 'purring';

  return (
    <div
      className="momo-root"
      onClick={pet}
      role="button"
      aria-label="Pet Momo the cat"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && pet(e)}
    >
      {/* hearts burst above the cat */}
      <div className="momo-hearts" aria-hidden="true">
        {hearts.map(h => (
          <span
            key={h.id}
            className="momo-heart"
            style={{
              left: `calc(50% + ${h.x}px)`,
              fontSize: `${h.s}rem`,
              animationDelay: `${h.d}ms`,
              '--rot': `${h.rot}deg`,
            }}
          >♥</span>
        ))}
      </div>

      {/* cat sprite + overlays + side speech bubble */}
      <div className={[
        'momo-cat-wrap',
        purring  ? 'is-purring'  : '',
        sleeping ? 'is-sleeping' : '',
        catState === 'petted' ? 'is-petted' : '',
      ].filter(Boolean).join(' ')}>

        {/* speech bubble — floats to the right of the sprite */}
        <div className={`momo-bubble${sleeping ? ' momo-bubble--zzz' : ''}`}>
          {BUBBLE[catState]}
        </div>

        {/* ZZZs drift up from the cat's head */}
        {sleeping && <Zzz />}

        {/* purring squiggles */}
        {purring && (
          <>
            <span className="momo-purr momo-purr--l" aria-hidden="true">～</span>
            <span className="momo-purr momo-purr--r" aria-hidden="true">～</span>
          </>
        )}

        {/* sprite — cropped to hide the baked-in speech bubble */}
        <div className="momo-sprite-crop">
          <img
            src={momoSprite}
            alt="Momo the cat"
            className={`momo-sprite${sleeping ? ' momo-sprite--sleep' : ''}`}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
