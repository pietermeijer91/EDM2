import { useState } from 'react';
import { PHASES, CHAIN, BLUEPRINT, BLUEPRINT_RULES, VERDICT, TRACKER, WHO } from '../../content/aiLifecycle.js';
import { AI, Section, Lead } from '../ai/parts.jsx';

const PH_COL = ['#3A1D6E', '#6E44B8', '#00807E', '#1F9E95'];
const FONT = "Poppins, 'Segoe UI', sans-serif";

function Dot({ color }) {
  return <span style={{ flexShrink: 0, width: 7, height: 7, marginTop: 7, borderRadius: '50%', background: color }} />;
}

function Bullets({ items, color }) {
  return items.map((t) => <span key={t} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.55, color: AI.text }}><Dot color={color} />{t}</span>);
}

/** Klikbare kaart voor een onderdeel van het blueprint. */
function PartCard({ p, on, onPick, color }) {
  return (
    <button onClick={onPick} aria-pressed={on} style={{ textAlign: 'left', padding: '12px 14px', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit', border: `2px solid ${color}`, background: on ? color : '#FFFFFF', color: on ? '#FFFFFF' : AI.ink, display: 'flex', flexDirection: 'column', gap: 2, minHeight: 74, justifyContent: 'center' }}>
      <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', opacity: on ? 0.85 : 1, color: on ? '#FFFFFF' : color }}>{p.n} · {p.tag}</span>
      <strong style={{ fontSize: 15 }}>{p.title}</strong>
    </button>
  );
}

/** Waaier: één lijn die opsplitst naar de twee rijen van het raster (of twee die samenkomen). Rekt mee met de hoogte. */
function Fan({ merge = false }) {
  return (
    <svg width="40" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true" style={{ flexShrink: 0, alignSelf: 'stretch', height: 'auto' }}>
      {[25, 75].map((y) => <path key={y} d={merge ? `M0 ${y} C20 ${y} 20 50 40 50` : `M0 50 C20 50 20 ${y} 40 ${y}`} fill="none" stroke="#C9BDE6" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />)}
    </svg>
  );
}

/** De AI Solution Lifecycle, het Value Blueprint, het besluit, de tracker en wie wat doet. */
export default function VaLifecycle({ view, openForm }) {
  const [ph, setPh] = useState(0);
  const [bp, setBp] = useState(0);
  const P = PHASES[ph];
  const B = BLUEPRINT[bp];
  const bpCol = (i) => (i === 0 ? AI.purple : i === 5 ? AI.deep : '#00807E');
  return (
    <>
      <Section id="levenscyclus" title="De AI Solution Lifecycle">
        <Lead>De Value Architect begeleidt een AI-initiatief van eerste signaal tot gerealiseerde waarde, in vier fasen. Er groeit één document mee, en elke fase sluit aan op de AI Innovation Pipeline. Klik op een fase.</Lead>
        <div role="tablist" aria-label="Fasen" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 4 }}>
          {PHASES.map((p, i) => {
            const on = ph === i;
            return (
              <button key={p.key} role="tab" aria-selected={on} onClick={() => setPh(i)} style={{ position: 'relative', textAlign: 'left', minHeight: 66, padding: `12px 30px 12px ${i ? 30 : 18}px`, border: 0, cursor: 'pointer', fontFamily: 'inherit', color: '#FFFFFF', background: PH_COL[i], opacity: on ? 1 : 0.55, clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%' + (i ? ', 18px 50%' : '') + ')', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, transition: 'opacity .2s' }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, opacity: 0.8 }}>FASE {i + 1}</span>
                <strong style={{ fontSize: 18 }}>{p.title}</strong>
                <span style={{ fontSize: 12, opacity: 0.92 }}>{p.nl}</span>
              </button>
            );
          })}
        </div>

        <div style={{ padding: 20, borderRadius: 16, border: `2px solid ${PH_COL[ph]}`, background: '#FFFFFF', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', color: PH_COL[ph] }}>Fase {ph + 1} van 4 · {P.title}</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: AI.ink }}>{P.nl}</span>
            <span style={{ fontSize: 15, lineHeight: 1.6, color: '#2E3A55' }}>{P.what}</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              <span style={{ padding: '8px 12px', borderRadius: 10, background: AI.lilac, fontSize: 13, color: AI.ink }}><strong>Oplevering:</strong> {P.out}</span>
              <button onClick={view.open[P.pipe[1]]} style={{ padding: '8px 12px', borderRadius: 10, border: '1.5px solid #D5DBE5', background: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, color: AI.ink }}>In de pipeline: <strong style={{ color: '#0062A3', textDecoration: 'underline' }}>{P.pipe[0]}</strong></button>
            </div>
            <button onClick={() => openForm(P.form)} style={{ alignSelf: 'flex-start', marginTop: 4, minHeight: 40, padding: '0 16px', border: 0, borderRadius: 20, background: PH_COL[ph], color: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700 }}>Open het werkformulier →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 14, color: AI.ink }}>Zo pak je het aan</strong>
            <Bullets items={P.moves} color={PH_COL[ph]} />
          </div>
        </div>

        <div style={{ padding: '18px 18px 10px', borderRadius: 16, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', color: AI.purple }}>Eén document groeit mee</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            {CHAIN.map(([d, f], i) => {
              const style = { padding: '8px 14px', borderRadius: 16, border: 0, fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: '#FFFFFF', background: i === 2 ? '#00807E' : AI.deep, cursor: f ? 'pointer' : 'default' };
              return [
                f ? <button key={d} onClick={() => openForm(f)} title="Open het werkformulier" style={style}>{d} ↗</button> : <span key={d} style={style}>{d}</span>,
                i < CHAIN.length - 1 ? <span key={d + 'a'} aria-hidden="true" style={{ color: '#8C6BD1', fontWeight: 800 }}>→</span> : null,
              ];
            })}
          </div>
          <svg viewBox="0 0 600 34" preserveAspectRatio="none" aria-hidden="true" style={{ width: '100%', maxWidth: 640, height: 30 }}>
            <path d="M590 2 C590 26 580 30 560 30 L40 30 C20 30 10 26 10 8" fill="none" stroke="#8C6BD1" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M4 12 L10 2 L16 12" fill="none" stroke="#8C6BD1" strokeWidth="2" />
          </svg>
          <span style={{ fontSize: 13, color: AI.text, marginTop: -6 }}>Het verslag en de lessen voeden het volgende signaal: de cyclus begint opnieuw.</span>
        </div>
      </Section>

      <Section id="blueprint" title="Het Value Blueprint">
        <Lead>Het hart van Design. Zes onderdelen die samen bepalen of een AI-initiatief productie haalt. Klik op een onderdeel.</Lead>
        <div style={{ padding: 18, borderRadius: 16, background: '#F7F8FB', border: '1.5px solid #E1E6EE', display: 'flex', alignItems: 'stretch', gap: 6, overflowX: 'auto' }}>
          <div style={{ flex: '1 0 140px', alignSelf: 'center' }}><PartCard p={BLUEPRINT[0]} on={bp === 0} onPick={() => setBp(0)} color={bpCol(0)} /></div>
          <Fan />
          <div style={{ flex: '2 0 300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {BLUEPRINT.slice(1, 5).map((p, j) => <PartCard key={p.key} p={p} on={bp === j + 1} onPick={() => setBp(j + 1)} color={bpCol(j + 1)} />)}
          </div>
          <Fan merge />
          <div style={{ flex: '1 0 140px', alignSelf: 'center' }}><PartCard p={BLUEPRINT[5]} on={bp === 5} onPick={() => setBp(5)} color={bpCol(5)} /></div>
          <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true" style={{ flexShrink: 0, alignSelf: 'center' }}><path d="M2 10h18M14 4l7 6-7 6" fill="none" stroke="#C9BDE6" strokeWidth="2.5" /></svg>
          <div style={{ flex: '0 0 96px', alignSelf: 'center', padding: '14px 10px', borderRadius: 12, background: '#00807E', color: '#FFFFFF', textAlign: 'center', fontSize: 14, fontWeight: 800 }}>Besluit</div>
        </div>
        <div style={{ padding: 20, borderRadius: 16, border: `2px solid ${bpCol(bp)}`, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', color: bpCol(bp) }}>Onderdeel {B.n} van 6 · {B.tag}</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: AI.ink }}>{B.title}</span>
            <span style={{ fontSize: 16, lineHeight: 1.55, color: '#2E3A55', fontWeight: 600 }}>{B.q}</span>
            <span style={{ marginTop: 6, padding: '10px 12px', borderRadius: 10, background: '#E9F6F5', fontSize: 13, lineHeight: 1.5, color: '#0B5553' }}><strong>Toets:</strong> {B.test}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 14, color: AI.ink }}>Zo maak je het hard</strong>
            <Bullets items={B.moves} color={bpCol(bp)} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
          {BLUEPRINT_RULES.map(([t, d]) => (
            <div key={t} style={{ padding: 14, borderRadius: 12, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="besluit" title="Het besluit">
        <Lead>Het blueprint eindigt met een besluit van de Decision Maker. Er zijn vijf uitkomsten; ze zijn alle vijf goed, als ze maar onderbouwd zijn.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
          {VERDICT.map(([t, d, c]) => (
            <div key={t} style={{ padding: 14, borderRadius: 12, background: c, color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 6, minHeight: 110 }}>
              <strong style={{ fontSize: 16 }}>{t}</strong>
              <span style={{ fontSize: 13, lineHeight: 1.45, opacity: 0.95 }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tracker" title="De 90-dagen tracker">
        <Lead>Na ‘doorgaan’ wordt het blueprint een levend plan. De tracker heeft vier delen.</Lead>
        <div style={{ padding: 18, borderRadius: 16, background: '#FFFFFF', border: '1.5px solid #E1E6EE', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', height: 46, borderRadius: 10, overflow: 'hidden' }}>
            {TRACKER.phases.map(([t], i) => (
              <div key={t} style={{ flex: [3, 2, 3][i], position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: 14, background: [AI.deep, AI.purple, '#00807E'][i], color: '#FFFFFF', fontSize: 14, fontWeight: 700, borderRight: '2px solid #FFFFFF' }}>
                {t}
                <span title="Meetmoment" style={{ position: 'absolute', right: 10, top: 15, width: 14, height: 14, borderRadius: '50%', background: '#FFFFFF', border: `3px solid ${AI.orange}` }} />
              </div>
            ))}
            <div style={{ flex: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'repeating-linear-gradient(135deg, #E9F6F5 0 8px, #D3ECE9 8px 16px)', color: '#0B5553', fontSize: 12, fontWeight: 800 }}>± 15% vrij</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr 3fr 1.2fr', gap: 8 }}>
            {TRACKER.phases.map(([t, d]) => <span key={t} style={{ fontSize: 12, lineHeight: 1.45, color: AI.text }}>{d}</span>)}
            <span style={{ fontSize: 12, lineHeight: 1.45, color: AI.text }}>Ruimte voor waarde die je nog niet kunt benoemen.</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
          {TRACKER.parts.map(([t, d], i) => (
            <div key={t} style={{ padding: 14, borderRadius: 12, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: `4px solid ${PH_COL[i]}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: PH_COL[i] }}>{i + 1}</span>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: AI.ink, marginRight: 4 }}>De laatste mijl:</span>
          {TRACKER.gates.map((g, i) => [
            <span key={g} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 12px', borderRadius: 16, background: '#E9F6F5', border: '1.5px solid #9FD3CE', fontSize: 13, fontWeight: 600, color: '#0B5553' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="#00807E" strokeWidth="2.2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="#00807E" strokeWidth="2.2" /></svg>{g}
            </span>,
            i < TRACKER.gates.length - 1 ? <span key={g + 'a'} aria-hidden="true" style={{ color: '#9FD3CE', fontWeight: 800 }}>→</span> : null,
          ])}
          <span aria-hidden="true" style={{ color: '#9FD3CE', fontWeight: 800 }}>→</span>
          <span style={{ padding: '7px 12px', borderRadius: 16, background: '#00807E', color: '#FFFFFF', fontSize: 13, fontWeight: 700 }}>Live</span>
        </div>
      </Section>

      <Section id="wie" title="Wie doet wat in de cyclus">
        <div style={{ overflowX: 'auto', borderRadius: 14, border: '1.5px solid #E1E6EE' }}>
          <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', fontFamily: 'inherit' }}>
            <thead>
              <tr style={{ background: '#F4F6FA' }}>
                <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: 13, color: AI.ink }}>Rol</th>
                {PHASES.map((p, i) => <th key={p.key} style={{ padding: '10px 6px', fontSize: 13, color: PH_COL[i], width: 86 }}>{p.title}</th>)}
                <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: 13, color: AI.ink }}>Bijdrage</th>
              </tr>
            </thead>
            <tbody>
              {WHO.map(([r, sub, d, lv]) => (
                <tr key={r} style={{ borderTop: '1px solid #E8ECF2', background: r === 'Value Architect' ? AI.lilac : '#FFFFFF' }}>
                  <td style={{ padding: '10px 14px', verticalAlign: 'top' }}><strong style={{ fontSize: 14, color: AI.ink }}>{r}</strong>{sub ? <span style={{ display: 'block', fontSize: 12, color: '#5A6478' }}>{sub}</span> : null}</td>
                  {lv.map((v, i) => (
                    <td key={i} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <span aria-label={['niet direct', 'draagt bij', 'aan zet'][v]} title={['niet direct', 'draagt bij', 'aan zet'][v]} style={{ display: 'inline-block', width: 16, height: 16, borderRadius: '50%', boxSizing: 'border-box', background: v === 2 ? PH_COL[i] : 'transparent', border: v ? `3px solid ${PH_COL[i]}` : '2px solid #E1E6EE' }} />
                    </td>
                  ))}
                  <td style={{ padding: '10px 14px', fontSize: 13, lineHeight: 1.5, color: AI.text }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span style={{ display: 'flex', gap: 16, fontSize: 12, color: '#5A6478', fontFamily: FONT }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: AI.purple }} /> aan zet</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: '50%', boxSizing: 'border-box', border: `3px solid ${AI.purple}` }} /> draagt bij</span>
        </span>
      </Section>
    </>
  );
}
