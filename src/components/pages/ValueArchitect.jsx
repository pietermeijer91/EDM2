import { useState } from 'react';
import { VA_INTRO, BLIND_SPOTS, BLIND_SPOT_NOTE, WHEEL, LIFECYCLE, DOC_CHAIN, LEVELS, TRIAD, PARTNERS, TOOLKIT, RISK_COUNCIL, STORY, AT_EDSN } from '../../content/valueArchitect.js';
import { AI, Section, Lead, HumanAgent } from '../ai/parts.jsx';

const COL = ['#6E44B8', '#1F9E95', '#0072BC', '#8C6BD1', '#F39200'];

/** Donut-segment als SVG-pad, met een even brede opening (gap, in px) aan binnen- en buitenkant. */
function arc(cx, cy, r1, r2, a0, a1, gap = 0) {
  const p = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const d2 = gap / 2 / r2, d1 = gap / 2 / r1;
  const [x0, y0] = p(r2, a0 + d2), [x1, y1] = p(r2, a1 - d2), [x2, y2] = p(r1, a1 - d1), [x3, y3] = p(r1, a0 + d1);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${x0} ${y0} A${r2} ${r2} 0 ${large} 1 ${x1} ${y1} L${x2} ${y2} A${r1} ${r1} 0 ${large} 0 ${x3} ${y3} Z`;
}

function Wheel({ sel, setSel }) {
  const n = WHEEL.length, cx = 200, cy = 200, seg = (2 * Math.PI) / n;
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" role="group" aria-label="Verantwoordelijkhedenwiel" style={{ flexShrink: 0, maxWidth: '100%', height: 'auto' }}>
      {WHEEL.map((w, i) => {
        // Vaste hoeken per segment; de opening tussen segmenten volgt uit de lijndikte, zodat alles even breed blijft.
        const am = -Math.PI / 2 + i * seg, a0 = am - seg / 2, a1 = am + seg / 2, on = sel === i;
        const lx = cx + 131 * Math.cos(am), ly = cy + 131 * Math.sin(am);
        const words = w.short.split(' '), lines = w.short.length > 12 && words.length > 1 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : [w.short];
        return (
          <g key={w.key} onClick={() => setSel(i)} className="va-seg" style={{ cursor: 'pointer' }} role="button" aria-pressed={on} aria-label={w.title} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSel(i); }}>
            <path d={arc(cx, cy, 80, 186, a0, a1, 9)} fill={on ? COL[i] : '#FFFFFF'} stroke={COL[i]} strokeWidth="3" strokeLinejoin="round" />
            <g transform={`translate(${lx - 13} ${ly - (lines.length > 1 ? 36 : 30)})`}>
              <svg width="26" height="26" viewBox="0 0 24 24"><path d={w.icon} fill="none" stroke={on ? '#FFFFFF' : COL[i]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </g>
            <text x={lx} y={ly + (lines.length > 1 ? 8 : 14)} textAnchor="middle" fontSize="13" fontWeight="700" fill={on ? '#FFFFFF' : AI.ink} fontFamily="Poppins, 'Segoe UI', sans-serif">
              {lines.map((l, k) => <tspan key={l} x={lx} dy={k ? 16 : 0}>{l}</tspan>)}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="70" fill={AI.deep} />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="15" fontWeight="800" fill="#FFFFFF" fontFamily="Poppins, 'Segoe UI', sans-serif">AI Value</text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="15" fontWeight="800" fill="#FFFFFF" fontFamily="Poppins, 'Segoe UI', sans-serif">Architect</text>
    </svg>
  );
}

/** Rolpagina AI Value Architect (AI-Native EDSN). */
export default function ValueArchitect({ view }) {
  const [sel, setSel] = useState(0);
  if (!view.page.isVA) return null;
  const w = WHEEL[sel];
  const idx = (k) => WHEEL.findIndex((x) => x.key === k);
  return (
    <>
      <Section id="rol" title="De ontbrekende schakel">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
          {VA_INTRO.three.map(([t, d], i) => (
            <div key={t} style={{ padding: 16, borderRadius: 14, background: i === 1 ? AI.lilac : '#F4F6FA', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 16, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 13, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <Lead>{VA_INTRO.fit}</Lead>
      </Section>

      <Section id="blinde-vlekken" title="Waarom deze rol: drie blinde vlekken">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
          {BLIND_SPOTS.map((b) => {
            const i = idx(b.fix);
            return (
              <div key={b.title} style={{ padding: 16, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: '5px solid #C8102E', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <strong style={{ fontSize: 16, color: AI.ink }}>{b.title}</strong>
                <span style={{ fontSize: 13, lineHeight: 1.55, color: AI.text }}>{b.text}</span>
                <button onClick={() => { setSel(i); const el = document.getElementById('wiel'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '6px 10px', border: 0, borderRadius: 10, background: COL[i], color: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 700 }}>
                  Oplossing: {WHEEL[i].title} →
                </button>
              </div>
            );
          })}
        </div>
        <Lead>{BLIND_SPOT_NOTE}</Lead>
      </Section>

      <Section id="wiel" title="Het verantwoordelijkhedenwiel">
        <Lead>Vijf verantwoordelijkheden die samen de rol vormen. Klik op een deel van het wiel.</Lead>
        <div style={{ padding: 20, borderRadius: 18, background: AI.lilac, display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start', justifyContent: 'center' }}>
          <Wheel sel={sel} setSel={setSel} />
          <div aria-live="polite" style={{ flex: '1 1 320px', maxWidth: 520, minHeight: 380, padding: 20, borderRadius: 16, background: '#FFFFFF', border: `2px solid ${COL[sel]}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', color: COL[sel] }}>Verantwoordelijkheid {sel + 1} van 5</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: AI.ink }}>{w.title}</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: '#2E3A55' }}>{w.what}</span>
            <strong style={{ fontSize: 14, color: AI.ink }}>Hoe</strong>
            {w.how.map((h) => <span key={h} style={{ display: 'flex', gap: 8, fontSize: 13, lineHeight: 1.5, color: AI.text }}><span style={{ flexShrink: 0, width: 7, height: 7, marginTop: 7, borderRadius: '50%', background: COL[sel] }} />{h}</span>)}
            <span style={{ padding: '10px 12px', borderRadius: 10, background: '#F4F6FA', fontSize: 13, color: AI.ink }}><strong>Oplevering:</strong> {w.out}</span>
          </div>
        </div>
      </Section>

      <Section id="levenscyclus" title="De levenscyclus van een AI-initiatief">
        <Lead>De Value Architect begeleidt een initiatief van eerste signaal tot gerealiseerde waarde. Bij elke fase hoort een document dat meegroeit, en elke fase sluit aan op de AI Innovation Pipeline.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 6 }}>
          {LIFECYCLE.map((l, i) => (
            <div key={l.key} style={{ position: 'relative', padding: '14px 26px 14px 16px', background: ['#5B3F9E', AI.purple, AI.soft, AI.teal][i], color: '#FFFFFF', clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%' + (i ? ', 16px 50%' : '') + ')', paddingLeft: i ? 26 : 16, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <strong style={{ fontSize: 17 }}>{l.title}</strong>
              <span style={{ fontSize: 12, opacity: 0.9 }}>{l.nl}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 6 }}>
          {LIFECYCLE.map((l) => (
            <div key={l.key} style={{ padding: 12, borderRadius: 12, background: '#FFFFFF', border: '1.5px solid #E1E6EE', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: AI.purple }}>DOCUMENT</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: AI.ink }}>{l.doc}</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: AI.teal, marginTop: 4 }}>IN DE PIPELINE</span>
              <button onClick={view.open[l.pipe[1]]} style={{ textAlign: 'left', padding: 0, border: 0, background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: '#0062A3', textDecoration: 'underline' }}>{l.pipe[0]}</button>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {DOC_CHAIN.map((d, i) => [
            <span key={d} style={{ padding: '6px 12px', borderRadius: 14, background: i === 2 ? AI.orange : AI.deep, color: i === 2 ? '#2B1A00' : '#FFFFFF', fontSize: 12, fontWeight: 700 }}>{d}</span>,
            i < DOC_CHAIN.length - 1 ? <span key={d + 'a'} aria-hidden="true" style={{ color: '#A99AD0', fontWeight: 800 }}>→</span> : null,
          ])}
        </div>
        <span style={{ fontSize: 13, color: AI.text }}>Het besluit heeft vijf uitkomsten: <strong>doorgaan · doorgaan met voorwaarden · bijsturen · pauzeren · stoppen</strong>. Stoppen is een respectabel besluit; het goed onderbouwen is het vak.</span>
      </Section>

      <Section id="niveaus" title="Op elk niveau">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
          {[...LEVELS].reverse().map(([t, d], i) => (
            <div key={t} style={{ flex: 1, height: 90 + i * 34, padding: 12, boxSizing: 'border-box', borderRadius: '12px 12px 4px 4px', background: ['#E7E1F5', '#C9BDE6', AI.soft, AI.purple][i], color: i > 1 ? '#FFFFFF' : AI.deep, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4 }}>
              <strong style={{ fontSize: 15 }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.4, opacity: 0.92 }}>{d}</span>
            </div>
          ))}
        </div>
        <span style={{ fontSize: 15, fontWeight: 700, color: AI.deep }}>Breng waarde op het niveau waar je invloed hebt.</span>
      </Section>

      <Section id="samenwerking" title="Verbindt, vervangt niet">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
          {TRIAD.map(([t, d], i) => (
            <div key={t} style={{ padding: 16, borderRadius: 14, background: i === 2 ? AI.deep : '#F4F6FA', color: i === 2 ? '#FFFFFF' : AI.ink, display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'center', alignItems: 'center' }}>
              {i === 2 ? <HumanAgent size={30} /> : <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" fill={i ? AI.teal : AI.orange} /><path d="M4 22c0-5 4-8 8-8s8 3 8 8" fill={i ? AI.teal : AI.orange} /></svg>}
              <strong style={{ fontSize: 15 }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.5, opacity: 0.9 }}>{d}</span>
            </div>
          ))}
        </div>
        <span style={{ fontSize: 12, color: '#5A6478', textAlign: 'center' }}>De kern-driehoek van elk AI-initiatief</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
          {PARTNERS.map(([t, d, k]) => (
            <button key={t} onClick={view.open[k]} style={{ textAlign: 'left', padding: 14, borderRadius: 12, border: '1.5px solid #E1E6EE', background: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t} →</strong>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{d}</span>
            </button>
          ))}
        </div>
        <Lead>De rol kan bij één team zitten, bij een groep teams of de hele ART. Eén persoon kan hem invullen, of een team van Value Architects deelt hem over alle initiatieven, zoals bij SPC’s en RTE’s.</Lead>
      </Section>

      <Section id="gereedschap" title="De gereedschapskist">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 8 }}>
          {TOOLKIT.map(([t, d], i) => (
            <div key={t} style={{ padding: 12, borderRadius: 12, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: `4px solid ${COL[i]}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <strong style={{ fontSize: 13, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.45, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: 18, borderRadius: 16, background: AI.lilac, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: 18, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 16, color: AI.ink }}>{RISK_COUNCIL.title}</strong>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: AI.text }}>{RISK_COUNCIL.text}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {RISK_COUNCIL.agents.map(([t, d]) => (
                <span key={t} title={d} style={{ width: 92, padding: '8px 4px', borderRadius: 10, background: '#FFFFFF', border: `2px solid ${AI.teal}`, textAlign: 'center', fontSize: 11, fontWeight: 700, color: AI.ink }}>{t}</span>
              ))}
            </div>
            <svg width="220" height="22" viewBox="0 0 220 22" aria-hidden="true"><path d="M30 0v10h160V0M110 10v10" fill="none" stroke={AI.teal} strokeWidth="2" /></svg>
            <span style={{ padding: '8px 16px', borderRadius: 10, background: AI.teal, color: '#FFFFFF', fontSize: 12, fontWeight: 800 }}>Supervisor → één oordeel</span>
          </div>
        </div>
      </Section>

      <Section id="vertellen" title="Een succes laten reizen">
        <Lead>Successen blijven vaak in één team hangen. Niemand neemt een getal over: mensen nemen een verhaal over waar een getal in zit. Zes ingrediënten laten een succes reizen.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 6 }}>
          {STORY.map(([t, d], i) => (
            <div key={t} style={{ padding: 10, borderRadius: 10, background: i === 4 ? '#FFF4E0' : '#F4F6FA', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: AI.purple }}>{i + 1}</span>
              <strong style={{ fontSize: 13, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 11, lineHeight: 1.4, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="bij-edsn" title="Bij EDSN">
        <div style={{ padding: 16, borderRadius: 14, border: `2px dashed ${AI.orange}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#7A4A00' }}>Nog in te vullen</span>
          {AT_EDSN.map((q) => <span key={q} style={{ fontSize: 14, lineHeight: 1.5, color: AI.ink }}>• {q}</span>)}
        </div>
        <span style={{ fontSize: 12, color: '#5A6478' }}>Gebaseerd op de training AI-Native Value Architect van Scaled Agile, in eigen woorden toegepast op EDSN.</span>
      </Section>
    </>
  );
}
