import { STAGES, COMPONENTS } from '../../content/aiPipeline.js';
import { AI, HumanAgent } from '../ai/parts.jsx';

const OUTPUT = { Experiment: '#8C6BD1', Prototype: '#1F9E95', Feature: '#1B2A5C', Enabler: '#B5473C' };
const COLS = [['Experiment', 'Prototype'], ['Feature'], ['Enabler', 'Feature'], ['Feature', 'Experiment'], ['Feature']];

function Chip({ type, delay }) {
  return (
    <span className="aip-chip" style={{ animationDelay: delay + 's', padding: '6px 10px', minWidth: 92, textAlign: 'center', boxSizing: 'border-box', background: OUTPUT[type], color: '#FFFFFF', fontSize: 13, fontWeight: 700, boxShadow: '0 3px 0 rgba(0,0,0,.18)' }}>{type}</span>
  );
}

function Arrow({ dir = 'right', label }) {
  const right = dir === 'right';
  return (
    <div style={{ position: 'relative', height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="aip-dash" style={{ position: 'absolute', left: 0, right: 0, top: 12, height: 2, background: `repeating-linear-gradient(${right ? 90 : 270}deg, #9AA3B5 0 10px, transparent 10px 16px)` }} />
      <svg style={{ position: 'absolute', [right ? 'right' : 'left']: -2, top: 5 }} width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d={right ? 'M2 2l10 6-10 6z' : 'M12 2L2 8l10 6z'} fill="#9AA3B5" /></svg>
      <span style={{ position: 'relative', padding: '0 14px', background: '#FFFFFF', fontSize: 15, fontWeight: 800, letterSpacing: 1, color: '#7A8396' }}>{label}</span>
    </div>
  );
}

/** Hoofdplaat van de AI Innovation Pipeline (AI-Native EDSN). */
export default function AiPipelineTop({ view }) {
  if (!view.page.isAIPIPE) return null;
  return (
    <section id="pipeline-plaat" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.25, fontWeight: 700, color: AI.ink }}>Van geplande uitkomst naar gerealiseerde waarde</h2>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: AI.text }}>Geen levenscyclus past op elke organisatie, ART of product. Maar de reis van geplande uitkomst naar gerealiseerde waarde is te vangen in vijf stappen. Leeroutputs en waarde-outputs stromen erdoorheen, en wat we leren stroomt terug. Klik op een laag voor uitleg.</p>
      <div style={{ padding: '26px 28px', borderRadius: 18, background: '#FFFFFF', border: `1.5px solid ${AI.lilacLine}`, display: 'flex', flexDirection: 'column', gap: 14, overflowX: 'auto' }}>
        <div style={{ minWidth: 980, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Flow */}
          <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 130px', alignItems: 'center', gap: 10 }}>
            <span />
            <Arrow label="Flow" />
            <span />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 130px', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
              <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true"><circle cx="20" cy="24" r="17" fill="none" stroke={AI.teal} strokeWidth="3" /><circle cx="20" cy="24" r="10" fill="none" stroke={AI.teal} strokeWidth="3" /><circle cx="20" cy="24" r="3.5" fill={AI.teal} /><path d="M20 24L40 4M33 3l7 1 1 7" fill="none" stroke={AI.ink} strokeWidth="3" strokeLinecap="round" /></svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: AI.ink, lineHeight: 1.3 }}>PI-uitkomsten / Team-uitkomsten</span>
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', alignItems: 'center' }}>
              {COLS.map((col, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '4px 0', borderLeft: i ? '2px solid #E1E6EE' : 0 }}>
                  {col.map((t, j) => <Chip key={j} type={t} delay={-(i * 0.7 + j * 0.35)} />)}
                </div>
              ))}
            </div>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
              <svg width="48" height="36" viewBox="0 0 48 36" aria-hidden="true"><path d="M3 32l12-12 9 7 20-22M34 5h10v10" fill="none" stroke="#95C11F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: AI.ink, lineHeight: 1.3 }}>Klant- en businesswaarde</span>
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 130px', alignItems: 'center', gap: 10 }}>
            <span />
            <Arrow dir="left" label="Feedback" />
            <span />
          </div>

          {/* Stappen */}
          <div style={{ position: 'relative', marginTop: 6, padding: '14px 30px 30px', borderRadius: 14, background: `linear-gradient(90deg, rgba(220,211,240,0.15), ${AI.lilacLine} 20%, ${AI.lilacLine} 80%, rgba(220,211,240,0.15))` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, auto)', alignItems: 'center', justifyContent: 'space-between' }}>
              {STAGES.map((st, i) => [
                <div key={st.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <HumanAgent size={30} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: AI.ink }}>{st.title}</span>
                </div>,
                i < STAGES.length - 1 ? (
                  <svg key={st.key + '-a'} width="60" height="14" viewBox="0 0 60 14" aria-hidden="true"><path d="M8 7h44" stroke="#A99AD0" strokeWidth="5" /><path d="M2 7l9-6v12zM58 7l-9-6v12z" fill="#A99AD0" /></svg>
                ) : null,
              ])}
            </div>
            <span style={{ position: 'absolute', left: '50%', bottom: -16, transform: 'translateX(-50%)', padding: '7px 28px', borderRadius: 18, background: '#5B3F9E', color: '#FFFFFF', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>AI Innovation Pipeline</span>
          </div>

          {/* Vier lagen */}
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {COMPONENTS.map((c, i) => (
              <button key={c.key} className="aip-layer" onClick={view.open[c.key]}
                style={{ margin: `0 ${50 - i * 6}px 0 ${50 + (3 - i) * 0}px`, minHeight: 46, border: 0, cursor: 'pointer', fontFamily: 'inherit', transform: 'skewX(-24deg)', background: i === 3 ? '#C9BDE6' : '#ECE7F7', color: AI.deep }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, transform: 'skewX(24deg)' }}>
                  <span style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#5A4A7A' }}>· {c.nl}</span>
                  <span aria-hidden="true" style={{ fontSize: 15, fontWeight: 800, color: AI.purple }}>→</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
