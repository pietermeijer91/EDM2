import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor ee. */
export default function EngineeringEnablement({ view }) {
  return (
    <>
      {view.page.isEE ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <section id="golden-path" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
                Het golden path: van code naar productie
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Een golden path is de goed geplaveide, aanbevolen route van idee naar werkende software. Engineering Enablement zorgt dat elke stap klaarstaat, zodat engineers niet zelf het wiel hoeven uit te vinden.
              </p>
              <div style={{ padding: "24px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ position: "relative", height: "58px" }}>
                  <span style={{ position: "absolute", left: "0", right: "0", top: "27px", height: "4px", borderRadius: "2px", background: "#D5DBE5" }} />
                  {" "}
                  <span className="ee-tok" style={css(view.ee.tok)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}wijziging
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "10px" }}>
                  {(view.ee.path || []).map((st, i) => (
                    <Fragment key={i}>
                      <div className="ee-hi" style={css(st.box)}>
                        <span style={css(st.iconBox)}>
                          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={st.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {" "}
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{st.name}</span>
                        {" "}
                        <span style={{ fontSize: "12px", lineHeight: "1.45", color: "#3E4A63" }}>{st.ee}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
            <section id="diensten" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Wat Engineering Enablement levert</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                {(view.ee.services || []).map((sv, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "16px 18px", borderRadius: "12px", border: "1.5px solid #D5DBE5", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <span style={css(sv.iconBox)}>
                        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={sv.icon} fill="none" stroke={sv.fg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{sv.title}</span>
                        {" "}
                        <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>{sv.text}</span>
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="organisatie" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Teams, chapters en guilds</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Engineers werken in hun DevOps-team aan waarde. Daarnaast horen ze bij een{" "}
                <strong>chapter</strong>
                {" "}met vakgenoten (hetzelfde vak, verschillende teams) en kunnen ze aansluiten bij een{" "}
                <strong>guild</strong>
                : een open community rond een thema. Engineering Enablement faciliteert chapters en guilds.
              </p>
              <div style={{ padding: "22px 24px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "170px repeat(4, minmax(0, 1fr))", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#5A6478", textTransform: "uppercase", letterSpacing: "1px" }}>Chapter ↓ · Team →</span>
                  {(view.ee.teams || []).map((tm, i) => (
                    <Fragment key={i}>
                      <span style={css(tm.head)}>{tm.name}</span>
                    </Fragment>
                  ))}
                </div>
                {(view.ee.chapters || []).map((ch, i) => (
                  <Fragment key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "170px repeat(4, minmax(0, 1fr))", gap: "8px", alignItems: "center", padding: "6px 0", borderTop: "1px solid #DDE2EA" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{ch.name}</span>
                      {(ch.cells || []).map((cl, i) => (
                        <Fragment key={i}>
                          <span style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
                            {(cl.people || []).map((pp, i) => (
                              <Fragment key={i}>
                                <svg width="18" height="20" viewBox="0 0 22 26" aria-hidden="true">
                                  <circle cx="11" cy="7" r="5" fill={ch.color} />
                                  <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill={ch.color} />
                                </svg>
                              </Fragment>
                            ))}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
                {(view.ee.guilds || []).map((gd, i) => (
                  <Fragment key={i}>
                    <div style={css(gd.bar)}>
                      <span style={{ fontSize: "13px", fontWeight: "700" }}>
                        {"Guild · "}{gd.name}
                      </span>
                      {" "}
                      <span style={{ fontSize: "12px", fontWeight: "500" }}>{gd.text}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="metrics" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Meten wat ertoe doet</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Engineering Enablement stuurt op de bekende DORA-metrics voor levering en op developer experience (DevEx): hoe makkelijk is het voor een engineer om goed werk te leveren?
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "12px" }}>
                {(view.ee.metrics || []).map((mt, i) => (
                  <Fragment key={i}>
                    <div style={css(mt.box)}>
                      <span style={css(mt.tag)}>{mt.group}</span>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C", lineHeight: "1.3" }}>{mt.name}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{mt.text}</span>
                      {" "}
                      <span style={{ marginTop: "auto", fontSize: "12px", fontWeight: "700", color: mt.dirColor }}>{mt.dir}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="principes" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Engineeringprincipes</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {(view.ee.principles || []).map((pr, i) => (
                  <Fragment key={i}>
                    <span style={css(pr.pill)}>
                      <span style={css(pr.num)}>{pr.n}</span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{pr.title}</span>
                        <span style={{ fontSize: "13px", color: "#3E4A63" }}>{pr.text}</span>
                      </span>
                    </span>
                  </Fragment>
                ))}
              </div>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}
