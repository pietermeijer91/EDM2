import { Fragment } from 'react';
import { css } from '../lib/css.js';

/** De Big Picture (Basis EDSN / AI-Native EDSN), inclusief overlays voor tour en rolweergave. */
export default function BigPicture({ view }) {
  return (
    <>
      {view.noSel ? (
        <>
          <div style={{ position: "relative", width: "100%", height: `${view.bpH ?? ''}px`, overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "50%", top: "0", marginLeft: "-800px", width: "1600px", height: `${view.rootH ?? ''}px`, transform: `scale(${view.scale ?? ''})`, transformOrigin: "50% 0", background: "#FFFFFF", fontFamily: "Poppins, 'Segoe UI', sans-serif", color: "#1B2A5C", overflow: "hidden" }}>
              {/* Concept WP-002 (tour) en WP-003 (Ik ben…): spotlight-overlay */}
              {view.tourOv.on ? (
                <>
                  <div style={css(view.tourOv.mask)} />
                  <div id="tour-spot" className="tour-ring" style={css(view.tourOv.ring)} />
                  <span className="tour-tok" style={css(view.tourOv.tok)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <rect x="1" y="3" width="14" height="10" rx="2" fill="#2B1A00" />
                      <path d="M4 6h8M4 9h5" stroke="#F39200" strokeWidth="1.6" />
                    </svg>
                    Feature F-101
                  </span>
                </>
              ) : null}
              {view.rv.on ? (
                <>
                  <div style={css(view.rv.mask)} />
                  {(view.rv.cur.spots || []).map((bd, i) => (
                    <Fragment key={i}>
                      <span style={css(bd.badge)}>{bd.n}</span>
                    </Fragment>
                  ))}
                </>
              ) : null}
              {/* Toggle */}
              <div style={{ position: "absolute", left: "40px", top: "26px", display: "flex", gap: "4px", padding: "5px", background: "#EEF2F7", border: "1px solid #D5DBE5", borderRadius: "40px" }}>
                <button style={css(view.coreBtn)} onClick={view.setCore} aria-pressed={view.coreOn}>
                  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 2 2 6l8 4 8-4zM2 10l8 4 8-4M2 14l8 4 8-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                  {" "}Basis EDSN
                </button>
                {" "}
                <button style={css(view.aiBtn)} onClick={view.setAi} aria-pressed={view.ai} aria-disabled={view.aiLocked} title={view.aiTitle}>
                  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M8 2l1.6 4.4L14 8l-4.4 1.6L8 14l-1.6-4.4L2 8l4.4-1.6zM15 12l.8 2.2L18 15l-2.2.8L15 18l-.8-2.2L12 15l2.2-.8z" fill="currentColor" />
                  </svg>
                  {" "}AI-Native EDSN{" "}
                  {view.aiLocked ? (
                    <>
                      <span style={{ marginLeft: "2px", padding: "3px 9px", borderRadius: "10px", background: "#F39200", color: "#2B1A00", fontSize: "11px", fontWeight: "800", letterSpacing: "0.5px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                        Coming soon
                      </span>
                    </>
                  ) : null}
                </button>
              </div>
              {/* Title */}
              <div style={{ position: "absolute", left: "560px", right: "40px", top: "54px", height: "6px", background: view.navy, borderRadius: "3px" }} />
              <div style={{ position: "absolute", right: "120px", top: "30px", padding: "0 20px", background: "#FFFFFF", display: "flex", alignItems: "center", gap: "12px" }}>
                {view.ai ? (
                  <>
                    <svg width="34" height="34" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M8 2l1.6 4.4L14 8l-4.4 1.6L8 14l-1.6-4.4L2 8l4.4-1.6zM15 12l.8 2.2L18 15l-2.2.8L15 18l-.8-2.2L12 15l2.2-.8z" fill={view.orange} />
                    </svg>
                  </>
                ) : null}
                <span style={{ fontSize: "40px", fontWeight: "700", letterSpacing: "-0.5px" }}>{view.t.title}</span>
              </div>
              {/* Frame */}
              <div style={{ position: "absolute", left: "40px", top: "110px", width: "1520px", height: `${view.frameH ?? ''}px`, border: "2px solid #D5DBE5", borderRadius: "14px", boxSizing: "border-box" }} />
              {/* Portfolio-niveau: uitklapbaar */}
              {view.pfOpen ? (
                <>
                  {/* Org column divider */}
                  <div style={{ position: "absolute", left: "222px", top: "112px", width: "2px", height: "358px", background: "#D5DBE5" }} />
                  {/* Organization */}
                  <button className="hit" style={{ left: "56px", top: "130px", width: "150px" }} onClick={view.open.org}>
                    <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A6478" }}>{view.t.org}</span>
                    {" "}
                    <svg width="110" height="170" viewBox="0 0 110 170" aria-hidden="true">
                      <rect x="18" y="20" width="34" height="120" fill={view.cyan} />
                      <rect x="40" y="40" width="52" height="100" fill={view.navy} />
                      <g stroke="#FFFFFF" strokeWidth="3"><path d="M50 56h32M50 70h32M50 84h32M50 98h32M50 112h32M50 126h32" /></g>
                      <path d="M6 140h98" stroke={view.blue} strokeWidth="3" />
                      <g stroke={view.blue} strokeWidth="2" fill="none">
                        <path d="M16 140v18M28 140v26M40 140v14M52 140v22M64 140v12M76 140v24M88 140v16M98 140v20" />
                      </g>
                      <g fill={view.blue}>
                        <circle cx="16" cy="159" r="2.5" />
                        <circle cx="28" cy="167" r="2.5" />
                        <circle cx="40" cy="155" r="2.5" />
                        <circle cx="52" cy="163" r="2.5" />
                        <circle cx="64" cy="153" r="2.5" />
                        <circle cx="76" cy="165" r="2.5" />
                        <circle cx="88" cy="157" r="2.5" />
                        <circle cx="98" cy="161" r="2.5" />
                      </g>
                    </svg>
                  </button>
                  {/* Portfolio-niveau: grijs en niet klikbaar */}
                  <div style={{ position: "absolute", inset: "0", filter: "grayscale(1)", opacity: ".45", pointerEvents: "none" }} aria-hidden="true">
                    <div style={{ position: "absolute", left: "405px", top: "189px", width: "170px", height: "150px", borderLeft: "2px solid #B8C2D1", borderRight: "2px solid #B8C2D1", borderRadius: "80px / 75px" }} />
                    {/* Portfolio tab */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "800px", top: "112px", width: "150px", background: view.tintB, borderRadius: "0 0 12px 12px", color: "#2C5F7A", fontSize: "15px", fontWeight: "600" }}>
                      Portfolio
                    </button>
                    {/* Portfolio Leadership */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "250px", top: "170px", width: "140px" }}>
                      <span style={{ display: "flex", gap: "2px" }}>
                        <svg width="26" height="32" viewBox="0 0 22 26" aria-hidden="true">
                          <circle cx="11" cy="7" r="5" fill={view.navy} />
                          <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                        </svg>
                        {" "}
                        <svg width="26" height="32" viewBox="0 0 22 26" aria-hidden="true">
                          <circle cx="11" cy="7" r="5" fill={view.blue} />
                          <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                        </svg>
                        {" "}
                        <svg width="26" height="32" viewBox="0 0 22 26" aria-hidden="true">
                          <circle cx="11" cy="7" r="5" fill={view.navy} />
                          <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                        </svg>
                      </span>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "600" }}>
                        Portfolio
                        <br />
                        Leadership
                      </span>
                    </button>
                    {/* Outcomes + Investment Strategy */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "425px", top: "140px", width: "140px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600" }}>{view.t.pfOutcomes}</span>
                      {" "}
                      <svg width="44" height="34" viewBox="0 0 44 34" aria-hidden="true">
                        <g fill={view.blue}>
                          <circle cx="3" cy="4" r="2" />
                          <circle cx="3" cy="13" r="2" />
                          <circle cx="3" cy="22" r="2" />
                          <circle cx="3" cy="31" r="2" />
                        </g>
                        <g stroke={view.blue} strokeWidth="3"><path d="M10 4h32M10 13h32M10 22h32M10 31h32" /></g>
                      </svg>
                    </button>
                    {" "}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "425px", top: "268px", width: "140px" }}>
                      <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
                        <circle cx="22" cy="22" r="20" fill="#D9EDB0" />
                        <path d="M22 22V2a20 20 0 0 1 19 14z" fill={view.green} />
                        <path d="M22 22 41 16a20 20 0 0 1-6 21z" fill="#B6D96A" />
                      </svg>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "600" }}>
                        Investment
                        <br />
                        Strategy
                      </span>
                    </button>
                    <div style={{ position: "absolute", left: "592px", top: "274px", width: "36px", height: "2px", background: "#B8C2D1" }} />
                    {/* Portfolio Backlog */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "632px", top: "196px", width: "110px" }}>
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "4px", border: "2px solid #B8C2D1", borderTop: "0" }}>
                        <span style={{ display: "block", width: "52px", height: "20px", background: view.cyan }} />
                        {" "}
                        <span style={{ display: "block", width: "52px", height: "20px", background: view.orange }} />
                        {" "}
                        <span style={{ display: "block", width: "52px", height: "20px", background: view.blue }} />
                        {" "}
                        <span style={{ display: "block", width: "52px", height: "20px", background: view.navy }} />
                      </span>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A6478" }}>
                        Portfolio
                        <br />
                        Backlog
                      </span>
                    </button>
                    {/* Epic */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "752px", top: "214px", width: "100px" }}>
                      <span style={{ position: "relative", display: "block", width: "84px", height: "46px" }}>
                        <span style={{ position: "absolute", left: "0", top: "0", width: "72px", height: "34px", background: view.orange }} />
                        {" "}
                        <span style={{ position: "absolute", left: "5px", top: "5px", width: "72px", height: "34px", background: view.blue }} />
                        {" "}
                        <span style={{ position: "absolute", left: "10px", top: "10px", width: "72px", height: "34px", background: view.navy, color: "#FFFFFF", fontSize: "16px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          Epic
                        </span>
                      </span>
                    </button>
                    <div style={{ position: "absolute", left: "852px", top: "246px", width: "30px", height: "2px", background: "#B8C2D1" }} />
                    {/* Value Streams */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "1150px", top: "128px", width: "160px", fontSize: "15px", fontWeight: "600" }}>
                      Value Streams
                    </button>
                    <div style={{ position: "absolute", left: "890px", top: "184px", width: "520px", height: "76px", background: view.shadeA, clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%, 40px 50%)", pointerEvents: "none" }} />
                    <button disabled tabIndex="-1" className="hit" style={{ left: "890px", top: "172px", width: "520px", height: "76px", padding: "0", borderRadius: "0", background: view.tintA, clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%, 40px 50%)" }} aria-label="Value stream – business">
                      <span style={{ position: "absolute", left: "120px", top: "33px", width: "340px", height: "10px", borderRadius: "5px", background: view.blue, boxShadow: `0 3px 0 color-mix(in srgb, ${view.blue ?? ''} 65%, #000000)` }} />
                    </button>
                    <div style={{ position: "absolute", left: "960px", top: "272px", width: "530px", height: "120px", background: view.shadeB, clipPath: "polygon(0 0, calc(100% - 46px) 0, 100% 50%, calc(100% - 46px) 100%, 0 100%, 46px 50%)", pointerEvents: "none" }} />
                    <button disabled tabIndex="-1" className="hit" style={{ left: "960px", top: "258px", width: "530px", height: "120px", padding: "0", borderRadius: "0", background: view.tintB, clipPath: "polygon(0 0, calc(100% - 46px) 0, 100% 50%, calc(100% - 46px) 100%, 0 100%, 46px 50%)" }} aria-label="Value stream – platforms">
                      <span style={{ position: "absolute", left: "120px", top: "20px", width: "330px", height: "10px", borderRadius: "5px", background: view.blue, boxShadow: `0 3px 0 color-mix(in srgb, ${view.blue ?? ''} 65%, #000000)` }} />
                      {" "}
                      <span style={{ position: "absolute", left: "120px", top: "42px", width: "330px", height: "10px", borderRadius: "5px", background: view.blue, boxShadow: `0 3px 0 color-mix(in srgb, ${view.blue ?? ''} 65%, #000000)` }} />
                      {" "}
                      <span style={{ position: "absolute", left: "120px", top: "76px", width: "330px", height: "3px", background: view.cyan }} />
                      {" "}
                      <span style={{ position: "absolute", left: "120px", top: "86px", width: "330px", height: "3px", background: view.cyan }} />
                      {" "}
                      <span style={{ position: "absolute", left: "245px", top: "70px", padding: "0 8px", background: view.tintB, fontSize: "15px", fontWeight: "600" }}>
                        Platforms
                      </span>
                    </button>
                    {/* ROI */}
                    <button disabled tabIndex="-1" className="hit" style={{ left: "1420px", top: "150px", width: "130px" }}>
                      <svg width="44" height="48" viewBox="0 0 44 48" aria-hidden="true">
                        <path d="M22 2 42 12 22 22 2 12z" fill={view.orange} />
                        <path d="M2 12l20 10v24L2 36z" fill={view.cyan} />
                        <path d="M42 12 22 22v24l20-10z" fill={view.green} />
                      </svg>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "600" }}>
                        Return on
                        <br />
                        Investment (ROI)
                      </span>
                    </button>
                    {view.ai ? (
                      <>
                        <svg style={{ position: "absolute", left: "1488px", top: "290px" }} width="58" height="62" viewBox="0 0 44 48" aria-hidden="true">
                          <path d="M22 2 42 12 22 22 2 12z" fill={view.orange} />
                          <path d="M2 12l20 10v24L2 36z" fill={view.cyan} />
                          <path d="M42 12 22 22v24l20-10z" fill={view.green} />
                        </svg>
                      </>
                    ) : null}
                    {/* AI Governance */}
                    {view.ai ? (
                      <>
                        <div style={{ position: "absolute", left: "900px", top: "392px", width: "580px", height: "16px", border: "2px solid #B8C2D1", borderTop: "0" }} />
                        <button disabled tabIndex="-1" className="hit" style={{ left: "1060px", top: "392px", width: "260px", background: "#FFFFFF", fontSize: "15px", fontWeight: "600" }}>
                          AI Governance and Ethics
                        </button>
                      </>
                    ) : null}
                  </div>
                  <button style={{ position: "absolute", right: "52px", top: "120px", minHeight: "40px", padding: "0 16px", display: "flex", alignItems: "center", gap: "8px", border: "1.5px solid #D5DBE5", borderRadius: "20px", background: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "#1B2A5C" }} onClick={view.togglePf} aria-expanded="true">
                    Portfolio-niveau inklappen{" "}
                    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 10l5-5 5 5" fill="none" stroke="#1B2A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              ) : null}
              {view.pfClosed ? (
                <>
                  <button style={{ position: "absolute", left: "42px", top: "112px", width: "1516px", height: "52px", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", border: "0", borderBottom: "1px solid #E1E6EE", borderRadius: "12px 12px 0 0", background: "#F4F6FA", cursor: "pointer", fontFamily: "inherit", color: "#1B2A5C" }} onClick={view.togglePf} aria-expanded="false">
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "700" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                        <g fill="#8A94A6">
                          <circle cx="5" cy="5" r="2.5" />
                          <circle cx="12" cy="5" r="2.5" />
                          <circle cx="19" cy="5" r="2.5" />
                          <circle cx="5" cy="12" r="2.5" />
                          <circle cx="12" cy="12" r="2.5" />
                          <circle cx="5" cy="19" r="2.5" />
                        </g>
                      </svg>
                      {" "}Portfolio-niveau{" "}
                      <span style={{ fontWeight: "500", color: "#5A6478" }}>· strategie, portfolio backlog, value streams en investeringen</span>
                    </span>
                    {" "}
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                      Uitklappen{" "}
                      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M3 6l5 5 5-5" fill="none" stroke="#1B2A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </>
              ) : null}
              {/* Alles onder het portfolio schuift mee */}
              <div className={view.ai ? "shift ai-low" : "shift"} style={{ position: "absolute", left: "0", top: `${view.shiftY ?? ''}px`, width: "1600px", height: "1260px", pointerEvents: "none" }}>
                {/* Portfolio / ART divider */}
                <div style={{ position: "absolute", left: "42px", top: "470px", width: "1516px", height: "2px", background: "#D5DBE5" }} />
                <div style={{ position: "absolute", left: "540px", top: "440px", width: "820px", height: "70px", border: "2px solid #D5DBE5", borderBottom: "0", borderRadius: "40px 40px 0 0", background: "#FFFFFF", boxSizing: "border-box" }} />
                {/* Business Owners */}
                <button className="hit" style={{ left: "260px", top: "420px", width: "120px", background: "#FFFFFF" }} onClick={view.open.owners}>
                  <span style={{ display: "flex", gap: "2px" }}>
                    <svg width="24" height="30" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.blue} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                    </svg>
                    {" "}
                    <svg width="24" height="30" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.navy} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>
                    Business
                    <br />
                    Owners
                  </span>
                </button>
                {/* ART bar */}
                <button className="hit" style={{ left: "580px", top: "470px", width: "760px", height: "34px", padding: "0 20px", borderRadius: "17px", background: view.blue, boxShadow: `0 3px 0 color-mix(in srgb, ${view.blue ?? ''} 65%, #000000)`, color: "#FFFFFF", flexDirection: "row", justifyContent: "flex-end", fontSize: "15px", fontWeight: "600" }} onClick={view.open.art}>
                  {view.ai ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M8 2l1.6 4.4L14 8l-4.4 1.6L8 14l-1.6-4.4L2 8l4.4-1.6z" fill="#FFFFFF" />
                      </svg>
                    </>
                  ) : null}
                  {" "}{view.t.art}
                </button>
                {/* AI-Native: Continuous Flow in plaats van het VPT */}
                {view.ai ? (
                  <>
                    <button className="hit" style={{ left: "488px", top: "510px", width: "196px", flexDirection: "row", gap: "10px", textAlign: "left" }} onClick={view.open.cflow}>
                      <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
                        <circle cx="23" cy="23" r="21" fill="#FFFFFF" stroke={view.cflow.purple} strokeWidth="2" />
                        <g className="cf-icon" style={{ animationPlayState: view.bpPlay }}>
                          <path d="M35 23a12 12 0 0 1-12 12M11 23a12 12 0 0 1 12-12" fill="none" stroke={view.cflow.purple} strokeWidth="3" strokeLinecap="round" />
                          <path d="M23 7l4 4-4 4M23 31l-4 4 4 4" fill="none" stroke={view.cflow.purple} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <circle cx="23" cy="23" r="4" fill={view.orange} />
                      </svg>
                      {" "}
                      <span style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "600", lineHeight: "1.25" }}>
                        Continuous
                        <span>Flow</span>
                      </span>
                    </button>
                  </>
                ) : null}
                {/* VPT / Feature Kanban (onder de ART), alleen Basis EDSN */}
                {view.coreOn ? (
                  <>
                    <button className="hit" style={{ left: "488px", top: "510px", width: "196px", flexDirection: "row", gap: "10px", textAlign: "left" }} onClick={view.open.vpt}>
                      <svg width="46" height="38" viewBox="0 0 46 38" aria-hidden="true">
                        <rect x="1" y="1" width="44" height="36" rx="5" fill="#FFFFFF" stroke={view.navy} strokeWidth="2" />
                        <path d="M12 6v26M23 6v26M34 6v26" stroke="#D5DBE5" strokeWidth="1.5" />
                        <rect x="4" y="7" width="6" height="5" rx="1" fill={view.navy} />
                        <rect x="4" y="14" width="6" height="5" rx="1" fill={view.navy} />
                        <rect x="14.5" y="7" width="6" height="5" rx="1" fill={view.blue} />
                        <rect x="14.5" y="14" width="6" height="5" rx="1" fill={view.blue} />
                        <rect x="14.5" y="21" width="6" height="5" rx="1" fill={view.blue} />
                        <rect x="25.5" y="7" width="6" height="5" rx="1" fill={view.orange} />
                        <rect x="36.5" y="7" width="6" height="5" rx="1" fill={view.green} />
                        <rect x="36.5" y="14" width="6" height="5" rx="1" fill={view.green} />
                      </svg>
                      {" "}
                      <span style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "600", lineHeight: "1.25" }}>
                        VPT /
                        <span>Feature Kanban</span>
                      </span>
                    </button>
                  </>
                ) : null}
                {/* Tactisch vierkant (T4K): PM · SA · RTE · PD samengevoegd */}
                <button className="hit" style={{ left: "680px", top: "424px", width: "240px" }} onClick={view.open.t4k} aria-label="Tactisch vierkant (T4K): Product Manager, System Architect, Release Train Engineer en People Developer">
                  <span style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3px", width: "84px", height: "84px", padding: "3px", boxSizing: "border-box", borderRadius: "14px", background: "#FFFFFF", border: "2px solid #D5DBE5" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px 3px 3px 3px", background: "#0E5F96", color: "#FFFFFF", fontSize: "14px", fontWeight: "700" }}>
                      PM
                    </span>
                    {" "}
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px 10px 3px 3px", background: "#00807E", color: "#FFFFFF", fontSize: "14px", fontWeight: "700" }}>
                      SA
                    </span>
                    {" "}
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px 3px 3px 10px", background: "#3B7898", color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                      RTE
                    </span>
                    {" "}
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px 3px 10px 3px", background: "#A9BC2B", color: "#1F2604", fontSize: "14px", fontWeight: "700" }}>
                      PD
                    </span>
                    {view.ai ? (
                      <>
                        <svg style={{ position: "absolute", right: "-9px", top: "-9px" }} width="26" height="26" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M8 2l1.6 4.4L14 8l-4.4 1.6L8 14l-1.6-4.4L2 8l4.4-1.6zM15 12l.8 2.2L18 15l-2.2.8L15 18l-.8-2.2L12 15l2.2-.8z" fill={view.orange} />
                        </svg>
                      </>
                    ) : null}
                  </span>
                  {" "}
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>Tactisch vierkant (T4K)</span>
                  {" "}
                  <span style={{ fontSize: "13px", color: "#3E4A63" }}>PM · SA · RTE · PD</span>
                </button>
                {/* Vision + ART Outcomes */}
                <button className="hit" style={{ left: "66px", top: "560px", width: "100px" }} onClick={view.open.vision}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>Vision</span>
                  {" "}
                  <svg width="64" height="40" viewBox="0 0 64 40" aria-hidden="true">
                    <circle cx="16" cy="26" r="11" fill="none" stroke={view.navy} strokeWidth="5" />
                    <circle cx="48" cy="26" r="11" fill="none" stroke={view.navy} strokeWidth="5" />
                    <path d="M27 24h10M10 15l6-12h8l3 10M54 15l-6-12h-8l-3 10" fill={view.navy} stroke={view.navy} strokeWidth="3" />
                  </svg>
                </button>
                {" "}
                <button className="hit" style={{ left: "170px", top: "540px", width: "110px" }} onClick={view.open.artoutcomes}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>{view.t.artOutcomes}</span>
                  {" "}
                  <svg width="58" height="58" viewBox="0 0 58 58" aria-hidden="true">
                    <circle cx="26" cy="32" r="22" fill="none" stroke={view.cyan} strokeWidth="4" />
                    <circle cx="26" cy="32" r="14" fill="none" stroke={view.cyan} strokeWidth="4" />
                    <circle cx="26" cy="32" r="6" fill={view.cyan} />
                    <path d="M26 32 50 8" stroke={view.orange} strokeWidth="4" />
                    <path d="M44 6l8-4-2 8z" fill={view.orange} />
                  </svg>
                </button>
                <div style={{ position: "absolute", left: "114px", top: "650px", width: "2px", height: "70px", background: "#B8C2D1" }} />
                {/* Intent, Specs, Context */}
                <button className="hit" style={{ left: "50px", top: "724px", width: "200px" }} onClick={view.open.intent}>
                  <svg width="56" height="64" viewBox="0 0 56 64" aria-hidden="true">
                    <ellipse cx="28" cy="10" rx="24" ry="8" fill={view.orange} />
                    <path d="M4 10v14c0 4 11 8 24 8s24-4 24-8V10c0 4-11 8-24 8S4 14 4 10z" fill={view.cyan} />
                    <path d="M4 26v14c0 4 11 8 24 8s24-4 24-8V26c0 4-11 8-24 8S4 30 4 26z" fill={view.blue} />
                    <path d="M4 42v12c0 4 11 8 24 8s24-4 24-8V42c0 4-11 8-24 8S4 46 4 42z" fill={view.navy} />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>{view.t.intent}</span>
                </button>
                <div style={{ position: "absolute", left: "256px", top: "765px", width: "212px", height: "2px", background: "#B8C2D1" }} />
                {/* Roadmap */}
                <button className="hit" style={{ left: "273px", top: "668px", width: "110px", position: "absolute" }} onClick={view.open.roadmap}>
                  <svg width="54" height="42" viewBox="0 0 54 42" aria-hidden="true">
                    <path d="M2 6l16-4 18 6 16-4v32l-16 4-18-6-16 4z" fill="none" stroke={view.cyan} strokeWidth="3" strokeLinejoin="round" />
                    <path d="M18 2v32M36 8v32" stroke={view.cyan} strokeWidth="3" />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>Roadmap</span>
                </button>
                {/* Curated Data */}
                {view.ai ? (
                  <>
                    <button className="hit" style={{ left: "251px", top: "802px", width: "140px", position: "absolute" }} onClick={view.open.data}>
                      <svg width="48" height="52" viewBox="0 0 48 52" aria-hidden="true">
                        <path d="M14 4l5 8H9z" fill={view.blue} />
                        <circle cx="28" cy="8" r="4" fill={view.cyan} />
                        <rect x="34" y="10" width="7" height="7" fill={view.orange} />
                        <path d="M4 22h40l-14 14v12l-12 4V36z" fill={view.cyan} />
                      </svg>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "600" }}>Curated Data</span>
                    </button>
                  </>
                ) : null}
                {/* ===== 3D slab (ART-vloer) ===== */}
                <div style={{ position: "absolute", left: "430px", top: "640px", width: "1110px", height: `${view.slabH}px`, pointerEvents: "none", WebkitMaskImage: "linear-gradient(90deg, #000 80%, transparent 100%)", maskImage: "linear-gradient(90deg, #000 80%, transparent 100%)" }}>
                  <div style={{ position: "absolute", inset: "0", background: "#BCC6D4", clipPath: `polygon(0 0, 148px ${view.slabH - 30}px, 148px ${view.slabH}px, 0 30px)` }} />
                  <div style={{ position: "absolute", inset: "0", background: "repeating-linear-gradient(65.2deg, transparent 0 196px, rgba(185,160,95,.55) 196px 198px), #EEF1F5", clipPath: `polygon(0 0, 100% 0, 100% ${view.slabH - 30}px, 148px ${view.slabH - 30}px)` }} />
                  <div style={{ position: "absolute", inset: "0", background: "#D3D9E2", clipPath: `polygon(148px ${view.slabH - 30}px, 100% ${view.slabH - 30}px, 100% ${view.slabH}px, 148px ${view.slabH}px)` }} />
                </div>
                {/* Engineering Enablement (per ART): gereedschapsbalk achter de teams · in Basis EDSN; in AI-Native EDSN staat hij onderin */}
                {view.coreOn ? (
                  <>
                    <button className="hit" style={{ left: "438px", top: "648px", width: "1102px", height: "34px", zIndex: "1", padding: "0 0 0 30px", borderRadius: "0", flexDirection: "row", justifyContent: "flex-start", gap: "8px", background: view.blue, color: "#FFFFFF", clipPath: "polygon(0 0, 100% 0, 100% 100%, 16px 100%)", WebkitMaskImage: "linear-gradient(90deg, #000 82%, transparent 100%)", maskImage: "linear-gradient(90deg, #000 82%, transparent 100%)", whiteSpace: "nowrap" }} onClick={view.open.ee} aria-label="Engineering Enablement">
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14.5 4.5a4.5 4.5 0 0 0-5.6 5.6L3.5 15.5l5 5 5.4-5.4a4.5 4.5 0 0 0 5.6-5.6l-2.8 2.8-3.4-.8-.8-3.4z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                      {" "}
                      <span style={{ fontSize: "14px", fontWeight: "700", marginRight: "14px" }}>Engineering Enablement</span>
                      {(view.eeChips || []).map((c, i) => (
                        <Fragment key={i}>
                          <span style={{ display: "flex", alignItems: "center", gap: "6px", height: "24px", padding: "0 11px 0 8px", borderRadius: "12px", background: "#FFFFFF", color: "#1B2A5C", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                              <path d={c.icon} fill="none" stroke={view.blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {" "}{c.label}
                          </span>
                        </Fragment>
                      ))}
                    </button>
                    {" "}
                    <svg style={{ position: "absolute", left: "556px", top: "630px" }} width="12" height="9" viewBox="0 0 14 10" aria-hidden="true">
                      <path d="M7 0 14 10H0z" fill={view.blue} />
                    </svg>
                    {" "}
                    <svg style={{ position: "absolute", left: "590px", top: "630px" }} width="12" height="9" viewBox="0 0 14 10" aria-hidden="true">
                      <path d="M7 0 14 10H0z" fill={view.blue} />
                    </svg>
                    {" "}
                    <svg style={{ position: "absolute", left: "624px", top: "630px" }} width="12" height="9" viewBox="0 0 14 10" aria-hidden="true">
                      <path d="M7 0 14 10H0z" fill={view.blue} />
                    </svg>
                  </>
                ) : null}
                {/* ART Development & Enablement: runway met rood lijntje langs de voorrand */}
                <button className="low hit" style={{ left: "568px", top: "910px", width: "972px", height: "46px", padding: "0", borderRadius: "0", background: "none" }} onClick={view.open.ade} aria-label="ART Development & Enablement">
                  <span style={{ position: "absolute", left: "22px", top: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap" }}>
                    {"ART Development & Enablement"}{" "}
                    <span style={{ fontWeight: "500", color: "#3E4A63" }}>
                      {"· people runway · run & beheer"}
                    </span>
                  </span>
                  {" "}
                  <svg style={{ position: "absolute", left: "4px", top: "22px", WebkitMaskImage: "linear-gradient(90deg, #000 82%, transparent 100%)", maskImage: "linear-gradient(90deg, #000 82%, transparent 100%)" }} width="968" height="22" viewBox="0 0 968 22" aria-hidden="true">
                    <path d="M0 11H968" stroke="#E3E7EE" strokeWidth="20" strokeLinecap="round" />
                    <path d="M0 2 L48 20 L97 5 L145 18 L194 1 L242 21 L290 7 L339 16 L387 3 L436 19 L484 6 L532 20 L581 2 L629 17 L678 8 L726 21 L774 4 L823 18 L871 1 L920 20 L968 6" fill="none" stroke="#C8102E" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </button>
                {/* IT Foundation (ITF): sokkel onder de ART */}
                <button className="low" style={{ position: "absolute", left: "300px", top: "1036px", width: "1240px", height: "104px", padding: "0", border: "0", background: "none", cursor: "pointer", fontFamily: "inherit" }} onClick={view.open.itf} aria-label="IT Foundation (ITF)">
                  <span style={{ position: "absolute", inset: "0", background: `color-mix(in srgb, ${view.navy ?? ''} 55%, #FFFFFF)`, clipPath: "polygon(0 0, 100% 0, 100% 18px, 18px 18px)" }} />
                  {" "}
                  <span style={{ position: "absolute", inset: "0", background: `color-mix(in srgb, ${view.navy ?? ''} 70%, #000000)`, clipPath: "polygon(0 0, 18px 18px, 18px 104px, 0 86px)" }} />
                  {" "}
                  <span style={{ position: "absolute", left: "18px", top: "18px", right: "0", bottom: "0", background: view.navy, WebkitMaskImage: "linear-gradient(90deg, #000 85%, rgba(0,0,0,.25) 100%)", maskImage: "linear-gradient(90deg, #000 85%, rgba(0,0,0,.25) 100%)" }} />
                  {" "}
                  <span style={{ position: "absolute", left: "40px", top: "34px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", color: "#FFFFFF", textAlign: "left" }}>
                    <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "2px" }}>IT FOUNDATION</span>
                    {" "}
                    <span style={{ fontSize: "13px", fontWeight: "500", color: "#CFD8EA" }}>ITF · bouwblokken voor elke ART</span>
                  </span>
                  {" "}
                  <span style={{ position: "absolute", left: "270px", top: "30px", display: "flex", gap: "10px" }}>
                    {(view.itf || []).map((b, i) => (
                      <Fragment key={i}>
                        <span style={css(b.tile)}>
                          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={b.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {" "}{b.label}
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </button>
                {/* Teams (achter op de vloer) */}
                <button className="hit" style={{ left: "520px", top: "566px", width: "150px" }} onClick={view.open.teams}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>{view.t.teams}</span>
                  {" "}
                  <span style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
                    <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.navy} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                    </svg>
                    {view.ai ? (
                      <>
                        <svg width="24" height="24" viewBox="0 0 22 22" aria-hidden="true">
                          <rect x="3" y="6" width="16" height="12" rx="3" fill={view.cyan} />
                          <circle cx="8" cy="12" r="1.8" fill="#FFFFFF" />
                          <circle cx="14" cy="12" r="1.8" fill="#FFFFFF" />
                          <path d="M11 6V2" stroke={view.cyan} strokeWidth="2" />
                          <circle cx="11" cy="2" r="1.5" fill={view.cyan} />
                        </svg>
                      </>
                    ) : null}
                    <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.blue} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                    </svg>
                    {" "}
                    <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.navy} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                    </svg>
                  </span>
                </button>
                {/* Team Outcomes */}
                <button className="hit" style={{ left: "700px", top: "566px", width: "130px" }} onClick={view.open.teamoutcomes}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>{view.t.teamOutcomes}</span>
                  {" "}
                  <svg width="40" height="40" viewBox="0 0 58 58" aria-hidden="true">
                    <circle cx="26" cy="32" r="22" fill="none" stroke={view.cyan} strokeWidth="4" />
                    <circle cx="26" cy="32" r="12" fill="none" stroke={view.cyan} strokeWidth="4" />
                    <circle cx="26" cy="32" r="5" fill={view.cyan} />
                    <path d="M26 32 50 8" stroke={view.orange} strokeWidth="4" />
                    <path d="M44 6l8-4-2 8z" fill={view.orange} />
                  </svg>
                </button>
                {/* Story points (Basis EDSN) */}
                {view.coreOn ? (
                  <>
                    <button className="hit" style={{ left: "850px", top: "566px", width: "130px" }} onClick={view.open.sp}>
                      <span style={{ fontSize: "15px", fontWeight: "600" }}>Story points</span>
                      {" "}
                      <svg width="48" height="40" viewBox="0 0 48 40" aria-hidden="true">
                        <rect x="4" y="8" width="20" height="28" rx="3" transform="rotate(-14 14 22)" fill="#FFFFFF" stroke={view.blue} strokeWidth="2" />
                        <rect x="14" y="5" width="20" height="28" rx="3" fill="#FFFFFF" stroke={view.navy} strokeWidth="2" />
                        <rect x="24" y="8" width="20" height="28" rx="3" transform="rotate(14 34 22)" fill={view.orange} />
                        <text x="34" y="27" textAnchor="middle" transform="rotate(14 34 22)" fontFamily="Poppins, sans-serif" fontSize="13" fontWeight="700" fill="#2B1A00">
                          5
                        </text>
                        <text x="24" y="23" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" fill={view.navy}>3</text>
                      </svg>
                    </button>
                  </>
                ) : null}
                {/* Value line + release points */}
                <svg style={{ position: "absolute", left: "990px", top: "515px" }} width="490" height="130" viewBox="0 0 490 130" aria-hidden="true">
                  <path d="M0 125 150 110 300 90 468 12" fill="none" stroke={view.green} strokeWidth="3" />
                  <path d="M450 10l20-2-8 18" fill="none" stroke={view.green} strokeWidth="3" />
                </svg>
                {" "}
                <button className="hit" style={{ left: "1030px", top: "510px", width: "260px", fontSize: "15px", fontWeight: "600" }} onClick={view.open.value}>
                  Customer and Business Value
                </button>
                <div style={{ position: "absolute", left: "1037px", top: "632px", width: "6px", height: "108px", borderRadius: "3px", background: view.blue, opacity: ".85" }} />
                <svg style={{ position: "absolute", left: "1030px", top: "624px" }} width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
                  <path d="M10 0 20 14H0z" fill={view.blue} />
                </svg>
                {" "}
                <span className="rise" style={{ position: "absolute", left: "1034px", top: "728px", width: "12px", height: "12px", borderRadius: "50%", background: view.orange, animationDelay: "0s", animationPlayState: view.bpPlay }} />
                {" "}
                <svg style={{ position: "absolute", left: "1024px", top: "596px" }} width="32" height="34" viewBox="0 0 44 48" aria-hidden="true">
                  <path d="M22 2 42 12 22 22 2 12z" fill={view.orange} />
                  <path d="M2 12l20 10v24L2 36z" fill={view.cyan} />
                  <path d="M42 12 22 22v24l20-10z" fill={view.green} />
                </svg>
                <div style={{ position: "absolute", left: "1207px", top: "626px", width: "6px", height: "114px", borderRadius: "3px", background: view.blue, opacity: ".85" }} />
                <svg style={{ position: "absolute", left: "1200px", top: "618px" }} width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
                  <path d="M10 0 20 14H0z" fill={view.blue} />
                </svg>
                {" "}
                <span className="rise" style={{ position: "absolute", left: "1204px", top: "728px", width: "12px", height: "12px", borderRadius: "50%", background: view.orange, animationDelay: "-.8s", animationPlayState: view.bpPlay }} />
                {" "}
                <svg style={{ position: "absolute", left: "1188px", top: "578px" }} width="44" height="46" viewBox="0 0 44 48" aria-hidden="true">
                  <path d="M22 2 42 12 22 22 2 12z" fill={view.orange} />
                  <path d="M2 12l20 10v24L2 36z" fill={view.cyan} />
                  <path d="M42 12 22 22v24l20-10z" fill={view.green} />
                </svg>
                {" "}
                <button className="hit" style={{ left: "1088px", top: "578px", width: "104px", padding: "4px 8px", background: "#FFFFFF", borderRadius: "14px", border: "1.5px solid #D5DBE5", fontSize: "13px", fontWeight: "700" }} onClick={view.open.gtm}>
                  Go to Market
                </button>
                <div style={{ position: "absolute", left: "1377px", top: "604px", width: "6px", height: "136px", borderRadius: "3px", background: view.blue, opacity: ".85" }} />
                <svg style={{ position: "absolute", left: "1370px", top: "596px" }} width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
                  <path d="M10 0 20 14H0z" fill={view.blue} />
                </svg>
                {" "}
                <span className="rise" style={{ position: "absolute", left: "1374px", top: "728px", width: "12px", height: "12px", borderRadius: "50%", background: view.orange, animationDelay: "-1.6s", animationPlayState: view.bpPlay }} />
                {" "}
                <button className="hit" style={{ left: "1325px", top: "506px", width: "110px" }} onClick={view.open.products}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>Products and Solutions</span>
                  {" "}
                  <svg width="56" height="60" viewBox="0 0 44 48" aria-hidden="true">
                    <path d="M22 2 42 12 22 22 2 12z" fill={view.orange} />
                    <path d="M2 12l20 10v24L2 36z" fill={view.cyan} />
                    <path d="M42 12 22 22v24l20-10z" fill={view.green} />
                  </svg>
                </button>
                {" "}
                <button className="hit" style={{ left: "1462px", top: "536px", width: "90px" }} onClick={view.open.customer}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "62px", height: "62px", borderRadius: "50%", border: `3px solid ${view.green ?? ''}`, background: "#FFFFFF", boxSizing: "border-box" }}>
                    <svg width="26" height="32" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.navy} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>Customer</span>
                </button>
                {/* ===== Lopende band (pipeline) ===== */}
                <div className="rollers" style={{ position: "absolute", left: "499px", top: "790px", width: "1041px", height: "12px", background: `repeating-linear-gradient(90deg, ${view.shadeC ?? ''} 0 16px, color-mix(in srgb, ${view.shadeC ?? ''} 70%, #000000) 16px 20px)`, WebkitMaskImage: "linear-gradient(90deg, #000 78%, transparent 100%)", maskImage: "linear-gradient(90deg, #000 78%, transparent 100%)", pointerEvents: "none", animationPlayState: view.bpPlay }} />
                <button className="belt" style={{ position: "absolute", left: "476px", top: "740px", width: "1064px", height: "50px", padding: "0", border: "0", cursor: "pointer", clipPath: "polygon(0 0, 100% 0, 100% 100%, 23px 100%)", background: `repeating-linear-gradient(90deg, transparent 0 36px, rgba(27,42,92,.10) 36px 40px), ${view.tintC ?? ''}`, WebkitMaskImage: "linear-gradient(90deg, #000 78%, transparent 100%)", maskImage: "linear-gradient(90deg, #000 78%, transparent 100%)", animationPlayState: view.bpPlay }} aria-label={view.t.pipeline} onClick={view.open.pipeline} />
                {(view.steps || []).map((s, i) => (
                  <Fragment key={i}>
                    <span style={css(s.postStyle)} />
                  </Fragment>
                ))}
                {(view.chips || []).map((c, i) => (
                  <Fragment key={i}>
                    <span className="belt-item" style={css(c.style)}>{c.label}</span>
                  </Fragment>
                ))}
                {(view.steps || []).map((s, i) => (
                  <Fragment key={i}>
                    <button className="hit" style={css(s.tagStyle)} onClick={view.open.pipeline}>
                      <svg width="15" height="18" viewBox="0 0 22 26" aria-hidden="true">
                        <circle cx="11" cy="7" r="5" fill={view.navy} />
                        <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                      </svg>
                      {view.ai ? (
                        <>
                          <svg width="17" height="17" viewBox="0 0 22 22" aria-hidden="true">
                            <rect x="3" y="6" width="16" height="12" rx="3" fill={view.cyan} />
                            <circle cx="8" cy="12" r="1.8" fill="#FFFFFF" />
                            <circle cx="14" cy="12" r="1.8" fill="#FFFFFF" />
                            <path d="M11 6V2" stroke={view.cyan} strokeWidth="2" />
                            <circle cx="11" cy="2" r="1.5" fill={view.cyan} />
                          </svg>
                        </>
                      ) : null}
                      {" "}{s.label}
                    </button>
                  </Fragment>
                ))}
                <button className="hit" style={{ left: "790px", top: "792px", width: "380px", height: "30px", padding: "0", borderRadius: "15px", background: view.navy, color: "#FFFFFF", fontSize: "15px", fontWeight: "600", justifyContent: "center" }} onClick={view.open.pipeline}>
                  {view.t.pipeline}
                </button>
                {/* AI-Native EDSN: de vier lagen onder de AI Innovation Pipeline */}
                {view.ai ? (
                  <>
                    {(view.aiLayers || []).map((ly, i) => (
                      <Fragment key={ly.key}>
                        <button className="ai-layer" onClick={ly.open} aria-label={ly.title} style={{ position: "absolute", left: `${522 + i * 12}px`, top: `${834 + i * 29}px`, width: `${1018 - i * 12}px`, height: "25px", padding: "0", border: "0", cursor: "pointer", fontFamily: "inherit", background: ly.bg, color: "#2A1650", clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)", WebkitMaskImage: "linear-gradient(90deg, #000 82%, transparent 100%)", maskImage: "linear-gradient(90deg, #000 82%, transparent 100%)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "700" }}>{ly.title}</span>
                          <span style={{ fontSize: "11px", fontWeight: "500", color: "#5A4A7A" }}>· {ly.nl}</span>
                        </button>
                      </Fragment>
                    ))}
                    {/* Engineering Enablement als knop onderin */}
                    <button className="hit low" onClick={view.open.ee} style={{ left: "60px", top: "1036px", width: "222px", height: "104px", padding: "12px 14px", boxSizing: "border-box", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "12px", textAlign: "left", background: "#FFFFFF", border: `2px solid ${view.blue ?? ''}`, borderRadius: "14px" }}>
                      <span style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", borderRadius: "14px", background: view.blue }}>
                        <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M19 6.5a5.5 5.5 0 0 0-6.9 6.9L5 20.5l4.5 4.5 7.1-7.1a5.5 5.5 0 0 0 6.9-6.9l-3.4 3.4-4-1-1-4z" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinejoin="round" />
                          <path d="M22 21l-3 3 3 3M27 21l3 3-3 3" fill="none" stroke="#F39200" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "700", lineHeight: "1.2" }}>Engineering Enablement</span>
                        <span style={{ fontSize: "11px", fontWeight: "500", color: "#5A6478", lineHeight: "1.3" }}>tooling · pipelines · standaarden</span>
                      </span>
                    </button>
                  </>
                ) : null}
                {/* Voorkant van de vloer: teamsamenstelling, coaches, iteraties */}
                {view.ai ? (
                  <>
                    <button className="low hit" style={{ left: "560px", top: "826px", width: "300px" }} onClick={view.open.team}>
                      <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600" }}>
                        Product{" "}
                        <svg width="20" height="24" viewBox="0 0 22 26" aria-hidden="true">
                          <circle cx="11" cy="7" r="5" fill={view.navy} />
                          <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                        </svg>
                        {" "}
                        <svg width="24" height="24" viewBox="0 0 22 22" aria-hidden="true">
                          <rect x="3" y="6" width="16" height="12" rx="3" fill={view.cyan} />
                          <circle cx="8" cy="12" r="1.8" fill="#FFFFFF" />
                          <circle cx="14" cy="12" r="1.8" fill="#FFFFFF" />
                          <path d="M11 6V2" stroke={view.cyan} strokeWidth="2" />
                          <circle cx="11" cy="2" r="1.5" fill={view.cyan} />
                        </svg>
                        {" "}
                        <svg width="20" height="24" viewBox="0 0 22 26" aria-hidden="true">
                          <circle cx="11" cy="7" r="5" fill={view.blue} />
                          <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                        </svg>
                        {" "}Builder(s)
                      </span>
                      {" "}
                      <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
                        <svg width="20" height="24" viewBox="0 0 22 26" aria-hidden="true">
                          <circle cx="11" cy="7" r="5" fill={view.navy} />
                          <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.navy} />
                        </svg>
                        {" "}Domain Expert
                      </span>
                    </button>
                  </>
                ) : null}
                <button className="low hit" style={{ left: "880px", top: "830px", width: "290px", flexDirection: "row", gap: "10px", textAlign: "left" }} onClick={view.open.architects}>
                  <span style={{ display: "flex", gap: "1px" }}>
                    <svg width="22" height="27" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.blue} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                    </svg>
                    {" "}
                    <svg width="22" height="27" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.blue} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                    </svg>
                    {" "}
                    <svg width="22" height="27" viewBox="0 0 22 26" aria-hidden="true">
                      <circle cx="11" cy="7" r="5" fill={view.blue} />
                      <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={view.blue} />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "600" }}>
                    {view.t.architects}
                    <span style={{ fontWeight: "400", fontSize: "13px", color: "#3E4A63" }}>{view.t.architectsSub}</span>
                  </span>
                </button>
                {" "}
                <button className="low hit" style={{ left: "1200px", top: "840px", width: "110px", fontSize: "14px", fontWeight: "600", color: "#5A6478" }} onClick={view.open.workitems}>
                  Iterations
                </button>
                {/* PI-cadans op de voorkant */}
                <button className="low hit" style={{ left: "600px", top: "958px", width: "170px", padding: "0 6px 4px" }} onClick={view.open.pi}>
                  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                    <circle cx="15" cy="15" r="13" fill="#FFF1DA" stroke={view.orange} strokeWidth="2.5" />
                    <path d="M12 9.5v11l8.5-5.5z" fill={view.navy} />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>{view.t.pi}</span>
                </button>
                {" "}
                <button className="low hit" style={{ left: "860px", top: "958px", width: "250px", padding: "0 6px 4px" }} onClick={view.open.sense}>
                  <span style={{ display: "flex", gap: "40px" }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                      <circle cx="15" cy="15" r="13" fill="#FFF1DA" stroke={view.orange} strokeWidth="2.5" />
                      <path d="M6 15h5l2-5 4 10 2-5h5" fill="none" stroke={view.navy} strokeWidth="2" />
                    </svg>
                    {" "}
                    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                      <circle cx="15" cy="15" r="13" fill="#FFF1DA" stroke={view.orange} strokeWidth="2.5" />
                      <path d="M6 15h5l2-5 4 10 2-5h5" fill="none" stroke={view.navy} strokeWidth="2" />
                    </svg>
                    {" "}
                    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                      <circle cx="15" cy="15" r="13" fill="#FFF1DA" stroke={view.orange} strokeWidth="2.5" />
                      <path d="M6 15h5l2-5 4 10 2-5h5" fill="none" stroke={view.navy} strokeWidth="2" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>{view.t.sense}</span>
                </button>
                {" "}
                <button className="low hit" style={{ left: "1150px", top: "958px", width: "170px", padding: "0 6px 4px" }} onClick={view.open.pi}>
                  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                    <circle cx="15" cy="15" r="13" fill="#FFF1DA" stroke={view.orange} strokeWidth="2.5" />
                    <path d="M12 9.5v11l8.5-5.5z" fill={view.navy} />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>{view.t.pi}</span>
                </button>
                {" "}
                <button className="low hit" style={{ left: "1340px", top: "1002px", width: "200px", flexDirection: "row", gap: "8px", padding: "4px 6px" }} onClick={view.open.pioutcomes}>
                  <svg width="20" height="20" viewBox="0 0 22 22" aria-hidden="true">
                    <circle cx="11" cy="11" r="9" fill="#FFFFFF" stroke={view.cyan} strokeWidth="2" />
                    <path d="M6.5 11l3 3 6-6" fill="none" stroke={view.cyan} strokeWidth="2" />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>{view.t.piOutcomes}</span>
                  {" "}
                  <span style={{ padding: "1px 10px", borderRadius: "10px", background: "#FFF1DA", border: `1.5px solid ${view.orange ?? ''}`, fontSize: "12px", fontWeight: "700" }}>
                    PI
                  </span>
                </button>
                {/* Footer */}
                <div className="low" style={{ position: "absolute", left: "60px", top: "1160px", width: "1480px", height: "76px", background: view.navy, borderRadius: "0 0 10px 10px", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px", padding: "0 16px", boxSizing: "border-box" }}>
                  {(view.footer || []).map((f, i) => (
                    <Fragment key={i}>
                      <button style={{ background: "none", border: "0", cursor: "pointer", color: "#FFFFFF", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", lineHeight: "1.25", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", textAlign: "left", borderRadius: "8px" }} onClick={f.pick}>
                        <span style={{ display: "flex", width: "32px", height: "32px", borderRadius: "50%", background: f.dot, flexShrink: "0" }} />
                        {" "}{f.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
                <span className="low" style={{ position: "absolute", left: "60px", top: "1244px", fontSize: "11px", color: "#5A6478" }}>
                  Klik op een onderdeel om de pagina te openen · gebaseerd op SAFe® van Scaled Agile, Inc.
                </span>
                {" "}
                <button className="low lace-egg" style={{ position: "absolute", left: "1520px", top: "1232px", width: "30px", height: "30px", padding: "0", border: "0", background: "none", cursor: "pointer" }} onClick={view.openLace} aria-label="Verrassing van het LACE">
                  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                    <path d="M2 8l9 3M2 15l9-2M28 8l-9 3M28 15l-9-2" stroke="#F39200" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 9h6l2 19H10z" fill="#1B2A5C" />
                    <path d="M11.4 15h7.2l.4 4h-8zM10.8 22h8.4l.3 3h-9z" fill="#FFFFFF" />
                    <path d="M11 6h8v3h-8z" fill="#F39200" />
                    <path d="M12 3h6l1 3h-8z" fill="#1B2A5C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
