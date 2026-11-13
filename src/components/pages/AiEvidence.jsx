import { EVIDENCE as E } from '../../content/aiPipeline.js';
import { AI, Section, Lead, LayerNav } from '../ai/parts.jsx';

/** Pagina: Insights and Evidence (laag 3 van de AI Innovation Pipeline). */
export default function AiEvidence({ view }) {
  if (!view.page.isAIEV) return null;
  const loop = ['Bewijs', 'Inzicht', 'Intentie en context', 'Volgende output'];
  return (
    <>
      <Section id="bewijs" title="Bewijs: het audittrail van mens en agent">
        <Lead>{E.intro}</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 8 }}>
          {E.types.map(([t, d]) => (
            <div key={t} style={{ padding: 12, borderRadius: 12, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderLeft: `4px solid ${AI.teal}`, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.45, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <span style={{ padding: '12px 16px', borderRadius: 12, background: AI.lilac, fontSize: 15, lineHeight: 1.6, color: AI.deep, fontWeight: 600 }}>{E.trust}</span>
      </Section>

      <Section id="voorbeeld" title={E.story.title}>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 10 }}>
          <div style={{ position: 'absolute', left: '6%', right: '6%', top: 17, height: 3, background: AI.lilacLine }} />
          {E.story.steps.map(([t, d], i) => (
            <div key={t} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', background: i === 3 ? AI.orange : i === 4 ? '#95C11F' : AI.purple, color: i >= 3 ? '#1F1A00' : '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 4px #FFFFFF' }}>{i + 1}</span>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.5, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="inzicht" title="Van bewijs naar inzicht">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: 300, height: 300, flexShrink: 0 }}>
            <svg width="300" height="300" viewBox="0 0 300 300" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
              <circle cx="150" cy="150" r="105" fill="none" stroke={AI.lilacLine} strokeWidth="22" />
              <circle cx="150" cy="150" r="105" fill="none" stroke={AI.purple} strokeWidth="3" strokeDasharray="9 10" className="cf-dash" style={{ animationPlayState: view.play }} />
            </svg>
            {loop.map((l, i) => {
              const a = (-90 + i * 90) * Math.PI / 180;
              return (
                <span key={l} style={{ position: 'absolute', left: 150 + 105 * Math.cos(a), top: 150 + 105 * Math.sin(a), transform: 'translate(-50%,-50%)', width: 104, padding: '8px 6px', borderRadius: 12, background: i === 0 ? AI.teal : i === 1 ? AI.purple : '#FFFFFF', border: i > 1 ? `2px solid ${AI.purple}` : 0, color: i > 1 ? AI.ink : '#FFFFFF', fontSize: 13, fontWeight: 700, textAlign: 'center', boxSizing: 'border-box' }}>{l}</span>
              );
            })}
          </div>
          <div style={{ flex: '1 1 300px' }}><Lead>{E.insight}</Lead></div>
        </div>
      </Section>

      <LayerNav view={view} current="aiev" />
    </>
  );
}
