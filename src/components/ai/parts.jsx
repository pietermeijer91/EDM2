/** Gedeelde bouwstenen voor de pagina's van de AI Innovation Pipeline (AI-Native EDSN). */

export const AI = {
  purple: '#6E44B8',
  deep: '#2A1650',
  soft: '#8C6BD1',
  lilac: '#F4F2FA',
  lilacLine: '#DCD3F0',
  teal: '#1F9E95',
  ink: '#1B2A5C',
  text: '#3E4A63',
  orange: '#F39200',
};

/** Mens en agent naast elkaar: het beeld van samenwerken in elke stap. */
export function HumanAgent({ size = 34 }) {
  return (
    <svg width={size * 1.9} height={size} viewBox="0 0 64 34" aria-hidden="true">
      <circle cx="14" cy="9" r="6.5" fill="#8A8F99" />
      <path d="M2 34v-6a10 10 0 0 1 10-10h4a10 10 0 0 1 10 10v6z" fill={AI.purple} />
      <rect x="36" y="5" width="22" height="16" rx="5" fill={AI.teal} />
      <circle cx="43" cy="13" r="2.4" fill="#FFFFFF" />
      <circle cx="51" cy="13" r="2.4" fill="#FFFFFF" />
      <path d="M47 5V1" stroke={AI.teal} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="39" y="23" width="16" height="11" rx="3" fill={AI.teal} />
      <path d="M36 27h-3M58 27h3" stroke={AI.teal} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function H2({ id, children }) {
  return <h2 id={id} style={{ margin: 0, fontSize: 28, lineHeight: 1.25, fontWeight: 700, color: AI.ink, scrollMarginTop: 20 }}>{children}</h2>;
}

export function Lead({ children }) {
  return <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#2E3A55' }}>{children}</p>;
}

export function Section({ id, title, children, gap = 14 }) {
  return (
    <section id={id} style={{ display: 'flex', flexDirection: 'column', gap }}>
      {title ? <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.25, fontWeight: 700, color: AI.ink }}>{title}</h2> : null}
      {children}
    </section>
  );
}

/** Een workflow-pijl (chevron), zoals in de AI-Native SAFe-plaatjes. */
export function Chevron({ label, strong = false, style }) {
  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', height: 36, padding: '0 30px 0 14px', fontSize: 13, fontWeight: 700, color: strong ? '#FFFFFF' : AI.deep, whiteSpace: 'nowrap',
      background: strong ? `linear-gradient(90deg, ${AI.soft}, ${AI.purple})` : `linear-gradient(90deg, rgba(220,211,240,0.15), ${AI.lilacLine})`,
      clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)', ...style }}>
      {label}
    </span>
  );
}

/** Kaart met titel en tekst. */
export function Card({ title, sub, children, accent = AI.purple, tone = 'light', style }) {
  const dark = tone === 'dark';
  return (
    <div style={{ padding: 16, borderRadius: 14, background: dark ? 'rgba(255,255,255,0.08)' : '#FFFFFF', border: dark ? '1px solid rgba(255,255,255,0.18)' : '1.5px solid #E1E6EE', borderTop: dark ? undefined : `4px solid ${accent}`, display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <span style={{ fontSize: 15, fontWeight: 700, color: dark ? '#FFFFFF' : AI.ink }}>{title}</span>
      {sub ? <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: dark ? '#C9B8EC' : AI.purple }}>{sub}</span> : null}
      <span style={{ fontSize: 13, lineHeight: 1.55, color: dark ? '#E4DAF7' : AI.text }}>{children}</span>
    </div>
  );
}

/** Knop naar een andere pagina van het Delivery Model. */
export function GoTo({ onClick, children, primary = false }) {
  return (
    <button onClick={onClick} style={{ alignSelf: 'flex-start', minHeight: 40, padding: '0 16px', border: primary ? 0 : '1.5px solid #D5DBE5', borderRadius: 20, background: primary ? AI.purple : '#FFFFFF', color: primary ? '#FFFFFF' : AI.ink, cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700 }}>
      {children} →
    </button>
  );
}

/** Kaart onderaan elke componentpagina: de vier lagen, met de huidige gemarkeerd. */
export function LayerNav({ view, current }) {
  const items = [['aiwf', 'AI-Empowered Workflows'], ['aipol', 'Embedded Policies'], ['aiev', 'Insights and Evidence'], ['aiplat', 'Shared Platforms']];
  return (
    <section style={{ padding: 18, borderRadius: 16, background: AI.lilac, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', color: AI.purple }}>De vier lagen van de AI Innovation Pipeline</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(([k, label], i) => (
          <button key={k} onClick={view.open[k]} aria-current={k === current ? 'page' : undefined}
            style={{ marginLeft: i * 6, marginRight: (3 - i) * 6, minHeight: 40, border: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 700, transform: 'skewX(-14deg)',
              background: k === current ? AI.purple : (i === 3 ? '#C9BDE6' : '#E7E1F5'), color: k === current ? '#FFFFFF' : AI.deep }}>
            <span style={{ display: 'inline-block', transform: 'skewX(14deg)' }}>{label}</span>
          </button>
        ))}
      </div>
      <GoTo onClick={view.open.pipeline}>Terug naar de AI Innovation Pipeline</GoTo>
    </section>
  );
}
