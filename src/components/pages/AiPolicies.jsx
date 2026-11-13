import { POLICIES as P } from '../../content/aiPipeline.js';
import { AI, Section, Lead, Chevron, GoTo, LayerNav } from '../ai/parts.jsx';

const Shield = ({ size = 18, color = AI.purple }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" fill={color} /><path d="M9 12l2 2 4-4" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" /></svg>
);

/** Pagina: Embedded Policies (laag 2 van de AI Innovation Pipeline). */
export default function AiPolicies({ view }) {
  if (!view.page.isAIPOL) return null;
  return (
    <>
      <Section id="soorten" title="Drie soorten kaders">
        <Lead>{P.intro}</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
          {P.kinds.map(([t, d], i) => (
            <div key={t} style={{ padding: 16, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: `5px solid ${[AI.purple, AI.teal, AI.orange][i]}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: AI.ink }}>{t}</span>
              <span style={{ fontSize: 13, lineHeight: 1.55, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ingebouwd" title="Ingebouwd in elke stap, niet achteraf bij de poort">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          <div style={{ padding: 16, borderRadius: 14, background: '#F4F6FA', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <strong style={{ fontSize: 14, color: '#5A6478' }}>Vroeger: inspecteren bij de poort</strong>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, overflow: 'hidden' }}>
              {['Stap', 'Stap', 'Stap'].map((s, i) => <Chevron key={i} label={s} style={{ padding: '0 22px 0 10px' }} />)}
              <span style={{ width: 8, height: 44, background: '#C8102E', borderRadius: 2 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#8A1020' }}>Poort</span>
            </span>
          </div>
          <div style={{ padding: 16, borderRadius: 14, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <strong style={{ fontSize: 14, color: AI.deep }}>AI-Native: kaders in elke stap</strong>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {['Stap', 'Stap', 'Stap', 'Stap'].map((s, i) => (
                <span key={i} style={{ position: 'relative' }}><Chevron label={s} strong style={{ padding: '0 22px 0 10px' }} /><span style={{ position: 'absolute', top: -10, right: 10 }}><Shield /></span></span>
              ))}
            </span>
          </div>
        </div>
        <Lead>{P.builtIn}</Lead>
      </Section>

      <Section id="mens-in-de-lus" title="Mens in de lus of op de lus">
        <Lead>{P.loop.text}</Lead>
        <div style={{ padding: 20, borderRadius: 16, background: '#FFFFFF', border: `1.5px solid ${AI.lilacLine}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            {[P.loop.hotl, P.loop.hitl].map(([t, d], i) => (
              <div key={t} style={{ flex: 1, padding: 12, borderRadius: 12, background: i ? '#FDF1F2' : '#EAF7F5', display: 'flex', flexDirection: 'column', gap: 4, textAlign: i ? 'right' : 'left' }}>
                <strong style={{ color: i ? '#8A1020' : '#0E5F59' }}>{t}</strong>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ position: 'relative', height: 150 }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: 70, height: 10, borderRadius: 5, background: `linear-gradient(90deg, ${AI.teal}, #E9D8A6, #C8102E)` }} />
            <span style={{ position: 'absolute', left: 0, top: 88, fontSize: 12, fontWeight: 700, color: '#0E5F59' }}>Routine en herstelbaar</span>
            <span style={{ position: 'absolute', right: 0, top: 88, fontSize: 12, fontWeight: 700, color: '#8A1020' }}>Ingrijpend en onomkeerbaar</span>
            {P.loop.examples.map(([label, pos], i) => (
              <span key={label} style={{ position: 'absolute', left: `calc(${pos * 100}% - ${pos * 150}px)`, top: i % 2 ? 108 : 6, width: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {i % 2 ? <span style={{ width: 2, height: 0 }} /> : null}
                <span style={{ padding: '5px 8px', borderRadius: 8, background: AI.lilac, fontSize: 11, lineHeight: 1.3, fontWeight: 600, color: AI.deep, textAlign: 'center' }}>{label}</span>
              </span>
            ))}
          </div>
          <span style={{ fontSize: 12, color: '#5A6478' }}>Voorbeelden ter illustratie; de echte grenzen leggen we per product vast in de kaders.</span>
        </div>
      </Section>

      <Section id="agents" title={P.agents.title}>
        <Lead>{P.agents.text}</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 8, alignItems: 'end' }}>
          {P.agents.ladder.map(([t, d], i) => (
            <div key={t} style={{ height: i === 3 ? 110 : 90 + i * 40, padding: 12, boxSizing: 'border-box', borderRadius: '12px 12px 4px 4px', background: i === 3 ? '#FDF1F2' : [AI.lilac, '#E2D9F4', '#C9BDE6'][i], display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4 }}>
              <strong style={{ fontSize: 14, color: i === 3 ? '#8A1020' : AI.deep }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.4, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: AI.ink }}>Stopregels:</span>
          {P.agents.stop.map((s) => <span key={s} style={{ padding: '6px 12px', borderRadius: 14, background: AI.deep, color: '#FFFFFF', fontSize: 13, fontWeight: 700 }}>{s}</span>)}
        </div>
        <GoTo onClick={view.open.governance}>Kaders op portfolioniveau: AI Governance and Ethics</GoTo>
      </Section>

      <LayerNav view={view} current="aipol" />
    </>
  );
}
