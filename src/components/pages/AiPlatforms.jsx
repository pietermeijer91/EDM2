import { PLATFORMS as P } from '../../content/aiPipeline.js';
import { AI, Section, Lead, Chevron, LayerNav } from '../ai/parts.jsx';

/** De control plane-plaat: rollen bovenaan, workflows onder kaders, inzichten en bewijs. */
function ControlPlane({ play }) {
  const flows = [[2, 38, 'Workflows', true], [24, 38, 'Workflows', true], [42, 46, '', false], [52, 30, '', false], [55, 56, '', false], [72, 38, 'Workflows', true], [60, 22, '', false]];
  const up = [9, 31, 79]; const down = [15, 37, 85];
  return (
    <div style={{ padding: 18, borderRadius: 16, background: '#FFFFFF', border: `1.5px solid ${AI.lilacLine}`, overflowX: 'auto' }}>
      <div style={{ minWidth: 820 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: 6, marginBottom: 8 }}>
          {P.actors.map((a, i) => (
            <span key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
              <svg width="40" height="30" viewBox="0 0 40 30" aria-hidden="true">
                {a.startsWith('AI-Native') ? <><circle cx="9" cy="17" r="5" fill={AI.soft} /><rect x="14" y="2" width="12" height="9" rx="3" fill={AI.teal} /><circle cx="31" cy="17" r="5" fill={AI.purple} /><circle cx="20" cy="22" r="5" fill="#8A8F99" /></> : <><circle cx="20" cy="9" r="6" fill="#8A8F99" /><path d="M8 30v-4a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v4z" fill={AI.purple} /></>}
              </svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: AI.ink, lineHeight: 1.25 }}>{a}</span>
            </span>
          ))}
        </div>
        <div style={{ padding: '10px 0', background: '#C9BDE6', transform: 'skewX(-20deg)', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', transform: 'skewX(20deg)', fontSize: 15, fontWeight: 800, color: AI.deep }}>Gedeelde platforms vormen het control plane</span>
        </div>
        <div style={{ position: 'relative', height: 260, margin: '0 12px', border: '2px dashed #C9BDE6', borderTop: 0 }}>
          <div style={{ position: 'absolute', left: '6%', right: '6%', top: 22, height: 3, background: '#C3C8D2' }} />
          <span style={{ position: 'absolute', left: '50%', top: 10, transform: 'translateX(-50%) skewX(-20deg)', padding: '5px 18px', background: '#ECE7F7' }}><span style={{ display: 'inline-block', transform: 'skewX(20deg)', fontSize: 12, fontWeight: 700, color: AI.deep }}>Binnen ingebouwde kaders</span></span>
          <span style={{ position: 'absolute', left: '3%', top: 54, fontSize: 11, fontWeight: 700, color: '#5A6478' }}>AI-Empowered Workflows</span>
          {flows.map(([x, y, label, strong], i) => (
            <span key={i} className="aip-flow" style={{ position: 'absolute', left: x + '%', top: y + '%', animationDelay: -i * 0.9 + 's', animationPlayState: play }}>{label ? <Chevron label={label} /> : <Chevron label="" style={{ width: 60, padding: 0 }} />}</span>
          ))}
          {up.map((x) => <span key={'u' + x} style={{ position: 'absolute', left: x + '%', top: 132, height: 60, borderLeft: `2px dashed ${AI.purple}` }}><svg style={{ position: 'absolute', left: -6, top: -6 }} width="10" height="8" viewBox="0 0 10 8"><path d="M5 0l5 8H0z" fill={AI.purple} /></svg></span>)}
          {down.map((x) => <span key={'d' + x} style={{ position: 'absolute', left: x + '%', top: 132, height: 92, borderLeft: `2px dashed ${AI.teal}` }}><svg style={{ position: 'absolute', left: -6, bottom: -6 }} width="10" height="8" viewBox="0 0 10 8"><path d="M5 8l5-8H0z" fill={AI.teal} /></svg></span>)}
          <div style={{ position: 'absolute', left: '2%', right: '2%', top: 190, height: 5, background: AI.purple }} />
          <span style={{ position: 'absolute', left: '50%', top: 180, transform: 'translateX(-50%) skewX(-20deg)', padding: '4px 18px', background: '#ECE7F7' }}><span style={{ display: 'inline-block', transform: 'skewX(20deg)', fontSize: 12, fontWeight: 700, color: AI.deep }}>Gevoed door inzichten</span></span>
          <div style={{ position: 'absolute', left: '2%', right: '2%', top: 226, height: 5, background: AI.teal }} />
          <span style={{ position: 'absolute', left: '50%', top: 216, transform: 'translateX(-50%) skewX(-20deg)', padding: '4px 18px', background: '#E3F3F1' }}><span style={{ display: 'inline-block', transform: 'skewX(20deg)', fontSize: 12, fontWeight: 700, color: '#0E5F59' }}>Vastgelegd als bewijs</span></span>
        </div>
      </div>
    </div>
  );
}

/** Pagina: Shared Platforms (laag 4 van de AI Innovation Pipeline). */
export default function AiPlatforms({ view }) {
  if (!view.page.isAIPLAT) return null;
  return (
    <>
      <Section id="control-plane" title="Het control plane van de pipeline">
        <Lead>{P.intro}</Lead>
        <ControlPlane play={view.play} />
      </Section>

      <Section id="functies" title="Vijf functies van het platform">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 8 }}>
          {P.functions.map(([t, d], i) => (
            <div key={t} style={{ padding: 12, borderRadius: 12, background: i % 2 ? AI.lilac : '#FFFFFF', border: '1.5px solid #E1E6EE', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: AI.purple, color: '#FFF', fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
              <span style={{ fontSize: 12, lineHeight: 1.45, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="niveaus" title="Eén platform, meerdere niveaus">
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '60px 220px 60px', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: AI.purple, textAlign: 'center' }}>Bewezen<br />basis<svg width="18" height="120" viewBox="0 0 18 120" aria-hidden="true"><path d="M9 0v110M2 102l7 12 7-12" fill="none" stroke={AI.purple} strokeWidth="3" /></svg></span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {P.levels.items.map((l, i) => (
                <span key={l} style={{ margin: `0 ${i * 14}px`, padding: '10px 0', textAlign: 'center', borderRadius: 8, background: ['#5B3F9E', AI.purple, AI.soft, '#C9BDE6'][i], color: i === 3 ? AI.deep : '#FFFFFF', fontSize: 14, fontWeight: 700 }}>{l}</span>
              ))}
            </div>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: AI.teal, textAlign: 'center' }}><svg width="18" height="120" viewBox="0 0 18 120" aria-hidden="true"><path d="M9 120V10M2 18l7-12 7 12" fill="none" stroke={AI.teal} strokeWidth="3" /></svg>Lokale<br />verbetering</span>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Lead>{P.levels.text}</Lead>
            <Lead>{P.sources}</Lead>
          </div>
        </div>
      </Section>

      <Section id="afspraken" title="Wat een team brengt en krijgt">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          <div style={{ padding: 16, borderRadius: 14, background: '#EEF2F7', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ color: AI.ink }}>Een nieuwe workflow of agent…</strong>
            {P.contract.give.map((g) => <span key={g} style={{ fontSize: 14, color: AI.text }}>✓ {g}</span>)}
          </div>
          <div style={{ padding: 16, borderRadius: 14, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ color: AI.deep }}>…en krijgt daarvoor terug</strong>
            <span style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{P.contract.get.map((g) => <span key={g} style={{ padding: '5px 10px', borderRadius: 12, background: '#FFFFFF', fontSize: 12, fontWeight: 600, color: AI.deep }}>{g}</span>)}</span>
          </div>
        </div>
        <span style={{ padding: '12px 16px', borderRadius: 12, background: '#FFF8EC', fontSize: 15, lineHeight: 1.6, color: '#5A3A00' }}><strong>Context reist mee.</strong> {P.context}</span>
        <Lead>{P.scale}</Lead>
      </Section>

      <LayerNav view={view} current="aiplat" />
    </>
  );
}
