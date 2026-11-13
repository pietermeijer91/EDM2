import { WORKFLOWS as W } from '../../content/aiPipeline.js';
import { AI, Section, Lead, Chevron, HumanAgent, LayerNav } from '../ai/parts.jsx';

const Q_ICON = {
  Grounded: 'M4 20h16M8 20v-6h8v6M12 4v6M9 7l3-3 3 3',
  Connected: 'M6 6h4v4H6zM14 14h4v4h-4zM10 8h4v6',
  Controlled: 'M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z',
  Auditable: 'M5 4h10l4 4v12H5zM9 12h6M9 16h4',
  Owned: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6',
};

/** Pagina: AI-Empowered Workflows (laag 1 van de AI Innovation Pipeline). */
export default function AiWorkflows({ view }) {
  if (!view.page.isAIWF) return null;
  const ex = W.example;
  return (
    <>
      <Section id="waarom" title="Ruimte voor de eigen werkwijze">
        <Lead>{W.why}</Lead>
      </Section>

      <Section id="wat" title="Wat is een AI-Empowered workflow?">
        <Lead>{W.what}</Lead>
        <div style={{ borderRadius: 16, background: '#FFFFFF', border: `1.5px solid ${AI.lilacLine}`, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '14px 20px', background: `linear-gradient(90deg, rgba(220,211,240,0.2), ${AI.lilacLine}, rgba(220,211,240,0.2))` }}>
            {ex.stages.map((s, i) => [
              <span key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><HumanAgent size={30} /><span style={{ fontSize: 18, fontWeight: 700, color: AI.ink }}>{s}</span></span>,
              i === 0 ? <svg key="a" width="120" height="16" viewBox="0 0 120 16" aria-hidden="true"><path d="M10 8h100" stroke="#A99AD0" strokeWidth="6" /><path d="M2 8l11-7v14zM118 8l-11-7v14z" fill="#A99AD0" /></svg> : null,
            ])}
          </div>
          <div style={{ padding: 16, overflowX: 'auto' }}>
            <span style={{ display: 'block', textAlign: 'center', fontSize: 12, fontWeight: 800, letterSpacing: 1.5, color: AI.purple }}>WORKFLOWS · {ex.title.toUpperCase()}</span>
            <div style={{ position: 'relative', minWidth: 760, height: 300, marginTop: 8 }}>
              {ex.flows.map(([label, x, y]) => (
                <span key={label} style={{ position: 'absolute', left: x + '%', top: y + '%' }}><Chevron label={label} /></span>
              ))}
              <div style={{ position: 'absolute', left: '14%', top: '44%', width: '64%', padding: '22px 14px 10px', borderRadius: 4, background: `linear-gradient(90deg, rgba(220,211,240,0.15), ${AI.lilacLine})`, clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)' }}>
                <span style={{ position: 'absolute', left: 0, right: 0, top: 4, textAlign: 'center', fontSize: 11, fontWeight: 700, color: AI.deep }}>End-to-end workflow voor empathie-interviews</span>
                <span style={{ display: 'flex', gap: 18, justifyContent: 'center' }}>{ex.nested.map((n) => <Chevron key={n} label={n} strong />)}</span>
              </div>
            </div>
          </div>
        </div>
        <Lead>{ex.text}</Lead>
        <span style={{ padding: '12px 16px', borderRadius: 12, background: AI.lilac, fontSize: 15, lineHeight: 1.6, color: AI.deep, fontWeight: 600 }}>{W.power}</span>
      </Section>

      <Section id="kwaliteiten" title="Vijf kwaliteiten van een AI-Empowered workflow">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 10 }}>
          {W.qualities.map(([nl, en, text]) => (
            <div key={en} style={{ padding: 14, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: AI.purple, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d={Q_ICON[en]} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: AI.ink }}>{nl}</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: AI.purple }}>{en}</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{text}</span>
            </div>
          ))}
        </div>
        <Lead>{W.qualitiesNote}</Lead>
      </Section>

      <Section id="voorbeeld" title={W.okr.title}>
        <div style={{ padding: 18, borderRadius: 16, background: AI.lilac, display: 'grid', gridTemplateColumns: '230px minmax(0, 1fr)', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ alignSelf: 'flex-start', padding: '4px 12px', borderRadius: 12, background: AI.deep, color: '#FFFFFF', fontSize: 12, fontWeight: 800 }}>Eigenaar: {W.okr.owner}</span>
            <div style={{ padding: 14, borderRadius: 14, background: '#FFFFFF', border: `2px solid ${AI.teal}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true"><rect x="2" y="4" width="22" height="15" rx="5" fill={AI.teal} /><circle cx="9" cy="11.5" r="2.2" fill="#FFF" /><circle cx="17" cy="11.5" r="2.2" fill="#FFF" /><path d="M13 4V1" stroke={AI.teal} strokeWidth="2" /></svg><strong style={{ color: AI.ink }}>{W.okr.agent}</strong></span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: AI.teal }}>GEGROND IN</span>
              {W.okr.grounded.map((g) => <span key={g} style={{ fontSize: 12, color: AI.text }}>• {g}</span>)}
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: AI.purple, marginTop: 4 }}>BEHEERST DOOR</span>
              <span style={{ fontSize: 12, color: AI.text }}>{W.okr.controlled}</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {W.okr.steps.map(([t, d], i) => (
              <div key={t} style={{ display: 'grid', gridTemplateColumns: '36px minmax(0, 1fr)', gap: 10, alignItems: 'start' }}>
                <span style={{ width: 32, height: 32, borderRadius: '50%', background: AI.purple, color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                <span style={{ padding: '10px 12px', borderRadius: 12, background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <strong style={{ fontSize: 14, color: AI.ink }}>{t}</strong>
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <Lead>{W.okr.text}</Lead>
      </Section>

      <Section id="per-stap" title="Welke workflows per stap?">
        <div style={{ borderRadius: 14, border: '1.5px solid #D5DBE5', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '120px minmax(0, 1.4fr) minmax(0, 1fr)', background: AI.deep, color: '#FFFFFF', fontSize: 13, fontWeight: 700 }}>
            <span style={{ padding: '12px 14px' }}>Stap</span><span style={{ padding: '12px 14px' }}>Vaste workflows</span><span style={{ padding: '12px 14px', background: AI.orange, color: '#2B1A00' }}>Vaak overgeslagen</span>
          </div>
          {W.table.map(([st, a, b]) => (
            <div key={st} style={{ display: 'grid', gridTemplateColumns: '120px minmax(0, 1.4fr) minmax(0, 1fr)', borderTop: '1px solid #E1E6EE', fontSize: 14, lineHeight: 1.5 }}>
              <span style={{ padding: '12px 14px', fontWeight: 700, color: AI.ink, background: AI.lilac }}>{st}</span>
              <span style={{ padding: '12px 14px', color: AI.text }}>{a}</span>
              <span style={{ padding: '12px 14px', color: '#5A3A00', background: '#FFF8EC' }}>{b}</span>
            </div>
          ))}
        </div>
        <Lead>{W.tableNote}</Lead>
      </Section>

      <Section id="vastleggen" title="Waarom processen vastleggen als workflow?">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          <div style={{ padding: 16, borderRadius: 14, background: '#EEF2F7', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <strong style={{ color: AI.ink }}>Met mensen</strong>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}><Chevron label="Beschreven proces" /><span style={{ fontSize: 22 }}>≠</span><Chevron label="Hoe het écht gaat" /></span>
            <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>Mensen overbruggen het gat met oordeelsvermogen en stilzwijgende kennis.</span>
          </div>
          <div style={{ padding: 16, borderRadius: 14, background: '#FDF1F2', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <strong style={{ color: '#8A1020' }}>Met agents</strong>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}><Chevron label="Vaag proces" /><span style={{ fontSize: 22 }}>→</span><span style={{ padding: '6px 10px', borderRadius: 8, background: '#C8102E', color: '#FFF', fontSize: 12, fontWeight: 700 }}>Improviseren op machinesnelheid</span></span>
            <span style={{ fontSize: 13, lineHeight: 1.5, color: '#6B2A33' }}>Inconsistentie, onduidelijke verantwoordelijkheid en fouten die snel opschalen.</span>
          </div>
        </div>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 15, lineHeight: 1.6, color: '#2E3A55' }}>
          {W.formalize.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <LayerNav view={view} current="aiwf" />
    </>
  );
}
