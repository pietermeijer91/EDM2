import { useState } from 'react';
import { GOV_INTRO, GOV_OWNER, PILLARS, RESPONSIBLE, REGS, REGS_NOTE, LAYERS, ETHICS, SPEED, GOV_WHO, GOV_EDSN } from '../../content/aiGovernance.js';
import { AI, Section, Lead } from '../ai/parts.jsx';

const TABS = [['wat', 'Wat is het?'], ['waarom', 'Waarom telt het?'], ['doen', 'Maatregelen'], ['ai', 'Waar AI helpt']];

function Icon({ d, color = '#FFFFFF', size = 26 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function List({ items, color }) {
  return items.map((t) => <span key={t} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.55, color: AI.text }}><span style={{ flexShrink: 0, width: 7, height: 7, marginTop: 7, borderRadius: '50%', background: color }} />{t}</span>);
}

/** AI Governance en Ethiek (AI-Native EDSN): vier pijlers op een fundament van ethiek. */
export default function AiGovernance({ view }) {
  const [sel, setSel] = useState(0);
  const [tab, setTab] = useState('wat');
  if (!view.page.isAIGOV) return null;
  const P = PILLARS[sel];
  const toEthics = () => { const el = document.getElementById('ethiek'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return (
    <>
      <Section id="kader" title="Het kader in één plaat">
        <Lead>{GOV_INTRO}</Lead>
        <div style={{ padding: '22px 20px 18px', borderRadius: 18, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ position: 'relative', margin: '0 6px', height: 74, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <svg viewBox="0 0 1000 74" preserveAspectRatio="none" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs><linearGradient id="gov-roof" x1="0" x2="1"><stop offset="0" stopColor="#2A1650" /><stop offset="1" stopColor="#6E44B8" /></linearGradient></defs>
              <path d="M0 74 L500 0 L1000 74 Z" fill="url(#gov-roof)" />
            </svg>
            <span style={{ position: 'relative', paddingBottom: 12, color: '#FFFFFF', fontSize: 15, fontWeight: 800, letterSpacing: 0.4, textAlign: 'center' }}>Governance op AI-snelheid</span>
          </div>
          <div role="tablist" aria-label="Pijlers" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, padding: '0 16px' }}>
            {PILLARS.map((p, i) => {
              const on = sel === i;
              return (
                <button key={p.key} role="tab" aria-selected={on} onClick={() => setSel(i)} style={{ minHeight: 170, padding: '18px 12px', borderRadius: 6, border: 0, cursor: 'pointer', fontFamily: 'inherit', background: on ? p.color : '#FFFFFF', color: on ? '#FFFFFF' : AI.ink, boxShadow: on ? `0 0 0 3px ${p.color}55` : `inset 0 0 0 2px ${p.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center', transition: 'background .2s' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: '50%', background: on ? 'rgba(255,255,255,.18)' : p.color }}><Icon d={p.icon} /></span>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, opacity: 0.8 }}>PIJLER {i + 1}</span>
                  <strong style={{ fontSize: 15, lineHeight: 1.3 }}>{p.title}</strong>
                </button>
              );
            })}
          </div>
          <button onClick={toEthics} style={{ margin: '4px 0 0', padding: '14px 18px', borderRadius: 10, border: 0, cursor: 'pointer', fontFamily: 'inherit', background: '#00807E', color: '#FFFFFF', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '6px 14px' }}>
            <strong style={{ fontSize: 15 }}>Fundament: AI-ethiek</strong>
            <span style={{ fontSize: 13, opacity: 0.92 }}>verantwoording · eerlijkheid · vertrouwen</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>↓</span>
          </button>
        </div>

        <div style={{ borderRadius: 16, border: `2px solid ${P.color}`, overflow: 'hidden' }}>
          <div style={{ padding: '14px 18px', background: P.color, color: '#FFFFFF', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
            <Icon d={P.icon} />
            <div style={{ flex: '1 1 220px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.4, opacity: 0.8 }}>PIJLER {sel + 1} VAN 4</span>
              <strong style={{ fontSize: 20 }}>{P.title}</strong>
            </div>
            <span role="group" aria-label="Onderdeel" style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: 4, borderRadius: 22, background: 'rgba(255,255,255,.16)' }}>
              {TABS.map(([k, label]) => (
                <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} style={{ minHeight: 34, padding: '0 12px', borderRadius: 17, border: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700, background: tab === k ? '#FFFFFF' : 'transparent', color: tab === k ? P.color : '#FFFFFF' }}>{label}</button>
              ))}
            </span>
          </div>
          <div style={{ padding: 20, background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 150 }}>
            {tab === 'wat' ? <span style={{ fontSize: 16, lineHeight: 1.65, color: '#2E3A55' }}>{P.wat}</span> : null}
            {tab === 'waarom' ? <span style={{ fontSize: 16, lineHeight: 1.65, color: '#2E3A55' }}>{P.waarom}</span> : null}
            {tab === 'doen' ? <List items={P.doen} color={P.color} /> : null}
            {tab === 'ai' ? <List items={P.ai} color={AI.teal} /> : null}
          </div>
        </div>
        <span style={{ fontSize: 14, lineHeight: 1.6, color: AI.text }}>{GOV_OWNER}</span>
      </Section>

      <Section id="verantwoord" title="Verantwoorde AI en regelgeving">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
          {RESPONSIBLE.map(([t, d], i) => (
            <div key={t} style={{ padding: 16, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: `5px solid ${['#00807E', '#6E44B8', '#1F9E95'][i]}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <strong style={{ fontSize: 16, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ overflowX: 'auto', borderRadius: 14, border: '1.5px solid #E1E6EE' }}>
          <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F4F6FA' }}>
                {['Kader', 'Status', 'Waar gaat het over?', 'Vergelijk het met'].map((h) => <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontSize: 13, color: AI.ink }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {REGS.map(([n, kind, status, focus, like], i) => (
                <tr key={n} style={{ borderTop: '1px solid #E8ECF2' }}>
                  <td style={{ padding: '12px 14px', verticalAlign: 'top' }}><strong style={{ fontSize: 14, color: AI.ink }}>{n}</strong><span style={{ display: 'inline-block', marginLeft: 8, padding: '2px 8px', borderRadius: 8, fontSize: 11, fontWeight: 800, color: '#FFFFFF', background: [AI.deep, AI.purple, '#00807E'][i] }}>{kind}</span></td>
                  <td style={{ padding: '12px 14px', fontSize: 13, lineHeight: 1.5, color: AI.text, verticalAlign: 'top' }}>{status}</td>
                  <td style={{ padding: '12px 14px', fontSize: 13, lineHeight: 1.5, color: AI.text, verticalAlign: 'top' }}>{focus}</td>
                  <td style={{ padding: '12px 14px', fontSize: 13, lineHeight: 1.5, color: AI.ink, fontStyle: 'italic', verticalAlign: 'top' }}>{like}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span style={{ fontSize: 13, lineHeight: 1.5, color: '#5A6478' }}>{REGS_NOTE}</span>
      </Section>

      <Section id="agents" title="Toezicht op agents in drie lagen">
        <Lead>Hoe meer impact, hoe meer menselijk oordeel. Vaste regels gaan voor waar het kan; wat daar doorheen glipt, vangt AI-detectie op, en wat er echt toe doet, beslist een mens.</Lead>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          {[...LAYERS].reverse().map(([t, d, ex], j) => {
            const i = 2 - j;
            return (
              <div key={t} style={{ width: `${56 + (2 - i) * 22}%`, minWidth: 280, maxWidth: '100%', boxSizing: 'border-box', padding: '14px 18px', borderRadius: 12, background: [AI.teal, AI.purple, AI.deep][i], color: '#FFFFFF', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 4, textAlign: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, opacity: 0.8 }}>LAAG {i + 1}</span>
                <strong style={{ fontSize: 16 }}>{t}</strong>
                <span style={{ fontSize: 13, opacity: 0.92 }}>{d}</span>
                <span style={{ fontSize: 12, lineHeight: 1.45, opacity: 0.85, fontStyle: 'italic' }}>Bijvoorbeeld: {ex}</span>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="ethiek" title="Het fundament: AI-ethiek">
        <Lead>{ETHICS.wat}</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
          <div style={{ padding: 18, borderRadius: 14, background: '#F4F6FA', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', color: '#5A6478' }}>{ETHICS.vraag[0]}</span>
            <strong style={{ fontSize: 22, color: AI.ink }}>“{ETHICS.vraag[1]}”</strong>
          </div>
          <div style={{ padding: 18, borderRadius: 14, background: '#00807E', color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', opacity: 0.85 }}>{ETHICS.vraag[2]}</span>
            <strong style={{ fontSize: 22 }}>“{ETHICS.vraag[3]}”</strong>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 8 }}>
          {ETHICS.principles.map(([t, d], i) => (
            <div key={t} style={{ padding: 14, borderRadius: 12, background: i < 3 ? AI.lilac : '#E9F6F5', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.45, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <strong style={{ fontSize: 17, color: AI.ink, marginTop: 4 }}>Zo maak je ethiek concreet</strong>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
          {ETHICS.doen.map(([t, d], i) => (
            <div key={t} style={{ padding: 16, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: '#00807E' }}>{i + 1}</span>
              <strong style={{ fontSize: 15, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 13, lineHeight: 1.55, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="snelheid" title="Governance op AI-snelheid">
        <div style={{ padding: '18px 22px', borderRadius: 16, background: 'linear-gradient(90deg, #2A1650, #6E44B8)', color: '#FFFFFF', fontSize: 16, lineHeight: 1.65 }}>{SPEED}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button onClick={view.open.aipol} style={{ minHeight: 40, padding: '0 16px', borderRadius: 20, border: '1.5px solid #D5DBE5', background: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: AI.ink }}>Kaders ingebouwd in de pipeline →</button>
          <button onClick={view.open.aiev} style={{ minHeight: 40, padding: '0 16px', borderRadius: 20, border: '1.5px solid #D5DBE5', background: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: AI.ink }}>Inzichten en bewijs →</button>
        </div>
      </Section>

      <Section id="wie" title="Wie is aan zet">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
          {GOV_WHO.map(([t, d], i) => (
            <div key={t} style={{ padding: 14, borderRadius: 12, background: i === 0 ? AI.deep : '#F4F6FA', color: i === 0 ? '#FFFFFF' : AI.ink, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 14 }}>{t}</strong>
              <span style={{ fontSize: 13, lineHeight: 1.5, opacity: i === 0 ? 0.92 : 1, color: i === 0 ? '#FFFFFF' : AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="bij-edsn" title="Bij EDSN">
        <div style={{ padding: 16, borderRadius: 14, border: `2px dashed ${AI.orange}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0B5553' }}>Nog in te vullen</span>
          {GOV_EDSN.map((q) => <span key={q} style={{ fontSize: 14, lineHeight: 1.5, color: AI.ink }}>• {q}</span>)}
        </div>
        <span style={{ fontSize: 12, color: '#5A6478' }}>Gebaseerd op het SAFe-artikel ‘AI Governance and Ethics’ van Scaled Agile, in eigen woorden toegepast op EDSN.</span>
      </Section>
    </>
  );
}
