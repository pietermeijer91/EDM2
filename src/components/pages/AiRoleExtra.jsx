import { AI_ROLES } from '../../content/aiRoles.js';
import { STAGES } from '../../content/aiPipeline.js';
import { AI, Section, HumanAgent, GoTo } from '../ai/parts.jsx';

const Dot = ({ color }) => <span style={{ flexShrink: 0, width: 7, height: 7, marginTop: 7, borderRadius: '50%', background: color }} />;

/** AI-Native aanvulling onder de rolpagina (PM, SA, RTE, PD en teams). */
export default function AiRoleExtra({ view }) {
  const d = view.ai ? AI_ROLES[view.page.aiRole] : null;
  if (!d) return null;
  const color = view.page.isRole ? view.page.role.color : AI.purple;
  const abbr = d.kort, wie = d.wie;
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderRadius: 14, background: `linear-gradient(90deg, ${AI.deep}, ${AI.purple})`, color: '#FFFFFF' }}>
        <HumanAgent size={26} />
        <span style={{ fontSize: 15, fontWeight: 700 }}>{wie} in AI-Native EDSN</span>
      </div>

      <Section id="ai-voor-na" title="Wat verandert er met AI">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 28px minmax(0, 1fr)', gap: '8px 6px', alignItems: 'stretch' }}>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: '#5A6478' }}>Vandaag</span>
          <span />
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: AI.purple }}>AI-Native</span>
          {d.voorNa.map(([a, b]) => [
            <div key={a + 'a'} style={{ padding: '12px 14px', borderRadius: 12, background: '#F4F6FA', fontSize: 14, lineHeight: 1.5, color: AI.text }}>{a}</div>,
            <span key={a + 'p'} aria-hidden="true" style={{ alignSelf: 'center', textAlign: 'center', fontSize: 18, fontWeight: 700, color: AI.soft }}>→</span>,
            <div key={a + 'b'} style={{ padding: '12px 14px', borderRadius: 12, background: AI.lilac, border: `1.5px solid ${AI.lilacLine}`, fontSize: 14, lineHeight: 1.5, color: AI.ink, fontWeight: 600 }}>{b}</div>,
          ])}
        </div>
      </Section>

      <Section id="ai-mens-agent" title="Mens en agent">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          <div style={{ padding: 18, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: `5px solid ${color}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 16, color: AI.ink }}>{wie} blijft zelf doen</strong>
            <span style={{ fontSize: 12, color: '#5A6478' }}>Oordeel, besluit en het gesprek</span>
            {d.mens.map((t) => <span key={t} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.5, color: AI.text }}><Dot color={color} />{t}</span>)}
          </div>
          <div style={{ padding: 18, borderRadius: 14, background: '#FFFFFF', border: '1.5px solid #E1E6EE', borderTop: `5px solid ${AI.teal}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 16, color: AI.ink }}>Een agent bereidt voor</strong>
            <span style={{ fontSize: 12, color: '#5A6478' }}>Binnen de ingebouwde kaders, met {wie.charAt(0).toLowerCase() + wie.slice(1)} op de lus</span>
            {d.agent.map((t) => <span key={t} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.5, color: AI.text }}><Dot color={AI.teal} />{t}</span>)}
          </div>
        </div>
      </Section>

      <Section id="ai-pipeline" title="In de AI Innovation Pipeline">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 8 }}>
          {STAGES.map((s) => {
            const st = d.stages[s.key];
            const lead = st && st[0] === 'lead';
            return (
              <div key={s.key} style={{ display: 'flex', flexDirection: 'column', borderRadius: 12, overflow: 'hidden', border: `1.5px solid ${st ? (lead ? AI.purple : AI.lilacLine) : '#E1E6EE'}`, background: '#FFFFFF', opacity: st ? 1 : 0.55 }}>
                <span style={{ padding: '10px 12px', background: lead ? AI.purple : st ? AI.lilac : '#F4F6FA', color: lead ? '#FFFFFF' : AI.ink, fontSize: 14, fontWeight: 700 }}>
                  {s.title}
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 600, opacity: 0.85 }}>{s.nl}</span>
                </span>
                <span style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: lead ? AI.purple : st ? AI.teal : '#8A8F99' }}>{lead ? 'Aan zet' : st ? 'Draagt bij' : 'Niet direct'}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.45, color: AI.text }}>{st ? st[1] : '—'}</span>
                </span>
              </div>
            );
          })}
        </div>
        <GoTo onClick={view.open.pipeline}>Naar de AI Innovation Pipeline</GoTo>
      </Section>

      <Section id="ai-va" title="Samen met de AI Value Architect">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', padding: 18, borderRadius: 14, background: AI.lilac }}>
          <svg width="150" height="64" viewBox="0 0 150 64" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="40" cy="32" r="28" fill={color} />
            <circle cx="110" cy="32" r="28" fill={AI.deep} />
            <path d="M68 32h14" stroke={AI.orange} strokeWidth="4" strokeLinecap="round" />
            <text x="40" y="37" textAnchor="middle" fontSize={abbr.length > 3 ? 13 : 15} fontWeight="800" fill="#FFFFFF" fontFamily="Poppins, 'Segoe UI', sans-serif">{abbr}</text>
            <text x="110" y="37" textAnchor="middle" fontSize="15" fontWeight="800" fill="#FFFFFF" fontFamily="Poppins, 'Segoe UI', sans-serif">VA</text>
          </svg>
          <span style={{ flex: '1 1 320px', fontSize: 15, lineHeight: 1.6, color: '#2E3A55' }}>{d.va}</span>
        </div>
        <GoTo onClick={view.open.architects}>Naar de rol AI Value Architect</GoTo>
      </Section>

      <Section id="ai-edsn" title="Bij EDSN">
        <div style={{ padding: '14px 16px', borderRadius: 12, border: `1.5px dashed ${AI.orange}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <strong style={{ fontSize: 13, color: '#7A4A00' }}>Nog in te vullen</strong>
          <span style={{ fontSize: 14, color: AI.ink }}>• {d.vraag}</span>
        </div>
      </Section>
    </>
  );
}
