import { useEffect, useRef, useState } from 'react';
import { FORMS } from '../../content/vaForms.js';
import { AI } from '../ai/parts.jsx';

const KEY = (id) => 'edm-va-form-' + id;
const inputStyle = { width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', fontSize: 15, color: AI.ink, background: '#FBFDFD', border: '1.5px solid #AEBAB8', borderRadius: 6, padding: '9px 11px', lineHeight: 1.5 };
const cellStyle = { ...inputStyle, fontSize: 14, padding: '6px 8px', borderRadius: 4, border: '1px solid #AEBAB8', minHeight: 40 };

function load(id) {
  try { const raw = window.localStorage.getItem(KEY(id)); return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; }
}
function store(id, v) {
  try { window.localStorage.setItem(KEY(id), JSON.stringify(v)); return true; } catch (e) { return false; }
}

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cellKey = (f, r, c) => `${f.id}.${r}.${c}`;
const rowCount = (f) => (f.rowLabels ? f.rowLabels.length : f.rows || 3);

/** Een zelfstandig HTML-document met de ingevulde antwoorden, om te bewaren of te printen. */
function exportHtml(form, v) {
  const val = (k) => (v[k] ? esc(v[k]).replace(/\n/g, '<br>') : '<span class="leeg">—</span>');
  const body = form.sections.map((s, si) => {
    const fields = s.fields.map((f) => {
      if (f.type === 'table') {
        const head = (f.rowLabels ? '<th></th>' : '') + f.cols.map((c) => `<th>${esc(c)}</th>`).join('');
        const rows = Array.from({ length: rowCount(f) }, (_, r) => '<tr>' + (f.rowLabels ? `<th class="rl">${esc(f.rowLabels[r])}</th>` : '') + f.cols.map((_, c) => `<td>${val(cellKey(f, r, c))}</td>`).join('') + '</tr>').join('');
        return `<div class="f"><div class="l">${esc(f.label)}</div><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      }
      return `<div class="f"><div class="l">${esc(f.label)}</div><div class="v">${val(f.id)}</div></div>`;
    }).join('');
    return `<section><h2><span>${String(si + 1).padStart(2, '0')}</span> ${esc(s.title)}</h2>${fields}</section>`;
  }).join('');
  const d = new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(form.title)}</title>
<style>body{margin:0;font-family:'Segoe UI',system-ui,Arial,sans-serif;color:#1B2A5C;background:#fff}main{max-width:900px;margin:0 auto;padding:32px 24px}
.k{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:${form.color}}h1{margin:6px 0 4px;font-size:32px}.m{color:#5A6478;font-size:13px;margin-bottom:24px}
section{border:1px solid #DCE4E3;border-radius:8px;margin:0 0 16px;overflow:hidden;break-inside:avoid}h2{margin:0;padding:12px 16px;background:${form.color};color:#fff;font-size:18px}h2 span{opacity:.6}
.f{padding:10px 16px;border-top:1px solid #EEF1F4}.l{font-size:13px;font-weight:700;margin-bottom:4px}.v{font-size:14px;line-height:1.55;white-space:normal}.leeg{color:#A0A8B4}
table{width:100%;border-collapse:collapse;font-size:13px}th,td{border:1px solid #DCE4E3;padding:6px 8px;text-align:left;vertical-align:top}th{background:#F4F6FA}th.rl{width:160px}
@media print{main{padding:0}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head>
<body><main><div class="k">EDSN Delivery Model · AI Value Architect · ${esc(form.phase)}</div><h1>${esc(form.title)}</h1><div class="m">Ingevuld op ${d}</div>${body}</main></body></html>`;
}

function Field({ f, v, set }) {
  const label = <label htmlFor={'va-' + f.id} style={{ display: 'block', fontSize: 15, fontWeight: 700, color: AI.ink, marginBottom: 4 }}>{f.label}</label>;
  const hint = f.hint ? <p style={{ margin: '0 0 8px', fontSize: 13, lineHeight: 1.45, color: '#5A6478' }}>{f.hint}</p> : null;
  if (f.type === 'table') {
    const n = rowCount(f);
    return (
      <div>
        <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: AI.ink, marginBottom: 6 }}>{f.label}</span>
        {hint}
        <div style={{ overflowX: 'auto', border: '1px solid #DCE4E3', borderRadius: 6 }}>
          <table style={{ width: '100%', minWidth: 560, borderCollapse: 'collapse' }}>
            <thead><tr style={{ background: '#EEF1F4' }}>
              {f.rowLabels ? <th style={{ width: 150 }} /> : null}
              {f.cols.map((c) => <th key={c} style={{ textAlign: 'left', padding: '8px 10px', fontSize: 11, fontWeight: 800, letterSpacing: 0.6, textTransform: 'uppercase', color: '#5A6478' }}>{c}</th>)}
            </tr></thead>
            <tbody>
              {Array.from({ length: n }, (_, r) => (
                <tr key={r} style={{ borderTop: '1px solid #E8EDEC' }}>
                  {f.rowLabels ? <td style={{ padding: '8px 10px', fontSize: 13, fontWeight: 700, color: AI.ink, background: '#FBFDFD', verticalAlign: 'top' }}>{f.rowLabels[r]}</td> : null}
                  {f.cols.map((c, ci) => {
                    const k = cellKey(f, r, ci);
                    const opts = f.opts && f.opts[ci];
                    return (
                      <td key={c} style={{ padding: 5, verticalAlign: 'top' }}>
                        {opts ? (
                          <select aria-label={`${c}, rij ${r + 1}`} value={v[k] || ''} onChange={(e) => set(k, e.target.value)} style={cellStyle}>
                            <option value="" />
                            {opts.map((o) => <option key={o}>{o}</option>)}
                          </select>
                        ) : (
                          <textarea aria-label={`${c}, ${f.rowLabels ? f.rowLabels[r] : 'rij ' + (r + 1)}`} rows={1} value={v[k] || ''} onChange={(e) => set(k, e.target.value)} style={{ ...cellStyle, resize: 'vertical' }} />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (f.type === 'select') {
    return (
      <div>{label}{hint}
        <select id={'va-' + f.id} value={v[f.id] || ''} onChange={(e) => set(f.id, e.target.value)} style={inputStyle}>
          <option value="">Kies…</option>
          {f.opts.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
    );
  }
  if (f.type === 'text') {
    return <div>{label}{hint}<input id={'va-' + f.id} type="text" placeholder={f.ph || ''} value={v[f.id] || ''} onChange={(e) => set(f.id, e.target.value)} style={inputStyle} /></div>;
  }
  return <div>{label}{hint}<textarea id={'va-' + f.id} rows={f.rows || 3} placeholder={f.ph || ''} value={v[f.id] || ''} onChange={(e) => set(f.id, e.target.value)} style={{ ...inputStyle, resize: 'vertical' }} /></div>;
}

/** Eén geopend werkformulier: automatisch bewaren, downloaden, printen en wissen. */
function FormView({ form, onClose }) {
  const [v, setV] = useState(() => load(form.id));
  const [saved, setSaved] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const set = (k, val) => {
    setV((old) => {
      const next = { ...old, [k]: val };
      clearTimeout(timer.current);
      timer.current = setTimeout(() => { if (store(form.id, next)) { setSaved(true); setTimeout(() => setSaved(false), 1200); } }, 300);
      return next;
    });
  };
  const filled = (s) => s.fields.some((f) => (f.type === 'table' ? Object.keys(v).some((k) => k.startsWith(f.id + '.') && String(v[k]).trim()) : String(v[f.id] || '').trim()));
  const download = () => {
    const blob = new Blob([exportHtml(form, v)], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = form.id + '-' + new Date().toISOString().slice(0, 10) + '.html';
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };
  const print = () => {
    const fr = document.createElement('iframe');
    fr.setAttribute('aria-hidden', 'true');
    fr.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    fr.srcdoc = exportHtml(form, v);
    fr.onload = () => { try { fr.contentWindow.focus(); fr.contentWindow.print(); } catch (e) {} setTimeout(() => fr.remove(), 60000); };
    document.body.appendChild(fr);
  };
  const clear = () => { setV({}); try { window.localStorage.removeItem(KEY(form.id)); } catch (e) {} setConfirm(false); };
  const btn = (primary) => ({ minHeight: 38, padding: '0 14px', borderRadius: 19, cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700, border: primary ? 0 : '1.5px solid #D5DBE5', background: primary ? form.color : '#FFFFFF', color: primary ? '#FFFFFF' : AI.ink });

  return (
    <div id={'formulier-' + form.id} style={{ borderRadius: 16, border: `2px solid ${form.color}`, overflow: 'hidden', scrollMarginTop: 20 }}>
      <div style={{ padding: '16px 20px', background: form.color, color: '#FFFFFF', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.4, textTransform: 'uppercase', opacity: 0.8 }}>Werkformulier · {form.phase}</span>
          <strong style={{ fontSize: 22 }}>{form.title}</strong>
        </div>
        <span aria-live="polite" style={{ fontSize: 12, fontWeight: 700, opacity: saved ? 1 : 0, transition: 'opacity .3s' }}>● Bewaard</span>
        <button onClick={download} style={{ ...btn(false), border: 0 }}>↓ Download kopie</button>
        <button onClick={print} style={{ ...btn(false), border: 0 }}>Print / PDF</button>
        <button onClick={onClose} aria-label="Sluit het formulier" style={{ ...btn(false), border: '1.5px solid rgba(255,255,255,.6)', background: 'transparent', color: '#FFFFFF' }}>Sluiten</button>
      </div>
      <div style={{ padding: '16px 20px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#2E3A55' }}>{form.intro}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {form.sections.map((s, i) => {
            const on = filled(s);
            return <a key={s.title} href={`#va-${form.id}-s${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 14, border: `1.5px solid ${on ? form.color : '#DCE4E3'}`, fontSize: 12, fontWeight: 600, color: on ? AI.ink : '#7B8785', textDecoration: 'none' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: on ? form.color : '#DCE4E3' }} />{s.title.replace(/^\d\.\s*/, '').split(':')[0]}</a>;
          })}
        </div>
        <span style={{ fontSize: 12, lineHeight: 1.5, color: '#5A6478' }}>Je antwoorden worden alleen in deze browser bewaard. Gebruik ‘Download kopie’ om ze te bewaren of te delen. Zet geen persoonsgegevens of vertrouwelijke gegevens in AI-tools.</span>
        {form.sections.map((s, i) => (
          <section key={s.title} id={`va-${form.id}-s${i}`} style={{ borderRadius: 10, border: '1px solid #DCE4E3', overflow: 'hidden', scrollMarginTop: 20 }}>
            <div style={{ padding: '12px 16px', background: '#F4F2FA', borderLeft: `5px solid ${form.color}`, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <strong style={{ fontSize: 17, color: AI.ink }}><span style={{ color: form.color, marginRight: 8 }}>{String(i + 1).padStart(2, '0')}</span>{s.title}</strong>
              {s.guide ? <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{s.guide}</span> : null}
            </div>
            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {s.fields.map((f) => <Field key={f.id} f={f} v={v} set={set} />)}
            </div>
          </section>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <button onClick={download} style={btn(true)}>↓ Download ingevulde kopie</button>
          <button onClick={print} style={btn(false)}>Print / PDF</button>
          {confirm ? (
            <>
              <span style={{ fontSize: 13, color: '#C8102E', fontWeight: 700 }}>Alle antwoorden wissen? Dit kan niet ongedaan worden.</span>
              <button onClick={clear} style={{ ...btn(false), borderColor: '#C8102E', color: '#C8102E' }}>Ja, wis alles</button>
              <button onClick={() => setConfirm(false)} style={btn(false)}>Annuleer</button>
            </>
          ) : <button onClick={() => setConfirm(true)} style={{ ...btn(false), marginLeft: 'auto' }}>Wis alles</button>}
        </div>
      </div>
    </div>
  );
}

/** Overzicht van de vier werkformulieren; één tegelijk open. */
export default function VaForms({ open, setOpen }) {
  const form = FORMS.find((f) => f.id === open);
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
        {FORMS.map((f) => {
          const on = open === f.id;
          return (
            <button key={f.id} onClick={() => setOpen(on ? null : f.id)} aria-expanded={on} style={{ textAlign: 'left', padding: 16, borderRadius: 14, cursor: 'pointer', fontFamily: 'inherit', borderStyle: 'solid', borderWidth: '6px 2px 2px', borderColor: `${f.color} ${on ? f.color : '#E1E6EE'} ${on ? f.color : '#E1E6EE'}`, background: on ? '#F4F2FA' : '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', color: f.color }}>{f.phase}</span>
              <strong style={{ fontSize: 16, color: AI.ink }}>{f.title}</strong>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: AI.text }}>{f.intro.split('. ')[0]}.</span>
              <span style={{ marginTop: 'auto', paddingTop: 6, fontSize: 13, fontWeight: 700, color: f.color }}>{on ? 'Sluiten ↑' : 'Open formulier →'}</span>
            </button>
          );
        })}
      </div>
      {form ? <FormView key={form.id} form={form} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
