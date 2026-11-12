/**
 * Zet een CSS-tekst ("left: 10px; color: red") om naar een React style-object.
 * Wordt gebruikt voor stijlen die in buildView() als tekst worden opgebouwd.
 */
const cache = new Map();

function split(text) {
  const out = [];
  let cur = '', depth = 0, quote = null;
  for (const ch of text) {
    if (quote) { cur += ch; if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur);
  return out;
}

function key(prop) {
  if (prop.startsWith('--')) return prop;
  const p = prop.startsWith('-ms-') ? prop.slice(1) : prop;
  return p.replace(/^-/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^(webkit|moz|o)(?=[A-Z])/, (m) => m[0].toUpperCase() + m.slice(1));
}

export function css(text) {
  if (text == null || text === '') return undefined;
  if (typeof text !== 'string') return text;
  let style = cache.get(text);
  if (style) return style;
  style = {};
  for (const decl of split(text)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (prop) style[key(prop)] = value;
  }
  cache.set(text, style);
  return style;
}
