import { Component } from 'react';
import { buildView } from './view/buildView.js';
import Site from './components/Site.jsx';

/**
 * Het EDSN Delivery Model.
 * State en gedrag (navigatie, nachtmodus, deeplinks, tour) staan hier;
 * alle teksten en data komen uit buildView(), de opmaak uit components/.
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    let dark = false;
    try { dark = window.localStorage.getItem('edm-dark') === '1'; } catch (e) {}
    let unlocked = false;
    try { unlocked = window.sessionStorage.getItem('edm-concepts') === '1'; } catch (e) {}
    this.state = { mode: null, sel: null, vptStep: 0, pfOpen: true, scale: 1, lace: false, scan: {}, dark, cview: 'current', unlocked, pwErr: false, artie: false, artieQ: '' };
  }
  _theme() {
    // Nachtmodus: zet lichte vlakken om naar donker en donkere tekst naar licht; merkkleuren blijven gelijk.
    let doc; try { doc = document; } catch (e) { return; }
    if (!doc || !doc.body) return;
    const store = this._orig || (this._orig = new WeakMap());
    const PROPS = ['color', 'background-color', 'background-image', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'fill', 'stroke'];
    const all = doc.body.querySelectorAll('*');
    if (!this.state.dark) {
      if (!this._themed) return;
      all.forEach((el) => { const o = store.get(el); if (!o) return; PROPS.forEach((pr) => { if (o[pr] && el.style.getPropertyValue(pr) === o[pr].set) el.style.setProperty(pr, o[pr].orig); }); store.delete(el); });
      doc.documentElement.style.background = ''; doc.body.style.background = '';
      this._themed = false; return;
    }
    const parse = (c) => { const m = /rgba?\(([^)]+)\)/.exec(c || ''); if (!m) return null; const v = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
    const toHsl = ({ r, g, b }) => { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s2 = 0; const l = (mx + mn) / 2; if (mx !== mn) { const d = mx - mn; s2 = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h /= 6; } return { h, s: s2, l }; };
    const fromHsl = (h, s2, l, a) => { const f = (n) => { const k = (n + h * 12) % 12; const q = s2 * Math.min(l, 1 - l); return Math.round(255 * (l - q * Math.max(-1, Math.min(k - 3, 9 - k, 1)))); }; return a < 1 ? 'rgba(' + f(0) + ', ' + f(8) + ', ' + f(4) + ', ' + a + ')' : 'rgb(' + f(0) + ', ' + f(8) + ', ' + f(4) + ')'; };
    const bgMap = (c) => { if (!c || c.a === 0) return null; const x = toHsl(c); if (x.l <= 0.8) return null; return fromHsl(x.h, x.s * 0.45, 0.1 + (1 - x.l) * 0.6, c.a); };
    const bdMap = (c) => { if (!c || c.a === 0) return null; const x = toHsl(c); if (x.l <= 0.7) return null; return fromHsl(x.h, x.s * 0.35, 0.22 + (1 - x.l) * 0.25, c.a); };
    const fgMap = (c) => { if (!c) return null; const x = toHsl(c); if (x.l >= 0.45) return null; return fromHsl(x.h, Math.min(1, x.s * 0.7), 0.93 - x.l * 0.4, c.a); };
    const lumOf = (c) => c ? toHsl(c).l : 1;
    const bgL = new Map();
    const setP = (el, pr, val) => { const o = store.get(el) || {}; if (!o[pr]) o[pr] = { orig: el.style.getPropertyValue(pr) }; el.style.setProperty(pr, val); o[pr].set = el.style.getPropertyValue(pr); store.set(el, o); };
    const effBg = (el) => { let n = el; while (n && n.nodeType === 1) { if (bgL.has(n)) return bgL.get(n); n = n.parentNode; } return 0.1; };
    doc.documentElement.style.background = '#0F1626'; doc.body.style.background = '#0F1626';
    all.forEach((el) => {
      const cs = getComputedStyle(el);
      const isSvg = el instanceof SVGElement;
      if (!isSvg) {
        const bc = parse(cs.backgroundColor);
        const nb = bgMap(bc);
        if (nb) { setP(el, 'background-color', nb); bgL.set(el, lumOf(parse(nb))); }
        else if (bc && bc.a > 0.5) bgL.set(el, lumOf(bc));
        const bi = cs.backgroundImage;
        if (bi && bi !== 'none' && bi.indexOf('gradient') > -1) {
          const nbi = bi.replace(/rgba?\([^)]+\)/g, (m) => bgMap(parse(m)) || m);
          if (nbi !== bi) setP(el, 'background-image', nbi);
        }
        ['top', 'right', 'bottom', 'left'].forEach((side) => { if (parseFloat(cs['border' + side[0].toUpperCase() + side.slice(1) + 'Width']) > 0) { const nbd = bdMap(parse(cs['border' + side[0].toUpperCase() + side.slice(1) + 'Color'])); if (nbd) setP(el, 'border-' + side + '-color', nbd); } });
      }
      if (effBg(el) < 0.45) {
        const fc = fgMap(parse(cs.color)); if (fc) setP(el, 'color', fc);
        if (isSvg) {
          const fl = parse(cs.fill); if (fl && el.getAttribute('fill') !== 'none') { const nf = fgMap(fl); if (nf) setP(el, 'fill', nf); }
          const st = parse(cs.stroke); if (st && cs.stroke !== 'none') { const ns = fgMap(st); if (ns) setP(el, 'stroke', ns); }
        }
      }
    });
    this._themed = true;
  }
  componentDidMount() {
    this._fit = () => {
      let w = 1600;
      try { w = document.documentElement.clientWidth || window.innerWidth || 1600; } catch (e) {}
      const sc = Math.max(0.35, Math.min(1.05, (w - 32) / 1600));
      if (Math.abs(sc - (this.state.scale || 1)) > 0.004) this.setState({ scale: sc });
    };
    this._fit();
    try { window.addEventListener('resize', this._fit); } catch (e) {}
    // Lopende band in de Big Picture stopt na 15 seconden
    this._bpStart = () => { try { clearTimeout(this._bpTimer); this._bpTimer = setTimeout(() => this.setState({ bpStopped: true }), 15000); } catch (e) {} };
    this._bpStart();
    this._startTour = () => { this.setState({ sel: null, tour: 0, tourPrev: 0, roleView: false, pfOpen: true, bpStopped: false }); this._bpStart(); };
    this._startRoles = () => { this.setState({ sel: null, roleView: true, tour: null, pfOpen: true }); };
    // Deeplinks: #rte, #t4k ... en terug-knop van de browser
    this._fromHash = () => { let h = ''; try { h = decodeURIComponent((window.location.hash || '').slice(1)); } catch (e) {} const k = h && h !== 'start' ? h : null; if (k && this._keys && !this._keys.includes(k)) return; if (k !== this.state.sel) this.setState({ sel: k }); };
    try { this._fromHash(); window.addEventListener('popstate', this._fromHash); } catch (e) {}
    this._docClick = (e) => { try { const r = document.getElementById('edm-ask-res'); const inp = document.getElementById('edm-ask'); if (r && !r.contains(e.target) && e.target !== inp) r.style.display = 'none'; } catch (er) {} };
    try { document.addEventListener('click', this._docClick); } catch (e) {}
    this._anchorClick = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      const id = decodeURIComponent(a.getAttribute('href').slice(1));
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    try { document.addEventListener('click', this._anchorClick); } catch (e) {}
    try { window.__edm = { go: (k, m) => this.setState({ sel: k, mode: m || this.state.mode }), keys: () => (this._order || []).slice() }; } catch (e) {}
    this._theme();
  }
  componentWillUnmount() {
    try { window.removeEventListener('resize', this._fit); clearTimeout(this._bpTimer); window.removeEventListener('popstate', this._fromHash); document.removeEventListener('click', this._docClick); document.removeEventListener('click', this._anchorClick); } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState && (prevState.tour !== this.state.tour || (prevState.sel && !this.state.sel)) && typeof this.state.tour === 'number' && !this.state.sel) {
      setTimeout(() => { try { const el = document.getElementById('tour-spot'); if (el) { const r = el.getBoundingClientRect(); const want = window.scrollY + r.top + r.height / 2 - window.innerHeight * 0.3; window.scrollTo({ top: Math.max(0, want), behavior: 'smooth' }); } } catch (e) {} }, 30);
    }
    if (prevState && prevState.roleView !== this.state.roleView && this.state.roleView) { try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {} }
    if (prevState && prevState.sel !== this.state.sel) {
      try { window.scrollTo(0, 0); } catch (e) {}
      if (prevState.cview === this.state.cview && this.state.cview !== 'current') this.setState({ cview: 'current' });
      if (!this.state.sel) { this.setState({ bpStopped: false }); this._bpStart(); }
      try { const want = this.state.sel ? '#' + this.state.sel : ''; if ((window.location.hash || '') !== want) window.history.pushState(null, '', want || (window.location.pathname + window.location.search)); } catch (e) {}
    }
    this._theme();
  }

  render() {
    return <Site view={buildView(this)} />;
  }
}
