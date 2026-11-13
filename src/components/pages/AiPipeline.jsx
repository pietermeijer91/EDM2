import { STAGES, COMPONENTS, INTERPLAY, OUTPUTS, SET_BASED, KANBAN } from '../../content/aiPipeline.js';
import { AI, Section, Lead, GoTo } from '../ai/parts.jsx';

const OUT = { Experiment: '#8C6BD1', Prototype: '#1F9E95', Feature: '#1B2A5C', Enabler: '#B5473C' };

function Tag({ type, small }) {
  return <span style={{ display: 'inline-block', padding: small ? '3px 7px' : '5px 10px', background: OUT[type], color: '#FFFFFF', fontSize: small ? 11 : 12, fontWeight: 700, borderRadius: 3, whiteSpace: 'nowrap' }}>{type}</span>;
}

/** Het voorbeeld-Kanbanbord langs de stappen van de levenscyclus (met bewegende kaart). */
function Board({ play }) {
  const items = { Funnel: [['Experiment', 'Chatbot voor storingsvragen?'], ['Feature', 'Realtime meterdata']], Discover: [['Prototype', 'Nieuw dashboard'], ['Experiment', 'Slimmer plannen']], Specify: [['Feature', 'API voor netbeheer']], Build: [['Enabler', 'Datapijplijn'], ['Feature', 'Melding bij afwijking']], Validate: [['Feature', 'Selfservice-portal']], Release: [['Feature', 'Canary: nieuwe zoekfunctie']], Klaar: [['Feature', 'Verbruiksoverzicht']] };
  return (
    <div style={{ position: 'relative', padding: 12, borderRadius: 16, background: AI.lilac, overflowX: 'auto' }}>
      <div style={{ position: 'relative', minWidth: 840, display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: 6 }}>
        {KANBAN.columns.map((col, i) => (
          <div key={col} style={{ minHeight: 200, padding: 8, borderRadius: 10, background: i === 0 || i === 6 ? '#ECE7F7' : '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5, color: AI.deep }}>{col}</span>
            {(items[col] || []).map(([type, label], j) => (
              <span key={j} style={{ padding: '6px 7px', borderRadius: 7, border: '1.5px solid #E1E6EE', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Tag type={type} small />
                <span style={{ fontSize: 11, lineHeight: 1.35, fontWeight: 600, color: AI.ink }}>{label}</span>
              </span>
            ))}
          </div>
        ))}
        <span className="aip-move" style={{ position: 'absolute', top: 150, width: 'calc(100% / 7 - 18px)', marginLeft: 9, animationPlayState: play }}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '6px 7px', borderRadius: 7, background: '#FFF4E0', border: `2px solid ${AI.orange}`, boxShadow: '0 6px 14px rgba(0,0,0,.15)' }}>
            <Tag type="Feature" small />
            <span style={{ fontSize: 11, fontWeight: 700, color: AI.ink }}>F-101 stroomt door</span>
          </span>
        </span>
      </div>
    </div>
  );
}

/** Uitlegpagina van de AI Innovation Pipeline (AI-Native EDSN). */
export default function AiPipeline({ view }) {
  if (!view.page.isAIPIPE) return null;
  return (
    <>
      <Section id="stappen" title="Vijf stappen in de levenscyclus">
        <Lead>Elke stap doen mensen en AI-agents samen. Per stap verschilt wat er gebeurt met een leeroutput (experiment of prototype) en met een waarde-output (feature of enabler).</Lead>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {STAGES.map((st, i) => (
            <div key={st.key} style={{ display: 'grid', gridTemplateColumns: '150px minmax(0, 1fr) 210px', gap: 14, padding: '14px 16px', borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', alignItems: 'start' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: AI.purple }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: AI.ink }}>{st.title}</span>
                <span style={{ fontSize: 12, color: '#5A6478' }}>{st.nl}</span>
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: AI.text }}>{st.text}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, lineHeight: 1.45 }}>
                <span style={{ padding: '6px 8px', borderRadius: 8, background: '#F1ECFA', color: AI.deep }}><strong>Leren:</strong> {st.learn}</span>
                <span style={{ padding: '6px 8px', borderRadius: 8, background: '#EEF2F7', color: AI.ink }}><strong>Waarde:</strong> {st.value}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="leren-en-waarde" title="Leren en waarde: set-based werken">
        <Lead>De echte kracht van de pipeline zie je niet bij één output, maar als je naar het hele systeem kijkt. AI-Native EDSN kent twee soorten output.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          {[OUTPUTS.learn, OUTPUTS.value].map((o, i) => (
            <div key={o.title} style={{ padding: 16, borderRadius: 14, background: i ? '#EEF2F7' : '#F1ECFA', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: i ? AI.ink : AI.purple }}>Output voor {o.title.toLowerCase()}</span>
              <span style={{ display: 'flex', gap: 6 }}>{o.items.map((t) => <Tag key={t} type={t} />)}</span>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: AI.text }}>{o.text}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '20px 18px', borderRadius: 16, background: '#FFFFFF', border: `1.5px solid ${AI.lilacLine}`, overflowX: 'auto' }}>
          <div style={{ minWidth: 820, display: 'grid', gridTemplateColumns: 'auto 24px auto 24px auto 24px auto 24px auto 24px auto 24px auto', alignItems: 'center', gap: 4 }}>
            {[
              ['Uitkomst', <svg key="t" width="34" height="34" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="none" stroke={AI.teal} strokeWidth="3" /><circle cx="22" cy="22" r="9" fill="none" stroke={AI.teal} strokeWidth="3" /><circle cx="22" cy="22" r="3" fill={AI.teal} /></svg>],
              ['Opties', <span key="o" style={{ display: 'flex', gap: 3 }}>{[0, 1, 2].map((k) => <span key={k} style={{ width: 14, height: 14, borderRadius: 3, background: '#C9BDE6' }} />)}</span>],
              ['Leergolf 1', <span key="g1" style={{ display: 'flex', flexDirection: 'column', gap: 3 }}><Tag type="Experiment" small /><Tag type="Prototype" small /></span>],
              ['Genoeg vertrouwen?', <span key="q1" style={{ width: 34, height: 34, transform: 'rotate(45deg)', background: '#FFF4E0', border: `2px solid ${AI.orange}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ transform: 'rotate(-45deg)', fontWeight: 800, color: '#7A4A00' }}>?</span></span>],
              ['Leergolf 2', <span key="g2" style={{ display: 'flex', flexDirection: 'column', gap: 3 }}><Tag type="Experiment" small /></span>],
              ['Vertrouwen', <span key="q2" style={{ width: 34, height: 34, transform: 'rotate(45deg)', background: '#EAF5D6', border: '2px solid #95C11F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ transform: 'rotate(-45deg)', fontWeight: 800, color: '#2F4A0B' }}>✓</span></span>],
              ['Bouwen en releasen', <span key="v" style={{ display: 'flex', flexDirection: 'column', gap: 3 }}><Tag type="Feature" small /><Tag type="Enabler" small /></span>],
            ].flatMap(([label, el], i, arr) => [
              <span key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>{el}<span style={{ fontSize: 11, fontWeight: 700, color: AI.ink }}>{label}</span></span>,
              i < arr.length - 1 ? <svg key={label + 'a'} width="24" height="12" viewBox="0 0 24 12" aria-hidden="true"><path d="M0 6h18M14 1l6 5-6 5" fill="none" stroke="#A99AD0" strokeWidth="2.4" /></svg> : null,
            ])}
          </div>
          <div style={{ minWidth: 820, marginTop: 10, display: 'flex', justifyContent: 'center' }}>
            <span style={{ padding: '4px 12px', borderRadius: 12, background: '#FFF4E0', fontSize: 12, fontWeight: 700, color: '#7A4A00' }}>Nog gaten in het vertrouwen? Dan volgt een gerichte nieuwe leergolf.</span>
          </div>
        </div>
        <ol style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 15, lineHeight: 1.6, color: '#2E3A55' }}>
          {SET_BASED.map((t) => <li key={t}>{t}</li>)}
        </ol>
      </Section>

      <Section id="kanban" title="Het Kanban-bord langs de levenscyclus">
        <Lead>{KANBAN.intro}</Lead>
        <Board play={view.play} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 10 }}>
          {KANBAN.metrics.map(([t, d]) => (
            <div key={t} style={{ padding: 12, borderRadius: 12, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: AI.ink }}>{t}</span>
              <span style={{ fontSize: 12, lineHeight: 1.5, color: AI.text }}>{d}</span>
            </div>
          ))}
        </div>
        <GoTo onClick={view.open.cflow}>Zo sturen we de flow: Continuous Flow</GoTo>
      </Section>

      <Section id="componenten" title="Vier componenten onder de pipeline">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          {COMPONENTS.map((c, i) => (
            <button key={c.key} onClick={view.open[c.key]} style={{ textAlign: 'left', padding: 18, borderRadius: 14, border: '1.5px solid #E1E6EE', borderTop: `5px solid ${i === 3 ? AI.deep : AI.purple}`, background: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: AI.purple }}>LAAG {i + 1}</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: AI.ink }}>{c.title}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#5A6478' }}>{c.nl}</span>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: AI.text }}>{c.text}</span>
              <span style={{ marginTop: 4, fontSize: 13, fontWeight: 700, color: AI.purple }}>Lees meer →</span>
            </button>
          ))}
        </div>
        <Lead>{INTERPLAY}</Lead>
      </Section>
    </>
  );
}
