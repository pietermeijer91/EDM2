/** Bovenbalk met logo, ARTie en nachtmodus. */
export default function Header({ view }) {
  return (
    <>
      <header style={{ height: "76px", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #E1E6EE", boxSizing: "border-box" }}>
        <button style={{ display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", padding: "0", cursor: "pointer", fontFamily: "inherit", color: "#1B2A5C" }} onClick={view.close} aria-label="EDSN Delivery Model – home">
          <span style={{ display: "grid", gridTemplateColumns: "repeat(2, 14px)", gap: "3px" }}>
            <span style={{ height: "14px", borderRadius: "4px 1px 1px 1px", background: "#0072BC" }} />
            <span style={{ height: "14px", borderRadius: "1px 4px 1px 1px", background: "#00A6D6" }} />
            {" "}
            <span style={{ height: "14px", borderRadius: "1px 1px 1px 4px", background: "#F39200" }} />
            <span style={{ height: "14px", borderRadius: "1px 1px 4px 1px", background: "#95C11F" }} />
          </span>
          {" "}
          <span style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "1px" }}>EDSN</span>
          {" "}
          <span style={{ width: "1px", height: "26px", background: "#D5DBE5" }} />
          {" "}
          <span style={{ fontSize: "17px", fontWeight: "500", color: "#3E4A63" }}>Delivery Model</span>
        </button>
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} aria-label="Acties">
          <button onClick={view.openArtie} style={{ border: "0", cursor: "pointer", fontFamily: "inherit", minHeight: "44px", padding: "0 20px", display: "flex", alignItems: "center", gap: "10px", borderRadius: "22px", background: "#6E44B8", color: "#FFFFFF", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5h16v11H9l-5 4z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="9" cy="10.5" r="1.3" fill="#FFFFFF" />
              <circle cx="15" cy="10.5" r="1.3" fill="#FFFFFF" />
            </svg>
            {" "}Vraag het ARTie
          </button>
          {" "}
          <button style={{ marginLeft: "10px", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1.5px solid #D5DBE5", background: "#FFFFFF", cursor: "pointer", padding: "0" }} onClick={view.toggleDark} aria-pressed={view.isDark} aria-label={view.darkLabel} title={view.darkLabel}>
            {view.notDark ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="#1B2A5C" /></svg>
              </>
            ) : null}
            {view.isDark ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#F39200" />
                  <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="#F39200" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </>
            ) : null}
          </button>
        </nav>
      </header>
    </>
  );
}
